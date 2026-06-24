import React from "react";
import { ArrowDown, FileText } from "lucide-react";

// Custom inline SVG components for brand icons since Lucide deprecated them
const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);



const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Hero = () => {
  const socials = [
    {
      icon: <GithubIcon />,
      url: "https://github.com/sayedcraft",
      label: "GitHub",
      color:
        "hover:text-purple-400 hover:border-purple-400/30 hover:bg-purple-500/5",
    },
    {
      icon: <LinkedinIcon />,
      url: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-500/5",
    },
    {
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/mdabdul.azharsayed",
      label: "Facebook",
      color: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/5",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 md:pt-28 pb-16 overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 dark:bg-purple-600/10 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 dark:bg-cyan-600/10 blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 reveal-left">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Hi, I'm
            </h1>
            <h1>
              <span className="text-gradient-purple-cyan text-4xl font-bold">
                MUHAMMAD SAYED
              </span>
            </h1>
            <p>Frontend Developer</p>

            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              A passionate MERN stack developer with expertise in building
              dynamic, full-stack web applications using MongoDB, Express,
              React, and Node.js.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="/Resume_Sayed.pdf"
                download="Resume_Sayed.pdf"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText size={18} />
                Download Resume
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
                <ArrowDown size={16} className="animate-bounce" />
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4 space-y-3">
              <div className="text-xs text-slate-400 dark:text-gray-500 uppercase tracking-widest font-semibold">
                Connect with me
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/2.5 text-slate-500 dark:text-gray-400 transition-all duration-300 ${social.color} hover:-translate-y-1 hover:scale-105`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar Image Frame */}
          <div className="lg:col-span-5 flex justify-center items-center reveal-right">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">
              {/* Decorative backgrounds behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 blur-xl opacity-60 pointer-events-none" />
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-500 rounded-3xl rotate-6 opacity-30 blur-sm pointer-events-none" />

              {/* Glass Frame */}
              <div className="absolute inset-0 rounded-3xl glass-panel p-3 ring-1 ring-slate-200 dark:ring-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                <img
                  src="/assets/photo.jpg"
                  alt="SAYED Developer"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                />
              </div>

              {/* Graphical mini status widgets floating around */}
              <div className="absolute -top-4 -right-4 glass-panel py-2.5 px-4 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-2 animate-float-delayed shadow-xl">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-800 dark:text-white tracking-wide">
                  Coding Live
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
