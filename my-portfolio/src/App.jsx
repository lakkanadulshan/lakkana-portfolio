import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certification';
import Contact from './components/Contact';

export default function App() {
  return (
<div className="min-h-screen w-full bg-[#0a0a0a] text-neutral-100 selection:bg-[#84cc16]/30 selection:text-[#a3e635]">      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}