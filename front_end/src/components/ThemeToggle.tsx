import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const MagneticButton = ({ children, className = "", ...props }: any) => {
  return (
    <motion.button
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.965 }}
      onMouseMove={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        target.style.setProperty("--mx", `${x}px`);
        target.style.setProperty("--my", `${y}px`);
      }}
      className={`relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(200px_circle_at_var(--mx)_var(--my),rgba(255,220,150,0.18),transparent_60%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
  return (
    <MagneticButton
      onClick={toggle}
      aria-label="Toggle theme"
      className="
                  inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                  border border-[#D8D3C8] text-[#1E1E1E] bg-[rgba(160,140,100,0.10)]
                  hover:border-[#C8C2B6] hover:bg-[rgba(160,140,100,0.16)]
                  dark:border-amber-300/25 dark:text-amber-100/95 dark:bg-amber-300/10
                  transition shadow-[inset_0_0_0_rgba(0,0,0,0)]
                  hover:shadow-[0_6px_18px_rgba(255,195,120,0.12)] relative overflow-hidden
                "
    >
      <span aria-hidden="true">{isDark ? "🌙" : "🌤️"}</span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </MagneticButton>
  );
};
export default ThemeToggle;
