import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionConfig } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { monumentsData, allCities, allEras, allTags, type Monument } from "../data/monuments";
import { FiltersBar } from "../components/FiltersBar";
import { GridCard } from "../components/Cards";

// Filter helper
const filterList = (list: Monument[], params: URLSearchParams) => {
  const city = params.get("city") || "";
  const era = params.get("era") || "";
  const tag = (params.get("tag") || "").trim();
  const q = (params.get("q") || "").toLowerCase();
  return list.filter(m => {
    if (city && m.city !== city) return false;
    if (era && m.era !== era) return false;
    if (tag && m.tag !== tag) return false;
    if (q && !m.name.toLowerCase().includes(q)) return false;
    return true;
  });
};

type SortKey = "popularity" | "az";

const UnescoPicksPage: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortKey>("popularity");
  const [loading, setLoading] = useState(true);

  // Ensure tag=UNESCO on first load
  useEffect(() => {
    if (!params.get("tag")) {
      const next = new URLSearchParams(params);
      next.set("tag", "UNESCO");
      setParams(next, { replace: true });
    }
    const t = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Preload LCP (first UNESCO image)
  useEffect(() => {
    const first = monumentsData.find((m) => m.tag === "UNESCO");
    if (!first) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    (link as any).fetchpriority = "high";
    link.href = first.imageUrl;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Filter + sort
  const filteredRaw = useMemo(() => filterList(monumentsData, params), [params]);
  const filtered = useMemo(() => {
    const arr = [...filteredRaw];
    if (sortBy === "popularity") {
      arr.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else {
      arr.sort((a, b) => a.name.localeCompare(b.name));
    }
    return arr;
  }, [filteredRaw, sortBy]);

  const headerHeight = 72;

  

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0b0b0c] text-white">
        <Header />
        {/* Spacer + extra margin so heading never looks glued to header */}
        <div style={{ height: headerHeight + 12 }} />

        {/* Centered title + info */}
        <section className="container mx-auto px-6">
          <div className="text-center mt-10">
            <h1 className="text-center text-4xl md:text-7xl font-black tracking-tight
                         [text-shadow:0_1px_0_rgba(255,255,255,0.06)]
                         bg-clip-text text-transparent
                         bg-[linear-gradient(90deg,#f59e0b,40%,#ffffff,60%,#10b981)]
                         [background-size:200%_100%] animate-[bg-move_8s_linear_infinite]">UNESCO Picks</h1>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              World Heritage Sites curated for discovery and timeless storytelling.
            </p>

            {/* Sort toggles centered */}
            <div className="mt-4 flex ml-160 gap-2">
              <button
                onClick={() => setSortBy("popularity")}
                className={`h-9 rounded-full border px-3 text-sm backdrop-blur ${
                  sortBy === "popularity"
                    ? "border-white/20 bg-white/15 text-white"
                    : "border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                }`}
              >
                Popularity
              </button>
              <button
                onClick={() => setSortBy("az")}
                className={`h-9 rounded-full border px-3 text-sm backdrop-blur ${
                  sortBy === "az"
                    ? "border-white/20 bg-white/15 text-white"
                    : "border-white/15 bg-white/5 text-white/85 hover:bg-white/10"
                }`}
              >
                A–Z
              </button>
            </div>
          </div>
        </section>

        {/* Sticky filters */}
        <FiltersBar
          cities={allCities}
          eras={allEras}
          tags={allTags}
          defaults={{ tag: "UNESCO" }}
          topOffsetPx={headerHeight}
        />

        {/* Explore themes – compact, fast */}
        <section className="container mx-auto px-6 pt-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href="/themes/mughal"
              className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white/85 hover:bg-white/[0.1]"
            >
              Mughal Era
            </a>
            <a
              href="/themes/temples"
              className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white/85 hover:bg-white/[0.1]"
            >
              Temple Architecture
            </a>
            <a
              href="/themes/stone-carving"
              className="rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm text-white/85 hover:bg-white/[0.1]"
            >
              Stone Carving Masterpieces
            </a>
          </div>
        </section>

        {/* Grid with skeleton fallback */}
        <main className="container mx-auto px-6 py-8">
          {loading ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur"
                >
                  <div className="h-64 md:h-72 lg:h-[22rem] bg-white/[0.06]" />
                  <div className="p-5">
                    <div className="h-2 w-20 rounded-full bg-white/15" />
                    <div className="mt-3 h-5 w-2/3 rounded bg-white/10" />
                    <div className="mt-2 h-4 w-full rounded bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m, i) => (
                <GridCard key={m.id} m={m} index={i} />
              ))}
            </div>
          )}
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
};

export default UnescoPicksPage;
