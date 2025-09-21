/*
  Warnings:

  - You are about to drop the `BatchAssignment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BatchAssignment" DROP CONSTRAINT "BatchAssignment_subjectFacultyId_fkey";

-- AlterTable
ALTER TABLE "SubjectFaculty" ADD COLUMN     "aBatch" BOOLEAN,
ADD COLUMN     "bBatch" BOOLEAN,
ADD COLUMN     "cBatch" BOOLEAN,
ADD COLUMN     "dBatch" BOOLEAN;

-- DropTable
DROP TABLE "BatchAssignment";

-- DropEnum
DROP TYPE "BatchEnum";
