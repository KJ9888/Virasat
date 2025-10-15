import React from "react";
import { motion } from "framer-motion";
import NavbarTaj from "../components/NavbarTaj";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-black/30 backdrop-blur-md border border-amber-700/30 rounded-xl p-5 md:p-6">
    <h3 className="font-serif text-xl text-amber-200 mb-2">{title}</h3>
    <div className="text-gray-200 text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

const TajVisit: React.FC = () => {
  const onBook = () => {
    // Redirect to official ASI booking
    window.location.href = "https://asi.payumoney.com/quick/taj";
  };

  return (
    <>
      <NavbarTaj />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-6xl mx-auto px-6 pb-28 text-gray-300 space-y-10">
        {/* Header + CTA */}
        <motion.section {...fade}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-amber-300 mb-2">Plan Your Visit</h1>
              <p className="text-lg text-gray-200 max-w-2xl">Essential details—timings, tickets, and tips—for a smooth Taj Mahal experience.</p>
            </div>
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 active:bg-amber-600 transition shadow-lg shadow-amber-500/20"
            >
              Book Tickets
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </motion.section>

        {/* Quick Cards */}
        <motion.section {...fade}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Location">
              <p><strong className="text-amber-300">Dharmapuri, Tajganj, Agra, Uttar Pradesh</strong> — right bank of the Yamuna River.</p>
              <p className="mt-2 text-amber-200 text-sm">Tip: Use the East/West/South gates based on parking and crowd patterns.</p>
            </InfoCard>

            <InfoCard title="Timings">
              <ul className="space-y-1">
                <li>Open: <strong className="text-amber-300">Sunrise to Sunset</strong> (approx 6:00 AM – 6:30 PM).</li>
                <li>Closed: <strong className="text-amber-300">Fridays</strong> for prayers.</li>
                <li className="text-xs text-gray-400">Always verify current hours before travel.</li>
              </ul>
            </InfoCard>

            <InfoCard title="Tickets & Fees">
              <ul className="space-y-1">
                <li>Indian & SAARC/BIMSTEC: concessional rates.</li>
                <li>Foreign visitors: higher tier (inner mausoleum add-on may apply).</li>
                <li className="text-xs text-gray-400">Check latest rates on the ASI portal.</li>
              </ul>
              <button onClick={onBook} className="mt-3 inline-block px-4 py-2 rounded-md border border-amber-600/40 text-amber-300 hover:bg-amber-500/10">
                Book on ASI
              </button>
            </InfoCard>
          </div>
        </motion.section>

        {/* Practical Tips */}
        <motion.section {...fade}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl text-amber-300">Practical Tips</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-700/40 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="Best Time & Photos">
              <ul className="space-y-2">
                <li>October–March offers the coolest weather.</li>
                <li>Best light: <strong className="text-amber-300">sunrise</strong> or <strong className="text-amber-300">golden hour</strong>.</li>
                <li>Full-moon night viewing happens on select dates (separate tickets).</li>
              </ul>
            </InfoCard>
            <InfoCard title="Do’s & Don’ts">
              <ul className="space-y-2">
                <li>Pre-book timed-entry; carry ID and water.</li>
                <li>Follow security rules; restricted items may be denied.</li>
                <li>Respect conservation zones; avoid touching inlay work.</li>
              </ul>
            </InfoCard>
          </div>
        </motion.section>

        {/* Accessibility & Services */}
        <motion.section {...fade}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl text-amber-300">Accessibility & Services</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-700/40 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Accessibility">
              <ul className="space-y-1">
                <li>Wheelchair-accessible entrance and restrooms.</li>
                <li>Accessible parking areas near designated gates.</li>
                <li>Assistive hearing loop available.</li>
              </ul>
            </InfoCard>
            <InfoCard title="Amenities & Payments">
              <ul className="space-y-1">
                <li>Gender-neutral restrooms.</li>
                <li>Google Pay and standard cards accepted at many facilities.</li>
                <li>Authorized guides available on-site.</li>
              </ul>
            </InfoCard>
            <InfoCard title="For Families">
              <ul className="space-y-1">
                <li>Good for kids; keep to shaded paths in summer.</li>
                <li>Carry hats, sunscreen, and water.</li>
                <li>Plan breaks near garden benches.</li>
              </ul>
            </InfoCard>
          </div>
        </motion.section>

        {/* Nearby & Food (NYC restaurants intentionally excluded) */}
        <motion.section {...fade}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl text-amber-300">Getting There</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-700/40 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="Transport">
              <ul className="space-y-2">
                <li>Agra Cantt railway station; taxis and e-rickshaws to gates.</li>
                <li>From Delhi: Gatimaan Express or Yamuna Expressway (~3–4 hrs by car).</li>
                <li>Use authorized parking; last-mile via battery buses/e-rickshaws.</li>
              </ul>
            </InfoCard>
            <InfoCard title="Nearby Highlights">
              <ul className="space-y-2">
                <li>Agra Fort (2.5 km), Mehtab Bagh riverfront views.</li>
                <li>Itimad-ud-Daulah, Jama Masjid, and local marble inlay workshops.</li>
              </ul>
            </InfoCard>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default TajVisit;
