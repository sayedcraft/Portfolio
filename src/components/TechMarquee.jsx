import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
];

const TechMarquee = () => {
  return (
    <div className="overflow-hidden py-10 border-t border-slate-200 dark:border-white/5 mt-8">
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 min-w-max">
              <img src={tech.logo} alt={tech.name} className="w-8 h-8 object-contain" />
              <span className="font-display font-semibold text-slate-600 dark:text-slate-400">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;