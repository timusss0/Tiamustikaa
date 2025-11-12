import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineViewGrid , HiDownload} from "react-icons/hi";

export const Hero = () => {
  return (
    <div className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden">
        <div>
            <Image src="/Tia_mustika.png" width={150} height={150} className="rounded-full mb-4 mx-auto object-center object-co" alt="Image profile tia" priority/>
            <h3 className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">I'm Tia Mustika</h3>
            <h1 className="text-3xl md:text-5xl font-semibold mt-3 leading-tight">Fullstack Developer</h1>
           
        </div>
        {/* button */}
        <div className="flex flex-row md:flex-row items-center w-full md:w-auto gap-8 my-8">
          <Link href="#portfolio" className="text-lg custom-gradient w-full md:w-auto py-3 px-8 text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">My Portfolio  <HiOutlineViewGrid/></Link>
          <Link href="/resume.pdf" className="text-lg bg-gradient-to-r from-pink-100 to-blue-100 border-gray-300 border-2 w-full md:w-auto py-2.5 px-8 text-gray-800 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-sm" download>My Resume <HiDownload /></Link>
        </div>
    </div>
  )
}
