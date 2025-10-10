import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import { motion } from "framer-motion";
import Animation from "../components/Animation";

// Punjab-specific data
const punjabData = {
  id: "punjab",
  name: "Punjab",
  description:
    "Known as the land of five rivers, Punjab is famous for its vibrant culture, Bhangra dance, fertile fields, and the Golden Temple.",
  heroImage: "https://static.toiimg.com/photo/108178837.cms",
};

const categoryData = [
  {
    key: "monuments",
    title: "Explore Monuments & Crafts",
    items: [
      {
        id: "mon1",
        title: "Golden Temple Modal",
        price: 500,
        img: "https://www.unchartedbackpacker.com/wp-content/uploads/2018/12/DSC05167-2-1.jpg",
      },
      {
        id: "mon2",
        title: "Phulkari Embroidery",
        price: 1500,
        img: "https://khinkhwab.com/cdn/shop/articles/phidelphia-museum_cbf5a96b-1d7d-45e9-ac72-3ded3ae102dd.jpg?v=1679882636",
      },
    ],
  },
  {
    key: "food",
    title: "Taste Local Delicacies",
    items: [
      {
        id: "food1",
        title: "Butter Chicken",
        price: 400,
        img: "https://queensrestaurant.com/assets/img/blogs/4_Punjabi_vegetarian_cuisine.jpg",
      },
      {
        id: "food2",
        title: "Sarson da Saag & Makki di Roti",
        price: 350,
        img: "https://amritsr.com/wp-content/uploads/2022/06/sarson-ka-saag-makke-ki-roti-recipe.jpg",
      },
    ],
  },
  {
    key: "trips",
    title: "Plan Your Trip",
    items: [
      {
        id: "trip1",
        title: "Amritsar City Tour",
        price: 2500,
        img: "https://www.indianholidaytrip.com/Upload/Blog/Img_2000_202220271254_Amritsar_Collage_14_July.jpg?w=740",
      },
      {
        id: "trip2",
        title: "Village Life Experience",
        price: 1800,
        img: "https://i.ytimg.com/vi/tYFfAI7GKDk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB4RCNplOKtkbHsiWsOMne9_uq-Hw",
      },
    ],
  },
  {
    key: "history",
    title: "Discover the History",
    items: [
      {
        id: "hist1",
        title: "History of Punjab Book",
        price: 800,
        img: "https://substackcdn.com/image/fetch/$s_!YYdd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F36db0fbe-ec69-4fc9-ad2d-8d24cd932888_1792x1024.png",
      },
      {
        id: "hist2",
        title: "Partition Museum Ticket",
        price: 600,
        img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-partition-museum-amritsar-punjab-attr-hero?qlt=82&ts=1726661923298",
      },
    ],
  },
];

const PunjabPage: React.FC = () => {
  const [modalProducts, setModalProducts] = useState<any[] | null>(null);
  const navigate = useNavigate();

  return (
    <>
    <Animation/>
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
            {punjabData.name}
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-2 max-w-2xl mx-auto text-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {punjabData.description}
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
                onClick={() => navigate(`/punjab/${c.key}`)}
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold text-amber-400 mb-2">
                  {c.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  Discover & buy amazing items.
                </p>
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
                          <div className="text-sm text-gray-400">
                            ₹{it.price}
                          </div>
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
        <ProductModal
          products={modalProducts}
          onClose={() => setModalProducts(null)}
        />
      )}
    </motion.div>
    </>
  );
};

export default PunjabPage;
