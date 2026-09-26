import React from "react";
import { Server, Layout, Cloud, CheckCircle2 } from "lucide-react";

export default function About() {
const highlights = [
  {
    icon: <Server className="text-[#a3e635]" size={22} />,
    title: "Java & Spring Boot",
    desc: "Building scalable backend services with Java, Spring Boot, REST APIs, JPA, MySQL, and microservice architecture.",
  },
  {
    icon: <Layout className="text-[#a3e635]" size={22} />,
    title: "Full-Stack Development",
    desc: "Developing modern web applications with the MERN stack, Angular, React, and Tailwind CSS.",
  },
  {
    icon: <Cloud className="text-[#a3e635]" size={22} />,
    title: "Cloud & DevOps",
    desc: "Hands-on experience with AWS, Linux, Git, and CI/CD, with a growing focus on cloud native development.",
  },
  {
    icon: <CheckCircle2 className="text-[#a3e635]" size={22} />,
    title: "Software Engineering",
    desc: "Applying OOP, SOLID principles, layered architecture, clean code, and maintainable design across projects.",
  },
];

  return (
    <section
      id="about"
      className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a]"
    >
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-start justify-between">
        {/* Left Side: Summary */}
        <div className="lg:w-1/2">
          <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
            // 01. About Me
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-6 tracking-tight leading-[1.15]">
            Engineering reliable backends with a clean, scalable, end-to-end approach.
          </h2>

          <p className="text-neutral-400 font-mono text-sm sm:text-base leading-relaxed mb-5">
            I’m an undergraduate software developer focused on building
            scalable, reliable, and maintainable systems. I specialize in Java
            and Spring Boot backend development, with practical experience in
            Angular and React.{" "}
          </p>

          <p className="text-neutral-400 font-mono text-sm sm:text-base leading-relaxed">
            Passionate about clean architecture, cloud-native technologies, and
            performance optimization, I strive to turn complex ideas into
            production ready software.{" "}
          </p>
        </div>

        {/* Right Side: Key Focus Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-[#84cc16]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(132,204,22,0.08)] group"
            >
              <div className="mb-4 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 w-fit group-hover:border-[#84cc16]/30 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#a3e635] transition-colors">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-mono leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
