// src/pages/SambhajiMaharajPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Animation from '../components/Animation';
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

const SambhajiMaharajPage: React.FC = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
          <p className="text-lg text-red-600 font-semibold mb-2 tracking-wide uppercase">
            A DHARMAVEER'S LEGACY
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-red-800">
            The King's Final Stand: <span className="text-amber-400">Defiance of Sambhaji Maharaj</span>
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
              src=""
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* Section 1: The Capture */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700">
              The Capture
            </h2>
            <p className="text-lg leading-relaxed">
              In February 1689, the course of Maratha history was forever altered. Chhatrapati Sambhaji Maharaj, through an act of betrayal, was captured by Mughal forces at Sangameshwar. He was brought in chains to the camp of Emperor Aurangzeb, the man who had spent nearly a decade trying, and failing, to conquer his kingdom.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/shivajis-daring-agra-escape-that-humiliated-aurangzeb-and-cemented-maratha-legacy-195653427-16x9_0.jpg?VersionId=YTGQ.e0gJi7fiwqcVH2XkYqr2HHU5lgj"
            altText="A portrait of Chhatrapati Sambhaji Maharaj"
          />
        </motion.section>

        {/* Section 2: The Emperor's Offer */}
        <motion.section
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700 inline-block">
              The Emperor's Offer
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Brought before the mighty emperor, Sambhaji Maharaj was not a broken man. He stood with the pride of a king, his eyes reflecting an unbroken spirit. Aurangzeb made him an offer, believing he could finally break the Maratha will. The terms were clear:
            </p>
            <ul className="text-lg leading-relaxed list-disc list-inside text-right space-y-2">
              <li>Surrender all your forts.</li>
              <li>Reveal the location of your hidden treasures.</li>
              <li>Renounce your Hindu faith and convert to Islam.</li>
            </ul>
          </div>
          <ImageDisplay
            imageUrl="https://media.assettype.com/dharmadispatch%2F2025-02-23%2F44z5gq43%2Fsambhajibattle.jpg?rect=124%2C0%2C896%2C504"
            altText="An illustration of the opulent Mughal court of Emperor Aurangzeb"
          />
        </motion.section>

        {/* Section 3: The Defiance */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700">
              Absolute Defiance
            </h2>
            <p className="text-lg leading-relaxed">
              To a lesser man, this would have been a lifeline. For Sambhaji Maharaj, it was an insult. He looked at the emperor and scornfully rejected the offer. Legends say his reply was filled with such fearless contempt that it stunned the entire Mughal court. He made it clear that he would choose a thousand deaths over a life of dishonor and abandoning his Dharma. He declared that the Maratha spirit of freedom was not for sale.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.news18.com/ibnlive/uploads/2022/05/chhatrapati-sambhaji-raje-birth-anniversary.jpg"
            altText="A strong Maratha hill fort, symbolizing resistance and Swarajya"
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
            <h2 className="font-serif text-4xl font-bold text-red-500 mb-4 pb-2 border-b-2 border-red-700 inline-block">
              The Dharmaveer's Sacrifice
            </h2>
            <p className="text-lg leading-relaxed">
              Enraged by this absolute defiance, Aurangzeb ordered a brutal execution. Yet, through unimaginable pain, Sambhaji Maharaj never relented. His refusal to bow down, even in the face of certain death, was his final act of resistance. His sacrifice did not crush the Marathas; it ignited a fire of vengeance and unity that ultimately consumed Mughal ambitions. This single, powerful act is why he is remembered as Dharmaveer—the valiant protector of righteousness.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcosohje7EpgC7tamRhOEtTaH5Ru2hWLnRHg&s"
            altText="The saffron Maratha flag (Bhagwa Dhwaj) flying proudly"
          />
        </motion.section>

      </article>
    </main>
    </>
  );
};

export default SambhajiMaharajPage;
