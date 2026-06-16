import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Projects = ({ projects, setSelectedProject }) => {
  return (
    <section id="projects" className="py-20 bg-slate-500/5 dark:bg-black/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Showcase of <span className="text-gradient-cyan-purple">My Best Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 dark:text-gray-400 mt-4 text-sm sm:text-base font-light">
            Here are three of my main projects. Click on "View Details" to learn about challenges faced, core technologies used, and future roadmaps.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass-panel rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 border border-slate-200 dark:border-white/5 reveal-scale delay-${index * 100}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm font-light line-clamp-2 leading-relaxed">
                  {project.briefDescription}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all duration-300"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-md shadow-purple-500/10 hover:scale-105 active:scale-95"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
