import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="glass-nav fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl rounded-full bg-[#080908]/75 backdrop-blur-xl border border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 h-14 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-xl font-semibold tracking-tight text-white flex items-center gap-2">
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
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#84cc16]/35 hover:border-[#84cc16]/70 bg-[#84cc16]/10 hover:bg-[#84cc16]/20 text-[#a3e635] font-semibold text-xs tracking-wide transition-all"
        >
          <Download size={14} /> Resume
        </a>

      </div>
    </header>
  );
}