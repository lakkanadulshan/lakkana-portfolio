import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import springIntroImage from '../assets/spring_intro.jpg';
import awsCloudPractitionerImage from '../assets/aws_cloud_practitioner.jpg';
import sqaImage from '../assets/SQA.jpg';
import agileProjectManagementImage from '../assets/Agile Project Management.jpg';
import ccnpImage from '../assets/CCNP_Enterprise-_Core_Networking.jpg';
import javaOopImage from '../assets/java oop.jpg';

export default function Certifications() {
  const certifications = [
    {
      title: "Introduction to Java Spring Framework 101",
      issuer: "Simplilearn SkillUp",
      image: springIntroImage,
      skills: ["Spring Boot", "Java", "Backend"],
    },
    {
      title: "AWS SimuLearn: Cloud Practitioner",
      issuer: "Amazon Web Services",
      image: awsCloudPractitionerImage,
      skills: ["Cloud Concepts", "Security", "Architecture"],
    },
    {
      title: "Software Quality Assurance Fundamentals",
      issuer: "University of Moratuwa",
      image: sqaImage,
      skills: ["Manual Testing", "Test Cases", "QA"],
    },
    {
      title: "Foundations of Project Management",
      issuer: "University of Moratuwa",
      image: agileProjectManagementImage,
      skills: ["Agile", "Scrum", "Management"],
    },
    {
      title: "CCNP Enterprise Core Networking",
      issuer: "Cisco Networking Academy",
      image: ccnpImage,
      skills: ["Networking", "Routing", "Security"],
    },
    {
      title: "Java Object Oriented Programming",
      issuer: "Online Learning",
      image: javaOopImage,
      skills: ["Java OOP", "Data Structures", "Algorithms"],
    }
  ];

  return (
    <section id="certifications" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="mb-14">
        <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          // 04. Continuous Learning
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Certifications 
        </h2>
        <p className="mt-4 text-neutral-400 font-mono text-sm sm:text-base max-w-xl">
          Verified technical certifications and courses validating core competencies across cloud, enterprise backend, and software quality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl overflow-hidden bg-[#111111] border border-neutral-800/80 hover:border-[#84cc16]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(132,204,22,0.08)] group"
          >
            {/* Image Container with Hover Zoom Effect */}
            <div className="relative w-full h-48 overflow-hidden bg-neutral-900 border-b border-neutral-800/80">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#a3e635] transition-colors leading-snug">
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
          </div>
        ))}
      </div>
    </section>
  );
}