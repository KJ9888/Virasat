// src/pages/AshokaTheGreatPage.jsx
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

const AshokaTheGreatPage = () => {
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
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 50, 0, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="relative text-red-400 font-semibold px-4 py-2 rounded transition-all duration-300
            after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300
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
            <p className="text-lg text-red-500 font-semibold mb-2 tracking-wide uppercase">
              The Great Mauryan Emperor
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-red-400">
              Ashoka The Great <br />
              <span className="text-red-300">From Conqueror to Benevolent King</span>
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
                src="../../assets/ashoka.mp4"  // Place your Ashoka video in assets folder
                controls
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 1 */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700">
                Chandashoka: The Fierce Conqueror
              </h2>
              <p className="text-lg leading-relaxed">
                Before he was known as 'Ashoka the Great', he was 'Chandashoka'—Ashoka the Fierce. 
                Early in his reign, he was a ruthless ruler, expanding the Mauryan Empire with military campaigns across the Indian subcontinent. 
                Historical records describe him as ambitious, determined, and sometimes merciless, establishing control over vast territories 
                through both diplomacy and war. His conquests laid the foundation for one of the largest empires in Indian history.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://i.pinimg.com/736x/52/5e/44/525e445081de72184e88e09266722307.jpg"
              altText="An artistic depiction of Emperor Ashoka as a fierce warrior"
            />
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700 inline-block">
                The Horrors of Kalinga
              </h2>
              <p className="text-lg leading-relaxed">
                The one kingdom that stood in his way was Kalinga. In 261 BCE, Ashoka launched a massive invasion, leading to the Kalinga War. 
                Ancient inscriptions record that over 100,000 people were killed, and countless others were displaced or wounded. 
                Witnessing the extreme suffering and devastation firsthand, Ashoka experienced a profound moral and emotional awakening. 
                This tragic battle became the turning point in his life, ultimately shaping his philosophy and policies as a ruler devoted to peace and welfare.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://miro.medium.com/0*nPXKY2EGCO3_DD-0.jpg"
              altText="A somber artistic depiction of the battlefield after the Kalinga War"
            />
          </motion.section>

          {/* Section 3 */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700">
                From Conquest to Compassion
              </h2>
              <p className="text-lg leading-relaxed">
                The bloodshed of Kalinga deeply affected Ashoka. He renounced violent conquest and adopted Buddhism, 
                dedicating his life to spreading dharma, non-violence, and moral governance. 
                He built stupas, pillars, and edicts inscribed with messages promoting ethical conduct, religious tolerance, 
                and welfare for all living beings. His transformation is considered one of the greatest personal and political shifts in history.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://nagvanshingo.com/wp-content/uploads/2025/08/ChatGPT-Image-Aug-11-2025-07_02_04-PM.jpg"
              altText="A historical image or replica of an Ashoka Pillar"
            />
          </motion.section>

          {/* Section 4 */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700 inline-block">
                An Enduring Legacy
              </h2>
              <p className="text-lg leading-relaxed">
                Ashoka's edicts and pillars remain a testament to his vision of a just and peaceful society. 
                The Ashoka Chakra, featured on the Indian national flag, symbolizes his commitment to dharma and ethical governance. 
                Across centuries, his reign is remembered for the monumental shift from a conquering emperor to a benevolent, principled leader, 
                inspiring generations with ideals of compassion, religious tolerance, and public welfare.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://vaseemkhan.com/wp-content/uploads/2020/12/tru_da_ashoka_pillar_of_ashoka.jpg?w=1000"
              altText="A clear depiction of the Ashoka Chakra"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default AshokaTheGreatPage;
