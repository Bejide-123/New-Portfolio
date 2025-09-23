import React from "react";
import Image1 from "../assets/Estate.png";
import Image2 from "../assets/Movie-app.png";
import Image3 from "../assets/EduTrackr.png";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Landing Page",
      description:
        "A responsive landing page for a real estate agency showcasing available properties and a contact form powered by EmailJS. Visitors can browse projects, view multiple images of apartments, and book appointments directly. Built with React and TailwindCSS, it highlights modern UI, smooth navigation, and practical client interaction features.",
      demo: "https://tailwindcss-psi.vercel.app/",
      github: "https://github.com/Bejide-123/tailwindcss",
      stack: ["React", "Vite", "TailwindCSS", "JavaScript", "EmailJS"],
      image: Image1,
    },
    {
      title: "Movie Search App",
      description:
        "A movie search platform that lets users explore films, view details, and save favourites with API integration. It includes a dedicated favourites page for quick access and demonstrates API handling, state management, and a clean responsive design using React, JavaScript, and CSS.",
      demo: "https://bejide-123.github.io/Movie-App/",
      github: "https://github.com/Bejide-123/Movie-App",
      stack: ["React", "Vite", "JavaScript", "CSS"],
      image: Image2,
    },
    {
      title: "EduTrackr (In Development)",
      description:
        "A Multi-page academic companion that helps track courses, assignments, and schedules. Features include persistent assignment storage, countdown timers, a slide-out notification panel, and digital course certificates with confetti and QR verification. Built with React and CSS, EduTrackr combines usability, organization, and motivation for students.",
      demo: "https://bejide-123.github.io/EduTrackr/",
      github: "https://github.com/Bejide-123/EduTrackr",
      stack: ["React", "Vite", "CSS", "JavaScript"],
      image: Image3,
    },
  ];

  return (
    <section className="bg-white dark:bg-black py-16" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>

        <div className="grid mt-10 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800 transition transform hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="relative w-full h-48 overflow-hidden group">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm"
                />

                {/* Overlay with icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Live Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl p-3 bg-transparent bg-opacity-50 rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <FiExternalLink />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl p-3 bg-transparent bg-opacity-50 rounded-full hover:scale-110 transition-transform duration-200"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-black dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-800 text-black dark:text-gray-200 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 pr-2 flex px-5 py-3 items-center justify-center gap-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-transform transform hover:scale-101 duration-300 font-medium group"
                    >
                      Live Demo
                      <FiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex pr-2 px-5 py-3 items-center justify-center gap-2 bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition-transform transform hover:scale-101 duration-300 font-medium group"
                    >
                      GitHub
                      <FaGithub className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
