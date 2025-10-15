import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Monument } from "../data/monuments";

const easeOut = [0.16, 1, 0.3, 1];
const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: easeOut }
  })
};
const cardVariants = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, transition: { type: "spring", stiffness: 240, damping: 26 } },
  hover: { scale: 1.02, transition: { type: "spring", stiffness: 280, damping: 22 } },
  tap: { scale: 0.99 }
};

// ...imports same...

export const GridCard: React.FC<{ m: Monument; index: number; spanClass?: string }> = ({ m, index, spanClass = "" }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      custom={index}
      initial={prefersReducedMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className={`group relative ${spanClass} overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm`}
    >
      <Link to={m.path} className="focus:outline-none" aria-label={`Open ${m.name}`}>
        <motion.div initial="rest" whileHover="hover" whileTap="tap" variants={cardVariants} className="relative h-full w-full">
          <div className="relative h-64 md:h-72 lg:h-[22rem]">
            <motion.img
              src={m.imageUrl}
              alt={m.name}
              className="h-full w-full object-cover"
              loading="lazy"
              width={m.width}
              height={m.height}
              whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}
              transition={{ duration: 0.6, ease: easeOut }}
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-y-10 -left-1/3 w-1/2 rotate-12 bg-gradient-to-r from-white/0 via-white/12 to-white/0 blur-md" />
              </div>
            </div>
            {m.tag && (
              <div className="absolute right-3 top-3">
                <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/90 backdrop-blur">
                  {m.tag}
                </span>
              </div>
            )}
          </div>

          <div className="relative flex flex-col gap-2 p-5">
            <motion.div
              layout
              className="h-1 w-20 rounded-full bg-white/30"
              whileHover={prefersReducedMotion ? {} : { width: 90 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
            />
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">{m.name}</h3>
            <p className="text-sm md:text-base text-gray-300">{m.description}</p>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-xs text-white/60">Tap to view details</span>
              <motion.span
                aria-hidden
                animate={prefersReducedMotion ? {} : { x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className="inline-block text-white/60"
              >
                →
              </motion.span>
            </div>
          </div>

          <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-transparent group-focus-within:ring-white/40" />
        </motion.div>
      </Link>

      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_-60px_120px_-60px_rgba(0,0,0,0.35)]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/15" />
      </div>
    </motion.article>
  );
};


export const TrendingCard: React.FC<{ m: Monument; index: number }> = ({ m, index }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.article
      custom={index}
      initial={prefersReducedMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <Link to={m.path} className="focus:outline-none" aria-label={`Open ${m.name}`}>
        <div className="relative h-65">
          <motion.img
            src={m.imageUrl}
            alt={m.name}
            className="h-full w-full object-cover"
            loading="lazy"
            width={m.width}
            height={m.height}
            whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
            transition={{ duration: 0.6, ease: easeOut }}
          />
          {m.tag && (
            <div className="absolute right-3 top-3">
              <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/90 backdrop-blur">
                {m.tag}
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{m.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-300">{m.description}</p>
        </div>
      </Link>
    </motion.article>
  );
};
