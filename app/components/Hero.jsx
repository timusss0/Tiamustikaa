import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineViewGrid , HiDownload} from "react-icons/hi";
import { motion } from "motion/react";
import { CursorProvider, Cursor, CursorFollow } from "@/components/animate-ui/components/animate/cursor";


export const Hero = () => {

  // animation varians
  const container = {
    hidden:{opacity:0},
    show:{
      opacity:1,
      transition:{
        starggerChildren:0.1
      }
    }
  }
const item = {
  hidden:{opacity:0,y:20},
  show:{opacity:1,y:0,transition:{duration:0.6,ease:"easeOut"}}
}

  return (
    <motion.div 
    variants={container}
    initial="hidden"
    animate="show"
    id="/" className="max-w-2xl md:mb-88 m-auto flex flex-col md:items-center md:justify-center lg:justify-center text-center lg:items-center pb-12 md:22 overflow-hidden">  
        <CursorProvider>
        <Cursor />
        <CursorFollow>Tia</CursorFollow>
        <motion.div variants={item}>
            <Image src="/Tia_mustika.png" width={150} height={150} className="relative z-40 mt-12 md:mt-27 rounded-full mb-4 mx-auto object-center object-co" alt="Image profile tia" priority/>
            <motion.h3 
            variants={item}className="text-base lg:text-lg md:text-xl font-semibold flex items-center justify-center gap-2">I'm Tia Mustika</motion.h3>
            <motion.h1 variants={item} className="text-xl md:text-3xl lg:text-5xl font-semibold md:mt-3 leading-tight">Fullstack Developer</motion.h1>
        </motion.div>
        {/* button */}
        <motion.div variants={item} className="flex flex-col md:flex-row items-center gap-8 my-8  ">
          <Link href="#portfolio" className="w-full text-sm lg:text-lg md:text-xl bg-gradient-to-r from-pink-300 to-blue-300  md:w-auto py-3 md:py-3 px-8 text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">My Portfolio     <HiOutlineViewGrid /></Link>
          <Link href="/resume.pdf" className="w-full md:w-auto text-sm lg:text-lg md:text-xl bg-gradient-to-r from-pink-100 to-blue-100 border-gray-300 border-2 py-2.5 px-8 text-gray-800 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-sm" download>My Resume  <HiDownload /></Link>
        </motion.div>
        </CursorProvider>
    </motion.div>
  )
}
