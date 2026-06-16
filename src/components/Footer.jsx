// import React from 'react';
import { Code } from 'lucide-react';

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-gray-950/40 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Logo & Bio info */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleScrollToTop}>
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 text-white shadow-md">
              <Code size={16} />
            </div>
            <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
              SA<span className="text-cyan-500 dark:text-cyan-400">Y</span>ED
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="text-slate-500 dark:text-gray-500 text-xs sm:text-sm font-light text-center flex items-center gap-1.5">
            <span>Copyright © 2026 - All right reserved by MUHAMMAD SAYED</span>
            
          </div>

          {/* Right: Scroll to top */}
          <div>
            <a 
              href="#home"
              onClick={handleScrollToTop}
              className="text-xs font-semibold text-slate-500 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 uppercase tracking-widest transition-colors"
            >
              Back to Top ↑
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
