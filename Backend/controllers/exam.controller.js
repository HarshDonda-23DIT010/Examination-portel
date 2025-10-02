import prisma from "../DB/db.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createExam = asyncHandler(async (req, res) => {
    const {
        name,
        date,
        subjectId,
        facultyId,
        totalMarks,
        effectiveMarks,
        department,
        division,
        batch,
        status,
        yearId
    } = req.body;

    // 1. Check for required fields
    if (
        !name ||
        !date ||
        !subjectId ||
        !facultyId ||
        !totalMarks ||
        !effectiveMarks ||
        !department ||
        !division ||
        !batch ||
        !yearId
    ) {
        throw new ApiError(400, "All fields are required.");
    }

    // 2. Create exam record
    const newExam = await prisma.exam.create({
        data: {
            name,
            date: new Date(date), // ensure Date type
            subjectId,
            facultyId,
            totalMarks,
            effectiveMarks,
            department,
            division,
            batch,
            status: status || 'Pending', // Default to Pending if not provided
            yearId
        }
    });

    res.status(201).json(
        new ApiResponse(201, newExam, "Exam created successfully.")
    );
});

export const updateExam = asyncHandler(async (req, res) => {
  const { examId } = req.params;
  const {
    name,
    date,
    subjectId,
    facultyId,
    totalMarks,
    effectiveMarks,
    department,
    division,
    batch,
    status,
    yearId
  } = req.body;

  if (!examId) {
    throw new ApiError(400, "Exam ID is required.");
  }

  // 1. Check if exam exists
  const existingExam = await prisma.exam.findUnique({
    where: { id: examId },
  });

  if (!existingExam) {
    throw new ApiError(404, `Exam with ID ${examId} not found.`);
  }

  // 2. Update exam record
  const updatedExam = await prisma.exam.update({
    where: { id: examId },
    data: {
      ...(name && { name }),
      ...(date && { date: new Date(date) }),
      ...(subjectId && { subjectId }),
      ...(facultyId && { facultyId }),
      ...(totalMarks && { totalMarks }),
      ...(effectiveMarks && { effectiveMarks }),
      ...(department && { department }),
      ...(division && { division }),
      ...(batch && { batch }),
      ...(status && { status }),
      ...(yearId && { yearId }),
    },
  });

  res.status(200).json(
    new ApiResponse(200, updatedExam, "Exam updated successfully.")
  );
});



export const addExamStudents = asyncHandler(async (req, res) => {
    const { examId } = req.params;
    const { studentIds } = req.body;

    if (!examId || !studentIds || !Array.isArray(studentIds) || studentIds.length === 0) {
        throw new ApiError(400, "Exam ID and studentIds array are required.");
    }

    // 1. Check if exam exists
    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        select: { id: true },
    });

    if (!exam) {
        throw new ApiError(404, `Exam with ID ${examId} not found.`);
    }

    // 2. Find all students that exist
    const students = await prisma.student.findMany({
        where: {
            id: { in: studentIds.map((id) => String(id)) },
        },
        select: { id: true },
    });

    const foundIds = students.map((s) => s.id);
    const missingIds = studentIds.filter((id) => !foundIds.includes(String(id)));

    if (missingIds.length > 0) {
        throw new ApiError(404, `These student IDs do not exist: ${missingIds.join(", ")}`);
    }

    // 3. Connect students to the exam (many-to-many)
    const updatedExam = await prisma.exam.update({
        where: { id: examId },
        data: {
            eligibleStudents: {
                connect: studentIds.map((id) => ({ id: String(id) })),
            },
        },
        include: { 
            eligibleStudents: {
                select: {
                    id: true,
                    studentId: true,
                    name: true,
                    email: true,
                    department: true,
                    semester: true,
                    div: true,
                    batch: true
                }
            }
        },
    });

    res.status(200).json(
        new ApiResponse(
            200,
            updatedExam,
            "Students successfully added to the exam."
        )
    );
});

export const updateExamStudents = asyncHandler(async (req, res) => {
    const { examId } = req.params;
    const { studentIds } = req.body;

    if (!examId) {
        throw new ApiError(400, "Exam ID is required.");
    }

    if (!Array.isArray(studentIds)) {
        throw new ApiError(400, "Student IDs must be an array.");
    }

    // 1. Get the exam
    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        select: {
            id: true,
            eligibleStudents: {
                select: { id: true }
            }
        }
    });

    if (!exam) {
        throw new ApiError(404, "Exam not found.");
    }

    // 2. Validate students if any are provided
    if (studentIds.length > 0) {
        const students = await prisma.student.findMany({
            where: {
                id: { in: studentIds.map(id => String(id)) }
            },
            select: { id: true }
        });

        if (students.length !== studentIds.length) {
            const foundIds = students.map(s => s.id);
            const missingIds = studentIds.filter(id => !foundIds.includes(String(id)));
            throw new ApiError(400, `Some students were not found: ${missingIds.join(", ")}`);
        }
    }

    // 3. Disconnect all current students and connect new ones
    const updatedExam = await prisma.exam.update({
        where: { id: examId },
        data: {
            eligibleStudents: {
                set: studentIds.map(id => ({ id: String(id) }))
            }
        },
        include: {
            eligibleStudents: {
                select: {
                    id: true,
                    studentId: true,
                    name: true,
                    email: true,
                    department: true,
                    semester: true,
                    div: true,
                    batch: true
                }
            }
        }
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedExam,
            "Exam students updated successfully."
        )
    );
});

export const getExamsBySubject = asyncHandler(async (req, res) => {
    const { subjectId } = req.params;

    if (!subjectId) {
        throw new ApiError(400, "Subject ID is required.");
    }

    const exams = await prisma.exam.findMany({
        where: { subjectId: Number(subjectId) },
        include: {
            faculty: {
                select: {
                    id: true,
                    name: true,
                    userId: true,
                    department: true
                }
            },
            subject: {
                select: {
                    id: true,
                    name: true,
                    code: true
                }
            },
            eligibleStudents: {
                select: {
                    id: true,
                    studentId: true,
                    name: true,
                    department: true,
                    semester: true,
                    div: true,
                    batch: true
                }
            },
            _count: {
                select: {
                    eligibleStudents: true
                }
            }
        },
        orderBy: {
            date: 'desc'
        }
    });

    res.status(200).json(
        new ApiResponse(200, exams, "Exams fetched successfully.")
    );
});

export const getExamById = asyncHandler(async (req, res) => {
    const { examId } = req.params;

    if (!examId) {
        throw new ApiError(400, "Exam ID is required.");
    }

    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        include: {
            faculty: {
                select: {
                    id: true,
                    name: true,
                    userId: true,
                    department: true
                }
            },
            subject: {
                select: {
                    id: true,
                    name: true,
                    code: true
                }
            },
            eligibleStudents: {
                select: {
                    id: true,
                    studentId: true,
                    name: true,
                    email: true,
                    department: true,
                    semester: true,
                    div: true,
                    batch: true
                }
            }
        }
    });

    if (!exam) {
        throw new ApiError(404, "Exam not found.");
    }

    res.status(200).json(
        new ApiResponse(200, exam, "Exam fetched successfully.")
    );
});

export const deleteExam = asyncHandler(async (req, res) => {
    const { examId } = req.params;

    if (!examId) {
        throw new ApiError(400, "Exam ID is required.");
    }

    const existingExam = await prisma.exam.findUnique({
        where: { id: examId }
    });

    if (!existingExam) {
        throw new ApiError(404, "Exam not found.");
    }

    await prisma.exam.delete({
        where: { id: examId }
    });

    res.status(200).json(
        new ApiResponse(200, null, "Exam deleted successfully.")
    );
});

// Get all students assigned to an exam
export const getExamStudents = asyncHandler(async (req, res) => {
    const { examId } = req.params;

    if (!examId) {
        throw new ApiError(400, "Exam ID is required.");
    }

    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        include: {
            subject: {
                select: {
                    id: true,
                    name: true,
                    code: true
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
            marks: {
                select: {
                    studentId: true,
                    earnedMarks: true,
                    effectiveMarks: true
                }
            }
        }
    });

    if (!exam) {
        throw new ApiError(404, "Exam not found.");
    }

    // Create a comprehensive response with student details and marks status
    const examStudentsData = {
        exam: {
            id: exam.id,
            name: exam.name,
            date: exam.date,
            totalMarks: exam.totalMarks,
            effectiveMarks: exam.effectiveMarks,
            status: exam.status,
            department: exam.department,
            division: exam.division,
            batch: exam.batch,
            subject: exam.subject
        },
        students: exam.eligibleStudents.map(student => {
            const studentMarks = exam.marks.find(mark => mark.studentId === student.id);
            return {
                ...student,
                hasMarks: !!studentMarks,
                marks: studentMarks || null
            };
        }),
        statistics: {
            totalStudents: exam.eligibleStudents.length,
            studentsWithMarks: exam.marks.length,
            pendingStudents: exam.eligibleStudents.length - exam.marks.length
        }
    };

    res.status(200).json(
        new ApiResponse(200, examStudentsData, "Exam students fetched successfully.")
    );
});

// Get exam analysis and statistics
export const getExamAnalysis = asyncHandler(async (req, res) => {
    const { examId } = req.params;

    if (!examId) {
        throw new ApiError(400, "Exam ID is required.");
    }

    const exam = await prisma.exam.findUnique({
        where: { id: examId },
        include: {
            subject: {
                select: {
                    id: true,
                    name: true,
                    code: true
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
            marks: {
                select: {
                    id: true,
                    studentId: true,
                    earnedMarks: true,
                    effectiveMarks: true,
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
                    earnedMarks: 'desc'
                }
            }
        }
    });

    if (!exam) {
        throw new ApiError(404, "Exam not found.");
    }

    // Calculate detailed statistics
    const marksWithStudents = exam.marks.filter(mark => mark.earnedMarks !== -1); // Exclude absent students
    const absentStudents = exam.marks.filter(mark => mark.earnedMarks === -1);
    const studentsWithoutMarks = exam.eligibleStudents.filter(
        student => !exam.marks.some(mark => mark.studentId === student.id)
    );

    // Basic statistics
    const totalStudents = exam.eligibleStudents.length;
    const studentsWithMarks = exam.marks.length;
    const presentStudents = marksWithStudents.length;
    const absentCount = absentStudents.length;
    const pendingCount = studentsWithoutMarks.length;

    // Grade calculations (only for present students)
    const marks = marksWithStudents.map(m => m.earnedMarks);
    const effectiveMarks = marksWithStudents.map(m => m.effectiveMarks);
    
    let statistics = {
        totalStudents,
        presentStudents,
        absentCount,
        pendingCount,
        averageMarks: 0,
        averageEffectiveMarks: 0,
        highestMarks: 0,
        lowestMarks: 0,
        medianMarks: 0,
        passRate: 0,
        failRate: 0,
        standardDeviation: 0
    };

    if (presentStudents > 0) {
        // Calculate average
        const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
        const totalEffective = effectiveMarks.reduce((sum, mark) => sum + mark, 0);
        statistics.averageMarks = Math.round((totalMarks / presentStudents) * 100) / 100;
        statistics.averageEffectiveMarks = Math.round((totalEffective / presentStudents) * 100) / 100;

        // Calculate min/max
        statistics.highestMarks = Math.max(...marks);
        statistics.lowestMarks = Math.min(...marks);

        // Calculate median
        const sortedMarks = [...marks].sort((a, b) => a - b);
        const mid = Math.floor(sortedMarks.length / 2);
        statistics.medianMarks = sortedMarks.length % 2 === 0
            ? (sortedMarks[mid - 1] + sortedMarks[mid]) / 2
            : sortedMarks[mid];

        // Calculate pass/fail rate (assuming 40% is passing criteria)
        const passingMarks = (exam.totalMarks * 40) / 100;
        const passedStudents = marks.filter(mark => mark >= passingMarks).length;
        statistics.passRate = Math.round((passedStudents / presentStudents) * 100);
        statistics.failRate = 100 - statistics.passRate;

        // Calculate standard deviation
        const variance = marks.reduce((sum, mark) => {
            return sum + Math.pow(mark - statistics.averageMarks, 2);
        }, 0) / presentStudents;
        statistics.standardDeviation = Math.round(Math.sqrt(variance) * 100) / 100;
    }

    // Score distribution (for histogram)
    const scoreRanges = [
        { range: '0-20', min: 0, max: 20, count: 0 },
        { range: '21-40', min: 21, max: 40, count: 0 },
        { range: '41-60', min: 41, max: 60, count: 0 },
        { range: '61-80', min: 61, max: 80, count: 0 },
        { range: '81-100', min: 81, max: 100, count: 0 }
    ];

    marks.forEach(mark => {
        const percentage = (mark / exam.totalMarks) * 100;
        scoreRanges.forEach(range => {
            if (percentage >= range.min && percentage <= range.max) {
                range.count++;
            }
        });
    });

    // Department wise performance
    const departmentStats = {};
    marksWithStudents.forEach(markRecord => {
        const dept = markRecord.student.department;
        if (!departmentStats[dept]) {
            departmentStats[dept] = {
                department: dept,
                totalStudents: 0,
                totalMarks: 0,
                highestMarks: 0,
                lowestMarks: exam.totalMarks,
                students: []
            };
        }
        
        departmentStats[dept].totalStudents++;
        departmentStats[dept].totalMarks += markRecord.earnedMarks;
        departmentStats[dept].highestMarks = Math.max(departmentStats[dept].highestMarks, markRecord.earnedMarks);
        departmentStats[dept].lowestMarks = Math.min(departmentStats[dept].lowestMarks, markRecord.earnedMarks);
        departmentStats[dept].students.push({
            ...markRecord.student,
            earnedMarks: markRecord.earnedMarks,
            effectiveMarks: markRecord.effectiveMarks
        });
    });

    // Calculate averages for departments
    Object.values(departmentStats).forEach(dept => {
        dept.averageMarks = Math.round((dept.totalMarks / dept.totalStudents) * 100) / 100;
    });

    const analysisData = {
        exam: {
            id: exam.id,
            name: exam.name,
            date: exam.date,
            totalMarks: exam.totalMarks,
            effectiveMarks: exam.effectiveMarks,
            status: exam.status,
            department: exam.department,
            division: exam.division,
            batch: exam.batch,
            subject: exam.subject
        },
        statistics,
        scoreDistribution: scoreRanges,
        departmentPerformance: Object.values(departmentStats),
        detailedResults: marksWithStudents.map(mark => ({
            student: mark.student,
            earnedMarks: mark.earnedMarks,
            effectiveMarks: mark.effectiveMarks,
            percentage: Math.round((mark.earnedMarks / exam.totalMarks) * 100),
            status: mark.earnedMarks >= (exam.totalMarks * 40) / 100 ? 'Pass' : 'Fail'
        })),
        absentStudents: absentStudents.map(mark => mark.student),
        pendingStudents: studentsWithoutMarks
    };

    res.status(200).json(
        new ApiResponse(200, analysisData, "Exam analysis fetched successfully.")
    );
});

