import React from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit, DiNodejs } from "react-icons/di";
import {
  SiTypescript,
  SiPostman,
  SiGithub,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiSupabase,
  SiExpress,
} from "react-icons/si";
import FadeInSection from "./FadeInSection";

const sections = [
  {
    title: "Languages",
    skills: [
      {
        name: "HTML",
        Icon: DiHtml5,
        color: "#e34f26",
        description: "Semantic markup, forms, accessibility, and structuring web pages effectively.",
        tags: ["Semantic", "Forms", "Accessibility"],
      },
      {
        name: "CSS",
        Icon: DiCss3,
        color: "#1572B6",
        description: "Flexbox, Grid, animations, responsive layouts, and modern styling techniques.",
        tags: ["Flexbox", "Grid", "Animations"],
      },
      {
        name: "JavaScript",
        Icon: DiJavascript1,
        color: "#f7df1e",
        description: "DOM manipulation, ES6+, async/await, event handling, and problem-solving logic.",
        tags: ["ES6+", "async/await", "DOM"],
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "#3178C6",
        description: "Static typing, interfaces, generics, and type-safe React development.",
        tags: ["Interfaces", "Generics", "Type Safety"],
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        Icon: DiReact,
        color: "#61DBFB",
        description: "Component-driven UI, hooks, state management, and routing with React Router.",
        tags: ["Hooks", "useState", "React Router"],
      },
      {
        name: "Next.js",
        Icon: SiNextdotjs,
        color: "#ffffff",
        description: "Full-stack React apps with file-based routing, SSR, and optimized performance.",
        tags: ["SSR", "App Router", "Performance"],
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "#38B2AC",
        description: "Utility-first CSS — responsive design, custom themes, dark mode, reusable patterns.",
        tags: ["Utility-first", "Responsive", "Dark mode"],
      },
      {
        name: "Redux Toolkit",
        Icon: SiRedux,
        color: "#764ABC",
        description: "Centralized state management with slices, async thunks, and scalable architecture.",
        tags: ["Slices", "Async Thunks", "RTK Query"],
      },
      {
        name: "Node.js",
        Icon: DiNodejs,
        color: "#68A063",
        description: "Server-side JavaScript runtime for building fast, scalable backend services and APIs.",
        tags: ["Runtime", "APIs", "Backend"],
      },
      {
        name: "Express",
        Icon: SiExpress,
        color: "#ffffff",
        description: "Minimal Node.js web framework for building REST APIs, middleware, and server logic.",
        tags: ["REST APIs", "Middleware", "Routing"],
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        Icon: DiGit,
        color: "#F05032",
        description: "Version control, branching strategies, merging, and maintaining clean commit history.",
        tags: ["Branching", "Merging", "Commits"],
      },
      {
        name: "GitHub",
        Icon: SiGithub,
        color: "#ffffff",
        description: "Repo hosting, pull requests, code reviews, and CI/CD workflow integrations.",
        tags: ["Pull Requests", "Collaboration", "CI/CD"],
      },
      {
        name: "Supabase",
        Icon: SiSupabase,
        color: "#3ECF8E",
        description: "Backend-as-a-Service for authentication, real-time database, and storage.",
        tags: ["Auth", "Database", "Realtime"],
      },
      {
        name: "Postman",
        Icon: SiPostman,
        color: "#FF6C37",
        description: "Testing and debugging REST APIs, managing collections and environments.",
        tags: ["API Testing", "Collections", "Debugging"],
      },
    ],
  },
];

const SkillCard = ({ skill, delay }) => {
  const { name, Icon, color, description, tags } = skill;

  return (
    <FadeInSection direction="up" delay={delay}>
      <article
        className="group relative flex flex-col gap-4 p-5 rounded-2xl h-full
                   border border-white/[0.06] bg-white/[0.02]
                   hover:border-amber-400/25 hover:bg-amber-400/[0.03]
                   transition-all duration-300 hover:-translate-y-1"
      >
        {/* Icon + name */}
        <div className="flex items-center gap-3">
          <div
            className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${color}12` }}
          >
            <Icon style={{ color, fontSize: "26px" }} aria-hidden="true" />
          </div>
          <h4 className="text-[15px] font-semibold text-white/85">{name}</h4>
        </div>

        {/* Description */}
        <p className="text-[13px] leading-[1.75] text-white/35 flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full font-medium
                         border border-white/[0.07] text-white/35
                         group-hover:border-amber-400/20 group-hover:text-amber-400/60
                         transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </FadeInSection>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[#0D0D0F] overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-5%]
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
              Skills
            </span>
          </div>
        </FadeInSection>

        {/* Heading */}
        <FadeInSection direction="up" delay={0.05}>
          <div className="mb-16">
            <h2 className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-[1.05]
                           tracking-[-0.02em] text-white mb-4">
              My technical toolkit.
            </h2>
            <p className="text-[15px] text-white/35 max-w-lg leading-relaxed">
              The technologies and tools I reach for when building — and always expanding.
            </p>
          </div>
        </FadeInSection>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section, sIdx) => (
            <div key={sIdx}>
              {/* Section title */}
              <FadeInSection direction="up" delay={0.05}>
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-[13px] uppercase tracking-[0.1em] font-medium text-white/30">
                    {section.title}
                  </h3>
                  <span className="flex-1 h-px bg-white/[0.05]" />
                </div>
              </FadeInSection>

              {/* Cards — each staggers in */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {section.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.08} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <FadeInSection direction="up" delay={0.1}>
          <div className="mt-20 flex items-center gap-5 p-6 rounded-2xl
                          border border-amber-400/[0.12] bg-amber-400/[0.03]">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0
                             shadow-[0_0_8px_rgba(232,160,32,0.6)]" />
            <p className="text-[14px] text-white/40 leading-relaxed">
              <span className="text-white/70 font-medium">Always learning.</span>{" "}
              Technology evolves fast — I stay current by building real projects,
              not just following tutorials.
            </p>
          </div>
        </FadeInSection>
      </div>

      <style>{`
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
    </section>
  );
};

export default Skills;