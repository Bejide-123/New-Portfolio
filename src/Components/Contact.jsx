import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import CV from "../assets/BEJIDE-MOFIYINFOLUWA-ISRAEL-FRONTEND-DEVELOPER.pdf";

const contactLinks = [
  {
    href: "https://github.com/Bejide-123",
    label: "GitHub",
    sub: "See my code",
    icon: <FaGithub size={20} />,
    external: true,
  },
  {
    href: "mailto:isbejide10@gmail.com",
    label: "Email",
    sub: "isbejide10@gmail.com",
    icon: <MdEmail size={20} />,
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/bejide-israel-8a2144377",
    label: "LinkedIn",
    sub: "Let's connect professionally",
    icon: <FaLinkedin size={20} />,
    external: true,
  },
];

const infoCards = [
  {
    label: "Currently",
    title: "Open to opportunities",
    body: "Available for internships, freelance work, and junior developer roles — remote or on-site.",
    accent: true,
  },
  {
    label: "Location",
    title: "Lagos, Nigeria",
    body: "Open to remote work globally and on-site roles within Lagos.",
    accent: false,
  },
  {
    label: "Style",
    title: "How I work",
    body: "Clear communication, feedback-driven iteration, and a team-first mindset at every step.",
    accent: false,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 px-6 bg-[#0D0D0F] overflow-hidden">
      {/* Ambient orb */}
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[-5%]
                    w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(232,160,32,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="block w-8 h-px bg-amber-400" />
          <span className="text-[11px] uppercase tracking-[0.14em] font-medium text-amber-400">
            Contact
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + CTA */}
          <div>
            <h2
              className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-[1.05]
                         tracking-[-0.02em] text-white mb-6"
            >
              Let's build <br />
              <span className="text-amber-400">something together.</span>
            </h2>
            <p className="text-[15px] leading-[1.85] text-white/40 max-w-md mb-10">
              Whether you have a project in mind, need a developer on your team,
              or just want to talk — I'm always open. I reply within 24 hours.
            </p>

            {/* Primary email CTA */}
            <a
              href="mailto:isbejide10@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5
                         bg-amber-400 text-[#0D0D0F] font-semibold text-[14px]
                         rounded-xl hover:-translate-y-0.5
                         hover:shadow-[0_8px_24px_rgba(232,160,32,0.3)]
                         transition-all duration-200 mb-10 group"
            >
              Send me an email
              <FiArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            {/* Info cards */}
            <div className="space-y-3">
              {infoCards.map(({ label, title, body, accent }) => (
                <div
                  key={label}
                  className={`p-5 rounded-2xl border transition-all duration-200
                    ${accent
                      ? "border-amber-400/[0.15] bg-amber-400/[0.04]"
                      : "border-white/[0.06] bg-white/[0.02]"
                    }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.1em] font-medium mb-1
                                text-amber-400/60">
                    {label}
                  </p>
                  <p className="text-[14px] font-semibold text-white/80 mb-1">{title}</p>
                  <p className="text-[13px] text-white/35 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — links + resume */}
          <div className="flex flex-col gap-5">

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ href, label, sub, icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 p-5 rounded-2xl
                             border border-white/[0.06] bg-white/[0.02]
                             hover:border-amber-400/25 hover:bg-amber-400/[0.03]
                             transition-all duration-200"
                >
                  <div
                    className="p-3 rounded-xl border border-white/[0.08] text-white/35
                               group-hover:text-amber-400 group-hover:border-amber-400/30
                               group-hover:bg-amber-400/[0.06] transition-all duration-200"
                  >
                    {icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[14px] font-medium text-white/80 mb-0.5">{label}</p>
                    <p className="text-[12px] text-white/30">{sub}</p>
                  </div>
                  <FiArrowRight
                    size={15}
                    className="text-white/20 group-hover:text-amber-400
                               group-hover:translate-x-1 transition-all duration-200"
                  />
                </a>
              ))}
            </div>

            {/* Resume card */}
            <div
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]
                         flex flex-col gap-4"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.1em] font-medium
                               text-amber-400/60 mb-1">
                  Resume
                </p>
                <p className="text-[15px] font-semibold text-white/80">
                  Download my CV
                </p>
                <p className="text-[13px] text-white/30 mt-1 leading-relaxed">
                  A full overview of my skills, projects, and experience.
                </p>
              </div>
              <a
                href={CV}
                download="Bejide-Mofiyinfoluwa-Israel-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 py-3 px-6
                           bg-amber-400 text-[#0D0D0F] font-semibold text-[14px]
                           rounded-xl hover:-translate-y-0.5
                           hover:shadow-[0_8px_24px_rgba(232,160,32,0.3)]
                           transition-all duration-200 group"
              >
                <FiDownload
                  size={15}
                  className="group-hover:translate-y-0.5 transition-transform duration-200"
                />
                Download Resume
              </a>
            </div>

            {/* Availability badge */}
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl
                         border border-emerald-400/[0.12] bg-emerald-400/[0.03]"
            >
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 shrink-0
                           shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              />
              <p className="text-[13px] text-white/40">
                <span className="text-emerald-400 font-medium">Available now</span>
                {" "}· Open to internships & junior roles
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
    </section>
  );
};

export default Contact;