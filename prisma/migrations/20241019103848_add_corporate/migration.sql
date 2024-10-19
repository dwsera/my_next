/*
  Warnings:

  - You are about to drop the `topic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `topic`;

-- CreateTable
CREATE TABLE `Corporate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `label` TEXT NOT NULL,
    `img` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
