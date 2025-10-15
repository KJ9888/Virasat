import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Animation from "../components/Animation";
import NavbarRedFort from "../components/NavbarRedFort";

// Image Display Component with optimized animation
const ImageDisplay = ({ imageUrl, altText }) => (
  <motion.div
    className="w-full md:w-5/12 overflow-hidden rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
  >
    <img
      src={imageUrl}
      alt={altText}
      loading="lazy"
      className="w-full h-72 md:h-80 lg:h-96 object-cover object-center"
    />
  </motion.div>
);

const RedFortPage = () => {
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <Animation />
      </div>

      <NavbarRedFort />

      {/* Back Button - Faster Animation */}
      <motion.div
        className="absolute top-6 left-6 z-50"
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 100, 100, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="relative text-red-400 font-semibold px-4 py-2 rounded transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          &larr; Back to Monuments
        </button>
      </motion.div>

      <main className="font-sans text-gray-300 pt-20">
        <article className="max-w-6xl mx-auto px-6">
          {/* Page Title - Instant Load */}
          <motion.header
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="font-serif m-10 text-5xl md:text-7xl font-extrabold text-amber-300">
              The Red Fort <br />
              <span className="text-red-500">(Lal Qila)</span>
            </h1>
          </motion.header>

          {/* Cinematic Video Section - Lazy Load with YouTube Embed */}
          <motion.section
            className="mb-16 md:mb-24 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.5 }}
            onViewportEnter={() => setVideoLoaded(true)}
          >
            <div className="w-full md:w-4/5 aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
              {videoLoaded ? (
                <iframe
                  src="https://www.youtube.com/embed/hIa--mlH18A?rel=0&modestbranding=1"
                  title="Red Fort Delhi India - Cinematic Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                />
              ) : (
                <div className="text-white text-lg">Loading video...</div>
              )}
            </div>
          </motion.section>

          {/* Section 1: Introduction */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">
                Introduction
              </h2>
              <p className="text-xl leading-relaxed">
                Standing tall on the banks of the Yamuna River, the Red Fort, or Lal Qila, is a breathtaking monument of Mughal grandeur and a timeless symbol of India's sovereignty. Built in the 17th century by Emperor Shah Jahan, it was the seat of Mughal power for over 200 years.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://images.unsplash.com/photo-1547300848-441153a7bf02?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D"
              altText="A majestic view of the Red Fort from the front"
            />
          </motion.section>

          {/* Section 2: History */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">
                A Journey Through History
              </h2>
              <p className="text-xl leading-relaxed">
                Commissioned in 1638 when Shah Jahan moved his capital to Shahjahanabad, its walls have witnessed the zenith of Mughal artistry, the drama of royal succession, and the dawn of India's independence. It was from here that India's first Prime Minister, Jawaharlal Nehru, hoisted the national flag on August 15, 1947.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://media.istockphoto.com/id/692983144/photo/red-fort-delhi-a-historic-red-sandstone-fort-city-in-delhi-designated-as-the-unesco-world.jpg?s=612x612&w=0&k=20&c=2yX0f74BE6rQOFXhinM4fxy7U0J7uL1AeuJgFKwSeMg="
              altText="Indian flag being hoisted at the Red Fort on Independence Day"
            />
          </motion.section>

          {/* Section 3: Architecture */}
          <motion.section
            className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">
                Architectural Grandeur
              </h2>
              <p className="text-xl leading-relaxed mb-6">
                The Red Fort is a brilliant fusion of Persian, Timurid, and Indian architectural styles. Inside its massive walls, a world of imperial elegance unfolds:
              </p>
              <ul className="space-y-3 text-lg text-left list-disc list-inside">
                <li>
                  <strong className="font-semibold text-amber-500">Diwan-i-Aam:</strong> Hall of Public Audience.
                </li>
                <li>
                  <strong className="font-semibold text-amber-500">Diwan-i-Khas:</strong> Hall of Private Audience, once home to the Peacock Throne.
                </li>
                <li>
                  <strong className="font-semibold text-amber-500">Rang Mahal:</strong> The vibrant "Palace of Colors".
                </li>
                <li>
                  <strong className="font-semibold text-amber-500">Moti Masjid:</strong> The pristine white marble "Pearl Mosque".
                </li>
              </ul>
            </div>
            <ImageDisplay
              imageUrl="https://www.tajmahal.gov.in/images/shah-jahan.jpg"
              altText="Intricate marble inlay work inside the Diwan-i-Khas"
            />
          </motion.section>

          {/* Section 4: Today */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">
                The Fort Today
              </h2>
              <p className="text-xl leading-relaxed">
                Every year on Independence Day, the Prime Minister addresses the nation from the ramparts of the Red Fort, reaffirming its status as a symbol of national pride. Visitors enjoy a walk through palaces, gardens, and museums, witnessing centuries of history.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://thumbs.dreamstime.com/b/throne-shah-jahan-diwan-i-hall-audience-red-fort-where-mughal-emperor-his-successors-heard-general-public-163750489.jpg"
              altText="The Red Fort illuminated at night during a light and sound show"
            />
          </motion.section>
        </article>
      </main>
    </>
  );
};

export default RedFortPage;
