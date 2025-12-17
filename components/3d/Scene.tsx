"use client";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Environment } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";

export default function Scene() {
  return (
    <div className="h-full w-full absolute top-0 left-0 -z-10">
      <Canvas>
        {/* Environment adds realistic reflections without heavy lighting setup */}
        <Environment preset="studio" />
        
        {/* Float makes the object gently bob up and down */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Geometry />
        </Float>
        
        {/* Ambient light for base visibility */}
        <ambientLight intensity={0.5} />
        {/* Directional light for shadows and depth */}
        <directionalLight position={[2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
}

function Geometry() {
    // We can add mouse interaction logic here later for advanced distortion
    return (
        <Sphere args={[1, 64, 64]} scale={2.2}>
            <MeshDistortMaterial 
                color="#1a1a1a" /* Dark, sleek metal look */
                attach="material" 
                distort={0.5} /* The strength of the liquid effect */
                speed={2} /* Animation speed */
                roughness={0.2} 
                metalness={0.9} /* Makes it look like polished chrome */
            />
        </Sphere>
    )
}