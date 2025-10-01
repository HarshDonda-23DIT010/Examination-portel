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
      dBatch
   } = req.body;

   if (!subjectId || !facultyId || !department || !yearId) {
      throw new ApiError(400, "All fields are required.")
   }

   const existFaculty = await prisma.user.findFirst({
      where: {
         id: facultyId,
      },
   });

   if (!existFaculty) {
      throw new ApiError(409, "Faculty is Not present in the database.");
   }

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
      }
   })
   res.status(200).json(
      new ApiResponse(
         200,
         subjectFaculty,
         "Subject Faculty assigned Successfully."
      )
   )
})

export const updateSubjectFaculty = asyncHandler(async (req, res) => {
   const { facultyAssignmentId } = req.params;
   const {
      facultyId,
      department,
      aBatch,
      bBatch,
      cBatch,
      dBatch
   } = req.body;

   if (!facultyAssignmentId) {
      throw new ApiError(400, "Faculty assignment ID is required.");
   }

   const existingAssignment = await prisma.subjectFaculty.findFirst({
      where: { id: facultyAssignmentId }
   });

   if (!existingAssignment) {
      throw new ApiError(404, "Faculty assignment not found.");
   }

   // If facultyId is provided, verify the faculty exists
   if (facultyId) {
      const existFaculty = await prisma.user.findFirst({
         where: { id: facultyId },
      });

      if (!existFaculty) {
         throw new ApiError(409, "Faculty is not present in the database.");
      }
   }

   const updatedSubjectFaculty = await prisma.subjectFaculty.update({
      where: { id: facultyAssignmentId },
      data: {
         ...(facultyId && { facultyId }),
         ...(department && { department }),
         role: "Faculty", // Always set role as Faculty as per requirement
         ...(aBatch !== undefined && { aBatch }),
         ...(bBatch !== undefined && { bBatch }),
         ...(cBatch !== undefined && { cBatch }),
         ...(dBatch !== undefined && { dBatch }),
      },
      include: {
         faculty: true
      }
   });

   res.status(200).json(
      new ApiResponse(
         200,
         updatedSubjectFaculty,
         "Subject Faculty updated successfully."
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

export const removeSubjectFaculty = asyncHandler(async (req, res) => {
  const { facultyAssignmentId } = req.params;

  if (!facultyAssignmentId) {
    throw new ApiError(400, "Faculty assignment ID is required.");
  }

  const existingAssignment = await prisma.subjectFaculty.findFirst({
    where: { id: facultyAssignmentId }
  });

  if (!existingAssignment) {
    throw new ApiError(404, "Faculty assignment not found.");
  }

  await prisma.subjectFaculty.delete({
    where: { id: facultyAssignmentId }
  });

  res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Faculty removed from subject successfully."
    )
  );
});
