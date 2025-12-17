"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap"; // We need GSAP for the smoothest cursor tracking

interface ModalProps {
  modal: { active: boolean; index: number };
  projects: { src: string; color: string }[];
}

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const src = "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1SuD5f.img?w=1012&h=759&m=6&x=198&y=115&s=142&d=142"
  useEffect(() => {
    // Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    
    // Move Cursor
    const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    
    // Move Label
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    });
  }, []);

  return (
    <>
      {/* The Image Container */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="fixed top-1/2 left-1/2 w-[400px] h-[300px] bg-white pointer-events-none overflow-hidden z-30 transform -translate-x-1/2 -translate-y-1/2 rounded-none mix-blend-difference" // Edgy: Removed rounded corners
      >
        <div style={{ top: index * -100 + "%" }} className="relative h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                key={`modal_${index}`}
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <Image
                  src={src}
                  width={400}
                  height={300}
                  alt="image"
                  className="h-auto w-auto min-h-full min-w-full object-cover opacity-80 mix-blend-multiply grayscale contrast-125" // Edgy filters
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* The "View" Cursor */}
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="fixed top-1/2 left-1/2 w-20 h-20 rounded-full bg-[#ccff00] pointer-events-none flex items-center justify-center z-40 mix-blend-difference"
      ></motion.div>
      
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="fixed top-1/2 left-1/2 pointer-events-none z-50 flex items-center justify-center font-space text-black font-bold text-sm bg-transparent"
      >
        VIEW
      </motion.div>
    </>
  );
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { 
    scale: 1, 
    x: "-50%", 
    y: "-50%", 
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } 
  },
  closed: { 
    scale: 0, 
    x: "-50%", 
    y: "-50%", 
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } 
  },
};