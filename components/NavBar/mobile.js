import { AdjustmentsIcon, BeakerIcon, BellIcon, CalendarIcon, CollectionIcon, HomeIcon, LogoutIcon, MenuAlt2Icon } from "@heroicons/react/outline";
import Link from "next/link";
import LoginButton from "../next-auth/LoginButton";

const NavBar = ({id}) => {
    return (
        <div className='fixed top-0 left-0 w-full py-2 flex px-4 items-center justify-between bg-[#ffffff00] backdrop-blur-sm'>
            <MenuAlt2Icon className='w-6 h-6 text-gray-500 md:hidden' />
            <div className="hidden md:flex items-center gap-3">
                <p className="font-black text-xl">TheMeal</p>
                <a className="text-gray-500 cursor-pointer"></a>
            </div>
            <div className="flex gap-3">
                <div className="p-1.5 bg-blue-400 rounded-md">
                    <BellIcon className='w-6 h-6 text-white' />
                </div>
                <LoginButton />
            </div>
        </div>
    )
}

export default NavBar;