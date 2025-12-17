"use client";
import Header from "@/components/Header"; // Reuse your HUD Header
import Footer from "@/components/Footer"; // Reuse your Reactor Footer
import ProjectHero from "@/components/work/detail/ProjectHero";
import ProjectBrief from "@/components/work/detail/ProjectBrief";
import NextCase from "@/components/work/detail/NextCase";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowUpRight } from "lucide-react";

// Mock Data (In a real app, fetch this based on params.slug)
const projectData = {
  title: "Aazmaao",
  category: "Virtual Try-On",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  overview: "Aazmaao redefines the e-commerce experience by integrating real-time augmented reality for virtual try-ons. We solved the problem of 'return anxiety' by allowing users to visualize products on themselves with 98% accuracy before purchasing.",
  roles: "UI/UX, Frontend Dev, 3D Integration",
  stack: "Next.js, Three.js, WebGL",
  year: "2025"
};

export default function ProjectDetail() {
  
  // Smooth Scroll Initialization
  useEffect( () => {
    (async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
    })()
  }, [])

  return (
    <main className="bg-[#080808] min-h-screen w-full">
      <Header />
      
      {/* 1. Hero Section */}
      <ProjectHero title={projectData.title} category={projectData.category} image={projectData.image} />

      {/* 2. The Brief */}
      <ProjectBrief 
        overview={projectData.overview} 
        roles={projectData.roles} 
        stack={projectData.stack} 
        year={projectData.year} 
      />

      {/* 3. The Visual Story (Process Section) */}
      <section className="py-20 px-4 md:px-20 flex flex-col gap-20">
         
         {/* Large Image Parallax */}
         <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl relative">
            <motion.img 
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 1.5 }}
                src="https://images.unsplash.com/photo-1481487484168-9b930d55208d?q=80&w=2670&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
         </div>

         {/* Content Block: The Challenge */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-4">
                <span className="text-[#c6ff00] font-space text-xs tracking-widest uppercase">[ The Challenge ]</span>
                <h3 className="text-white font-syne text-4xl font-bold">Latency in Real-time Rendering</h3>
            </div>
            <div className="text-white/60 font-space text-lg leading-relaxed">
                The biggest hurdle was achieving 60fps on mobile devices while rendering complex 3D cloth simulations. Standard libraries were too heavy, resulting in laggy tracking on mid-range Android devices.
            </div>
         </div>

         {/* Content Block: The Solution */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-white/10 pt-20">
            <div className="text-white/60 font-space text-lg leading-relaxed order-2 md:order-1">
                We engineered a custom WebGL pipeline that optimized mesh decimation dynamically based on the user's device battery level and processing power. This reduced load times by 40%.
            </div>
            <div className="flex flex-col gap-4 order-1 md:order-2">
                <span className="text-[#c6ff00] font-space text-xs tracking-widest uppercase">[ The Solution ]</span>
                <h3 className="text-white font-syne text-4xl font-bold">Adaptive Mesh Decimation</h3>
            </div>
         </div>

      </section>

      {/* 4. The Final "View Live" Call to Action */}
      <section className="w-full py-32 flex flex-col items-center justify-center bg-[#050505]">
          <Magnetic>
             <a href="https://aazmaao.com" target="_blank" className="relative group w-64 h-64 bg-[#c6ff00] rounded-full flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="relative z-10 flex flex-col items-center gap-2">
                    <span className="font-syne text-black font-bold text-2xl uppercase">View Live</span>
                    <ArrowUpRight className="text-black" />
                </div>
             </a>
          </Magnetic>
      </section>

      {/* 5. Navigation Footer */}
      <NextCase />

      <Footer />
    </main>
  );
}