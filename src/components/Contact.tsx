"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import GlowButton from "@/components/ui/GlowButton";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-[#0a0a0a] text-white py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 text-lg mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <a href="mailto:singhhaaastha@gmail.com">
            <GlowButton variant="primary" icon={<Mail size={18} />}>
              Say Hello
            </GlowButton>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/astha-singh-a6128a228" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GlowButton variant="primary" icon={<Linkedin size={18} />} className="bg-[linear-gradient(90deg,#0ea5e9,#2563eb)] shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]">
              LinkedIn
            </GlowButton>
          </a>
          
          <div className="flex gap-4 ml-0 md:ml-4">
            <a 
              href="https://github.com/AsthaS822" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:text-purple-400 transition-all duration-300 border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Astha Singh. Built with Next.js, Tailwind & Framer Motion.</p>
        </footer>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
