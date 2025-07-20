import prisma from "../DB/db.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import xlsx from 'xlsx';

export const addOneStudent = asyncHandler(async (req, res) => {
    const { studentId, name, email, department, semester, div } = req.body;

    if (!studentId || !name || !email || !department || !semester || !div) {
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
        div
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
        .filter(row => row.name && row.email && row.studentId && row.semester && row.department && row.div)
        .map(row => ({
            studentId: row.studentId,
            name: row.name,
            email: row.email,
            department: row.department,
            semester: Number(row.semester),
            div: row.div
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


export const updateStudent = asyncHandler(async (req,res)=>{
    const {studentId,name,div} = req.body;
    
    if(!studentId || !name || !div){
        throw new ApiError(400,"All fields are required.")
    }

    const existStudent = await prisma.student.findFirst({
        where:{studentId}
    })

    if(!existStudent){
        throw new ApiError(404,"Student is not found.")
    }

    const student = await prisma.student.update({
        where:{studentId},
        data:{
            name,
            div
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

export const getAllStudent = asyncHandler(async (req,res)=>{
    
    const students = await prisma.student.findMany({})

    return res.status(200).json(
        new ApiResponse(
            200,
            students,
            "All student fetched successfully."
        )
    )

})

