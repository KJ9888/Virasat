// src/components/Searchbar.tsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Data list
const searchableItems = [
  { name: "Monuments", path: "/monuments" },
  { name: "Red Fort", path: "/monuments/red-fort" },
  { name: "Qutub Minar", path: "/monuments/qutub-minar" },
  { name: "Taj Mahal", path: "/monuments/taj-mahal" },
  { name: "Hawa Mahal", path: "/monuments/hawa-mahal" },
  { name: "Gateway of India", path: "/monuments/gateway-of-india" },
  { name: "India Gate", path: "/monuments/india-gate" },
  { name: "Charminar", path: "/monuments/charminar" },
  { name: "Ajanta Caves", path: "/monuments/ajanta-caves" },
  { name: "Konark Sun Temple", path: "/monuments/konark-sun-temple" },
  { name: "States and UT's", path: "/states" },
  { name: "Delhi", path: "/union-territories/delhi" },
  { name: "Punjab", path: "/states/punjab" },
];

const Searchbar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<typeof searchableItems>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter suggestions
  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchableItems
        .filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (path: string) => {
    navigate(path);
    setQuery("");
    setSuggestions([]);
    setIsFocused(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && suggestions.length > 0) {
      handleSearch(suggestions[0].path);
    }
  };

  return (
    <div className="relative flex items-center" ref={searchRef}>
      {/* Input */}
      <input
        type="text"
        placeholder="Search Places..."
        className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400 w-56 md:w-72 transition-all duration-300"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onKeyDown={handleKeyDown}
        aria-label="Search Places"
        autoComplete="off"
        
      />

      {/* Button */}
      {/* <button
        type="button"
        onClick={() =>
          suggestions.length > 0
            ? handleSearch(suggestions[0].path)
            : null
        }
        className="ml-2 px-4 py-2 rounded-full bg-[linear-gradient(to_right,#F17B41,#E05BA2,#CD4BC9)] text-white font-extrabold shadow-md hover:scale-105 transition-transform text-sm md:text-base"
      >
        Go
      </button> */}

      {/* Suggestions */}
<AnimatePresence>
  {isFocused && query.length >= 0 && suggestions.length > 0 && (
    <motion.ul
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full mt-2 w-72 bg-gray-900/95 backdrop-blur-md 
                 border border-gray-700 rounded-xl shadow-lg 
                 max-h-60 overflow-y-auto z-50"
    >
      {suggestions.map((item, index) => (
        <li
          key={index}
          className="px-4 py-2 hover:bg-gray-800/70 cursor-pointer 
                     text-gray-200 text-left rounded-xl transition-colors"
          onClick={() => handleSearch(item.path)}
        >
          {item.name}
        </li>
      ))}
    </motion.ul>
  )}
</AnimatePresence>

    </div>
  );
};

export default Searchbar;
