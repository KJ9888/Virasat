import React from "react";
import { motion } from "framer-motion";
import NavbarTaj from "../components/NavbarTaj";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
} as const;

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="px-3 py-2 rounded-lg bg-black/30 border border-white/10 text-sm">
    <span className="text-amber-300 font-medium">{label}: </span>
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

const TajVirtualTour: React.FC = () => {
  return (
    <>
      <NavbarTaj />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-6xl mx-auto px-6 pb-28 text-gray-300 space-y-10">
        {/* Header band */}
        <motion.section {...fade}>
          <div className="rounded-2xl border border-amber-700/30 bg-black/30 backdrop-blur-md p-5 md:p-6">
            <h1 className="font-serif text-4xl md:text-5xl text-amber-300">Virtual Tour</h1>
            <p className="text-lg text-gray-200 mt-2 max-w-3xl">
              Explore a 360° Street View of the Taj Mahal and browse curated media for close looks at the dome, pietra dura, and gardens.
            </p>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Stat label="Address" value="Dharmapuri, Tajganj, Agra" />
              <Stat label="Accessibility" value="Wheelchair access; hearing loop" />
              <Stat label="Planning" value="Book in advance; paid parking" />
            </div>
          </div>
        </motion.section>

        {/* 360° iframe (no API key) */}
        <motion.section {...fade}>
          <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 shadow-xl">
            <div className="relative">
              <iframe
                title="Taj Mahal Virtual Tour"
                src="https://www.google.com/maps/embed?pb=!4v1624278692000!6m8!1m7!1sCAoSLEFGMVFpcFBqTzhVb3piS1d3T3dNQWdBbFdLd3doZmtlU3ZlQ0NObE1sTnBk!2m2!1d27.175015!2d78.042155!3f0!4f0!5f0.7820865974627469"
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

        {/* Curated media (fixed YouTube embed URLs) */}
        <motion.section {...fade}>
          <h2 className="font-serif text-2xl md:text-3xl text-amber-300 mb-3">Curated Media</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <VideoCard
              title="Documentary Clip"
              embedUrl="https://www.youtube.com/embed/Bx2S7JpdOp4?rel=0&modestbranding=1"
            />
            <VideoCard
              title="Architecture Focus"
              embedUrl="https://www.youtube.com/embed/8HV1JVgqPM0?rel=0&modestbranding=1"
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Tip: Use YouTube embed URLs (…/embed/VIDEO_ID). If a video blocks embedding, replace it or enable embedding in its settings.
          </p>
        </motion.section>

        {/* CTA row */}
        <motion.section {...fade}>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between rounded-xl border border-amber-700/30 bg-black/30 backdrop-blur-md p-4">
            <p className="text-sm text-gray-200">Want on-site details, tickets, and timings?</p>
            <div className="flex gap-2">
              <a
                href="https://asi.payumoney.com/quick/taj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 active:bg-amber-600 transition shadow-lg shadow-amber-500/20"
              >
                Book Tickets
              </a>
              <a
                href="https://maps.app.goo.gl/1o1j4w6m9o4v8Y8y7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-amber-600/40 text-amber-300 hover:bg-amber-500/10"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default TajVirtualTour;
