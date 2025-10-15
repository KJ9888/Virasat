import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Animation from "../components/Animation";
import { motion } from "framer-motion";

type CardItem = {
  title: string;
  desc: string;
  img: string;
  badge?: string;
};

const bannerImage = "https://karnatakatourism.org/wp-content/uploads/2020/06/P10-gallery.jpg";
const bannerFacts = [
  "🌺 Karnataka is famous for its rich heritage, diverse landscapes, and vibrant culture.",
  "🏰 It is home to many historical forts and ancient temples.",
  "🍛 Karnataka cuisine offers distinctive biryanis and spicy street foods.",
  "🎉 Festivals like Dasara in Mysore are spectacular, attracting tourists worldwide."
];

const keyAttractions: CardItem[] = [
  {
    title: "Mysore Palace",
    desc: "The Mysore Palace is an architectural marvel with its grand Durbar Hall, intricate interiors, and vibrant Dasara celebrations, showcasing Karnataka’s royal heritage and cultural grandeur.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mysore_Palace_Front_View.JPG/1200px-Mysore_Palace_Front_View.JPG",
    badge: "Historic"
  },
  {
    title: "Hampi",
    desc: "Hampi is a UNESCO World Heritage Site, famous for its ancient ruins, majestic temple complexes, and captivating landscape that tells the story of the Vijayanagara Empire.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hampi_Hanuman_Temple.JPG",
    badge: "UNESCO"
  },
  {
    title: "Coorg",
    desc: "Coorg, the Scotland of India, enchants visitors with lush coffee plantations, rolling hills, and scenic waterfalls, ideal for nature lovers and adventure seekers.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Coorg_-_The_Scotland_of_India.jpg",
    badge: "Nature"
  },
  {
    title: "Bandipur National Park",
    desc: "Bandipur National Park is a prominent wildlife sanctuary, housing tigers, elephants, and diverse flora and fauna across dense forests and grasslands.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Tiger_Bandipur_National_Park.jpg",
    badge: "Wildlife"
  }
];

const foods: CardItem[] = [
  {
    title: "Bangalore Donne Biryani",
    desc: "Experience the spicy and aromatic Donne Biryani at Meghana Foods in Bangalore. Served traditionally in leaf bowls with raita, it’s a beloved local favorite representing Karnataka’s rich culinary tradition.",
    img: "https://www.mistay.in/travel-blog/content/images/2021/03/Donne-Biryani-1.jpg",
    badge: "Meghana Foods • Bangalore"
  },
  {
    title: "Mysore Pak",
    desc: "Mysore Pak is a decadent sweet made with gram flour, sugar, and ghee. Visit Guru Sweets in Mysore to savor this melt-in-mouth traditional dessert loved across Karnataka.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Mysorepak1.jpg",
    badge: "Sweet • Guru Sweets, Mysore"
  },
  {
    title: "Ragi Mudde",
    desc: "Ragi Mudde is a traditional millet ball served with spicy sambar or curry. It’s a nutritious staple in rural Karnataka, especially in Coorg and rural Bangalore regions.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Ragi_mudde_with_sambar.jpg",
    badge: "Classic"
  },
  {
    title: "Coorgi Pandi Curry",
    desc: "Coorgi Pandi Curry is a spicy wild boar curry native to Coorg. This rich, flavor-packed dish is best tried in local homestays and Coorg restaurants like Raintree by Tamarind.",
    img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shweta_Sarda/Coorgi_Pandi_Curry_Recipe.jpg",
    badge: "Traditional • Raintree, Coorg"
  }
];

const culturalEvents: CardItem[] = [
  {
    title: "Mysore Dasara",
    desc: "Mysore Dasara is a 10-day grand festival celebrating victory of good over evil. The illuminated Mysore Palace, royal processions, traditional dance, and fireworks attract thousands every year.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mysore_Dasara_procession.jpg",
    badge: "Festival"
  },
  {
    title: "Hampi Utsav",
    desc: "Hampi Utsav is a vibrant cultural festival featuring music, dance, drama, and heritage walks set amidst the magnificent ruins of Hampi, reviving the spirit of Vijayanagara.",
    img: "https://hampi.in/wp-content/uploads/2016/03/Hampi-Festival-36.jpg",
    badge: "Cultural"
  },
  {
    title: "Karaga Festival",
    desc: "Karaga is a traditional folk festival celebrated in Bangalore, involving colorful processions, music, and dance honoring the goddess Draupadi with deep cultural roots.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Karaga_festival.jpg",
    badge: "Folk"
  },
  {
    title: "Kambala",
    desc: "Kambala is the traditional buffalo race held in coastal Karnataka, thrilling spectators with high-energy races on water-filled paddy fields during the harvest season.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Kambala-Festival.jpg",
    badge: "Sport"
  }
];

const hiddenGems: CardItem[] = [
  {
    title: "Gokarna Beaches",
    desc: "Gokarna’s pristine beaches offer tranquility away from crowded tourist spots, perfect for meditation, yoga, and beach camping with a scenic Konkan coastline.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Gokarna_beach_panorama.JPG",
    badge: "Nature"
  },
  {
    title: "Chikmagalur Coffee Plantations",
    desc: "Chikmagalur is the heart of Karnataka’s coffee lands. Touring its lush plantations provides insight into coffee cultivation and a peaceful retreat amidst hills.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Chikmagalur_coffee_plantation.jpg",
    badge: "Scenic"
  },
  {
    title: "Jog Falls",
    desc: "Jog Falls is India’s second-highest plunge waterfall, creating a magnificent spectacle in the monsoon season amid dense Western Ghats forests.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Jog_Falls_in_Karnataka_in_August_2021.jpg",
    badge: "Waterfall"
  },
  {
    title: "Belur and Halebidu Temples",
    desc: "These intricately carved Hoysala-era temples showcase some of the finest examples of South Indian temple architecture rich in sculpture and history.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Chennakesava_Temple%2C_Belur_Hoysala_Sculpture_01.jpg",
    badge: "Architectural"
  }
];

const funQuotes = [
  "“Karnataka: A blend of history, nature, and flavor.”",
  "“From the royal palaces to wild waterfalls, adventure awaits.”",
  "“Taste the boldness of biryani and spice of culture.”",
  "“Where every temple has a story, every meal, a memory.”"
];

const galleryImgs: string[] = [
  "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mysore_Palace_Night_View.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/e/e1/Hampi_Vittala_Temple_Stone_Chariot.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/1/10/Coorg_landscape.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandipur_National_Park.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Bangalore_city_skyline_2019.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mysore_Pak.jpg"
];

const KarnatakaPage: React.FC = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const factTimer = setInterval(() => setFactIndex(f => (f + 1) % bannerFacts.length), 4000);
    const quoteTimer = setInterval(() => setQuoteIndex(q => (q + 1) % funQuotes.length), 6500);
    return () => {
      clearInterval(factTimer);
      clearInterval(quoteTimer);
    };
  }, []);

  return (
    <>
      <Animation />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pb-32">
        <Header />

        {/* Banner */}
        <section style={{ minHeight: "92vh" }} className="w-full relative flex items-center justify-center z-10">
          <img
            src={bannerImage}
            alt="Karnataka Banner"
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-transparent flex flex-col justify-center items-center p-8 text-center z-10">
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-2xl mb-4"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Karnataka
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Heritage · Nature · Cuisine · Festivals
            </motion.p>
            <motion.div
              className="bg-white/20 backdrop-blur-lg border border-yellow-300 shadow-2xl rounded-xl px-6 py-3 text-lg text-yellow-300 mb-5 font-semibold"
              key={factIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              {bannerFacts[factIndex]}
            </motion.div>
            <a
              href="#attractions"
              className="mt-6 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 rounded-full text-gray-900 font-bold text-xl shadow-lg"
            >
              Start Exploring
            </a>
          </div>
        </section>

        {/* Quotes */}
        <div className="w-full flex justify-center -mt-10 mb-12 z-20 relative">
          <motion.div
            className="max-w-2xl bg-black bg-opacity-70 rounded-lg px-7 py-4 text-xl text-yellow-300 font-medium border-yellow-400 border shadow-xl"
            key={quoteIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {funQuotes[quoteIndex]}
          </motion.div>
        </div>

        {/* Main Sections */}
        <main className="container mx-auto px-6" id="attractions">
          {/* Key Attractions */}
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">Key Attractions</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-yellow-300">
            {keyAttractions.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-yellow-200">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Epic Foods */}
          <h2 className="text-4xl font-bold text-green-400 mt-20 mb-6">Epic Foods</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-green-400">
            {foods.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-green-400 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-green-300">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cultural Festivals */}
          <h2 className="text-4xl font-bold text-indigo-300 mt-20 mb-6">Cultural Festivals</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-indigo-300">
            {culturalEvents.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-indigo-300 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-indigo-200">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden Gems */}
          <h2 className="text-4xl font-bold text-cyan-300 mt-20 mb-6">Hidden Gems</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-cyan-300">
            {hiddenGems.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-cyan-300 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-cyan-200">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <h2 className="text-4xl font-bold text-pink-300 mt-20 mb-8">Traveler Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8 pb-24">
            {galleryImgs.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Karnataka Gallery ${idx + 1}`}
                className="w-full h-60 object-cover rounded-xl shadow-xl"
              />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-yellow-300 hover:text-yellow-400 font-bold">
              Instagram
            </a>
            <a href="#" className="text-indigo-300 hover:text-indigo-400 font-bold">
              Twitter
            </a>
            <a href="#" className="text-cyan-300 hover:text-cyan-400 font-bold">
              Join Newsletter
            </a>
          </div>
        </Footer>
      </div>
    </>
  );
};

export default KarnatakaPage;