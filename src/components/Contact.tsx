"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-40 relative border-t border-white/5 overflow-hidden bg-[#120716]">
      {/* Blackberry & Orchid Glow Atmosphere */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[#5b2148]/15 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] bg-[#d49db8]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center space-y-16">
        <span className="font-mono text-xs tracking-[0.4em] text-[#d49db8] uppercase font-semibold">
          08 / DIALOGUE
        </span>

        {/* Cinematic Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none">
          LET'S BUILD <br className="hidden sm:block" /> SOMETHING <br className="hidden sm:block" /> MEANINGFUL
        </h2>

        {/* Wording Pillars */}
        <div className="flex justify-center gap-6 md:gap-10 text-xs sm:text-sm font-mono tracking-[0.3em] text-[#d49db8] uppercase font-semibold">
          <span>Technology</span>
          <span className="text-white/10">•</span>
          <span>Ideas</span>
          <span className="text-white/10">•</span>
          <span>Data</span>
          <span className="text-white/10">•</span>
          <span>Stories</span>
        </div>

        {/* Verbatim Subtext */}
        <p className="text-[#d7bfdc] text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light font-serif">
          I'm always open to opportunities that challenge me to learn, create and solve interesting problems.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <a href="mailto:singhhaaastha@gmail.com" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#d49db8] text-[#120716] font-bold hover:bg-white transition-all duration-300 shadow-[0_10px_40px_rgba(212,157,184,0.2)]">
            <Mail size={18} />
            Say Hello
          </a>
          
          <a 
            href="https://www.linkedin.com/in/astha-singh-a6128a228" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/15 text-white/90 hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          
          <a 
            href="https://github.com/AsthaS822" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border border-white/15 text-white/90 hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-md"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 text-[#c2b6cb]/30 text-xs font-mono tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} Astha Singh.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
