import React, { useMemo, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { monumentsData, allCities, allEras, allTags, type Monument } from "../data/monuments";
import { FiltersBar } from "../components/FiltersBar";
import { GridCard, TrendingCard } from "../components/Cards";
import Animation from "../components/Animation";


const easeOut = [0.16, 1, 0.3, 1];

const filterList = (list: Monument[], params: URLSearchParams) => {
  const city = params.get("city") || "";
  const era = params.get("era") || "";
  const tag = params.get("tag") || "";
  const q = (params.get("q") || "").toLowerCase();
  return list.filter(m => {
    if (city && m.city !== city) return false;
    if (era && m.era !== era) return false;
    if (tag && m.tag !== tag) return false;
    if (q && !m.name.toLowerCase().includes(q)) return false;
    return true;
  });
};

const spanClassForIndex = (i: number) => {
  const tall = i % 7 === 0 || i % 7 === 3;
  const wide = i % 7 === 2;
  return "lg:" + (tall ? "row-span-2" : wide ? "col-span-2" : "row-span-1");
};

const MonumentsPage: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [params] = useSearchParams();

  const filtered = useMemo(() => filterList(monumentsData, params), [params]);
  const trending = useMemo(() => {
    const list = filterList(monumentsData, params);
    return [...list].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 6);
  }, [params]);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollToContent = () =>
    contentRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });

  // Header height for spacing alignment (match your Header actual height)
  const headerHeight = 72;

  return (
    <>
    <Animation />
      
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-white selection:bg-white/10 selection:text-white">
        {/* Ambient background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 opacity-30 mix-blend-screen">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
          </div>
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(transparent_1px,#000_1px)] [background-size:3px_3px]" />
        </div>

        <Header />

        {/* Spacer so hero never collides with sticky header on small screens */}
        <div style={{ height: headerHeight }} />

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-6 pt-4 md:pt-10">
            <motion.h1
              initial={prefersReducedMotion ? {} : { y: 14, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="text-center text-4xl md:text-7xl font-black tracking-tight
                         [text-shadow:0_1px_0_rgba(255,255,255,0.06)]
                         bg-clip-text text-transparent
                         bg-[linear-gradient(90deg,#f59e0b,40%,#ffffff,60%,#10b981)]
                         [background-size:200%_100%] animate-[bg-move_8s_linear_infinite]"
              style={{ WebkitTextStrokeWidth: 1, WebkitTextStrokeColor: "rgba(255,255,255,0.12)" }}
            >
              Monuments of India
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? {} : { y: 12, opacity: 0 }}
              animate={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mx-auto mt-4 max-w-2xl text-center text-gray-300"
            >
              Explore iconic landmarks through history, craftsmanship, and living heritage.
            </motion.p>

            {/* Single CTA row (no duplicates) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={scrollToContent}
                className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Start Exploring
              </button>
              <Link
                to="/unesco"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                UNESCO Picks
              </Link>
              <Link
                to="/surprise"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Surprise Me
              </Link>
            </div>

            <motion.div
              aria-hidden
              initial={false}
              animate={prefersReducedMotion ? {} : { y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="pointer-events-none mx-auto mt-8 h-1 w-44 rounded-full bg-gradient-to-r from-orange-400/50 via-white/50 to-emerald-400/50"
            />
          </div>
        </section>

        {/* Filters (sticky bar already handles offset via its own prop if needed) */}
        <div ref={contentRef} />
        <FiltersBar cities={allCities} eras={allEras} tags={allTags} topOffsetPx={headerHeight} />

        {/* Trending near you – enhanced */}
        <section className="container mx-auto px-6 py-1 ">
         
            <div className=" text-center text-lg md:text-xl   ">
              <h2 className="text-5xl text-yellow-500 font-bold ">Trending near you</h2>
              
              <p className="mt-1  text-white/70 py-2">Popular picks matching current filters.</p>
            </div>
            
          

          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trending.map((m, i) => <TrendingCard key={m.id} m={m} index={i} />)}
          </div>
        </section>

        {/* Divider + heading before all monuments */}
        <section className="container mx-auto px-6 pt-10 text-center">
          <div className="mx-auto mb-6 h-px w-full max-w-5xl bg-white/10" />
          <h2 className="mb-4 text-5xl font-bold text-yellow-500 m-10">All Monuments</h2>
        </section>

        {/* Main grid */}
        {/* Main grid - Clean uniform layout */}
<main className="container mx-auto px-6 pb-16">
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {filtered.map((m, i) => (
      <GridCard key={m.id} m={m} index={i} />
    ))}
  </div>
</main>


        <Footer />
      </div>
    </MotionConfig>
    </>
  );
};

export default MonumentsPage;
