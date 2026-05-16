"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Web",
    skills: ["React", "Next.js", "APIs"],
  },
  {
    title: "Backend",
    skills: ["Supabase", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI",
    skills: ["LLM APIs", "Prompt Engineering", "AI integration"],
  },
  {
    title: "Data",
    skills: ["Pandas", "NumPy", "Power BI", "SQL"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Currently Learning",
    skills: ["LangChain", "RAG systems", "AI automation", "better API usage"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            03. SKILLS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-3xl border-2 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all group flex flex-col bg-[#050505]"
              >
                <h3 className="text-lg font-bold tracking-widest uppercase text-white mb-6 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 text-sm font-bold rounded-lg bg-[#0a0a0a] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] text-white hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
