import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2026",
      credentialUrl: "https://aws.amazon.com",
      skills: ["Cloud Concepts", "Security", "Architecture"],
    },
    {
      title: "Spring Boot Microservices & Cloud",
      issuer: "Udemy / Online Platform",
      date: "2026",
      credentialUrl: "https://udemy.com",
      skills: ["Spring Cloud", "Microservices", "REST APIs"],
    },
    {
      title: "Full-Stack Web Development",
      issuer: "SkillHub / Educational Course",
      date: "2026",
      skills: ["React", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Java SE Professional Foundations",
      issuer: "Oracle / Online Learning",
      date: "2025",
      skills: ["Java OOP", "Streams", "Data Structures"],
    },
    {
      title: "Multi-Cloud Networking Associate",
      issuer: "Aviatrix Certified Engineer",
      date: "2025",
      skills: ["Cloud Networking", "Security", "VPC Architecture"],
    },
    {
      title: "Software Quality Assurance Fundamentals",
      issuer: "Professional Testing Academy",
      date: "2026",
      skills: ["Manual Testing", "Test Logging", "Test Cases"],
    },
    {
      title: "Git, GitHub & Version Control",
      issuer: "Developer Training",
      date: "2025",
      skills: ["Branching Strategies", "Git Rebase", "CI/CD Workflows"],
    },
  ];

  return (
    <section id="certifications" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="mb-14">
        <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          // 04. Continuous Learning
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Certifications & Credentials
        </h2>
        <p className="mt-4 text-neutral-400 font-mono text-sm sm:text-base max-w-xl">
          Verified technical certifications and courses validating core competencies across cloud, enterprise backend, and software quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-6 rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-[#84cc16]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(132,204,22,0.08)] group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[#a3e635] group-hover:border-[#84cc16]/30 transition-colors">
                  <Award size={20} />
                </div>
                <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#a3e635] transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-neutral-400 mb-4 flex items-center gap-1.5">
                <CheckCircle size={13} className="text-[#84cc16]" /> {cert.issuer}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80 mb-3">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono text-neutral-400 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a3e635] hover:underline pt-2"
                >
                  Verify Credential <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}