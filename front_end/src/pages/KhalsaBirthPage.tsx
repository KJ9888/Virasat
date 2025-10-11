// src/pages/KhalsaBirthPage.jsx
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

const KhalsaBirthPage = () => {
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
              The Birth of the Khalsa
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-blue-400">
              Khalsa <br />
              <span className="text-blue-300">The Warrior Spirit of Sikhism</span>
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
                src="../../assets/khalsa.mp4"
                controls
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 1: Historical Context */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700">
                The Need for Khalsa
              </h2>
              <p className="text-lg leading-relaxed">
                In 1699, Guru Gobind Singh, the tenth Sikh Guru, created the Khalsa to defend righteousness and protect the oppressed.
                The Khalsa symbolized courage, devotion, and equality. This historic formation marked a transformation in Sikh identity and spiritual strength.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/7e/Guru_Gobind_Singh_portrait.jpg"
              altText="Portrait of Guru Gobind Singh"
            />
          </motion.section>

          {/* Section 2: The Vaisakhi Ceremony */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700 inline-block">
                The Vaisakhi Ceremony
              </h2>
              <p className="text-lg leading-relaxed">
                On Vaisakhi day, Guru Gobind Singh initiated the first Khalsa by baptizing five beloved Sikhs, the Panj Pyare,
                with Amrit (holy nectar). This ceremony established the code of conduct, the five Ks, and a warrior spirit devoted to dharma.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/0e/Panj_Pyare_initiation.jpg"
              altText="Depiction of the Panj Pyare initiation ceremony"
            />
          </motion.section>

          {/* Section 3: The Khalsa Code */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700">
                The Khalsa Code
              </h2>
              <p className="text-lg leading-relaxed">
                The Khalsa adopted a strict code of conduct emphasizing equality, courage, and devotion.
                The five Ks (Kesh, Kara, Kanga, Kacchera, Kirpan) became symbols of identity, commitment, and readiness to defend righteousness.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/96/Khalsa_initiation.png"
              altText="Artistic depiction of Khalsa initiation"
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
              <h2 className="font-serif text-4xl font-bold text-blue-500 mb-4 pb-2 border-b-2 border-blue-700 inline-block">
                A Lasting Legacy
              </h2>
              <p className="text-lg leading-relaxed">
                The Khalsa continues to inspire Sikhs worldwide. Their courage, discipline, and commitment to dharma remain guiding principles.
                From selfless service to defending justice, the Khalsa embodies the warrior spirit and spiritual devotion envisioned by Guru Gobind Singh.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/2d/Khalsa_Warriors.jpg"
              altText="Modern depiction of Khalsa warriors"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default KhalsaBirthPage;
