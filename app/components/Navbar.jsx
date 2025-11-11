"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const navLinks = [
    { name: "Home" , href:"#"},
    { name: "Portfolio" , href:"#portfolio"},
    { name: "resume" , href:"#resume"},
    { name: "Contact" , href:"#contact"},


  ]
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-full py-4">
      <nav className="flex items-center justify-between bg-white/10 dark:bg-blue-400/10 backdrop-blur-md px-6 py-3 rounded-2xl shadow-md">
        
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-semibold text-black dark:text-black hover:text-gray-900 transition-colors"
        >
          Tia
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-black dark:text-gray-900 text-lg">
          {navLinks.map((link, index) => (
            <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors ">
                {link.name}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            // Ikon Matahari (mode terang)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM4.22 5.47a1 1 0 011.42 0L6.64 6.5a1 1 0 01-1.42 1.42L4.22 6.9a1 1 0 010-1.42zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm7 7a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zm7-7a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zm-1.22-4.53a1 1 0 010 1.42L14.78 8a1 1 0 01-1.42-1.42l1.42-1.42a1 1 0 011.42 0zM10 14a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          ) : (
            // Ikon Bulan (mode gelap)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700 dark:text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M17.293 13.293a8 8 0 11-10.586-10.586 7 7 0 1010.586 10.586z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};
