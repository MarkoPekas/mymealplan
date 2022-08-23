import { useState } from "react";

const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack"
]

const MealCategory = (props) => {
  const [category, setCategory] = useState("All")
    return (
        <div className='flex gap-3 overflow-x-auto overflow-y-visible p-4 -mx-4'>
          {categories.map((item, index) => {
            return (
              <div className={`py-2 px-4 shadow-lg cursor-pointer ${item===category?'bg-red-400 text-white':'bg-white text-gray-900'} font-medium rounded-md`} key={index} onClick={() => setCategory(item)}>
                <p className='font-bold text-lg'>{item}</p>
              </div>
            )
          })}
        </div>
    )
}

export default MealCategory;