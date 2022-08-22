import { XCircleIcon } from "@heroicons/react/outline";

const MealCardHorizontal = () => {
    return (
        <div className='flex items-center shadow-lg md:shadow px-4 py-2 gap-3'>
            <div className='rounded-full w-12 h-12 relative overflow-hidden'>
              <img src='https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg' alt='breakfast' />
            </div>
            <p className='font-medium text-gray-900 md:text-lg'>Croatian Bean Stew</p>
            <div className='flex-1'></div>
            <XCircleIcon className='w-6 h-6 text-red-500' />
        </div>
    )
}

export default MealCardHorizontal;