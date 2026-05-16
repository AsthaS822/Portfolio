"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "MLH Global Hack Week",
    subtitle: "Prompt Engineering Quest",
  },
  {
    title: "Oracle AI Foundations Associate",
    subtitle: "Certification",
  },
  {
    title: "AICTE Internship",
    subtitle: "MS-AI",
  },
  {
    title: "SAWIT.AI",
    subtitle: "RAG Chatbot Project",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase mb-20 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] text-center">
            05. Certifications & Achievements
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] -translate-x-1/2" />

            <div className="space-y-12">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} pl-16 md:pl-0`}>
                    <div className="glass p-8 rounded-3xl border border-white/10 group-hover:border-purple-500/50 transition-all group-hover:bg-[#0a0a0a] w-full md:w-[85%] shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-[#050505]">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-white/80 text-base tracking-wide font-medium">
                        {cert.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-purple-500/50 bg-[#050505] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.3)] z-10 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                    <Award className="text-purple-400 group-hover:text-cyan-400 transition-colors" size={20} />
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
