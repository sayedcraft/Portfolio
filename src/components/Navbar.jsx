import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Sun, Moon } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(href.substring(1));
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-navbar py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={(e) => handleClick(e, '#home')}>
            <div className="p-2 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 text-white shadow-md shadow-purple-500/20">
              <Code size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">SA
              <span className="text-cyan-500 dark:text-cyan-400">Y</span>ED
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-6">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`font-medium text-sm transition-all duration-300 relative py-1 ${
                      isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="transition-transform duration-500 hover:rotate-45" />
              ) : (
                <Moon size={18} className="transition-transform duration-500 hover:-rotate-12" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-md shadow-purple-500/10 hover:shadow-cyan-500/20 hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 focus:outline-none flex items-center justify-center transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800/50 transition-colors focus:outline-none flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Glass Slide Down) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out absolute left-0 right-0 glass-navbar shadow-2xl ${
        isOpen ? 'max-h-72 opacity-100 border-t border-slate-200 dark:border-white/5 py-4' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-4 space-y-2">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-l-4 border-cyan-500' 
                    : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="block text-center mt-4 mx-4 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
