"use client";
import { motion } from "framer-motion";
import Scene from "./3d/Scene";

// Animation variants for the text reveal
const slideUp = {
  initial: { y: "100%" },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] }
  }),
  closed: { y: "100%" }
};

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
      {/* The 3D Background */}
      <Scene />

      {/* The Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-difference text-[#e1e1e1]">
        
        {/* Name: Staggered reveal */}
        <div className="overflow-hidden">
            <motion.h1 
                custom={1} 
                variants={slideUp} 
                initial="initial" 
                animate="open" 
                className="font-syne font-extrabold text-[12vw] leading-[0.85] tracking-tighter uppercase"
            >
                Anushttha
            </motion.h1>
        </div>
        
        <div className="overflow-hidden">
            <motion.h1 
                custom={2} 
                variants={slideUp} 
                initial="initial" 
                animate="open" 
                className="font-syne font-extrabold text-[12vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e1e1e1] to-[#666]"
            >
                Srivastava
            </motion.h1>
        </div>

        {/* Role / Tagline */}
        <div className="mt-8 overflow-hidden">
            <motion.p 
                custom={3} 
                variants={slideUp} 
                initial="initial" 
                animate="open"
                className="font-space text-lg md:text-xl tracking-[0.2em] uppercase opacity-80"
            >
                Engineer <span className="text-[#c6ff00] mx-2">•</span> Creative Dev
            </motion.p>
        </div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c6ff00] to-transparent"></div>
        <span className="font-space text-xs tracking-widest uppercase opacity-50">Scroll</span>
      </motion.div>

    </section>
  );
}