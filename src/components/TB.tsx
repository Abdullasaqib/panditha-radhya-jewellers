"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Clock, Gem, Globe } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Happy Customers",
    value: 5000,
    suffix: "+",
    icon: <Users className="w-10 h-10 text-yellow-500" />,
    desc: "Trusted and delighted clients worldwide.",
  },
  {
    id: 2,
    title: "Years of Legacy",
    value: 150,
    suffix: " Y",
    icon: <Clock className="w-10 h-10 text-blue-500" />,
    desc: "Over a century of craftsmanship and excellence.",
  },
  {
    id: 3,
    title: "Jewels Crafted",
    value: 12000,
    suffix: "+",
    icon: <Gem className="w-10 h-10 text-pink-500" />,
    desc: "Meticulously crafted pieces with perfection.",
  },
  {
    id: 4,
    title: "Global Presence",
    value: 15,
    suffix: " States",
    icon: <Globe className="w-10 h-10 text-green-500" />,
    desc: "Serving clients across multiple regions.",
  },
];

// Optimized counter for smooth animation
function Counter({ value, duration = 1 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 5);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration * 60)); // approximate 60fps
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function TrustBadgesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Trust Panditha Radhya Jewellers</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We take pride in our legacy, craftsmanship, and happy customers. Here’s a snapshot of what makes us special.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
              <Counter value={stat.value} /> {stat.suffix}
            </h3>
            <p className="text-lg font-semibold text-gray-800">{stat.title}</p>
            <p className="mt-2 text-gray-500">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
