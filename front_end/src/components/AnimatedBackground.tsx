// src/components/AnimatedBackground.tsx
import React from "react";
import "./AnimatedBackground.css"; // for keyframes

const AnimatedBackground: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-blend-hard-light opacity-70 z-0" />

    {/* Moving stars background */}
    <div
      className="absolute top-0 left-0 w-[200%] h-full opacity-30"
      aria-hidden="true"
      style={{
        backgroundImage:
          "url('https://media.licdn.com/dms/image/v2/D5612AQHypqel3Ekxeg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683269188445?e=2147483647&v=beta&t=6-o_iao7y_TYjwldNEKpZNYwHP_t0VsNk3m7DpfoHhI')",
        animation: "pan-stars 180s linear infinite",
        marginTop: "5.2%",
        height: "100%",
      
      }}
    />
  </div>
);
export default AnimatedBackground;