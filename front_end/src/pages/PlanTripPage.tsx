import  { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Animation from "../components/Animation";

const travelOptions = ["Flight", "Train", "Bus", "Car"];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const PlanTripPage = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [travelType, setTravelType] = useState(travelOptions[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trip data object
    const tripData = {
      from,
      to,
      startDate,
      endDate,
      passengers,
      travelType, // include travelType
    };

    // Navigate to Finalall page with state
  navigate("/finalall", { state: tripData });
  };

  return (
    <div className="relative min-h-screen text-white">
      <Header />
      <Animation />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 py-24 px-6 flex justify-center items-center overflow-auto min-h-screen"
      >
        <div className="w-full max-w-4xl">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold
                       bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500
                       drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-4 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Plan Your Trip
          </motion.h2>
          <p className="text-gray-300 text-lg mb-12 text-center">
            Discover the best routes, travel modes, and experiences for your journey across India.
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900 bg-opacity-70 p-8 rounded-xl shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label className="mb-2 text-lg font-semibold text-orange-400 drop-shadow-lg">
                From
              </label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Enter starting location"
                className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:border-orange-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-lg font-semibold text-orange-400 drop-shadow-lg">
                To
              </label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Enter destination"
                className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:border-orange-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-lg font-semibold text-orange-400 drop-shadow-lg">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:border-orange-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-lg font-semibold text-orange-400 drop-shadow-lg">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:border-orange-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-lg font-semibold text-orange-400 drop-shadow-lg">
                Passengers
              </label>
              <input
                type="number"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                placeholder="Number of passengers"
                className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:border-orange-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-lg font-semibold text-orange-400 drop-shadow-lg">
                Travel Type
              </label>
              <select
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 shadow-md focus:outline-none focus:border-orange-400"
              >
                {travelOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="md:col-span-2 p-4 mt-2 bg-gradient-to-r from-orange-400 via-white to-green-500 text-black font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Plan Now
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default PlanTripPage;
