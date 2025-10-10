import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#000] via-[#000] to-[#000] shadow-[0_2px_20px_rgba(0,0,0,0.5)] py-5 px-10 border-b border-[#FFD700]/30">
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* Logo */}
        <div
          onClick={goHome}
          className="cursor-pointer text-4xl font-extrabold tracking-widest drop-shadow-lg"
          style={{
            fontFamily: "Berkshire Swash",
            background: "linear-gradient(to right, #FFD700, #FFA500)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VIRASAT
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="w-60">
            <Searchbar />
          </div>

          <nav className="flex items-center space-x-8 font-semibold">
            {[
              { name: "Monuments", path: "/monuments" },
              { name: "Stories", path: "/stories" },
              { name: "States & UT's", path: "/states" },
              { name: "Plan Your Trip", path: "/plan-trip" },
              { name: "Store", path: "/store-virasat-store" },
              { name: "Blog", path: "/blog" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-lg text-[#FFD700]/90 hover:text-[#FFA500] transition-all duration-300 hover:scale-110
                           after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px]
                           after:bg-gradient-to-r after:from-[#FFD700] after:to-[#FFA500]
                           hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
