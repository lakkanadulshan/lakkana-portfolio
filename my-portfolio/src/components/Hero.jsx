import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Download } from "lucide-react";
import profileImg from "../assets/my-photo.jpeg";

export default function Hero() {
  const roles = [
    "Full-Stack Engineer",
    "Java & Spring Boot Specialist",
    "MERN Stack Developer",
    "Angular & React Enthusiast",
    "WordPress Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
        if (displayedText.length <= 1) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  // Bottom ribbon tech stack
  const techLogos = [
    { name: "Java & Spring", tag: "Enterprise Backend" },
    { name: "Microservices", tag: "Distributed Systems" },
    { name: "Angular & React", tag: "Modern Frontend" },
    { name: "AWS Cloud", tag: "Infrastructure" },
    { name: "MERN", tag: "Full-Stack APIs" },
  ];

  return (
    <section className="relative bg-[#0a0a0a] text-white pt-36 pb-20 px-6 sm:px-10 max-w-7xl mx-auto min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* =========================================================
          HERO MAIN CONTENT (SPLIT LAYOUT)
      ========================================================== */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full my-auto">
        
        {/* Left Column: Heading, Subtitle & Action Buttons */}
        <div className="lg:w-7/12 flex flex-col items-start text-left z-10">
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Lakkana Dulshan
          </h1>

          {/* Typing Role subtitle */}
          <div className="min-h-[36px] mt-4 flex items-center gap-2.5 text-lg sm:text-2xl font-mono text-[#a3e635]">
            <Terminal size={22} className="text-[#84cc16] shrink-0" />
            <span className="font-semibold tracking-tight">{displayedText}</span>
            <span className="w-0.5 h-6 bg-[#84cc16] animate-pulse shrink-0"></span>
          </div>

          {/* Intro Description */}
          <p className="mt-6 text-base sm:text-lg text-neutral-400 font-mono max-w-xl leading-relaxed">
            Building robust enterprise systems with Java & Spring Boot microservices, high performance Angular and React clients, and cloud-native deployments.
          </p>

          {/* Action Buttons with Neon Lime Glow */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            
            {/* Primary Neon Green Action Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#65a30d] hover:bg-[#84cc16] text-white font-bold text-base transition-all duration-300 shadow-[0_0_35px_rgba(101,163,13,0.55)] hover:shadow-[0_0_50px_rgba(132,204,22,0.8)] hover:scale-[1.02]"
            >
              Let’s get started
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary CV Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 text-sm font-semibold transition-all"
            >
              <Download size={16} /> Resume
            </a>
          </div>

        </div>

        {/* Right Column: Perfect Circular Portrait */}
{/* Right Column: Perfect Circular Portrait */}
        <div className="lg:w-5/12 flex justify-center relative">
          
          {/* Subtle Ambient Backlight behind Circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#65a30d]/20 to-transparent blur-3xl scale-95 pointer-events-none" />

          {/* Circular Frame */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-2 border-neutral-800/80 shadow-2xl bg-neutral-900 flex items-center justify-center">
            <img
              src={profileImg}
              alt="Lakkana Dulshan"
              className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM "WORKED WITH" / CORE COMPETENCIES RIBBON
      ========================================================== */}
      <div className="mt-16 pt-10 border-t border-neutral-900 w-full">
        <p className="text-xs font-mono tracking-wider text-neutral-500 uppercase mb-5">
          Core Tech Specializations
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {techLogos.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#111111] border border-neutral-800/80 hover:border-neutral-700 transition-colors"
            >
              <span className="text-sm font-bold text-neutral-200 tracking-wide">
                {tech.name}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 mt-0.5">
                {tech.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}