"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "GitHub Copilot Prompt Engineering Quest",
    org: "MLH Global Hack Week",
    date: "2026",
    description: "Completed quest on Wilco. Practiced structured and chained prompting techniques and improved AI-assisted coding workflows.",
    links: [
      { label: "Certificate", url: "https://app.wilco.gg/certificate/6963b164c47bde1d8a58dfb6" }
    ]
  },
  {
    title: "Backend Reloaded Hackathon",
    org: "WeMakeDevs",
    date: "2025",
    description: "Built RouteWise, an intelligent batching and route optimization system using Motia."
  },
  {
    title: "MS-AI Internship",
    org: "AICTE",
    date: "2024",
    description: "Gained practical experience in AI technologies and their applications in real-world scenarios.",
    links: [
      { label: "Certificate", url: "https://drive.google.com/file/d/1jkB_4w9mbaz9-Ab2LVOW8bjve3V4bNjI/view?usp=drive_link" }
    ]
  },
  {
    title: "RAG Chatbot",
    org: "SAWIT.AI",
    date: "2024",
    description: "Built a Retrieval-Augmented Generation chatbot, enhancing information retrieval accuracy.",
    links: [
      { label: "Try Chatbot", url: "https://www.guvi.in/rag/d159de3d-2ec7-48aa-af2a-7cd76c786fef/" },
      { label: "Certificate", url: "https://www.guvi.in/share-certificate/d62a7g7971j7i688JM" }
    ]
  },
  {
    title: "Oracle AI Foundations Associate",
    org: "Oracle",
    date: "2025",
    description: "Certified associate in AI foundations, covering machine learning and deep learning concepts.",
    links: [
      { label: "Certificate", url: "https://drive.google.com/file/d/1eIZobSoU5GtI2MUpRsi78F6_03Anqx5s/view?usp=drive_link" }
    ]
  }
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" className="bg-[#0a0a0a] text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience & Certifications</h2>
      
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-800 -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-9px] md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] md:-translate-x-1/2 mt-1.5 z-10 hidden md:block" />

            {/* Content */}
            <div className="flex-1 md:w-1/2">
              <div className={`p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/30 transition-colors duration-300 ${
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              }`}>
                <span className="text-sm text-cyan-400 font-mono mb-2 block">{exp.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-purple-400 text-sm font-medium mb-3">{exp.org}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                
                {exp.links && (
                  <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    {exp.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={12} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Spacer for the other side */}
            <div className="flex-1 md:w-1/2 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
