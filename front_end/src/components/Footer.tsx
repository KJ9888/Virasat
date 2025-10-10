import React from "react";

const Footer: React.FC = () => (
  <footer className="py-8 text-center text-gray-400">
    © {new Date().getFullYear()} Virasat — preserving India's heritage.
  </footer>
);

export default Footer;
