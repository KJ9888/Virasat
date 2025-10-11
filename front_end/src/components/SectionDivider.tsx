import { motion } from "framer-motion";

type Variant = "hairline" | "twin" | "dot" | "diamond";

export default function SectionDivider({
  className = "",
  delay = 0.1,
  variant = "diamond",
}: { className?: string; delay?: number; variant?: Variant }) {
  if (variant === "twin") {
    return (
      <div className={`mx-auto my-10 w-[min(92%,980px)] ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
        <div className="mt-1 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent" />
      </div>
    );
  }

  if (variant === "dot" || variant === "diamond") {
    return (
      <div className={`mx-auto my-10 w-[min(92%,980px)] relative ${className}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200/45 to-transparent" />
        <span
          className={
            variant === "dot"
              ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[6px] w-[6px] rounded-full bg-amber-300/80 shadow-[0_0_6px_rgba(245,200,109,0.6)]"
              : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block h-2 w-2 rotate-45 bg-amber-300/80 shadow-[0_0_6px_rgba(245,200,109,0.5)] rounded-[2px]"
          }
          aria-hidden="true"
        />
      </div>
    );
  }

  // default: hairline
  return (
    <motion.div
      role="separator"
      aria-hidden="true"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className={`
        mx-auto my-10 h-px w-[min(92%,980px)]
        bg-gradient-to-r from-transparent via-amber-200/60 to-transparent
        ${className}
      `}
    />
  );
}
