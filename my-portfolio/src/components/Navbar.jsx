import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Portfolio<span className="text-sky-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-md shadow-sky-500/20"
          >
            <FileText size={15} /> Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-sky-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-sky-500 text-slate-950"
          >
            <FileText size={15} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
}