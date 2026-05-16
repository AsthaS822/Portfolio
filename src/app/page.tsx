import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIThink from "@/components/HowIThink";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import LearningHub from "@/components/LearningHub";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <HowIThink />
      <Skills />
      <Projects />
      <Certifications />
      <LearningHub />
      <Contact />
    </main>
  );
}
