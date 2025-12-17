"use client";
import { motion } from "framer-motion";

const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProjectBrief({ roles, stack, year, overview }: any) {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 bg-[#080808] border-b border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
        
        {/* Left: Overview Text */}
        <div className="md:col-span-8 flex flex-col gap-8 pr-0 md:pr-20">
           <h3 className="font-space text-xs text-[#c6ff00] tracking-widest uppercase mb-4">[ The Brief ]</h3>
           <p className="font-syne text-2xl md:text-4xl leading-tight text-white/90">
              {overview}
           </p>
        </div>

        {/* Right: Metadata Grid */}
        <div className="md:col-span-4 flex flex-col gap-10 font-space">
           
           <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
              <span className="text-xs text-white/40 uppercase tracking-widest">Roles</span>
              <span className="text-white text-lg">{roles}</span>
           </div>

           <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
              <span className="text-xs text-white/40 uppercase tracking-widest">Stack</span>
              <span className="text-white text-lg">{stack}</span>
           </div>

           <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
              <span className="text-xs text-white/40 uppercase tracking-widest">Year</span>
              <span className="text-white text-lg">{year}</span>
           </div>

        </div>

      </div>
    </section>
  );
}