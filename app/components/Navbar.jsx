"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

   useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;  

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full py-4 md:flex md:justify-center sticky top-0 z-50"
    >
      {/* DESKTOP NAV */}
      <nav className="hidden min-[825px]:flex md:w-6xl items-center justify-between 
       bg-white/10 
        backdrop-blur-md px-6 py-3 rounded-2xl shadow-md">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-semibold transition-all"
        >
          Tia<span className="text-3xl">.</span>
        </motion.a>

        {/* Desktop Links */}
        <motion.div
          className="flex items-center gap-6 text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="font-bold hover:text-content-alter  transition-all"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Desktop Dark Mode Toggle */}
        <motion.button
          onClick={toggleTheme}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-2 rounded-full transition"
        >
          {theme === "dark" ? (
            <FaRegMoon className="w-5 h-5"  />
          ) : (
            <IoSunnyOutline className="w-5 h-5" />
          )}
        </motion.button>
      </nav>

      {/* MOBILE NAV */}
       <nav className="flex min-[825px]:hidden md:w-6xl items-center justify-between backdrop-blur-md px-6 py-3 rounded-2xl shadow-md">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold"
        >
          Tia<span className="text-3xl ">.</span>
        </Link>
   <div className="flex items-center">  
    {/* Mobile Dark Mode Toggle */}
    <motion.button
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="p-2 rounded-full transition"
    >
      {theme === "dark" ? (
        <FaRegMoon className="w-5 h-5" />
      ) : (
        <IoSunnyOutline className="w-5 h-5" />
      )}
    </motion.button>

    {/* Hamburger Menu */}
    <button
      onClick={toggleMenu}
      aria-label="Toggle Menu"
      className="p-2"
    >
      <AnimatePresence mode="wait">
        {isMenuOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
          >
            <RiCloseLine className="text-2xl" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 90, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
          >
            <RiMenu4Line className="text-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>

  </div>
      </nav>


      {/* MOBILE DROPDOWN */}
      
      <AnimatePresence>
        {isMenuOpen && (
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-[825px]:hidden fixed top-[86px] left-0 z-40 w-full px-10"
    >
      <div className="shadow-lg rounded-2xl p-3 mt-2 backdrop-blur-md">
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              onClick={closeMenu}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-[18px] py-3 border-b font-bold
                         transition-all duration-300 ease-in-out"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
        )}
        
      </AnimatePresence>
    </motion.header>
  );
};
