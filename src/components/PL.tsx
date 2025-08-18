"use client";

import { useEffect, useState } from "react";
import { Sparkles, Gem } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s preloader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            className="text-yellow-500 mb-6"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <Sparkles className="w-16 h-16" />
          </motion.div>

          <motion.div
            className="text-pink-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <Gem className="w-12 h-12" />
          </motion.div>

          <motion.p
            className="mt-6 text-gray-800 text-lg font-semibold tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Crafting Elegance & Perfection...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
