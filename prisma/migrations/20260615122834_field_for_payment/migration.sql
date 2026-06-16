/*
  Warnings:

  - A unique constraint covering the columns `[invoiceId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `payment` ADD COLUMN `invoiceId` VARCHAR(191) NULL,
    ADD COLUMN `invoiceUrl` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Payment_invoiceId_key` ON `Payment`(`invoiceId`);
