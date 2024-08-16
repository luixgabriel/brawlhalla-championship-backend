/*
  Warnings:

  - Changed the type of `victorys` on the `championship` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "championship" DROP COLUMN "victorys",
ADD COLUMN     "victorys" INTEGER NOT NULL;
