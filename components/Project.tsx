"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  category: string;
  src: string;
  year: string;
  color: string; // Dynamic accent color for each card
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export default function Project({ title, category, src, year, color, i, progress, range, targetScale }: ProjectProps) {
  const container = useRef(null);
  
  // Physics: Card Scale shrinks as it goes up to create the "Stacking" effect
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
            scale, 
            top: `calc(-5vh + ${i * 25}px)` // Offset each card slightly
        }} 
        className="relative flex flex-col w-[90vw] md:w-[70vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden border border-white/10 origin-top shadow-2xl"
      >
        
        {/* CARD BACKGROUND (Glass + Noise) */}
        <div className="absolute inset-0 bg-[#0a0a0a] z-0">
           {/* Dynamic Gradient Blob behind text */}
           <div 
             className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-700"
             style={{ background: color }}
           />
           <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row p-8 md:p-12 gap-8">
            
            {/* LEFT: Typography & Details */}
            <div className="flex flex-col justify-between w-full md:w-[40%] h-full">
                
                {/* Header Info */}
                <div className="flex items-center gap-4">
                     <span className="font-space text-xs font-bold tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md">
                        {year}
                     </span>
                     <span className="font-space text-xs font-bold tracking-widest uppercase text-white/50">
                        // {category}
                     </span>
                </div>

                {/* THE MASSIVE TITLE */}
                <div className="relative group cursor-pointer">
                    <h2 
                        className="font-syne text-5xl md:text-7xl font-bold uppercase leading-[0.85] text-transparent transition-all duration-500"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
                    >
                        {title}
                    </h2>
                    {/* Hover Fill Effect */}
                    <h2 
                        className="absolute top-0 left-0 font-syne text-5xl md:text-7xl font-bold uppercase leading-[0.85] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                        style={{ textShadow: `0 0 30px ${color}` }} // Glow on hover
                    >
                        {title}
                    </h2>
                    
                    <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <span className="font-space text-sm tracking-widest uppercase" style={{ color: color }}>View Case Study</span>
                        <ArrowUpRight size={16} color={color} />
                    </div>
                </div>

                {/* Bottom Tech Stack List */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {["React", "Next.js", "WebGL"].map((tech) => (
                        <span key={tech} className="font-space text-[10px] uppercase tracking-wider text-white/40">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* RIGHT: The Image Window */}
            <div className="relative w-full md:w-[60%] h-full rounded-2xl overflow-hidden border border-white/5 group">
                 {/* Image */}
                 <motion.div className="w-full h-full">
                    <motion.img 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                        src={src} 
                        alt={title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                 </motion.div>
                 
                 {/* Overlay Gradient on Image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>

        </div>
      </motion.div>
    </div>
  );
}