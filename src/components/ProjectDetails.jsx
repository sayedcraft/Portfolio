import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, AlertCircle, Compass } from 'lucide-react';

// Custom inline SVG component for Github icon since Lucide deprecated brand icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const ProjectDetails = ({ project, onClose }) => {
  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-900/60 dark:bg-gray-950/85 backdrop-blur-md transition-all duration-300">
      
      {/* Detail Card Container */}
      <div className="relative w-full max-w-5xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 my-auto animate-scale-in">
        
        {/* Header Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-200 hover:bg-slate-300 dark:bg-black/40 dark:hover:bg-black/60 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Image Banner and Direct Actions */}
          <div className="lg:col-span-5 bg-slate-100/40 dark:bg-black/30 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/5 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Project Preview Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-slate-200 dark:border-white/5 shadow-md">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Tech stack summary */}
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase mt-1">
                  Product Showcase
                </p>
              </div>

              {/* Tech Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-600 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex gap-4 pt-8">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3.5 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white transition-all duration-300 shadow-md shadow-purple-500/20"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-5 py-3.5 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300"
                >
                  <GithubIcon />
                  Client Repo
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Deep Details Content */}
          <div className="lg:col-span-7 p-6 sm:p-8 max-h-[80vh] lg:max-h-[70vh] overflow-y-auto space-y-6">
            
            {/* Description */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <Compass size={18} />
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white">Project Overview</h4>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                {project.briefDescription}
              </p>
            </div>

            <hr className="border-slate-200 dark:border-white/5" />

            {/* Challenges Faced */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <AlertCircle size={18} />
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white">Challenges Faced</h4>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <hr className="border-slate-200 dark:border-white/5" />

            {/* Future Plans */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Sparkles size={18} />
                <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-900 dark:text-white">Future Roadmap & Improvements</h4>
              </div>
              <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                {project.futurePlans}
              </p>
            </div>

            {/* Bottom Back Button */}
            <div className="pt-6">
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-slate-100 dark:bg-white/2.5 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
