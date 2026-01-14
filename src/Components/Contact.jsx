import React from "react";
import { FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdSchedule } from "react-icons/md";
import { FiDownload, FiMessageCircle } from "react-icons/fi";
import { BiCoffee } from "react-icons/bi";
import CV from "../assets/Bejide-Israel_Frontend-Engineer.pdf"

const Contact = () => {
  return (
    <section className="bg-white dark:bg-black py-20" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading + Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Let's Connect & Create
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you have an exciting project in mind, need a reliable
            developer for your team, or just want to discuss the latest tech
            trends over coffee, I'm always eager to connect with fellow
            innovators and problem-solvers.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
          {/* Left Column */}
          <div className="space-y-8 flex flex-col">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 min-h-[260px]">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <FaRocket className="text-blue-700" />
                What I'm Up To
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Currently building innovative web solutions and exploring
                cutting-edge technologies. I'm passionate about creating
                user-centric applications that solve real-world problems. Right
                now, I’m sharpening my React skills, learning TypeScript, and
                preparing to dive into Next.js to perfect my front-end journey.
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MdSchedule />
                <span>Available for freelance projects</span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 min-h-[260px]">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <MdLocationOn className="text-blue-700" />
                Based In Lagos, Nigeria
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Open to both remote and on-site roles, I’m actively seeking
                internship opportunities where I can learn, grow, and gain
                hands-on experience. I’m eager to contribute to real projects,
                develop my skills, and collaborate with teams while building a
                strong foundation for my career.
              </p>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 min-h-[540px] flex flex-col">
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-6 text-center">
                Find Me Online
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 text-center line-clamp-3">
                Connect with me on these platforms for quick updates, code
                snippets, and professional networking.
              </p>

              <div className="grid grid-cols-1 gap-4 mt-auto">
                <a
                  href="https://github.com/Bejide-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-700 transition-all duration-300 group"
                >
                  <FaGithub
                    size={24}
                    className="text-gray-700 dark:text-gray-300 group-hover:text-blue-700"
                  />
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      GitHub
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Check out my repositories
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:isbejide10@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-700 transition-all duration-300 group"
                >
                  <MdEmail
                    size={24}
                    className="text-gray-700 dark:text-gray-300 group-hover:text-blue-700"
                  />
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      Email
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Direct communication
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/bejide-israel-8a2144377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-700 transition-all duration-300 group"
                >
                  <FaLinkedin
                    size={24}
                    className="text-gray-700 dark:text-gray-300 group-hover:text-blue-700"
                  />
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      LinkedIn
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Professional networking
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 min-h-[260px]">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2">
                <FaRocket className="text-blue-700" />
                Collaboration Style
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-4">
                I believe the best products are built when developers,
                designers, and stakeholders work closely together. I prioritize
                clear communication, teamwork, and delivering value at every
                step.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>• Open to feedback & iteration</p>
                <p>• Clear and consistent communication</p>
                <p>• Team-first mindset</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 min-h-[260px] flex flex-col">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Get My Resume
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-4">
                Want a comprehensive overview of my experience, skills, and
                projects? Download my latest resume for detailed information
                about my background.
              </p>
              <a
                href={CV}
                download
                className="flex items-center justify-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition-all duration-300 group w-full mt-auto"
              >
                <FiDownload
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-8 md:p-12 text-center border border-blue-100 dark:border-blue-800">
          <div className="flex justify-center mb-4">
            <BiCoffee size={48} className="text-blue-700" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Let's Grab a Virtual Coffee
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Have a project idea brewing? Need a developer for your team? Or
            maybe you just want to chat about the latest in tech? I'm always up
            for a good conversation and new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:isbejide10@gmail.com"
              className="flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-all duration-300 group"
            >
              <FiMessageCircle size={20} />
              Start a Conversation
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
