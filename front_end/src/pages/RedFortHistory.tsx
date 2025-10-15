import React from "react";
import { motion } from "framer-motion";
import NavbarRedFort from "../components/NavbarRedFort";

const RedFortHistory: React.FC = () => {
  const timelineEvents = [
    {
      year: "1638",
      title: "Capital Relocation & Commission",
      desc: "Shah Jahan decides to shift his capital from Agra to Delhi and commissions the Red Fort as the centerpiece of Shahjahanabad.",
      img: "https://images.unsplash.com/photo-1547300848-441153a7bf02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      year: "1638–1648",
      title: "Fort Construction",
      desc: "Over 10 years, the massive red sandstone fortress-palace is built under architect Ustad Ahmad Lahori, incorporating Persian, Timurid, and Indian styles.",
      img: "https://media.istockphoto.com/id/692983144/photo/red-fort-delhi-a-historic-red-sandstone-fort-city-in-delhi-designated-as-the-unesco-world.jpg?s=612x612&w=0&k=20&c=2yX0f74BE6rQOFXhinM4fxy7U0J7uL1AeuJgFKwSeMg=",
    },
    {
      year: "1739",
      title: "Nadir Shah's Invasion",
      desc: "Persian emperor Nadir Shah defeats the Mughal army and plunders the Red Fort, seizing the legendary Peacock Throne and vast treasures.",
      img: "https://thumbs.dreamstime.com/b/throne-shah-jahan-diwan-i-hall-audience-red-fort-where-mughal-emperor-his-successors-heard-general-public-163750489.jpg",
    },
    {
      year: "2007",
      title: "UNESCO Heritage Status",
      desc: "The Red Fort Complex is inscribed as a UNESCO World Heritage Site, recognized for its architectural innovation and historical significance.",
      img: "https://images.unsplash.com/photo-1547300848-441153a7bf02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D",
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
      <NavbarRedFort />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-5xl mx-auto px-6 pb-28 text-gray-300 space-y-12">
        
        {/* Header */}
        <motion.section {...fadeIn}>
          <h1 className="font-serif text-4xl md:text-5xl text-red-300 mb-4">Historical Background</h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            The Red Fort stands as a monument to Mughal imperial power and architectural mastery. Commissioned by Emperor Shah Jahan as the palace fortress of his new capital Shahjahanabad, its construction represented the zenith of Mughal creativity and refinement.
          </p>
        </motion.section>

        {/* Timeline */}
        <motion.section {...fadeIn}>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-serif text-3xl text-red-300">Timeline</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent"></div>
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
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-red-400 ring-4 ring-red-400/20"></div>
                  <span className="font-serif text-2xl text-red-300">{event.year}</span>
                </div>

                {/* Content Card */}
                <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-5 md:p-6 flex gap-4">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="hidden sm:block w-20 h-20 rounded-lg object-cover border border-white/10"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-red-200 mb-2">{event.title}</h3>
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
            <h2 className="font-serif text-3xl text-red-300">Construction & Workforce</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-3">Workforce Scale</h3>
              <p className="text-gray-200 leading-relaxed">
                The fort's construction took <strong className="text-red-300">10 years (1638-1648)</strong> under the supervision of Shah Jahan himself. Thousands of skilled artisans, masons, stonecutters, and craftsmen from across the Mughal Empire contributed to this architectural marvel.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-3">Material Sourcing</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span><strong className="text-red-300">Red sandstone</strong> for massive walls (75 feet high)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span><strong className="text-red-300">White marble</strong> for palace pavilions and inlay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span><strong className="text-red-300">Precious stones</strong> for pietra dura decoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span><strong className="text-red-300">Gold and silver</strong> for interior ornamentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
                  <span><strong className="text-red-300">Yamuna River water</strong> feeding the moats</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Patron & Purpose */}
        <motion.section {...fadeIn}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-serif text-3xl text-red-300">Patron & Purpose</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-6">
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Emperor <strong className="text-red-300">Shah Jahan</strong> commissioned the Red Fort as the centerpiece of his new capital, Shahjahanabad (Old Delhi). The fort was designed by <strong className="text-red-300">Ustad Ahmad Lahori</strong>, the same architect who created the Taj Mahal.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                The Red Fort served as the main residence of Mughal emperors for nearly 200 years. Its design reflects the Islamic paradise concept—with the Nahr-i-Behisht (Stream of Paradise) flowing through marble pavilions, symbolizing heaven on earth.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-white/10 h-64 md:h-auto">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kDgTPqcRL4Amo0KP9YeUJPQIOcN7poAUqA&s"
                alt="Shah Jahan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-sm text-red-200">Emperor Shah Jahan (r. 1628–1658)</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Historical Events */}
        <motion.section {...fadeIn}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-serif text-3xl text-red-300">Key Historical Events</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-3">Mughal Era (1648–1857)</h3>
              <p className="text-gray-200 leading-relaxed">
                The fort served as the imperial residence and administrative center for Mughal emperors. Aurangzeb added the <strong className="text-red-300">Moti Masjid (Pearl Mosque)</strong> to the complex. In 1739, Nadir Shah's invasion resulted in the plundering of treasures including the Peacock Throne.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-3">Independence Symbol (1947–Present)</h3>
              <p className="text-gray-200 leading-relaxed">
                On <strong className="text-red-300">August 15, 1947</strong>, Prime Minister Jawaharlal Nehru hoisted India's first national flag at the Red Fort's Lahori Gate. This tradition continues annually on Independence Day, making it a powerful symbol of Indian sovereignty.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Quote / Legacy */}
        <motion.section {...fadeIn}>
          <div className="bg-gradient-to-br from-red-900/10 to-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-8 md:p-10">
            <blockquote className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-red-200 leading-relaxed italic mb-4">
                "If there is a paradise on earth, it is here, it is here."
              </p>
              <cite className="text-gray-400 text-sm">— Couplet inscribed repeatedly in the Red Fort palaces</cite>
            </blockquote>
          </div>
        </motion.section>

      </main>
    </>
  );
};

export default RedFortHistory;
