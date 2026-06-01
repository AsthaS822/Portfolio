"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Globe, Database, BarChart2, Cpu, Link2 } from "lucide-react";
import { useRef } from "react";

const journeyPhases = [
  {
    phase: "BEGIN",
    title: "Java Fundamentals",
    description: "Built strong foundations in logical problem solving, data structures and core backend concepts.",
    icon: <Coffee className="text-orchid" size={24} />
  },
  {
    phase: "02",
    title: "Web Development",
    description: "Explored frontend architecture, dynamic interfaces, styling and modern web application frameworks.",
    icon: <Globe className="text-orchid" size={24} />
  },
  {
    phase: "03",
    title: "Data Analytics",
    description: "Learned statistics, scripting with Python, data modeling and mathematical libraries like Pandas and NumPy.",
    icon: <Database className="text-orchid" size={24} />
  },
  {
    phase: "04",
    title: "Dashboards & Business Intelligence",
    description: "Designed executive dashboards in Power BI, turning complex datasets into clear, interactive stories for business users.",
    icon: <BarChart2 className="text-orchid" size={24} />
  },
  {
    phase: "05",
    title: "AI Systems & RAG",
    description: "Delved into prompt engineering, LLM API orchestrations, context grounding and vector search strategies.",
    icon: <Cpu className="text-orchid" size={24} />
  },
  {
    phase: "06",
    title: "Building Connected Experiences",
    description: "Connecting AI nodes, robust databases, user interfaces and business strategy to build holistic products.",
    icon: <Link2 className="text-orchid" size={24} />
  }
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yWord1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yWord2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const yWord3 = useTransform(scrollYProgress, [0, 1], [400, -100]);

  return (
    <section id="about" ref={containerRef} className="py-40 relative border-t border-orchid/10 overflow-hidden">
      {/* Dark Orchid & Violet Atmosphere */}
      <div className="absolute inset-0 bg-[#3a163a] -z-20 opacity-30" />
      <div className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] bg-[#6b2335]/15 rounded-full blur-[130px] -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[#2a163d]/40 rounded-full blur-[150px] -z-10" />

      {/* Massive Background Watermarks */}
      <motion.div 
        style={{ y: yWord1 }}
        className="absolute top-[10%] left-[5%] text-[15vw] font-serif font-black leading-none text-white/5 select-none pointer-events-none tracking-tighter"
      >
        LEARN
      </motion.div>
      <motion.div 
        style={{ y: yWord2 }}
        className="absolute top-[40%] right-[5%] text-[15vw] font-serif font-black leading-none text-white/5 select-none pointer-events-none tracking-tighter"
      >
        BUILD
      </motion.div>
      <motion.div 
        style={{ y: yWord3 }}
        className="absolute top-[70%] left-[10%] text-[15vw] font-serif font-black leading-none text-white/5 select-none pointer-events-none tracking-tighter"
      >
        EXPLORE
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Intro Block - Asymmetric Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-40"
        >
          <div className="space-y-4 mb-12">
            <span className="font-mono text-xs tracking-[0.4em] text-orchid uppercase font-semibold block border-l-2 border-orchid pl-4">
              01 / JOURNEY
            </span>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-[0.9]">
              The Journey
            </h2>
          </div>
          
          <div className="text-[#d7bfdc] text-lg md:text-2xl leading-relaxed font-light space-y-8 font-serif">
            <p>
              My journey began with Java and web development fundamentals.
            </p>
            <p>
              Curiosity pushed me toward Python, data analytics, dashboards and business intelligence.
            </p>
            <p>
              From there I explored AI systems, prompt engineering, retrieval augmented generation (RAG), APIs and automation.
            </p>
            <p>
              Alongside technology, I have also participated in business strategy, branding, management and creative challenges that strengthened my analytical and communication skills.
            </p>
            <p className="text-[#f4eff5] font-medium italic mt-12 text-2xl md:text-3xl border-l-4 border-orchid/30 pl-6">
              "Today I enjoy building projects that combine technology, data, creativity and problem solving."
            </p>
          </div>
        </motion.div>

        {/* Winding Cinematic Path */}
        <div className="relative w-full max-w-5xl mx-auto mt-32">
          {/* Subtle connecting spline line */}
          <svg className="absolute left-0 top-0 w-full h-full pointer-events-none -z-10 hidden md:block" preserveAspectRatio="none">
             <path d="M 50,0 C 50,200 800,200 800,400 C 800,600 50,600 50,800 C 50,1000 800,1000 800,1200 C 800,1400 400,1500 400,1600" fill="none" stroke="rgba(215, 191, 220, 0.1)" strokeWidth="2" strokeDasharray="8 8" />
          </svg>

          <div className="space-y-32 md:space-y-48">
            {journeyPhases.map((phase, idx) => {
              // Alternate alignment left/right/center for winding path
              const alignClass = idx % 3 === 0 
                ? "md:mr-auto md:ml-0" 
                : idx % 3 === 1 
                  ? "md:ml-auto md:mr-0" 
                  : "md:mx-auto";
                  
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-[60%] flex gap-6 md:gap-10 items-start group ${alignClass} relative`}
                >
                  {/* Floating Number Watermark */}
                  <div className="absolute -top-12 -left-8 text-[8rem] font-black font-mono text-white/[0.02] -z-10 group-hover:text-orchid/[0.05] transition-colors duration-500 pointer-events-none">
                    {phase.phase === "BEGIN" ? "01" : phase.phase}
                  </div>

                  {/* Icon Node */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#120716]/80 border border-orchid/20 group-hover:border-orchid shadow-[0_0_20px_rgba(43,18,40,0.5)] group-hover:shadow-[0_0_30px_rgba(191,122,199,0.3)] transition-all duration-500 shrink-0 backdrop-blur-md">
                    {phase.icon}
                  </div>

                  {/* Content Layout */}
                  <div className="pt-2 flex-grow space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-widest text-orchid/80 uppercase font-bold border border-orchid/20 px-3 py-1 rounded-full bg-orchid/5">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-[#d7bfdc] transition-colors duration-300 tracking-tight">
                      {phase.title}
                    </h3>
                    <p className="text-[#c2b6cb] text-base md:text-lg font-light leading-relaxed max-w-lg">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
