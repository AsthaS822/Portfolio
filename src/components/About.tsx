"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase mb-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            01. JOURNEY
          </h2>
          
          <div className="text-xl md:text-2xl font-medium leading-relaxed text-white">
            I started with Java and web development basics then moved into Python for data analysis and slowly got into AI systems and dashboards. 
            <br /><br />
            I mostly learn by building things not just reading.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
