import Link from "next/link"
import { IoMdMusicalNote, IoIosContacts } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";

export const Navbar = () => {
    return(
        <>
        <nav className="w-full bg-black flex justify-start items-center flex-col sm:flex-row gap-4 p-4 text-white sticky top-0 z-50 ">
             <span className="ml-1 font-bold"><FaSpotify size={35} className="text-green-600 inline-block mr-1.5" />Spotify</span>
            <Link className="hover:text-green-600 py-3 px-6 font-bold" href={'/'}>Juice WRLD Last Album <IoMdMusicalNote size={25} className="inline-block" /></Link>
            <Link className="hover:text-green-600 py-3 px-6 font-bold" href={'/contact_us'}>Contact Us <IoIosContacts size={25} className="inline-block"/></Link>
        </nav>
        </>
    )
}