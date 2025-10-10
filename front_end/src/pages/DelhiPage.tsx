import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import { motion } from "framer-motion";
import Animation from "../components/Animation";

// Delhi-specific data
const delhiData = {
  id: "delhi",
  name: "Delhi",
  description:
    "Delhi, the heart of India, is known for its rich history, bustling markets, delicious street food, and monuments like the Red Fort and India Gate.",
  heroImage:
    "https://upload.wikimedia.org/wikipedia/commons/3/3e/India_Gate_in_New_Delhi_03-2016_img3.jpg",
};

const categoryData = [
  {
    key: "monuments",
    title: "Explore Monuments & Crafts",
    items: [
      {
        id: "mon1",
        title: "Red Fort Miniature",
        price: 700,
        img: "https://cdn.thecollector.com/wp-content/uploads/2024/07/places-must-see-delhi.jpg",
      },
      {
        id: "mon2",
        title: "India Gate Replica",
        price: 450,
        img: "https://www.travelladda.com/package/New_delhi_tr.jpg",
      },
    ],
  },
  {
    key: "food",
    title: "Taste Local Delicacies",
    items: [
      {
        id: "food1",
        title: "Chole Bhature",
        price: 250,
        img: "https://i.pinimg.com/736x/16/e3/bd/16e3bd9433b0b9b98f8890f1b797ff1d.jpg",
      },
      {
        id: "food2",
        title: "Paranthe Wali Gali Special",
        price: 200,
        img: "https://media1.thrillophilia.com/filestore/6o2ai1wpmd5wonvvx2tva32ykxju_1575267152_tgmg9jbpftpt5whtogbo.jpg",
      },
    ],
  },
  {
    key: "trips",
    title: "Plan Your Trip",
    items: [
      {
        id: "trip1",
        title: "Delhi City Tour",
        price: 3000,
        img: "https://www.ghumindiaghum.com/blog/wp-content/uploads/2023/01/Travelling-to-Delhi.jpg",
      },
      {
        id: "trip2",
        title: "Heritage Walk",
        price: 1200,
        img: "https://www.thedelhitours.com/blog/wp-content/uploads/2023/01/Humayuns-Tomb-Delhi-750x565.jpg",
      },
    ],
  },
  {
    key: "history",
    title: "Discover the History",
    items: [
      {
        id: "hist1",
        title: "History of Delhi Book",
        price: 600,
        img: "https://i.ytimg.com/vi/JhLBsL4RnYU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOykFWRkj42uSOJkzthqJaXXeNiA",
      },
      {
        id: "hist2",
        title: "National Museum Ticket",
        price: 400,
        img: "https://www.trolleytours.com/wp-content/uploads/2016/06/smithsonian-museum-natural-history.jpg",
      },
    ],
  },
];

const DelhiPage: React.FC = () => {
  const [modalProducts, setModalProducts] = useState<any[] | null>(null);
  const navigate = useNavigate();

  return (
    <>
    <Animation />
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto pt-[8%] px-6">
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl font-extrabold text-amber-400 mb-6"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {delhiData.name}
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-2 max-w-2xl mx-auto text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {delhiData.description}
          </motion.p>
        </div>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {categoryData.map((c) => (
            <motion.div
              key={c.key}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(255,255,255,0.15)",
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#0f0f0f] rounded-lg shadow-md border border-gray-800 overflow-hidden"
            >
              {/* Clickable Image */}
              <motion.img
                src={c.items[0].img}
                alt={c.title}
                className="w-full h-64 object-cover cursor-pointer"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                onClick={() => navigate(`/delhi/${c.key}`)}
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-400 mb-4">Discover & buy amazing items.</p>
                <div className="space-y-3">
                  {c.items.map((it) => (
                    <motion.div
                      key={it.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={it.img}
                          alt={it.title}
                          className="w-14 h-14 object-cover rounded-md"
                        />
                        <div>
                          <div className="font-semibold">{it.title}</div>
                          <div className="text-sm text-gray-400">₹{it.price}</div>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => setModalProducts([it])}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded shadow-md hover:shadow-lg transition"
                      >
                        Buy
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />

      {modalProducts && (
        <ProductModal products={modalProducts} onClose={() => setModalProducts(null)} />
      )}
    </motion.div>
    </>
  );
};

export default DelhiPage;
