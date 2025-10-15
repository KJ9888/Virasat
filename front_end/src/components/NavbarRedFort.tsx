import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Introduction", to: "/red-fort/introduction" },
  { name: "History", to: "/red-fort/history" },
  { name: "Architecture & Design", to: "/red-fort/architecture" },
  { name: "Plan Your Visit", to: "/red-fort/visit" },
  { name: "Virtual Tour", to: "/red-fort/virtual-tour" },
];

const NavbarRedFort: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current route is a Red Fort nested page
  const isNestedPage = location.pathname.startsWith("/red-fort/");

  // Smart back navigation with fallback to home
  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      // Fallback to home page if no history (direct link access)
      navigate("/");
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-250 max-w-6xl px-6"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-red-500/20 rounded-2xl shadow-xl flex justify-between items-center px-6 py-3">
        
        {/* Always show Back Button on nested pages */}
        {isNestedPage && (
          <button
            onClick={handleBack}
            className="text-red-300 font-medium px-3 py-2 rounded-md hover:bg-red-500/20 transition-colors flex items-center gap-1"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Back
          </button>
        )}

        <div className="flex gap-4 md:gap-6 items-center flex-wrap justify-center w-full">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm md:text-base transition-all duration-300 font-medium ${
                  isActive
                    ? "text-red-300"
                    : "text-gray-200 hover:text-red-200"
                }`
              }
            >
              <span className="relative group">
                {n.name}
                <span
                  className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-red-400 transition-all duration-300 group-hover:w-full"
                />
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarRedFort;
