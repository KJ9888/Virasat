import React from "react";
import { motion } from "framer-motion";
import NavbarRedFort from "../components/NavbarRedFort";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
} as const;

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-sm">
    <span className="text-red-300 font-medium">{label}: </span>
    <span className="text-gray-200">{value}</span>
  </div>
);

const VideoCard: React.FC<{ title: string; embedUrl: string }> = ({ title, embedUrl }) => (
  <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/20">
    <iframe
      title={title}
      src={embedUrl}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full aspect-video"
    />
  </div>
);

const RedFortVirtualTour: React.FC = () => {
  return (
    <>
      <NavbarRedFort />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-6xl mx-auto px-6 pb-28 text-gray-300 space-y-10">
        {/* Header band */}
        <motion.section {...fade}>
          <div className="rounded-2xl border border-red-700/30 bg-black/30 backdrop-blur-md p-5 md:p-6">
            <h1 className="font-serif text-4xl md:text-5xl text-red-300">Virtual Tour</h1>
            <p className="text-lg text-gray-200 mt-2 max-w-3xl">
              Explore a 360° Street View of the Red Fort and browse curated media for close looks at Diwan-i-Khas, Rang Mahal, and the historic Lahori Gate.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Stat label="Address" value="Chandni Chowk, Old Delhi" />
              <Stat label="Accessibility" value="Wheelchair access; ramps" />
              <Stat label="Planning" value="Book online; closed Mondays" />
            </div>
          </div>
        </motion.section>

        {/* 360° iframe (Google Street View with Red Fort coordinates) */}
        <motion.section {...fade}>
  <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 shadow-xl">
    <div className="relative">
      <iframe
        title="Red Fort Virtual Tour"
        src="https://www.google.com/maps/embed?pb=!4v1729036800000!6m8!1m7!1sCAoSLEFGMVFpcE1mN0dNYzhPMGhCZkJTdEpXa2ZkOHlkRTd1a3hSTVhBVUpHQ3F2!2m2!1d28.6561592!2d77.2410203!3f180!4f0!5f0.7820865974627469"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[54vw] max-h-[70vh] min-h-[300px]"
      />
      {/* Top gradient scrim for subtle polish */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />
    </div>
  </div>
</motion.section>


        {/* Curated media (YouTube embed URLs) */}
        <motion.section {...fade}>
          <h2 className="font-serif text-2xl md:text-3xl text-red-300 mb-3">Curated Media</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <VideoCard
              title="Red Fort 360° Virtual Tour"
              embedUrl="https://www.youtube.com/embed/ms0FYivXyBQ?rel=0&modestbranding=1"
            />
            <VideoCard
              title="Red Fort Complete Tour"
              embedUrl="https://www.youtube.com/embed/hIa--mlH18A?rel=0&modestbranding=1"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Experience the fort's grandeur through immersive 360° videos and detailed architectural walkthroughs.
          </p>
        </motion.section>

        {/* Additional 360° Experience */}
        <motion.section {...fade}>
          <h2 className="font-serif text-2xl md:text-3xl text-red-300 mb-3">Immersive Experiences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-5 md:p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-3">Afreen 360° Theatre</h3>
              <p className="text-gray-200 leading-relaxed mb-3">
                Experience the Red Fort's history through cutting-edge 360° projection technology at the Afreen Theatre. Walk through virtual corridors and witness historic moments through immersive storytelling with light and sound.
              </p>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>• State-of-the-art 360° projection on walls, ceiling, and floor</li>
                <li>• 10-minute film showcasing the fort's inauguration day</li>
                <li>• Augmented reality photography with Peacock Throne</li>
              </ul>
            </div>

            <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-5 md:p-6">
              <h3 className="text-xl font-semibold text-red-200 mb-3">Google Arts & Culture</h3>
              <p className="text-gray-200 leading-relaxed mb-3">
                Explore high-resolution imagery and detailed information about the Red Fort through Google Arts & Culture's interactive platform.
              </p>
              <a
                href="https://artsandculture.google.com/streetview/red-fort/TAGwBR4r9ZE7dg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600/40 text-red-300 hover:bg-red-500/10 transition"
              >
                Explore on Google Arts
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.section>

        {/* Key Landmarks to Explore */}
        <motion.section {...fade}>
          <h2 className="font-serif text-2xl md:text-3xl text-red-300 mb-3">Key Landmarks to Explore</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Lahori Gate", desc: "Main entrance with elaborate carvings" },
              { name: "Diwan-i-Aam", desc: "Hall of Public Audience with throne" },
              { name: "Diwan-i-Khas", desc: "Private audience hall with Peacock Throne legacy" },
              { name: "Rang Mahal", desc: "Palace of Colors with Nahr-i-Bihisht" },
              { name: "Moti Masjid", desc: "Pearl Mosque in white marble" },
              { name: "Hammams", desc: "Royal baths with intricate designs" },
            ].map((landmark, idx) => (
              <div key={idx} className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-red-200 mb-1">{landmark.name}</h4>
                <p className="text-sm text-gray-200">{landmark.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA row */}
        <motion.section {...fade}>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between rounded-xl border border-red-700/30 bg-black/30 backdrop-blur-md p-4">
            <p className="text-sm text-gray-200">Ready to visit in person? Get tickets and plan your visit.</p>
            <div className="flex gap-2">
              <a
                href="https://asi.payumoney.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-400 active:bg-red-600 transition shadow-lg shadow-red-500/20"
              >
                Book Tickets
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default RedFortVirtualTour;
