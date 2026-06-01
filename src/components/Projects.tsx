"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Award, FileSearch, Code2, BarChart3, Bot } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: "retail-sales",
    title: "Retail Sales Analysis Dashboard",
    category: "DATA SYSTEMS // BUSINESS INTELLIGENCE",
    description: "A comprehensive Business Intelligence dashboard built to analyze global retail performance across countries, cities, regions and product categories.",
    technologies: ["Power BI", "Python (Pandas, NumPy)", "Matplotlib", "Data Visualization", "Business Intelligence", "Dashboard Design"],
    demoLink: null,
    certLink: null,
    githubLink: "https://github.com/AsthaS822/Retail-_Sales_Report_PROJECT",
    accentColor: "#6b2335",
    icon: <BarChart3 className="text-[#d49db8]" size={32} />,
  },
  {
    id: "gitgrade",
    title: "GitGrade",
    category: "AI APPLICATIONS // CONTEXT EVALUATION",
    description: "AI tool that analyzes GitHub repositories and gives insights like code quality, summary and improvement suggestions.",
    technologies: ["JavaScript", "GitHub API", "OpenRouter AI", "API Integrations", "Developer Tools"],
    demoLink: "https://gitgrade-project-h2kc.vercel.app/",
    certLink: null,
    githubLink: "https://github.com/AsthaS822/GitGrade",
    accentColor: "#5b2148",
    icon: <Code2 className="text-[#d49db8]" size={32} />,
  },
  {
    id: "rag-assistant",
    title: "Generative AI RAG Assistant",
    category: "AI ENGINEERING // LEARNING PROGRAM",
    description: "Built and tested a Retrieval Augmented Generation (RAG) chatbot as part of a Generative AI learning program. The workflow provided a pre-configured framework where I selected the knowledge source, configured the chatbot around a chosen topic, experimented with prompts and evaluated how retrieval-based responses were generated.",
    technologies: ["Retrieval Augmented Generation (RAG)", "Prompt Engineering", "Knowledge Retrieval", "Context Grounding", "Generative AI Concepts"],
    demoLink: "https://www.guvi.in/rag/d159de3d-2ec7-48aa-af2a-7cd76c786fef/",
    certLink: "https://www.guvi.in/share-certificate/44uBb1M575DN271964",
    githubLink: null,
    accentColor: "#4a1020",
    icon: <Bot className="text-[#d49db8]" size={32} />,
  },
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    category: "WEB DEVELOPMENT // AUTOMATED SCREENING",
    description: "A simple ATS style resume checker that reads PDF resumes and gives AI based feedback.",
    technologies: ["JavaScript", "Puter.js", "File API", "ATS Algorithms", "UX Design"],
    demoLink: null,
    certLink: null,
    githubLink: "https://github.com/AsthaS822",
    accentColor: "#24112d",
    icon: <FileSearch className="text-[#d49db8]" size={32} />,
  },
];

const RetailVisual = () => (
  <div className="w-full h-full min-h-[400px] rounded-[2rem] relative overflow-hidden group bg-[#120716] border border-white/10 group-hover:border-white/20 transition-colors duration-500">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5" />
    
    {/* Abstract background glows */}
    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full blur-[60px] opacity-30 bg-[#6b2335]" />
    <div className="absolute bottom-[10%] left-[10%] w-[35%] h-[35%] rounded-full blur-[50px] opacity-20 bg-[#d49db8]" />
    
    {/* Abstract Data Viz Elements - NO TEXT OR METRICS */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      {/* Floating Bar Charts */}
      <div className="flex items-end gap-4 h-40 mb-8 opacity-40 group-hover:opacity-60 transition-opacity duration-700 px-4">
        <div className="w-12 h-1/3 bg-gradient-to-t from-[#6b2335] to-[#d49db8] rounded-t-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700" />
        <div className="w-12 h-2/3 bg-gradient-to-t from-[#6b2335] to-[#d49db8] rounded-t-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-75" />
        <div className="w-12 h-1/2 bg-gradient-to-t from-[#6b2335] to-[#d49db8] rounded-t-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 delay-100" />
        <div className="w-12 h-full bg-gradient-to-t from-[#6b2335] to-[#d49db8] rounded-t-sm transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 delay-150" />
        <div className="w-12 h-4/5 bg-gradient-to-t from-[#6b2335] to-[#d49db8] rounded-t-sm transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 delay-200" />
      </div>

      {/* Floating Widgets / Cards */}
      <div className="absolute top-10 right-10 w-40 h-24 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md opacity-50 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 flex flex-col justify-center gap-3 p-4">
         <div className="w-full h-1 bg-white/20 rounded-full" />
         <div className="w-1/2 h-1 bg-white/10 rounded-full" />
      </div>
      <div className="absolute top-40 right-24 w-48 h-32 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md opacity-40 transform rotate-[3deg] group-hover:rotate-0 transition-transform duration-700 flex flex-col justify-center gap-4 p-5">
         <div className="w-full h-1 bg-white/10 rounded-full" />
         <div className="w-3/4 h-1 bg-white/10 rounded-full" />
         <div className="w-2/3 h-1 bg-white/10 rounded-full" />
      </div>
      
      {/* Line chart abstraction */}
      <svg className="absolute top-[40%] left-0 w-full h-32 opacity-30" viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M0,40 Q20,20 40,30 T80,10 T100,20" fill="none" stroke="#d49db8" strokeWidth="1" />
        <path d="M0,45 Q20,35 40,40 T80,20 T100,25" fill="none" stroke="#6b2335" strokeWidth="0.5" />
      </svg>
    </div>

    {/* Center icon */}
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
        <BarChart3 className="text-[#d49db8]" size={32} />
      </div>
    </div>
  </div>
);

/* Abstract visual block — no fake content, just pure shapes & gradients */
const AbstractVisual = ({ accentColor, icon, index }: { accentColor: string; icon: React.ReactNode; index: number }) => (
  <div className="w-full h-full min-h-[320px] rounded-[2rem] relative overflow-hidden group">
    {/* Layered gradient background */}
    <div className="absolute inset-0 bg-[#120716]" />
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5" />
    
    {/* Abstract floating shapes */}
    <div 
      className="absolute top-[15%] left-[10%] w-[45%] h-[45%] rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"
      style={{ background: accentColor }}
    />
    <div 
      className="absolute bottom-[10%] right-[15%] w-[35%] h-[35%] rounded-full blur-[50px] opacity-25 group-hover:opacity-45 transition-opacity duration-700"
      style={{ background: accentColor }}
    />
    <div 
      className="absolute top-[50%] left-[40%] w-[20%] h-[20%] rounded-full blur-[30px] opacity-20"
      style={{ background: "#d49db8" }}
    />

    {/* Geometric accent lines */}
    <div className="absolute top-8 left-8 w-16 h-px bg-white/10" />
    <div className="absolute top-8 left-8 w-px h-16 bg-white/10" />
    <div className="absolute bottom-8 right-8 w-16 h-px bg-white/10" />
    <div className="absolute bottom-8 right-8 w-px h-16 bg-white/10" />
    
    {/* Center icon */}
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
        {icon}
      </div>
    </div>

    {/* Subtle border */}
    <div className="absolute inset-0 rounded-[2rem] border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
  </div>
);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="projects" ref={containerRef} className="py-40 relative bg-[#1c0c1f] overflow-hidden">
      {/* Rose Purple & Mulberry Atmosphere */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-[#6b2335]/20 blur-[150px] -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vh] bg-[#4a1020]/30 blur-[180px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header section */}
        <div className="space-y-6 text-center lg:text-left mb-24">
          <span className="font-mono text-xs tracking-[0.4em] text-[#d49db8] uppercase font-semibold">
            04 / BUILD
          </span>
          <h2 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tighter">
            Selected Work
          </h2>
        </div>

        {/* 1. Flagship Cinematic Project (Retail Sales) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-32"
        >
          {/* Abstract Data Visual */}
          <div className="w-full lg:w-1/2 shrink-0 h-[400px]">
            <RetailVisual />
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#d49db8] font-bold uppercase block border-b border-white/10 pb-4">
              {projects[0].category}
            </span>
            
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter leading-[1.1]">
              {projects[0].title}
            </h3>

            <p className="text-[#c2b6cb] text-lg font-light leading-relaxed">
              {projects[0].description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {projects[0].technologies.map((t, tIdx) => (
                <span key={tIdx} className="text-[10px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[#c2b6cb]">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              {projects[0].githubLink && (
                <a href={projects[0].githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d49db8] text-black text-sm font-bold hover:bg-white transition-all">
                  <Github size={16} /> View Repository
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Remaining Projects — Editorial Layouts, Shorter Footprint */}
        <div className="space-y-32">
          {projects.slice(1).map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Abstract Visual */}
              <div className="w-full lg:w-5/12 shrink-0">
                <AbstractVisual accentColor={proj.accentColor} icon={proj.icon} index={idx + 1} />
              </div>

              {/* Text Layout */}
              <div className="w-full lg:w-7/12 space-y-6">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#d49db8] font-bold uppercase block border-b border-white/10 pb-4">
                  {proj.category}
                </span>
                
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tighter">
                  {proj.title}
                </h3>

                <p className="text-[#c2b6cb] text-base font-light leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {proj.technologies.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-3 py-1 rounded bg-white/5 border border-white/10 text-[#c2b6cb]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-8">
                  {proj.demoLink && (
                    <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d49db8] text-black text-xs font-bold hover:bg-white transition-all">
                      <ExternalLink size={14} /> View Demo
                    </a>
                  )}
                  {proj.certLink && (
                    <a href={proj.certLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-all">
                      <Award size={14} /> View Certificate
                    </a>
                  )}
                  {proj.githubLink && (
                    <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-all">
                      <Github size={14} /> Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
