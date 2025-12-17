"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  year: string;
  role: string;
}

export default function ProjectItem({ index, title, manageModal, year, role }: ProjectProps) {
  
  return (
   <Link href={`/work/${title.toLowerCase()}`} className="group flex ...">

     <div
      onMouseEnter={(e) => manageModal(true, index, e.clientX, e.clientY)}
      onMouseLeave={(e) => manageModal(false, index, e.clientX, e.clientY)}
      className="group flex flex-col md:flex-row justify-between items-center w-full py-16 md:py-24 border-t border-white/10 cursor-pointer transition-all duration-300 hover:opacity-50 hover:px-4"
    >
      
      {/* Title Section */}
      <div className="flex flex-col relative transition-transform duration-500 group-hover:-translate-x-2">
         <h2 className="font-syne text-6xl md:text-9xl font-bold uppercase text-white m-0 leading-[0.8] transition-colors group-hover:text-transparent group-hover:stroke-white" style={{ WebkitTextStroke: "1px transparent" }}>
            {title}
         </h2>
         <h2 className="absolute top-0 left-0 font-syne text-6xl md:text-9xl font-bold uppercase text-transparent m-0 leading-[0.8] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-stroke-white" style={{ WebkitTextStroke: "1px white" }}>
            {title}
         </h2>
      </div>
      
      {/* Metadata (Year / Role) */}
      <div className="flex flex-row md:flex-col items-end gap-2 mt-4 md:mt-0 transition-transform duration-500 group-hover:translate-x-2">
        <span className="font-space text-xs text-white/40 group-hover:text-[#ccff00] transition-colors uppercase tracking-widest">{role}</span>
        <span className="font-space text-xs text-white/40 border border-white/20 px-2 py-1 rounded-full">{year}</span>
      </div>

    </div>
   </Link>
  );
}