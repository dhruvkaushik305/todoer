-- DropIndex
DROP INDEX "Todo_order_key";

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "order" DROP DEFAULT;
DROP SEQUENCE "Todo_order_seq";
