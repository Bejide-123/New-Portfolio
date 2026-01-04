import React from "react";
import Image1 from "../assets/Estate.png";
import Image2 from "../assets/MovieApp.png";
import Image3 from "../assets/EduTrackr.png";
import Image4 from "../assets/VoteSecure.png";
import Image5 from "../assets/Scribe.png";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "VoteSecure (In Development)",
      description:
        "A secure, blockchain-inspired electronic voting platform that offers real-time election monitoring, multi-position ballots, role-based authentication, fraud-detection alerts, live analytics, and a responsive admin dashboard — all built to ensure transparent, tamper-proof, end-to-end election management.",
      demo: "https://vote-secure-alpha.vercel.app/",
      github: "https://github.com/Bejide-123/VoteSecure",
      stack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Framer Motion",
        "React Router",
        "Recharts",
        "Vite",
      ],
      image: Image4,
    },
    {
      title: "Scribe (Blog Platform) (In Development)",
      description:
        "A modern, full-stack blogging platform that allows users to create, edit, and publish articles with a clean reading experience. Scribe features secure authentication, user profiles, rich content management, and responsive design — built to empower writers to share ideas seamlessly.",
      demo: "https://blog-liard-alpha-80.vercel.app/", // update when ready
      github: "https://github.com/Bejide-123/Blog", // update if repo name differs
      stack: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Supabase",
        "React Router",
        "Vite",
      ],
      image: Image5, // import your Scribe.png or hero screenshot
    },
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
        "A movie search platform that lets users explore films, view details, and save favourites with API integration. It includes a dedicated favourites page for quick access and demonstrates API handling, state management, and a clean responsive design using React, TypeScript, and Tailwind CSS.",
      demo: "https://movie-app-tsx.vercel.app/",
      github: "https://github.com/Bejide-123/Movie-AppTsx",
      stack: ["React", "Vite", "Typescript", "Tailwind"],
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
    <section className="bg-white dark:bg-black py-20" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            creating meaningful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col 
                         border border-gray-100 dark:border-gray-800 
                         transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-700"
            >
              <div className="relative w-full h-56 overflow-hidden">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out 
                           group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>

                {/* Overlay with icons */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4 
                               opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  {/* Live Demo */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl p-4 bg-blue-700/90 backdrop-blur-sm rounded-full 
                             hover:scale-110 hover:bg-blue-600 transition-all duration-200 shadow-lg"
                    title="View Live Demo"
                  >
                    <FiExternalLink />
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl p-4 bg-gray-800/90 backdrop-blur-sm rounded-full 
                             hover:scale-110 hover:bg-gray-700 transition-all duration-200 shadow-lg"
                    title="View Source Code"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 
                                 text-xs px-3 py-1.5 rounded-full font-medium border border-blue-200 dark:border-blue-800
                                 transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                               bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg 
                               hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium group/btn"
                    >
                      <span>Live Demo</span>
                      <FiExternalLink className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all duration-200" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                               bg-blue-700 text-white rounded-lg hover:bg-blue-800 
                               dark:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 font-medium group/btn"
                    >
                      <span>GitHub</span>
                      <FaGithub className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-all duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl border border-blue-100 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            More Projects Coming Soon
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            I'm constantly working on new projects and exploring different
            technologies. Check back regularly or follow me on GitHub for the
            latest updates.
          </p>
          <a
            href="https://github.com/Bejide-123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg 
            hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
          >
            <FaGithub size={18} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
