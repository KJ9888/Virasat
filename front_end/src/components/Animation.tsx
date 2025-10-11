// src/components/AnimatedBackground.tsx
import React from "react";
import "./AnimatedBackground.css"; // for keyframes

const Animation: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-blend-hard-light opacity-70 z-0" />

    {/* Moving stars background */}
    <div
      className="fixed top-0 left-0 w-[200%] h-full opacity-300 z-10"
      aria-hidden="true"
      style={{
        
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        animation: "pan-stars 120s linear infinite ",
        
        
      
      }}
    />
  </div>
);

export default Animation;