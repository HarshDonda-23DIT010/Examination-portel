import prisma from "../DB/db.config.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const AddSubjectFaculties = asyncHandler(async (req, res) => {
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