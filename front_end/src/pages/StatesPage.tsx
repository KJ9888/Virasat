import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Animation from "@/components/Animation";

const statesData = [
  // 🟠 Northern Region
  {
    id: "punjab",
    name: "Punjab",
    description:
      "Known as the land of five rivers, Punjab is famous for its vibrant culture, Bhangra dance, fertile fields, and the Golden Temple.",
    imageUrl: "https://static.toiimg.com/photo/108178837.cms",
    path: "/states/punjab",
    region: "Northern",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    description:
      "The land of high passes, Ladakh is known for its monasteries, Pangong Lake, Nubra Valley, and unique Himalayan culture.",
    imageUrl: "https://wanderon-images.gumlet.io/blogs/new/2023/12/leh-ladakh.jpg",
    path: "/union-territories/ladakh",
    region: "Northern",
  },
  {
    id: "delhi",
    name: "Delhi",
    description:
      "India’s capital, Delhi, blends Mughal heritage, colonial architecture, bustling markets, and modern governance.",
    imageUrl:
      "https://img.freepik.com/photos-gratuite/scene-batiments-ville-indienne_23-2151823080.jpg",
    path: "/union-territories/delhi",
    region: "Northern",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    description:
      "Known as Devbhoomi, Uttarakhand is home to the Himalayas, Char Dham Yatra, Jim Corbett National Park, and scenic hill stations.",
    imageUrl:
      "https://t3.ftcdn.net/jpg/01/89/52/82/360_F_189528297_h8isVylVyDAWnEc8C3LDSACWfnIN3qHa.jpg",
    path: "/states/uttarakhand",
    region: "Northern",
  },

  // 🟢 Southern Region
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    description:
      "Tamil Nadu boasts Dravidian temples, Bharatanatyam dance, Carnatic music, and scenic spots like Ooty and Kanyakumari.",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-720x480/15/3b/8c/de.jpg",
    path: "/states/tamil-nadu",
    region: "Southern",
  },
  {
    id: "kerala",
    name: "Kerala",
    description:
      "God’s Own Country, Kerala is famous for its backwaters, houseboats, Kathakali dance, Ayurveda, and lush green landscapes.",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/587/946/340/india-asia-forest-river-wallpaper-preview.jpg",
    path: "/states/kerala",
    region: "Southern",
  },
  {
    id: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    description:
      "Known for pristine beaches, coral reefs, tropical forests, and the historic Cellular Jail in Port Blair.",
    imageUrl:
      "https://indiadekha.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-25-19.06.52-A-scenic-view-of-Port-Blair-the-capital-of-Andaman-and-Nicobar-Islands.-The-image-features-a-beautiful-coastline-with-turquoise-waters-a-bustling-ha-1024x585.webp",
    path: "/union-territories/andaman-nicobar",
    region: "Southern",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    description:
      "Karnataka is home to Hampi ruins, Mysore Palace, coffee plantations of Coorg, and rich classical music traditions.",
    imageUrl:
      "https://www.holidify.com/images/bgImages/HAMPI.jpg",
    path: "/states/karnataka",
    region: "Southern",
  },

  // 🔵 Eastern Region
  {
    id: "sikkim",
    name: "Sikkim",
    description:
      "Nestled in the Himalayas, Sikkim is known for its monasteries, breathtaking landscapes, Kanchenjunga peak, and Buddhist culture.",
    imageUrl:
      "https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/10/Things-to-do-in-Lachung.png",
    path: "/states/sikkim",
    region: "Eastern",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    description:
      "Cultural capital of India, famous for Durga Puja, Howrah Bridge, Sundarbans, and the legacy of Rabindranath Tagore.",
    imageUrl:
      "https://3.imimg.com/data3/SF/JN/MY-11167644/visit-west-bengal.jpg",
    path: "/states/west-bengal",
    region: "Eastern",
  },
  {
    id: "odisha",
    name: "Odisha",
    description:
      "Known for Jagannath Temple, Konark Sun Temple, classical Odissi dance, and Chilika Lake.",
    imageUrl:
      "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/04/a78cca898cea0087e9d53674e5e1914f_1000x1000.jpg",
    path: "/states/odisha",
    region: "Eastern",
  },
  {
    id: "assam",
    name: "Assam",
    description:
      "Gateway to Northeast India, Assam is famous for tea gardens, Kaziranga National Park, and Bihu festival.",
    imageUrl:
      "https://www.holidify.com/images/bgImages/KAZIRANGA-NATIONAL-PARK.jpg",
    path: "/states/assam",
    region: "Eastern",
  },

  // 🟣 Western Region
  {
    id: "maharashtra",
    name: "Maharashtra",
    description:
      "Maharashtra is home to Mumbai, Ajanta-Ellora caves, and diverse landscapes ranging from beaches to hill stations.",
    imageUrl:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=1200&h=-1&s=1",
    path: "/states/maharashtra",
    region: "Western",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    description:
      "Known for Gir National Park, Somnath Temple, Dwarka, Rann of Kutch, and vibrant Navratri celebrations.",
    imageUrl:
      "https://media.assettype.com/outlooktraveller%2F2025-05-08%2Flq5ll7um%2FPilgrimage-circuit-of-Gujarat?w=480&auto=format%2Ccompress",
    path: "/states/gujarat",
    region: "Western",
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    description:
      "The land of forts and palaces, Rajasthan is known for the Thar Desert, Jaipur, Udaipur, and folk music & dance.",
    imageUrl:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
    path: "/states/rajasthan",
    region: "Western",
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    description:
      "A group of exotic islands in the Arabian Sea, famous for lagoons, marine biodiversity, and water sports.",
    imageUrl: "https://etimg.etb2bimg.com/photo/109819916.cms",
    path: "/union-territories/lakshadweep",
    region: "Western",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const StatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filteredStates =
    filter === "All"
      ? statesData
      : statesData.filter((state) => state.region === filter);

  return (
    <>
      <Animation />
    <motion.div className="min-h-screen bg-[#111] text-white">
      <Header />
      <main className="container mx-auto py-24 px-6">
        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 
                     bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500
                     drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] "
        >
          States & Union Territories of India
        </motion.h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Northern", "Southern", "Eastern", "Western"].map((region) => (
            <button
              key={region}
              onClick={() => setFilter(region)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === region
                  ? "bg-gradient-to-r from-orange-400 via-white to-green-500 text-black"
                  : "bg-gray-800 text-white hover:bg-gradient-to-r hover:from-orange-400 hover:via-white hover:to-green-500 hover:text-black"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {filteredStates.map((state) => (
            <motion.div
              key={state.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 10px 25px rgba(255,193,7,0.4)",
              }}
              className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg flex flex-col"
              onClick={() => navigate(state.path)}
            >
              {/* Image */}
              <motion.img
                src={state.imageUrl}
                alt={state.name}
                className="w-full h-64 object-cover"
              />
              {/* Content */}
              <div className="p-6 bg-gray-900 bg-opacity-70 flex-1 flex flex-col justify-start">
                <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-white to-green-500 mb-2 rounded"></div>
                <h3 className="text-2xl font-bold">{state.name}</h3>
                <p className="text-gray-300 mt-2">{state.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </motion.div>
    </>
  );
};

export default StatesPage;
