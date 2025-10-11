// src/pages/RamayanaPage.jsx
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

const RamayanaPage = () => {
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
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 165, 0, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="relative text-orange-400 font-semibold px-4 py-2 rounded transition-all duration-300
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300
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
            <p className="text-lg text-orange-500 font-semibold mb-2 tracking-wide uppercase">
              The Epic of Virtue and Valor
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-orange-400">
              Ramayana <br />
              <span className="text-orange-300">The Journey of Lord Rama</span>
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
                src="../../assets/ramayana.mp4"
                controls
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 1: Birth of Rama */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700">
                Birth of Rama
              </h2>
              <p className="text-lg leading-relaxed">
                Lord Rama, the prince of Ayodhya, was born to King Dasharatha and Queen Kaushalya.
                He was the embodiment of dharma, virtue, and righteousness, destined to face challenges and protect the world from evil.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/34/Birth_of_Lord_Rama.jpg"
              altText="Birth of Lord Rama"
            />
          </motion.section>

          {/* Section 2: Exile and Forest Life */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700 inline-block">
                Exile and Forest Life
              </h2>
              <p className="text-lg leading-relaxed">
                Due to palace intrigues, Rama was exiled for 14 years along with his wife Sita and brother Lakshmana.
                In the forest, they faced numerous challenges, showcasing devotion, courage, and moral integrity.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/1d/Rama_Lakshmana_exile.jpg"
              altText="Rama, Sita, and Lakshmana in exile"
            />
          </motion.section>

          {/* Section 3: The Abduction of Sita */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700">
                The Abduction of Sita
              </h2>
              <p className="text-lg leading-relaxed">
                Sita was abducted by the demon king Ravana, leading Rama to forge alliances and prepare for a monumental battle to rescue her.
                This event highlights the themes of devotion, bravery, and justice central to the Ramayana.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/7b/Sita_abduction.jpg"
              altText="Ravana abducting Sita"
            />
          </motion.section>

          {/* Section 4: The Battle of Lanka */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700 inline-block">
                The Battle of Lanka
              </h2>
              <p className="text-lg leading-relaxed">
                Rama, with the help of Hanuman and the Vanara army, fought the fierce battle against Ravana in Lanka.
                Victory was achieved through dharma, courage, and righteousness, restoring balance and exemplifying ideal conduct.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/0a/Battle_of_Lanka.jpg"
              altText="The battle between Rama and Ravana"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default RamayanaPage;
