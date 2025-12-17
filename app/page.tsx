"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/work/detail/Work"; // The new Snellenberg Engine
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Optional: Initialize Locomotive Scroll if you want extra control,
  // but our ReactLenis in layout.tsx handles the heavy lifting.
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="w-full min-h-screen">
      {/* 1. HUD Header (Fixed on top) */}
      <Header />

      {/* 2. The "Curtain" Content 
          This needs a background color (bg-[#080808]) to hide the footer 
          until you scroll to the very bottom.
      */}
      <div className="relative z-10 bg-[#080808] shadow-2xl">
        {/* The 3D Liquid Hero */}
        <Hero />

        {/* The Snellenberg Hover Portal */}
        <Work />

        {/* Optional: Add a call to action or "About" spacer here if you want */}
        <div className="h-[20vh] bg-[#080808]"></div>
      </div>

      {/* 3. The Grand Finale Footer 
          This is fixed at the bottom with z-0. 
          It waits behind the content.
      */}
      <Footer />
    </main>
  );
}
