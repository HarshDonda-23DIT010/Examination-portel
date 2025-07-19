/*
  Warnings:

  - The `dep_IT` column on the `Subject` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dep_CE` column on the `Subject` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dep_CSE` column on the `Subject` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "dep_IT",
ADD COLUMN     "dep_IT" BOOLEAN,
DROP COLUMN "dep_CE",
ADD COLUMN     "dep_CE" BOOLEAN,
DROP COLUMN "dep_CSE",
ADD COLUMN     "dep_CSE" BOOLEAN;
