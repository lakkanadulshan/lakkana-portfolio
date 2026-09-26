import React from 'react';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="mb-14">
        <span className="text-[#84cc16] font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold">
          // 04. What's Next
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="mt-4 text-neutral-400 font-mono text-sm sm:text-base max-w-xl">
          I am actively seeking software engineering internship opportunities. Whether you have a question, an opportunity, or just want to connect, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-[#84cc16]/40 transition-colors">
            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#a3e635]">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Email Address</p>
              <a href="mailto:jldweerarathne@gmail.com" className="text-white font-medium hover:text-[#a3e635] transition-colors">
                jldweerarathne@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#111111] border border-neutral-800/80 hover:border-[#84cc16]/40 transition-colors">
            <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#a3e635]">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Location</p>
              <p className="text-white font-medium">Sri Lanka</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111111] border border-neutral-800/80">
            <h3 className="text-white font-bold text-lg mb-2">Connect Online</h3>
            <p className="text-neutral-400 text-sm font-mono mb-5">
              Explore my technical repositories and professional profile:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/lakkanadulshan"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 hover:border-[#84cc16]/40 text-xs font-mono font-medium transition-all"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 hover:border-[#84cc16]/40 text-xs font-mono font-medium transition-all"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#111111] border border-neutral-800/80 space-y-5">
          <div>
            <label className="block text-xs font-mono text-neutral-400 mb-2">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#84cc16] text-white placeholder-neutral-600 text-sm font-mono outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-neutral-400 mb-2">Email Address</label>
            <input
              type="email"
              required
              placeholder="e.g. john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#84cc16] text-white placeholder-neutral-600 text-sm font-mono outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-neutral-400 mb-2">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 focus:border-[#84cc16] text-white placeholder-neutral-600 text-sm font-mono outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-[#65a30d] hover:bg-[#84cc16] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(101,163,13,0.45)] hover:shadow-[0_0_35px_rgba(132,204,22,0.7)] cursor-pointer"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>

      {/* Clean Footer */}
      <footer className="mt-28 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
        <p>© {new Date().getFullYear()} Lakkana Dulshan. All rights reserved.</p>
        {/* <p className="flex items-center gap-1.5">
          Built with React & Tailwind CSS
        </p> */}
      </footer>
    </section>
  );
}