import React, { useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Fifi.<span className="text-blue-700 dark:text-blue-400">Codes</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-black dark:text-gray-500">
          <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Right side: Mobile menu + Theme toggle */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded text-gray-700 dark:text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Theme Toggle (always at far right) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-800 dark:text-gray-500"
          >
            {dark ? <MdSunny size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t dark:border-gray-700">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-800 dark:text-gray-200">
            <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
