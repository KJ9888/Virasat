import React from "react";
import { motion } from "framer-motion";
import NavbarTaj from "../components/NavbarTaj";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const Divider: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-3 mb-5">
    <h2 className="font-serif text-2xl md:text-3xl text-amber-300">{title}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-amber-700/40 to-transparent" />
  </div>
);

const InfoChip: React.FC<{ img?: string; label: string }> = ({ img, label }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/10 text-sm text-gray-200">
    {img && <img src={img} alt="" className="w-5 h-5 rounded object-cover border border-white/10" />}
    <span>{label}</span>
  </div>
);

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-black/30 backdrop-blur-md border border-amber-700/30 rounded-xl p-5 md:p-6">
    {children}
  </div>
);

const TajArchitecture: React.FC = () => {
  return (
    <>
      <NavbarTaj />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-6xl mx-auto px-6 pb-28 text-gray-300 space-y-10">
        {/* Header */}
        <motion.section {...fade}>
          <h1 className="font-serif text-4xl md:text-5xl text-amber-300 mb-3">Architecture & Design</h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            The Taj Mahal embodies **perfect bilateral symmetry**, a riverfront-garden complex, and a hierarchy of materials—white marble for the mausoleum and red sandstone for ancillary buildings—codifying Shahjahani principles of proportion and order.[1][4][2]
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <InfoChip label="Bilateral symmetry" />
            <InfoChip label="Charbagh plan" />
            <InfoChip label="Makrana marble" />
            <InfoChip label="Pietra dura inlay" />
          </div>
        </motion.section>

        {/* Layout & Symmetry */}
        <motion.section {...fade}>
          <Divider title="Layout & Symmetry" />
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-start">
            <Card>
              <p className="text-base md:text-lg leading-relaxed">
                Planned around a strict central axis, the mausoleum sits on an elevated platform with four free‑standing minarets marking the corners, producing a balanced three‑dimensional frame for the tomb.[4] The inner organization mirrors on the facades, creating a perfectly balanced composition focused on the central chamber.[1]
              </p>
              <ul className="mt-4 space-y-2 text-gray-200 text-sm">
                <li>• Central axis + cross‑axial garden vistas (Charbagh).[4]</li>
                <li>• Mausoleum: the only all‑white marble structure; flanking buildings in red sandstone.[1][4][2]</li>
                <li>• Riverfront adaptation of the Persian garden ideal.[1][4]</li>
              </ul>
            </Card>
            <Card>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
                alt="Taj Mahal axis and symmetry"
                className="w-full h-64 md:h-72 object-cover rounded-lg border border-white/10"
              />
              <p className="text-xs text-gray-400 mt-2">Symmetry along the north–south axis with minarets defining the platform corners.[4]</p>
            </Card>
          </div>
        </motion.section>

        {/* Materials & Decoration */}
        <motion.section {...fade}>
          <Divider title="Materials & Decoration" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-amber-200 mb-2">Hierarchy of Materials</h3>
              <p className="leading-relaxed">
                Brick‑in‑lime cores are veneered with **white marble** at the mausoleum and **red sandstone** at the mosque and jawab, with precious/semi‑precious **pietra dura** inlays on marble surfaces.[4][2]
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <InfoChip label="White marble (mausoleum)" />
                <InfoChip label="Red sandstone (mosque/jawab)" />
                <InfoChip label="Stone inlay (pietra dura)" />
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-amber-200 mb-2">Naturalistic Ornament</h3>
              <p className="leading-relaxed">
                Shahjahani decor emphasizes naturalistic plant motifs, Quranic calligraphy with optical scaling on portals, and disciplined geometric proportions to reinforce clarity and order.[1][4]
              </p>
              <img
                src="https://kalakritiagra.com/wp-content/uploads/2020/11/FB_Cover-1200X550.jpg"
                alt="Marble and inlay details"
                className="mt-3 w-full h-56 object-cover rounded-lg border border-white/10"
              />
            </Card>
          </div>
        </motion.section>

        {/* Dome & Minarets */}
        <motion.section {...fade}>
          <Divider title="Dome & Minarets" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-amber-2 00 mb-2">The Onion Dome</h3>
              <p className="leading-relaxed">
                The bulbous central dome rises prominently above a high drum and is topped with a lotus finial, with a proportional relationship that preserves visual harmony across distances.[6] The double‑shell strategy is often cited in scholarship to explain exterior height with a more intimate interior profile.[6]
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-amber-200 mb-2">Minarets as Frame</h3>
              <p className="leading-relaxed">
                Four free‑standing minarets at the plinth corners add a spatial reference and three‑dimensionality to the ensemble.[4] Many explain their slight outward lean as a visual/safety strategy so debris would fall away from the tomb if ever compromised.[8]
              </p>
              <img
                src="https://www.thoughtco.com/thmb/mvzDYqXzP4T_D7JfMTsWm5GgDZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg"
                alt="Minarets and dome"
                className="mt-3 w-full h-56 object-cover rounded-lg border border-white/10"
              />
            </Card>
          </div>
        </motion.section>

        {/* Garden & Gate */}
        <motion.section {...fade}>
          <Divider title="Garden & Great Gate" />
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-start">
            <Card>
              <p className="leading-relaxed">
                The forecourt’s great southern gate anchors the Charbagh, subdividing the garden into four quarters with cross‑axial walkways and a reflecting pool, adapted from Timurid‑Persian traditions.[4][2]
              </p>
            </Card>
            <Card>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
                alt="Charbagh and gate"
                className="w-full h-64 md:h-72 object-cover rounded-lg border border-white/10"
              />
              <p className="text-xs text-gray-400 mt-2">Charbagh layout with axial water features and the grand gate to the south.[4]</p>
            </Card>
          </div>
        </motion.section>

        {/* Compact Key Specs */}
        <motion.section {...fade}>
          <Divider title="Key Specs" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <p className="text-sm text-gray-200">Platform length ≈ 300 m; height ≈ 8.7 m, on the Yamuna riverbank.[2]</p>
            </Card>
            <Card>
              <p className="text-sm text-gray-200">Mausoleum in white marble; mosque & guest house in red sandstone.[4][2]</p>
            </Card>
            <Card>
              <p className="text-sm text-gray-200">Symmetry with central emphasis; inner plan reflected on facades.[1]</p>
            </Card>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default TajArchitecture;
