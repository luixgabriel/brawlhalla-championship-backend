-- CreateEnum
CREATE TYPE "ChampionshipStatus" AS ENUM ('ONGOING', 'COMPLETED', 'POSTPONED');

-- AlterTable
ALTER TABLE "championship" ADD COLUMN     "status" "ChampionshipStatus" NOT NULL DEFAULT 'ONGOING';
