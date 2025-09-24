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
        bgColor: "bg-[#e34f26]/10",
        description:
          "Semantic markup, forms, accessibility, and structuring web pages effectively.",
        tags: ["Semantic", "Forms", "Accessibility"],
      },
      {
        name: "CSS",
        Icon: DiCss3,
        color: "text-[#1572B6]",
        bgColor: "bg-[#1572B6]/10",
        description:
          "Flexbox, Grid, animations, responsive layouts, and modern styling techniques.",
        tags: ["Flexbox", "Grid", "Animations"],
      },
      {
        name: "JavaScript",
        Icon: DiJavascript1,
        color: "text-[#f7df1e]",
        bgColor: "bg-[#f7df1e]/10",
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
        bgColor: "bg-[#61DBFB]/10",
        description:
          "Building UI with components, hooks like useState & useEffect, and routing with React Router.",
        tags: ["useState", "useEffect", "React Router"],
      },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "text-[#38B2AC]",
        bgColor: "bg-[#38B2AC]/10",
        description:
          "Utility-first CSS — responsive design, custom themes, dark mode, and reusable UI patterns.",
        tags: ["Utility classes", "Responsive", "Dark mode"],
      },
      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "text-[#3178C6]",
        bgColor: "bg-[#3178C6]/10",
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
        bgColor: "bg-[#F05032]/10",
        description:
          "Version control basics, branching, merging, and keeping clean commit history.",
        tags: ["Branching", "Merging", "Commits"],
      },
      {
        name: "GitHub",
        Icon: SiGithub,
        color: "text-gray-800 dark:text-gray-200",
        bgColor: "bg-gray-800/10 dark:bg-gray-200/10",
        description:
          "Repo hosting, pull requests, collaboration, and exploring CI/CD integrations.",
        tags: ["Pull Requests", "Collaboration", "CI/CD"],
      },
      {
        name: "Postman",
        Icon: SiPostman,
        color: "text-[#FF6C37]",
        bgColor: "bg-[#FF6C37]/10",
        description:
          "Testing APIs, debugging requests, and managing endpoints efficiently.",
        tags: ["API Testing", "Collections", "Debugging"],
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's my technical toolkit - the technologies and tools I use to bring ideas to life
          </p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-16 last:mb-0">
            {/* Section Header */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {section.title}
              </h3>
              <div className="w-12 h-0.5 bg-blue-700 rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.skills.map((skill, i) => {
                const Icon = skill.Icon;
                return (
                  <article
                    key={i}
                    className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 
                               transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-600"
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10 p-6">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`${skill.bgColor} p-3 rounded-xl transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className={`text-3xl ${skill.color}`} aria-hidden="true" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                        {skill.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {skill.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 
                                     text-blue-700 dark:text-blue-300 font-medium border border-blue-200 dark:border-blue-800
                                     transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-blue-800/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl border border-blue-100 dark:border-blue-800">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Always Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
            frameworks, and best practices to stay at the forefront of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;