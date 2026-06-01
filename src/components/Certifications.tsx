"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Azure AI Fundamentals",
    description: "Explored AI workloads, machine learning concepts, computer vision, NLP and responsible AI principles on Microsoft Azure.",
    link: "https://drive.google.com/file/d/1AckdscuvB7J7HrWG5XTI-9hRcHl6Nj6b/view?usp=drive_link",
  },
  {
    title: "Oracle OCI Generative AI Professional",
    description: "Developed understanding of Generative AI ecosystems, LLM applications, embeddings, vector search and enterprise AI solutions.",
    link: "https://drive.google.com/file/d/1eIZobSoU5GtI2MUpRsi78F6_03Anqx5s/view?usp=drive_link",
  },
  {
    title: "Generative AI Fundamentals",
    description: "Hands-on exposure to AI workflows, prompting techniques and practical applications of modern language models.",
    link: "https://www.guvi.in/share-certificate/44uBb1M575DN271964",
  },
  {
    title: "Prompt Engineering",
    description: "Explored prompt engineering workflows and techniques for interacting with generative AI models.",
    link: "https://drive.google.com/file/d/1LzZMb024DGv227rbpAyw9lwyeItEdffw/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section id="learn" className="py-40 px-6 relative border-t border-white/5 bg-[#120716]">
      {/* Subtle Atmosphere for fast scanning */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#24112d]/30 rounded-full blur-[150px] -z-10" />

      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="space-y-4 text-center">
            <span className="font-mono text-xs tracking-[0.4em] text-[#d49db8] uppercase font-semibold">
              05 / LEARN
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tighter">
              Certifications & Achievements
            </h2>
            <p className="text-[#c2b6cb] text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
              Curated frameworks and enterprise technologies validated through industry certifications.
            </p>
          </div>

          {/* Elegant Scannable Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-[1.5rem] bg-[#24112d]/20 border border-white/10 hover:border-[#d49db8]/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm"
              >
                <div className="space-y-6">
                  {/* Icon & Award badge */}
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-[#4a1020]/30 flex items-center justify-center border border-white/5 group-hover:bg-[#4a1020]/60 transition-colors duration-300">
                      <Award className="text-[#f4eff5]" size={24} />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#c2b6cb]/50 uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight leading-snug group-hover:text-[#d7bfdc] transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-[#c2b6cb] text-sm font-light leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 flex justify-between items-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#d49db8] hover:text-white transition-colors duration-300 group/link uppercase tracking-wider"
                  >
                    View Certificate
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                    VERIFIED
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
