import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Introduction", to: "/taj/introduction" },
  { name: "History", to: "/taj/history" },
  { name: "Architecture & Design", to: "/taj/architecture" },
  { name: "Plan Your Visit", to: "/taj/visit" },
  { name: "Virtual Tour", to: "/taj/virtual-tour" },
];

const NavbarTaj: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current route is nested (any subpage)
  const isNestedPage = location.pathname.startsWith("/taj/") && location.pathname !== "/taj";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-250 max-w-6xl px-6"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-amber-500/20 rounded-2xl shadow-xl flex justify-between items-center px-6 py-3">
        
        {/* Conditional Back Button */}
        {isNestedPage && (
          <button
            onClick={() => navigate(-1)}
            className="text-amber-300 font-medium px-3 py-2 rounded-md hover:bg-amber-500/20 transition-colors"
          >
            ←Back 
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
                    ? "text-amber-300"
                    : "text-gray-200 hover:text-amber-200"
                }`
              }
            >
              <span className="relative group">
                {n.name}
                <span
                  className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"
                />
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarTaj;
