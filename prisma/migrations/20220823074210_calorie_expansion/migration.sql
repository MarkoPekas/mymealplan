/*
  Warnings:

  - Added the required column `carbohydrates_total_g` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cholesterol_mg` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat_saturated_g` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat_total_g` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fiber_g` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mealId` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `potassium_mg` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein_g` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serving_size_g` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sodium_mg` to the `Calorie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar_g` to the `Calorie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calorie" ADD COLUMN     "carbohydrates_total_g" INTEGER NOT NULL,
ADD COLUMN     "cholesterol_mg" INTEGER NOT NULL,
ADD COLUMN     "fat_saturated_g" INTEGER NOT NULL,
ADD COLUMN     "fat_total_g" INTEGER NOT NULL,
ADD COLUMN     "fiber_g" INTEGER NOT NULL,
ADD COLUMN     "mealId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "potassium_mg" INTEGER NOT NULL,
ADD COLUMN     "protein_g" INTEGER NOT NULL,
ADD COLUMN     "serving_size_g" INTEGER NOT NULL,
ADD COLUMN     "sodium_mg" INTEGER NOT NULL,
ADD COLUMN     "sugar_g" INTEGER NOT NULL;
