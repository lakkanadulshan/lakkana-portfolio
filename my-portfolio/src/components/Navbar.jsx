import React from "react";
import cvFile from "../assets/lakkana-dulshan-se-java-resume.pdf";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="glass-nav fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl rounded-full bg-[#080908]/75 backdrop-blur-xl border border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-white flex items-center gap-2"
        >
          <span className="nav-mark">L</span>
          <span className="hidden sm:inline">Lakkana</span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-2 hover:text-[#a3e635] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <a
          href={cvFile}
          download="lakkana-dulshan-se-java-resume.pdf"
          className="flex items-center gap-2 px-4 py-2 bg-[#84cc16] text-black font-semibold rounded-md hover:bg-[#a3e635] transition-colors"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
