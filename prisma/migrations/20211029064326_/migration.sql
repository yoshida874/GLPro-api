BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [User_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [User_email_key] UNIQUE ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [id] INT NOT NULL IDENTITY(1,1),
    [category_name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Category_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Category_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Area] (
    [id] INT NOT NULL IDENTITY(1,1),
    [area_name] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Area_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Area_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Review] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_Id] INT NOT NULL,
    [area_Id] INT NOT NULL,
    [category_id] INT NOT NULL,
    [review_content] NVARCHAR(1000),
    [evaluation] INT NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Review_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Review_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Question] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_Id] INT NOT NULL,
    [area_Id] INT,
    [category_id] INT,
    [question_title] NVARCHAR(1000) NOT NULL,
    [question_content] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Question_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Question_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Answer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [user_Id] INT NOT NULL,
    [question_id] INT NOT NULL,
    [answer_title] NVARCHAR(1000) NOT NULL,
    [answer_content] NVARCHAR(1000) NOT NULL,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Answer_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Answer_pkey] PRIMARY KEY ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Review] ADD CONSTRAINT [Review_user_Id_fkey] FOREIGN KEY ([user_Id]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Review] ADD CONSTRAINT [Review_area_Id_fkey] FOREIGN KEY ([area_Id]) REFERENCES [dbo].[Area]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Review] ADD CONSTRAINT [Review_category_id_fkey] FOREIGN KEY ([category_id]) REFERENCES [dbo].[Category]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Question] ADD CONSTRAINT [Question_user_Id_fkey] FOREIGN KEY ([user_Id]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Question] ADD CONSTRAINT [Question_area_Id_fkey] FOREIGN KEY ([area_Id]) REFERENCES [dbo].[Area]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Question] ADD CONSTRAINT [Question_category_id_fkey] FOREIGN KEY ([category_id]) REFERENCES [dbo].[Category]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Answer] ADD CONSTRAINT [Answer_user_Id_fkey] FOREIGN KEY ([user_Id]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Answer] ADD CONSTRAINT [Answer_question_id_fkey] FOREIGN KEY ([question_id]) REFERENCES [dbo].[Question]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
