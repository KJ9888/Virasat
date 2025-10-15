import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import NavbarRedFort from "../components/NavbarRedFort";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utility components
const SectionTitle: React.FC<{ title: string; subtitle?: string; id?: string }> = ({ title, subtitle, id }) => (
  <div id={id} className="flex items-end justify-between gap-4 mb-6 scroll-mt-28">
    <h2 className="font-serif text-3xl md:text-4xl text-red-300">{title}</h2>
    {subtitle && <p className="text-gray-400 text-sm md:text-base">{subtitle}</p>}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-300 border border-red-500/30 text-xs tracking-wide">
    {children}
  </span>
);

const FeatureCard: React.FC<{ title: string; bullets: { text: string; img?: string }[] }> = ({ title, bullets }) => (
  <motion.div whileHover={{ y: -4 }} className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-red-700/30 shadow-lg">
    <h3 className="font-serif text-xl text-red-200 mb-4">{title}</h3>
    <div className="space-y-4">
      {bullets.map((b, i) => (
        <div key={i} className="flex items-start gap-3">
          {b.img && (
            <img src={b.img} alt="" className="w-14 h-14 rounded-lg object-cover border border-white/10" />
          )}
          <p className="text-gray-200 text-sm leading-relaxed">{b.text}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const TOC: React.FC<{ items: { id: string; label: string }[] }> = ({ items }) => {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);
  return (
    <nav className="sticky top-24 hidden lg:block w-64 self-start">
      <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4">
        <p className="text-xs uppercase tracking-wider text-red-300 mb-3">On this page</p>
        <ul className="space-y-2 text-sm">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  active === it.id ? "bg-red-400/10 text-red-300" : "text-gray-300 hover:text-red-200"
                }`}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const RedFortIntroduction: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1547300848-441153a7bf02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/692983144/photo/red-fort-delhi-a-historic-red-sandstone-fort-city-in-delhi-designated-as-the-unesco-world.jpg?s=612x612&w=0&k=20&c=2yX0f74BE6rQOFXhinM4fxy7U0J7uL1AeuJgFKwSeMg=",
    "https://thumbs.dreamstime.com/b/throne-shah-jahan-diwan-i-hall-audience-red-fort-where-mughal-emperor-his-successors-heard-general-public-163750489.jpg",
  ];

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4800,
      pauseOnHover: true,
      arrows: false,
      adaptiveHeight: true,
      appendDots: (dots: React.ReactNode) => (
        <div>
          <ul className="!mt-4 !mb-0">{dots}</ul>
        </div>
      ),
    }),
    []
  );

  // Ordered facts with images
  const orderedFacts: { title: string; detail: string; img: string }[] = [
    {
      title: "Scale & Construction",
      detail: "Spread across 254 acres with walls rising up to 33 meters high, built over 10 years (1638-1648).",
      img: images[0],
    },
    {
      title: "Red Sandstone Marvel",
      detail: "Named for its massive red sandstone walls with white marble inlays and decorative carvings.",
      img: images[1],
    },
    {
      title: "Architect & Design",
      detail: "Designed by Ustad Ahmad Lahori, the same architect who created the Taj Mahal.",
      img: images[2],
    },
    {
      title: "UNESCO Heritage",
      detail: "Inscribed as a World Heritage Site in 2007 for its architectural and historical significance.",
      img: images[0],
    },
    {
      title: "Independence Symbol",
      detail: "Every Independence Day, India's Prime Minister hoists the national flag at Lahori Gate.",
      img: images[1],
    },
  ];

  const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "facts", label: "Ordered Facts" },
    { id: "architecture", label: "Architecture" },
    { id: "structures", label: "Key Structures" },
    { id: "complex", label: "The Complex" },
    { id: "timeline", label: "Timeline" },
    { id: "legends", label: "Legends & History" },
    { id: "visit", label: "Visiting Info" },
    { id: "legacy", label: "Legacy" },
  ];

  return (
    <>
      <NavbarRedFort />

      {/* Background Gradient + Glow */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />
      <div
        className="fixed inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(600px 300px at 15% 15%, #dc262622 0%, transparent 60%),radial-gradient(800px 400px at 85% 85%, #dc26261a 0%, transparent 60%)",
        }}
      />

      <main className="pt-24 md:pt-28 max-w-7xl mx-auto px-6 pb-28 text-gray-300">
        <div className="flex gap-8">
          {/* Sticky TOC (desktop) */}
          <TOC items={tocItems} />

          <div className="flex-1 space-y-16">
            {/* HERO */}
            <motion.section ref={heroRef} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="grid lg:grid-cols-5 gap-6 items-stretch">
                <div className="lg:col-span-3">
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <Slider {...sliderSettings}>
                      {images.map((img, idx) => (
                        <div key={idx}>
                          <img src={img} alt={`Red Fort ${idx + 1}`} className="w-full h-[420px] md:h-[520px] object-cover" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                <div className="lg:col-span-2 flex flex-col bg-black/30 backdrop-blur-md rounded-xl border border-red-700/30 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Mughal</Badge>
                    <Badge>17th c.</Badge>
                    <Badge>UNESCO</Badge>
                    <Badge>Delhi</Badge>
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl text-red-300 mb-3">Red Fort (Lal Qila)</h1>
                  <p className="text-base md:text-lg leading-relaxed text-gray-200">
                    A massive red sandstone fortress-palace symbolizing Mughal power, commissioned by Shah Jahan as the centerpiece of Shahjahanabad.
                  </p>
                  {showMore && (
                    <p className="text-base leading-relaxed text-gray-300 mt-3">
                      The complex blends Persian, Timurid, and Indian styles with palaces, halls, gardens, and the iconic Peacock Throne chamber.
                    </p>
                  )}
                  <button onClick={() => setShowMore(!showMore)} className="self-start mt-4 px-4 py-2 rounded-lg border border-red-600/40 text-red-300 hover:bg-red-500/10 transition">
                    {showMore ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            </motion.section>

            {/* ORDERED FACTS */}
            <motion.section id="facts" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Ordered Facts" subtitle="Most-requested quick knowledge" />
              <ol className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 list-decimal list-inside">
                {orderedFacts.map((f, i) => (
                  <li key={i} className="bg-black/30 backdrop-blur-md rounded-2xl border border-red-700/30 p-5">
                    <div className="flex items-center gap-4 mb-3">
                      <img src={f.img} alt="" className="w-16 h-16 rounded-lg object-cover border border-white/10" />
                      <h3 className="font-serif text-lg text-red-200">{f.title}</h3>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed">{f.detail}</p>
                  </li>
                ))}
              </ol>
            </motion.section>

            {/* ARCHITECTURE with HOTSPOTS */}
            <motion.section id="architecture" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Architectural Highlights" subtitle="Hover hotspots to reveal features" />

              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img src={images[0]} alt="Red Fort architecture" className="w-full h-[380px] md:h-[460px] object-cover" />
                {/* Hotspots */}
                {[
                  { x: "20%", y: "35%", label: "Lahori Gate" },
                  { x: "48%", y: "45%", label: "Red Sandstone Walls" },
                  { x: "72%", y: "30%", label: "Bastions" },
                  { x: "60%", y: "70%", label: "Charbagh Layout" },
                ].map((h, i) => (
                  <div key={i} className="absolute" style={{ left: h.x, top: h.y }}>
                    <div className="group relative">
                      <span className="block w-3 h-3 rounded-full bg-red-400 ring-2 ring-red-300/40 cursor-pointer"></span>
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 rounded-md bg-black/70 text-red-200 text-xs opacity-0 group-hover:opacity-100 transition">
                        {h.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <FeatureCard
                  title="Fortification & Layout"
                  bullets={[
                    { text: "Asymmetric octagonal plan enclosing Salimgarh Fort." },
                    { text: "Two main gates: Lahori and Delhi, with barbicans." },
                    { text: "Massive walls up to 33 meters high." },
                  ]}
                />
                <FeatureCard
                  title="Material Fusion"
                  bullets={[
                    { text: "Red sandstone walls with white marble inlays." },
                    { text: "Islamic geometric patterns with Hindu floral motifs." },
                    { text: "Persian charbagh garden design." },
                  ]}
                />
                <FeatureCard
                  title="Architectural Style"
                  bullets={[
                    { text: "Blend of Persian, Timurid, and Indian elements." },
                    { text: "Courtyards aligned along central axis." },
                    { text: "Peak of Mughal architectural innovation." },
                  ]}
                />
              </div>
            </motion.section>

            {/* KEY STRUCTURES */}
            <motion.section id="structures" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Key Structures" subtitle="Palaces, halls, and imperial chambers" />
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Diwan-i-Aam"
                  bullets={[
                    { text: "Hall of Public Audience with elevated throne.", img: images[2] },
                    { text: "Emperor addressed public grievances here." },
                  ]}
                />
                <FeatureCard
                  title="Diwan-i-Khas"
                  bullets={[
                    { text: "Hall of Private Audience for courtiers and dignitaries.", img: images[0] },
                    { text: "Once housed the legendary Peacock Throne." },
                  ]}
                />
                <FeatureCard
                  title="Rang Mahal"
                  bullets={[
                    { text: "Palace of Colors for royal wives.", img: images[1] },
                    { text: "Featured Nahr-i-Bihisht (Stream of Paradise)." },
                  ]}
                />
                <FeatureCard
                  title="Moti Masjid"
                  bullets={[
                    { text: "Pearl Mosque built by Aurangzeb in white marble.", img: images[2] },
                    { text: "Private mosque for emperor's use." },
                  ]}
                />
              </div>
            </motion.section>

            {/* THE COMPLEX */}
            <motion.section id="complex" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="The Complex" subtitle="Beyond the main structures" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  title="Hammams (Royal Baths)"
                  bullets={[
                    { text: "Luxurious bathhouses with intricate floral designs." },
                    { text: "Advanced water heating systems." },
                  ]}
                />
                <FeatureCard
                  title="Naubat Khana"
                  bullets={[
                    { text: "Music Gallery where musicians played for emperor." },
                    { text: "Ornate carvings and elevated position." },
                  ]}
                />
                <FeatureCard
                  title="Gardens & Pavilions"
                  bullets={[
                    { text: "Charbagh gardens with water channels." },
                    { text: "Lush courtyards and open spaces." },
                  ]}
                />
              </div>
            </motion.section>

            {/* TIMELINE STRIP */}
            <motion.section id="timeline" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Timeline" subtitle="Key phases at a glance" />
              <div className="relative overflow-x-auto">
                <div className="min-w-[700px] grid grid-cols-4 gap-6">
                  {[
                    { y: "1638", t: "Construction begins by Shah Jahan" },
                    { y: "1648", t: "Fort completed after 10 years" },
                    { y: "1739", t: "Nadir Shah plunders Peacock Throne" },
                    { y: "2007", t: "UNESCO World Heritage inscription" },
                  ].map((n, i) => (
                    <div key={i} className="bg-black/30 backdrop-blur-md p-5 rounded-xl border border-red-700/30">
                      <p className="text-red-300 font-semibold">{n.y}</p>
                      <p className="text-gray-200 text-sm mt-1">{n.t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* LEGENDS & HISTORY */}
            <motion.section id="legends" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Legends & History" subtitle="Tales from three centuries" />
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="The Peacock Throne"
                  bullets={[
                    { text: "Legendary gem-encrusted throne stolen by Nadir Shah in 1739." },
                    { text: "Symbolized Mughal wealth and imperial power." },
                  ]}
                />
                <FeatureCard
                  title="Independence Connection"
                  bullets={[
                    { text: "First flag hoisted by Nehru on August 15, 1947." },
                    { text: "Annual tradition of Prime Minister's address." },
                  ]}
                />
              </div>
            </motion.section>

            {/* VISITING INFO */}
            <motion.section id="visit" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Visiting Information" subtitle="Plan your visit" />
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Essentials"
                  bullets={[
                    { text: "Open daily except Mondays; best visited morning or evening." },
                    { text: "Light & Sound show available in evenings." },
                  ]}
                />
                <FeatureCard
                  title="Accessibility"
                  bullets={[
                    { text: "Wheelchair-accessible pathways available." },
                    { text: "Facilities for differently-abled visitors." },
                  ]}
                />
                <FeatureCard
                  title="Guidelines"
                  bullets={[
                    { text: "No photography inside certain structures." },
                    { text: "Respect conservation zones and signage." },
                  ]}
                />
              </div>
            </motion.section>

            {/* LEGACY */}
            <motion.section id="legacy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Legacy" subtitle="Symbol of Mughal grandeur and Indian sovereignty" />
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Architectural Influence"
                  bullets={[
                    { text: "Benchmark in Mughal fortress-palace design.", img: images[0] },
                    { text: "Inspired later Indo-Islamic architecture." },
                  ]}
                />
                <FeatureCard
                  title="Cultural Icon"
                  bullets={[
                    { text: "Symbol of Indian independence and national pride.", img: images[1] },
                    { text: "Featured in cinema, literature, and tourism." },
                  ]}
                />
              </div>
            </motion.section>

            {/* PARALLAX-LIKE HIGHLIGHT */}
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl border border-white/10">
              <img src={images[1]} alt="Red Fort Highlight" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-4xl font-serif text-red-300">Symbol of Mughal Power</h3>
                  <p className="text-gray-200 mt-2 max-w-2xl text-sm md:text-base">From imperial grandeur to independence—red walls that witnessed three centuries of history.</p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  );
};

export default RedFortIntroduction;
