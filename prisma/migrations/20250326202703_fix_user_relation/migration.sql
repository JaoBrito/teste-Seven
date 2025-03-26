/*
  Warnings:

  - You are about to drop the column `usersId` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_usersId_fkey`;

-- DropIndex
DROP INDEX `orders_usersId_fkey` ON `orders`;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `usersId`;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
