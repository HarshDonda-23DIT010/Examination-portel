/*
  Warnings:

  - The values [taken,notTaken,pending] on the enum `ExamStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `class1` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `class2` on the `Exam` table. All the data in the column will be lost.
  - Added the required column `batch` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `division` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `Exam` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "Batch" ADD VALUE 'NONE';

-- AlterEnum
BEGIN;
CREATE TYPE "ExamStatus_new" AS ENUM ('Taken', 'Pending');
ALTER TABLE "Exam" ALTER COLUMN "status" TYPE "ExamStatus_new" USING ("status"::text::"ExamStatus_new");
ALTER TYPE "ExamStatus" RENAME TO "ExamStatus_old";
ALTER TYPE "ExamStatus_new" RENAME TO "ExamStatus";
DROP TYPE "ExamStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "class1",
DROP COLUMN "class2",
ADD COLUMN     "batch" "Batch" NOT NULL,
ADD COLUMN     "division" "Div" NOT NULL,
ALTER COLUMN "date" SET NOT NULL;
