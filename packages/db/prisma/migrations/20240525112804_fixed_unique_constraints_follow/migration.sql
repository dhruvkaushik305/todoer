-- DropIndex
DROP INDEX "Follow_followedById_key";

-- DropIndex
DROP INDEX "Follow_userId_key";

-- AlterTable
ALTER TABLE "Cheer" ALTER COLUMN "count" SET DEFAULT 0;
