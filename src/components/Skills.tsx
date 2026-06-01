"use client";

import { motion } from "framer-motion";
import { Terminal, LineChart, Cpu, Globe } from "lucide-react";

const capabilities = [
  {
    category: "BUILD",
    title: "Software Engineering & Architecture",
    description: "Building resilient applications, structuring clean codebases, optimizing database systems, and automating workflows.",
    icon: <Terminal className="text-[#f4eff5]" size={28} />,
    skills: ["Python", "Java", "JavaScript", "SQL"],
    bullets: ["Building applications", "Automation", "Problem solving", "Backend fundamentals"]
  },
  {
    category: "ANALYZE",
    title: "Data Analytics & Storytelling",
    description: "Modeling data relationships, engineering analytical features, and designing executive business intelligence systems.",
    icon: <LineChart className="text-[#f4eff5]" size={28} />,
    skills: ["Power BI", "Pandas", "NumPy", "Data Visualization"],
    bullets: ["Business Intelligence", "Analytics", "Data Storytelling"]
  },
  {
    category: "AI",
    title: "Intelligent Systems & Integrations",
    description: "Orchestrating large language models, fine-tuning structured system prompts, and designing contextual prompt pipelines.",
    icon: <Cpu className="text-[#f4eff5]" size={28} />,
    skills: ["LLM APIs", "Prompt Engineering", "RAG Concepts", "AI Integrations", "Generative AI"],
    bullets: ["Context retrieval", "System instructions", "Automation concepts"]
  },
  {
    category: "WEB",
    title: "Modern Web Engineering",
    description: "Deploying high-performance client architectures, integrating backend engines, and designing scalable REST protocols.",
    icon: <Globe className="text-[#f4eff5]" size={28} />,
    skills: ["React", "Next.js", "Supabase", "PostgreSQL", "REST APIs"],
    bullets: ["Full-Stack interfaces", "State persistence", "Secured pipelines"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-40 px-6 relative border-t border-white/5 bg-[#120716]">
      {/* Subtle Atmosphere */}
      <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-[#24112d]/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto">
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
              03 / SKILLS
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter">
              Technical Competencies
            </h2>
          </div>

          {/* Premium Grid Layout - Preserved for Scannability */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                className="group relative p-10 rounded-[2rem] bg-[#24112d]/20 border border-white/5 hover:border-[#d49db8]/30 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                {/* Internal Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5b2148]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="space-y-8">
                    {/* Top Row: Category & Icon */}
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-[#d49db8] font-bold uppercase py-2">
                        {cap.category}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-[#4a1020]/40 flex items-center justify-center border border-white/10 group-hover:bg-[#4a1020]/80 group-hover:scale-110 transition-all duration-500">
                        {cap.icon}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-serif font-bold text-white tracking-tight leading-snug group-hover:text-[#d7bfdc] transition-colors duration-300">
                        {cap.title}
                      </h3>
                      <p className="text-[#c2b6cb] text-base md:text-lg font-light leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    {/* Premium Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cap.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs md:text-sm font-sans px-4 py-2 rounded-full bg-[#120716] border border-white/10 text-white font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sub-Bullets / Spheres */}
                  <div className="mt-12 pt-6 border-t border-white/5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#c2b6cb]/50 uppercase block mb-4">
                      Core Applications:
                    </span>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {cap.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-sm text-[#d7bfdc] font-light flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d49db8]/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
