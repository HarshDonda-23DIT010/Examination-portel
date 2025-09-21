-- CreateEnum
CREATE TYPE "BatchEnum" AS ENUM ('A', 'B', 'C', 'D');

-- AlterEnum
ALTER TYPE "Department" ADD VALUE 'NONE';

-- CreateTable
CREATE TABLE "BatchAssignment" (
    "id" SERIAL NOT NULL,
    "batch" "BatchEnum" NOT NULL,
    "subjectFacultyId" TEXT NOT NULL,

    CONSTRAINT "BatchAssignment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BatchAssignment" ADD CONSTRAINT "BatchAssignment_subjectFacultyId_fkey" FOREIGN KEY ("subjectFacultyId") REFERENCES "SubjectFaculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
