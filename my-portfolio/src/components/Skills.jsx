import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code2, Server, Layers, Cloud, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {
      title: "Languages",
      icon: <Code2 size={20} className="text-[#a3e635]" />,
      skills: [
        {
          name: "Java",
          level: "Enterprise / OOP",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M8.8 17.5c2.3.3 5-.2 6.5-1.5.4 1-1.3 1.8-2.6 2-2.1.3-4.2.1-4.8-.5-.2-.2.2-.4.9-.5v.5zM8.3 19.3c2.9.2 6.2-.1 8.2-1.5.3.8-1.5 1.5-2.7 1.8-2.5.5-5.3.4-6.3-.3-.3-.2.1-.4.8-.5v.5z" fill="#E76F00"/>
              <path d="M12.9 14.8c1.6-1.8 1-3.3.4-4.8-.4 1-.8 1.9-.3 2.7.3.5.5.9-.1 2.1z" fill="#5382A1"/>
              <path d="M16.7 19.8c-3.1 1.7-8.8 1.8-11.7.1-.3-.2 0-.4.3-.5 2.8 1 7.7.9 10.8-.4.5-.2.8.5.6.8z" fill="#E76F00"/>
              <path d="M14.6 9.2c1.2-1.4.6-2.8-.1-4.1-.3 1-.7 1.8-.1 2.5.4.6.5 1-.2 1.6z" fill="#5382A1"/>
              <path d="M17.8 22c-3.7 1.3-9.7 1.4-13.3-.2-.3-.1 0-.3.3-.4 3.4 1 8.8.9 12.3-.2.5-.2.8.5.7.8z" fill="#E76F00"/>
            </svg>
          ),
        },
        {
          name: "TypeScript",
          level: "Strict Typings",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect width="24" height="24" rx="4" fill="#3178C6" />
              <path d="M11.7 11.5H8.3V19H6.4V11.5H3V9.8H11.7V11.5ZM19.6 13.8C19.6 12.4 18.5 11.7 16.8 11.2C15.4 10.8 14.8 10.5 14.8 9.9C14.8 9.4 15.3 9 16.1 9C16.9 9 17.5 9.3 17.9 10L19.3 8.9C18.6 7.8 17.5 7.4 16.1 7.4C14.2 7.4 12.9 8.5 12.9 10.1C12.9 11.4 13.8 12.2 15.6 12.7C17 13.1 17.6 13.5 17.6 14.1C17.6 14.7 17 15.2 16.1 15.2C15.1 15.2 14.4 14.6 13.9 13.8L12.5 14.9C13.2 16.2 14.5 16.8 16.1 16.8C18.2 16.8 19.6 15.6 19.6 13.8Z" fill="white" />
            </svg>
          ),
        },
        {
          name: "JavaScript",
          level: "Modern ES6+",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <rect width="24" height="24" rx="4" fill="#F7DF1E" />
              <path d="M7.7 18.2C8.3 18.6 9 18.8 9.7 18.8C11.1 18.8 11.9 18.1 11.9 16.7V11.8H10.1V16.7C10.1 17.3 9.7 17.5 9.2 17.5C8.7 17.5 8.3 17.3 8 17L7.7 18.2ZM15.5 18.8C17.3 18.8 18.4 17.8 18.4 16.2C18.4 14.8 17.5 14.2 16.1 13.6C15.2 13.2 14.8 12.9 14.8 12.4C14.8 11.9 15.2 11.6 15.8 11.6C16.4 11.6 16.9 11.9 17.2 12.4L18.2 11.4C17.6 10.5 16.8 10.1 15.8 10.1C14.2 10.1 13.1 11.1 13.1 12.6C13.1 13.9 14 14.6 15.4 15.1C16.3 15.5 16.8 15.8 16.8 16.4C16.8 17 16.3 17.3 15.5 17.3C14.7 17.3 14.1 16.8 13.7 16.2L12.7 17.3C13.3 18.2 14.3 18.8 15.5 18.8Z" fill="#000" />
            </svg>
          ),
        },
        {
          name: "SQL",
          level: "DDL & DML",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-mono text-[9px] font-bold">
              SQL
            </div>
          ),
        },
        {
          name: "HTML5 / CSS3",
          level: "Responsive UI",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-orange-950/60 border border-orange-500/40 text-orange-400 font-mono text-[9px] font-bold">
              H/C
            </div>
          ),
        },
        {
          name: "Bash / Shell",
          level: "CLI Scripting",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-neutral-800 border border-neutral-700 text-[#a3e635] font-mono text-[10px] font-bold">
              &gt;_
            </div>
          ),
        },
      ],
    },
    {
      title: "Backend & Systems",
      icon: <Server size={20} className="text-[#a3e635]" />,
      skills: [
        {
          name: "Spring Boot",
          level: "REST APIs",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 8V16L12 22L22 16V8L12 2Z" fill="#6DB33F" opacity="0.2"/>
              <path d="M12 4L4 9V15L12 20L20 15V9L12 4Z" stroke="#6DB33F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12.5C10.5 14 12 15 13.5 14C14.5 13.5 15 12.5 14.5 11.5C14 10.5 12.5 10 11.5 9C10.5 8 10.5 7 11.5 6.5C12.5 6 13.5 6.5 14 7" stroke="#6DB33F" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ),
        },
        {
          name: "Microservices",
          level: "Spring Cloud",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-[8px] font-bold">
              μS
            </div>
          ),
        },
        {
          name: "Spring Security",
          level: "JWT & Roles",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-lime-950/60 border border-lime-500/40 text-[#a3e635] font-mono text-[8px] font-bold">
              SEC
            </div>
          ),
        },
        {
          name: "Node.js",
          level: "Server Runtime",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#339933">
              <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2ZM17.8 15.2L12 18.5L6.2 15.2V8.8L12 5.5L17.8 8.8V15.2Z"/>
            </svg>
          ),
        },
        {
          name: "Express.js",
          level: "REST Routing",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-neutral-900 border border-neutral-700 text-neutral-300 font-mono text-[8px] font-bold">
              EX
            </div>
          ),
        },
        {
          name: "Hibernate / JPA",
          level: "ORM Mapping",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-yellow-950/60 border border-yellow-600/40 text-yellow-400 font-mono text-[8px] font-bold">
              JPA
            </div>
          ),
        },
      ],
    },
    {
      title: "Frontend Engineering",
      icon: <Layers size={20} className="text-[#a3e635]" />,
      skills: [
        {
          name: "Angular",
          level: "Components & State",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 5.5L4.5 17L12 21.5L19.5 17L21 5.5L12 2Z" fill="#DD0031" opacity="0.2"/>
              <path d="M12 3L4 6L5.3 16.5L12 20.5L18.7 16.5L20 6L12 3Z" stroke="#DD0031" strokeWidth="1.5"/>
              <path d="M12 6L8.5 15H10.2L11 13H13L13.8 15H15.5L12 6ZM11.5 11.5L12 9.5L12.5 11.5H11.5Z" fill="#DD0031"/>
            </svg>
          ),
        },
        {
          name: "React",
          level: "Hooks & SPA",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <ellipse cx="12" cy="12" rx="3" fill="#61DAFB"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)"/>
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          level: "Utility Layouts",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#38BDF8">
              <path d="M12 6c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.8 3.3-1.4.8.3 1.3.8 1.9 1.4C13 11 14.2 12 16.8 12c2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.8-3.3 1.4-.8-.3-1.3-.8-1.9-1.4C15.8 7 14.6 6 12 6zm-7.2 6c-2.7 0-4.4 1.3-5.2 4 .9-1.3 2-1.8 3.3-1.4.8.3 1.3.8 1.9 1.4C5.8 17 7 18 9.6 18c2.7 0 4.4-1.3 5.2-4-.9 1.3-2 1.8-3.3 1.4-.8-.3-1.3-.8-1.9-1.4C8.6 13 7.4 12 4.8 12z"/>
            </svg>
          ),
        },
        {
          name: "Bootstrap",
          level: "Responsive UI",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-purple-950/60 border border-purple-500/40 text-purple-400 font-mono text-[9px] font-bold">
              BS
            </div>
          ),
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={20} className="text-[#a3e635]" />,
      skills: [
        {
          name: "AWS VPC & EC2",
          level: "Compute & Networks",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M6 15l6 3 6-3v-6l-6-3-6 3v6z" stroke="#FF9900" strokeWidth="1.5"/>
              <path d="M6 9l6 3 6-3M12 12v6" stroke="#FF9900" strokeWidth="1.5"/>
            </svg>
          ),
        },
        {
          name: "AWS S3 & RDS",
          level: "Storage & DBs",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-amber-950/60 border border-amber-500/40 text-amber-400 font-mono text-[8px] font-bold">
              AWS
            </div>
          ),
        },
        {
          name: "Linux / Bash",
          level: "Administration",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-neutral-900 border border-neutral-700 text-yellow-300 font-mono text-[9px] font-bold">
              LNX
            </div>
          ),
        },
        {
          name: "Git & GitHub",
          level: "Version Control",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#F05032">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.7c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Databases & Storage",
      icon: <Database size={20} className="text-[#a3e635]" />,
      skills: [
        {
          name: "MySQL",
          level: "Relational Queries",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-sky-950/60 border border-sky-500/40 text-sky-400 font-mono text-[8px] font-bold">
              SQL
            </div>
          ),
        },
        {
          name: "PostgreSQL",
          level: "Enterprise RDBMS",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-blue-950/60 border border-blue-500/40 text-blue-400 font-mono text-[8px] font-bold">
              PG
            </div>
          ),
        },
        {
          name: "MongoDB",
          level: "Document NoSQL",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#47A248">
              <path d="M12 2C11.5 4.5 9 8.5 9 12c0 3.5 2.5 7.5 3 10 .5-2.5 3-6.5 3-10 0-3.5-2.5-7.5-3-10z"/>
            </svg>
          ),
        },
        {
          name: "Prisma ORM",
          level: "Schema & Migrations",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-neutral-900 border border-neutral-700 text-teal-300 font-mono text-[8px] font-bold">
              ▲
            </div>
          ),
        },
      ],
    },
    {
      title: "Developer Tools",
      icon: <Wrench size={20} className="text-[#a3e635]" />,
      skills: [
        {
          name: "Postman",
          level: "API Testing",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-orange-950/60 border border-orange-500/40 text-orange-400 font-mono text-[8px] font-bold">
              PM
            </div>
          ),
        },
        {
          name: "Maven",
          level: "Java Build Tool",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-red-950/60 border border-red-500/40 text-red-400 font-mono text-[8px] font-bold">
              MVN
            </div>
          ),
        },
        {
          name: "Figma",
          level: "UI / UX Prototyping",
          icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M8 2h4v4H8a2 2 0 0 1 0-4z" fill="#F24E1E"/>
              <path d="M12 2h4a2 2 0 0 1 0 4h-4V2z" fill="#FF7262"/>
              <path d="M8 6h4v4H8a2 2 0 0 1 0-4z" fill="#A259FF"/>
              <path d="M12 6h4a2 2 0 1 1 0 4h-4V6z" fill="#1ABCFE"/>
              <path d="M8 10h4v4a2 2 0 1 1-4 0v-4z" fill="#0ACF83"/>
            </svg>
          ),
        },
        {
          name: "WordPress",
          level: "CMS Deployment",
          icon: (
            <div className="w-5 h-5 rounded flex items-center justify-center bg-slate-900 border border-slate-700 text-sky-300 font-mono text-[8px] font-bold">
              WP
            </div>
          ),
        },
      ],
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="skills" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a] overflow-hidden">
      
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          // 02. Technical Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Skills & Technologies
        </h2>
        <p className="mt-4 text-neutral-400 font-mono text-sm sm:text-base max-w-xl mx-auto">
          Explore my core stack categorized across languages, frameworks, cloud services, and developer tooling.
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[470px] flex items-center justify-center [perspective:1200px]">
        
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous Category"
          className="absolute left-2 sm:left-6 z-40 p-3 rounded-full bg-[#111111]/90 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#84cc16]/50 hover:bg-neutral-900 transition-all duration-300 shadow-xl cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Category"
          className="absolute right-2 sm:right-6 z-40 p-3 rounded-full bg-[#111111]/90 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#84cc16]/50 hover:bg-neutral-900 transition-all duration-300 shadow-xl cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>

        {/* Carousel Items */}
        <div className="relative w-full h-[410px] flex items-center justify-center">
          {categories.map((cat, idx) => {
            const count = categories.length;
            let offset = idx - activeIndex;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            let transform = 'translate3d(0, 0, -200px) scale(0.7)';
            let opacity = '0';
            let zIndex = 10;
            let pointerEvents = 'none';

            if (isActive) {
              transform = 'translate3d(0, 0, 0) scale(1)';
              opacity = '1';
              zIndex = 30;
              pointerEvents = 'auto';
            } else if (isLeft) {
              transform = 'translate3d(-55%, 0, -120px) scale(0.85) rotateY(15deg)';
              opacity = '0.35';
              zIndex = 20;
              pointerEvents = 'auto';
            } else if (isRight) {
              transform = 'translate3d(55%, 0, -120px) scale(0.85) rotateY(-15deg)';
              opacity = '0.35';
              zIndex = 20;
              pointerEvents = 'auto';
            }

            return (
              <div
                key={idx}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                style={{ transform, opacity, zIndex, pointerEvents }}
                className={`absolute w-[92%] sm:w-[500px] p-7 sm:p-8 rounded-3xl bg-[#111111] transition-all duration-500 ease-out select-none ${
                  isActive
                    ? 'border-2 border-[#84cc16]/60 shadow-[0_0_40px_rgba(132,204,22,0.18)] cursor-default'
                    : 'border border-neutral-800/80 cursor-pointer hover:border-neutral-700 blur-[0.5px]'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-neutral-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#a3e635] bg-[#84cc16]/10 px-3 py-1 rounded-full border border-[#84cc16]/20">
                    {cat.skills.length} Items
                  </span>
                </div>

                {/* Hexagon/Badge Skills Layout With Logo */}
                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-[#84cc16]/40 transition-all duration-200 group flex items-center gap-3"
                    >
                      {/* Logo Icon */}
                      <div className="p-2 rounded-xl bg-[#111111] border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {skill.icon}
                      </div>

                      {/* Info */}
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-xs sm:text-sm font-bold text-neutral-200 group-hover:text-[#a3e635] transition-colors truncate">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 truncate mt-0.5">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {categories.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setActiveIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
              dotIdx === activeIndex
                ? 'w-8 bg-[#84cc16] shadow-[0_0_10px_rgba(132,204,22,0.8)]'
                : 'w-2 bg-neutral-800 hover:bg-neutral-600'
            }`}
          />
        ))}
      </div>

    </section>
  );
}