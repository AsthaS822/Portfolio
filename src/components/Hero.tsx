"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax elements for oversized text
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-[120vh] w-full flex items-center overflow-hidden"
      style={{
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`
      } as React.CSSProperties}
    >
      {/* Deep Plum & Magenta Atmosphere */}
      <div className="absolute inset-0 bg-[#2b1228] -z-20" />
      <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-[#5b2148]/30 rounded-full blur-[150px] -z-10 animate-aurora-1" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[70vw] h-[70vw] bg-[#bf7ac7]/10 rounded-full blur-[120px] -z-10 animate-aurora-2" />
      <div className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] bg-[#4a1020]/20 rounded-full blur-[100px] -z-10 animate-aurora-3" />

      {/* Mouse Tracking Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(191,122,199,0.08),transparent_70%)] pointer-events-none -z-10" />

      {/* Massive Editorial Background Typography */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] -left-[5%] text-[20vw] font-serif font-bold leading-none text-white/5 whitespace-nowrap select-none pointer-events-none tracking-tighter"
      >
        ASTHA
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[45%] right-[5%] text-[20vw] font-serif font-bold leading-none text-white/5 whitespace-nowrap select-none pointer-events-none tracking-tighter"
      >
        SINGH
      </motion.div>

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-24 z-10 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-8 h-full pt-32 pb-24">
          
          {/* Left Column: Asymmetric Intro */}
          <div className="w-full lg:w-7/12 flex flex-col justify-end pt-12 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-wrap gap-4 text-[10px] md:text-xs font-mono tracking-[0.4em] text-orchid uppercase font-semibold mb-12"
            >
              <span>BUILD</span>
              <span className="text-muted-foreground/30">•</span>
              <span>ANALYZE</span>
              <span className="text-muted-foreground/30">•</span>
              <span>CREATE</span>
              <span className="text-muted-foreground/30">•</span>
              <span>LEARN</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-serif font-bold tracking-tighter text-white leading-[0.85] mb-8"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f4eff5] to-[#d7bfdc] pb-2">Astha</span>
              <span className="block ml-[5%] lg:ml-[10%] text-transparent bg-clip-text bg-gradient-to-r from-[#d7bfdc] to-[#bf7ac7] pb-4 pr-4">Singh.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-lg font-sans font-medium text-orchid/90 tracking-wide ml-[5%] lg:ml-[15%]"
            >
              <span>Software Engineer</span>
              <span className="text-muted-foreground/45">•</span>
              <span>AI Builder</span>
              <span className="text-muted-foreground/45">•</span>
              <span>Data Analyst</span>
            </motion.div>
          </div>

          {/* Right Column: Descriptions & Actions overlapping text organically */}
          <div className="w-full lg:w-4/12 flex flex-col space-y-12 lg:mb-12 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-[10px] md:text-xs font-mono tracking-widest text-[#d7bfdc] uppercase border-l-2 border-orchid/30 pl-6 py-2"
            >
              MCA Grad | Software Engineering | AI Applications | Data Analytics
            </motion.div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-sm md:text-base text-muted-foreground/90 font-light leading-relaxed pr-8"
              >
                From dashboards and AI applications to strategy competitions and creative branding projects, I learn by building.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="#projects" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-orchid text-blackberry font-bold hover:bg-[#d7bfdc] hover:text-[#2b1228] transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_10px_40px_rgba(191,122,199,0.25)]">
                  Explore work
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </Link>
              <a 
                href="https://github.com/AsthaS822" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 rounded-full border border-orchid/20 text-white/90 hover:bg-[#5b2148]/30 hover:border-orchid/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 font-medium backdrop-blur-md"
              >
                <Github size={18} />
                GitHub
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
