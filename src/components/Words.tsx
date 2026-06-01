"use client";

import { motion } from "framer-motion";
import { Feather, Quote } from "lucide-react";

const Words = () => {
  return (
    <section id="words" className="py-40 px-6 relative border-t border-white/5 overflow-hidden bg-[#2b1228]">
      {/* Dusty Pink & Mauve Atmosphere */}
      <div className="absolute top-[10%] right-[-5%] w-[50vw] h-[50vw] bg-[#d49db8]/8 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] bg-[#d7bfdc]/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-24"
        >
          {/* Header */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="font-mono text-xs tracking-[0.4em] text-[#d49db8] uppercase font-semibold">
              07 / WORDS
            </span>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">
              Published Works
            </h2>
            <p className="text-[#d7bfdc] text-base max-w-sm font-light leading-relaxed font-serif italic">
              Explorations in storytelling, creative writing and expression beyond the keyboard.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Poetry Column — Editorial Layout */}
            <div className="lg:w-7/12 space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-[#4a1020]/40 flex items-center justify-center border border-[#d49db8]/20 shrink-0 mt-1">
                  <Feather className="text-[#d49db8]" size={24} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight mb-2">
                    Published Poet
                  </h3>
                  <span className="text-xs font-mono text-[#d49db8]/60 tracking-[0.3em] uppercase">
                    LITERARY ANTHOLOGIES
                  </span>
                </div>
              </div>

              {/* Verbatim Description */}
              <div className="text-[#d7bfdc] text-lg md:text-xl font-light leading-relaxed space-y-6 font-serif pl-0 lg:pl-22">
                <p>
                  Published poetry in collaborative anthology publications.
                </p>
                <p>
                  Explored storytelling, creative writing and expression beyond technology.
                </p>
                <p className="text-white font-medium italic text-xl md:text-2xl border-l-4 border-[#d49db8]/30 pl-6 mt-8">
                  A reminder that creativity and analytical thinking can coexist.
                </p>
              </div>
            </div>

            {/* Atmospheric Quote Panel */}
            <div className="lg:w-5/12 w-full relative">
              {/* Abstract gradient background */}
              <div className="absolute inset-0 rounded-none bg-gradient-to-b from-[#4a1020]/20 to-[#120716]/40" />
              <div className="absolute top-[20%] right-[20%] w-32 h-32 rounded-full bg-[#d49db8]/10 blur-[40px]" />

              <div className="relative z-10 border-l-4 border-[#d49db8]/40 p-12 min-h-[350px] flex flex-col justify-center">
                <Quote className="text-[#d49db8]/20 w-16 h-16 mb-8" />
                
                <p className="text-white font-serif italic text-2xl md:text-3xl leading-tight mb-8">
                  "Analytical lines solve technical challenges; poetic lines explore human complexity. They are two halves of the same curious mind."
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <span className="w-8 h-px bg-[#d49db8]/50" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#c2b6cb]/60 uppercase">
                    EDITORIAL NOTE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Words;
