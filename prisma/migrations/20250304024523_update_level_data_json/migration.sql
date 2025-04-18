/*
  Warnings:

  - Changed the type of `level_data` on the `GameProgress` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "GameProgress" DROP COLUMN "level_data",
ADD COLUMN     "level_data" JSONB NOT NULL;
