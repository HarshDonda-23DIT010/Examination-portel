/*
  Warnings:

  - A unique constraint covering the columns `[year]` on the table `Year` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Exam" ALTER COLUMN "date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Year" ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "endDate" SET DATA TYPE DATE;

-- CreateIndex
CREATE UNIQUE INDEX "Year_year_key" ON "Year"("year");
