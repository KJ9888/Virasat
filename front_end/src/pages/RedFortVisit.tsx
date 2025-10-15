import React from "react";
import { motion } from "framer-motion";
import NavbarRedFort from "../components/NavbarRedFort";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-5 md:p-6">
    <h3 className="font-serif text-xl text-red-200 mb-2">{title}</h3>
    <div className="text-gray-200 text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

const RedFortVisit: React.FC = () => {
  const onBook = () => {
    // Redirect to official ASI booking
    window.open("https://asi.payumoney.com/", "_blank");
  };

  return (
    <>
      <NavbarRedFort />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-6xl mx-auto px-6 pb-28 text-gray-300 space-y-10">
        {/* Header + CTA */}
        <motion.section {...fade}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-red-300 mb-2">Plan Your Visit</h1>
              <p className="text-lg text-gray-200 max-w-2xl">Essential details—timings, tickets, and tips—for a memorable Red Fort experience.</p>
            </div>
            <button
              onClick={onBook}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-400 active:bg-red-600 transition shadow-lg shadow-red-500/20"
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
              <p><strong className="text-red-300">Netaji Subhash Marg, Chandni Chowk, Old Delhi</strong> — on the banks of the Yamuna River.</p>
              <p className="mt-2 text-red-200 text-sm">Tip: Use Lahori Gate (main entrance) or Delhi Gate based on your route.</p>
            </InfoCard>

            <InfoCard title="Timings">
              <ul className="space-y-1">
                <li>Open: <strong className="text-red-300">9:30 AM to 4:30 PM</strong> (Tuesday to Sunday).</li>
                <li>Closed: <strong className="text-red-300">Mondays</strong>.</li>
                <li>Light & Sound Show: <strong className="text-red-300">7:00 PM onwards</strong> (varies seasonally).</li>
                <li className="text-xs text-gray-400">Verify current hours before travel.</li>
              </ul>
            </InfoCard>

            <InfoCard title="Tickets & Fees">
              <ul className="space-y-1">
                <li>Indian/SAARC/BIMSTEC: <strong className="text-red-300">₹35</strong> (online: ₹30).</li>
                <li>Foreign tourists: <strong className="text-red-300">₹550</strong>.</li>
                <li>Museum access: Additional ₹21 (Indians) / ₹320 (foreigners).</li>
                <li>Children under 15: <strong className="text-red-300">Free</strong>.</li>
                <li className="text-xs text-gray-400">Light & Sound Show: ₹60–₹120.</li>
              </ul>
              <button onClick={onBook} className="mt-3 inline-block px-4 py-2 rounded-md border border-red-600/40 text-red-300 hover:bg-red-500/10">
                Book on ASI Portal
              </button>
            </InfoCard>
          </div>
        </motion.section>

        {/* Practical Tips */}
        <motion.section {...fade}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl text-red-300">Practical Tips</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="Best Time & Photos">
              <ul className="space-y-2">
                <li>October–March offers pleasant weather for exploration.</li>
                <li>Best light: <strong className="text-red-300">early morning</strong> or <strong className="text-red-300">late afternoon</strong>.</li>
                <li>Light & Sound Show available in both Hindi and English.</li>
                <li>Avoid summer afternoons (April–June) due to extreme heat.</li>
              </ul>
            </InfoCard>
            <InfoCard title="Do's & Don'ts">
              <ul className="space-y-2">
                <li>Pre-book online tickets to save time; carry valid ID.</li>
                <li>Security checks at entrance—avoid large bags and prohibited items.</li>
                <li>Wear comfortable walking shoes; the complex is extensive.</li>
                <li>Respect conservation zones; no touching decorative inlay work.</li>
              </ul>
            </InfoCard>
          </div>
        </motion.section>

        {/* Accessibility & Services */}
        <motion.section {...fade}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl text-red-300">Accessibility & Services</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard title="Accessibility">
              <ul className="space-y-1">
                <li>Wheelchair-accessible entrance with ramps and elevators.</li>
                <li>Most pavilions on one level, easy to navigate.</li>
                <li>Accessible restrooms available near entrance.</li>
                <li className="text-xs text-gray-400">Some museum corners may have limited access.</li>
              </ul>
            </InfoCard>
            <InfoCard title="Amenities & Payments">
              <ul className="space-y-1">
                <li>Restrooms available near entrance and museum areas.</li>
                <li>Digital payments (UPI, cards) accepted at ticket counters.</li>
                <li>Authorized guides and audio guides available on-site.</li>
                <li>Cloakrooms for storing bags.</li>
              </ul>
            </InfoCard>
            <InfoCard title="For Families">
              <ul className="space-y-1">
                <li>Family-friendly; plan 2–3 hours for complete tour.</li>
                <li>Carry water, sunscreen, and hats (especially summer).</li>
                <li>Shaded pathways and garden benches for rest breaks.</li>
                <li>Children under 15 get free entry.</li>
              </ul>
            </InfoCard>
          </div>
        </motion.section>

        {/* Getting There & Nearby */}
        <motion.section {...fade}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl text-red-300">Getting There</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="Transport">
              <ul className="space-y-2">
                <li><strong className="text-red-300">Metro:</strong> Chandni Chowk station (Yellow Line) — 1.6 km walk or rickshaw ride.</li>
                <li><strong className="text-red-300">Bus:</strong> DTC buses from all parts of Delhi; 30–40 min from Central Delhi.</li>
                <li><strong className="text-red-300">Cab/Auto:</strong> Easily accessible via Google Maps; Ola/Uber available.</li>
                <li>Parking available near Lahori Gate; traffic heavy in Old Delhi.</li>
              </ul>
            </InfoCard>
            <InfoCard title="Nearby Highlights">
              <ul className="space-y-2">
                <li><strong className="text-red-300">Jama Masjid</strong> — India's largest mosque (500m away).</li>
                <li><strong className="text-red-300">Chandni Chowk</strong> — historic market with street food.</li>
                <li><strong className="text-red-300">Raj Ghat</strong> — Mahatma Gandhi's memorial (3 km).</li>
                <li><strong className="text-red-300">National Museum</strong> — extensive Indian art collection.</li>
              </ul>
            </InfoCard>
          </div>
        </motion.section>

        {/* Special Experiences */}
        <motion.section {...fade}>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl text-red-300">Special Experiences</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="Light & Sound Show">
              <p>Experience the fort's history through dramatic narration, lighting, and sound effects.</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li><strong className="text-red-300">Timings:</strong> Vary by season (6:00 PM–9:00 PM).</li>
                <li><strong className="text-red-300">Languages:</strong> Hindi and English shows.</li>
                <li><strong className="text-red-300">Tickets:</strong> ₹60–₹120 depending on seating.</li>
              </ul>
            </InfoCard>
            <InfoCard title="Independence Day">
              <p>On <strong className="text-red-300">August 15th</strong>, witness the Prime Minister's flag hoisting ceremony and address to the nation from Lahori Gate—a powerful symbol of India's sovereignty.</p>
              <p className="mt-2 text-xs text-gray-400">Entry restricted on this day; watch on TV or arrive very early.</p>
            </InfoCard>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default RedFortVisit;
