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
        !division ||
        !batch ||
        !status ||
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
            division,
            batch,
            status,
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
    where: { id: Number(examId) },
  });

  if (!existingExam) {
    throw new ApiError(404, `Exam with ID ${examId} not found.`);
  }

  // 2. Update exam record
  const updatedExam = await prisma.exam.update({
    where: { id: Number(examId) },
    data: {
      ...(name && { name }),
      ...(date && { date: new Date(date) }),
      ...(subjectId && { subjectId }),
      ...(facultyId && { facultyId }),
      ...(totalMarks && { totalMarks }),
      ...(effectiveMarks && { effectiveMarks }),
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
    
    const { examId } = Number(req.params.examId);
    const { studentIds } = req.body;

    if (!examId || !studentIds || !Array.isArray(studentIds) || studentIds.length === 0) {
        throw new ApiError(400, "Exam ID and studentIds array are required.");
    }

    // 1. Check if exam exists
    const exam = await prisma.exam.findUnique({
        where: { id: Number(examId) },
        select: { id: true },
    });

    if (!exam) {
        throw new ApiError(404, `Exam with ID ${examId} not found.`);
    }

    // 2. Find all students that exist
    const students = await prisma.student.findMany({
        where: {
            id: { in: studentIds.map((id) => String(id)) }, // assuming UUID string
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
        where: { id: Number(examId) },
        data: {
            students: {
                connect: studentIds.map((id) => ({ id: String(id) })),
            },
        },
        include: { students: true },
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

    const { examId } = Number(req.params.examId);
    const { studentIds } = req.body;

    if (!examId) {
        throw new ApiError(400, "Exam ID is required.");
    }

    if (!Array.isArray(studentIds)) {
        throw new ApiError(400, "Student IDs must be an array.");
    }

    // 1. Get the exam
    const exam = await prisma.exam.findUnique({
        where: { id: Number(examId) },
        select: {
            id: true,
            students: {
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
                id: { in: studentIds.map(id => String(id)) } // assuming UUID string
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
        where: { id: Number(examId) },
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
            updatedExam,
            "Exam students updated successfully."
        )
    );
});

