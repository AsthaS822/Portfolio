"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span>
          available for opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
          Tech Explorer <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            AI, Web and Data Builder
          </span>
        </h1>

        <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          I build AI powered apps, dashboards and web apps using Python, Java, JavaScript and APIs while learning by building real projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Link href="#projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Explore work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a 
            href="https://github.com/AsthaS822" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white font-medium"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
