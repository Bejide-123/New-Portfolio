import React from "react";
import IMG from "../assets/IMG-20250921-WA0047[1].jpg";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CV from "../assets/Bejide-Mofiyinfoluwa-Israel.pdf"

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Picture */}
        <div className="flex justify-center">
          <img
            src={IMG}
            alt="Profile"
            className="w-180 h-110 object-cover rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 
            transform hover:shadow-blue-500/50 transition-transform duration-500"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                About Me
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto md:mx-0 rounded-full"></div>
          </div>
          
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I'm a{" "}
            <span className="text-blue-700 dark:text-blue-400 font-medium">
              Frontend Developer
            </span>{" "}
            passionate about creating fast, accessible, and user-friendly web
            applications. With experience in React, modern JavaScript, and
            responsive design, I focus on building interfaces that provide
            seamless experiences across all devices.
          </p>

          {/* Fun Touch */}
          <div className="bg-gray-50 mb-4 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-blue-700">
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 italic">
                When I'm not coding, you'll find me listening to music, exploring emerging
                technologies, and watching animated films. Always curious, always learning.
              </p>
            </div>

          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/Bejide-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:isbejide10@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <MdEmail size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bejide-israel-8a2144377/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href={CV}
              download
              className="w-44 flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md 
                        hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 
                        transition-colors duration-300 mb-6 mt-6"
            >
              <FiDownload size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;