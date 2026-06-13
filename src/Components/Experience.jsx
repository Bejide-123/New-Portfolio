import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import { MdWork } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { SiReact, SiTypescript, SiTailwindcss, SiGithub, SiPostman, SiJavascript } from "react-icons/si";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Frontend Intern",
    company: "SkilvoraX",
    period: "March 2026 – Present",
    type: "Remote · Lagos",
    current: true,
    icon: <HiCode size={20} />,
    iconBg: "bg-amber-400/10 border-amber-400/20 text-amber-400",
    tech: [
      "React", "TypeScript", "Tailwind CSS", "REST APIs",
      "Postman", "Git", "GitHub", "Paystack", "AI Integration",
    ],
    highlights: [
      "Built AI-powered PDF chat and summarization features used in production.",
      "Worked on subscription and payment workflows using Paystack.",
      "Developed a full web-based PDF platform — editing, merging, compression, and AI tools.",
      "Implemented structured state management and dynamic UI interactions.",
      "Collaborated in an Agile environment with code reviews and cross-functional delivery.",
    ],
    bullets: [
      "Built reusable, scalable React and TypeScript components for responsive, maintainable UIs.",
      "Developed a web-based PDF platform with editing, merging, compression, AI chat, and summarization.",
      "Tested and validated API endpoints with Postman for reliable frontend-backend communication.",
      "Contributed to debugging, feature enhancements, and production-ready application delivery.",
    ],
  },
  {
    role: "Frontend Intern",
    company: "AiWahala",
    period: "April 2025 – July 2025",
    type: "Remote · Lagos",
    current: false,
    icon: <MdWork size={20} />,
    iconBg: "bg-white/[0.06] border-white/[0.1] text-white/50",
    tech: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Git", "GitHub"],
    highlights: [
      "Integrated REST APIs to deliver seamless dynamic user experiences.",
      "Resolved cross-browser compatibility issues improving stability across devices.",
      "Contributed to feature development across multiple user-facing modules.",
      "Collaborated in an Agile team using Git and GitHub for version control and reviews.",
    ],
    bullets: [
      "Developed responsive, interactive UIs using React, JavaScript, and Tailwind CSS.",
      "Integrated REST APIs to deliver dynamic and seamless user experiences.",
      "Identified and resolved cross-browser compatibility issues to improve usability.",
      "Contributed to feature development and UI enhancements across user-facing modules.",
    ],
  },
];

const techIconMap = {
  "React":        <SiReact size={12} className="text-[#61DBFB]" />,
  "TypeScript":   <SiTypescript size={11} className="text-[#3178C6]" />,
  "JavaScript":   <SiJavascript size={11} className="text-[#f7df1e]" />,
  "Tailwind CSS": <SiTailwindcss size={11} className="text-[#38B2AC]" />,
  "GitHub":       <SiGithub size={11} className="text-white/60" />,
  "Postman":      <SiPostman size={11} className="text-[#FF6C37]" />,
};

const ExperienceCard = ({ exp, index, isLast }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <FadeInSection direction="up" delay={index * 0.15}>
      <div className="relative flex gap-4">

        {/* Timeline spine */}
        <div className="flex flex-col items-center shrink-0">
          <div className={`relative z-10 p-2.5 rounded-xl border ${exp.iconBg}`}>
            {exp.icon}
          </div>
          {!isLast && (
            <div className="flex-1 w-px mt-3 bg-gradient-to-b from-white/10 to-transparent min-h-[32px]" />
          )}
        </div>

        {/* Card */}
        <div
          className={`flex-1 mb-8 rounded-2xl border overflow-hidden transition-all duration-300
            ${exp.current
              ? "border-amber-400/20 bg-amber-400/[0.03]"
              : "border-white/[0.06] bg-white/[0.02]"
            }`}
        >
          {/* Card header — always visible, tappable on mobile */}
          <button
            className="w-full text-left p-5 md:p-7 md:cursor-default"
            onClick={() => setExpanded(!expanded)}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                {/* Current pill */}
                {exp.current && (
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span className="text-[10px] uppercase tracking-[0.1em] text-emerald-400 font-medium">
                      Current
                    </span>
                  </div>
                )}
                <h3 className="font-syne font-bold text-[16px] md:text-[18px] text-white leading-snug">
                  {exp.role}
                </h3>
                <p className="text-amber-400 font-semibold text-[13px] md:text-[14px] mt-0.5">
                  {exp.company}
                </p>
                <p className="text-[11px] text-white/25 tracking-wide mt-1">
                  {exp.period} · {exp.type}
                </p>
              </div>

              {/* Chevron — mobile only toggle indicator */}
              <ChevronDown
                size={16}
                className={`shrink-0 mt-1 text-white/25 transition-transform duration-300 md:hidden
                  ${expanded ? "rotate-180" : "rotate-0"}`}
              />
            </div>
          </button>

          {/* Expandable body */}
          <div
            className={`transition-all duration-300 overflow-hidden
              ${expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100"}`}
          >
            <div className="px-5 pb-5 md:px-7 md:pb-7">

              <div className="w-full h-px bg-white/[0.05] mb-5" />

              {/* Responsibilities */}
              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/20 font-medium mb-3">
                  Responsibilities
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-white/40 leading-relaxed">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-amber-400/40 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mb-5">
                <p className="text-[10px] uppercase tracking-[0.1em] text-amber-400/60 font-medium mb-3">
                  Highlights
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-white/55 leading-relaxed">
                      <span className="text-amber-400 shrink-0 mt-px">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div className="pt-4 border-t border-white/[0.05]">
                <p className="text-[10px] uppercase tracking-[0.1em] text-amber-400/60 font-medium mb-3">
                  Key Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1.5
                                 rounded-full font-medium border border-white/[0.07]
                                 text-white/35 bg-white/[0.02]"
                    >
                      {techIconMap[t] ?? null}
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 px-6 bg-[#0D0D0F] overflow-hidden">
      <div
        className="pointer-events-none absolute top-[-10%] right-[-5%]
                    w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        <FadeInSection direction="up">
          <div className="flex items-center gap-3 mb-12">
            <span className="block w-8 h-px bg-amber-400" />
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-amber-400">
              Experience
            </span>
          </div>
        </FadeInSection>

        <FadeInSection direction="up" delay={0.05}>
          <div className="mb-16">
            <h2 className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-[1.05]
                           tracking-[-0.02em] text-white mb-4">
              Where I've worked.
            </h2>
            <p className="text-[15px] text-white/35 max-w-lg leading-relaxed">
              Real teams, real products, real users — not just side projects.
            </p>
          </div>
        </FadeInSection>

        {/* Timeline */}
        <div className="max-w-4xl">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.company}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* Open to work */}
        <FadeInSection direction="up" delay={0.15}>
          <div className="mt-4 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4
                          p-5 md:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-start sm:items-center gap-3">
              <span className="mt-1 sm:mt-0 w-2 h-2 rounded-full bg-emerald-400 shrink-0
                               shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <p className="text-[13px] md:text-[14px] text-white/50">
                <span className="text-white/80 font-medium">Open to new opportunities.</span>
                {" "}Internships, junior roles, freelance — remote or Lagos-based.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center shrink-0 inline-flex items-center
                         justify-center gap-2 px-5 py-2.5
                         bg-amber-400 text-[#0D0D0F] font-semibold text-[13px]
                         rounded-xl hover:-translate-y-0.5
                         hover:shadow-[0_8px_24px_rgba(232,160,32,0.3)]
                         transition-all duration-200"
            >
              Get in Touch
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

export default Experience;