-- CreateTable
CREATE TABLE "Cheer" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Cheer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cheer_postId_key" ON "Cheer"("postId");

-- AddForeignKey
ALTER TABLE "Cheer" ADD CONSTRAINT "Cheer_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
