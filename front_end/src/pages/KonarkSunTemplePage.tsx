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

const KonarkTemplePage = () => {
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
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 200, 0, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="relative text-amber-400 font-semibold px-4 py-2 rounded transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          &larr; Back to Monuments
        </button>
      </motion.div>

      {/* Background Animation */}
      <div className="fixed top-0 inset-0 -z-10">
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
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
              Konark Sun Temple <br />
              <span className="text-blue-300">(The Chariot of the Sun God)</span>
            </h1>
          </motion.header>

          {/* Cinematic Video Section */}
          <motion.section
            className="mb-16 md:mb-24 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full md:w-4/5 aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                src="../../assets/konark.mp4"
                controls
                autoPlay
                muted
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 1: Introduction */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">
                Introduction
              </h2>
              <p className="text-xl leading-relaxed">
                Located on the coastline of Odisha, the Konark Sun Temple is a monumental representation of the Sun God Surya's chariot. Its 24 wheels are decorated with symbolic designs and it is led by a team of seven horses. A UNESCO World Heritage site, it is a classic example of Kalinga architecture and one of India's most famous temples.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://t4.ftcdn.net/jpg/05/45/40/15/360_F_545401584_r4Fs1INFeiCzvz3Mi4Tk7cCqQNZp1dQn.jpg"
              altText="The grand stone chariot structure of the Konark Sun Temple"
            />
          </motion.section>

          {/* Section 2: History */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">
                A 13th-Century Marvel
              </h2>
              <p className="text-xl leading-relaxed">
                Built in the 13th century CE by King Narasimhadeva I of the Eastern Ganga dynasty, the temple was an architectural marvel of its time. The name 'Konark' is derived from the Sanskrit words 'Kona' (corner) and 'Arka' (sun). Much of the temple complex is now in ruins, but what remains is a testament to the incredible artistic and engineering skills of its creators.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?cs=srgb&dl=pexels-bharatanirudh-1721747.jpg&fm=jpg"
              altText="The ruins and remaining structures of the Konark temple complex"
            />
          </motion.section>

          {/* Section 3: Architecture */}
          <motion.section
            className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">
                The Stone Chariot
              </h2>
              <p className="text-xl leading-relaxed">
                The temple's most striking feature is its design as a colossal chariot. It features twelve pairs of exquisitely carved stone wheels, three meters in diameter, which act as sundials. The temple is drawn by seven mighty horses. The walls are adorned with intricate carvings, including depictions of deities, musicians, and erotic sculptures known as mithunas.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://media.istockphoto.com/id/96668487/photo/ancient-hindu-sun-temple-at-konark.jpg?s=612x612&w=0&k=20&c=tfjyAU_J1jmhxXTIu31E-6WcH3vcedUOhN-a2Z-YtCY="
              altText="A close-up of one of the intricately carved stone wheels of the Konark Sun Temple"
            />
          </motion.section>

          {/* Section 4: Today */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">
                The Temple Today
              </h2>
              <p className="text-xl leading-relaxed">
                Even in its ruined state, the Konark Sun Temple continues to draw historians, art lovers, and tourists from all over the world. It is a site of immense cultural significance, hosting the annual Konark Dance Festival, which celebrates classical Indian dance forms. The temple is a stunning sight, especially during sunrise and sunset.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/16180328/Sun-Temple.jpg?tr=w-1200,q-60"
              altText="The Konark Sun Temple silhouetted against a beautiful sunset"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default KonarkTemplePage;
