/*
  Warnings:

  - You are about to drop the `delivery` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `delivery` DROP FOREIGN KEY `Delivery_projectId_fkey`;

-- DropTable
DROP TABLE `delivery`;

-- CreateTable
CREATE TABLE `ProjectDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title_two` VARCHAR(191) NOT NULL,
    `lable_teo` VARCHAR(191) NOT NULL,
    `projectId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProjectDetail` ADD CONSTRAINT `ProjectDetail_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
