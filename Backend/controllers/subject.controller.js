import prisma from "../DB/db.config.js";
import {
    ApiError
} from "../utils/apiError.js";
import {
    ApiResponse
} from "../utils/apiResponse.js";
import {
    asyncHandler
} from "../utils/asyncHandler.js";

export const addSubject = asyncHandler(async (req, res) => {
    const {
        code,
        name,
        semester,
        coordinatorId,
        departments, // e.g., ['IT', 'CE']
        type,
        theory_hour,
        practical_hour,
        theory_credite,
        practical_credite,
        theory_int_marks,
        practical_int_marks,
        theory_ext_marks,
        practical_ext_marks,
        yearId
    } = req.body;

    // Validate required fields
    if (!code || !name || !semester || !coordinatorId || !departments || !type || !yearId) {
        throw new ApiError(400, "Please provide all required fields.");
    }

    // Ensure coordinator exists
    const user = await prisma.user.findUnique({
        where: {
            id: Number(coordinatorId)
        }
    });

    if (!user) {
        throw new ApiError(404, "Subject coordinator not found.");
    }

    // Check if subject for year already exists
    const existing = await prisma.subject.findFirst({
        where: {
            code,
            yearId: Number(yearId)
        }
    });

    if (existing) {
        throw new ApiError(409, "Subject with this code already exists for the academic year.");
    }

    // Map departments to boolean fields
    const departmentFlags = {
        dep_IT: departments.includes("DIT"),
        dep_CE: departments.includes("DCE"),
        dep_CSE: departments.includes("DCS"),
    };

    // Create new subject
    const subject = await prisma.subject.create({
        data: {
            code,
            name,
            semester: Number(semester),
            coordinatorId: Number(coordinatorId),
            type,
            theory_hour: Number(theory_hour) || null,
            practical_hour: Number(practical_hour) || null,
            theory_credite: Number(theory_credite) || null,
            practical_credite: Number(practical_credite) || null,
            theory_int_marks: Number(theory_int_marks) || null,
            practical_int_marks: Number(practical_int_marks) || null,
            theory_ext_marks: Number(theory_ext_marks) || null,
            practical_ext_marks: Number(practical_ext_marks) || null,
            yearId: Number(yearId),
            ...departmentFlags
        }
    });

    if (!subject) {
        throw new ApiError(500, "Failed to create subject.");
    }

    const subjectFaculty = await prisma.subjectFaculty.create({
        data: {
            facultyId: Number(coordinatorId),
            subjectId: subject.id, // Assuming subject.id is Int
            role: "SubjectCoordinator",
            department: user.department,
            yearId: Number(yearId)
        }
    });

    return res.status(201).json(
        new ApiResponse(201, subject, "Subject created successfully.")
    );
});


export const updateSubject = asyncHandler(async (req, res) => {
    const {
        code,
        name,
        coordinatorId,
        departments, // e.g., ['IT', 'CE']
        type,
        theory_hour,
        practical_hour,
        theory_credite,
        practical_credite,
        theory_int_marks,
        practical_int_marks,
        theory_ext_marks,
        practical_ext_marks
    } = req.body;

    // Validate all fields are provided
    if (
        !code ||
        !name ||
        !coordinatorId ||
        !departments ||
        !Array.isArray(departments) ||
        !type ||
        theory_hour === undefined ||
        practical_hour === undefined ||
        theory_credite === undefined ||
        practical_credite === undefined ||
        theory_int_marks === undefined ||
        practical_int_marks === undefined ||
        theory_ext_marks === undefined ||
        practical_ext_marks === undefined
    ) {
        throw new ApiError(400, "Please provide all required fields.");
    }

    // Generate department flags
    const departmentFlags = {
        dep_IT: departments.includes("DIT"),
        dep_CE: departments.includes("DCE"),
        dep_CSE: departments.includes("DCS"),
    };

    // Update subject
    const updatedSubject = await prisma.subject.update({
        where: {
            code: code, // Use code as unique identifier
        },
        data: {
            name,
            coordinatorId: Number(coordinatorId),
            type,
            theory_hour: Number(theory_hour) || null,
            practical_hour: Number(practical_hour) || null,
            theory_credite: Number(theory_credite) || null,
            practical_credite: Number(practical_credite) || null,
            theory_int_marks: Number(theory_int_marks) || null,
            practical_int_marks: Number(practical_int_marks) || null,
            theory_ext_marks: Number(theory_ext_marks) || null,
            practical_ext_marks: Number(practical_ext_marks) || null,
            ...departmentFlags
        },
    });

    if (!subject) {
        throw new ApiError(404, "Subject not found after update.");
    }

    const existingFaculty = await prisma.subjectFaculty.findFirst({
        where: {
            subjectId: subject.id
        }
    });

    if (existingFaculty) {
        // Update existing SubjectFaculty
        await prisma.subjectFaculty.update({
            where: {
                id: existingFaculty.id
            },
            data: {
                facultyId: Number(coordinatorId),
                role: "SubjectCoordinator" // or "Faculty" based on your business logic
            }
        });
    } else {
        // Create new SubjectFaculty if not exists
        await prisma.subjectFaculty.create({
            data: {
                subjectId: subject.id,
                facultyId: Number(coordinatorId),
                role: "SubjectCoordinator",
                yearId: updatedSubject.yearId // Assuming you want to link to the same year
            }
        });
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedSubject,
            "Subject updated successfully."
        )
    );
});

export const getSubjectByYearAnsSemester = asyncHandler(async (req, res) => {
    const {
        yearId,
        semester
    } = req.params;

    // Validate parameters
    if (!yearId || !semester) {
        throw new ApiError(400, "Year ID and semester are required.");
    }

    // Fetch subjects for the given year and semester
    const subjects = await prisma.subject.findMany({
        where: {
            yearId: Number(yearId),
            semester: Number(semester)
        },
        include: {
            subjectCoordinator: true // Include coordinator details
        }
    });

    if (subjects.length === 0) {
        return res.status(404).json(
            new ApiResponse(404, null, "No subjects found for this year and semester.")
        );
    }

    return res.status(200).json(
        new ApiResponse(200, subjects, "Subjects fetched successfully.")
    );
});

export const getFacultySubjects = asyncHandler(async (req, res) => {
    const {
        userId,
        yearId,
        semester
    } = req.params;

    if (!userId || !yearId || !semester) {
        throw new ApiError(400, "userId, yearId, and semester are required.");
    }

    const userIdNum = Number(userId);
    const yearIdNum = Number(yearId);
    const semesterNum = Number(semester);

    // 1. Find subjects where faculty is coordinator
    const coordinatorSubjects = await prisma.subject.findMany({
        where: {
            coordinatorId: userIdNum,
            yearId: yearIdNum,
            semester: semesterNum
        },
        include: {
            _count: {
                select: {
                    students: true
                }
            }
        }
    });

    // 2. Find subjects where faculty is listed in SubjectFaculty table
    const facultySubjects = await prisma.subjectFaculty.findMany({
        where: {
            facultyId: userIdNum,
            yearId: yearIdNum,
            subject: {
                semester: semesterNum
            }
        },
        include: {
            subject: {
                include: {
                    _count: {
                        select: {
                            students: true
                        }
                    }
                }
            }
        }
    });

    console.log(facultySubjects);
    // 3. Combine and format the results
    const resultsMap = new Map();

    // Add coordinator subjects
    for (const subj of coordinatorSubjects) {
        resultsMap.set(subj.id, {
            subject: {
                ...subj,
                hasStudents: subj._count.students > 0
            },
            roles: ['SubjectCoordinator']
        });
    }

    for (const fs of facultySubjects) {
        const hasStudents = fs.subject._count.students > 0;

        if (fs.role === 'Faculty') {
            if (resultsMap.has(fs.subjectId)) {
                const roles = resultsMap.get(fs.subjectId).roles;
                if (!roles.includes('Faculty')) {
                    roles.push('Faculty');
                }
            } else {
                resultsMap.set(fs.subjectId, {
                    subject: {
                        ...fs.subject,
                        hasStudents
                    },
                    roles: ['Faculty']
                });
            }
        }
    }

    const result = Array.from(resultsMap.values());

    return res.status(200).json(
        new ApiResponse(200, result, "Faculty roles with student presence fetched successfully.")
    );
});


export const addStudentsInSubject = asyncHandler(async (req, res) => {
    const { subjectId, studentIds, yearId, semester } = req.body;

    if (!yearId || !semester) {
        throw new ApiError(400, "Year ID and semester are required.");
    }

    if (!subjectId || !Array.isArray(studentIds) || studentIds.length === 0) {
        throw new ApiError(400, "Subject ID and student IDs are required.");
    }

    // 1. Get the subject
    const subject = await prisma.subject.findUnique({
        where: {
            id: Number(subjectId)
        },
        select: {
            id: true,
            semester: true,
            yearId: true
        }
    });

    if (!subject) {
        throw new ApiError(404, "Subject not found.");
    }

    if (subject.semester !== Number(semester) || subject.yearId !== Number(yearId)) {
        throw new ApiError(400, "Provided semester/year does not match the subject.");
    }

    // 2. Get all students
    const students = await prisma.student.findMany({
        where: {
            id: { in: studentIds.map(id => String(id)) }  // student.id is String (UUID)
        },
        select: { id: true, semester: true }
    });

    if (students.length !== studentIds.length) {
        throw new ApiError(400, "Some students were not found.");
    }

    // 3. Validate students' semester
    const invalidStudents = students.filter(stu => stu.semester !== subject.semester);

    if (invalidStudents.length > 0) {
        throw new ApiError(
            400,
            `Some students are not in the same semester as the subject (Subject semester: ${subject.semester}).`
        );
    }

    // 4. Add students to subject
    const updatedSubject = await prisma.subject.update({
        where: {
            id: Number(subjectId)
        },
        data: {
            students: {
                connect: studentIds.map(id => ({ id: String(id) }))
            }
        },
        include: {
            students: true
        }
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedSubject,
            "Students added to subject successfully."
        )
    );
});

export const getSubjectStudents = asyncHandler(async (req, res) => {
    const { subjectId } = req.params;

    if (!subjectId) {
        throw new ApiError(400, "Subject ID is required.");
    }

    const subject = await prisma.subject.findUnique({
        where: {
            id: Number(subjectId)
        },
        select: {
            id: true,
            name: true,
            code: true,
            semester: true,
            students: {
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

    if (!subject) {
        throw new ApiError(404, "Subject not found.");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                subject: {
                    id: subject.id,
                    name: subject.name,
                    code: subject.code,
                    semester: subject.semester
                },
                students: subject.students
            },
            "Subject students fetched successfully."
        )
    );
});

export const updateSubjectStudents = asyncHandler(async (req, res) => {
    const { subjectId } = req.params;
    const { studentIds, yearId, semester } = req.body;

    if (!subjectId) {
        throw new ApiError(400, "Subject ID is required.");
    }

    if (!yearId || !semester) {
        throw new ApiError(400, "Year ID and semester are required.");
    }

    if (!Array.isArray(studentIds)) {
        throw new ApiError(400, "Student IDs must be an array.");
    }

    // 1. Get the subject
    const subject = await prisma.subject.findUnique({
        where: {
            id: Number(subjectId)
        },
        select: {
            id: true,
            semester: true,
            yearId: true,
            students: {
                select: { id: true }
            }
        }
    });

    if (!subject) {
        throw new ApiError(404, "Subject not found.");
    }

    if (subject.semester !== Number(semester) || subject.yearId !== Number(yearId)) {
        throw new ApiError(400, "Provided semester/year does not match the subject.");
    }

    // 2. Validate students if any are provided
    if (studentIds.length > 0) {
        const students = await prisma.student.findMany({
            where: {
                id: { in: studentIds.map(id => String(id)) }
            },
            select: { id: true, semester: true }
        });

        if (students.length !== studentIds.length) {
            throw new ApiError(400, "Some students were not found.");
        }

        // Validate students' semester
        const invalidStudents = students.filter(stu => stu.semester !== subject.semester);
        if (invalidStudents.length > 0) {
            throw new ApiError(
                400,
                `Some students are not in the same semester as the subject (Subject semester: ${subject.semester}).`
            );
        }
    }

    // 3. Disconnect all current students and connect new ones
    const updatedSubject = await prisma.subject.update({
        where: {
            id: Number(subjectId)
        },
        data: {
            students: {
                set: studentIds.map(id => ({ id: String(id) }))
            }
        },
        include: {
            students: {
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
            updatedSubject,
            "Subject students updated successfully."
        )
    );
});
