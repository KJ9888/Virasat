
import { motion } from "framer-motion";

// Image Display Component with animation
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

const QutubMinarPage = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
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
            The Qutub Minar <span className="text-green-500">(Tower of Victory)</span>
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
              src="https://cdn.videvo.net/videvo_files/video/free/2022-06/large_watermarked/220512_03_QutubMinar_1080p_preview.mp4"
              controls
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
              The Qutub Minar, a UNESCO World Heritage Site in Delhi, is a towering 73-meter-high minaret. Built by Qutb-ud-din Aibak in 1193, the tower was constructed to celebrate the victory of Mohammed Ghori over the Rajput king, Prithviraj Chauhan.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://s7ap1.scene7.com/is/image/incredibleindia/qutab-minar-delhi-attr-hero?qlt=82&ts=1742169673469"
            altText="The towering Qutub Minar against a blue sky"
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
              A Journey Through History
            </h2>
            <p className="text-xl leading-relaxed">
              The construction was started by Qutb-ud-din Aibak but was completed by his successor, Iltutmish. The minaret is surrounded by several other ancient and medieval structures, collectively known as the Qutub complex. It has survived damage from lightning and earthquakes over the centuries.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://halaltripindia.com/wp-content/uploads/2022/10/QUTUB-COMPLEX-01-1024x596.jpeg"
            altText="Intricate carvings and inscriptions on the Qutub Minar"
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
              Architectural Grandeur
            </h2>
            <p className="text-xl leading-relaxed">
              A masterpiece of Indo-Islamic architecture, the tower has five distinct storeys, each marked by a projecting balcony. The first three storeys are made of red sandstone, while the fourth and fifth storeys are of marble and sandstone. Verses from the Quran are inscribed on its walls.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.pexels.com/photos/12446190/pexels-photo-12446190.jpeg"
            altText="Architectural detail of the balconies of Qutub Minar"
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
              The Monument Today
            </h2>
            <p className="text-xl leading-relaxed">
              Today, the Qutub Minar is one of Delhi's most popular tourist attractions, drawing visitors from around the world. The surrounding complex, with its rich history and beautiful ruins, provides a serene escape from the bustling city.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/04/Qutub-Minar-Delhi.jpg?fit=1024%2C686&ssl=1"
            altText="Tourists exploring the Qutub complex"
          />
        </motion.section>
      </article>
    </main>
  );
};

export default QutubMinarPage;
