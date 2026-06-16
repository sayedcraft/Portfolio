import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Projects data definition
  const projectsData = [
    {
      id: 'devflow',
      name: 'DevFlow - Developer Q&A Platform',
      image: '/assets/project_devflow.png',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      briefDescription: 'A premium developer Q&A forum designed for modern programming questions, complete with markdown rendering, syntax highlighting, upvotes, and reputation scoring.',
      liveLink: 'https://devflow.example.com',
      githubLink: 'https://github.com/alex-dev/devflow-client',
      challenges: 'Handling real-time reputation score updates across concurrent user threads while maintaining zero database latency. Resolving CSS layouts for nested comments and formatting complex markdown contents safely on the client side.',
      futurePlans: 'Integrate an AI-assisted automated code verification tool to validate code snippets directly in responses, alongside offline sync using local storage DB.'
    },
    {
      id: 'fitpulse',
      name: 'FitPulse - Fitness Tracker Dashboard',
      image: '/assets/project_fitpulse.png',
      techStack: ['React', 'Chart.js', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
      briefDescription: 'A responsive fitness tracker dashboard displaying activity reports, heart rate metrics, custom calorie planners, and interactive goal analytics.',
      liveLink: 'https://fitpulse.example.com',
      githubLink: 'https://github.com/alex-dev/fitpulse-client',
      challenges: 'Structuring smooth and performant render frames when refreshing real-time charting canvases. Compiling user heart rate fluctuations into unified, downloadable report formats with pure JavaScript libraries.',
      futurePlans: 'Add sync integrations for Apple Health and Google Fit APIs, along with real-time multiplayer workout challenges using WebSockets.'
    },
    {
      id: 'zenith',
      name: 'Zenith - Collaborative Task Board',
      image: '/assets/project_zenith.png',
      techStack: ['Next.js', 'React', 'DnD Kit', 'Tailwind CSS', 'Supabase'],
      briefDescription: 'A collaborative team Kanban dashboard featuring live card drags, nested tasks, user assignees, activity timelines, and direct messaging channels.',
      liveLink: 'https://zenith.example.com',
      githubLink: 'https://github.com/alex-dev/zenith-workspace',
      challenges: 'Ensuring seamless multiplayer synchronization with Supabase Realtime during simultaneous card drags, and maintaining precise visual states for drag-and-drop actions on mobile browsers.',
      futurePlans: 'Design custom automation triggers (e.g. automatically moving tasks based on dates), add Gantt chart analytics, and create custom webhooks for Slack integrations.'
    }
  ];

  // 1. Scroll-Spy Section Highlight Listener
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120; // Offset for navbar height and visual triggers

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Run once initially to set section
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // 2. Scroll Trigger Animations via Intersection Observer
  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.08, // trigger when 8% is in view
      }
    );

    const animationTargets = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right'
    );
    
    animationTargets.forEach((target) => animationObserver.observe(target));

    return () => {
      animationTargets.forEach((target) => animationObserver.unobserve(target));
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-bg-dark text-slate-800 dark:text-gray-100 min-h-screen relative selection:bg-cyan-500/20 selection:text-cyan-300 transition-colors duration-300">
      {/* Decorative top header glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Floating Navigation Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} theme={theme} setTheme={setTheme} />

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projectsData} setSelectedProject={setSelectedProject} />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Detailed Project Overlay Page */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;
