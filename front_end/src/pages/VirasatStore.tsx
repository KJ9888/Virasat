import  { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

import Animation from "../components/Animation";

// Mock user login state
const isLoggedIn = true; // change false to test guest

// ------------------- PRODUCT LIST -------------------
const products = [
  { id: 1, name: "Pashmina Shawl", category: "Textiles", origin: "Kashmir", price: 12500, imageUrl: "https://4.imimg.com/data4/KS/IG/ANDROID-40376132/product-1000x1000.jpeg" },
  { id: 2, name: "Blue Pottery Vase", category: "Pottery", origin: "Jaipur", price: 3500, imageUrl: "https://cdn.vibecity.in/providers/61dc119f7864df0011da13c3/13ed9ac8-4a74-4e8f-8966-e0baff65939c_dc64f2b2-d9e1-4eed-a676-b91ebe77e32c-3X.png" },
  { id: 3, name: "Dhokra Horse Statue", category: "Handicrafts", origin: "Bastar", price: 5200, imageUrl: "https://m.media-amazon.com/images/I/91w583bzl-L._UF894,1000_QL80_.jpg" },
  { id: 4, name: "Kundan Necklace Set", category: "Jewellery", origin: "Rajasthan", price: 25000, imageUrl: "https://www.fashionvibes.net/cdn/shop/files/Golden.jpg?v=1714977126" },
  { id: 5, name: "Banarasi Silk Saree", category: "Textiles", origin: "Varanasi", price: 18000, imageUrl: "https://indiansilkhouseagencies.com/cdn/shop/files/8300000543203N5-1.jpg?v=1756294715" },
  { id: 6, name: "Terracotta Diyas (Set of 4)", category: "Pottery", origin: "Bengal", price: 1500, imageUrl: "https://itokri.com/cdn/shop/products/0X2A4261_536a87fa-3094-4015-8fa2-1277f7713eed.jpg?v=1632490789" },
  { id: 7, name: "Wooden Jharokha", category: "Handicrafts", origin: "Jodhpur", price: 8500, imageUrl: "https://i.etsystatic.com/28421345/r/il/797d0a/3159499422/il_570xN.3159499422_a98s.jpg" },
  { id: 8, name: "The Ramayana", category: "Books", origin: "Ancient India", price: 1999, imageUrl: "https://akshargranth.in/cdn/shop/files/Ramayana.jpg?v=1704870685" },
  { id: 9, name: "Kanjeevaram Saree", category: "Textiles", origin: "Tamil Nadu", price: 22000, imageUrl: "https://empress-clothing.com/cdn/shop/files/KM341D_1800x1800.jpg?v=1735992139" },
  { id: 10, name: "Meenakari Jhumkas", category: "Jewellery", origin: "Jaipur", price: 7800, imageUrl: "https://silvermerc.com/cdn/shop/products/GME3293BSBE2UU_62_4.jpg?v=1700469521" },
  { id: 11, name: "Pattachitra Painting", category: "Handicrafts", origin: "Odisha", price: 6000, imageUrl: "https://i.pinimg.com/736x/6f/19/13/6f19139e8e9453dc7d7a9842bff1d25f.jpg" },
  { id: 12, name: "Longpi Black Pottery Mug", category: "Pottery", origin: "Manipur", price: 2100, imageUrl: "https://brownliving.in/cdn/shop/files/longpi-black-pottery-coffee-mug-small-round-set-of-2-terracotta-by-sachii-sustainable-mugs-brown-living-sachii0161-920190.jpg?v=1751610522" },
  { id: 13, name: "The Mahabharata", category: "Books", origin: "Ancient India", price: 2499, imageUrl: "https://m.media-amazon.com/images/I/81pqhnH4e2L._UF1000,1000_QL80_.jpg" },
  { id: 14, name: "Phulkari Dupatta", category: "Textiles", origin: "Punjab", price: 4500, imageUrl: "https://www.swistylish.com/cdn/shop/products/WhatsAppImage2021-08-23at21.24.48_1.jpg?v=1629734203" },
  { id: 15, name: "Sandalwood Elephant", category: "Handicrafts", origin: "Karnataka", price: 4800, imageUrl: "https://www.memeraki.com/cdn/shop/files/Royal-Elephant-in-Kadam-wood-Carving-by-Om-Prakash-1_800x.png?v=1726057073" },
  { id: 16, name: "Temple Jewellery Bangle", category: "Jewellery", origin: "South India", price: 15500, imageUrl: "https://www.shutterstock.com/shutterstock/videos/3792603779/thumb/1.jpg?ip=x480" },
  { id: 17, name: "Bandhani Kurta", category: "Textiles", origin: "Gujarat", price: 3200, imageUrl: "https://img.perniaspopupshop.com/catalog/product/r/b/rbrm012416_1.jpg?impolicy=detailimageprod" },
  { id: 18, name: "Marble Inlay Box", category: "Handicrafts", origin: "Agra", price: 9000, imageUrl: "https://shoponline.cottageemporium.in/image/cache/catalog/W025D119AA0140007000_A-600x315.JPG" },
  { id: 19, name: "Khurja Ceramic Bowl Set", category: "Pottery", origin: "Uttar Pradesh", price: 2800, imageUrl: "https://i5.walmartimages.com/seo/Benzara-7-1-x-16-x-16-in-Ceramic-Bowls-Blue-White-Set-of-2_5b32fe8c-3b01-4a6c-ae07-f92c75523666.d8b987606439ef9ab19b61cae5301dbd.jpeg" },
  { id: 20, name: "Discovery of India - Nehru", category: "Books", origin: "Modern India", price: 999, imageUrl: "https://lnabooks.com/wp-content/uploads/2019/07/DISCOVERY-OF-INDIA.jpg" },
  { id: 21, name: "Thewa Art Pendant", category: "Jewellery", origin: "Rajasthan", price: 11000, imageUrl: "https://indianethnicgifts.com/wp-content/uploads/2019/06/TJP-009.jpeg" },
  { id: 22, name: "Chikankari Kurti", category: "Textiles", origin: "Lucknow", price: 5500, imageUrl: "https://www.oldmarigold.com/cdn/shop/files/9.png?v=1715258901" },
  { id: 23, name: "Bidriware Coasters", category: "Handicrafts", origin: "Karnataka", price: 3800, imageUrl: "https://www.indicinspirations.com/cdn/shop/products/bidri-tea-coaster-national-work-coasters-351483.jpg?v=1643285150" },
  { id: 24, name: "Clay Wind Chime", category: "Pottery", origin: "Various", price: 1800, imageUrl: "https://pixelvoyages.com/wp-content/uploads/2014/09/clay-wind-chimes.jpg" }
];

const categories = ["All", "Textiles", "Handicrafts", "Pottery", "Jewellery", "Books"];

// ------------------- ANIMATION VARIANTS -------------------
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ------------------- PRODUCT CARD -------------------
const ProductCard = ({ product, toggleWishlist, wishlist }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,193,7,0.4)" }}
    className="relative rounded-lg flex flex-col shadow-lg bg-gray-900 bg-opacity-80"
  >
    {/* Image */}
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-6 flex-1 flex flex-col justify-between">
      <div>
        <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-white to-green-500 mb-2 rounded"></div>
        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
        <p className="text-gray-300 italic mt-1">{product.origin}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xl font-semibold text-yellow-400">₹{product.price.toLocaleString("en-IN")}</span>
        <div className="flex gap-2">
          {isLoggedIn && (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleWishlist(product.id)}
                className="text-red-500 text-2xl"
              >
                {wishlist.includes(product.id) ? "❤️" : "🤍"}
              </motion.button>
            </>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// ------------------- STORE PAGE -------------------
const VirasatStore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const [sortBy, setSortBy] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // --- Filtered Products Logic ---
  const filteredProducts = products
    .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.origin.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "low-high") return a.price - b.price;
      if (sortBy === "high-low") return b.price - a.price;
      return 0;
    });

  // --- Wishlist Toggle ---
  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

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
                     drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] py-2"
          >
            Explore Heritage Products
          </motion.h1>

          {/* Add Product Button */}
          {isLoggedIn && (
            <div className="text-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-4xl shadow-md hover:bg-yellow-500 transition"
              >
                Add Your Product
              </motion.button>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition
              ${selectedCategory === category
                    ? "bg-gradient-to-r from-orange-400 via-white to-green-500 text-black"
                    : "bg-gray-800 text-white hover:bg-gradient-to-r hover:from-orange-400 hover:via-white hover:to-green-500 hover:text-black"}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search, Price, Sort */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <input
              type="text"
              placeholder="Search by name or origin..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg text-white bg-gray-800 "
            />
            <input
              type="number"
              placeholder="Max Price..."
              value={priceRange[""]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="px-2 py-2 rounded-lg text-white bg-gray-800 w-40"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg text-white bg-gray-800 w-40"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} toggleWishlist={toggleWishlist} wishlist={wishlist} />
              ))}
            </AnimatePresence>
          </motion.div>
        </main>

        <Footer />
      </motion.div>
    </>
  );
};

export default VirasatStore;
