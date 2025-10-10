// src/pages/MonumentsPage.tsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Animation from "../components/Animation";

// Sample data for monuments


const monumentsData = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    description: "Agra's white marble monument built by Shah Jahan.",
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
    path: '/monuments/taj-mahal'
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar',
    description: 'A UNESCO site in Delhi — tall brick minaret.',
    imageUrl: 'https://imgs.search.brave.com/l9UgXOvqatlGaODTXZbw0qLap2LOqO-FrZ6aG8hBl_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/MTUzNzUzMy9waG90/by9kZWxoaS1pbmRp/YS1tYXJjaC0xNS0y/MDIwLXRvdXJpc3Qt/dmlzaXQtYXQtaWxs/dW1pbmF0ZWQtcXV0/dWItbWluYXItYXQt/bmlnaHQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU5PY3RE/M1lfQVhUQ0pleXlZ/SndoN3o3NzZjaG1Y/Y00xSG1pWTB0Tmpm/WXM9',
    path: '/monuments/qutub-minar'
  },
  {
    id: 'red-fort',
    name: 'Red Fort',
    description: 'Delhi’s iconic fort and a UNESCO World Heritage Site.',
    imageUrl: 'https://imgs.search.brave.com/N6ps6UTfVbXn7Zh-b_rOkGAdpjtoL9H5TWj9EIosX5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzk3LzIzLzQw/LzM2MF9GXzU5NzIz/NDA2OF9YN3VmZllq/YnBaUnREUTB4QmJa/QmtCU3dhV1AzZU1X/TS5qcGc',
    path: '/monuments/red-fort'
  },
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    description: 'A stunning palace in Jaipur known for its unique architecture.',
    imageUrl: 'https://imgs.search.brave.com/tOC_2mgsX4E35WzzvpgfkQ1rdAMUqrXfMw-0M_uB9EQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE2LzQ0LzIx/LzM2MF9GXzIxNjQ0/MjEyMV9ZUGxqMU92/Z1NpOWpRY1Q4WWJi/OE40ak56VUVRUkxn/cC5qcGc',
    path: '/monuments/hawa-mahal'
  },
  {
    id: 'gateway-of-india',
    name: 'Gateway of India',
    description: 'A monumental archway in Mumbai, overlooking the Arabian Sea.',
    imageUrl: 'https://imgs.search.brave.com/bJ7VndnZB60zhwcPoq0igIrX9fDZywhlGowcqqnrZiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTEw/MTI0MzYxL3Bob3Rv/L2dhdGV3YXktb2Yt/aW5kaWEtYXQtbmln/aHQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXNSeE1nN1JO/WWRJQXF5dm1ya1Bw/Yms0eGpqN0hhZjBD/YlFNem1mVWxUREk9',
    path: '/monuments/gateway-of-india'
  },
  {
    id: 'india-gate',
    name: 'India Gate',
    description: 'A war memorial located in New Delhi.',
    imageUrl: 'https://imgs.search.brave.com/x99A2ts2xHO8Ux9G6c4wStBMseHXKzMsYFqZpvUcp5A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zN2Fw/MS5zY2VuZTcuY29t/L2lzL2ltYWdlL2lu/Y3JlZGlibGVpbmRp/YS9pbmRpYS1nYXRl/LWRlbGhpLTUtYXR0/ci1oZXJvP3FsdD04/MiZ0cz0xNzQyMTcw/MjQwMTMx',
    path: '/monuments/india-gate'
  },
  {
    id: 'charminar',
    name: 'Charminar',
    description: 'A historical monument located in Hyderabad.',
    imageUrl: 'https://imgs.search.brave.com/46mJQyYvUTwj67-JG_rURHR54DyDjecPGQZakUs8ZfI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTExNjEyNDItYjVh/Zjc5N2I3MjMzP2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE5ueDhZMmhoY20x/cGJtRnlmR1Z1ZkRC/OGZEQjhmSHd3',
    path: '/monuments/charminar'
  },
  {
    id: 'ajanta-caves',
    name: 'Ajanta Caves',
    description: 'A UNESCO World Heritage Site featuring ancient rock-cut caves.',
    imageUrl: 'https://imgs.search.brave.com/M5UutIku7sZ4Lo459W6WiTwKXkXKITjXInX7C60bD2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzEzLzI4Lzgz/LzM2MF9GXzcxMzI4/ODM4MF90MDdVekxY/dVc5UmhXZXFDNWNN/TkpLR1NndU9yYXN6/TS5qcGc',
    path: '/monuments/ajanta-caves'
  },
  {
    id: 'konark-sun-temple',
    name: 'Sun Temple, Konark',
    description: 'A historical monument located in Odisha.',
    imageUrl: 'https://imgs.search.brave.com/P0b_QlQOC2vKCOYiGvSTtR9M_G9W8E-5xU4VeXccm8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzk1LzI4Lzk0/LzM2MF9GXzEzOTUy/ODk0OTBfQlFHRlNO/bGtsejhGMlE3VUNv/Uk5HUGRuTnBoYkht/TlUuanBn',
    path: '/monuments/konark-sun-temple'
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const MonumentsPage: React.FC = () => {
  return (
    <>
    <Animation />
    <motion.div className="min-h-screen bg-[#111] text-white">
      <Header />
      <main className="container mx-auto py-24 px-6">

        {/* Patriotic Gradient Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 
                     bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500
                     drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          Monuments of India
        </motion.h1>

        {/* Grid with Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {monumentsData.map((monument) => (
            <Link to={monument.path} key={monument.id}>
              <motion.div
                variants={cardVariants}

                whileHover={{ scale: 1.07, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.2)" }}
                className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg flex flex-col"
              >
                {/* Card Image with fixed height */}
                <motion.img
                  src={monument.imageUrl}
                  alt={monument.name}
                  className="w-full h-64 object-cover"
                />
                {/* Card content with fixed height to make all cards uniform */}
                <div className="p-6 bg-gray-900 bg-opacity-70 flex-1 flex flex-col justify-start">
                  <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-white to-green-500 mb-2 rounded"></div>
                  <h3 className="text-2xl font-bold">{monument.name}</h3>
                  <p className="text-gray-300 mt-2">{monument.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </main>
      <Footer />
    </motion.div>
    </>
  );
  
};

export default MonumentsPage;
