// import React from "react";
import {
  GraduationCap,
  Briefcase,
  Sparkles,
  BookOpen,
  Camera,
  Trophy,
  MapPin,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] rounded-full bg-purple-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          {/* Added: Available for work badge */}
          

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            About <span className="text-gradient-purple-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content: Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start reveal-on-scroll">
          {/* Left Column: Biography */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <Sparkles size={20} />
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">
                My Story
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              <p>
                My programming journey started back in high school when I first
                compiled a program that outputted "Hello, World" in Python.
                Since then, coding has evolved from a curious hobby into a deep
                professional passion.
              </p>
              <p>
                I love the challenge of full-stack engineering—stitching
                together beautiful, fluid frontends with robust, highly
                responsive server structures. There's a special kind of magic in
                creating digital products that feel effortless and intuitive for
                users.
              </p>
            </div>

            {/* New: Core Expertise Section */}
            <div className="pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-4">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Node.js", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Hobbies */}
          <div className="space-y-8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-white/5 text-center hover:border-purple-500/30 transition-colors">
                <div className="font-display font-extrabold text-3xl text-slate-900 dark:text-white">
                  15+
                </div>
                <div className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wide mt-1">
                  Projects Done
                </div>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-white/5 text-center hover:border-cyan-500/30 transition-colors">
                <div className="font-display font-extrabold text-3xl text-slate-900 dark:text-white">
                  500+
                </div>
                <div className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wide mt-1">
                  Git Commits
                </div>
              </div>
            </div>

            {/* Hobbies Badges */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                Hobbies & Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: MapPin, name: "Traveling", color: "rose" },
                  { icon: Trophy, name: "Sports", color: "amber" },
                  { icon: BookOpen, name: "Reading", color: "emerald" },
                ].map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-gray-300"
                  >
                    <item.icon
                      size={14}
                      className={`text-${item.color}-500 dark:text-${item.color}-400`}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 mb-8 mt-16 justify-center md:justify-start">
          <GraduationCap size={24} />
          <h3 className="font-display font-semibold text-2xl text-slate-900 dark:text-white">
            Education
          </h3>
        </div>
        {/* Grid starts here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll">
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 hover:border-cyan-500/50 transition-all duration-300">
            <span className="text-[13px] uppercase font-bold text-cyan-600 dark:text-cyan-400 tracking-widest">
              2024 - Present
            </span>
            <h4 className="font-display font-semibold text-lg text-slate-900 dark:text-white mt-2 mb-1">
              B.Sc. in CSE
            </h4>
            <p className="text-sm text-slate-500 dark:text-gray-400 mb-4">
              International Islamic University Chittagong
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 hover:border-purple-500/50 transition-all duration-300">
            <span className="text-[13px] uppercase font-bold text-purple-600 dark:text-purple-400 tracking-widest">
              2021 - 2023
            </span>
            <h4 className="font-display font-semibold text-lg text-slate-900 dark:text-white mt-2 mb-1">
              Higher Secondary Certificate
            </h4>
            <p className="text-sm text-slate-500 dark:text-gray-400 mb-4">
              Chittagong Govt. Model School and College
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 hover:border-emerald-500/50 transition-all duration-300">
            <span className="text-[13px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-widest">
              2019 - 2021
            </span>
            <h4 className="font-display font-semibold text-lg text-slate-900 dark:text-white mt-2 mb-1">
              Secondary School Certificate
            </h4>
            <p className="text-sm text-slate-500 dark:text-gray-400 mb-4">
              Railway Public High School
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
