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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
          Portfolio<span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]"></span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#a3e635] transition-colors"
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
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#65a30d] hover:bg-[#84cc16] text-white font-semibold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(101,163,13,0.35)]"
        >
          <Download size={14} /> Resume
        </a>

      </div>
    </header>
  );
}