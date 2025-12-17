"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectHero({ title, category, image }: { title: string, category: string, image: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Subtle zoom on scroll

  return (
    <div ref={container} className="relative h-[80vh] md:h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#080808]">
      
      {/* Background Parallax Image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
         <img src={image} alt="hero" className="w-full h-full object-cover" />
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-20 text-center flex flex-col items-center gap-4 mix-blend-difference">
         <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-space text-[#c6ff00] tracking-[0.4em] uppercase text-xs md:text-sm border border-[#c6ff00] px-4 py-2 rounded-full backdrop-blur-md"
         >
            Case Study
         </motion.span>
         
         <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne text-[15vw] leading-[0.8] font-bold text-white uppercase tracking-tighter"
         >
            {title}
         </motion.h1>

         <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-space text-white/80 text-lg tracking-widest uppercase mt-4"
         >
            {category}
         </motion.p>
      </div>
    </div>
  );
}