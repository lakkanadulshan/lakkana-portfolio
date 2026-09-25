import React from 'react';
import { Server, Layout, Cloud, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Server className="text-sky-400" size={24} />,
      title: "Backend & Systems",
      desc: "Specialized in Java, Spring Boot microservices, secure RESTful APIs, and relational data modeling.",
    },
    {
      icon: <Layout className="text-indigo-400" size={24} />,
      title: "Modern Frontend",
      desc: "Engineering reactive and responsive web interfaces using Angular, React, and Tailwind CSS.",
    },
    {
      icon: <Cloud className="text-emerald-400" size={24} />,
      title: "Cloud & DevOps",
      desc: "Experience with AWS core infrastructure, Linux environments, Git version control, and CI/CD pipelines.",
    },
    {
      icon: <CheckCircle2 className="text-purple-400" size={24} />,
      title: "Clean Architecture",
      desc: "Committed to OOP standards, SOLID principles, testing practices, and high-performance design.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
        
        {/* Left Side: Summary */}
        <div className="lg:w-1/2">
          <span className="text-sky-400 font-mono text-sm tracking-wider uppercase font-semibold">
            01. About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 tracking-tight leading-snug">
            Engineering reliable backends with a clean, end-to-end perspective.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-4">
            I am an undergraduate passionate about designing resilient software systems. My core expertise lies in architecting backend services with Java and Spring Boot, paired with hands-on experience in modern frontend development using Angular and React.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            I enjoy transforming complex requirements into maintainable, production-ready code. Always eager to explore cloud native patterns, optimize system throughput, and contribute to impactful engineering teams.
          </p>
        </div>

        {/* Right Side: Key Focus Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/70"
            >
              <div className="mb-3 p-2 rounded-lg bg-slate-800/60 w-fit">{item.icon}</div>
              <h3 className="text-white font-semibold text-base mb-1.5">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}