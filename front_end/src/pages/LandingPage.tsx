import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

// Reusable divider (inline version to keep file self-contained)
const SectionDivider = ({ delay = 0.1 }: { delay?: number }) => (
  <motion.div
    role="separator"
    aria-hidden="true"
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: "min(90%, 960px)", opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay }}
    className="
      mx-auto mt-12 mb-2 h-[2px] rounded-full
      bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500
      shadow-[0_0_10px_#f5c86d]
    "
  />
);

const scrollFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Monuments Section */}
      <motion.section
        id="monuments"
        className="
          min-h-screen flex flex-col items-center justify-center
          bg-[radial-gradient(140%_90%_at_50%_50%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.38)_100%)]
          text-white px-6 py-24
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollFadeIn}
      >
        <motion.h2
          className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500 drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Monuments of India
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl opacity-90">
          {[
            {
              name: "Taj Mahal",
              img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
              desc:
                "The Taj Mahal, an iconic symbol of love, stands gracefully on the banks of the Yamuna River in Agra. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this marble marvel showcases intricate carvings, symmetrical gardens, and a breathtaking dome. It is not only an architectural masterpiece but also a testament to India’s rich Mughal heritage.",
            },
            {
              name: "Qutub Minar",
              img: "https://imgs.search.brave.com/kPTxvWvUyY0dq1h91Vsjeed868R7skbCOP0oH-4-wGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MTA0NDE5L3Bob3Rv/L3F1dHViLW1pbmFy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UZWtheWdVSHRX/SUVGOGFXa0V1dVUz/UUNpb0FvUjAxaWxG/aTNqeE04ODM4PQ",
              desc:
                "Standing tall in Delhi, the Qutub Minar is a towering example of Indo-Islamic architecture. Constructed in 1193, this five-story red sandstone minaret is adorned with intricate carvings and inscriptions from the Quran. A UNESCO World Heritage Site, it represents the advent of Islamic rule in India.",
            },
            {
              name: "Red Fort",
              img: "https://imgs.search.brave.com/1L2uJX-E4WOjnyUVRISAPnysyXmoYfZNriJHKocNcvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/OTk4NzUwNy9waG90/by9yZWQtZm9ydC1k/ZWxoaS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Zm8xdld2/T0NaOFJUWVBmVXB3/aWNrd1IyMFM0blhN/OVhfNFhTR1RCbDVL/cz0",
              desc:
                "Delhi’s Red Fort, or Lal Qila, served as the main residence of the Mughal emperors for nearly 200 years. Its massive red sandstone walls, ornate gates, and expansive courtyards reflect the grandeur of Mughal architecture. Every year, it hosts India’s Independence Day celebrations, making it historically and culturally significant.",
            },
            {
              name: "India Gate",
              img: "https://i.pinimg.com/originals/1e/2c/e8/1e2ce8efb339a000591a0d0114bf3c04.jpg",
              desc:
                "India Gate, located in New Delhi, is a war memorial built to honor the soldiers of the British Indian Army who died during World War I. Designed by Sir Edwin Lutyens, this towering arch stands amidst lush lawns and fountains, beautifully illuminated at night.",
            },
          ].map((monument, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg transition-transform duration-200"
              whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(255, 193, 7, 0.7)" }}
            >
              <img src={monument.img} alt={monument.name} className="w-full h-72 md:h-80 lg:h-96 object-cover" />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-md text-gray-200 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-amber-400 mb-2">{monument.name}</h3>
                <p className="text-sm">{monument.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <a href="/monuments" className="mt-16">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.8), 0px 0px 40px rgba(255, 193, 7, 0.4)",
              transition: { duration: 10, repeat: Infinity, repeatType: "mirror" },
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-4 rounded-full font-bold text-white bg-black/80 backdrop-blur-md border border-amber-400 shadow-lg shadow-amber-500/40 transition-all duration-200 ease-in-out font-serif text-xl"
          >
            See All Monuments
          </motion.button>
        </a>

        <SectionDivider variant="diamond" />
      </motion.section>

      {/* Stories Section */}
      <motion.section
        id="stories"
        className="
          min-h-screen flex flex-col items-center justify-center
          bg-[radial-gradient(140%_90%_at_50%_50%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.38)_100%)]
          text-white px-6 py-20
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollFadeIn}
      >
        <motion.h2
          className="text-xl md:text-6xl py-2 font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          Heritage Stories
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl opacity-90">
          {[
            {
              title: "Ramayan — Tales of Ayodhya",
              img: "https://m.media-amazon.com/images/I/91odtfOhJ-L.jpg",
              desc:
                "The epic narrates the life of Rama, the seventh avatar of Vishnu. It follows his exile, Sita’s abduction, and the triumph of dharma.",
            },
            {
              title: "Mahabharata — The Great War",
              img: "https://www.bvashram.org/wp-content/uploads/2005/11/mahabharata-01.jpg",
              desc:
                "The Mahabharata recounts the Kurukshetra War and moral dilemmas of the Pandavas and Kauravas, exploring duty and righteousness.",
            },
            {
              title: "Guru Granth Sahib — The Eternal Light",
              img: "https://mir-s3-cdn-cf.behance.net/projects/404/17d883180129359.Y3JvcCwxNTAwLDExNzMsMCw1OQ.jpg",
              desc:
                "The central scripture of Sikhism, compiled with hymns of Gurus and saints, guiding seekers towards devotion and oneness.",
            },
            {
              title: "Akbar — The Great Mughal",
              img: "https://files.algoreducation.com/production-ts/__S3__67e6e5e0-8d50-4702-abf4-86b2615b2256",
              desc:
                "A patron of arts and pluralism, Akbar’s reign marked a syncretic golden age blending cultures, ideas, and innovation.",
            },
          ].map((story, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-200 group shadow-lg hover:shadow-amber-400/50"
              whileHover={{ scale: 1.03 }}
            >
              <img src={story.img} alt={story.title} className="w-full h-72 md:h-80 lg:h-72 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md text-gray-200 p-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2">{story.title}</h3>
                <p className="text-sm md:text-base">{story.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <a href="/stories" className="mt-16">
          <motion.button
            className="px-10 py-4 bg-amber-400 text-black font-bold rounded-full hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/50"
            whileHover={{ scale: 1.05 }}
          >
            See All Stories
          </motion.button>
        </a>

        <SectionDivider />
      </motion.section>

      {/* States & UTs Section */}
      <motion.section
        id="states"
        className="
          min-h-screen flex flex-col items-center justify-center
          bg-[radial-gradient(140%_90%_at_50%_50%,rgba(0,0,0,0.45)_45%,rgba(0,0,0,0.38)_100%)]
          text-white px-6 py-24
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollFadeIn}
      >
        <motion.h2
          className="text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500 drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          States & Union Territories of India
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl opacity-90">
          {[
            {
              name: "Punjab",
              img: "https://static.toiimg.com/photo/108178837.cms",
              desc:
                "Land of five rivers, vibrant culture, Bhangra, fertile fields, and the iconic Golden Temple in Amritsar.",
            },
            {
              name: "Maharashtra",
              img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=1200&h=-1&s=1",
              desc:
                "Home to Mumbai, Ajanta–Ellora, and diverse landscapes from beaches to hill stations.",
            },
            {
              name: "Sikkim",
              img: "https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/10/Things-to-do-in-Lachung.png",
              desc:
                "Himalayan monasteries, Kanchenjunga views, rich Buddhist culture, and pristine valleys.",
            },
            {
              name: "Tamil Nadu",
              img: "https://media.tacdn.com/media/attractions-splice-spp-720x480/15/3b/8c/de.jpg",
              desc:
                "Dravidian temples, Bharatanatyam, Carnatic music, and scenic Ooty to Kanyakumari trails.",
            },
            {
              name: "Ladakh",
              img: "https://wanderon-images.gumlet.io/blogs/new/2023/12/leh-ladakh.jpg",
              desc:
                "Land of high passes, monasteries, Pangong Lake, and stark Himalayan deserts.",
            },
            {
              name: "Delhi",
              img: "https://img.freepik.com/photos-gratuite/scene-batiments-ville-indienne_23-2151823080.jpg?w=740&q=80",
              desc:
                "Capital with Mughal heritage, colonial architecture, markets, and seat of government.",
            },
              {
              name: "Andaman & Nicobar",
              img: "https://indiadekha.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-25-19.06.52-A-scenic-view-of-Port-Blair-the-capital-of-Andaman-and-Nicobar-Islands.-The-image-features-a-beautiful-coastline-with-turquoise-waters-a-bustling-ha-1024x585.webp",
              desc:
                "Pristine beaches, coral reefs, Cellular Jail, and lush tropical islands.",
            },
            {
              name: "Lakshadweep",
              img: "https://etimg.etb2bimg.com/photo/109819916.cms",
              desc:
                "Lagoons, marine life, and water sports across jewel-like atolls in the Arabian Sea.",
            },
          ].map((place, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg transition-transform duration-200"
              whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(255, 193, 7, 0.7)" }}
            >
              <img src={place.img} alt={place.name} className="w-full h-72 md:h-80 lg:h-96 object-cover" />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-md text-gray-200 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-amber-400 mb-2">{place.name}</h3>
                <p className="text-sm">{place.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <a href="/states" className="mt-16">
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255, 193, 7, 0.8), 0px 0px 40px rgba(255, 193, 7, 0.4)",
              transition: { duration: 10, repeat: Infinity, repeatType: "mirror" },
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-4 rounded-full font-bold text-white bg-black/80 backdrop-blur-md border border-amber-400 shadow-lg shadow-amber-500/40 transition-all duration-200 ease-in-out font-serif text-xl"
          >
            See All States & UTs
          </motion.button>
        </a>

       
      </motion.section>
    </>
  );
};

export default LandingPage;
