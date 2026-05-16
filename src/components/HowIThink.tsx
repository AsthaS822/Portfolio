"use client";

import { motion } from "framer-motion";
import { Wrench, Puzzle, Layers, Search, Database, Cpu } from "lucide-react";

const HowIThink = () => {
  const approaches = [
    {
      icon: <Wrench className="text-cyan-400" size={28} />,
      title: "I learn by building",
      description: "I understand things better when I actually build them",
    },
    {
      icon: <Puzzle className="text-cyan-400" size={28} />,
      title: "I break problems into small parts",
      description: "I try to simplify things instead of overcomplicating",
    },
    {
      icon: <Layers className="text-cyan-400" size={28} />,
      title: "I connect web AI and data",
      description: "I like building things that actually work together",
    },
  ];

  const focusAreas = [
    {
      icon: <Search className="text-white/60" size={24} />,
      title: "Building useful applications",
    },
    {
      icon: <Database className="text-white/60" size={24} />,
      title: "Understanding real-world data",
    },
    {
      icon: <Cpu className="text-white/60" size={24} />,
      title: "Exploring AI + analytics systems",
    },
  ];

  return (
    <section id="how-i-think" className="py-24 px-4 relative bg-white/[0.02] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase mb-12 text-center drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            02. HOW I THINK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-medium text-white mb-8">My Approach</h3>
              <div className="flex flex-col gap-8">
                {approaches.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="mt-1 bg-white/5 p-3 rounded-2xl border border-white/10 shadow-lg">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/80 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium text-white mb-8">What I Focus On</h3>
              <div className="grid grid-cols-1 gap-4">
                {focusAreas.map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors border border-white/10 shadow-lg">
                    <div className="text-cyan-400">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowIThink;
