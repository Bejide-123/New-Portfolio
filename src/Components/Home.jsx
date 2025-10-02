import React from "react";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowDown } from "react-icons/fi";
import FadeUpSection from "./FadeUpSection";

const Home = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-black min-h-screen transition-colors duration-300" id="home">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 py-28 relative">
        <div className="relative z-10 space-y-8 max-w-4xl">
          <FadeUpSection>
            <p className="text-lg md:text-xl text-blue-700 dark:text-blue-400 font-medium">
              Hi there, I'm
            </p>
          </FadeUpSection>

          <FadeUpSection delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="block">Bejide Mofiyinfoluwa</span>
              <span className="text-blue-700 dark:text-blue-400">Israel</span>
            </h1>
          </FadeUpSection>

          <FadeUpSection delay={0.4}>
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Frontend Developer
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                I specialize in creating fast, accessible, and beautiful web applications 
                with React. Passionate about performance, user experience, and writing clean, 
                maintainable code that makes a difference.
              </p>
            </div>
          </FadeUpSection>

          <FadeUpSection delay={0.6}>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <a
                href="#projects"
                className="group px-8 py-4 bg-blue-700 text-white rounded-lg shadow-lg 
                         hover:bg-blue-800 hover:shadow-xl transition-all duration-300 
                         font-semibold flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <FiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
                         border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg 
                         hover:border-blue-700 dark:hover:border-blue-400 hover:shadow-xl 
                         transition-all duration-300 font-semibold"
              >
                Let's Connect
              </a>
            </div>
          </FadeUpSection>

          <FadeUpSection delay={0.8}>
            <div className="mt-12">
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-8 font-medium tracking-wide uppercase">
                Connect With Me
              </p>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/Bejide-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-100 dark:bg-gray-800 rounded-full 
                           text-gray-700 dark:text-gray-300 hover:text-white 
                           hover:bg-blue-700 dark:hover:bg-blue-600 
                           transition-all duration-300 hover:scale-110"
                  title="GitHub Profile"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="mailto:isbejide10@gmail.com"
                  className="group p-4 bg-gray-100 dark:bg-gray-800 rounded-full 
                           text-gray-700 dark:text-gray-300 hover:text-white 
                           hover:bg-blue-700 dark:hover:bg-blue-600 
                           transition-all duration-300 hover:scale-110"
                  title="Send Email"
                >
                  <MdEmail size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bejide-israel-8a2144377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gray-100 dark:bg-gray-800 rounded-full 
                           text-gray-700 dark:text-gray-300 hover:text-white 
                           hover:bg-blue-600 dark:hover:bg-blue-500 
                           transition-all duration-300 hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </FadeUpSection>

          {/* Scroll indicator */}
          <FadeUpSection delay={1.0}>
            <div className="mt-10 animate-bounce">
              <a 
                href="#about" 
                className="inline-block p-2 text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
                title="Scroll to learn more"
              >
                <FiArrowDown size={24} />
              </a>
            </div>
          </FadeUpSection>
        </div>
      </div>
    </div>
  );
};

export default Home;