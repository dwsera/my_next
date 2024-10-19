/*
  Warnings:

  - You are about to drop the column `lable` on the `project` table. All the data in the column will be lost.
  - Added the required column `label` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `project` DROP COLUMN `lable`,
    ADD COLUMN `label` TEXT NOT NULL;
