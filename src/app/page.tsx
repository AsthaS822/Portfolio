import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIThink from "@/components/HowIThink";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Think from "@/components/Think";
import Certifications from "@/components/Certifications";
import Words from "@/components/Words";
import LearningHub from "@/components/LearningHub";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-blackberry text-[#f4eff5] selection:bg-orchid/20 selection:text-white overflow-hidden relative">
      {/* Cinematic Static & Mesh Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Spot 1: Deep Plum */}
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#2E1A2F]/10 blur-[130px] animate-aurora-1" />
        {/* Spot 2: Midnight Violet */}
        <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#1D0E2B]/15 blur-[150px] animate-aurora-2" />
        {/* Spot 3: Rosewood */}
        <div className="absolute top-[45%] left-[20%] w-[650px] h-[650px] rounded-full bg-[#3A1225]/8 blur-[120px] animate-aurora-3" />
        {/* Spot 4: Mulberry */}
        <div className="absolute top-[70%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#4C2C50]/10 blur-[140px] animate-aurora-1" />
        {/* Spot 5: Burgundy */}
        <div className="absolute bottom-[5%] left-[-5%] w-[550px] h-[550px] rounded-full bg-[#5E0B29]/6 blur-[110px] animate-aurora-2" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <HowIThink />
        <Skills />
        <Projects />
        <Certifications />
        <Think />
        <Words />
        <LearningHub />
        <Contact />
      </div>
    </main>
  );
}
