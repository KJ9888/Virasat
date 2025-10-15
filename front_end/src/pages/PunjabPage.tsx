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

const bannerImage = "https://c4.wallpaperflare.com/wallpaper/672/590/570/5bd29862113f1-wallpaper-preview.jpg";
const bannerFacts = [
  "🌾 Punjab is known as the Granary of India, leading wheat and rice production.",
  "🏰 Amritsar's Golden Temple attracts millions of visitors each year.",
  "🎉 Punjab is home to vibrant Bhangra and Giddha folk dances.",
  "🍽️ Langar at the Golden Temple serves free meals to over 50,000 daily."
];

const keyAttractions: CardItem[] = [
  {
    title: "Golden Temple",
    desc: "The Golden Temple (Harmandir Sahib) in Amritsar is Sikhism’s holiest shrine, blending stunning golden architecture with devotion. The temple’s serene pool and community kitchen symbolize equality, spirituality, and peace for visitors from around the world.",
    img: "https://www.holidify.com/images/bgImages/AMRITSAR.jpg",
    badge: "Must Visit"
  },
  {
    title: "Wagah Border",
    desc: "Wagah Border hosts a daily, high-energy flag ceremony between Indian and Pakistani soldiers. Patriotic crowds, synchronized drills, and waving flags create an electrifying atmosphere that represents unity and national pride for both countries.",
    img: "https://t3.ftcdn.net/jpg/03/01/29/02/360_F_301290247_3e6PmjLH0CLZ8wIIo8GUxFbkSyTCmBDf.jpg",
    badge: "Patriotic"
  },
  {
    title: "Jallianwala Bagh",
    desc: "Jallianwala Bagh in Amritsar is a national memorial honoring the 1919 massacre. Its gardens, eternal flame, and bullet-marked walls serve as a poignant reminder of India’s struggle for freedom and resilience.",
    img: "https://media.istockphoto.com/id/469924336/photo/jallianwala-bagh-memorial.jpg?s=612x612&w=0&k=20&c=hlliyoRQA8t1Keivqn6vexVcLwFmrY1gZwwpAQsaBpc=",
    badge: "Historic"
  },
  {
    title: "Anandpur Sahib",
    desc: "Anandpur Sahib, nestled by the Sutlej River, is one of Sikhism’s holiest towns. Famous for the grand Hola Mohalla festival, it’s where Khalsa was founded, featuring majestic gurdwaras and vibrant celebrations.",
    img: "https://images.pexels.com/photos/19562899/pexels-photo-19562899.jpeg?cs=srgb&dl=pexels-sharan-rathi-740892-19562899.jpg&fm=jpg",
    badge: "Spiritual"
  }
];

const foods: CardItem[] = [
  {
    title: "Sarson da Saag & Makki di Roti",
    desc: "A classic Punjabi winter dish of mustard greens and spices served with corn flatbread (makki di roti), white butter, and jaggery. It represents rural Punjab’s rich flavors, warmth, and tradition.",
    img: "https://thumbs.dreamstime.com/b/makki-di-roti-sarson-ka-saag-very-famous-punjabi-cuisine-lunch-dinner-110683240.jpg",
    badge: "Classic"
  },
  {
    title: "Amritsari Kulcha",
    desc: "Amritsari Kulcha is a stuffed, tandoor-baked bread, crisp on the outside and soft within. Filled with spicy potatoes and served with chickpeas and chutney, it’s a breakfast staple you’ll find at every Amritsar dhaba.",
    img: "https://www.shutterstock.com/image-photo/amritsari-kulcha-claybaked-stuffed-naan-260nw-1190366575.jpg",
    badge: "Tandoori"
  },
  {
    title: "Lassi",
    desc: "Punjab’s most popular drink, lassi is a sweet or salty yogurt-based beverage, creamy and frothy. Served chilled in tall glasses, it’s the perfect companion to hearty Punjabi meals and the state’s summer heat.",
    img: "https://media.istockphoto.com/id/1008799838/photo/image-of-a-glass-of-lassi-made-from-milk-curd.jpg?s=612x612&w=0&k=20&c=L--UXX-L2bsK6Jy-mEigONFj9QEJyvU8b77FJnBLpBg=",
    badge: "Traditional"
  },
  {
    title: "Butter Chicken",
    desc: "Butter Chicken (Murgh Makhani) features succulent chicken pieces cooked in a rich, buttery, tomato-based gravy. Invented in Delhi but perfected in Punjab, it’s creamy, mildly spicy, and an international favorite.",
    img: "https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?cs=srgb&dl=pexels-prabal-9609844.jpg&fm=jpg",
    badge: "Legendary"
  }
];

const culturalEvents: CardItem[] = [
  {
    title: "Baisakhi",
    desc: "Baisakhi is Punjab's legendary harvest festival, marking the Sikh New Year. Dance, music, colorful fairs, and prayers fill the day as locals celebrate prosperity and gratitude for the harvest.",
    img: "https://media.gettyimages.com/id/639706744/video/three-punjabi-young-women-playing-kikli-dance-in-the-farm-punjab-india.jpg?s=640x640&k=20&c=inY3O90Qc1WSv18-T7K3_DqV0Q5t2nqBg-G4tCK90UY=",
    badge: "Harvest"
  },
  {
    title: "Hola Mohalla",
    desc: "Hola Mohalla, celebrated in Anandpur Sahib, brings together martial arts, mock battles, and Sikh spiritual recitals. Warriors showcase skills while vibrant processions and kirtan reflect Punjab’s heritage.",
    img: "https://media.istockphoto.com/id/1889130868/photo/sikh-people-performing-martial-art-during-hola-mohalla.jpg?s=612x612&w=0&k=20&c=dFco7XY7RTcjRA7DeqJ0Eox4FjW33vxe6d3pPgT98Lg=",
    badge: "Warrior Fest"
  },
  {
    title: "Lohri",
    desc: "Lohri welcomes winter’s end with bonfires, Punjabi folk dances, songs, and sweets. Families gather around fires, tossing sesame and enjoying the warmth, hope, and happiness the festival brings.",
    img: "https://media.gettyimages.com/id/640698008/video/punjabi-large-family-celebrating-lohri-festival-punjab-india.jpg?s=640x640&k=20&c=yrnGwoONAhqEUTdPxsaCoRQk0k-ngtS6gWvo0T35ueM=",
    badge: "Bonfire"
  },
  {
    title: "Gurpurab",
    desc: "Gurpurab celebrates the birthdays of Sikh Gurus. Marked by prayer, singing hymns (kirtan), community langar, and illuminated gurdwaras, it highlights Punjab’s faith, devotion, and spirit of service.",
    img: "https://www.sikh24.com/wp-content/uploads/2019/06/Religious-Procession.jpg",
    badge: "Spiritual"
  }
];

const hiddenGems: CardItem[] = [
  {
    title: "Kila Raipur",
    desc: "Kila Raipur hosts India’s rural Olympics, featuring unique sports and bullock cart races. Villagers from across Punjab gather for thrilling competitions in a lively, rural celebration steeped in tradition.",
    img: "https://indiator.com/tourist-places/wp-content/uploads/2019/11/Kila-Raipur-Ludhiana-Vibrancy-At-Its-Absolute-Best.jpg",
    badge: "Sports"
  },
  {
    title: "Harike Wetland",
    desc: "Harike Wetland, Punjab’s largest bird sanctuary, teems with waterfowl and migratory species. It offers peaceful boat rides, birdwatching, and captivating natural beauty near Amritsar.",
    img: "https://www.shutterstock.com/shutterstock/videos/3808379137/thumb/1.jpg?ip=x480",
    badge: "Nature"
  },
  {
    title: "Qila Mubarak Bathinda",
    desc: "Qila Mubarak in Bathinda, one of India's oldest forts, dates back to the Kushan era. This monumental brick fortress is historically significant as the prison of Razia Sultan, Delhi's first female ruler, in 1240. It is also a revered Sikh site, having been sanctified by Guru Gobind Singh's visit.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB_0qDskkqyDNufgNjdT3JhmNd8RTkMvQJg&s",
    badge: "Heritage"
  },
  {
    title: "Sheesh Mahal Patiala",
    desc: "Patiala’s Sheesh Mahal, or 'Palace of Mirrors,' dazzles with ornate mirror work, murals, and gardens. Once a royal residence, now a museum showcasing Punjab’s art and history.",
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/sheesh-mahal-patiala-punjab-3-attr-about?qlt=82&ts=1742161704731",
    badge: "Royal"
  }
];

const funQuotes = [
  "“Punjab, where every day is a festival.”",
  "“Land of five rivers, endless smiles, and golden harvest.”",
  "“If you eat well, laugh loud, and dance with joy, you’re in Punjab.”",
  "“Dhol beats, sarson fields, and legendary hospitality make Punjab unforgettable!”"
];

const galleryImgs: string[] = [
  "https://w0.peakpx.com/wallpaper/659/99/HD-wallpaper-sunrise-sun-bun-sunrise-in-punjab.jpg",
  "https://media.gettyimages.com/id/2157448857/video/fresh-water-in-canal-outdoors.jpg?s=640x640&k=20&c=GHgB1wNAk4XUnPqihVNVvh9ZArU65OuR2WFu_Swm2l0=",
  "https://media.gettyimages.com/id/640666070/video/punjabi-couple-enjoying-in-the-mustard-farm-punjab-india.jpg?s=640x640&k=20&c=Ay0FY6zjoIvhb5zYDW84FXuKb8LDgsZtLNBug8MnwI4=",
  "https://media.istockphoto.com/id/497680686/photo/sikh-prayer-at-golden-temple-amritsar.jpg?s=612x612&w=0&k=20&c=P-OU9-IktrU0jVdKgtXo1GTVZK8UNp12ixjKJ_fs5l4=",
  "https://images.pexels.com/photos/2863220/pexels-photo-2863220.jpeg?cs=srgb&dl=pexels-aadil-2863220.jpg&fm=jpg",
  "https://t3.ftcdn.net/jpg/06/42/01/02/360_F_642010255_FnCPSJLYlHT3eJTyn9vqf2N3PI3tKxFI.jpg"
];

const PunjabPage: React.FC = () => {
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
            alt="Punjab Banner"
            className="absolute w-full h-full object-cover"
            style={{ filter: "brightness(0.7)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-transparent flex flex-col justify-center items-center p-8 text-center z-10">
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold text-yellow-200 drop-shadow-2xl mb-4"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >Punjab</motion.h1>
            <motion.p
              className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >India’s Breadbasket · Festivals · Faith · Flavour</motion.p>
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
                    <span className="absolute top-3 left-3 bg-yellow-200 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">{item.badge}</span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-yellow-100">{item.title}</h3>
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
              <img key={i} src={img} alt={`Punjab Gallery ${i + 1}`} className="w-full h-60 object-cover rounded-xl shadow-xl" />
            ))}
          </div>
        </main>

        {/* Footer */}
        <Footer>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-yellow-200 hover:text-yellow-300 font-bold">Instagram</a>
            <a href="#" className="text-blue-200 hover:text-blue-300 font-bold">Twitter</a>
            <a href="#" className="text-cyan-100 hover:text-cyan-300 font-bold">Join Newsletter</a>
          </div>
        </Footer>
      </div>
    </>
  );
};

export default PunjabPage;
