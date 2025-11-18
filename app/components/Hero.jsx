import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineViewGrid , HiDownload} from "react-icons/hi";
import { motion } from "motion/react";
import { CursorProvider, Cursor, CursorFollow } from "@/components/animate-ui/components/animate/cursor";

export const Hero = () => {

  const icons = [
    { src:"/icons/html.png", dark:false},
    { src:"/icons/css.png", dark:false},
    { src:"/icons/tailwind.png", dark:false},
    { src:"/icons/next.svg", dark:true},
    { src:"/icons/express.png", dark:true},
    { src:"/icons/laravel.png", dark:false},
    { src:"/icons/mysql.png", dark:false}
  ]

  const container = {
    hidden:{opacity:0},
    show:{
      opacity:1,
      transition:{ starggerChildren:0.1 }
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
      id="#"
      className="
        max-w-2xl md:mt-40
        mx-auto mt-20
        mb-20 md:mb-54 
        flex flex-col 
        items-center justify-center 
        text-center 
        pb-12 overflow-hidden
      " 
    >
      <CursorProvider>
        <Cursor />
        <CursorFollow>Tia</CursorFollow>

        {/* Profile */}
        <motion.div variants={item} className="flex flex-col items-center justify-center">

          <Image
            src="/Tia_mustika.png"
            width={150}
            height={150}
            className="relative z-40 mt-12 md:mt-20 rounded-full mb-4 mx-auto"
            alt="Image profile tia"
            priority
          />

          <motion.h3
            variants={item}
            className="text-sm md:text-xl lg:text-2xl font-semibold flex items-center justify-center gap-2"
          >
            I'm Tia Mustika
          </motion.h3>

          <motion.h1
            variants={item}
            className="text-xl md:text-3xl lg:text-5xl font-semibold md:mt-2 leading-tight"
          >
            Fullstack Developer
          </motion.h1>

          <div className="relative my-6 md:my-8 w-full mask-r-from-50% mask-1-form-50% overflow-hidden">
            <motion.div 
              animate={{ x: ["0","-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear"
              }}
               className="flex gap-4 left-0 top-0"
            >
              {icons.concat(icons).map((icon, index) => (
                <Image 
                  src={icon.src} 
                  key={index} 
                  width={40} 
                  height={40} 
                  alt="icons tech" 
                  className={`object-contain md:w-[50px] md:h-[50px] ${icon.dark ? "dark:invert" : ""}`}
                />
              ))}
            </motion.div>
          </div>

        </motion.div>

        {/* Button */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center justify-center gap-4 my-4"
        >
          <Link
            href="#portfolio"
            className="w-full md:w-auto text-sm md:text-xl lg:text-lg bg-gradient-to-r from-pink-300 to-blue-300 py-3 px-8 text-black rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300"
          >
            My Portfolio <HiOutlineViewGrid />
          </Link>

          <Link
            href="/resume.pdf"
            className="w-full md:w-auto text-sm md:text-xl lg:text-lg bg-gradient-to-r from-pink-100 to-blue-100 border-gray-300 border-2 py-2.5 px-8 text-gray-800 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 shadow-sm"
            download
          >
            My Resume <HiDownload />
          </Link>
        </motion.div>
      </CursorProvider>
    </motion.div>
  )
}
