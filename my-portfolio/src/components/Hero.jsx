import React from "react";
import { GitFork, BriefcaseBusiness, Mail, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[85vh]">
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.15]">
        Engineering resilient backends &
        <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-400">
          modern web solutions
        </span>
        .
      </h1>

      <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
        Aspiring Software Engineer focused on Java, Spring Boot microservices,
        and high performance full stack applications with Angular & React.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all"
        >
          View Projects <ArrowUpRight size={16} />
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium text-sm transition-all bg-slate-900/50"
        >
          Get in Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex items-center gap-5 text-slate-400">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <GitFork size={22} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition-colors"
        >
          <BriefcaseBusiness size={22} />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="hover:text-white transition-colors"
        >
          <Mail size={22} />
        </a>
      </div>
    </section>
  );
}
