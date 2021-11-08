/*
  Warnings:

  - You are about to drop the column `user_Id` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `area_Id` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `area_Id` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `user_Id` on the `Review` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `area_id` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Answer] DROP CONSTRAINT [Answer_user_Id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Question] DROP CONSTRAINT [Question_area_Id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Question] DROP CONSTRAINT [Question_user_Id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Review] DROP CONSTRAINT [Review_area_Id_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Review] DROP CONSTRAINT [Review_user_Id_fkey];

-- AlterTable
ALTER TABLE [dbo].[Answer] DROP COLUMN [user_Id];
ALTER TABLE [dbo].[Answer] ADD [user_id] INT NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Question] DROP COLUMN [area_Id],
[user_Id];
ALTER TABLE [dbo].[Question] ADD [area_id] INT,
[user_id] INT NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Review] DROP COLUMN [area_Id],
[user_Id];
ALTER TABLE [dbo].[Review] ADD [area_id] INT NOT NULL,
[user_id] INT NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Review] ADD CONSTRAINT [Review_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Review] ADD CONSTRAINT [Review_area_id_fkey] FOREIGN KEY ([area_id]) REFERENCES [dbo].[Area]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Question] ADD CONSTRAINT [Question_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Question] ADD CONSTRAINT [Question_area_id_fkey] FOREIGN KEY ([area_id]) REFERENCES [dbo].[Area]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Answer] ADD CONSTRAINT [Answer_user_id_fkey] FOREIGN KEY ([user_id]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
