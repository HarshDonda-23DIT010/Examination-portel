import prisma from "../DB/db.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import xlsx from 'xlsx';

export const addOneStudent = asyncHandler(async (req, res) => {
    const { studentId, name, email, department, semester, div, batch } = req.body;

    if (!studentId || !name || !email || !department || !semester || !div || !batch) {
        throw new ApiError(400, "All fields are required.")
    }

    const existStudent = await prisma.student.findFirst({
        where: {
            OR: [{ studentId }, { email }]
        }
    })

    if (existStudent) {
        throw new ApiError(409, "Student is alredy exist");
    }

    const _student = {
        studentId,
        name,
        email,
        department,
        semester: Number(semester),
        div,
        batch
    }

    const student = await prisma.student.create({
        data: _student
    })

    res.status(200).json(
        new ApiResponse(
            200,
            student,
            "Student Registed Successfully."
        )
    )
})

export const bulkUploadStudents = asyncHandler(async (req, res) => {
    const fileBuffer = req.file?.buffer;
    if (!fileBuffer) {
        throw new ApiError(400, 'No file uploaded');
    }

    // Read and clean Excel data
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const rawData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const cleanedData = rawData.map((row) => {
        const cleanedRow = {};
        for (const key in row) {
            const cleanKey = key.trim().replace(/\uFEFF/g, '');
            cleanedRow[cleanKey] = row[key]?.toString().trim();
        }
        return cleanedRow;
    });

    const students = cleanedData
        .filter(row => row.name && row.email && row.studentId && row.semester && row.department && row.div && row.batch)
        .map(row => ({
            studentId: row.studentId,
            name: row.name,
            email: row.email,
            department: row.department,
            semester: Number(row.semester),
            div: row.div,
            batch: row.batch
        }));

    if (students.length === 0) {
        throw new ApiError(400, 'No valid student data found in the file');
    }

    // Check for duplicates in DB
    const studentIds = students.map(s => s.studentId);
    const emails = students.map(s => s.email);

    const existing = await prisma.student.findMany({
        where: {
            OR: [
                { studentId: { in: studentIds } },
                { email: { in: emails } }
            ]
        },
        select: {
            studentId: true,
            email: true
        }
    });

    if (existing.length > 0) {
        const duplicates = existing.map(s => `ID: ${s.studentId}, Email: ${s.email}`);
        throw new ApiError(409, `Duplicate student(s) found in DB:\n${duplicates.join('\n')}`);
    }

    // Insert all students
    const result = await prisma.student.createMany({
        data: students
    });

    res.status(200).json(new ApiResponse(
        200,
        { insertedCount: result.count },
        'Students uploaded successfully.'
    ));
});


export const updateStudent = asyncHandler(async (req, res) => {
    const { studentId, name, div,batch } = req.body;

    if (!studentId || !name || !div || !batch) {
        throw new ApiError(400, "All fields are required.")
    }

    const existStudent = await prisma.student.findFirst({
        where: { studentId }
    })

    if (!existStudent) {
        throw new ApiError(404, "Student is not found.")
    }

    const student = await prisma.student.update({
        where: { studentId },
        data: {
            name,
            div,
            batch
        }
    })

    res.status(200).json(
        new ApiResponse(
            200,
            student,
            "Student updeted successfully."
        )
    )
})

export const getDepartmentStudent = asyncHandler(async (req, res) => {
    const { department } = req.params;    

    const students = await prisma.student.findMany({
        where: {
            department: department
        }
    })

    return res.status(200).json(
        new ApiResponse(
            200,
            students,
            "All student fetched successfully."
        )
    )

})

export const bulkPromoteStudent = asyncHandler(async (req, res) => {
    const fileBuffer = req.file?.buffer;
    if (!fileBuffer) {
        throw new ApiError(400, 'No file uploaded');
    }

    // Read and parse Excel
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const rawData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Clean data
    const cleanedData = rawData.map((row) => {
        const cleanedRow = {};
        for (const key in row) {
            const cleanKey = key.trim().replace(/\uFEFF/g, '');
            cleanedRow[cleanKey] = row[key]?.toString().trim();
        }
        return cleanedRow;
    });

    // Extract unique studentIds
    const seen = new Set();
    const uniqueStudentIds = [];

    for (const row of cleanedData) {
        const id = row.studentId?.toString().trim();
        if (id && !seen.has(id)) {
            seen.add(id);
            uniqueStudentIds.push(id);
        }
    }

    if (uniqueStudentIds.length === 0) {
        throw new ApiError(400, 'No valid studentId found in the file');
    }

    // Fetch students from DB
    const studentsToPromote = await prisma.student.findMany({
        where: {
            studentId: { in: uniqueStudentIds }
        }
    });

    if (studentsToPromote.length === 0) {
        throw new ApiError(404, 'No matching students found in the database');
    }

    // Update each student’s semester by +1
    const updatePromises = studentsToPromote.map((student) =>
        prisma.student.update({
            where: { id: student.id },
            data: {
                semester: student.semester + 1
            }
        })
    );

    await Promise.all(updatePromises);

    res.status(200).json(new ApiResponse(
        200,
        { updatedCount: studentsToPromote.length },
        'Students promoted successfully.'
    ));
});

// from the frontend share studentIds
export const selectedStudentPromote = asyncHandler(async (req, res) => {
    const { studentIds } = req.body;

    // Validate input
    if (!Array.isArray(studentIds) || studentIds.length === 0) {
        throw new ApiError(400, 'studentIds must be a non-empty array');
    }

    // Clean and deduplicate
    const uniqueIds = [...new Set(studentIds.map(id => id.toString().trim()))];

    // Fetch existing students
    const studentsToPromote = await prisma.student.findMany({
        where: {
            studentId: { in: uniqueIds }
        }
    });

    if (studentsToPromote.length === 0) {
        throw new ApiError(404, 'No matching students found');
    }

    // Promote (semester += 1)
    const updatePromises = studentsToPromote.map(student =>
        prisma.student.update({
            where: { id: student.id },
            data: { semester: student.semester + 1 }
        })
    );

    await Promise.all(updatePromises);

    res.status(200).json(
        new ApiResponse(
            200,
            {
                updatedCount: studentsToPromote.length,
                promotedIds: studentsToPromote.map(s => s.studentId),
            },
            'Selected students promoted successfully'
        )
    );
});

export const getStudentsBySemesterAndDepartment = asyncHandler(async (req, res) => {
    const { semester, department } = req.params;

    if (!semester || !department) {
        throw new ApiError(400, "Semester and Department are required.");
    }

    const students = await prisma.student.findMany({
        where: {
            semester: Number(semester),
            department: department
        },
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
    });

    if (students.length === 0) {
        throw new ApiError(404, "No students found for given semester and department.");
    }

    return res.status(200).json(
        new ApiResponse(200, students, "Students fetched successfully.")
    );
});
