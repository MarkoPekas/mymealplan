import axios from "axios"
import { prisma } from "../../../utils/prisma"

export default async function handler(req, res) {
  const url = 'https://api.api-ninjas.com/v1/nutrition'
  const { meal, user } = req.body
  const mealId = Math.floor(Math.random() * 1000000).toString()
  const date = new Date()
  console.log(meal)
  const nutrition = await axios.get(url, {
    params: {
      query: meal||'6 eggs',
    },
    headers: {
      'X-Api-Key': process.env.APININJA_API_KEY
    }
  })
  const data = nutrition.data.map(item => ({
    userId: user,
    date,
    calories: parseInt(item.calories),
    serving_size_g: parseInt(item.serving_size_g),
    fat_total_g: parseInt(item.fat_total_g),
    fat_saturated_g: parseInt(item.fat_saturated_g),
    protein_g: parseInt(item.protein_g),
    sodium_mg: parseInt(item.sodium_mg),
    potassium_mg: parseInt(item.potassium_mg),
    cholesterol_mg: parseInt(item.cholesterol_mg),
    carbohydrates_total_g: parseInt(item.carbohydrates_total_g),
    fiber_g: parseInt(item.fiber_g),
    sugar_g: parseInt(item.sugar_g),
    name: item.name,
    mealId,
    description: meal
  }))
  console.log(data)
  const addcalories = await prisma.calorie.createMany({
    data
  })
  res.status(200).json({
    message: "success",
    data
  })
}
