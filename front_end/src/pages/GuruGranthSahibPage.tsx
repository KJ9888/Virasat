// src/pages/GuruGranthSahibPage.jsx
import { motion } from "framer-motion";
import Animation from "../components/Animation";
import { useNavigate } from "react-router-dom";

// Image Display Component
const ImageDisplay = ({ imageUrl, altText }) => (
  <motion.div
    className="w-full md:w-5/12 overflow-hidden rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 md:h-80 lg:h-96 object-cover object-center"
    />
  </motion.div>
);

const GuruGranthSahibPage = () => {
  const navigate = useNavigate();
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Back Button */}
      <motion.div
        className="absolute top-6 left-6 z-50"
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 150, 255, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="relative text-blue-400 font-semibold px-4 py-2 rounded transition-all duration-300
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300
            hover:after:w-full"
        >
          &larr; Back to Stories
        </button>
      </motion.div>

      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <Animation />
      </div>

      <main className="font-sans text-gray-300 pt-24 md:pt-28 py-12 md:py-20">
        <article className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <motion.header
            className="text-center mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
          >
            <p className="text-lg text-blue-500 font-semibold mb-2 tracking-wide uppercase">
              The Eternal Guru
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-blue-400">
              Guru Granth Sahib <br />
              <span className="text-blue-300">The Living Guru of the Sikhs</span>
            </h1>
          </motion.header>

          {/* Cinematic Video */}
          <motion.section
            className="mb-16 md:mb-24 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full md:w-4/5 aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                src="../../assets/guru_granth_sahib.mp4"
                controls
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 1: Compilation of Teachings */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700">
                Compilation of Teachings
              </h2>
              <p className="text-lg leading-relaxed">
                The Guru Granth Sahib, compiled by Guru Arjan Dev Ji in 1604, contains the hymns and teachings of Sikh Gurus as well as saints from different backgrounds.
                It emphasizes devotion, equality, and spiritual wisdom transcending caste, religion, and social barriers.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/3e/Guru_Granth_Sahib_open.jpg"
              altText="Open Guru Granth Sahib with script"
            />
          </motion.section>

          {/* Section 2: Spiritual Wisdom */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700 inline-block">
                Spiritual Wisdom
              </h2>
              <p className="text-lg leading-relaxed">
                The hymns guide followers in living a righteous life, focusing on honest living, meditation on God’s name, and service to humanity.
                The Guru Granth Sahib is regarded as the eternal Guru, inspiring Sikhs across generations.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/5d/Guru_Granth_Sahib_on_palki.jpg"
              altText="Guru Granth Sahib on ceremonial palki"
            />
          </motion.section>

          {/* Section 3: Reverence and Rituals */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700">
                Reverence and Rituals
              </h2>
              <p className="text-lg leading-relaxed">
                Sikh congregations show deep reverence to the Guru Granth Sahib, with rituals like reading from it, singing hymns, and following its teachings as guidance in daily life.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/91/Sikh_prayers_at_gurdwara.jpg"
              altText="Devotees offering prayers at Gurdwara"
            />
          </motion.section>

          {/* Section 4: Living Guru */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700 inline-block">
                The Eternal Guru
              </h2>
              <p className="text-lg leading-relaxed">
                The Guru Granth Sahib is the spiritual guide for all Sikhs. Its teachings remain timeless, promoting harmony, devotion, justice, and compassion, making it the living embodiment of Sikh Gurus.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/4/49/Reading_Guru_Granth_Sahib.jpg"
              altText="Reading Guru Granth Sahib at Gurdwara"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default GuruGranthSahibPage;
