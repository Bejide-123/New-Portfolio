import React from "react";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import CV from "../assets/Bejide-Mofiyinfoluwa-Israel.pdf"


const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
                About Me
            </h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a{" "}
              <span className="text-blue-700 dark:text-blue-400 font-medium">
                Frontend Developer
              </span>{" "}
              passionate about creating fast, accessible, and user-friendly web
              applications. With experience in React, modern JavaScript, and
              responsive design, I focus on building interfaces that provide
              seamless experiences across all devices.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My journey into web development started with a curiosity about how websites work,
              and it quickly evolved into a passion for crafting elegant solutions to complex problems.
              I believe in writing clean, maintainable code and staying up-to-date with the latest
              industry trends and best practices.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I specialize in building dynamic, responsive web applications using modern frameworks
              and tools. Whether it's optimizing performance, ensuring accessibility, or creating
              intuitive user interfaces, I'm committed to delivering high-quality results that
              exceed expectations.
            </p>

            {/* Fun Touch */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-l-4 border-blue-700 mb-8">
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 italic">
                When I'm not coding, you'll find me listening to music, exploring emerging
                technologies, and watching animated films. I believe in continuous learning
                and always seek new challenges that push me to grow as a developer. Always curious, always learning.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com/Bejide-123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:isbejide10@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/bejide-israel-8a2144377/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Download CV Button */}
          <a
            href={CV}
            download="Bejide-Mofiyinfoluwa-Israel.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md 
                      hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600 
                      transition-colors duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;