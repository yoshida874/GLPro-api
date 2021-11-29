/*
  Warnings:

  - Made the column `region_id` on table `Area` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Area" DROP CONSTRAINT "Area_region_id_fkey";

-- AlterTable
ALTER TABLE "Area" ALTER COLUMN "region_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Area" ADD CONSTRAINT "Area_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
