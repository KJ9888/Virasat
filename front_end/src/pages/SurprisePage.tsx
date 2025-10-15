import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionConfig } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { monumentsData, shuffle, type Monument } from "../data/monuments";
import { GridCard } from "../components/Cards";

const parseSeed = (v: string | null) => {
  const n = v ? Number(v) : NaN;
  return Number.isFinite(n) ? n : undefined;
};

const facts: Record<string, string[]> = {
  "taj-mahal": [
    "The Taj’s marble can glow under moonlight due to its translucence.",
    "Around 22 years and 20,000 artisans contributed to its construction."
  ],
  "qutub-minar": [
    "Among the tallest brick minarets globally.",
    "Shows layers of Delhi Sultanate craftsmanship."
  ],
  "red-fort": [
    "Main Mughal residence for nearly two centuries.",
    "Blends Persian, Timurid, and Indian styles."
  ],
  UNESCO: [
    "UNESCO status protects sites of ‘Outstanding Universal Value’.",
    "India hosts dozens of UNESCO cultural and natural sites."
  ],
};

const pickFactsFor = (m: Monument): string[] => {
  const specific = facts[m.id] || [];
  const byTag = m.tag ? (facts[m.tag] || []) : [];
  return [...specific, ...byTag].slice(0, 2);
};

const SurprisePage: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const initial = parseSeed(params.get("seed")) ?? Date.now();
  const [seed, setSeed] = useState<number>(initial);
  const [mode, setMode] = useState<"mixed" | "unesco" | "cities">("mixed");
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);

  useEffect(() => {
    if (!params.get("seed")) {
      const np = new URLSearchParams(params);
      np.set("seed", String(initial));
      setParams(np, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pool = useMemo<Monument[]>(() => {
    if (mode === "unesco") return monumentsData.filter(m => m.tag === "UNESCO");
    if (mode === "cities") {
      const cities = Array.from(new Set(monumentsData.map(m => m.city).filter(Boolean))) as string[];
      const city = cities[Math.floor((seed % cities.length + cities.length) % cities.length)];
      return monumentsData.filter(m => m.city === city);
    }
    return monumentsData;
  }, [mode, seed]);

  const picks = useMemo<Monument[]>(
    () => shuffle(pool, seed).slice(0, 9),
    [pool, seed]
  );

  const shuffleAgain = () => {
    const nextSeed = Date.now();
    setSeed(nextSeed);
    const np = new URLSearchParams(params);
    np.set("seed", String(nextSeed));
    setParams(np, { replace: true });
    setQuizAnswer(null);
  };

  const total = picks.length;
  const diffCities = new Set(picks.map(p => p.city).filter(Boolean)).size;
  const headerHeight = 72;

  // Simple quiz: which city does the first card belong to?
  const quiz = picks[0];
  const options = useMemo(() => {
    const all = Array.from(new Set(monumentsData.map(m => m.city).filter(Boolean))) as string[];
    const correct = quiz?.city || "Delhi";
    const others = all.filter(c => c !== correct).sort(() => Math.random() - 0.5).slice(2);
    return shuffle([correct, ...others], seed + 1).slice(0, 3);
  }, [quiz, seed]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0b0b0c] text-white">
        <Header />
        <div style={{ height: headerHeight + 12 }} />

        <section className="container mx-auto px-6 mt-10">
          <div className="text-center">
            <h1 className="text-center text-4xl md:text-7xl font-black tracking-tight
                         font-family-[Poppins,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji]
                         bg-clip-text text-transparent
                         bg-[linear-gradient(90deg,#f59e0b,40%,#ffffff,60%,#10b981)]
                         [background-size:200%_100%] animate-[bg-move_8s_linear_infinite] py-4">Discover Something New</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/80 py-2">
              A curated shuffle of India’s icons—every click reveals fresh stories.
            </p>

            <div className="mx-auto mt-5 flex w-full max-w-xl flex-wrap justify-center gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Cards: {total}</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Cities: {diffCities}</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setMode("mixed")}
                className={`h-9 rounded-full border px-3 text-sm backdrop-blur ${
                  mode === "mixed" ? "border-white/20 bg-white/15 text-white" : "border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                }`}
              >
                Mixed
              </button>
              <button
                onClick={() => setMode("unesco")}
                className={`h-9 rounded-full border px-3 text-sm backdrop-blur ${
                  mode === "unesco" ? "border-white/20 bg-white/15 text-white" : "border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                }`}
              >
                UNESCO only
              </button>
              <button
                onClick={() => setMode("cities")}
                className={`h-9 rounded-full border px-3 text-sm backdrop-blur ${
                  mode === "cities" ? "border-white/20 bg-white/15 text-white" : "border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                }`}
              >
                One city focus
              </button>

              <button
                onClick={shuffleAgain}
                className="ml-2 h-9 rounded-full border border-white/15 bg-white/10 px-3 text-sm text-white/90 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Shuffle again
              </button>
            </div>
          </div>
        </section>

        {/* Facts strip */}
        <section className="container mx-auto px-6 pt-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {picks.slice(0, 3).map((m, i) => {
              const f = pickFactsFor(m);
              const line = f[0] || "Many Indian monuments blend multiple architectural styles.";
              return (
                <div key={m.id + "-fact-" + i} className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white/85">
                  <div className="mb-1 text-white/60">Did you know?</div>
                  <div>{line}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick quiz */}
        {quiz && (
          <section className="container mx-auto px-6 pt-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
              <div className="text-sm text-white/80">Quick quiz: Which city is “{quiz.name}” in?</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setQuizAnswer(opt)}
                    className={`h-9 rounded-full border px-3 text-sm ${
                      quizAnswer === opt
                        ? "border-white/20 bg-white/15 text-white"
                        : "border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {quizAnswer && (
                <div className="mt-3 text-sm">
                  {quizAnswer === (quiz.city || "")
                    ? "Correct! Keep exploring."
                    : `Not quite. Correct answer: ${quiz.city || "—"}.`}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Grid with eager-first loading for faster first paint */}
        <main className="container mx-auto px-6 py-8">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {picks.map((m, i) => (
              <GridCard key={m.id} m={m} index={i} eagerFirst />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default SurprisePage;
