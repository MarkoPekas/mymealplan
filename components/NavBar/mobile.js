import { AdjustmentsIcon, BeakerIcon, BellIcon, CalendarIcon, CollectionIcon, HomeIcon, MenuAlt2Icon } from "@heroicons/react/outline";
import Link from "next/link";

const NavBar = ({id}) => {
    return (
        <div className='fixed top-0 left-0 w-full py-2 flex px-4 items-center justify-between'>
            <MenuAlt2Icon className='w-6 h-6 text-gray-500' />
            <div className="p-1.5 bg-red-400 rounded-md">
                <BellIcon className='w-6 h-6 text-white' />
            </div>
        </div>
    )
}

export default NavBar;