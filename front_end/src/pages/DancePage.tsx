import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const DancePage: React.FC = () => {
  const dances = [
    { title: "Bharatanatyam", img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Bharatanatyam_dancer.jpg", desc: "Devotional dance of Tamil Nadu." },
    { title: "Kathak", img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kathak_dancer.jpg", desc: "Storytelling dance from North India." },
    { title: "Odissi", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Odissi_dance.jpg", desc: "Classical dance from Odisha." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Classical Dance Forms</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dances.map((d) => (
            <motion.div whileHover={{ scale: 1.03 }} key={d.title} className="rounded overflow-hidden shadow">
              <img src={d.img} alt={d.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{d.title}</h3>
                <p className="text-gray-600 mt-2">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DancePage;
