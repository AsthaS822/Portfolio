"use client";

import { motion } from "framer-motion";
import { Sparkles, Hammer, Cpu, LayoutGrid, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const principles = [
  {
    icon: <Hammer className="text-[#f4eff5]" size={28} />,
    title: "I learn by building.",
    desc: "Active creation and hands-on experimentation are the fastest paths to mastering complex technical architectures."
  },
  {
    icon: <LayoutGrid className="text-[#f4eff5]" size={28} />,
    title: "I break complex problems into smaller systems.",
    desc: "Isolating variables, decomposing features and modeling robust interactions makes large challenges elegant and manageable."
  },
  {
    icon: <Cpu className="text-[#f4eff5]" size={28} />,
    title: "I connect AI, data, design and technology.",
    desc: "Intelligent systems are most powerful when data engineering flows seamlessly into beautiful user experiences."
  },
  {
    icon: <Sparkles className="text-[#f4eff5]" size={28} />,
    title: "I focus on practical solutions over theoretical perfection.",
    desc: "I prioritize shipping reliable, maintainable code that solves immediate, tangible problems under real constraints."
  },
  {
    icon: <Eye className="text-[#f4eff5]" size={28} />,
    title: "I believe curiosity is a skill.",
    desc: "Continuous questioning and self-directed research keep me adaptive in a rapidly shifting technology ecosystem."
  }
];

const HowIThink = () => {
  return (
    <section id="how-i-think" className="py-40 px-6 relative overflow-hidden bg-[#2b1228]">
      {/* Magazine Cover Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-[#4a1020]/20 blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[80vh] bg-[#5b2148]/20 blur-[150px] -z-10" />

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Editorial Left Side Sticky Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
          >
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-[0.4em] text-[#d49db8] uppercase font-semibold block border-l-2 border-[#d49db8] pl-4">
                02 / THINK
              </span>
              <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter leading-none">
                How <br/> I Think
              </h2>
              <div className="w-24 h-1 bg-[#d49db8]/30 mt-8" />
            </div>
          </motion.div>

          {/* Right Side Stacked Editorial Articles */}
          <div className="lg:w-2/3 space-y-32">
            {principles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
              >
                {/* Massive overlapping number */}
                <div className="absolute -top-16 -left-8 md:-left-16 text-[10rem] md:text-[14rem] font-serif font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#d49db8]/[0.08] transition-colors duration-700 leading-none tracking-tighter z-0">
                  {idx + 1}
                </div>

                <div className="relative z-10 pl-4 md:pl-12 border-l border-white/10 group-hover:border-[#d49db8]/50 transition-colors duration-500 py-4">
                  <div className="w-16 h-16 rounded-full bg-[#4a1020] flex items-center justify-center mb-8 shadow-xl">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#d7bfdc] text-lg md:text-2xl font-light leading-relaxed max-w-2xl font-serif">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowIThink;
