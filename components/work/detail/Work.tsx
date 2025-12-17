"use client";
import { useState } from "react";
import ProjectItem from "./ProjectItem";
import Modal from "./Modal";

const projects = [
  {
    title: "Aazmaao",
    src: "https://images.unsplash.com/photo-1600609842388-43905e468305?q=80&w=2600&auto=format&fit=crop",
    color: "#ccff00",
    role: "Design & Dev",
    year: "2025",
  },
  {
    title: "Shopify Ultra",
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2600&auto=format&fit=crop",
    color: "#7000ff",
    role: "Liquid / Commerce",
    year: "2024",
  },
  {
    title: "Physics Wallah",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2600&auto=format&fit=crop",
    color: "#00f0ff",
    role: "LMS Architecture",
    year: "2025",
  },
  {
    title: "Neural Net",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    color: "#ff0055",
    role: "Deep Learning",
    year: "2024",
  },
];

export default function Work() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#080808] px-4 md:px-20 py-32"
    >
      {/* Header */}
      <div className="w-full mb-20 flex justify-between items-end border-b border-white/10 pb-4">
        <span className="font-space text-xs font-bold text-[#ccff00] tracking-widest uppercase">
          [ Selected Works ]
        </span>
        <span className="font-space text-xs text-white/40 hidden md:block">
          Interact to reveal
        </span>
      </div>

      {/* The List */}
      <div className="w-full flex flex-col items-center justify-center">
        {projects.map((project, index) => {
          return (
            <ProjectItem
              index={index}
              title={project.title}
              manageModal={(active, index) => setModal({ active, index })}
              year={project.year}
              role={project.role}
              key={index}
            />
          );
        })}
      </div>

      {/* The Floating Portal */}
      <Modal modal={modal} projects={projects} />
    </section>
  );
}
