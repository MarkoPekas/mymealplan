import { CheckCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";

const MealCard = (props) => {
    const [checked, setChecked] = useState(false);
    return (
      <Link href='/recipe'>
        <div className='w-[33vw] md:w-full flex-shrink-0 md:p-4 p-2 shadow-lg rounded-md flex flex-col cursor-pointer'>
            <div className='flex w-full justify-end py-2' onClick={() => setChecked(!checked)}>
              <CheckCircleIcon className={`w-6 h-6 ${checked?'text-red-500':'text-gray-500'}`} />
            </div>
            <div className='aspect-square rounded-xl overflow-hidden relative'>
              <img src='https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg' alt='breakfast' />
            </div>
            <p className='md:text-xl text-lg font-medium pt-2'>Croatian Bean Stew</p>
        </div>
      </Link>
    )
}

export default MealCard;