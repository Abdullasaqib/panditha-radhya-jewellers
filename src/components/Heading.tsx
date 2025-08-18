"use client";
import { motion } from "framer-motion";

export default function HeadingSection() {
  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-white via-gray-50 to-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-gray-900"
      >
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 bg-clip-text text-transparent animate-[shine_3s_ease-in-out_infinite]">
            Crafting Traditions,
          </span>
          <br />
          <span> Celebrating Generations.</span>
        </span>
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full"
      />

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-8 text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
      >
        For over 150 years, Panditha Radhya Jewellers has been the trusted name
        for timeless craftsmanship, purity, and designs that blend heritage with
        modern elegance.
      </motion.p>

      {/* Glow animation keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
