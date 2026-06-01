"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Compass, FileText, ChevronRight, TrendingUp, Lightbulb } from "lucide-react";

const Think = () => {
  return (
    <section id="think" className="py-40 px-6 relative border-t border-white/5 bg-[#120716] overflow-hidden">
      {/* Magazine Case Study Atmosphere */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#4a1020]/20 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#5b2148]/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-32"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-[0.4em] text-[#d49db8] uppercase font-semibold">
                06 / STRATEGY
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter leading-none">
                Strategy, Business <br className="hidden md:block" />& Problem Solving
              </h2>
            </div>
            <p className="text-[#c2b6cb] text-sm md:text-base max-w-sm font-light leading-relaxed font-serif italic border-l border-white/20 pl-6">
              "Analytical reviews, branding exercises, and commercial strategy challenges exploring customer dynamics and operations."
            </p>
          </div>

          <div className="space-y-40">
            {/* 1. National Management Olympiad (NMO) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-12 -top-12 text-[12rem] font-serif font-black text-white/[0.02] -z-10 pointer-events-none select-none tracking-tighter leading-none">
                01
              </div>
              
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Details Column */}
                <div className="flex-grow space-y-8 lg:w-7/12">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#d49db8] font-bold uppercase">
                        COMPETITIVE JOURNEY // CASE ANALYSIS
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1]">
                      National Management Olympiad (Quarter Finalist)
                    </h3>
                  </div>

                  {/* Verbatim Description */}
                  <div className="text-[#d7bfdc] text-lg font-light leading-relaxed space-y-6 font-serif">
                    <p>
                      Reached the Quarter Finals of a national business strategy competition focused on management, technology, operations, and business problem solving.
                    </p>
                    <p>
                      Developed a technology-led expansion strategy for SELCO India, exploring digital transformation, analytics, CRM systems, and scalable operations.
                    </p>
                    <p>
                      The experience strengthened my strategic thinking and ability to approach challenges from both technical and business perspectives.
                    </p>
                  </div>

                  {/* Bullet Explorer */}
                  <div className="pt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#c2b6cb]/50 uppercase block mb-6">
                      Explored Strategy Spheres:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Business expansion strategy",
                        "IT transformation",
                        "CRM and ERP systems",
                        "AI and analytics integration",
                        "Rural technology adoption",
                        "Product diversification",
                        "Digital operations"
                      ].map((item, i) => (
                        <div key={i} className="text-xs text-[#f4eff5] bg-[#24112d]/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-8">
                    <a
                      href="https://www.managementolympiad.org/bcs-3245-17/NMO-12233-S5-astha-singh-.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-sm font-bold text-[#d49db8] hover:text-white transition-colors duration-300 group/link border-b border-[#d49db8]/30 pb-1"
                    >
                      <FileText size={16} />
                      View Submission Case Study
                      <ChevronRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
                    </a>
                  </div>
                </div>

                  {/* Removed generated reflection column */}
              </div>
            </motion.div>

            {/* 2. Brands From The Tank */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -right-12 -top-12 text-[12rem] font-serif font-black text-white/[0.02] -z-10 pointer-events-none select-none tracking-tighter leading-none">
                02
              </div>

              <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                <div className="lg:w-7/12 space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#d49db8] font-bold uppercase">
                        REBRANDING CHALLENGE // CREATIVE DIRECTION
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1]">
                      Brands From The Tank <br/> Rebranding Challenge
                    </h3>
                    <p className="font-mono text-xs text-[#c2b6cb]/60 uppercase tracking-widest border-l-2 border-[#d49db8]/50 pl-3">
                      MasterCamp × Schbang
                    </p>
                  </div>

                  {/* Verbatim Description */}
                  <div className="text-[#d7bfdc] text-lg font-light leading-relaxed space-y-6 font-serif">
                    <p>
                      Selected Honey Twigs and developed a complete rebranding concept inspired by changing consumer expectations and modern visual storytelling.
                    </p>
                    <p>
                      Built a moodboard covering: Brand Identity, Audience Positioning, Visual Direction, Communication Style, and Creative Storytelling.
                    </p>
                    <p>
                      The challenge required balancing creativity with business goals while preserving the original brand's essence.
                    </p>
                  </div>

                  {/* Bullets */}
                  <div className="pt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#c2b6cb]/50 uppercase block mb-6">
                      Skills explored:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Brand Strategy",
                        "Design Thinking",
                        "Visual Storytelling",
                        "Consumer Perception",
                        "Creative Direction"
                      ].map((item, i) => (
                        <div key={i} className="text-xs text-[#f4eff5] bg-[#24112d]/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-8 flex flex-wrap gap-6">
                    <a
                      href="https://canva.link/v9pucbp844bu25y"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3 rounded-none border border-[#d49db8] text-[#d49db8] text-xs font-bold hover:bg-[#d49db8] hover:text-[#120716] transition-all duration-300 tracking-wider uppercase"
                    >
                      View Moodboard
                    </a>
                    <a
                      href="https://cdn.mastersunion.org/assets/imgV2/Astha_Singh.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3 rounded-none border border-white/20 text-white/90 text-xs font-bold hover:bg-white/10 transition-all duration-300 tracking-wider uppercase"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Removed generated takeaway panel */}
              </div>
            </motion.div>

            {/* 3. PepsiCo Sales Star Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-12 -top-12 text-[12rem] font-serif font-black text-white/[0.02] -z-10 pointer-events-none select-none tracking-tighter leading-none">
                03
              </div>

              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-7/12 space-y-8">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#d49db8] font-bold uppercase">
                        BUSINESS AND COMMERCIAL THINKING
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1]">
                      PepsiCo Sales Star Challenge
                    </h3>
                  </div>

                  {/* Verbatim Description */}
                  <div className="text-[#d7bfdc] text-lg font-light leading-relaxed space-y-6 font-serif">
                    <p>
                      Explored how consumer behavior, product positioning, pricing, and communication influence business growth.
                    </p>
                    <p>
                      Analyzed customer decision-making patterns and studied how large consumer brands create demand, strengthen market presence, and build customer loyalty.
                    </p>
                  </div>

                  {/* Bullets */}
                  <div className="pt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#c2b6cb]/50 uppercase block mb-6">
                      Skills explored:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Consumer Psychology",
                        "Sales Strategy",
                        "Market Analysis",
                        "Brand Positioning",
                        "Business Communication"
                      ].map((item, i) => (
                        <div key={i} className="text-xs text-[#f4eff5] bg-[#24112d]/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-8">
                    <a
                      href="https://drive.google.com/file/d/1S3TstRlMsG1QqPPRS3a95xEgFkPlugk3/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3 rounded-none border border-white/20 text-white/90 text-xs font-bold hover:bg-white/10 transition-all duration-300 tracking-wider uppercase"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Removed generated takeaway panel */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Think;
