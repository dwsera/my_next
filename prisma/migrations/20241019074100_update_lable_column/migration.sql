/*
  Warnings:

  - You are about to drop the column `lable_teo` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `title_two` on the `project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `project` DROP COLUMN `lable_teo`,
    DROP COLUMN `title_two`;

-- CreateTable
CREATE TABLE `Delivery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_two` VARCHAR(191) NOT NULL,
    `lable_teo` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
