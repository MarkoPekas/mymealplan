import { prisma } from "../../../../utils/prisma"

export default async function handler(req, res) {
    const { user } = req.query

    const meals = await prisma.calorie.findMany({
        where: {
            userId: user,
            date: {
                gt: new Date(new Date().setDate(new Date().getDate() - 1))
            }
        }
    })
    res.status(200).json({
        message: "success",
        data: meals
    })
}