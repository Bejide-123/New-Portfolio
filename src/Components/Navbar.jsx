import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Default to dark mode
    document.documentElement.classList.add("dark");

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#0D0D0F]/90 backdrop-blur-xl border-b border-white/[0.06] py-4"
          : "bg-transparent py-6"
        }
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <span className="font-syne text-[18px] font-bold tracking-tight text-white">
          Fiyin<span className="text-amber-400">.dev</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="text-[13px] uppercase tracking-[0.08em] font-medium
                           text-white/40 hover:text-amber-400 cursor-pointer
                           transition-colors duration-200"
                activeClass="!text-amber-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-white/[0.08] text-white/40
                       hover:text-white hover:border-white/20 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {dark
              ? <MdSunny size={16} />
              : <FaMoon size={16} />
            }
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg border border-white/[0.08]
                       text-white/40 hover:text-white hover:border-white/20
                       transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0D0D0F]/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className="block py-3 text-[13px] uppercase tracking-[0.08em]
                             font-medium text-white/40 hover:text-white cursor-pointer
                             transition-colors duration-200 border-b border-white/[0.04]"
                  activeClass="!text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;