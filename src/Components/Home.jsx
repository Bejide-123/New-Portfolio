import React from "react";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiArrowRight, HiArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const railVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, delay: 1.3 },
  },
};

const scrollHintVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, delay: 1.6 },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const socialLinks = [
  {
    href: "https://github.com/Bejide-123",
    label: "GitHub",
    icon: <FaGithub size={17} />,
    external: true,
  },
  {
    href: "mailto:isbejide10@gmail.com",
    label: "Email",
    icon: <MdEmail size={18} />,
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/bejide-israel-8a2144377",
    label: "LinkedIn",
    icon: <FaLinkedin size={17} />,
    external: true,
  },
];

const tags = ["React", "TypeScript", "Next.js", "UI / UX"];

// ─── Component ────────────────────────────────────────────────────────────────

const Home = () => {
  return (
    <div
      className="relative flex flex-col min-h-screen bg-[#0D0D0F] overflow-hidden"
      id="home"
    >
      <Navbar />

      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute top-[-15%] right-[-5%]
                    w-[640px] h-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.06) 0%, transparent 70%)",
          animation: "breathe 9s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[5%] left-[-10%]
                    w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.03) 0%, transparent 70%)",
          animation: "breathe 12s ease-in-out 3s infinite",
        }}
      />

      {/* Hero layout */}
      <div className="flex flex-1 items-center max-w-6xl mx-auto w-full px-6 lg:px-12 py-28 lg:py-0">

        {/* Main content — stagger container */}
        <motion.div
          className="flex-1 min-w-0"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <span className="block w-8 h-px bg-amber-400 shrink-0" />
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-amber-400">
              Frontend Developer · Lagos, NG
            </span>
          </motion.div>

          {/* Name — allow wrapping, clamp more aggressively for mobile */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1
              className="font-syne font-bold leading-[1.05] tracking-[-0.03em]
                         text-white
                         text-[clamp(32px,6.5vw,82px)]"
            >
              Bejide Mofiyinfoluwa
            </h1>
            <h1
              className="font-syne font-bold leading-[1.05] tracking-[-0.03em]
                         text-amber-400
                         text-[clamp(32px,6.5vw,82px)]"
            >
              Israel
            </h1>
          </motion.div>

          {/* Skill tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] uppercase tracking-[0.07em] font-medium
                           text-white/40 border border-white/[0.08] rounded-full
                           px-3 py-1.5 leading-none"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-[16px] leading-[1.8] text-white/45 max-w-[500px] mb-12"
          >
            I build fast, accessible web applications with clean architecture
            and interactions that feel intentional. Currently expanding into
            full-stack development.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5
                         bg-amber-400 text-[#0D0D0F] font-semibold text-[14px]
                         rounded-xl transition-all duration-200
                         hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,160,32,0.3)]
                         group"
            >
              View Work
              <HiArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5
                         bg-transparent text-white font-medium text-[14px]
                         border border-white/[0.1] rounded-xl
                         hover:border-white/25 hover:bg-white/[0.04]
                         transition-all duration-200"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social — mobile only */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mt-14 lg:hidden"
          >
            <span className="text-[11px] uppercase tracking-[0.1em] text-white/20 mr-1">
              Find me
            </span>
            {socialLinks.map(({ href, label, icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={label}
                className="p-2.5 rounded-lg border border-white/[0.08] text-white/35
                           hover:text-amber-400 hover:border-amber-400/40
                           hover:bg-amber-400/[0.06] transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Vertical social rail — desktop only */}
        <motion.div
          variants={railVariants}
          initial="hidden"
          animate="show"
          className="hidden lg:flex flex-col items-center gap-5 self-stretch py-32 ml-16"
        >
          <span className="flex-1 w-px bg-white/[0.07]" />
          {socialLinks.map(({ href, label, icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className="p-2.5 rounded-xl border border-white/[0.08] text-white/35
                         hover:text-amber-400 hover:border-amber-400/40
                         hover:bg-amber-400/[0.06] transition-all duration-200"
            >
              {icon}
            </a>
          ))}
          <span className="flex-1 w-px bg-white/[0.07]" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        variants={scrollHintVariants}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.14em] text-white/20">Scroll</span>
        <HiArrowDown size={14} className="text-white/20 animate-bounce" />
      </motion.div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.1); opacity: 0.6; }
        }
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
    </div>
  );
};

export default Home;