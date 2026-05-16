"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";

const LearningHub = () => {
  return (
    <section id="learning-hub" className="py-24 px-4 relative bg-white/[0.02] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-cyan-500/20 transition-colors duration-700" />
          
          <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-8">
            <BookOpen className="text-cyan-400" size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Learning Notes Hub</h2>
          
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A structured personal learning system where I document AI, Python, and Data Analytics concepts for continuous learning and revision.
          </p>

          <a 
            href="https://github.com/AsthaS822" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
          >
            View Learning Hub
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningHub;
