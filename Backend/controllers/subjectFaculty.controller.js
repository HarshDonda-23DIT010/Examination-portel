import prisma from "../DB/db.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const addSubjectFaculties = asyncHandler(async (req, res) => {
  const {
    subjectId,
    facultyId,
    department,
    yearId,
    aBatch,
    bBatch,
    cBatch,
    dBatch,
  } = req.body;

  if (!subjectId || !facultyId || !department || !yearId) {
    throw new ApiError(400, "All fields are required.");
  }

  // 1. Validate faculty exists
  const existFaculty = await prisma.user.findFirst({
    where: { id: facultyId },
  });

  if (!existFaculty) {
    throw new ApiError(404, "Faculty is not present in the database.");
  }

  // 2. Check if this faculty is already assigned in the same department
  const alreadyAssigned = await prisma.subjectFaculty.findFirst({
    where: {
      facultyId: facultyId,
      department: department,
    },
  });

  if (alreadyAssigned) {
    throw new ApiError(
      409,
      `Faculty (ID: ${facultyId}) is already assigned in department ${department}.`
    );
  }

  // 3. Create subject-faculty relation
  const subjectFaculty = await prisma.subjectFaculty.create({
    data: {
      facultyId,
      subjectId,
      department,
      role: "Faculty",
      yearId,
      aBatch,
      bBatch,
      cBatch,
      dBatch,
    },
  });

  res.status(200).json(
    new ApiResponse(
      200,
      subjectFaculty,
      "Subject Faculty assigned successfully."
    )
  );
});


export const getFacultyBySubject = asyncHandler(async (req, res) => {

  const subjectId = Number(req.params.subjectId);

  if (isNaN(subjectId)) {
    throw new ApiError(400, "Invalid subjectId.");
  }

  const existSubject = await prisma.subject.findFirst({
    where: { id: subjectId }
  });

  if (!existSubject) {
    throw new ApiError(409, "Subject is not available in the database.");
  }

  const faculties = await prisma.subjectFaculty.findMany({
    where: { subjectId: subjectId },
    include: {
      faculty: true // populate faculty details
    }
  });

  res.status(200).json(
    new ApiResponse(
      200,
      faculties,
      "Subject faculty fetched successfully."
    )
  );

});
