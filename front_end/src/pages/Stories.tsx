// src/pages/MonumentsPage.tsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Animation from "@/components/Animation";
const storiesData = [
  {
    id: 'mahabharata',
    name: 'Mahabharata',
    description: 'An ancient Indian epic that narrates the Kurukshetra War.',
    imageUrl: 'https://www.bvashram.org/wp-content/uploads/2005/11/mahabharata-01.jpg',
    path: '/stories/mahabharata'
  },
  {
    id: 'sambhaji-maharaj',
    name: 'Sambhaji Maharaj',
    description: "The valiant Maratha king and his defiance against the Mughal Empire.",
    imageUrl: 'https://img.indiaforums.com/media/800x0/63/1979-vicky-kaushal-roars-as-chhatrapati-sambhaji-maharaj-in-the-gripping-trailer-of-chhaava.webp',
    path: '/stories/sambhaji-maharaj'
  },
  {
    id: 'ashoka-the-great',
    name: 'Ashoka the Great',
    description: 'The emperor who waged war on war itself.',
    imageUrl: 'https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/8/1/6f804b659c854fe9bb1ed946f57e7ac6',
    path: '/stories/ashoka-the-great'
  },
  {
    id: 'khalsa-birth',
    name: 'Khalsa Birth',
    description: 'The birth of the Khalsa, a significant event in Sikh history.',
    imageUrl: 'https://i.ytimg.com/vi/JWKRyRI1itU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDa5yp3sbIOIjDYps-pZAlae95pAg',
    path: '/stories/khalsa-birth'
  },
  {
    id: 'maharana-pratap',
    name: 'Maharana Pratap',
    description: 'The valiant king of Mewar known for his bravery against the Mughal Empire.',
    imageUrl: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/50500/67062/Maharana_Pratap_option_Fizdi_Vimanika_Arts__72204.1589018860.jpg?c=2',
    path: '/stories/maharana-pratap'
  },
  {
    id: 'ramayana',
    name: 'Ramayana',
    description: 'An ancient Indian epic narrating the life of Prince Rama.',
    imageUrl: 'https://m.media-amazon.com/images/I/91odtfOhJ-L.jpg',
    path: '/stories/ramayana'
  },
  {
    id: 'guru-granth-sahib',
    name: 'Guru-Granth Sahib',
    description: 'The holy scripture of Sikhism, containing hymns and writings of Sikh Gurus.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWn5UKzolSZW0b0B4VZBODI3U6QgaAp0PSuQ&s',
    path: '/stories/guru-granth-sahib'
  },
  {
    id: 'akbar-the-great',
    name: 'Akbar the Great',
    description: 'The Mughal emperor known for his policy of religious tolerance.',
    imageUrl: 'https://cards.algoreducation.com/_next/image?url=https%3A%2F%2Ffiles.algoreducation.com%2Fproduction-ts%2F__S3__6a253240-77e7-4fbb-aded-06732437ce40&w=3840&q=75',
    path: '/stories/akbar-the-great'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const StoriesPage: React.FC = () => {
  return (
    <>
      <Animation />
    <motion.div className="min-h-screen bg-[#111] text-white">
      <Header />
      <main className="container mx-auto py-24 px-6">

        {/* Patriotic Gradient Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12
          py-2 
                     bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500
                     drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          Stories of Our Heritage
        </motion.h1>

        {/* Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {storiesData.map((story) => (
            <Link to={story.path} key={story.id}>
              <motion.div
                variants={cardVariants}

                whileHover={{ scale: 1.07, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)" }}
                className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg flex flex-col"
              >
                {/* Card Image with fixed height */}
                <motion.img
                  src={story.imageUrl}
                  alt={story.name}
                  className="w-full h-64 object-cover"
                />
                {/* Card content with fixed height to make all cards uniform */}
                <div className="p-6 bg-gray-900 bg-opacity-70 flex-1 flex flex-col justify-start">
                  <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-white to-green-500 mb-2 rounded"></div>
                  <h3 className="text-2xl font-bold">{story.name}</h3>
                  <p className="text-gray-300 mt-2">{story.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </main>
      <Footer />
    </motion.div>
    </>

  );
};

export default StoriesPage;
