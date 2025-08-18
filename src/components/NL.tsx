"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("✅ Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("❌ Failed. Try again.");
      }
    } catch  {
      setStatus("⚠️ Something went wrong.");
    }
  };

  return (
    <section className="bg-gradient-to-b from-black via-[#111] to-black text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Join Our Newsletter
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 text-gray-400"
        >
          Be the first to receive exclusive offers, style updates, and insider news.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-5 py-3 rounded-xl w-72 md:w-80 text-black bg-white shadow-lg border border-gray-200
              focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all duration-300"
          />
          <button
            type="submit"
            className="bg-gold text-black px-8 py-3 rounded-xl font-semibold shadow-md
              hover:shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Status Message */}
        {status && (
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-sm text-gray-300"
          >
            {status}
          </motion.p>
        )}
      </div>
    </section>
  );
}
