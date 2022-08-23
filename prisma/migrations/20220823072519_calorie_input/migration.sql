-- CreateTable
CREATE TABLE "Calorie" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "calories" INTEGER NOT NULL,
    "description" TEXT,

    CONSTRAINT "Calorie_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calorie" ADD CONSTRAINT "Calorie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
