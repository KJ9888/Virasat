// src/pages/StoriesPage.tsx

import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Animation from "../components/Animation";

// ---------- Data ----------
const storiesData = [
  {
    id: "mahabharata",
    name: "Mahabharata",
    description: "An ancient Indian epic that narrates the Kurukshetra War.",
    imageUrl:
      "https://www.bvashram.org/wp-content/uploads/2005/11/mahabharata-01.jpg",
    path: "/stories/mahabharata",
  },
  {
    id: "sambhaji-maharaj",
    name: "Sambhaji Maharaj",
    description:
      "The valiant Maratha king and his defiance against the Mughal Empire.",
    imageUrl:
      "https://img.indiaforums.com/media/800x0/63/1979-vicky-kaushal-roars-as-chhatrapati-sambhaji-maharaj-in-the-gripping-trailer-of-chhaava.webp",
    path: "/stories/sambhaji-maharaj",
  },
  {
    id: "ashoka-the-great",
    name: "Ashoka the Great",
    description: "The emperor who waged war on war itself.",
    imageUrl:
      "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/8/1/6f804b659c854fe9bb1ed946f57e7ac6",
    path: "/stories/ashoka-the-great",
  },
  {
    id: "khalsa-birth",
    name: "Khalsa Birth",
    description:
      "The birth of the Khalsa, a significant event in Sikh history.",
    imageUrl:
      "https://i.ytimg.com/vi/JWKRyRI1itU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDa5yp3sbIOIjDYps-pZAlae95pAg",
    path: "/stories/khalsa-birth",
  },
  {
    id: "maharana-pratap",
    name: "Maharana Pratap",
    description:
      "The valiant king of Mewar known for his bravery against the Mughal Empire.",
    imageUrl:
      "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/50500/67062/Maharana_Pratap_option_Fizdi_Vimanika_Arts__72204.1589018860.jpg?c=2",
    path: "/stories/maharana-pratap",
  },
  {
    id: "ramayana",
    name: "Ramayana",
    description: "An ancient Indian epic narrating the life of Prince Rama.",
    imageUrl:
      "https://i.ytimg.com/vi/ZhWieh8Y--g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_dkOBsJIwDkoHu3FLRdy6_nu5JA",
    path: "/stories/ramayana",
  },
  {
    id: "guru-granth-sahib",
    name: "Guru-Granth Sahib",
    description:
      "The holy scripture of Sikhism, containing hymns and writings of Sikh Gurus.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWn5UKzolSZW0b0B4VZBODI3U6QgaAp0PSuQ&s",
    path: "/stories/guru-granth-sahib",
  },
  {
    id: "akbar-the-great",
    name: "Akbar the Great",
    description: "The Mughal emperor known for his policy of religious tolerance.",
    imageUrl:
      "https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__6a253240-77e7-4fbb-aded-06732437ce40&w=3840&q=75",
    path: "/stories/akbar-the-great",
  },
];

const facts = [
  "The Ramayana and Mahabharata together contain over 200,000 verses.",
  "Ashoka’s edicts are among the earliest written records in Indian history.",
  "Sambhaji Maharaj was fluent in multiple languages including Sanskrit and Persian.",
  "Maharana Pratap’s horse, Chetak, is celebrated in Rajasthani folklore.",
  "The Khalsa was formed by Guru Gobind Singh in 1699.",
  "Akbar invited scholars from all religions to discuss spiritual topics in his court.",
  "Guru Granth Sahib includes writings from Hindu and Muslim saints too.",
];

// ---------- Helpers ----------
const classifyBadge = (name: string): string => {
  const n = name.toLowerCase();
  if (n.includes("ramayana") || n.includes("mahabharata")) return "Epic";
  if (n.includes("guru") || n.includes("khalsa")) return "Sikh History";
  if (n.includes("ashoka") || n.includes("akbar")) return "Emperor";
  if (n.includes("sambhaji") || n.includes("maharana")) return "Warrior";
  return "Heritage";
};

const badgeGradient = (badge: string) => {
  switch (badge) {
    case "Epic":
      return "from-pink-500 to-rose-400";
    case "Sikh History":
      return "from-emerald-500 to-green-400";
    case "Emperor":
      return "from-amber-500 to-yellow-400";
    case "Warrior":
      return "from-sky-500 to-cyan-400";
    default:
      return "from-violet-500 to-indigo-400";
  }
};

const popularityMap: Record<string, number> = {
  mahabharata: 98,
  ramayana: 96,
  "ashoka-the-great": 91,
  "akbar-the-great": 88,
  "sambhaji-maharaj": 86,
  "khalsa-birth": 84,
  "maharana-pratap": 83,
  "guru-granth-sahib": 82,
};

// ---------- Page ----------
const StoriesPage: React.FC = () => {
  const navigate = useNavigate();

  // Fact of the Day (docked on slider edge)
  const [factIndex, setFactIndex] = useState(0);
  const [factPaused, setFactPaused] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!factPaused) setFactIndex((i) => (i + 1) % facts.length);
    }, 3000);
    return () => clearInterval(id);
  }, [factPaused]);

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("heritage:favorites") || "[]");
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("heritage:favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) =>
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  // Controls
  const [query, setQuery] = useState("");
  const [badgeFilter, setBadgeFilter] = useState<string>("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Compare (new dock UI)
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [dockOpen, setDockOpen] = useState(false);
  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length === 2) return [prev[1], id];
      return [...prev, id];
    });
  };
  const removeCompare = (id: string) => setCompareIds((prev) => prev.filter((x) => x !== id));
  const openCompareDetails = () => {
    if (compareIds.length === 0) return;
    navigate(`/compare?ids=${compareIds.join(",")}`);
  };

  // Derived meta
  const storiesWithMeta = useMemo(() => {
    return storiesData.map((s) => ({
      ...s,
      badge: classifyBadge(s.name),
      popularity: popularityMap[s.id] ?? 80,
    }));
  }, []);

  // Search + filter
  const normalizedQuery = query.trim().toLowerCase();
  const filteredStories = useMemo(() => {
    let list = storiesWithMeta;
    if (badgeFilter !== "All") list = list.filter((s) => s.badge === badgeFilter);
    if (showFavoritesOnly) list = list.filter((s) => favorites.includes(s.id));
    if (!normalizedQuery) return list;
    return list.filter(
      (s) =>
        s.name.toLowerCase().includes(normalizedQuery) ||
        s.description.toLowerCase().includes(normalizedQuery)
    );
  }, [storiesWithMeta, badgeFilter, showFavoritesOnly, favorites, normalizedQuery]);

  // Trending slider
  const trending = [...storiesWithMeta].sort((a, b) => b.popularity - a.popularity).slice(0, 5);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) setSlide((s) => (s + 1) % trending.length);
    }, 3000);
    return () => clearInterval(id);
  }, [paused, trending.length]);

  const next = () => setSlide((s) => (s + 1) % trending.length);
  const prev = () => setSlide((s) => (s - 1 + trending.length) % trending.length);

  return (
    <>
      <Animation />
      <motion.div className="min-h-screen text-white">
        <Header />

        <main className="mt-21 container mx-auto px-4 md:px-6 max-w-7xl">
          

          {/* Slider with fact chip docked on top edge (half-outside, half-inside) */}
          <section
            className="relative mb-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <motion.div className="relative w-full overflow-hidden rounded-2xl border border-gray-800 shadow-2xl bg-black">
              {/* Fact chip docked: negative translate to sit across edge */}
              <motion.div className="absolute left-1/2 -translate-x-1/2 top-1 z-[2]">
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  onMouseEnter={() => setFactPaused(true)}
                  onMouseLeave={() => setFactPaused(false)}
                  aria-live="polite"
                  aria-atomic="true"
                  className="rounded-full border border-white/10 bg-black/70 backdrop-blur px-4 py-2 shadow"
                >
                  <span className="text-green-400 font-semibold">Fact of the Day:</span>{" "}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={factIndex}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-200"
                    >
                      {facts[factIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* 16:9 slider */}
              <motion.div className="relative" style={{ paddingTop: "51%" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={trending[slide].id}
                    initial={{ opacity: 0.7, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.6, scale: 0.99 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <Link to={trending[slide].path} className="block h-full w-full">
                      <img
                        src={trending[slide].imageUrl}
                        alt={trending[slide].name}
                        className="absolute inset-0 h-full w-full object-cover [object-position:center]"
                      />
                      <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
                      <motion.div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.12),transparent_15%,transparent_85%,rgba(0,0,0,0.12))]" />
                      <motion.div className="absolute bottom-7 left-6 right-6 flex items-end justify-between gap-3">
                        <motion.div className="max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                          <span
                            className={`inline-block text-xs font-semibold text-black px-2 py-1 rounded-full bg-gradient-to-r ${badgeGradient(
                              trending[slide].badge
                            )}`}
                          >
                            {trending[slide].badge}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-extrabold mt-2">
                            {trending[slide].name}
                          </h3>
                          <p className="text-gray-200 text-sm md:text-base mt-1">
                            {trending[slide].description}
                          </p>
                        </motion.div>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-black/70 text-yellow-300">
                          ★ {trending[slide].popularity}
                        </span>
                      </motion.div>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Prev/Next */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Next slide"
              >
                ›
              </button>

              {/* Dots */}
              <motion.div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {trending.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      slide === i ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    title={t.name}
                  />
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Controls */}
          <section className="mb-12 mt-6">
            <motion.div className="flex flex-col md:flex-row gap-4">
              <motion.div className="flex-1 relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search stories, e.g., Ashoka, Ramayana..."
                  className="w-full rounded-xl bg-gray-900/70 border border-gray-700 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </motion.div>
              <select
                value={badgeFilter}
                onChange={(e) => setBadgeFilter(e.target.value)}
                className="rounded-xl bg-gray-900/70 border border-gray-700 px-4 py-3 focus:ring-2 focus:ring-green-500"
              >
                <option>All</option>
                <option>Epic</option>
                <option>Emperor</option>
                <option>Sikh History</option>
                <option>Warrior</option>
                <option>Heritage</option>
              </select>
              <button
                onClick={() => setShowFavoritesOnly((v) => !v)}
                className={`rounded-xl px-4 py-3 border ${
                  showFavoritesOnly ? "border-green-500 text-green-400" : "border-gray-700 text-gray-300"
                } bg-gray-900/70 hover:bg-gray-900`}
              >
                {showFavoritesOnly ? "★ Favorites" : "☆ Favorites"}
              </button>
              <button
                onClick={openCompareDetails}
                disabled={compareIds.length === 0}
                className={`rounded-xl px-4 py-3 ${
                  compareIds.length > 0
                    ? "bg-gradient-to-r from-orange-400 to-green-500 text-black"
                    : "bg-gray-800 text-gray-400"
                }`}
                title="Open comparison details"
              >
                Compare Details
              </button>
            </motion.div>
          </section>

          {/* All Stories */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">All Stories</h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.98 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -4 }}
                className="rounded-2xl overflow-hidden bg-gray-900/70 border border-gray-800 shadow-xl flex flex-col"
              >
                <motion.div className="relative">
                  <img src={story.imageUrl} alt={story.name} className="w-full h-56 object-cover" />
                  <motion.div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-semibold text-black px-2 py-1 rounded-full bg-gradient-to-r ${badgeGradient(
                        story.badge
                      )}`}
                    >
                      {story.badge}
                    </span>
                  </motion.div>
                  <button
                    onClick={() => toggleFavorite(story.id)}
                    className="absolute top-3 right-3 text-yellow-300 hover:scale-110 transition"
                    aria-label="Toggle favorite"
                    title="Save for later"
                  >
                    {favorites.includes(story.id) ? "★" : "☆"}
                  </button>
                </motion.div>
                <motion.div className="p-6 flex-1 flex flex-col">
                  <motion.div className="h-1 w-full bg-gradient-to-r from-orange-400 via-white to-green-500 mb-3 rounded"></motion.div>
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <p className="text-gray-300 mt-2 text-sm leading-6">{story.description}</p>
                  <motion.div className="mt-auto flex items-center justify-between pt-5">
                    <Link
                      to={story.path}
                      className="text-sm text-green-400 hover:text-green-300 underline underline-offset-4"
                    >
                      Read story →
                    </Link>
                    <button
                      onClick={() => toggleCompare(story.id)}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        compareIds.includes(story.id)
                          ? "border-orange-400 text-orange-300"
                          : "border-gray-700 text-gray-300"
                      }`}
                      title="Add to compare"
                    >
                      {compareIds.includes(story.id) ? "Selected" : "Compare"}
                    </button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* NEW: Compare Dock (bottom-right). Old sticky bar removed 100%. */}
          {compareIds.length > 0 && (
            <motion.div className="fixed right-5 bottom-5 z-50">
              {/* Collapsed pill */}
              {!dockOpen && (
                <button
                  onClick={() => setDockOpen(true)}
                  className="rounded-full px-4 py-2 bg-gradient-to-r from-orange-400 to-green-500 text-black shadow-lg"
                  title="Open compare dock"
                >
                  Compare ({compareIds.length}/2)
                </button>
              )}

              {/* Expanded dock */}
              {dockOpen && (
                <motion.div className="w-[320px] rounded-2xl border border-gray-800 bg-[#0b0b0b]/95 backdrop-blur shadow-2xl p-3">
                  <motion.div className="flex items-center justify-between mb-2">
                    <motion.div className="text-sm text-gray-200">Compare selection</motion.div>
                    <button
                      onClick={() => setDockOpen(false)}
                      className="text-gray-300 hover:text-white text-sm"
                      aria-label="Close compare dock"
                    >
                      ✕
                    </button>
                  </motion.div>

                  <motion.div className="space-y-2">
                    {compareIds.map((id) => {
                      const s = storiesWithMeta.find((x) => x.id === id)!;
                      return (
                        <motion.div
                          key={id}
                          className="flex items-center gap-2 rounded-xl bg-gray-900/70 border border-gray-800 p-2"
                        >
                          <img src={s.imageUrl} alt={s.name} className="w-10 h-10 object-cover rounded-lg" />
                          <motion.div className="flex-1 min-w-0">
                            <motion.div className="truncate text-sm">{s.name}</motion.div>
                            <motion.div className="text-[11px] text-gray-400">{s.badge}</motion.div>
                          </motion.div>
                          <button
                            onClick={() => removeCompare(id)}
                            className="text-xs text-gray-300 border border-gray-700 rounded-md px-2 py-1 hover:bg-gray-800"
                          >
                            Remove
                          </button>
                        </motion.div>
                      );
                    })}
                    {compareIds.length < 2 && (
                      <motion.div className="text-[11px] text-gray-400">
                        Select {2 - compareIds.length} more to enable full comparison.
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.div className="mt-3 flex gap-2">
                    <button
                      onClick={() => setCompareIds([])}
                      className="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-900"
                    >
                      Clear
                    </button>
                    <button
                      onClick={openCompareDetails}
                      disabled={compareIds.length === 0}
                      className={`flex-1 text-sm px-3 py-2 rounded-xl ${
                        compareIds.length > 0
                          ? "bg-gradient-to-r from-orange-400 to-green-500 text-black"
                          : "bg-gray-800 text-gray-500"
                      }`}
                    >
                      Open Details
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

export default StoriesPage;
