// src/pages/CompareDetails.tsx

import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Types and shared data
type Story = { id: string; name: string; description: string };

const stories: Story[] = [
  { id: "mahabharata", name: "Mahabharata", description: "Epic of Kurukshetra War." },
  { id: "ramayana", name: "Ramayana", description: "Life and journey of Prince Rama." },
  { id: "ashoka-the-great", name: "Ashoka the Great", description: "Emperor who embraced Dharma." },
  { id: "akbar-the-great", name: "Akbar the Great", description: "Mughal emperor and tolerance." },
  { id: "sambhaji-maharaj", name: "Sambhaji Maharaj", description: "Maratha king and resistance." },
  { id: "maharana-pratap", name: "Maharana Pratap", description: "Mewar ruler and valor." },
  { id: "khalsa-birth", name: "Khalsa Birth", description: "Founding of the Khalsa (1699)." },
  { id: "guru-granth-sahib", name: "Guru-Granth Sahib", description: "Sikh holy scripture." },
];

type Badge = "Epic" | "Sikh History" | "Emperor" | "Warrior" | "Heritage";

type Signals = {
  antiquity: number;
  crossFaithInfluence: number;
  literaryDepth: number;
  militaryLegacy: number;
  badge: Badge;
};

const meta = (id: string): Signals => {
  switch (id) {
    case "mahabharata":
      return { antiquity: 10, crossFaithInfluence: 8, literaryDepth: 10, militaryLegacy: 8, badge: "Epic" };
    case "ramayana":
      return { antiquity: 10, crossFaithInfluence: 8, literaryDepth: 10, militaryLegacy: 7, badge: "Epic" };
    case "ashoka-the-great":
      return { antiquity: 8, crossFaithInfluence: 9, literaryDepth: 8, militaryLegacy: 7, badge: "Emperor" };
    case "akbar-the-great":
      return { antiquity: 8, crossFaithInfluence: 10, literaryDepth: 7, militaryLegacy: 9, badge: "Emperor" };
    case "sambhaji-maharaj":
      return { antiquity: 7, crossFaithInfluence: 7, literaryDepth: 7, militaryLegacy: 10, badge: "Warrior" };
    case "maharana-pratap":
      return { antiquity: 7, crossFaithInfluence: 7, literaryDepth: 7, militaryLegacy: 10, badge: "Warrior" };
    case "khalsa-birth":
      return { antiquity: 7, crossFaithInfluence: 8, literaryDepth: 7, militaryLegacy: 8, badge: "Sikh History" };
    case "guru-granth-sahib":
      return { antiquity: 7, crossFaithInfluence: 10, literaryDepth: 9, militaryLegacy: 7, badge: "Sikh History" };
    default:
      return { antiquity: 7, crossFaithInfluence: 7, literaryDepth: 7, militaryLegacy: 7, badge: "Heritage" };
  }
};

type CriterionKey = keyof Pick<
  Signals,
  "antiquity" | "crossFaithInfluence" | "literaryDepth" | "militaryLegacy"
>;

type Criterion = { key: CriterionKey; label: string; tip: string; hue: string };

const criteria: Criterion[] = [
  { key: "antiquity", label: "Antiquity", tip: "Historical age and lineage.", hue: "#22c55e" },
  { key: "crossFaithInfluence", label: "Cross-faith influence", tip: "Inter-community reach.", hue: "#eab308" },
  { key: "literaryDepth", label: "Literary depth", tip: "Textual richness.", hue: "#60a5fa" },
  { key: "militaryLegacy", label: "Military legacy", tip: "Martial inspiration.", hue: "#f97316" },
];

const BADGE_GRADIENT: Record<Badge, string> = {
  Epic: "linear-gradient(90deg, #ec4899, #fb7185)",
  "Sikh History": "linear-gradient(90deg, #10b981, #22c55e)",
  Emperor: "linear-gradient(90deg, #f59e0b, #facc15)",
  Warrior: "linear-gradient(90deg, #38bdf8, #22d3ee)",
  Heritage: "linear-gradient(90deg, #8b5cf6, #6366f1)",
};

const useQuery = () => new URLSearchParams(useLocation().search);

// Deterministic, light “particles”
const Particles: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.span
        key={i}
        className="absolute w-[1px] h-16 bg-white/10"
        style={{ left: `${(i + 1) * 7}%`, top: `${(i % 4) * 20 + 10}%` }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 3 + i * 0.1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    ))}
  </div>
);

// Animated radial gauge (no .to() usage)
const Gauge: React.FC<{ value: number; color: string; label: string }> = ({ value, color, label }) => {
  const clamped = Math.max(0, Math.min(10, value));
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  const mv = useMotionValue(0); // 0..10
  const dashOffset = useTransform(mv, (v) => circumference - (v / 10) * circumference);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 600;
    const loop = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = eased * clamped;
      mv.set(val);
      setDisplay(Math.round(val));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [clamped, mv]);

  return (
    <div className="flex flex-col items-center">
      <svg width="96" height="96">
        <circle cx="48" cy="48" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
        <motion.circle
          cx="48"
          cy="48"
          r={radius}
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: dashOffset }}
          transform="rotate(-90 48 48)"
        />
      </svg>
      <div className="mt-1 text-base font-semibold" style={{ color }}>
        {display}/10
      </div>
      <div className="text-xs text-gray-300">{label}</div>
    </div>
  );
};

const CompareDetails: React.FC = () => {
  const navigate = useNavigate();
  const q = useQuery();
  const raw = q.get("ids") || "";
  const ids = useMemo(() => raw.split(",").map((s) => s.trim()).filter(Boolean), [raw]);

  const selected = useMemo(
    () =>
      stories
        .filter((s) => ids.includes(s.id))
        .map((s) => ({ ...s, signals: meta(s.id) })),
    [ids]
  );

  const bestByCriterion = (key: CriterionKey) => {
    if (selected.length === 0) return { score: 0, items: [] as string[] };
    let best = -Infinity;
    let bestItems: string[] = [];
    for (const s of selected) {
      const val = s.signals[key];
      if (val > best) {
        best = val;
        bestItems = [s.name];
      } else if (val === best) {
        bestItems.push(s.name);
      }
    }
    return { score: best, items: bestItems };
  };

  const totalScore = (sig: Signals) =>
    sig.antiquity + sig.crossFaithInfluence + sig.literaryDepth + sig.militaryLegacy;

  const handleBack = () => {
    // Works even if user opened compare directly
    navigate("/stories");
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      {/* Background glows */}
      <div className="absolute inset-0 opacity-70 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-16 w-[420px] h-[420px] bg-emerald-400/10 rounded-full blur-3xl" />
      </div>
      <Particles />

      {/* Hero */}
      <div className="relative">
        <div className="container mx-auto px-4 md:px-8 pt-10 pb-6">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-400">
              Comparison Details
            </h1>
            <button
              onClick={handleBack}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleBack(); }}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-gray-900/70 border border-gray-700 text-green-400 hover:text-green-300 hover:border-green-400 transition focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Back to Stories"
            >
              ← Back to Stories
            </button>
          </div>
          <p className="mt-3 text-gray-300 max-w-3xl">
            Explore knowledge-first criteria with clear visuals that highlight differences at a glance.
          </p>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-8 pb-12">
        {selected.length === 0 ? (
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-gray-300">
            No stories selected. Go back and choose up to two items.
          </motion.p>
        ) : (
          <>
            {/* Criteria overview */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 mb-6 backdrop-blur"
            >
              <h2 className="text-lg font-bold mb-2">Criteria overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {criteria.map((c) => (
                  <div key={c.key} className="relative rounded-xl bg-gray-900 border border-gray-800 p-3 overflow-hidden">
                    <div
                      className="absolute -inset-px rounded-xl opacity-30 blur-md"
                      style={{ background: `linear-gradient(90deg, ${c.hue}44, transparent)` }}
                    />
                    <div className="relative">
                      <div className="text-sm font-semibold">{c.label}</div>
                      <div className="text-xs text-gray-400 mt-1">{c.tip}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cards with gauges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {selected.map((s, idx) => {
                const bestFlags: Record<CriterionKey, boolean> = {
                  antiquity: s.signals.antiquity === bestByCriterion("antiquity").score,
                  crossFaithInfluence:
                    s.signals.crossFaithInfluence === bestByCriterion("crossFaithInfluence").score,
                  literaryDepth: s.signals.literaryDepth === bestByCriterion("literaryDepth").score,
                  militaryLegacy: s.signals.militaryLegacy === bestByCriterion("militaryLegacy").score,
                };
                const bestCount = Object.values(bestFlags).filter(Boolean).length;

                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="relative rounded-2xl bg-gray-900/60 border border-gray-800 p-5 shadow-[0_0_20px_rgba(255,255,255,0.04)] backdrop-blur"
                  >
                    {bestCount > 0 && (
                      <div
                        className="absolute -top-2 -right-2 px-2 py-1 rounded-md text-[10px] font-bold text-black shadow"
                        style={{ background: "linear-gradient(90deg, #fb923c, #34d399)" }}
                      >
                        {bestCount} best
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">{s.name}</h2>
                      <span
                        className="text-[11px] font-semibold text-black px-2 py-1 rounded-full shadow"
                        style={{ background: BADGE_GRADIENT[s.signals.badge] }}
                      >
                        {s.signals.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{s.description}</p>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <Gauge value={s.signals.antiquity} color="#22c55e" label="Antiquity" />
                      <Gauge value={s.signals.crossFaithInfluence} color="#eab308" label="Cross-faith" />
                      <Gauge value={s.signals.literaryDepth} color="#60a5fa" label="Literary" />
                      <Gauge value={s.signals.militaryLegacy} color="#f97316" label="Military" />
                    </div>

                    <div className="mt-4 text-xs text-gray-400">
                      Total score: <span className="text-gray-200">{totalScore(s.signals)}/40</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Best tiles */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
            >
              {criteria.map((c) => {
                const best = bestByCriterion(c.key);
                return (
                  <div key={c.key} className="relative rounded-2xl bg-gray-900/60 border border-gray-800 p-4 overflow-hidden">
                    <div
                      className="absolute -inset-px rounded-2xl opacity-20 blur-md"
                      style={{ background: `linear-gradient(90deg, ${c.hue}66, transparent)` }}
                    />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">{c.label}</div>
                        <div className="text-xs text-gray-400">Top score: {best.score}/10</div>
                      </div>
                      <div className="text-sm text-yellow-300">{best.items.join(" & ") || "—"}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Table */}
            <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 mb-6 overflow-x-auto backdrop-blur">
              <h3 className="text-lg font-bold mb-3">Side-by-side comparison</h3>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-400">
                    <th className="text-left py-2 pr-4">Criterion</th>
                    {selected.map((s) => (
                      <th key={s.id} className="text-left py-2 pr-4">
                        {s.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((c) => (
                    <tr key={c.key} className="border-t border-gray-800">
                      <td className="py-2 pr-4 text-gray-300">{c.label}</td>
                      {selected.map((s) => (
                        <td key={s.id} className="py-2 pr-4">
                          <div className="flex items-center gap-2">
                            <span className="w-10 text-gray-300">{s.signals[c.key]}/10</span>
                            <div className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(s.signals[c.key] / 10) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${
                                    criteria.find((k) => k.key === c.key)?.hue || "#22c55e"
                                  }, rgba(255,255,255,0.2))`,
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t border-gray-800">
                    <td className="py-2 pr-4 text-gray-300">Total</td>
                    {selected.map((s, i) => (
                      <td key={s.id} className="py-2 pr-4 text-gray-300">
                        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                          {totalScore(s.signals)}/40
                        </motion.span>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Takeaways */}
            <div className="rounded-2xl bg-gray-900/60 border border-gray-800 p-5 backdrop-blur">
              <h3 className="text-lg font-bold mb-2">Key takeaways</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-xl bg-gray-900 border border-gray-800 p-3">
                  <div className="text-sm font-semibold">Textual traditions</div>
                  <p className="text-xs text-gray-400 mt-1">Use Antiquity and Literary depth for epics and scriptures.</p>
                </div>
                <div className="rounded-xl bg-gray-900 border border-gray-800 p-3">
                  <div className="text-sm font-semibold">Military contexts</div>
                  <p className="text-xs text-gray-400 mt-1">Military legacy shows resistance and strategic influence.</p>
                </div>
                <div className="rounded-xl bg-gray-900 border border-gray-800 p-3">
                  <div className="text-sm font-semibold">Cultural reach</div>
                  <p className="text-xs text-gray-400 mt-1">Cross-faith influence reflects inter-community dialogue.</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Note: Criteria are educational lenses, not rankings.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompareDetails;
