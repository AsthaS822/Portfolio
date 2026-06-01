"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Think", href: "#think" },
  { name: "Learn", href: "#learn" },
  { name: "Words", href: "#words" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-[#06020c]/70 backdrop-blur-xl border-b border-orchid/10 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-1.5">
          <span className="font-serif italic text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orchid via-mauve to-magenta">
            Astha
          </span>
          <span className="font-sans text-xs tracking-[0.2em] font-medium text-muted-foreground uppercase group-hover:text-orchid transition-colors duration-300">
            .dev
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-orchid transition-colors duration-300 relative py-1 group/item"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-orchid transition-all duration-300 group-hover/item:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-muted-foreground hover:text-orchid transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0518]/95 backdrop-blur-2xl border-b border-orchid/15 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-orchid transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
