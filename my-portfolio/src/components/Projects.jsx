import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Microservices E-Commerce Architecture",
      description: "A distributed backend system with decoupled services for product catalog, ordering, and user authentication using Spring Cloud, Eureka service discovery, and API gateway routing.",
      tags: ["Java", "Spring Boot", "Microservices", "Docker", "MySQL"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      title: "Enterprise Point of Sale (POS) System",
      description: "Full-stack POS and order management solution featuring a reactive Angular client and secure Spring Boot REST endpoints with JWT authorization and relational data models.",
      tags: ["Angular", "Spring Boot", "Tailwind CSS", "PostgreSQL", "REST APIs"],
      github: "https://github.com",
      live: "https://github.com",
    },
    {
      title: "Task & Expense Tracking Platform",
      description: "Full-stack web application designed for streamlined resource and financial management with dynamic state handling, automated reporting, and modern UI components.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-sky-400 font-mono text-sm tracking-wider uppercase font-semibold">
          03. Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
          Engineering Projects
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-base">
          A selection of full-stack platforms, microservice architectures, and systems built with modern engineering standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 group"
          >
            <div>
              {/* Header icons */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-lg bg-slate-800/80 text-sky-400 group-hover:text-white transition-colors">
                  <FolderGit2 size={22} />
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                    title="View Source"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-400 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-mono text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}