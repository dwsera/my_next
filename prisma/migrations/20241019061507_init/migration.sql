-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `lable` VARCHAR(191) NOT NULL,
    `img` VARCHAR(191) NOT NULL,
    `title_two` VARCHAR(191) NOT NULL,
    `lable_teo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
