import { AdjustmentsIcon, BeakerIcon, BellIcon, CalendarIcon, ChevronLeftIcon, CollectionIcon, HeartIcon, HomeIcon, LogoutIcon, MenuAlt2Icon } from "@heroicons/react/outline";
import Link from "next/link";
import LoginButton from "../next-auth/LoginButton";

const variants = {
    home: <>
    <MenuAlt2Icon className='w-6 h-6 text-gray-500 md:hidden' />
    <div className="hidden md:flex items-center gap-3">
        <p className="font-black text-xl text-white">TheMeal</p>
        <a className="text-gray-500 cursor-pointer"></a>
    </div>
    <div className="flex gap-3">
        <div className="p-1.5 bg-blue-400 rounded-xl">
            <BellIcon className='w-6 h-6 text-white' />
        </div>
        <LoginButton />
    </div> 
</>,
    recipe: <>
    <Link href='/'>
        <ChevronLeftIcon className='w-6 h-6 text-white cursor-pointer' />
    </Link>
    <div className="flex gap-3">
        <div className="p-1.5 bg-red-400 rounded-xl cursor-pointer">
            <HeartIcon className='w-6 h-6 text-white' fill={'white'} />
        </div>
    </div> 
</>
}

const NavBar = ({id}) => {
    return (
        <div className={`fixed top-0 left-0 w-full py-2 z-10 flex px-4 items-center justify-between bg-[#ffffff00] ${id==='home'&&'backdrop-blur-sm'}`}>
            {variants[id]}
        </div>
    )
}

export default NavBar;