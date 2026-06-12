import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

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

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#0D0D0F] px-6 pt-16 pb-10 overflow-hidden">
      {/* Subtle top orb */}
      <div
        className="pointer-events-none absolute top-[-30%] left-1/2 -translate-x-1/2
                    w-[600px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-14">

          {/* Brand */}
          <div className="max-w-xs">
            <span className="font-syne text-[20px] font-bold tracking-tight text-white block mb-3">
              Fifi<span className="text-amber-400">.</span>dev
            </span>
            <p className="text-[13px] leading-[1.8] text-white/30">
              Frontend Developer based in Lagos, building fast, accessible,
              and well-crafted web experiences.
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-[13px] uppercase tracking-[0.08em] font-medium
                               text-white/30 hover:text-white cursor-pointer
                               transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={label}
                className="p-2.5 rounded-xl border border-white/[0.07] text-white/30
                           hover:text-amber-400 hover:border-amber-400/30
                           hover:bg-amber-400/[0.06] transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.05] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} Bejide Mofiyinfoluwa Israel. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5
                       border border-white/[0.07] text-white/30 text-[12px] font-medium
                       rounded-xl hover:border-amber-400/30 hover:text-amber-400
                       hover:bg-amber-400/[0.06] transition-all duration-200 group"
            aria-label="Back to top"
          >
            Back to top
            <FiArrowUp
              size={13}
              className="group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </button>
        </div>
      </div>

      <style>{`
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
    </footer>
  );
};

export default Footer;