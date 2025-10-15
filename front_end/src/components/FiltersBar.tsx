import React from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  cities: string[];
  eras: string[];
  tags: string[];
  defaults?: Record<string, string>;
  topOffsetPx?: number; // to align sticky bar under header
};

export const FiltersBar: React.FC<Props> = ({ cities, eras, tags, defaults, topOffsetPx = 64 }) => {
  const [params, setParams] = useSearchParams();
  const city = params.get("city") || "";
  const era = params.get("era") || "";
  const tag = params.get("tag") || "";
  const q = params.get("q") || "";

  const setParam = (k: string, v: string) => {
    const next = new URLSearchParams(params);
    if (v) next.set(k, v);
    else next.delete(k);
    setParams(next, { replace: true });
  };

  // Debounced, controlled search
  const tRef = React.useRef<number | undefined>(undefined);
  const onSearch = (value: string) => {
    if (tRef.current) window.clearTimeout(tRef.current);
    tRef.current = window.setTimeout(() => setParam("q", value), 250);
  };
  React.useEffect(() => () => { if (tRef.current) window.clearTimeout(tRef.current); }, []);

  const reset = () => {
    const next = new URLSearchParams();
    if (defaults) Object.entries(defaults).forEach(([k, v]) => v && next.set(k, v));
    setParams(next, { replace: true });
  };

  return (
    <div
      className="sticky z-30  -mx-6 m-5 border-b border-white/10 bg-[#0b0b0c]/800  px-6 py-3 "
      style={{ top: topOffsetPx }}
    >
      <div className="container mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex flex-wrap gap-3 ">
          {/* Shared select styles via className for consistent box/arrow height */}
          <label className="sr-only " htmlFor="filter-city">City</label>
          <select
            id="filter-city"
            value={city}
            onChange={(e) => setParam("city", e.target.value)}
            className="ml-95 h-10 appearance-none backdrop-blur rounded-full bg-black border border-white/15 px-4 pr-3 focus:ring-2 focus:ring-white/50
                       "
          >
            <option  value="">All Cities 🔻</option>
            {cities.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>

          <label className="sr-only" htmlFor="filter-era">Era</label>
          <select
            id="filter-era"
            value={era}
            onChange={(e) => setParam("era", e.target.value)}
            className="h-10 appearance-none rounded-full bg-black border border-white/15 px-4 pr-3 focus:ring-2 focus:ring-white/50"
          >
            <option value="">All Eras 🔻</option>
            {eras.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>

          <label className="sr-only" htmlFor="filter-tag">Badge</label>
          <select
            id="filter-tag"
            value={tag}
            onChange={(e) => setParam("tag", e.target.value)}
            className="h-10 appearance-none rounded-full bg-black border border-white/15 px-4 pr-3 focus:ring-2 focus:ring-white/50"
          >
            <option value="">All Badges 🔻</option>
            {tags.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>

          <div className="relative">
            <label className="sr-only" htmlFor="filter-search">Search</label>
            <input
              id="filter-search"
              type="search"
              value={q}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="🔍Search by name..."
              className="h-10 w-80 appearance-none rounded-full bg-black border border-white/15 px-4 pr-3 focus:ring-1 focus:ring-white/50 "
            />
            
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={reset}
            className="h-10 mr-86 appearance-none rounded-full bg-black border border-white/15 px-4 pr-3 focus:ring-2 focus:ring-white/50 "
          >
            Reset
          </button>
          
        </div>
      </div>
    </div>
  );
};
