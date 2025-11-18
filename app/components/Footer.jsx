import Link from 'next/link';
import React from 'react'
import { FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    const sosialMedia = [
        {icon: FaInstagram, href:"https://instagram.com/mus.ssh"},
        {icon:FaGithub, href:"https://github.com/timusss0"},
        {icon:FaLinkedin,href:"https://www.linkedin.com/in/tia-mustika/"}
    ]
  return (
    <div>
   <footer className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 py-12 px-4 text-center 
     backdrop-blur-xl shadow-md ">
            <div className="flex justify-center  gap-3 md:gap-6 mb-8 ">
                {sosialMedia.map((social, index) => {
                    const IconComponent = social.icon
                    return(
                        <Link href={social.href} key={index} className="p-4 rounded-2xl border border-outer hover:bg-pink-400/20 transition-all">
                            <IconComponent className="text-xl md:text-2xl text-pink-500"/>
                        </Link>                    
                        )
                })}
            </div>
            <p className="text-sm md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8">want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible</p>
            <hr className="border-outer mb-8"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-md">
                <div>
                    <p className="font-semibold">Location</p>
                    <p >South Tangerang.</p>
                </div>
                <div>
                    <p className="font-semibold">Phone</p>
                    <p>0859-6586-5409</p>
                </div>
                <div>
                    <p className="font-semibold">Email</p>
                    <p>mus770101@gmail.com</p>
                </div>
            </div>
        </footer>
    </div>
  )
}
