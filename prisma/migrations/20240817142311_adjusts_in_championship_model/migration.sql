/*
  Warnings:

  - You are about to drop the column `avatar_url` on the `championship` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `championship` table. All the data in the column will be lost.
  - You are about to drop the column `pix_key` on the `championship` table. All the data in the column will be lost.
  - You are about to drop the column `victorys` on the `championship` table. All the data in the column will be lost.
  - Added the required column `end_date` to the `championship` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "championship_pix_key_key";

-- AlterTable
ALTER TABLE "championship" DROP COLUMN "avatar_url",
DROP COLUMN "name",
DROP COLUMN "pix_key",
DROP COLUMN "victorys",
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL;
