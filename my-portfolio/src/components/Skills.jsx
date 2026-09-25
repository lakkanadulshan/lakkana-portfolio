import React from 'react';
import { Terminal, Database, Cloud, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      icon: <Terminal className="text-sky-400" size={20} />,
      skills: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "Spring Security", "Node.js", "Express.js"],
    },
    {
      title: "Frontend Engineering",
      icon: <Layers className="text-indigo-400" size={20} />,
      skills: ["Angular", "React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-emerald-400" size={20} />,
      skills: ["AWS (EC2, S3, RDS, VPC)", "Linux / Bash", "Git & GitHub", "Docker Basics", "CI/CD Concepts"],
    },
    {
      title: "Databases & Tools",
      icon: <Database className="text-purple-400" size={20} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Postman", "Maven", "Figma", "WordPress"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-sky-400 font-mono text-sm tracking-wider uppercase font-semibold">
          02. Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
          Skills & Technologies
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-base">
          A categorized overview of the languages, frameworks, cloud services, and developer tools I build with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-lg bg-slate-800/80 w-fit">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white tracking-wide">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium border border-slate-700/60 hover:border-sky-500/40 hover:text-white transition-all duration-200"
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