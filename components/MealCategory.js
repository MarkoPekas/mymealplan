const MealCategory = (props) => {
    return (
        <div className='flex gap-3 overflow-x-auto overflow-y-visible p-4 -mx-4'>
          <div className='py-2 px-4 bg-red-400 shadow-lg cursor-pointer text-white font-medium rounded-md'>
            <p>All</p>
          </div>
          <div className='py-2 px-4 bg-white shadow-lg cursor-pointer text-gray-900 font-medium rounded-md'>
            <p>Breakfast</p>
          </div>
          <div className='py-2 px-4 bg-white shadow-lg cursor-pointer text-gray-900 font-medium rounded-md'>
            <p>Lunch</p>
          </div>
          <div className='py-2 px-4 bg-white shadow-lg cursor-pointer text-gray-900 font-medium rounded-md'>
            <p>Dinner</p>
          </div>
          <div className='py-2 px-4 bg-white shadow-lg cursor-pointer text-gray-900 font-medium rounded-md'>
            <p>Snack</p>
          </div>
        </div>
    )
}

export default MealCategory;