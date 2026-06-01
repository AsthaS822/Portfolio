"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const LearningHub = () => {
  return (
    <section id="learning-hub" className="py-40 px-6 relative border-t border-white/5 bg-[#120716] overflow-hidden">
      {/* Subtle atmosphere */}
      <div className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] bg-[#5b2148]/15 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-20 items-center"
        >
          {/* Abstract Visual Side */}
          <div className="lg:w-5/12 w-full relative min-h-[300px]">
            <div className="absolute inset-0 rounded-[2rem] bg-[#1c0c1f] border border-white/10 overflow-hidden">
              <div className="absolute top-[20%] left-[15%] w-[50%] h-[50%] rounded-full bg-[#5b2148]/30 blur-[50px]" />
              <div className="absolute bottom-[15%] right-[10%] w-[35%] h-[35%] rounded-full bg-[#d49db8]/10 blur-[40px]" />
              <div className="absolute top-6 left-6 w-12 h-px bg-white/10" />
              <div className="absolute top-6 left-6 w-px h-12 bg-white/10" />
              <div className="absolute bottom-6 right-6 w-12 h-px bg-white/10" />
              <div className="absolute bottom-6 right-6 w-px h-12 bg-white/10" />
            </div>
            <div className="relative z-10 flex items-center justify-center h-full min-h-[300px]">
              <div className="w-24 h-24 rounded-full bg-[#4a1020]/40 flex items-center justify-center border border-[#d49db8]/20">
                <BookOpen className="text-[#d49db8]" size={36} />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-7/12 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-[0.4em] text-[#d49db8] font-bold uppercase">
                CENTRALIZED KNOWLEDGE BASE
              </span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tighter">
                KNOWLEDGE SYSTEM
              </h2>
            </div>
            
            <p className="text-[#d7bfdc] text-lg md:text-xl leading-relaxed font-light max-w-2xl">
              An evolving personal knowledge repository documenting concepts from AI, Python, Data Analytics, SQL, Power BI, APIs and Software Engineering.
            </p>

            <a 
              href="https://github.com/AsthaS822" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#d49db8] text-[#120716] font-bold hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(212,157,184,0.2)]"
            >
              View Learning Hub
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningHub;
