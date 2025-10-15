import React from "react";
import { motion } from "framer-motion";
import NavbarTaj from "../components/NavbarTaj";

const TajHistory: React.FC = () => {
  const timelineEvents = [
    {
      year: "1631",
      title: "The Commission",
      desc: "Shah Jahan commissions the mausoleum following the death of his beloved wife, Mumtaz Mahal, during childbirth.",
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/70/4d/c0.jpg",
    },
    {
      year: "1632–1643",
      title: "Mausoleum Construction",
      desc: "The main tomb structure is built over ~12 years with white Makrana marble and intricate pietra dura inlay.",
      img: "https://miro.medium.com/0*IgqcmE_wOVvDqsgN.",
    },
    {
      year: "1643–1653",
      title: "Complex Completion",
      desc: "Surrounding structures—mosque, jawab, gateways, and charbagh gardens—are finalized.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    },
    {
      year: "1983",
      title: "UNESCO Heritage Status",
      desc: "The Taj Mahal is inscribed as a UNESCO World Heritage Site, recognized for its outstanding universal value.",
      img: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2017/12/The-Taj-Mahal-1.jpg",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <NavbarTaj />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-5xl mx-auto px-6 pb-28 text-gray-300 space-y-12">
        
        {/* Header */}
        <motion.section {...fadeIn}>
          <h1 className="font-serif text-4xl md:text-5xl text-amber-300 mb-4">Historical Background</h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            The Taj Mahal stands as a testament to Mughal architectural brilliance and imperial devotion. Commissioned by Emperor Shah Jahan in memory of Mumtaz Mahal, its construction spanned over two decades and drew artisans from across Asia.
          </p>
        </motion.section>

        {/* Timeline */}
        <motion.section {...fadeIn}>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-serif text-3xl text-amber-300">Timeline</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-700/40 to-transparent"></div>
          </div>

          <div className="space-y-6">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="grid md:grid-cols-[140px_1fr] gap-6 items-start"
              >
                {/* Year Badge */}
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-amber-400/20"></div>
                  <span className="font-serif text-2xl text-amber-300">{event.year}</span>
                </div>

                {/* Content Card */}
                <div className="bg-black/30 backdrop-blur-md border border-amber-700/30 rounded-xl p-5 md:p-6 flex gap-4">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="hidden sm:block w-20 h-20 rounded-lg object-cover border border-white/10"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-amber-200 mb-2">{event.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Construction & Workforce */}
        <motion.section {...fadeIn}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-serif text-3xl text-amber-300">Construction & Workforce</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-700/40 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-md border border-amber-700/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-amber-200 mb-3">Workforce Scale</h3>
              <p className="text-gray-200 leading-relaxed">
                Historical records suggest over <strong className="text-amber-300">20,000 workers</strong> contributed—including masons, stonecutters, inlayers, carvers, painters, and calligraphers from across the Mughal Empire, Persia, and the Ottoman lands.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-amber-700/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-amber-200 mb-3">Material Sourcing</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  <span><strong className="text-amber-300">Makrana marble</strong> from Rajasthan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  <span><strong className="text-amber-300">Jasper</strong> from Punjab</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  <span><strong className="text-amber-300">Jade & crystal</strong> from China</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  <span><strong className="text-amber-300">Turquoise</strong> from Tibet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                  <span><strong className="text-amber-300">Lapis lazuli</strong> from Afghanistan</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Patron & Purpose */}
        <motion.section {...fadeIn}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-serif text-3xl text-amber-300">Patron & Purpose</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-700/40 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-black/30 backdrop-blur-md border border-amber-700/30 rounded-xl p-6">
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Emperor <strong className="text-amber-300">Shah Jahan</strong> envisioned the Taj Mahal as a mausoleum of unparalleled beauty—a physical embodiment of his love for <strong className="text-amber-300">Mumtaz Mahal</strong>, who died during the birth of their 14th child in 1631.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Its perfect symmetry, celestial alignment, and paradisiacal garden layout reflect the Mughal ideal of heaven on Earth. The monument became a monumental expression of imperial devotion, grief, and aesthetic ambition.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-white/10 h-64 md:h-auto">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQF6Xbk_5uSN8NTozz3b3u4Sg44n4Mwvkqfw&s"
                alt="Shah Jahan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-sm text-amber-200">Emperor Shah Jahan (r. 1628–1658)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quote / Legacy */}
        <motion.section {...fadeIn}>
          <div className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-md border border-amber-700/30 rounded-xl p-8 md:p-10">
            <blockquote className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-amber-200 leading-relaxed italic mb-4">
                "A teardrop on the cheek of time."
              </p>
              <cite className="text-gray-400 text-sm">— Attributed to Rabindranath Tagore</cite>
            </blockquote>
          </div>
        </motion.section>

      </main>
    </>
  );
};

export default TajHistory;
