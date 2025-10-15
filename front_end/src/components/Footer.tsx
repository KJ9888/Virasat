import React from "react";
import type { ReactNode } from "react";

type FooterProps = {
  children?: ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children }) => (
  <footer className="py-8 text-center text-gray-400">
    © {new Date().getFullYear()} Virasat — preserving India's heritage.
    {children}
  </footer>
);

export default Footer;