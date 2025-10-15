import React from "react";
import { motion } from "framer-motion";
import NavbarRedFort from "../components/NavbarRedFort";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const Divider: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center gap-3 mb-5">
    <h2 className="font-serif text-2xl md:text-3xl text-red-300">{title}</h2>
    <div className="flex-1 h-px bg-gradient-to-r from-red-700/40 to-transparent" />
  </div>
);

const InfoChip: React.FC<{ img?: string; label: string }> = ({ img, label }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/10 text-sm text-gray-200">
    {img && <img src={img} alt="" className="w-5 h-5 rounded object-cover border border-white/10" />}
    <span>{label}</span>
  </div>
);

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-black/30 backdrop-blur-md border border-red-700/30 rounded-xl p-5 md:p-6">
    {children}
  </div>
);

const RedFortArchitecture: React.FC = () => {
  return (
    <>
      <NavbarRedFort />

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <main className="pt-28 md:pt-32 max-w-6xl mx-auto px-6 pb-28 text-gray-300 space-y-10">
        {/* Header */}
        <motion.section {...fade}>
          <h1 className="font-serif text-4xl md:text-5xl text-red-300 mb-3">Architecture & Design</h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            The Red Fort represents the **zenith of Mughal creativity**, synthesizing Islamic palace architecture with local traditions. Built from **red sandstone** with **white marble** inlays, it spans 254 acres and showcases the sophisticated charbagh layout and Shahjahani ornamentation.[64][86][78]
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <InfoChip label="Octagonal plan" />
            <InfoChip label="Charbagh gardens" />
            <InfoChip label="Red sandstone walls" />
            <InfoChip label="Persian-Timurid fusion" />
          </div>
        </motion.section>

        {/* Layout & Fortification */}
        <motion.section {...fade}>
          <Divider title="Layout & Fortification" />
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-start">
            <Card>
              <p className="text-base md:text-lg leading-relaxed">
                The fort follows an **asymmetric octagonal plan** with the north–south axis longer than east–west, enclosed by 2.41 km of defensive walls. These walls vary from 18 meters (59 ft) on the river side to 33 meters (108 ft) on the city side, reinforced with turrets and bastions.[64][86]
              </p>
              <ul className="mt-4 space-y-2 text-gray-200 text-sm">
                <li>• Two main gates: **Lahori Gate** (public) and **Delhi Gate** (ceremonial).[64][81]</li>
                <li>• Structures aligned along central axis with courtyards and gardens.[86][78]</li>
                <li>• Moat between double-walled enclosure for defense.[78][115]</li>
              </ul>
            </Card>
            <Card>
              <img
                src="https://images.unsplash.com/photo-1547300848-441153a7bf02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Red Fort fortification and layout"
                className="w-full h-64 md:h-72 object-cover rounded-lg border border-white/10"
              />
              <p className="text-xs text-gray-400 mt-2">Massive red sandstone walls with octagonal fortification design.[64][86]</p>
            </Card>
          </div>
        </motion.section>

        {/* Materials & Decoration */}
        <motion.section {...fade}>
          <Divider title="Materials & Decoration" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Material Hierarchy</h3>
              <p className="leading-relaxed">
                The fort is constructed primarily of **red sandstone** for walls and outer structures, with **white marble** used for palace pavilions and decorative inlays. The fusion creates a distinctive visual contrast characteristic of Mughal architecture.[64][86][115]
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <InfoChip label="Red sandstone (walls)" />
                <InfoChip label="White marble (palaces)" />
                <InfoChip label="Pietra dura inlay" />
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Artistic Synthesis</h3>
              <p className="leading-relaxed">
                The artwork integrates **Persian, European, and Indian** traditions, creating the Shahjahani style with **Islamic geometric patterns** blended with **Hindu floral motifs**. The ornamentation reflects richness in form, expression, and color.[64][86][78]
              </p>
              <img
                src="https://media.istockphoto.com/id/692983144/photo/red-fort-delhi-a-historic-red-sandstone-fort-city-in-delhi-designated-as-the-unesco-world.jpg?s=612x612&w=0&k=20&c=2yX0f74BE6rQOFXhinM4fxy7U0J7uL1AeuJgFKwSeMg="
                alt="Decorative details"
                className="mt-3 w-full h-56 object-cover rounded-lg border border-white/10"
              />
            </Card>
          </div>
        </motion.section>

        {/* Key Structures */}
        <motion.section {...fade}>
          <Divider title="Key Structures" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Diwan-i-Aam (Hall of Public Audience)</h3>
              <p className="leading-relaxed">
                An open pavilion with an elevated throne area where Shah Jahan addressed public grievances. Features ornate marble throne canopy and the **Naubat Khana** (Music Gallery) where musicians played during imperial entries.[86][81][78]
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Diwan-i-Khas (Hall of Private Audience)</h3>
              <p className="leading-relaxed">
                Richly decorated hall with marble colonnades featuring intricate geometric and floral designs. Once housed the legendary **Peacock Throne** encrusted with precious gems, including the Kohinoor diamond.[64][86][78]
              </p>
              <img
                src="https://thumbs.dreamstime.com/b/throne-shah-jahan-diwan-i-hall-audience-red-fort-where-mughal-emperor-his-successors-heard-general-public-163750489.jpg"
                alt="Diwan-i-Khas interior"
                className="mt-3 w-full h-56 object-cover rounded-lg border border-white/10"
              />
            </Card>
          </div>
        </motion.section>

        {/* Palace Complexes */}
        <motion.section {...fade}>
          <Divider title="Palace Complexes" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Rang Mahal (Palace of Colors)</h3>
              <p className="leading-relaxed">
                Royal residence for the emperor's wives, known for colorful interiors and the **Nahr-i-Bihisht** (Stream of Paradise)—a cooling water channel running through the marble floor, symbolizing the Quranic concept of paradise.[86][78][83]
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Moti Masjid (Pearl Mosque)</h3>
              <p className="leading-relaxed">
                Built later by Aurangzeb in pristine **white marble**, this private mosque for the emperor's use exemplifies later Mughal refinement. Its three domes and prayer hall demonstrate architectural elegance within the fort complex.[86][64]
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Hammams (Royal Baths)</h3>
              <p className="leading-relaxed">
                Luxurious bathhouses decorated with intricate floral designs and advanced water heating systems, reflecting the sophisticated lifestyle of Mughal royalty. The three main chambers served different bathing purposes.[86][78]
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-red-200 mb-2">Lahori Gate</h3>
              <p className="leading-relaxed">
                The main entrance named after Lahore, decorated with elaborate carvings and ornamental elements. Leads to **Chhatta Chowk**, a domed covered bazaar. The Prime Minister hoists the national flag here annually on Independence Day.[64][81][83]
              </p>
            </Card>
          </div>
        </motion.section>

        {/* Garden & Layout */}
        <motion.section {...fade}>
          <Divider title="Garden & Layout" />
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-start">
            <Card>
              <p className="leading-relaxed">
                The fort follows the traditional **charbagh** (four-part garden) layout popular in Mughal era, with structures organized around open spaces, lush gardens, and water features. The Persian garden concept adapted to the Indian context.[81][86][78]
              </p>
            </Card>
            <Card>
              <img
                src="https://images.unsplash.com/photo-1547300848-441153a7bf02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Red Fort gardens"
                className="w-full h-64 md:h-72 object-cover rounded-lg border border-white/10"
              />
              <p className="text-xs text-gray-400 mt-2">Charbagh layout with axial organization and water channels.[81][86]</p>
            </Card>
          </div>
        </motion.section>

        {/* Compact Key Specs */}
        <motion.section {...fade}>
          <Divider title="Key Specifications" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card>
              <p className="text-sm text-gray-200">Total area: 254.67 acres (103.06 hectares) enclosed by 2.41 km walls.[64][86]</p>
            </Card>
            <Card>
              <p className="text-sm text-gray-200">Wall height: 18m (river side) to 33m (city side) with turrets and bastions.[64][115]</p>
            </Card>
            <Card>
              <p className="text-sm text-gray-200">Octagonal plan with double walls and moat; Persian-Timurid-Indian fusion.[64][81][86]</p>
            </Card>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default RedFortArchitecture;
