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

    const { userId, yearId, semester } = req.params;    
    
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
            subject: true
        }
    });

    // 3. Combine and format the results
    const resultsMap = new Map();

    // Add coordinator subjects
    for (const subj of coordinatorSubjects) {
        resultsMap.set(subj.id, {
            subject: subj,
            roles: ['SubjectCoordinator']
        });
    }

    // Add faculty subjects
    for (const fs of facultySubjects) {
        if (resultsMap.has(fs.subjectId)) {
            resultsMap.get(fs.subjectId).roles.push('Faculty');
        } else {
            resultsMap.set(fs.subjectId, {
                subject: fs.subject,
                roles: ['Faculty']
            });
        }
    }

    const result = Array.from(resultsMap.values());

    return res.status(200).json(
        new ApiResponse(200, result, "Faculty roles fetched successfully.")
    );
});

