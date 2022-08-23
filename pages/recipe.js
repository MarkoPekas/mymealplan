import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import YouTube from "react-youtube"
import NavBar from "../components/NavBar/mobile"

export const getStaticProps = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const { data } = await axios.get(url)
    const meal = data.meals[0]
    // map the ingredients named ingredient1 ingredint2 etc to an array of objects
    const ingredients = Object.keys(meal).map(key => {
        if (key.includes('strIngredient')) {
            return {
                name: meal[key],
                amount: meal[key.replace('strIngredient', 'strMeasure')]
            }
        }
    }).filter(ingredient => (ingredient && ingredient?.name))


    return {
        props: {
            meal: data.meals[0],
            ingredients
        }
    }
}

const options = [
    'Details',
    'Ingredients'
]

const Recipe = (props) => {
    const [selected, setSelected] = useState('Details')
    const { meal, ingredients } = props
    console.log(meal)
    return (
        <div className="">
            <NavBar id='recipe' />
            <div className="grid lg:grid-cols-2">
                <div className="h-[40vh] lg:h-[100vh] w-full relative overflow-hidden">
                    <Image
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="px-4 py-2 lg:pt-16 overflow-x-hidden lg:overflow-y-scroll lg:h-screen">
                    <div className="flex items-center pb-4 justify-between">
                        <h1 className="font-black text-2xl lg:text-4xl">{meal.strMeal}</h1>
                        <p className="text-gray-500 text-sm">{meal.strArea} - {meal.strCategory}</p>
                    </div>
                    <p className="font-bold lg:text-lg">Ingredients</p>
                    <div className="flex overflow-x-auto overflow-y-visible py-2 -mx-4 px-4 lg:grid lg:grid-cols-8">
                        {ingredients.map((item, i) => (
                        <div className="w-16 h-16 rounded-md relative flex-shrink-0" key={i}>
                            <Image
                                src={`https://www.themealdb.com/images/ingredients/${item.name}-Small.png`}
                                alt={item.name}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex gap-8 pt-4">
                            {options.map((option, i) => (
                                <div key={i} onClick={() => setSelected(option)}>
                                    <p className={`${option!==selected?'text-gray-400 font-semibold':'font-bold'} cursor-pointer`}>{option}</p>
                                    <div className={`h-[3px] rounded-full w-full bg-red-400 cursor-pointer ${option!==selected&&'hidden'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="py-2 text-gray-500">
                        {selected === 'Details' && (
                            <>
                                <p>{meal.strInstructions}</p>
                                <div className="w-full relative aspect-video">
                                    <YouTube
                                        videoId={meal.strYoutube.split('=')[1]}
                                        opts={{
                                            height: '290',
                                            width: '100%',
                                        }}
                                    />
                                </div>
                            </>
                            )}
                        <table>
                        {selected === 'Ingredients' && ingredients.map((item, i) => (
                            <tr key={i}>
                                <td>{item.amount}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Recipe;