import React from "react";
import { motion } from "framer-motion";

type Product = { id: string; title: string; price: number; img?: string };

type Props = {
  products: Product[];
  onClose: () => void;
};

const ProductModal: React.FC<Props> = ({ products, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] rounded-xl w-full max-w-3xl p-6 shadow-2xl border border-gray-800"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-3">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500">
            Buy Items
          </h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-gray-800 hover:bg-red-600 transition text-white text-sm"
          >
            ✕ Close
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              className="flex items-center space-x-4 p-4 rounded-lg bg-[#0f0f0f] border border-gray-700 hover:border-amber-400 transition"
            >
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-700 rounded-lg" />
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-white">{p.title}</h4>
                <p className="text-sm text-gray-400">₹{p.price}</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-3 px-4 py-1.5 rounded bg-gradient-to-r from-orange-500 to-green-600 text-white font-medium shadow-md hover:shadow-lg transition"
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
