"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NextCase() {
  return (
    <section className="relative w-full h-[60vh] bg-[#0c0c0c] flex items-center justify-center overflow-hidden border-t border-white/10">
      
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-[#c6ff00] translate-y-full hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

      <Link href="/work/next-project" className="group relative z-10 flex flex-col items-center gap-6 cursor-pointer w-full h-full justify-center">
          
          <span className="font-space text-white/50 group-hover:text-black text-sm tracking-[0.3em] uppercase transition-colors">
             Next Case Study
          </span>
          
          <h2 className="font-syne text-6xl md:text-9xl font-bold text-white group-hover:text-black uppercase transition-colors">
             Physics Wallah
          </h2>

          <div className="w-16 h-16 rounded-full border border-white/20 group-hover:border-black flex items-center justify-center transition-colors">
             <ArrowRight className="text-white group-hover:text-black transition-colors" />
          </div>

      </Link>
    </section>
  );
}