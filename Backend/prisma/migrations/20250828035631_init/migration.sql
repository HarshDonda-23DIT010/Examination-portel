/*
  Warnings:

  - Added the required column `batch` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `div` on the `Student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `department` to the `SubjectFaculty` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Batch" AS ENUM ('A', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "Div" AS ENUM ('DIT1', 'DIT2', 'DCS1', 'DCS2', 'DCE1', 'DCE2');

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "batch" "Batch" NOT NULL,
DROP COLUMN "div",
ADD COLUMN     "div" "Div" NOT NULL;

-- AlterTable
ALTER TABLE "SubjectFaculty" ADD COLUMN     "department" "Department" NOT NULL;
