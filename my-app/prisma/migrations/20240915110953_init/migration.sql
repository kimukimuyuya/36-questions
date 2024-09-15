/*
  Warnings:

  - You are about to drop the column `createdAt` on the `SurveyResult` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "level" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SurveyResult" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "content" DROP NOT NULL;
