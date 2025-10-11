// src/pages/AkbarTheGreatPage.jsx
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

const AkbarTheGreatPage = () => {
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
              The Great Mughal Emperor
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-orange-400">
              Akbar the Great <br />
              <span className="text-orange-300">The Visionary Ruler of India</span>
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
                src="../../assets/akbar_the_great.mp4"
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
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700">
                Early Life and Ascension
              </h2>
              <p className="text-lg leading-relaxed">
                Akbar was born in 1542 and became emperor at the age of 13. Despite his youth, he displayed remarkable intelligence and leadership skills,
                laying the foundations for one of the largest and most prosperous empires in Indian history.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/28/Akbar_Mughal_emperor.jpg"
              altText="Portrait of Akbar the Great"
            />
          </motion.section>

          {/* Section 2: Religious Tolerance */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700 inline-block">
                Religious Tolerance
              </h2>
              <p className="text-lg leading-relaxed">
                Akbar is celebrated for promoting religious tolerance. He engaged in dialogues with scholars from Hinduism, Islam, Christianity, and Jainism,
                ultimately creating a syncretic philosophy called Din-i Ilahi that aimed to unify his diverse subjects.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/3f/Akbar_in_court.jpg"
              altText="Akbar in his royal court"
            />
          </motion.section>

          {/* Section 3: Administration and Reforms */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700">
                Administration and Reforms
              </h2>
              <p className="text-lg leading-relaxed">
                He implemented efficient administrative systems, revenue reforms, and merit-based appointments.
                Akbar's governance focused on fairness and justice, strengthening the empire’s stability and prosperity.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/61/Akbar_revenue.jpg"
              altText="Akbar reviewing revenue records"
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
              <h2 className="font-serif text-4xl font-bold text-orange-500 mb-4 pb-2 border-b-2 border-orange-700 inline-block">
                An Enduring Legacy
              </h2>
              <p className="text-lg leading-relaxed">
                Akbar the Great is remembered as a visionary leader whose policies of tolerance, justice, and cultural integration
                left a lasting impact on Indian society and governance, making him one of the most revered rulers in history.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/5c/Fatehpur_Sikri.jpg"
              altText="Akbar's architectural legacy: Fatehpur Sikri"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default AkbarTheGreatPage;
