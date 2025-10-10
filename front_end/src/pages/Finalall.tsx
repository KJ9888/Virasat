import { useState, useEffect, type ChangeEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import Animation from "../components/Animation";
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 0 }, // y=0 ensures page appears instantly
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Finalall = () => {
  const location = useLocation();
  const tripData = location.state || {};
  const { from, to, startDate, endDate, passengers, travelType } = tripData;

  const [days, setDays] = useState<number>(3);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
  }, [location]);

  const handleBudgetChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedBudget(e.target.value);
  const handleDaysChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setDays(Number(e.target.value));

  const tripPlans: Record<number, string[]> = {
    3: [
      "Day 1: Srinagar city tour (Dal Lake, Mughal Gardens, Shankaracharya Temple)",
      "Day 2: Gulmarg excursion (Gondola ride, snow activities)",
      "Day 3: Pahalgam sightseeing (Betaab Valley, Aru Valley)",
    ],
    5: [
      "Day 1: Arrival in Srinagar + Shikara ride",
      "Day 2: Sonamarg day trip (Thajiwas Glacier, river rafting)",
      "Day 3: Gulmarg adventure (skiing, gondola ride)",
      "Day 4: Pahalgam (Lidder River, horse riding)",
      "Day 5: Leisure & Departure",
    ],
    7: [
      "Day 1: Arrival & local Srinagar sightseeing",
      "Day 2: Sonamarg",
      "Day 3: Gulmarg skiing & activities",
      "Day 4: Transfer to Pahalgam",
      "Day 5: Explore Aru, Betaab & Chandanwari",
      "Day 6: Shopping and Houseboat stay",
      "Day 7: Departure",
    ],
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const hotels = [
    {
      name: "The Lalit Grand Palace",
      location: "Srinagar",
      price: "₹12,000/night",
      budget: "Luxury",
      img: "https://pix10.agoda.net/hotelImages/154806/-1/92c7f87103a9194d7287b502c788cf47.jpg?ca=16&ce=1&s=414x232",
      facilities: ["Luxury Rooms", "Lake View", "Spa"],
    },
    {
      name: "Vivanta Dal View",
      location: "Srinagar",
      price: "₹9,500/night",
      budget: "Premium",
      img: "https://www.thelalit.com/wp-content/uploads/2024/02/winter-wonderland-srinagar.jpg",
      facilities: ["Infinity Pool", "Mountain View", "WiFi"],
    },
    {
      name: "Khyber Himalayan Resort",
      location: "Gulmarg",
      price: "₹15,000/night",
      budget: "Luxury",
      img: "https://www.thelalit.com/wp-content/uploads/2022/05/srinagar1.jpg",
      facilities: ["Luxury Spa", "Snow Activities", "Gondola Access"],
    },
    {
      name: "Pahalgam Hotel",
      location: "Pahalgam",
      price: "₹7,000/night",
      budget: "Standard",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/d6/d0/b7/welcomhotel-by-itc-hotels.jpg?w=1200&h=-1&s=1",
      facilities: ["River View", "Garden", "Traditional Dining"],
    },
    {
      name: "Hotel Snowland",
      location: "Sonamarg",
      price: "₹6,000/night",
      budget: "Standard",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f4/03/ff/main-view.jpg?w=1200&h=-1&s=1",
      facilities: ["Mountain View", "Trekking Access", "WiFi"],
    },
    {
      name: "Houseboat New Jacquline",
      location: "Dal Lake, Srinagar",
      price: "₹5,500/night",
      budget: "Standard",
      img: "https://pahalgamhotel.com/wp-content/uploads/2024/02/Pahalgam_Hotel_Kashmir9.webp",
      facilities: ["Lake Stay", "Traditional Decor", "Shikara Access"],
    },
    {
      name: "WelcomHotel Pine N Peak",
      location: "Pahalgam",
      price: "₹11,000/night",
      budget: "Premium",
      img: "https://thekashmiriyat.co.uk/wp-content/uploads/2022/12/220217_GulmargHotels-Khyber1.jpg",
      facilities: ["Luxury Resort", "Spa", "Mountain Dining"],
    },
    {
      name: "Hotel Heevan",
      location: "Gulmarg",
      price: "₹8,500/night",
      budget: "Premium",
      img: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/505658018.webp?k=fe210cc92f8905b3193eb02c538296dba8f31b24d5bf9c3d4f19655d4b501512&o=",
      facilities: ["Resort Stay", "Snow View", "WiFi"],
    },
  ];

  const filteredHotels = selectedBudget
    ? hotels.filter((hotel) => hotel.budget === selectedBudget)
    : hotels;

  const imageUrls = [
    "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/01/15134114/kashmir-deepanshu-nayak-1600x900.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Houseboats%2C_Dal_Lake%2C_Kashmir.jpg",
    "https://www.awazthevoice.in/upload/news/1704110326dal_lake.webp",
    "https://www.tourmyindia.com/states/jammu-kashmir/image/dal-lake-s.jpg",
    "https://assets-news.housing.com/news/wp-content/uploads/2022/08/21104741/Tourist-Places-in-Kashmir-feature-compressed.jpg",
    "https://www.traveltourister.com/wp-content/uploads/2025/01/best-time-to-visit-kashmir.webp.jpg",
  ];

  const travelOptions = [
    { name: "Flight", price: "₹6,000 - ₹12,000", duration: "2-3 hours" },
    { name: "Train", price: "₹1,200 - ₹3,500", duration: "8-12 hours" },
    { name: "Bus", price: "₹800 - ₹2,000", duration: "10-14 hours" },
    { name: "Car", price: "₹4,000 - ₹8,000", duration: "8-10 hours" },
  ];

  return (
    <>
      <Animation />
    <motion.div
      className="relative min-h-screen text-white font-['Poppins']"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-500 mb-6"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            ✨ Your Kashmir Adventure Awaits ✨
          </motion.h2>

          <p className="text-gray-300 mb-12 text-lg">
            Discover the heaven on earth — Kashmir. Customize your trip, explore breathtaking
            landscapes, savor authentic Kashmiri cuisine, and stay in luxurious hotels.
          </p>

          {/* Travel Details */}
          <div className="w-full mb-16">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">🧳 Travel Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { label: "From", value: from || "N/A", icon: "📍" },
                { label: "To", value: to || "N/A", icon: "🗺️" },
                { label: "Dates", value: `${formatDate(startDate)} → ${formatDate(endDate)}`, icon: "📅" },
                { label: "Passengers", value: passengers || "N/A", icon: "👥" },
                { label: "Travel Type", value: travelType || "N/A", icon: "🚗" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-tr from-[#2c3e50] via-[#4b6584] to-[#7b9cb5] text-white rounded-3xl shadow-2xl p-6 flex flex-col items-center transform transition-transform hover:scale-105"
                  variants={cardVariants}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <p className="mt-2 text-sm opacity-80">{item.label}</p>
                  <p className="mt-1 font-semibold text-lg">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Customize Trip & Travel Options */}
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-16">
            {/* Customize Trip */}
            <motion.div variants={cardVariants} className="flex-1 bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Customize Your Trip</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-gray-300 block mb-2">Number of Days</label>
                  <select
                    value={days}
                    onChange={handleDaysChange}
                    className="p-3 rounded bg-gray-700 text-white w-40 text-lg"
                  >
                    <option value={3}>3 Days</option>
                    <option value={5}>5 Days</option>
                    <option value={7}>7 Days</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 block mb-2">Budget</label>
                  <select
                    value={selectedBudget}
                    onChange={handleBudgetChange}
                    className="p-3 rounded bg-gray-700 text-white w-40 text-lg"
                  >
                    <option value="" disabled>Select your budget</option>
                    <option value="Standard">Standard</option>
                    <option value="Premium">Premium</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 text-left">
                <h4 className="text-xl font-semibold text-yellow-400 mb-4">Suggested Itinerary</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {(tripPlans[days] ?? []).map((plan, idx) => (
                    <li key={idx}>{plan}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Travel Options */}
            <motion.div variants={cardVariants} className="flex-1 bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                Travel Options ({travelType || "Select Travel Type"})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {travelOptions.map((option, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    className={`bg-gray-700 rounded-xl p-4 shadow hover:scale-105 transition-transform text-left ${
                      travelType && travelType !== option.name ? "opacity-50 pointer-events-none" : "opacity-100"
                    }`}
                  >
                    <h4 className="text-lg font-bold text-white">{option.name}</h4>
                    <p className="text-gray-400">Duration: {option.duration}</p>
                    <p className="text-yellow-400 font-semibold mt-2">{option.price}</p>
                    <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black py-2 rounded-lg font-bold hover:opacity-90">
                      Book Now
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hotels */}
          <h3 className="text-3xl font-bold text-yellow-400 mb-10">🏨 Hotels in Kashmir</h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {filteredHotels.map((hotel, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <img src={hotel.img} alt={hotel.name} className="h-48 w-full object-cover" />
                <div className="p-4 text-left">
                  <h4 className="text-xl font-bold text-white">{hotel.name}</h4>
                  <p className="text-gray-400">{hotel.location}</p>
                  <p className="text-yellow-400 font-semibold mt-2">{hotel.price}</p>
                  <ul className="text-sm text-gray-300 mt-2 space-y-1">
                    {hotel.facilities.map((f, j) => (<li key={j}>• {f}</li>))}
                  </ul>
                  <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black py-2 rounded-lg font-bold hover:opacity-90">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gallery */}
          <h3 className="text-3xl font-bold text-yellow-400 mb-10">📸 Kashmir Gallery</h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {imageUrls.map((url, index) => (
              <motion.img
                key={index}
                src={`${url}?auto=format&fit=crop&w=800&q=80`}
                alt={`Kashmir ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                variants={cardVariants}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Finalall;
