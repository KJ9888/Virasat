// src/pages/MaharanaPratapPage.jsx
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

const MaharanaPratapPage = () => {
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
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 150, 0, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="relative text-yellow-400 font-semibold px-4 py-2 rounded transition-all duration-300
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300
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
            <p className="text-lg text-yellow-500 font-semibold mb-2 tracking-wide uppercase">
              The Lion of Mewar
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-yellow-400">
              Maharana Pratap <br />
              <span className="text-amber-300">The Brave Rajput King of Mewar</span>
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
                src="../../assets/maharana_pratap.mp4"
                controls
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 1: Early Life */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-yellow-500 mb-4 pb-2 border-b-2 border-yellow-700">
                Early Life
              </h2>
              <p className="text-lg leading-relaxed">
                Born in 1540 in Kumbhalgarh, Maharana Pratap grew up learning the art of warfare and administration.
                From childhood, he was trained to protect Mewar’s sovereignty and uphold Rajput honor against invaders.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/25/Maharana_Pratap_portrait.jpg"
              altText="Portrait of young Maharana Pratap"
            />
          </motion.section>

          {/* Section 2: The Battle of Haldighati */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-yellow-500 mb-4 pb-2 border-b-2 border-yellow-700 inline-block">
                The Battle of Haldighati
              </h2>
              <p className="text-lg leading-relaxed">
                In 1576, Maharana Pratap faced the Mughal army led by Akbar at Haldighati.
                Despite being outnumbered, he displayed unmatched valor and strategy, earning a legendary status in Indian history.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/0e/Battle_of_Haldighati.jpg"
              altText="Depiction of the Battle of Haldighati"
            />
          </motion.section>

          {/* Section 3: Guerilla Warfare */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-yellow-500 mb-4 pb-2 border-b-2 border-yellow-700">
                Guerilla Warfare
              </h2>
              <p className="text-lg leading-relaxed">
                After Haldighati, Maharana Pratap used guerrilla tactics to resist Mughal forces, 
                striking from the forests and hills of Mewar, keeping the spirit of independence alive.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/18/Maharana_Pratap_guerrilla.jpg"
              altText="Maharana Pratap's guerrilla attacks"
            />
          </motion.section>

          {/* Section 4: Legacy */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-yellow-500 mb-4 pb-2 border-b-2 border-yellow-700 inline-block">
                An Eternal Legacy
              </h2>
              <p className="text-lg leading-relaxed">
                Maharana Pratap remains a symbol of bravery, honor, and resistance. His life inspires generations to uphold courage, dignity, and love for their homeland.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dc/Maharana_Pratap_statue.jpg"
              altText="Statue of Maharana Pratap"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default MaharanaPratapPage;
