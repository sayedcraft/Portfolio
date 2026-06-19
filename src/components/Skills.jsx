// import React from 'react';
import { Cpu, Code } from 'lucide-react';
import TechMarquee from './TechMarquee';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', level: 90, color: 'bg-cyan-500 shadow-cyan-500/20' },
    { name: 'JavaScript (ES6+)', level: 85, color: 'bg-yellow-500 shadow-yellow-500/20' },
    { name: 'Tailwind CSS', level: 95, color: 'bg-teal-400 shadow-teal-400/20' },
    { name: 'HTML5 & CSS3', level: 90, color: 'bg-orange-500 shadow-orange-500/20' },
    { name: 'Next.js', level: 80, color: 'bg-orange-500 shadow-orange-500/20' },
  ];

  const backendToolsSkills = [
    { name: 'Node.js', level: 80, color: 'bg-green-500 shadow-green-500/20' },
    { name: 'MongoDB', level: 85, color: 'bg-indigo-500 shadow-indigo-500/20' },
    { name: 'Git & GitHub', level: 88, color: 'bg-purple-500 shadow-purple-500/20' },
    { name: 'Express', level: 80, color: 'bg-green-500 shadow-green-500/20' },
    { name: 'Figma', level: 85, color: 'bg-rose-500 shadow-rose-500/20' },
  ];

  return (
    <section id="skills" className="py-5 relative bg-slate-500/5 dark:bg-black/5">
      {/* Glow background */}
      <div className="absolute top-[30%] left-[10%] w-[35%] h-[35%] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 reveal-on-scroll">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Technical <span className="text-gradient-cyan-purple">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-gray-400 mt-4 text-sm sm:text-base font-light">
            My core technical capabilities categorized by layers.
          </p>
        </div>

        {/* Skills Lists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start reveal-on-scroll">
          
          {/* Frontend Panel */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 space-y-6">
            <div className="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400">
              <Cpu size={20} />
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">Frontend Technologies</h3>
            </div>
            
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${skill.color}`} 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Panel */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/5 space-y-6">
            <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400">
              <Code size={20} />
              <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white">Backend & Developer Tools</h3>
            </div>

            <div className="space-y-4">
              {backendToolsSkills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-purple-600 dark:text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${skill.color}`} 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <TechMarquee />
      </div>
    </section>
  );
};

export default Skills;
