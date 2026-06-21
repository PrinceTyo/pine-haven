/*
  Warnings:

  - You are about to drop the column `image` on the `room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `room` DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `RoomImage` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoomImage` ADD CONSTRAINT `RoomImage_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
