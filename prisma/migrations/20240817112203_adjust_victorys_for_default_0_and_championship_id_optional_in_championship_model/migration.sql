-- DropForeignKey
ALTER TABLE "championship" DROP CONSTRAINT "championship_champion_id_fkey";

-- AlterTable
ALTER TABLE "championship" ALTER COLUMN "champion_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "victorys" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "championship" ADD CONSTRAINT "championship_champion_id_fkey" FOREIGN KEY ("champion_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
