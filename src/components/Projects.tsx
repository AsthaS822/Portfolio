"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, BarChart3, Code2, FileSearch } from "lucide-react";

const featuredProject = {
  title: "Retail Sales Analysis Dashboard",
  description: "A comprehensive Business Intelligence dashboard built to analyze global retail performance across countries, cities, regions, and product categories.",
  insights: ["Sales trends", "Profit distribution", "Regional performance", "Yearly growth", "Category-wise analysis", "India vs Global sales comparison"],
  pythonAnalysis: ["Data cleaning and preprocessing", "Profit margin calculation", "Trend analysis", "Sales visualization", "Regional insights"],
  tools: ["Power BI", "Python (Pandas, NumPy, Matplotlib)"],
  skills: ["Data Analysis", "Data Visualization", "Business Intelligence", "Dashboard Design"],
  github: "https://github.com/AsthaS822/Retail-_Sales_Report_PROJECT",
  icon: <BarChart3 className="text-white w-12 h-12 mb-6" />
};

const otherProjects = [
  {
    title: "GitGrade",
    description: "AI tool that analyzes GitHub repositories and gives insights like code quality, summary and improvement suggestions",
    tech: ["JavaScript", "GitHub API", "OpenRouter AI"],
    github: "https://github.com/AsthaS822/GitGrade",
    live: "https://gitgrade-project-h2kc.vercel.app/",
    icon: <Code2 className="text-white w-8 h-8 mb-4" />
  },
  {
    title: "AI Resume Analyzer",
    description: "A simple ATS style resume checker that reads PDF resumes and gives AI based feedback",
    tech: ["JavaScript", "Puter.js"],
    github: "https://github.com/AsthaS822",
    live: null,
    icon: <FileSearch className="text-white w-8 h-8 mb-4" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase mb-12 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            04. Selected Work
          </h2>

          {/* Featured Project */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              Featured BI System
            </h3>
            
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden group shadow-lg">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-purple-500/20 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  {featuredProject.icon}
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    {featuredProject.title}
                  </h4>
                  <p className="text-white/90 text-xl leading-relaxed mb-8 font-medium">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tools.map((tool, i) => (
                      <span key={i} className="px-4 py-1.5 text-sm font-semibold rounded-full bg-white/10 text-white border border-white/20 shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={featuredProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-md"
                  >
                    <Github size={18} />
                    View Repository
                  </a>
                </div>

                <div className="flex-1 space-y-8">
                  <div>
                    <h5 className="text-white font-bold text-lg mb-4 border-b border-white/20 pb-2">Key Insights Provided</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 text-base">
                      {featuredProject.insights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-lg mb-4 border-b border-white/20 pb-2">Python Data Pipeline</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 text-base">
                      {featuredProject.pythonAnalysis.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, i) => (
              <div key={i} className="glass p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-colors group flex flex-col h-full shadow-lg bg-black/40 hover:bg-black/60">
                {project.icon}
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-white/90 mb-8 text-lg leading-relaxed flex-grow font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-4 py-1.5 text-sm font-semibold rounded-md bg-white/10 text-white border border-white/20 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 justify-end border-t border-white/10 pt-6 mt-auto">
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
