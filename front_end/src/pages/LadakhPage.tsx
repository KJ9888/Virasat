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

const bannerImage = "https://www.indianpanorama.in/blog/public/uploads/news-banner-187.jpg"; // Pangong lake

const bannerFacts = [
  "🏔 Ladakh is often called 'The Land of High Passes'.",
  "🏞 The Pangong Lake changes color with the sky and sunlight.",
  "🏍 The world's highest motorable road, Khardung La (17,582 ft), is in Ladakh.",
  "🏕 The Hemis Monastery is the biggest and wealthiest Buddhist monastery in Ladakh."
];

const keyAttractions: CardItem[] = [
  {
    title: "Pangong Lake",
    desc: "A mesmerizing high-altitude lake known for its breathtaking blue waters, surrounded by mountains. The lake extends into Tibet and is famous for changing colors with the sky.",
    img: "https://t3.ftcdn.net/jpg/08/19/15/58/360_F_819155837_UbNqqJH9jvPUb2ESwi6dzxPQF4y0k460.jpg",
    badge: "Must Visit"
  },
  {
    title: "Khardung La",
    desc: "One of the world's highest motorable mountain passes, Khardung La offers stunning panoramic views and is a gateway to Shyok and Nubra Valleys.",
    img: "https://t4.ftcdn.net/jpg/01/09/84/91/360_F_109849179_Z4ggL0DY6MoavyhOQWkNrJ3yL6c14I4T.jpg",
    badge: "Highest Road"
  },
  {
    title: "Thiksey Monastery",
    desc: "An impressive 12-story complex resembling the Potala Palace of Tibet, Thiksey Monastery is home to a magnificent Maitreya Buddha statue and breathtaking views.",
    img: "https://www.shutterstock.com/shutterstock/videos/3842595721/thumb/1.jpg?ip=x480",
    badge: "Spiritual"
  },
  {
    title: "Nubra Valley",
    desc: "Nubra Valley is a cold desert where the Shyok and Siachen rivers meet, featuring sand dunes, Bactrian camels, and vibrant monasteries.",
    img: "https://mysterioushimachal.wordpress.com/wp-content/uploads/2021/07/nubra-valley.jpg",
    badge: "Valley Gem"
  }
];

const foods: CardItem[] = [
  {
    title: "Thukpa",
    desc: "A warming noodle soup of Tibetan origin, topped with vegetables or meat. Thukpa is a staple comfort food in Ladakhi homes.",
    img: "https://i0.wp.com/infusedliving.net/wp-content/uploads/2021/01/Thukpa-6.png?fit=640%2C467&ssl=1",
    badge: "Soul Food"
  },
  {
    title: "Momos",
    desc: "Steamed or fried dumplings filled with veggies or meat, served with spicy red chili chutney. Momos are Ladakh's street food royalty.",
    img: "https://www.culinaryculture.co/wp-content/uploads/2022/03/Frame-66.png",
    badge: "Street King"
  },
  {
    title: "Skyu",
    desc: "A traditional Ladakhi pasta stew made with thumb-sized wheat dough and root vegetables, simmered to perfection. Best enjoyed during chilly evenings.",
    img: "https://www.ju-lehadventure.com/photos/ladakh_information/food-ladakh-10-must-try-local-dishes-and-drinks/skyu.jpg",
    badge: "Local Classic"
  },
  {
    title: "Butter Tea (Gur Gur Chai)",
    desc: "An energizing tea made with yak butter, salt, and tea leaves, perfect to beat Ladakh's cold. An acquired taste, but a must-try traditional drink.",
    img: "https://static.toiimg.com/photo/79760578.cms",
    badge: "Traditional"
  }
];

const culturalEvents: CardItem[] = [
  {
    title: "Hemis Festival",
    desc: "Held at the Hemis Monastery, this vibrant festival features colorful mask dances (Cham), music, and spiritual ceremonies, celebrating the birth of Guru Padmasambhava.",
    img: "https://allindiatourpackages.in/wp-content/uploads/2019/08/hemis-festival-3.jpg",
    badge: "Flagship"
  },
  {
    title: "Losar",
    desc: "Losar is the Tibetan New Year celebrated with prayers, traditional dance, songs, and spectacular processions, marking good fortune and the arrival of spring.",
    img: "https://media.gettyimages.com/id/1888807686/photo/kathmandu-nepal-december-31-nepalese-women-from-the-gurung-community-dressed-in-traditional.jpg?s=612x612&w=gi&k=20&c=SEgGsObE80QN4WKkCLhet-xDzFU1REvPMYrP174bBXI=",
    badge: "Festival"
  },
  {
    title: "Ladakh Festival",
    desc: "You’ll see street processions, polo matches, music, and lively performances. This festival showcases the region’s rich culture and history.",
    img: "https://media.istockphoto.com/id/469902525/photo/ladakh-festival.jpg?s=612x612&w=0&k=20&c=I8uWSoWJJB6ruJgiorl3Sh7LHQPOQlDJPDobI7ASyXo=",
    badge: "Unique"
  },
  {
    title: "Sindhu Darshan Festival",
    desc: "Celebrating the Indus (Sindhu) River, this event features a vibrant cultural fair, spiritual rituals, and national unity. Held each year in June.",
    img: "https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fd1zvcmhypeawxj.cloudfront.net%2Flocation%2FLeh%20ladakh%2Fblogs%2Fsindhu-darshan-festival-4da27b2d27-oqbxj8-webp-67b9ad9ff8-1752062315050.webp&w=3840&q=50",
    badge: "Spiritual"
  }
];

const hiddenGems: CardItem[] = [
  {
    title: "Turtuk",
    desc: "One of the northernmost villages in India, Turtuk was opened to tourists only in 2010. It's famous for apricot orchards and a unique blend of Balti culture.",
    img: "https://www.shutterstock.com/shutterstock/videos/3660438479/thumb/1.jpg?ip=x480",
    badge: "Frontier"
  },
  {
    title: "Zanskar Valley",
    desc: "A remote, breathtaking valley popular for Chadar trek in winter and white water rafting in summer. Zanskar's raw beauty is unforgettable.",
    img: "https://i0.wp.com/traveldreams.live/wp-content/uploads/2024/07/28.jpg?resize=864%2C576&ssl=1",
    badge: "Adventure"
  },
  {
    title: "Basgo Monastery",
    desc: "Located atop a hill, this monastery boasts centuries-old murals and panoramic views, echoing the golden age of Ladakhi royalty.",
    img: "https://thrillingtravel.in/wp-content/uploads/2018/10/Basgo-Monastery-Leh-Ladakh.jpg",
    badge: "Heritage"
  },
  {
    title: "Magnetic Hill",
    desc: "Known for the optical illusion that appears to pull vehicles uphill. This mysterious stretch on Leh-Kargil highway is a must-romance for travelers.",
    img: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/26/673e417fabec106e44163ce8138c12df_1000x1000.png",
    badge: "Quirky"
  }
];

const funQuotes = [
  "“If there is a paradise on earth, it is here, it is here, it is here!” — Mughal Emperor Jahangir",
  "“Ladakh: Where the mountains touch the sky and the rivers run wild.”",
  "“Every road in Ladakh is a journey of the soul.”",
  "“Breathe deep, the air of Ladakh is freedom itself.”"
];

const galleryImgs: string[] = [
  "https://m2.getsitecontrol.com/images/830/f372d09082beb5f9ef2074036ea11c95_279992394.jpg",
  "https://wallpapercave.com/wp/wp13080644.jpg",
  "https://siaphotography.in/assets/img/blog/blog-584121952.jpg",
  "https://siaphotography.in/assets/img/phototours/photography-tours-611271787.jpg",
  "https://unpluggedlife.in/wp-content/uploads/2023/03/Unplugged_Life_Trip_Pangong_3-1170x658.jpg",
  "https://wanderon-images.gumlet.io/gallery/new/2025/03/21/1742547495991-things-to-do-on-leh-ladakh-bike-trip.jpg"
];

const LadakhPage: React.FC = () => {
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
        {/* Immersive Full Height Banner */}
        <section style={{ minHeight: "92vh" }} className="w-full relative flex items-center justify-center z-10">
          <img
            src={bannerImage}
            alt="Ladakh Banner"
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-transparent flex flex-col justify-center items-center p-8 text-center z-10">
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold text-yellow-300 drop-shadow-2xl mb-4"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >Ladakh</motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >India’s Last Shangri-La · Adventure · Tranquility · Culture</motion.p>
            <motion.div
              className="bg-white/20 backdrop-blur-lg border border-yellow-200 shadow-2xl rounded-xl px-6 py-3 text-lg text-yellow-200 mb-5 font-semibold"
              key={factIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >{bannerFacts[factIndex]}</motion.div>
            <a
              href="#attractions"
              className="mt-6 px-8 py-4 bg-[#fff176] hover:bg-[#ffe082] rounded-full text-gray-900 font-bold text-xl shadow-lg"
            >
              Start Exploring
            </a>
          </div>
        </section>

        {/* Quotes Section */}
        <div className="w-full flex justify-center -mt-10 mb-12 z-20 relative">
          <motion.div
            className="max-w-2xl bg-black bg-opacity-70 rounded-lg px-7 py-4 text-xl text-yellow-200 font-medium border-yellow-300 border shadow-xl"
            key={quoteIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >{funQuotes[quoteIndex]}</motion.div>
        </div>

        {/* Main Sections */}
        <main className="container mx-auto px-6" id="attractions">
          {/* Key Attractions */}
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-200 mb-6">Key Attractions</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-yellow-300">
            {keyAttractions.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-yellow-300 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-yellow-300">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Epic Foods */}
          <h2 className="text-4xl font-bold text-green-300 mt-20 mb-6">Epic Foods</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-green-200">
            {foods.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-green-300 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-green-200">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Festivals & Culture */}
          <h2 className="text-4xl font-bold text-blue-200 mt-20 mb-6">Cultural Festivals</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-blue-200">
            {culturalEvents.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-blue-200 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-blue-200">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hidden Gems */}
          <h2 className="text-4xl font-bold text-cyan-200 mt-20 mb-6">Hidden Gems</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-cyan-200">
            {hiddenGems.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-cyan-200 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-cyan-100">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <h2 className="text-4xl font-bold text-pink-200 mt-20 mb-8">Traveler Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8 pb-24">
            {galleryImgs.map((img, i) => (
              <img key={i} src={img} alt={`Ladakh Gallery ${i + 1}`} className="w-full h-60 object-cover rounded-xl shadow-xl" />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-yellow-300 hover:text-yellow-400 font-bold">Instagram</a>
            <a href="#" className="text-blue-200 hover:text-blue-300 font-bold">Twitter</a>
            <a href="#" className="text-cyan-100 hover:text-cyan-300 font-bold">Join Newsletter</a>
          </div>
        </Footer>
      </div>
    </>
  );
};

export default LadakhPage;