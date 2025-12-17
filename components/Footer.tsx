"use client";
import Magnetic from "./ui/Magnetic";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);
  const container = useRef(null);
  
  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]); // Reduced movement for better mobile stability

  // Clock Logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        timeZone: "Asia/Kolkata", 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Copy Functionality
  const copyEmail = () => {
    if (typeof navigator !== "undefined") {
        navigator.clipboard.writeText("hello@anushttha.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      ref={container}
      className="relative h-[100vh] min-h-[700px] md:h-[800px]" // Responsive Height
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 h-[100vh] min-h-[700px] md:h-[800px] w-full bg-[#050505] flex flex-col justify-between -z-10 overflow-hidden">
        
        {/* --- LAYER 1: AMBIENT BACKGROUND --- */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ 
                 backgroundImage: "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)", 
                 backgroundSize: "40px 40px" 
             }}
        ></div>
        {/* Colorful Glow Blobs */}
        <div className="absolute top-[-10%] left-[-10%] md:left-[20%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#7000ff] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] md:right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#c6ff00] rounded-full blur-[100px] md:blur-[150px] opacity-10 pointer-events-none"></div>


        {/* --- LAYER 2: MAIN INTERACTION AREA --- */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full px-4">
            
            {/* Moving Background Text */}
            <motion.div style={{ y }} className="absolute top-[10%] md:top-[15%] w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
                <h1 className="font-syne text-[20vw] font-bold text-white uppercase leading-none tracking-tighter">
                    Let's Build The Future — Let's Build The Future —
                </h1>
            </motion.div>

            {/* Subtitle */}
            <div className="flex flex-col items-center gap-2 mb-8 md:mb-12 z-20">
                <span className="font-space text-xs md:text-sm tracking-[0.3em] text-[#c6ff00] uppercase animate-pulse">
                    ● Open for Work
                </span>
                <h2 className="font-syne text-3xl md:text-5xl font-bold text-white text-center leading-tight">
                    Ready to start the <br/> next project?
                </h2>
            </div>
            
            {/* THE REACTOR BUTTON */}
            <Magnetic>
                <div 
                    onClick={copyEmail}
                    className="group relative w-48 h-48 md:w-72 md:h-72 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 active:scale-95"
                >
                    {/* Outer Rings (Spinning) */}
                    <div className="absolute inset-[-10px] md:inset-[-20px] rounded-full border border-[#c6ff00]/10 animate-[spin_8s_linear_infinite]"></div>
                    <div className="absolute inset-0 rounded-full border border-[#c6ff00]/30 animate-[spin_10s_linear_infinite] group-hover:border-[#c6ff00]/60 transition-colors"></div>
                    <div className="absolute inset-3 md:inset-4 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite_reverse]"></div>
                    
                    {/* The Core (Solid) */}
                    <div className="absolute inset-0 bg-[#c6ff00] rounded-full scale-[0.85] group-hover:scale-95 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(198,255,0,0.3)]">
                        
                        {/* Hover Ripple */}
                        <div className="absolute inset-0 bg-white/90 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>

                        <div className="relative z-10 flex flex-col items-center gap-1 md:gap-2 text-center p-4">
                             {copied ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center"
                                >
                                    <Check className="w-8 h-8 md:w-10 md:h-10 text-black mb-1" />
                                    <span className="font-space text-black font-bold text-sm md:text-lg uppercase tracking-widest">Email Copied</span>
                                </motion.div>
                             ) : (
                                <>
                                    <span className="font-syne text-black font-extrabold text-2xl md:text-4xl uppercase tracking-tighter leading-none group-hover:scale-110 transition-transform duration-300">
                                        Let's<br/>Talk
                                    </span>
                                    <span className="hidden md:flex font-space text-black/60 text-[10px] tracking-widest uppercase items-center gap-1 mt-1 group-hover:text-black transition-colors">
                                        Click to Copy <Copy size={10} />
                                    </span>
                                </>
                             )}
                        </div>
                    </div>
                </div>
            </Magnetic>
        </div>


        {/* --- LAYER 3: THE HUD BAR (Responsive) --- */}
        <div className="relative z-20 w-full px-6 md:px-12 pb-8 md:pb-12 pt-6 border-t border-white/5 bg-[#050505]/80 backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-0">
                
                {/* 1. Identity */}
                <div className="flex flex-col gap-3 md:gap-4 w-full md:w-auto">
                    <div className="flex items-center gap-3">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#c6ff00] rounded-full animate-pulse"></div>
                         </div>
                         <div className="flex flex-col">
                            <h3 className="font-syne text-xl md:text-2xl font-bold text-white uppercase leading-none">Anushttha</h3>
                            <span className="font-space text-[10px] text-white/40 tracking-widest uppercase">Engineer / Designer</span>
                         </div>
                    </div>
                    <div className="font-space text-[10px] md:text-xs text-white/30">
                        © 2025 ANUSHTTHA SRIVASTAVA.
                    </div>
                </div>

                {/* 2. Clock (Hidden on very small mobiles to save space) */}
                <div className="hidden sm:flex flex-col items-start md:items-center w-full md:w-auto">
                     <div className="font-space text-[10px] text-[#c6ff00] tracking-widest uppercase mb-1 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#c6ff00] rounded-full"></span> New Delhi, IN
                     </div>
                     <div className="font-syne text-3xl md:text-4xl font-bold text-white/20 tabular-nums">
                        {time}
                     </div>
                </div>

                {/* 3. Social Data Links (Full Width on Mobile) */}
                <div className="grid grid-cols-2 md:flex gap-2 w-full md:w-auto">
                    {["LinkedIn", "GitHub", "Twitter", "Instagram"].map((social) => (
                        <Magnetic key={social}>
                            <a href="#" className="group relative px-4 py-2 md:px-5 md:py-3 bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#c6ff00] transition-colors flex items-center justify-center md:justify-start">
                                <div className="absolute inset-0 bg-[#c6ff00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
                                <span className="relative z-10 font-space text-[10px] md:text-xs font-bold text-white group-hover:text-black uppercase tracking-wider flex items-center gap-2">
                                    {social} <ArrowUpRight size={12} className="md:w-[14px] md:h-[14px]" />
                                </span>
                            </a>
                        </Magnetic>
                    ))}
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}