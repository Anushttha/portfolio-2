"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Project from "./Project";

const projects = [
  {
    title: "Aazmaao",
    category: "Virtual Try-On",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    year: "2025",
    color: "#c6ff00" // Acid Lime
  },
  {
    title: "Physics Wallah",
    category: "LMS Architecture",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    year: "2025",
    color: "#00f0ff" // Cyan
  },
  {
    title: "Shopify Ultra",
    category: "E-Commerce",
    src: "https://images.unsplash.com/photo-1481487484168-9b930d55208d?q=80&w=2670&auto=format&fit=crop",
    year: "2024",
    color: "#ff0055" // Neon Pink
  },
  {
    title: "Neural Net",
    category: "R&D / AI",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    year: "2024",
    color: "#7000ff" // Violet
  }
];

export default function Gallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} id="work" className="relative mt-[20vh] bg-[#080808]">
      
      {/* Editorial Header */}
      <div className="container mx-auto px-4 mb-20 md:mb-32 flex flex-col items-center text-center">
         <span className="font-space text-[#ccff00] text-sm tracking-[0.4em] uppercase mb-4 animate-pulse">
            Selected Works
         </span>
         <h2 className="font-syne text-6xl md:text-9xl font-bold text-white opacity-90">
            FEATURED <br/> <span className="text-white/20 italic">CASES</span>
         </h2>
      </div>

      {/* The Stack Loop */}
      <div className="flex flex-col gap-0 pb-[50vh]"> {/* Padding bottom ensures last card is scrollable */}
        {projects.map((project, i) => {
          // Calculate scale: The further down, the smaller it starts
          const targetScale = 1 - ( (projects.length - i) * 0.05 );
          
          return (
            <Project 
                key={i} 
                {...project} 
                i={i} 
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
            />
          );
        })}
      </div>

    </section>
  );
}