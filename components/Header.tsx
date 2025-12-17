"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react"; // Added Code icon
import Magnetic from "./ui/Magnetic";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Labs", href: "#labs" }, // Renamed from Playground to Labs (more edgy)
  { name: "About", href: "#about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <>
      {/* THE HUD NAVBAR 
          Floats with a "tech" border and darker glass
      */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 md:px-0"
      >
        <div className="hud-panel rounded-2xl px-2 py-2 md:px-4 md:py-3 flex items-center justify-between">
          
          {/* LEFT: Identity (The Glitch Logic) */}
          <div className="flex items-center gap-4 pl-2">
            <Magnetic>
                <a href="#" className="group relative flex items-center gap-3">
                    {/* Tech Logo Icon */}
                    <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-md flex items-center justify-center group-hover:bg-[#ccff00] group-hover:border-[#ccff00] transition-colors duration-300">
                        <Code2 size={16} className="text-white group-hover:text-black transition-colors" />
                    </div>

                    <div className="flex flex-col leading-none">
                        <span className="font-syne font-bold text-sm text-white tracking-wider uppercase group-hover:text-[#ccff00] transition-colors">
                            Anushttha
                        </span>
                        <span className="font-space text-[9px] text-white/40 tracking-[0.2em] uppercase group-hover:text-white/80 transition-colors">
                            Full Stack
                        </span>
                    </div>
                </a>
            </Magnetic>
          </div>

          {/* CENTER: The "Bracket" Navigation 
              This is very editorial/high-fashion.
          */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative font-space text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest group"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {/* Left Bracket */}
                    <motion.span 
                        animate={{ opacity: hoveredLink === index ? 1 : 0, x: hoveredLink === index ? 0 : 5 }} 
                        className="text-[#ccff00] font-bold"
                    >
                        [
                    </motion.span>
                    
                    {link.name}
                    
                    {/* Right Bracket */}
                    <motion.span 
                        animate={{ opacity: hoveredLink === index ? 1 : 0, x: hoveredLink === index ? 0 : -5 }} 
                        className="text-[#ccff00] font-bold"
                    >
                        ]
                    </motion.span>
                  </span>
                </a>
              </Magnetic>
            ))}
          </div>

          {/* RIGHT: The Aggressive CTA */}
          <div className="flex items-center gap-2">
            
            <Magnetic>
                <a href="mailto:hello@anushttha.com" className="group relative overflow-hidden bg-[#ccff00] text-black px-6 py-2.5 rounded-xl font-space text-xs font-bold tracking-widest uppercase transition-transform active:scale-95 hidden md:flex items-center gap-2">
                    {/* Hover Shine Effect */}
                    <div className="absolute inset-0 bg-white/40 translate-y-[100%] skew-y-12 group-hover:translate-y-[-100%] transition-transform duration-500 ease-in-out" />
                    
                    <span className="relative z-10">Hire Me</span>
                    <ArrowUpRight size={14} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                </a>
            </Magnetic>

            {/* Mobile Toggle */}
            <div className="md:hidden p-2 bg-white/5 rounded-lg border border-white/10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu size={20} className="text-white" />
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU (Edgy Fullscreen) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#080808]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
             {/* Grid Background in Menu too */}
             <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

             <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white hover:text-[#ccff00]">
                <X size={32} />
             </button>
             
             {navLinks.map((link, i) => (
                <motion.a 
                    key={link.name}
                    href={link.href}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="font-syne text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 hover:to-[#ccff00] font-bold tracking-tighter uppercase"
                >
                    {link.name}
                </motion.a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}