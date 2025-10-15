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

const bannerImage = "https://www.creativehatti.com/wp-content/uploads/edd/2021/05/Delhi-city-vector-skyline-on-colored-background-large.jpg";
const bannerFacts = [
  "🕌 The only city with 3 UNESCO World Heritage sites.",
  "🌆 City of 15 million daily commuters!",
  "🍛 Street food capital: 2500+ food stalls in Old Delhi alone!",
  "🏏 Hosted first-ever Asian Games (1951)."
];

const keyAttractions: CardItem[] = [
  {
    title: "Red Fort",
    desc: "The Red Fort, or Lal Qila, is an iconic and massive historic fortress in Old Delhi built by the Mughal Emperor Shah Jahan in the 17th century. Made of striking red sandstone, it served as the main residence of the Mughal emperors for nearly 200 years and was the ceremonial and political center of the Mughal state.",
    img: "https://img.freepik.com/premium-photo/famous-red-fort-delhi-india-sunny-day-view_400112-368.jpg",
    badge: "Must Visit"
  },
  {
    title: "Qutub Minar",
    desc: "A UNESCO World Heritage Site, the Qutub Minar is a 73-meter-tall victory tower in Delhi, celebrated for its stunning Indo-Islamic architecture. Its construction began in 1192 by Qutb-ud-din Aibak to mark the beginning of the Delhi Sultanate, and it's famed for its intricate red sandstone carvings and marble details. ",
    img: "https://t3.ftcdn.net/jpg/04/54/95/44/360_F_454954482_65R69q8IWkyT4pOtc3iJV2tn1ukMlAAt.jpg",
    badge: "UNESCO"
  },
  {
    title: "Lotus Temple",
    desc: "The Lotus Temple, located in New Delhi, is a Baháʼí House of Worship renowned for its spectacular flower-like architecture. It serves as the Mother Temple of the Indian subcontinent and has become a prominent attraction, celebrated for its message of peace and the unity of all religions.",
    img: "https://wallpapers.com/images/hd/delhi-lotus-temple-aerial-nvux50s7thmmlnwd.jpg",
    badge: "Architecture"
  },
  {
    title: "Chandni Chowk",
    desc: "Chandni Chowk is a historic and chaotic 17th-century wholesale market in Old Delhi, built during the Mughal era. This vibrant maze of narrow lanes is famous for its specialized goods like spices and silver jewelry, and is a legendary destination for authentic street food",
    img: "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/8/chandni-chowk-(1)_0_1200.jpg.webp",
    badge: "Food Paradise"
  }
];

const foods: CardItem[] = [
  {
    title: "Chole Bhature",
    desc: "Chole Bhature is a classic North Indian dish featuring a spicy and tangy chickpea curry (chole) served with a large, puffy, deep-fried bread called bhature. This hearty and indulgent meal is a flavor explosion, often accompanied by onions, pickles, and chutney, making it a beloved choice for breakfast or lunch.",
    img: "https://t4.ftcdn.net/jpg/06/13/65/75/360_F_613657549_r41cG3xRcPuH4CUUGw3CFOHhHUnZXIOo.jpg",
    badge: "Legendary"
  },
  {
    title: "Paranthe",
    desc: "A paratha is a pan-fried Indian flatbread, famous for its flaky layers. While a plain paratha is delicious, it's often stuffed with savory fillings like spiced potatoes (aloo), cauliflower (gobi), or paneer cheese. Served hot with a dollop of butter, yogurt, or pickle, it's a quintessential comfort food.",
    img: "https://img-cdn.publive.online/fit-in/1200x675/english-betterindia/media/post_attachments/uploads/2024/10/delhi-parathas-4-1728479241.jpg",
    badge: "Classic"
  },
  {
    title: "Golgappa",
    desc: "Golgappe are a popular street snack that delivers a burst of flavor in one bite. They consist of a small, hollow, crispy sphere (puri) filled with a mixture of spiced potatoes and chickpeas, then dunked in tangy, spicy tamarind water (pani). They're meant to be eaten whole, creating an unforgettable explosion of taste and texture.",
    img: "https://t3.ftcdn.net/jpg/16/26/13/56/360_F_1626135689_DepVxpUCDC1h7nLkP55WXXLzBrQHrEbH.jpg",
    badge: "Street King"
  },
  {
    title: "Dahi Bhalle",
    desc: "Dahi Bhalle is a refreshing and popular chaat (savory snack). It consists of soft, spongy lentil fritters (bhalle) soaked in a creamy, lightly sweetened yogurt (dahi). The dish is then garnished with sweet tamarind chutney, spicy green chutney, and a sprinkle of aromatic spices for a perfect sweet, sour, and savory balance.",
    img: "https://www.shutterstock.com/shutterstock/videos/3804446579/thumb/11.jpg?ip=x480",
    badge: "Legendary"
  },

];

const culturalEvents: CardItem[] = [
  {
    title: "Holi",
    desc: "Holi is the vibrant Hindu 'Festival of Colors', celebrating the triumph of good over evil and the arrival of spring. People joyfully throw colored powders (gulal) and water at each other, dancing and sharing sweets. It's a day of exuberant celebration, breaking down social barriers in a flurry of color.",
    img: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbGl8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    badge: "Flagship"
  },
  {
    title: "Diwali",
    desc: "Diwali, the 'Festival of Lights', is India's biggest and most important holiday. It symbolizes the victory of light over darkness. Homes are decorated with oil lamps (diyas) and intricate rangoli designs, families exchange gifts and sweets, and the night sky is illuminated by spectacular fireworks and celebrations.",
    img: "https://images.pexels.com/photos/1580085/pexels-photo-1580085.jpeg?cs=srgb&dl=pexels-suvan-chowdhury-37305-1580085.jpg&fm=jpg",
    badge: "Festival"
  },
  {
    title: "Eid-al-fitr",
    desc: "Eid-ul-Fitr, the 'Festival of Breaking the Fast', is a joyous Islamic holiday that marks the end of the holy month of Ramadan. The day begins with special prayers, followed by charity, feasting, and visiting family. Dressed in new clothes, people share elaborate meals and exchange greetings of 'Eid Mubarak'.",
    img: "https://images.pexels.com/photos/3163677/pexels-photo-3163677.jpeg?cs=srgb&dl=pexels-rayn-l-1656184-3163677.jpg&fm=jpg",
    badge: "Unique"
  },
  {
    title: "Christmas",
    desc: "Christmas is the annual Christian festival celebrating the birth of Jesus Christ. It is marked by decorating homes with lights and Christmas trees, singing carols, exchanging gifts, and attending church services. It’s a time for family gatherings, festive meals, and sharing a message of peace and goodwill. ",
    img: "https://news24online.com/wp-content/uploads/2024/12/Top-5-MUST-VISIT-Christmas-Markets-In-Delhi-This-December-2024.jpg",
    badge: "Festival"
  }
];

const hiddenGems: CardItem[] = [
  {
    title: "Agrasen ki Baoli",
    desc: "Agrasen ki Baoli is a protected ancient stepwell located in the heart of New Delhi. It features a dramatic series of 108 stone steps leading down to a water reservoir. Surrounded by modern high-rises, its stunning, symmetrical architecture offers a surprisingly tranquil and photogenic escape from the city's chaos.",
    img: "https://t4.ftcdn.net/jpg/05/23/73/67/360_F_523736713_HtwyrLyz7FHE5eh1qMr1GuQ1YOTxHruJ.jpg",
    badge: "Secret"
  },
  {
    title: "Majnu Ka Tilla",
    desc: "Majnu ka Tilla is a vibrant Tibetan refugee colony in North Delhi, famously known as 'Little Tibet' Its narrow lanes are filled with fluttering prayer flags, a Buddhist monastery, and the aroma of authentic Tibetan cuisine. It's a popular hub for delicious momos, thukpa, and unique cafe experiences. ",
    img: "https://i.pinimg.com/736x/f2/a9/2e/f2a92e21515b92a51008363d97bbc2db.jpg",
    badge: "Hidden"
  },
  {
    title: "Garden of Five Senses",
    desc: "The Garden of Five Senses is a unique 20-acre park designed to awaken sight, sound, smell, taste, and touch. It combines a beautiful landscape with public art, featuring fragrant shrubs, colorful flowers, sculptures, and soothing water features. It's an interactive space perfect for leisurely strolls and discovering art amidst nature.",
    img: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1692693368_5c3f0510911ad_garden_of_five_senses_travel.jpg.webp",
    badge: "Instagram-worthy"
  },
  {
    title: "Mehrauli Archaeological Park",
    desc: "Mehrauli Archaeological Park is a vast 200-acre heritage area containing over 100 historically significant ruins and monuments. Spanning nearly a millennium of Delhi's history, it features scattered tombs, mosques, and stepwells from the Tughlaq, Lodi, and Mughal periods, offering a unique glimpse into the city's layered past. ",
    img: "https://www.vacationindia.com/wp-content/uploads/2022/06/monuments-mehrauli-archaeological-park-delhi.jpg",
    badge: "New"
  }
  
];

const funQuotes = [
  "“Dilli dilwalon ki!” (Delhi belongs to the big-hearted)",
  "“In Delhi history lives and breathes in every street and in every monument.” — William Dalrymple",
  "“To understand India, you must spend a day in Delhi.”",
  "“Life in Delhi — a carnival of cultures, colors, and chaos!”"
];

const galleryImgs: string[] = [
  "https://static.wixstatic.com/media/5df5df_78c1a7c1668949dd9fb2cfa30d87a7ff~mv2.jpg/v1/fill/w_1434,h_955,al_c,q_85,usm_0.66_1.00_0.01/5df5df_78c1a7c1668949dd9fb2cfa30d87a7ff~mv2.jpg",
  "https://i0.wp.com/thetravelvine.blog/wp-content/uploads/2025/04/20241114_101501-scaled.jpg?resize=585%2C440&ssl=1",
  "https://thirdeyetraveller.com/wp-content/uploads/instagrammable-places-in-delhi-photography-2-of-21-689x517.jpg",
  "https://www.vacationindia.com/wp-content/uploads/2020/11/metro-passing-the-hanuman-temple-in-delhi.jpg",
  "https://treasuretripin.com/wp-content/uploads/2023/09/AKSHARDHAM_-THE-ABODE-OF-THE-DIVINE.jpg",
  "https://images.nativeplanet.com/img/2018/11/fort-of-tughlaqabad-1541418376.jpg"
];

const DelhiPage: React.FC = () => {
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
            alt="Delhi Banner"
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-transparent flex flex-col justify-center items-center p-8 text-center z-10">
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold text-amber-400 drop-shadow-2xl mb-4"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >Delhi</motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >India’s Timeless Capital · Culture · Chaos · Charm</motion.p>
            <motion.div
              className="bg-white/20 backdrop-blur-lg border border-amber-100 shadow-2xl rounded-xl px-6 py-3 text-lg text-amber-300 mb-5 font-semibold"
              key={factIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >{bannerFacts[factIndex]}</motion.div>
            <a
              href="#attractions"
              className="mt-6 px-8 py-4 bg-[#1de9b6] hover:bg-[#00bfae] rounded-full text-black font-bold text-xl shadow-lg"
            >
              Start Exploring
            </a>
          </div>
        </section>

        {/* Quotes Section */}
        <div className="w-full flex justify-center -mt-10 mb-12 z-20 relative">
          <motion.div
            className="max-w-2xl bg-black bg-opacity-70 rounded-lg px-7 py-4 text-xl text-amber-200 font-medium border-amber-400 border shadow-xl"
            key={quoteIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >{funQuotes[quoteIndex]}</motion.div>
        </div>

        {/* Main Sections */}
        <main className="container mx-auto px-6" id="attractions">
          {/* Key Attractions */}
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">Key Attractions</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-amber-400">
            {keyAttractions.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-amber-400">{item.title}</h3>
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
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-green-400 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-green-300">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Festivals & Culture */}
          <h2 className="text-4xl font-bold text-indigo-300 mt-20 mb-6">Cultural Festivals</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-indigo-400">
            {culturalEvents.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-indigo-400 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
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
          <h2 className="text-4xl font-bold text-cyan-200 mt-20 mb-6">Hidden Gems</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-cyan-400">
            {hiddenGems.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-cyan-400 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-cyan-200">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Community Gallery */}
          <h2 className="text-4xl font-bold text-pink-300 mt-20 mb-8">Traveler Gallery</h2>
          <div className="grid md:grid-cols-3 gap-8 pb-24">
            {galleryImgs.map((img, i) => (
              <img key={i} src={img} alt={`Delhi Gallery ${i+1}`} className="w-full h-60 object-cover rounded-xl shadow-xl" />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-green-400 hover:text-green-600 font-bold">Instagram</a>
            <a href="#" className="text-orange-400 hover:text-orange-600 font-bold">Twitter</a>
            <a href="#" className="text-cyan-400 hover:text-cyan-700 font-bold">Join Newsletter</a>
          </div>
        </Footer>
      </div>
    </>
  );
};

export default DelhiPage;