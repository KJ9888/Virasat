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

const AjantaCavesPage = () => {
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
              Ajanta Caves <br />
              <span className="text-blue-300">(Buddhist Rock-Cut Masterpieces)</span>
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
                src="../../assets/ajanta.mp4"
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
                The Ajanta Caves are a series of 30 rock-cut Buddhist cave monuments located in the Aurangabad district of Maharashtra. Dating from the 2nd century BCE to about 480 CE, these caves are a UNESCO World Heritage Site and are considered masterpieces of Buddhist religious art that have had a significant influence on art in India.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://s7ap1.scene7.com/is/image/incredibleindia/ajanta-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-1?qlt=82&ts=1727010611256"
              altText="The horseshoe-shaped cliff face of the Ajanta Caves"
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
                Rediscovered History
              </h2>
              <p className="text-xl leading-relaxed">
                The caves were built in two phases, the first during the Satavahana dynasty and the second during the Vakataka dynasty. After lying hidden in the dense jungle for centuries, they were accidentally rediscovered in 1819 by a British colonial officer named John Smith during a tiger hunt. His discovery brought this ancient artistic treasure to the world's attention.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://s7ap1.scene7.com/is/image/incredibleindia/ajanta-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-2?qlt=82&ts=1727010576169"
              altText="A view of the river and valley in front of the Ajanta Caves"
            />
          </motion.section>

          {/* Section 3: Art and Murals */}
          <motion.section
            className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">
                Art and Murals
              </h2>
              <p className="text-xl leading-relaxed">
                Ajanta is most famous for its magnificent murals and frescoes, which are the finest surviving examples of ancient Indian painting. These vibrant paintings depict the Jataka tales, which are stories of the Buddha's previous lives. The caves also feature stunning rock-cut sculptures and architectural details within their prayer halls (chaityas) and monasteries (viharas).
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://media.assettype.com/outlooktraveller%2F2025-08-06%2F7sa66ppu%2Fshutterstock2412374961-min.jpg?w=480&auto=format%2Ccompress&fit=max"
              altText="A vibrant and detailed mural painting from inside the Ajanta Caves"
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
                The Caves Today
              </h2>
              <p className="text-xl leading-relaxed">
                Today, the Ajanta Caves are a major tourist destination and a significant pilgrimage site for Buddhists. Preserving these ancient paintings from decay is an ongoing effort. A visit to the caves offers a profound glimpse into the artistic and religious life of ancient India, a journey back in time that leaves a lasting impression.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://travel-blog.happyeasygo.com/wp-content/uploads/2020/06/Ajanta-Caves-Monument.jpg"
              altText="The interior of a prayer hall in the Ajanta Caves with a sculpted Buddha"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default AjantaCavesPage;
