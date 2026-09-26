import React from 'react';
import { Terminal, Database, Cloud, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      icon: <Terminal className="text-[#a3e635]" size={20} />,
      skills: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "Spring Security", "Node.js", "Express.js"],
    },
    {
      title: "Frontend ",
      icon: <Layers className="text-[#a3e635]" size={20} />,
      skills: ["Angular", "React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-[#a3e635]" size={20} />,
      skills: ["AWS (EC2, S3, RDS, VPC)", "Linux / Bash", "Git & GitHub", "Docker Basics", "CI/CD Concepts"],
    },
    {
      title: "Databases & Tools",
      icon: <Database className="text-[#a3e635]" size={20} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Postman", "Maven", "Figma", "WordPress"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="mb-14">
        <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          // 02. Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-neutral-400 font-mono text-sm sm:text-base max-w-xl">
          A categorized overview of the languages, frameworks, cloud services, and developer tools I build with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-7 rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-[#84cc16]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(132,204,22,0.08)] group"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 w-fit group-hover:border-[#84cc16]/30 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#a3e635] transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-900/90 text-neutral-300 text-xs sm:text-sm font-mono border border-neutral-800 hover:border-[#84cc16]/60 hover:text-white hover:bg-neutral-850 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}