// Skills.jsx
import React from "react";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiTypescript, SiPostman, SiGithub, SiTailwindcss } from "react-icons/si";

const sections = [
  {
    title: "Web Essentials",
    skills: [
      {
        name: "HTML",
        Icon: DiHtml5,
        color: "text-[#e34f26]",
        description:
          "Semantic markup, forms, accessibility, and structuring web pages effectively.",
        tags: ["Semantic", "Forms", "Accessibility"],
      },
      {
        name: "CSS",
        Icon: DiCss3,
        color: "text-[#1572B6]",
        description:
          "Flexbox, Grid, animations, responsive layouts, and modern styling techniques.",
        tags: ["Flexbox", "Grid", "Animations"],
      },
      {
        name: "JavaScript",
        Icon: DiJavascript1,
        color: "text-[#f7df1e]",
        description:
          "DOM manipulation, ES6+, async/await, event handling, and problem-solving logic.",
        tags: ["ES6+", "async/await", "DOM"],
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        Icon: DiReact,
        color: "text-[#61DBFB]",
        description:
          "Building UI with components, hooks like useState & useEffect, and routing with React Router.",
        tags: ["useState", "useEffect", "React Router"],
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "text-[#38B2AC]",
        description:
          "Utility-first CSS — responsive design, custom themes, dark mode, and reusable UI patterns.",
        tags: ["Utility classes", "Responsive", "Dark mode"],
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "text-[#3178C6]",
        description:
          "Adding static types to JS — learning interfaces, type safety, generics, and React with TS.",
        tags: ["Interfaces", "Generics", "Type Safety"],
      },
    ],
  },
  {
    title: "Version Control & Tools",
    skills: [
      {
        name: "Git",
        Icon: DiGit,
        color: "text-[#F05032]",
        description:
          "Version control basics, branching, merging, and keeping clean commit history.",
        tags: ["Branching", "Merging", "Commits"],
      },
      {
        name: "GitHub",
        Icon: SiGithub,
        color: "text-[#111827]",
        description:
          "Repo hosting, pull requests, collaboration, and exploring CI/CD integrations.",
        tags: ["Pull Requests", "Collaboration", "CI/CD"],
      },
      {
        name: "Postman",
        Icon: SiPostman,
        color: "text-[#FF6C37]",
        description:
          "Testing APIs, debugging requests, and managing endpoints efficiently.",
        tags: ["API Testing", "Collections", "Debugging"],
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-12 px-6 bg-white dark:bg-black transition-colors duration-300" id="skills">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        My Skills
      </h2>

      {sections.map((section, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
            {section.title}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.skills.map((skill, i) => {
              const Icon = skill.Icon;
              return (
                <article
                  key={i}
                  className="relative overflow-hidden flex flex-col items-start bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 
                             border border-gray-100 dark:border-gray-700 
                             transition-all duration-300 transform 
                             hover:-translate-y-0.5 hover:scale-102"
                >
                  <div className="relative z-10 flex items-center gap-4 mb-3 md:py-5">
                    <span
                      className={`${skill.color} p-1 rounded-full flex items-center justify-center`}
                    >
                      <Icon className="text-4xl" aria-hidden="true" />
                    </span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>

                  <p className="relative z-10 text-black dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
