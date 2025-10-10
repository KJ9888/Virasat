// src/pages/MahabharataPage.tsx
import React from "react";
import { motion } from "framer-motion";
import Animation from "../components/Animation";

interface ImageDisplayProps {
  imageUrl: string;
  altText: string;
}

// Animated Image Component
const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => (
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
      className="w-full h-72 md:h-80 lg:h-96 object-cover rounded-lg"
    />
  </motion.div>
);

const MahabharataPage: React.FC = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
    <Animation/>
    <main className=" font-sans text-gray-300 py-12 md:py-20">
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
            The Epic of Dharma and Duty
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-yellow-400">
            Mahabharata: <span className="text-amber-300">The Great War and Eternal Lessons</span>
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
              src="../../assets/mahabharata.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* Section 1: The Epic Begins */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-yellow-400 mb-4 pb-2 border-b-2 border-yellow-600">
              The Epic Begins
            </h2>
            <p className="text-lg leading-relaxed">
              The Mahabharata, composed by sage Vyasa, tells the story of the Kuru dynasty, the
              rivalry between the Pandavas and Kauravas, and the moral dilemmas that shape destiny.
              From the kingdom of Hastinapur to the battlefield of Kurukshetra, the tale explores
              dharma (righteousness) and the consequences of choices.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://i.pinimg.com/736x/2b/8e/d0/2b8ed0e65c17b55465e28ee39cc8a7e8.jpg"
            altText="Illustration of Pandavas and Kauravas in Hastinapur"
          />
        </motion.section>

        {/* Section 2: Key Events */}
        <motion.section
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-yellow-400 mb-4 pb-2 border-b-2 border-yellow-600 inline-block">
              Key Events
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              The epic unfolds with significant events that shaped the Pandavas’ destiny. Notable
              highlights include:
            </p>
            <ul className="text-lg leading-relaxed list-disc list-inside text-right space-y-2">
              <li>The game of dice and the exile of Pandavas.</li>
              <li>Formation of alliances and divine guidance by Krishna.</li>
              <li>Arjuna’s training and the Bhagavad Gita dialogue.</li>
            </ul>
          </div>
          <ImageDisplay
            imageUrl="https://www.poojn.in/wp-content/uploads/2025/04/Key-Figures-of-the-Mahabharata-Exploring-CharactersRelationshipsStories.jpeg.jpg"
            altText="Depiction of the Kurukshetra battlefield"
          />
        </motion.section>

        {/* Section 3: The Great War */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-yellow-400 mb-4 pb-2 border-b-2 border-yellow-600">
              The Great War
            </h2>
            <p className="text-lg leading-relaxed">
              The Kurukshetra war was fought over 18 days with epic heroes and mighty warriors on
              both sides. Strategies, valor, and divine intervention determined the outcome, making
              it a defining event of Indian epic history.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://t3.ftcdn.net/jpg/05/37/17/82/360_F_537178232_mTbzhVGg9LZBe4cQiTzoHIn4bb9KLSIg.jpg"
            altText="Illustration of warriors fighting in the Mahabharata war"
          />
        </motion.section>

        {/* Section 4: The Legacy */}
        <motion.section
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-yellow-400 mb-4 pb-2 border-b-2 border-yellow-600 inline-block">
              The Eternal Legacy
            </h2>
            <p className="text-lg leading-relaxed">
              The Mahabharata leaves an indelible mark on Indian philosophy, ethics, and culture.
              Its teachings on dharma, karma, duty, and righteousness continue to inspire
              generations. Through stories of courage, strategy, and morality, the epic serves as a
              guide for life’s dilemmas.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://t3.ftcdn.net/jpg/09/67/25/88/360_F_967258873_E4ANCYRi0HenmVl2OTpaDBB8jYHrDLB1.jpg"
            altText="Krishna giving guidance to Arjuna on the battlefield"
          />
        </motion.section>
      </article>
    </main>
    </>
  );
};

export default MahabharataPage;
