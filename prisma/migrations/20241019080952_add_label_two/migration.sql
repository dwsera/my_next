/*
  Warnings:

  - You are about to drop the column `lable_teo` on the `projectdetail` table. All the data in the column will be lost.
  - Added the required column `label_two` to the `ProjectDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projectdetail` DROP COLUMN `lable_teo`,
    ADD COLUMN `label_two` VARCHAR(191) NOT NULL;
