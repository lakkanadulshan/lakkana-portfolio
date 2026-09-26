import React from 'react';
import { ExternalLink, FolderGit2, Layers } from 'lucide-react';

import lmsImg from '../assets/lms.png';
import posImg from '../assets/pos.png';
import storeImg from '../assets/store.png';

export default function Projects() {
  const projects = [
    {
      
      title: "Cafeteria POS System",
      description:
        "Full-stack web-based POS system featuring role-based access control, menu management, order processing, and sales analytics.",
      image: posImg,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "Prisma",
        "Database",
      ],
      github:
        "https://github.com/lakkanadulshan/cafeteria-pos-system",
      live:
        "https://cafeteria-pos-system-lac.vercel.app/",
      category: "Full-Stack",
    },
    {
      title: "Computer Store Web",
      description:
        "Full-stack computer hardware e-commerce platform with product browsing, shopping functionality, and a responsive modern interface.",
      image: storeImg,
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Tailwind CSS",
      ],
      github:
        "https://github.com/lakkanadulshan/computer-store-web",
      live:
        "https://computer-store-web-five.vercel.app/",
      category: "Full-Stack / MERN",
    },
    {
      title: "SkillHub LMS",
      description:
        "Modern full-stack Learning Management System that enables students and instructors to manage courses, learning content, and educational resources.",
      image: lmsImg,
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Tailwind CSS",
        "JWT",
      ],
      github:
        "https://github.com/lakkanadulshan/Skill-Hub-LMS",
      live:
        "https://skill-hub-lms-pi.vercel.app/",
      category: "Full-Stack / MERN",
    },
    {
      title: "Employee Management Microservices",
      description:
        "Scalable employee management system built with Java 21, Spring Boot Microservices, Spring Cloud, Eureka Service Registry, OpenFeign, and MySQL.",
      technologies: [
        "Java 21",
        "Spring Boot",
        "Spring Cloud",
        "Eureka",
        "OpenFeign",
        "MySQL",
      ],
      github:
        "https://github.com/lakkanadulshan/employee-management-microservices",
      category: "Backend / Microservices",
    },
    {
      title: "Point of Sale Backend API",
      description:
        "Scalable RESTful backend API for a POS system using Spring Boot, Spring Data JPA, Hibernate, and MySQL, following a layered architecture.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
        "Swagger",
      ],
      github:
        "https://github.com/lakkanadulshan/point-of-sale-backend",
      category: "Backend / REST API",
    },
    {
      title: "StockMate POS",
      description:
        "Desktop-based POS and inventory management system developed with Java Swing, JDBC, and MySQL using the MVC architecture.",
      technologies: [
        "Java",
        "Swing",
        "JDBC",
        "MySQL",
        "MVC",
      ],
      github:
        "https://github.com/lakkanadulshan/StockMate-POS-System",
      category: "Desktop / Java",
    }
  ];

  return (
    <section id="projects" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="mb-14">
        <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          // 03. Featured Work
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Engineering Projects
        </h2>
        <p className="mt-4 text-neutral-400 font-mono text-sm sm:text-base max-w-xl">
          A selection of full-stack platforms, microservice architectures, and systems built with modern engineering standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-[#84cc16]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(132,204,22,0.08)] group"
          >
            <div>
              {/* Image Preview එක (Image එකක් තියෙන Project වලට විතරක් render වේ) */}
              {project.image ? (
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-neutral-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-50" />
                </div>
              ) : (
                /* Backend/Desktop Project වලට Image නැති නිසා ඒකට ගැලපෙන clean banner එකක් */
                <div className="h-28 w-full bg-gradient-to-br from-neutral-900 via-[#141414] to-[#111111] border-b border-neutral-800/80 flex items-center justify-between px-6">
                  <span className="text-xs font-mono text-neutral-500 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-800/50 text-[#84cc16]">
                    <Layers size={18} />
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[#a3e635] group-hover:border-[#84cc16]/30 transition-colors">
                    <FolderGit2 size={20} />
                  </div>
                  <div className="flex items-center gap-3 text-neutral-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 hover:text-[#a3e635] transition-colors"
                      title="View Source"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 hover:text-[#a3e635] transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a3e635] transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm font-mono leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tags Footer */}
            <div className="px-6 pb-6 pt-2">
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                {project.technologies.map((technology, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono text-[#a3e635]/80 bg-[#84cc16]/10 px-2.5 py-1 rounded-md border border-[#84cc16]/20"
                  >
                    #{technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}