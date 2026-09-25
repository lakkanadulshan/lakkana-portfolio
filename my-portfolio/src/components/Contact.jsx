import React from 'react';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      <div className="mb-12">
        <span className="text-sky-400 font-mono text-sm tracking-wider uppercase font-semibold">
          04. What's Next
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
          Get In Touch
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl text-base">
          Main nayi internship opportunities aur collaborations ke liye open hoon. Chahe koi question ho ya bas connect karna chahein, message zaroor karein!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Email Address</p>
              <a href="mailto:your-email@example.com" className="text-white font-medium hover:text-sky-400 transition-colors">
                your-email@example.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
            <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Location</p>
              <p className="text-white font-medium">Sri Lanka</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-900/20 border border-slate-800">
            <h3 className="text-white font-semibold text-lg mb-2">Social Profiles</h3>
            <p className="text-slate-400 text-sm mb-4">
              Mera technical work aur activity yahan dekhein:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-all"
              >
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-sky-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Email Address</label>
            <input
              type="email"
              required
              placeholder="e.g. john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-sky-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-sky-500 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-500/10 cursor-pointer"
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>

      {/* Clean Footer */}
      <footer className="mt-24 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </section>
  );
}