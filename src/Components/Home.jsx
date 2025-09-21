import React from "react";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FadeUpSection from "./FadeUpSection";

const Home = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-1 text-center px-6 space-y-6">
        <FadeUpSection>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
            Hi, I'm
          </p>
        </FadeUpSection>

        <FadeUpSection delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Bejide Mofiyinfoluwa Israel
          </h1>
        </FadeUpSection>

        <FadeUpSection delay={0.4}>
          <p className="text-sm md:text-lg font-normal text-blue-700 dark:text-gray-300 max-w-xl leading-relaxed">
            Frontend Developer specializing in performance, accessibility, and
            building great user experiences with React.
          </p>
        </FadeUpSection>

        <FadeUpSection delay={0.6}>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-transform transform hover:scale-105 duration-300 font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-transform transform hover:scale-105 duration-300 font-medium"
            >
              Contact Me
            </a>
          </div>
        </FadeUpSection>

        <FadeUpSection delay={0.8}>
          <div className="flex space-x-10 mt-6">
            <a
              href="https://github.com/Bejide-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110 duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="mailto:your.isbejide10@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110 duration-300"
            >
              <MdEmail size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/bejide-israel-8a2144377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110 duration-300"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </FadeUpSection>
      </div>
    </div>
  );
};

export default Home;
