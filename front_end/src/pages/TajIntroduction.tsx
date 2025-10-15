import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import NavbarTaj from "../components/NavbarTaj";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utility components
const SectionTitle: React.FC<{ title: string; subtitle?: string; id?: string }> = ({ title, subtitle, id }) => (
  <div id={id} className="flex items-end justify-between gap-4 mb-6 scroll-mt-28">
    <h2 className="font-serif text-3xl md:text-4xl text-amber-300">{title}</h2>
    {subtitle && <p className="text-gray-400 text-sm md:text-base">{subtitle}</p>}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs tracking-wide">
    {children}
  </span>
);

const FeatureCard: React.FC<{ title: string; bullets: { text: string; img?: string }[] }> = ({ title, bullets }) => (
  <motion.div whileHover={{ y: -4 }} className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-amber-700/30 shadow-lg">
    <h3 className="font-serif text-xl text-amber-200 mb-4">{title}</h3>
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
        <p className="text-xs uppercase tracking-wider text-amber-300 mb-3">On this page</p>
        <ul className="space-y-2 text-sm">
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  active === it.id ? "bg-amber-400/10 text-amber-300" : "text-gray-300 hover:text-amber-200"
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

const TajIntroduction: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "https://rishikeshdaytour.com/blog/wp-content/uploads/2024/09/Ticket-To-Taj-Mahal.jpg",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/70/4d/c0.jpg",
    "https://www.thoughtco.com/thmb/mvzDYqXzP4T_D7JfMTsWm5GgDZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg",
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
      title: "Scale & Workforce",
      detail: "Over 20,000 artisans—masons, carvers, inlayers—worked under imperial ateliers.",
      img: images[0],
    },
    {
      title: "Color Phenomenon",
      detail: "The marble shifts hue at dawn, noon, dusk, and under moonlight due to scattering and polish.",
      img: images[1],
    },
    {
      title: "Material & Inlay",
      detail: "Makrana marble with pietra dura floral inlay using semi-precious stones.",
      img: images[2],
    },
    {
      title: "UNESCO Status",
      detail: "Inscribed as a World Heritage Site in 1983 for outstanding universal value.",
      img: images[0],
    },
    {
      title: "Purpose & Patronage",
      detail: "Commissioned by Shah Jahan in memory of Mumtaz Mahal; work spanned the 1630s–1640s.",
      img: images[1],
    },
  ];

  const tocItems = [
    { id: "intro", label: "Introduction" },
    { id: "facts", label: "Ordered Facts" },
    { id: "architecture", label: "Architecture" },
    { id: "craft", label: "Craft & Calligraphy" },
    { id: "complex", label: "The Complex" },
    { id: "timeline", label: "Timeline" },
    { id: "myths", label: "Myths vs Evidence" },
    { id: "visit", label: "Visiting Info" },
    { id: "legacy", label: "Legacy" },
  ];

  return (
    <>
      <NavbarTaj />

      {/* Background Gradient + Glow */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />
      <div
        className="fixed inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(600px 300px at 15% 15%, #f59e0b22 0%, transparent 60%),radial-gradient(800px 400px at 85% 85%, #f59e0b1a 0%, transparent 60%)",
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
                          <img src={img} alt={`Taj Mahal ${idx + 1}`} className="w-full h-[420px] md:h-[520px] object-cover" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>

                <div className="lg:col-span-2 flex flex-col bg-black/30 backdrop-blur-md rounded-xl border border-amber-700/30 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Mughal</Badge>
                    <Badge>17th c.</Badge>
                    <Badge>UNESCO</Badge>
                    <Badge>Agra</Badge>
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl text-amber-300 mb-3">Taj Mahal</h1>
                  <p className="text-base md:text-lg leading-relaxed text-gray-200">
                    A white marble mausoleum renowned for symmetry, charbagh gardens, and exquisite pietra dura, commissioned by Shah Jahan for Mumtaz Mahal.
                  </p>
                  {showMore && (
                    <p className="text-base leading-relaxed text-gray-300 mt-3">
                      The complex aligns on a precise axis with a raised marble plinth, flanked by minarets, a mosque, and the jawab, overlooking the Yamuna.
                    </p>
                  )}
                  <button onClick={() => setShowMore(!showMore)} className="self-start mt-4 px-4 py-2 rounded-lg border border-amber-600/40 text-amber-300 hover:bg-amber-500/10 transition">
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
                  <li key={i} className="bg-black/30 backdrop-blur-md rounded-2xl border border-amber-700/30 p-5">
                    <div className="flex items-center gap-4 mb-3">
                      <img src={f.img} alt="" className="w-16 h-16 rounded-lg object-cover border border-white/10" />
                      <h3 className="font-serif text-lg text-amber-200">{f.title}</h3>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed">{f.detail}</p>
                  </li>
                ))}
              </ol>
            </motion.section>

            {/* ARCHITECTURE with HOTSPOTS */}
            <motion.section id="architecture" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Architectural Highlights" subtitle="Hover hotspots to reveal terms" />

              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img src={images[0]} alt="Taj architecture" className="w-full h-[380px] md:h-[460px] object-cover" />
                {/* Hotspots */}
                {[
                  { x: "48%", y: "24%", label: "Onion Dome" },
                  { x: "64%", y: "35%", label: "Iwan (central arch)" },
                  { x: "86%", y: "70%", label: "Minaret" },
                  { x: "20%", y: "75%", label: "Marble Plinth" },
                ].map((h, i) => (
                  <div key={i} className="absolute" style={{ left: h.x, top: h.y }}>
                    <div className="group relative">
                      <span className="block w-3 h-3 rounded-full bg-amber-400 ring-2 ring-amber-300/40 cursor-pointer"></span>
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 rounded-md bg-black/70 text-amber-200 text-xs opacity-0 group-hover:opacity-100 transition">
                        {h.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <FeatureCard
                  title="Symmetry & Axis"
                  bullets={[
                    { text: "Bilateral symmetry along the garden axis." },
                    { text: "Central iwan leading to the octagonal plan." },
                    { text: "Minarets slightly outward for visual poise." },
                  ]}
                />
                <FeatureCard
                  title="Dome Proportions"
                  bullets={[
                    { text: "Bulbous dome with lotus finial." },
                    { text: "Double-shell engineering for height and interior." },
                    { text: "Balanced drum-to-dome ratio." },
                  ]}  
                />
                <FeatureCard
                  title="Charbagh Garden"
                  bullets={[
                    { text: "Four-part garden with water channels." },
                    { text: "Reflecting pool for axial vistas." },
                    { text: "Paradisiacal symbolism in layout." },
                  ]}  
                />
              </div>
            </motion.section>

            {/* CRAFT & CALLIGRAPHY (with Shah Jahan painting) */}
            <motion.section id="craft" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Craft & Calligraphy" subtitle="Material, inlay, and imperial aesthetics" />
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Makrana Marble"
                  bullets={[
                    { text: "Translucent white marble with high polish.", img: images[2] },
                    { text: "Subtle color play through the day." },
                  ]}
                />
                <FeatureCard
                  title="Pietra Dura Inlay"
                  bullets={[
                    { text: "Semi-precious stones in floral motifs.", img: images[0] },
                    { text: "Exacting stone-fitting craftsmanship." },
                  ]}  
                />
                <FeatureCard
                  title="Calligraphy"
                  bullets={[
                    { text: "Qur’anic inscriptions in black marble inlay.", img: "https://www.taj-mahal.net/newtaj/textMM/images/calligraphy8.jpg" },
                    { text: "Optical scaling on the grand portal." },
                  ]}
                />
                <FeatureCard
                  title="Imperial Imagery"
                  bullets={[
                    { text: "Shah Jahan’s courtly aesthetics influenced ornament.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kDgTPqcRL4Amo0KP9YeUJPQIOcN7poAUqA&s" },
                    { text: "Refined balance between restraint and luxury." },
                  ]}
                />
              </div>
            </motion.section>

            {/* THE COMPLEX */}
            <motion.section id="complex" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="The Complex" subtitle="Components beyond the mausoleum" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FeatureCard
                  title="Mausoleum Interior"
                  bullets={[
                    { text: "Cenotaphs enclosed by marble jali screens." },
                    { text: "True tombs lie in the lower chamber." },
                  ]}  
                />
                <FeatureCard
                  title="Mosque & Jawab"
                  bullets={[
                    { text: "Functional mosque to the west." },
                    { text: "Symmetry-balancing jawab to the east." },
                  ]}
                />
                <FeatureCard
                  title="Gateways & Terrace"
                  bullets={[
                    { text: "Grand southern gateway (Darwaza-i-Rauza)." },
                    { text: "Riverfront terrace along the Yamuna." },
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
                    { y: "1631", t: "Commission for Mumtaz" },
                    { y: "1630s–40s", t: "Construction & ornament" },
                    { y: "1648", t: "Main works culminate" },
                    { y: "1983", t: "UNESCO inscription" },
                  ].map((n, i) => (
                    <div key={i} className="bg-black/30 backdrop-blur-md p-5 rounded-xl border border-amber-700/30">
                      <p className="text-amber-300 font-semibold">{n.y}</p>
                      <p className="text-gray-200 text-sm mt-1">{n.t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* MYTHS vs EVIDENCE */}
            <motion.section id="myths" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Myths vs Evidence" subtitle="Separate lore from scholarship" />
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Common Claims"
                  bullets={[
                    { text: "A 'Black Taj' planned across the Yamuna." },
                    { text: "Artisans' hands were severed after completion." },
                  ]}
                />
                <FeatureCard
                  title="Evidence-Based"
                  bullets={[
                    { text: "No primary evidence for a Black Taj project." },
                    { text: "Punitive legend is unsubstantiated by records." },
                  ]}
                />
              </div>
            </motion.section>

            {/* VISITING INFO with place-card cues */}
            <motion.section id="visit" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Visiting Information" subtitle="Plan a better visit" />
              <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                  title="Essentials"
                  bullets={[
                    { text: "Best light at sunrise/sunset; closed on Fridays." },
                    { text: "Pre-book tickets; shoe covers for inner platform." },
                  ]}
                />
                <FeatureCard
                  title="Accessibility"
                  bullets={[
                    { text: "Wheelchair-friendly routes; accessible restrooms." },
                    { text: "Assistive hearing loop available." },
                  ]}
                />
                <FeatureCard
                  title="On-Site & Rules"
                  bullets={[
                    { text: "No drones; restricted items; follow signage." },
                    { text: "Respect queues and conservation zones." },
                  ]}
                />
              </div>
            </motion.section>

            {/* LEGACY with art image */}
            <motion.section id="legacy" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionTitle title="Legacy" subtitle="A global icon in arts and design" />
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  title="Symbol & Influence"
                  bullets={[
                    { text: "Enduring symbol of love and imperial craftsmanship.", img: images[2] },
                    { text: "Benchmark in architecture & conservation pedagogy." },
                  ]}
                />
                <FeatureCard
                  title="In Media"
                  bullets={[
                    { text: "Iconic subject across photography, cinema, and literature.", img: images[0] },
                    { text: "Recurring motif in travel and visual culture." },
                  ]}
                />
              </div>
            </motion.section>

            {/* PARALLAX-LIKE HIGHLIGHT */}
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl border border-white/10">
              <img src={images[0]} alt="Taj Highlight" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-4xl font-serif text-amber-300">Symbol of Eternal Love</h3>
                  <p className="text-gray-200 mt-2 max-w-2xl text-sm md:text-base">Geometry, light, and material converge—from garden axis to marble jalis.</p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </>
  );
};

export default TajIntroduction;
