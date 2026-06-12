import React from "react";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";
import CV from "../assets/BEJIDE-MOFIYINFOLUWA-ISRAEL-FRONTEND-DEVELOPER.pdf";
import FadeInSection from "./FadeInSection";

const stats = [
  { value: "2+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Tools mastered" },
];

const socialLinks = [
  {
    href: "https://github.com/Bejide-123",
    label: "GitHub",
    icon: <Github size={18} />,
    external: true,
  },
  {
    href: "mailto:isbejide10@gmail.com",
    label: "Email",
    icon: <Mail size={18} />,
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/bejide-israel-8a2144377/",
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
    external: true,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#0D0D0F] overflow-hidden"
    >
      {/* Ambient orb */}
      <div
        className="pointer-events-none absolute top-[-10%] left-[-5%]
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
              About Me
            </span>
          </div>
        </FadeInSection>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text slides in from left */}
          <FadeInSection direction="left">
            <div>
              <h2 className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-[1.05]
                             tracking-[-0.02em] text-white mb-8">
                Building things <br />
                <span className="text-amber-400">people enjoy using.</span>
              </h2>

              <div className="space-y-5 text-[15px] leading-[1.85] text-white/45">
                <p>
                  I'm a <span className="text-white/80 font-medium">Frontend Developer</span> focused
                  on creating fast, accessible, and well-crafted web applications. My work spans
                  React, Next.js, TypeScript, and modern CSS — with a strong eye for interface quality.
                </p>
                <p>
                  It started with curiosity about how websites work, and turned into a drive
                  to build things that are both technically solid and genuinely pleasant to interact with.
                  I care about clean architecture, honest design, and code that's maintainable
                  six months later.
                </p>
                <p>
                  Currently expanding into full-stack development — Node.js, databases, and
                  backend integrations. When I'm not coding, I'm listening to music, watching
                  animated films, or digging into whatever technology caught my eye that week.
                </p>
              </div>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-3 mt-10">
                <a
                  href={CV}
                  download="Bejide-Mofiyinfoluwa-Israel-Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400
                             text-[#0D0D0F] font-semibold text-[14px] rounded-xl
                             hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,160,32,0.3)]
                             transition-all duration-200"
                >
                  <Download size={15} />
                  Download Resume
                </a>

                {socialLinks.map(({ href, label, icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={label}
                    className="p-3 rounded-xl border border-white/[0.08] text-white/35
                               hover:text-amber-400 hover:border-amber-400/40
                               hover:bg-amber-400/[0.06] transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Right — slides in from right */}
          <FadeInSection direction="right" delay={0.1}>
            <div className="flex flex-col gap-5">

              {/* Stats row — each card staggers */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(({ value, label }, i) => (
                  <FadeInSection key={label} direction="up" delay={i * 0.1}>
                    <div className="flex flex-col gap-1 p-5 rounded-2xl
                                   border border-white/[0.06] bg-white/[0.02]">
                      <span className="font-syne font-bold text-[32px] leading-none
                                       tracking-tight text-amber-400">
                        {value}
                      </span>
                      <span className="text-[12px] text-white/35 leading-snug">
                        {label}
                      </span>
                    </div>
                  </FadeInSection>
                ))}
              </div>

              {/* Quote card */}
              <FadeInSection direction="up" delay={0.15}>
                <div className="relative p-6 rounded-2xl border border-white/[0.06]
                                bg-white/[0.02] overflow-hidden">
                  <span className="absolute top-4 left-5 font-syne text-[64px]
                                   leading-none text-amber-400/15 font-bold select-none">
                    "
                  </span>
                  <p className="relative text-[15px] leading-[1.8] text-white/40 italic pt-6">
                    Always curious, always learning. I believe the best developers
                    are the ones who never stop asking why — and who care as much
                    about the person using the thing as the code behind it.
                  </p>
                </div>
              </FadeInSection>

              {/* Currently exploring card */}
              <FadeInSection direction="up" delay={0.2}>
                <div className="flex items-start gap-4 p-5 rounded-2xl
                                border border-amber-400/[0.12] bg-amber-400/[0.03]">
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-400 shrink-0
                                   shadow-[0_0_8px_rgba(232,160,32,0.6)]" />
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.1em] text-amber-400/70
                                   font-medium mb-1">
                      Currently exploring
                    </p>
                    <p className="text-[14px] text-white/50 leading-relaxed">
                      Node.js · Express · PostgreSQL · Full-stack architecture
                    </p>
                  </div>
                </div>
              </FadeInSection>

            </div>
          </FadeInSection>

        </div>
      </div>

      <style>{`
        .font-syne { font-family: 'Syne', sans-serif; }
      `}</style>
    </section>
  );
};

export default About;