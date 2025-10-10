// src/pages/AshokaPage.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ImageDisplayProps {
  imageUrl: string;
  altText: string;
}

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

const AshokaPage: React.FC = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.header
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-red-600 font-semibold mb-2 tracking-wide uppercase">
            TRANSFORMATION OF AN EMPEROR
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-red-800">
            Ashoka: <span className="text-amber-400">The Emperor Who Waged War on War Itself</span>
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
            imageUrl="https://www.historicnation.in/wp-content/uploads/2020/01/sri-krishnadevaraya-of-vijayanagar-300x169.jpg"
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
  );
};

export default AshokaPage;
