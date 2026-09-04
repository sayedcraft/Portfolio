import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Projects data definition
  const projectsData = [
    // bookcourier
    {
      id: "BookCourier",
      name: "BookCourier - Book Delivery Service",
      image: "/assets/bookcourier.png",
      techStack: [
        "React",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "API",
        "Firebase",
      ],
      briefDescription:
        "Founded in 2026, BookCourier started with a simple yet powerful mission: to make literature and academic resources accessible to every corner of Bangladesh. We realized that while readers are everywhere, well-stocked bookstores are not.",
      liveLink: "https://book-courier-by-sayed.web.app/",
      githubLink: "https://github.com/sayedcraft/Assignment-11-client",
      challenges:
        "Handling real-time reputation score updates across concurrent user threads while maintaining zero database latency. Resolving CSS layouts for nested comments and formatting complex markdown contents safely on the client side.",
      futurePlans:
        "Integrate an AI-assisted automated code verification tool to validate code snippets directly in responses, alongside offline sync using local storage DB.",
    },
    // LuxeRetreats
    {
      id: "LuxeRetreats",
      name: "LuxeRetreats - Luxury Vacation Booking App",
      image: "/assets/luxe.png",
      techStack: [
        "Next.js",
        "Javascript",
        "Firebase",
        "MongoDB",
        "Express",
        "API",
        "Tailwind CSS",
      ],
      briefDescription:
        "A luxury vacation booking app that allows users to search, filter, and explore their favorite destinations with detailed information and reviews.",
      liveLink: "https://luxe-retreats-by-sayed.vercel.app/",
      githubLink: "https://github.com/sayedcraft/LuxeRetreats_frontend",
      challenges:
        "Structuring smooth and performant render frames when refreshing real-time charting canvases. Compiling user heart rate fluctuations into unified, downloadable report formats with pure JavaScript libraries.",
      futurePlans:
        "Add sync integrations for Apple Health and Google Fit APIs, along with real-time multiplayer workout challenges using WebSockets.",
    },
    // Heaven furniture
    {
      id: "HeavenFurnitureMart",
      name: "Heaven Furniture Mart - Luxury Furniture & Interior Website",
      image: "/assets/furniture.png",
      techStack: ["Next.js", "Javascript", "React", "Tailwind CSS"],
      briefDescription:
        "A premium furniture and interior website designed to showcase luxury, bespoke, and handcrafted furniture through an elegant, responsive, and conversion-focused user experience.",
      liveLink: "https://furniture-mart-by-sayed.netlify.app/",
      githubLink: "https://github.com/sayedcraft/Heaven_Furniture_Mart",
      challenges:
        "Creating a premium luxury-focused interface while keeping the experience responsive, performant, and easy to navigate across different screen sizes. Structuring reusable components and category-based product data to support scalable product browsing and detailed product pages.",
      futurePlans:
        "Add a complete e-commerce experience with shopping cart and checkout functionality, advanced product filtering, customer accounts, online ordering, and a backend-powered product management system.",
    },
  ];

  // 1. Scroll-Spy Section Highlight Listener
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 120; // Offset for navbar height and visual triggers

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    // Run once initially to set section
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // 2. Scroll Trigger Animations via Intersection Observer
  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.08, // trigger when 8% is in view
      },
    );

    const animationTargets = document.querySelectorAll(
      ".reveal-on-scroll, .reveal-scale, .reveal-left, .reveal-right",
    );

    animationTargets.forEach((target) => animationObserver.observe(target));

    return () => {
      animationTargets.forEach((target) => animationObserver.unobserve(target));
    };
  }, []);

  // mouse hover effect

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.backgroundColor = "#06b6d4";
      dot.style.borderRadius = "50%";
      dot.style.pointerEvents = "none";
      dot.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      document.body.appendChild(dot);

      setTimeout(() => {
        dot.style.opacity = "0";
        dot.style.transform = "scale(0)";
      }, 10);
      setTimeout(() => dot.remove(), 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-bg-dark text-slate-800 dark:text-gray-100 min-h-screen relative selection:bg-cyan-500/20 selection:text-cyan-300 transition-colors duration-300">
      {/* Decorative top header glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Floating Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects
          projects={projectsData}
          setSelectedProject={setSelectedProject}
        />
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
