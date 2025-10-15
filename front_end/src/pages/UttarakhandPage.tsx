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

const bannerImage = "https://www.authenticindiatours.com/app/uploads/2022/04/Har-Ki-Pauri-Ghat-Haridwar-Uttarakhand-1400x550-c-default.jpg";
const bannerFacts = [
  "🏔️ Uttarakhand is called Devbhoomi, or 'Land of the Gods', for its holy sites.",
  "🌄 Valley of Flowers is a UNESCO World Heritage Site.",
  "🚶 The Char Dham Yatra attracts millions of pilgrims annually.",
  "🥾 Jim Corbett National Park is India's oldest national park."
];

const keyAttractions: CardItem[] = [
  {
    title: "Char Dham",
    desc: "Char Dham—Yamunotri, Gangotri, Kedarnath, and Badrinath—are four revered pilgrimage sites nestled in the Himalayas. Each temple is surrounded by majestic scenery, attracting devotees for spiritual cleansing and adventure, as pilgrims travel the winding mountain roads connecting these legendary sacred places.",
    img: "https://offbeatindiatours.com/pages/upload/banner15853109050.jpg",
    badge: "Spiritual"
  },
  {
    title: "Valley of Flowers",
    desc: "A UNESCO World Heritage Site, the Valley of Flowers blooms with rare Himalayan wildflowers from June to September. Trek through meadows and misty trails with cascading streams, snow-capped peaks, and incredible biodiversity, making it Uttarakhand’s natural paradise for trekkers and nature lovers.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvrUBNMAEolxIIZPomx_Z8cfDuPC_iwt79A&s",
    badge: "UNESCO"
  },
  {
    title: "Jim Corbett National Park",
    desc: "Jim Corbett National Park is India’s oldest wildlife sanctuary. Home to Bengal tigers, elephants, and hundreds of bird species, its riverine forests and grasslands promise thrilling safaris, elephant rides, and the magical sight of sunrise over mist-covered hills and the Ramganga River.",
    img: "https://media.istockphoto.com/id/1487988908/photo/wild-bengal-male-tiger-or-panthera-tigris-side-profile-in-natural-green-scenic-background.jpg?s=612x612&w=0&k=20&c=w7DQW5ne20rsy4hudWNUo-D_iTW0YgEq5cYiCmjN4r4=",
    badge: "Wildlife"
  },
  {
    title: "Nainital Lake",
    desc: "Nainital Lake’s emerald waters are surrounded by lush hills and colonial-era architecture. Visitors row colorful boats, stroll the Mall Road, sip hot chocolate, and gaze at starlit reflections—embracing Uttarakhand’s cool climate and classic hill station charm.",
    img: "https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbml0YWwlMjBsYWtlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    badge: "Hill Station"
  }
];

const foods: CardItem[] = [
  {
    title: "Aloo Ke Gutke",
    desc: "A traditional Kumaoni snack, Aloo Ke Gutke are spicy potatoes sautéed with local spices and coriander. Often served with bhang ki chutney, they offer a burst of flavor and crunch, perfect with tea against the backdrop of Himalayan mountain views.",
    img: "https://i.ndtvimg.com/i/2018-03/aloo_620x350_61520925794.jpg",
    badge: "Local"
  },
  {
    title: "Kafuli",
    desc: "A thick green curry made from spinach and fenugreek leaves, Kafuli is wholesome, aromatic, and nutritious. Served with steaming rice or mandua ki roti, this Pahadi favorite is a winter comfort food in every Uttarakhand household.",
    img: "https://images.slurrp.com/prodarticles/e5kj63c5ij5.webp",
    badge: "Healthy"
  },
  {
    title: "Chainsoo",
    desc: "Chainsoo is a protein-rich black gram dal, roasted and ground, simmered with spices and ghee. It’s thick, smoky, and pairs perfectly with steamed rice or roti, capturing the earthy, rustic taste of Uttarakhand’s hills.",
    img: "https://www.shutterstock.com/image-photo/traditional-turkish-lentil-soup-homemade-260nw-1451301380.jpg",
    badge: "Classic"
  },
  {
    title: "Singori",
    desc: "Singori is a cone-shaped sweet made of khoya and coconut, wrapped in maalu leaf. Delicately flavored and soft, it’s a specialty of Almora, enjoyed as a dessert or festive treat across Kumaon.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-H03HXe02BcZnThIETmEescDC9Xp-N66yY3b9OmiMME4n0MwaXWF-0n9AI_i7GoFMa5I&usqp=CAU",
    badge: "Sweet"
  }
];

const culturalEvents: CardItem[] = [
  {
    title: "Kumbh Mela",
    desc: "The world’s largest religious gathering rotates between Haridwar and other holy cities. Pilgrims immerse in the Ganges, sing bhajans, and participate in spiritual rituals to cleanse sins and seek divine blessings in vibrant social harmony.",
    img: "https://www.tusktravel.com/blog/wp-content/uploads/2021/01/The-worlds-largest-kumbh-Mela-1.jpg",
    badge: "Massive"
  },
  {
    title: "Bikhauti Mela",
    desc: "Bikhauti Mela is held in Dwarahat to celebrate victory of the Chand kings. People gather at temples, enjoy fairs, folk dances, and purchase handicrafts, honoring local traditions passed down through generations.",
    img: "https://www.tourmyindia.com/states/uttarakhand/images/syalde-bikhauti-mela2.jpg",
    badge: "Folk"
  },
  {
    title: "Ghee Sankranti",
    desc: "Observed every August, Ghee Sankranti celebrates the harvest of grains and dairy. Villagers eat ghee-laden chapati, enjoy music, and perform rituals to thank the gods for bounty, marking rural Uttarakhand’s agrarian cycle.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVt9Z7iyNndyeJJeHeLj3j0gkjwnxlHpkC7Q&s",
    badge: "Harvest"
  },
  {
    title: "Nanda Devi Raj Jat Yatra",
    desc: "Every 12 years, devotees trek from villages to the Nanda Devi temple, carrying goddess’s palanquin. The 19-day yatra includes folk music, dance, and prayer—honoring Nanda Devi, the guardian deity.",
    img: "https://inditales.com/wp-content/uploads/2022/04/nanda-devi-raj-jat-yatra-dev-doli.jpg",
    badge: "Pilgrimage"
  }
];

const hiddenGems: CardItem[] = [
  {
    title: "Munsiyari",
    desc: "Munsiyari, a village at the edge of Johar Valley, offers jaw-dropping views of Panchachuli peaks, alpine meadows, and dense forests. Trekkers visit glaciers, local bazaars, and witness authentic mountain traditions in this remote wonderland.",
    img: "https://thumbs.dreamstime.com/b/himalaya-snow-peaks-panchchuli-himalayan-mountain-range-pine-trees-scenic-landscape-view-munsiyari-uttarakhand-176819844.jpg",
    badge: "Scenic"
  },
  {
    title: "Dhanaulti",
    desc: "Dhanaulti, nestled amid tall deodar forests, is a serene hill station beyond Mussoorie. With eco parks, adventure camps, and misty walking trails, it’s a green escape from city crowds all year round.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/01/a0/d7/91/dhanaulti.jpg",
    badge: "Peaceful"
  },
  {
    title: "Chopta",
    desc: "Chopta is known as the 'Mini Switzerland of India' for stunning meadows, conifer forests, and Himalayan views. It’s a base for trekking to Tungnath—the world’s highest Shiva temple.",
    img: "https://images.unsplash.com/photo-1547452377-b2ac40e02ed6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvcHRhJTIwdHVuZ25hdGglMjBjaGFuZHJhc2hpbGElMjB0cmVra2luZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    badge: "Nature"
  },
  {
    title: "Binsar Wildlife Sanctuary",
    desc: "Binsar Wildlife Sanctuary protects dense mountain forests teeming with barking deer, leopards, and rare birds. Panoramic vistas of Himalayan peaks attract wildlife lovers, trekkers, and sunrise photographers.",
    img: "https://i0.wp.com/theroutecause.com/wp-content/uploads/2017/07/Binsar-5.jpg?resize=1170%2C780&ssl=1",
    badge: "Wildlife"
  }
];

const funQuotes = [
  "“Uttarakhand—where mountains teach peace.”",
  "“Find your soul in Devbhoomi.”",
  "“Every step in Uttarakhand is a dance with clouds.”",
  "“From lakes to temples—every moment is sacred in Uttarakhand.”"
];

const galleryImgs: string[] = [
  "https://media.istockphoto.com/id/1417543506/photo/september-16th-2021-uttarakhand-india-a-solo-hiker-hikers-with-a-backpack-looking-towards-the.jpg?s=612x612&w=0&k=20&c=dhKcXYibOatt31nfkMADlHyrSk9tzjreuFLxV5jNFFk=",
  "https://i.pinimg.com/originals/6d/df/5b/6ddf5ba14a0b24772808d8d41688617c.jpg",
  "https://www.shutterstock.com/shutterstock/videos/3806891531/thumb/1.jpg?ip=x480",
  "https://www.hamarauttarakhand.com/wp-content/uploads/2023/03/Registration-Guide-2023-1.jpeg",
  "https://media.istockphoto.com/id/1175648945/photo/beautiful-kempty-waterfalls-with-turquoise-waters-in-mussoorie.jpg?s=612x612&w=0&k=20&c=dY7TXPGmMJE7JjQBgXVH90BkhBwZ3c77_nOQNrsggg0=",
  "https://www.intermiles.com/_next/image?url=https%3A%2F%2Fresources.intermiles.com%2Fiwov-resources%2Fimages%2Fblog%2FMay2022%2F10-best-hill-stations-in-uttarakhand%2FCover580x580.jpg&w=3840&q=75"
];

const UttarakhandPage: React.FC = () => {
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
            alt="Uttarakhand Banner"
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-transparent flex flex-col justify-center items-center p-8 text-center z-10">
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold text-blue-200 drop-shadow-2xl mb-4"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >Uttarakhand</motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >Devbhoomi · Pilgrimage · Nature · Adventure</motion.p>
            <motion.div
              className="bg-white/20 backdrop-blur-lg border border-blue-200 shadow-2xl rounded-xl px-6 py-3 text-lg text-blue-200 mb-5 font-semibold"
              key={factIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >{bannerFacts[factIndex]}</motion.div>
            <a
              href="#attractions"
              className="mt-6 px-8 py-4 bg-[#90caf9] hover:bg-[#64b5f6] rounded-full text-gray-900 font-bold text-xl shadow-lg"
            >
              Start Exploring
            </a>
          </div>
        </section>

        {/* Quotes Section */}
        <div className="w-full flex justify-center -mt-10 mb-12 z-20 relative">
          <motion.div
            className="max-w-2xl bg-black bg-opacity-70 rounded-lg px-7 py-4 text-xl text-blue-200 font-medium border-blue-200 border shadow-xl"
            key={quoteIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >{funQuotes[quoteIndex]}</motion.div>
        </div>

        {/* Main Sections */}
        <main className="container mx-auto px-6" id="attractions">
          {/* Key Attractions */}
          <h2 className="text-4xl md:text-5xl font-bold text-blue-200 mb-6">Key Attractions</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-blue-200">
            {keyAttractions.map(item => (
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
                  <h3 className="text-2xl font-bold text-blue-100">{item.title}</h3>
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
          <h2 className="text-4xl font-bold text-indigo-200 mt-20 mb-6">Cultural Festivals</h2>
          <div className="flex flex-row gap-8 overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-indigo-200">
            {culturalEvents.map(item => (
              <div
                key={item.title}
                className="bg-gray-800 rounded-xl shadow-xl min-w-[310px] max-w-xs flex-shrink-0 hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img src={item.img} alt={item.title}
                    className="w-full h-52 object-cover rounded-t-xl" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-indigo-200 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-indigo-100">{item.title}</h3>
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
              <img key={i} src={img} alt={`Uttarakhand Gallery ${i + 1}`} className="w-full h-60 object-cover rounded-xl shadow-xl" />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-blue-200 hover:text-blue-300 font-bold">Instagram</a>
            <a href="#" className="text-green-200 hover:text-green-300 font-bold">Twitter</a>
            <a href="#" className="text-cyan-100 hover:text-cyan-300 font-bold">Join Newsletter</a>
          </div>
        </Footer>
      </div>
    </>
  );
};

export default UttarakhandPage;
