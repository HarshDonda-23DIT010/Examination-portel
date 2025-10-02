import prisma from "../DB/db.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Upload marks for a single student
export const uploadStudentMarks = asyncHandler(async (req, res) => {
    const { examId, studentId, earnedMarks, yearId } = req.body;

    if (!examId || !studentId || earnedMarks === undefined) {
        throw new ApiError(400, "ExamId, studentId, and earnedMarks are required.");
    }

    // Get exam details to calculate effective marks
    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        select: { 
            id: true, 
            totalMarks: true, 
            effectiveMarks: true,
            yearId: true,
            eligibleStudents: {
                where: { id: studentId },
                select: { id: true }
            }
        }
    });

    if (!exam) {
        throw new ApiError(404, "Exam not found.");
    }

    if (exam.eligibleStudents.length === 0) {
        throw new ApiError(400, "Student is not eligible for this exam.");
    }

    // Handle absent students (marks = -1)
    let effectiveMarks;
    if (earnedMarks === -1) {
        // Student is absent
        effectiveMarks = -1;
    } else {
        // Validate marks for present students
        if (earnedMarks < 0 || earnedMarks > exam.totalMarks) {
            throw new ApiError(400, `Earned marks must be between 0 and ${exam.totalMarks}, or -1 for absent students.`);
        }
        // Calculate effective marks for present students
        effectiveMarks = Math.round((earnedMarks / exam.totalMarks) * exam.effectiveMarks);
    }

    // Check if marks already exist for this student-exam combination
    const existingMarks = await prisma.marks.findFirst({
        where: {
            examId,
            studentId
        }
    });

    let marks;
    if (existingMarks) {
        // Update existing marks
        marks = await prisma.marks.update({
            where: { id: existingMarks.id },
            data: {
                earnedMarks,
                effectiveMarks
            },
            include: {
                student: {
                    select: {
                        id: true,
                        studentId: true,
                        name: true,
                        email: true
                    }
                },
                exam: {
                    select: {
                        id: true,
                        name: true,
                        totalMarks: true,
                        effectiveMarks: true
                    }
                }
            }
        });
    } else {
        // Create new marks entry
        marks = await prisma.marks.create({
            data: {
                examId,
                studentId,
                earnedMarks,
                effectiveMarks,
                yearId: yearId || exam.yearId
            },
            include: {
                student: {
                    select: {
                        id: true,
                        studentId: true,
                        name: true,
                        email: true
                    }
                },
                exam: {
                    select: {
                        id: true,
                        name: true,
                        totalMarks: true,
                        effectiveMarks: true
                    }
                }
            }
        });
    }

    // Check and update exam status if all students have marks
    await checkAndUpdateExamStatus(examId);

    res.status(200).json(
        new ApiResponse(200, marks, "Marks uploaded successfully.")
    );
});

// Upload marks for multiple students (bulk upload)
export const uploadBulkMarks = asyncHandler(async (req, res) => {
    const { examId, marksData, overwriteExisting = false } = req.body;

    if (!examId || !Array.isArray(marksData) || marksData.length === 0) {
        throw new ApiError(400, "ExamId and marksData array are required.");
    }

    // Get exam details
    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        select: { 
            id: true, 
            totalMarks: true, 
            effectiveMarks: true,
            yearId: true,
            eligibleStudents: {
                select: { id: true, studentId: true, name: true }
            }
        }
    });

    if (!exam) {
        throw new ApiError(404, "Exam not found.");
    }

    // Get existing marks for this exam
    const existingMarks = await prisma.marks.findMany({
        where: { examId },
        select: { studentId: true, earnedMarks: true }
    });

    const existingMarksMap = new Map(existingMarks.map(mark => [mark.studentId, mark.earnedMarks]));
    const eligibleStudentIds = exam.eligibleStudents.map(s => s.id);
    const eligibleStudentNumbers = exam.eligibleStudents.map(s => s.studentId);
    
    const processedMarks = [];
    const errors = [];
    const skippedStudents = [];

    // Validate and process each marks entry
    for (const markEntry of marksData) {
        const { studentId, studentNumber, earnedMarks } = markEntry;
        
        // Find student by ID or student number
        let targetStudentId = studentId;
        if (!targetStudentId && studentNumber) {
            const student = exam.eligibleStudents.find(s => s.studentId === studentNumber);
            targetStudentId = student?.id;
        }

        // Validate student eligibility
        if (!targetStudentId || !eligibleStudentIds.includes(targetStudentId)) {
            errors.push(`Student ${studentNumber || studentId} is not eligible for this exam.`);
            continue;
        }

        // Check if marks already exist and skip if not overwriting
        if (existingMarksMap.has(targetStudentId) && !overwriteExisting) {
            skippedStudents.push({
                studentId: targetStudentId,
                studentNumber: studentNumber,
                existingMarks: existingMarksMap.get(targetStudentId)
            });
            continue;
        }

        // Validate marks
        if (earnedMarks === undefined || (earnedMarks !== -1 && (earnedMarks < 0 || isNaN(earnedMarks)))) {
            errors.push(`Invalid marks for student ${studentNumber || studentId}. Use -1 for absent students.`);
            continue;
        }

        // Handle absent students
        let effectiveMarks;
        if (earnedMarks === -1) {
            // Student is absent
            effectiveMarks = -1;
        } else {
            // Validate marks for present students
            if (earnedMarks > exam.totalMarks) {
                errors.push(`Marks ${earnedMarks} for student ${studentNumber || studentId} exceed total marks ${exam.totalMarks}.`);
                continue;
            }
            // Calculate effective marks for present students
            effectiveMarks = Math.round((earnedMarks / exam.totalMarks) * exam.effectiveMarks);
        }

        processedMarks.push({
            studentId: targetStudentId,
            earnedMarks,
            effectiveMarks,
            examId,
            yearId: exam.yearId
        });
    }

    const result = {
        uploadedCount: 0,
        skippedCount: skippedStudents.length,
        errors: errors.length > 0 ? errors : null,
        skippedStudents: skippedStudents.length > 0 ? skippedStudents : null,
        marks: []
    };

    if (processedMarks.length === 0 && skippedStudents.length === 0) {
        throw new ApiError(400, `No valid marks to upload. Errors: ${errors.join(', ')}`);
    }

    // Use transaction to upload all marks
    if (processedMarks.length > 0) {
        const uploadedMarks = await prisma.$transaction(async (tx) => {
            const results = [];
            
            for (const markData of processedMarks) {
                // Check if marks already exist
                const existingMarks = await tx.marks.findFirst({
                    where: {
                        examId: markData.examId,
                        studentId: markData.studentId
                    }
                });

                if (existingMarks) {
                    // Update existing marks
                    const updated = await tx.marks.update({
                        where: { id: existingMarks.id },
                        data: {
                            earnedMarks: markData.earnedMarks,
                            effectiveMarks: markData.effectiveMarks
                        }
                    });
                    results.push(updated);
                } else {
                    // Create new marks
                    const created = await tx.marks.create({
                        data: markData
                    });
                    results.push(created);
                }
            }
            
            return results;
        });

        result.uploadedCount = uploadedMarks.length;
        result.marks = uploadedMarks;
    }

    let message = `Successfully processed ${result.uploadedCount} students.`;
    if (result.skippedCount > 0) {
        message += ` Skipped ${result.skippedCount} students with existing marks.`;
    }
    if (errors.length > 0) {
        message += ` ${errors.length} errors encountered.`;
    }

    // Check and update exam status if all students have marks
    await checkAndUpdateExamStatus(examId);

    res.status(200).json(
        new ApiResponse(200, result, message)
    );
});

// Get marks for an exam
export const getExamMarks = asyncHandler(async (req, res) => {
    const { examId } = req.params;

    if (!examId) {
        throw new ApiError(400, "ExamId is required.");
    }

    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        include: {
            marks: {
                include: {
                    student: {
                        select: {
                            id: true,
                            studentId: true,
                            name: true,
                            email: true,
                            department: true,
                            div: true,
                            batch: true
                        }
                    }
                },
                orderBy: {
                    student: {
                        studentId: 'asc'
                    }
                }
            },
            eligibleStudents: {
                select: {
                    id: true,
                    studentId: true,
                    name: true,
                    email: true,
                    department: true,
                    div: true,
                    batch: true
                },
                orderBy: {
                    studentId: 'asc'
                }
            },
            subject: {
                select: {
                    id: true,
                    name: true,
                    code: true
                }
            }
        }
    });

    if (!exam) {
        throw new ApiError(404, "Exam not found.");
    }

    // Create a comprehensive marks report
    const marksReport = {
        exam: {
            id: exam.id,
            name: exam.name,
            date: exam.date,
            totalMarks: exam.totalMarks,
            effectiveMarks: exam.effectiveMarks,
            status: exam.status,
            subject: exam.subject
        },
        statistics: {
            totalEligibleStudents: exam.eligibleStudents.length,
            studentsWithMarks: exam.marks.length,
            pendingStudents: exam.eligibleStudents.length - exam.marks.length
        },
        marks: exam.marks,
        eligibleStudents: exam.eligibleStudents,
        studentsWithoutMarks: exam.eligibleStudents.filter(
            student => !exam.marks.some(mark => mark.studentId === student.id)
        )
    };

    res.status(200).json(
        new ApiResponse(200, marksReport, "Exam marks retrieved successfully.")
    );
});

// Get marks for a specific student in an exam
export const getStudentExamMarks = asyncHandler(async (req, res) => {
    const { examId, studentId } = req.params;

    if (!examId || !studentId) {
        throw new ApiError(400, "ExamId and StudentId are required.");
    }

    const marks = await prisma.marks.findFirst({
        where: {
            examId,
            studentId
        },
        include: {
            student: {
                select: {
                    id: true,
                    studentId: true,
                    name: true,
                    email: true,
                    department: true,
                    div: true,
                    batch: true
                }
            },
            exam: {
                select: {
                    id: true,
                    name: true,
                    date: true,
                    totalMarks: true,
                    effectiveMarks: true,
                    subject: {
                        select: {
                            name: true,
                            code: true
                        }
                    }
                }
            }
        }
    });

    if (!marks) {
        throw new ApiError(404, "Marks not found for this student-exam combination.");
    }

    res.status(200).json(
        new ApiResponse(200, marks, "Student exam marks retrieved successfully.")
    );
});

// Update marks for a specific student
export const updateStudentMarks = asyncHandler(async (req, res) => {
    const { marksId } = req.params;
    const { earnedMarks } = req.body;

    if (!marksId || earnedMarks === undefined) {
        throw new ApiError(400, "MarksId and earnedMarks are required.");
    }

    // Get current marks with exam details
    const currentMarks = await prisma.marks.findUnique({
        where: { id: marksId },
        include: {
            exam: {
                select: {
                    totalMarks: true,
                    effectiveMarks: true
                }
            }
        }
    });

    if (!currentMarks) {
        throw new ApiError(404, "Marks record not found.");
    }

    // Handle absent students (marks = -1)
    let effectiveMarks;
    if (earnedMarks === -1) {
        // Student is absent
        effectiveMarks = -1;
    } else {
        // Validate marks for present students
        if (earnedMarks < 0 || earnedMarks > currentMarks.exam.totalMarks) {
            throw new ApiError(400, `Earned marks must be between 0 and ${currentMarks.exam.totalMarks}, or -1 for absent students.`);
        }
        // Calculate new effective marks for present students
        effectiveMarks = Math.round((earnedMarks / currentMarks.exam.totalMarks) * currentMarks.exam.effectiveMarks);
    }

    const updatedMarks = await prisma.marks.update({
        where: { id: marksId },
        data: {
            earnedMarks,
            effectiveMarks
        },
        include: {
            student: {
                select: {
                    id: true,
                    studentId: true,
                    name: true,
                    email: true
                }
            },
            exam: {
                select: {
                    id: true,
                    name: true,
                    totalMarks: true,
                    effectiveMarks: true
                }
            }
        }
    });

    // Check and update exam status if all students have marks
    await checkAndUpdateExamStatus(currentMarks.examId);

    res.status(200).json(
        new ApiResponse(200, updatedMarks, "Marks updated successfully.")
    );
});

// Delete marks for a specific student
export const deleteStudentMarks = asyncHandler(async (req, res) => {
    const { marksId } = req.params;

    if (!marksId) {
        throw new ApiError(400, "MarksId is required.");
    }

    const marks = await prisma.marks.findUnique({
        where: { id: marksId }
    });

    if (!marks) {
        throw new ApiError(404, "Marks record not found.");
    }

    await prisma.marks.delete({
        where: { id: marksId }
    });

    res.status(200).json(
        new ApiResponse(200, null, "Marks deleted successfully.")
    );
});

// Helper function to check if all students have marks and update exam status
const checkAndUpdateExamStatus = async (examId) => {
    try {
        // Get exam with eligible students and marks
        const exam = await prisma.exam.findUnique({
            where: { id: examId },
            include: {
                eligibleStudents: {
                    select: { id: true }
                },
                marks: {
                    select: { studentId: true }
                }
            }
        });

        if (!exam) return;

        const totalEligibleStudents = exam.eligibleStudents.length;
        const studentsWithMarks = exam.marks.length;

        // If all eligible students have marks, update status to 'Taken'
        if (totalEligibleStudents > 0 && studentsWithMarks >= totalEligibleStudents && exam.status !== 'Taken') {
            await prisma.exam.update({
                where: { id: examId },
                data: { status: 'Taken' }
            });
            console.log(`Exam ${examId} status updated to 'Taken' - all ${totalEligibleStudents} students have marks`);
        }
    } catch (error) {
        console.error('Error checking/updating exam status:', error);
        // Don't throw error as this is a helper function
    }
};