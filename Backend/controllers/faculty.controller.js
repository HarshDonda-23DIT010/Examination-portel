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

export const AddSubjectFaculties = asyncHandler(async (req, res) => {
   const {
      subjectId,
      department,
      role,
      yearId,
      aBatch,
      bBatch,
      cBatch,
      dBatch
   } = req.body;
   const facultyId = req.user.id;

   if (!subjectId || !department || !role || !yearId) {
      throw new ApiError(400, "All fields are required.")
   }
   if (role === "BATCH" && !aBatch && !bBatch && !cBatch && !dBatch) {

      throw new ApiError(400, "At least one batch must be selected for BATCH role.")
   }
   const existFaculty = await prisma.subjectFaculty.findFirst({
      where: {
         facultyId,
         subjectId,
         department,
         yearId
      }
   })
   if (existFaculty) {
      throw new ApiError(409, "Subject Faculty is already assigned.");
   }
   const subjectFaculty = await prisma.subjectFaculty.create({
      data: {
         facultyId,
         subjectId,
         department,
         role,
         yearId,
         aBatch: role === "BATCH" ? aBatch : null,
         bBatch: role === "BATCH" ? bBatch : null,
         cBatch: role === "BATCH" ? cBatch : null,
         dBatch: role === "BATCH" ? dBatch : null,
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