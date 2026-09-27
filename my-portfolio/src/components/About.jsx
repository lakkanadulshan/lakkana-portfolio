import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Mail, 
  Phone, 
  Languages, 
  Code 
} from 'lucide-react';
import aboutImg from '../assets/my-photo.jpeg';

export default function About() {
  const educationHistory = [
    {
      year: "2024 – Present",
      degree: "Bachelor of Information and Communication Technology (BICT)",
      institution: "University of Colombo",
      details: "Focusing on Enterprise Software Architecture, Java Backend Systems, Microservices, and Distributed Computing.",
      current: true,
    },
    {
      year: "2022",
      degree: "G.C.E. Advanced Level",
      institution: "Technology Stream",
      details: "Qualified for university entrance with dedicated focus in Engineering  Technology, Science for Technology, and ICT fundamentals.",
      current: false,
    },
    {
      year: "2019",
      degree: "G.C.E. Ordinary Level",
      institution: "Secondary Education",
      details: "Completed secondary education with top distinctions across academic and technical disciplines.",
      current: false,
    },
  ];

  const quickDetails = [
    {
      label: "DEGREE",
      value: "BICT (Hons), University of Colombo",
      icon: <GraduationCap size={15} className="text-[#a3e635]" />,
    },
    {
      label: "SPECIALIZATION",
      value: "Enterprise Java & Full-Stack Engineering",
      icon: <Code size={15} className="text-[#a3e635]" />,
    },
    {
      label: "LOCATION",
      value: "Colombo, Sri Lanka",
      icon: <MapPin size={15} className="text-[#a3e635]" />,
    },
    {
      label: "AVAILABILITY",
      value: "Open for Software Engineering Internship",
      highlight: true,
      icon: <Briefcase size={15} className="text-[#a3e635]" />,
    },
    {
      label: "EMAIL",
      value: "jldweerarathnen@gmail.com",
      icon: <Mail size={15} className="text-[#a3e635]" />,
    },
    {
      label: "PHONE",
      value: "+94 76 527 2796",
      icon: <Phone size={15} className="text-[#a3e635]" />,
    },
    {
      label: "LANGUAGES",
      value: "English (Professional) | Sinhala (Native)",
      icon: <Languages size={15} className="text-[#a3e635]" />,
    },
  ];

  return (
    <section id="about" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a]">
      
      {/* Section Sub-heading */}
      <div className="mb-12">
        <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          // 01. Overview
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
          Who Am I
        </h2>
      </div>

      {/* Main "Who Am I" Profile Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-neutral-800/80 mb-16 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          
          {/* Profile Photo Frame */}
          <div className="w-56 h-64 sm:w-64 sm:h-72 shrink-0 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-lg">
            <img
              src={aboutImg}
              alt="Lakkana Dulshan Weerarathne"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>

          {/* Details & Bio */}
          <div className="flex-1 text-left w-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Lakkana Dulshan Weerarathne
            </h3>

            <p className="text-neutral-300 font-mono text-sm sm:text-base leading-relaxed mb-4">
              Hi, I'm Lakkana Dulshan Weerarathne. I am a Bachelor of Information and Communication Technology (BICT) undergraduate at the{" "}
              <span className="text-[#a3e635] font-semibold">University of Colombo</span>, with a strong passion for{" "}
              <span className="text-white font-semibold">Software Engineering</span> and enterprise-grade backend architecture.
            </p>

            <p className="text-neutral-400 font-mono text-sm sm:text-base leading-relaxed mb-6">
              I actively immerse myself in architecting resilient, scalable systems, specializing primarily in{" "}
              <span className="text-white font-medium">Java, Spring Boot, and Microservices</span>. Alongside my primary focus on the Java ecosystem, I maintain versatile hands-on experience building dynamic web applications with the{" "}
              <span className="text-white font-medium">MERN stack</span>, as well as delivering functional solutions using{" "}
              <span className="text-white font-medium">WordPress</span>.
            </p>

            {/* Quick Specs Grid (Degree, Location, Phone, Email, Availability) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-800/80 font-mono">
              {quickDetails.map((item, qIdx) => (
                <div key={qIdx} className="flex flex-col space-y-1">
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    {item.icon}
                    {item.label}
                  </span>
                  <span className={`text-xs sm:text-sm font-medium ${
                    item.highlight ? 'text-[#a3e635] font-semibold' : 'text-neutral-200'
                  }`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Academic Journey Timeline */}
      <div className="mt-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[#a3e635]">
            <GraduationCap size={22} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Academic Journey
          </h3>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationHistory.map((item, index) => (
            <div
              key={index}
              className={`p-7 rounded-2xl bg-[#111111] border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                item.current
                  ? "border-[#84cc16]/50 shadow-[0_0_25px_rgba(132,204,22,0.1)]"
                  : "border-neutral-800/80 hover:border-neutral-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                      item.current
                        ? "bg-[#84cc16]/20 text-[#a3e635] border border-[#84cc16]/40"
                        : "bg-neutral-900 text-neutral-400 border border-neutral-800"
                    }`}
                  >
                    <Calendar size={12} />
                    {item.year}
                  </span>
                  {item.current && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#84cc16] bg-[#84cc16]/10 px-2.5 py-0.5 rounded-md border border-[#84cc16]/20">
                      Current
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white mb-1.5 leading-snug">
                  {item.degree}
                </h4>
                <p className="text-sm font-mono text-[#a3e635] mb-4">
                  {item.institution}
                </p>

                <p className="text-xs sm:text-sm font-mono text-neutral-400 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}