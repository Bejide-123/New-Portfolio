import React from "react";
import Image1 from "../assets/Support-Hub.png";
import Image2 from "../assets/MovieApp.png";
import Image3 from "../assets/EduTrackr.png";
import Image4 from "../assets/VoteSecure.png";
import Image5 from "../assets/Scribe.png";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

const projects = [
  {
    title: "Scribe",
    status: "In Development",
    description:
      "A modern full-stack blogging platform for creating, editing, and publishing articles. Features secure authentication, user profiles, real-time database integration, and a clean distraction-free reading experience.",
    demo: "https://blog-liard-alpha-80.vercel.app/",
    github: "https://github.com/Bejide-123/Blog",
    stack: ["React", "JavaScript", "Tailwind CSS", "Supabase", "React Router", "Vite"],
    image: Image5,
  },
  {
    title: "Support Hub",
    status: "Shipped",
    description:
      "A customer support management platform with ticket creation, role-based agent dashboards, Redux Toolkit state management, and real-time Supabase integration.",
    demo: "https://support-hub-j8gw.vercel.app/",
    github: "https://github.com/Bejide-123/Support-Hub",
    stack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Supabase", "Vite"],
    image: Image1,
  },
  {
    title: "VoteSecure",
    status: "Paused",
    description:
      "A blockchain-inspired electronic voting platform with real-time election monitoring, multi-position ballots, fraud-detection alerts, and a live analytics admin dashboard.",
    demo: "https://vote-secure-alpha.vercel.app/",
    github: "https://github.com/Bejide-123/VoteSecure",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Recharts"],
    image: Image4,
  },
  {
    title: "Movie Search App",
    status: "Shipped",
    description:
      "A movie search platform with API integration, film detail views, and a favourites page. Clean responsive design demonstrating async state management and TypeScript in React.",
    demo: "https://movie-app-tsx.vercel.app/",
    github: "https://github.com/Bejide-123/Movie-AppTsx",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: Image2,
  },
  {
    title: "EduTrackr",
    status: "In Development",
    description:
      "An academic companion for tracking courses, assignments, and schedules. Features countdown timers, a slide-out notification panel, and digital course certificates with QR verification.",
    demo: "https://bejide-123.github.io/EduTrackr/",
    github: "https://github.com/Bejide-123/EduTrackr",
    stack: ["React", "JavaScript", "CSS", "Vite"],
    image: Image3,
  },
];

const statusStyles = {
  Shipped:          "text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.06]",
  "In Development": "text-amber-400 border-amber-400/30 bg-amber-400/[0.06]",
  Paused:           "text-white/30 border-white/10 bg-white/[0.03]",
};

const ProjectCard = ({ project }) => (
  <article
    className="group flex flex-col rounded-2xl border border-white/[0.06]
               bg-white/[0.02] overflow-hidden
               hover:border-amber-400/20 hover:bg-amber-400/[0.02]
               transition-all duration-300 hover:-translate-y-1"
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden bg-white/[0.03]">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover transition-transform duration-500
                   group-hover:scale-105 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F]/80 via-transparent to-transparent" />

      {/* Hover action icons */}
      <div
        className="absolute inset-0 flex items-center justify-center gap-3
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   translate-y-2 group-hover:translate-y-0"
      >
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-amber-400 text-[#0D0D0F]
                     hover:scale-110 transition-transform duration-200"
          title="Live Demo"
        >
          <FiExternalLink size={16} />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white
                     hover:scale-110 hover:bg-white/20 transition-all duration-200"
          title="GitHub"
        >
          <FaGithub size={16} />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-1 p-5 gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-syne font-bold text-[16px] text-white/85
                       group-hover:text-white transition-colors duration-200 leading-snug">
          {project.title}
        </h3>
        <span className={`shrink-0 text-[10px] uppercase tracking-[0.08em] font-medium
                          px-2.5 py-1 rounded-full border ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <p className="text-[13px] leading-[1.75] text-white/35 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2.5 py-1 rounded-full font-medium
                       border border-white/[0.07] text-white/30
                       group-hover:border-amber-400/20 group-hover:text-amber-400/50
                       transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-2 pt-1 border-t border-white/[0.05]">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5
                     text-[13px] font-medium text-white/40
                     hover:text-amber-400 transition-colors duration-200"
        >
          <FiExternalLink size={13} />
          Live Demo
        </a>
        <span className="w-px bg-white/[0.05]" />
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5
                     text-[13px] font-medium text-white/40
                     hover:text-white transition-colors duration-200"
        >
          <FaGithub size={13} />
          GitHub
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 px-6 bg-[#0D0D0F] overflow-hidden">
      <div
        className="pointer-events-none absolute top-[-5%] right-[-5%]
                    w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Section label */}
        <FadeInSection direction="up">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-8 h-px bg-amber-400" />
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-amber-400">
              Projects
            </span>
          </div>
        </FadeInSection>

        {/* Heading */}
        <FadeInSection direction="up" delay={0.05}>
          <div className="mb-16">
            <h2 className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-[1.05]
                           tracking-[-0.02em] text-white mb-4">
              Things I've built.
            </h2>
            <p className="text-[15px] text-white/35 max-w-lg leading-relaxed">
              A selection of projects across different stacks and problem spaces.
            </p>
          </div>
        </FadeInSection>

        {/* Project cards — each staggers in */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} direction="up" delay={i * 0.1}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeInSection direction="up" delay={0.1}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6
                          p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div>
              <p className="font-syne font-bold text-[18px] text-white mb-1">More on the way.</p>
              <p className="text-[14px] text-white/35">Follow along on GitHub for the latest work.</p>
            </div>
            <a
              href="https://github.com/Bejide-123"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3
                         bg-amber-400 text-[#0D0D0F] font-semibold text-[14px]
                         rounded-xl hover:-translate-y-0.5
                         hover:shadow-[0_8px_24px_rgba(232,160,32,0.3)]
                         transition-all duration-200"
            >
              <FaGithub size={16} />
              View GitHub
            </a>
          </div>
        </FadeInSection>
      </div>

      <style>{`
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
    </section>
  );
};

export default Projects;