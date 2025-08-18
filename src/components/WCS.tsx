"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Award, Users, Heart, Sparkles } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const features = [
  {
    title: "150+ Years of Legacy",
    desc: "A trusted name across four generations.",
    icon: <Award className="w-10 h-10 text-yellow-500" />,
    value: 150,
    unit: "+",
    progress: 100,
  },
  {
    title: "Purity & Quality Guaranteed",
    desc: "Only the finest materials and craftsmanship.",
    icon: <Sparkles className="w-10 h-10 text-blue-500" />,
    value: 100,
    unit: "%",
    progress: 100,
  },
  {
    title: "Heritage Meets Trend",
    desc: "Designs that reflect both tradition and modern elegance.",
    icon: <Star className="w-10 h-10 text-purple-500" />,
    value: 95,
    unit: "%",
    progress: 95,
  },
  {
    title: "Customer-Centric Approach",
    desc: "Every client is treated like family.",
    icon: <Users className="w-10 h-10 text-green-500" />,
    value: 100,
    unit: "%",
    progress: 100,
  },
  {
    title: "Customization at its Best",
    desc: "From catalogue to imagination, we bring your ideas to life.",
    icon: <Heart className="w-10 h-10 text-pink-500" />,
    value: 100,
    unit: "%",
    progress: 100,
  },
];

// Animated Counter
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor((duration * 1000) / value), 10);
    const timer = setInterval(() => {
      start += 1;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

// Line chart data
const chartData = {
  labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      label: "Jewels Crafted",
      data: [2000, 4000, 7000, 9000, 11000, 12000],
      borderColor: "#facc15",
      backgroundColor: "rgba(250,204,21,0.2)",
      tension: 0.4,
      fill: true,
      pointRadius: 6,
      pointHoverRadius: 8,
    },
  ],
};

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-20 relative">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Panditha Radhya Jewellers</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Experience excellence, heritage, and trust. Our commitment to superior craftsmanship and customer delight sets us apart in the jewellery world.
        </p>
      </div>

      {/* 2 Rows of 3 Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-4">{feature.desc}</p>
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-4 bg-yellow-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${feature.progress}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <p className="text-xl font-bold text-gray-900">
              <Counter value={feature.value} /> {feature.unit}
            </p>
          </motion.div>
        ))}

        {/* Chart Box aligned with other cards */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: features.length * 0.15 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Jewels Crafted Growth</h3>
          <div className="w-full h-64">
            <Line
              data={chartData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
                animation: { duration: 1500, easing: "easeOutQuart" },
                scales: {
                  y: { beginAtZero: true },
                  x: { grid: { display: false } },
                },
              }}
            />
          </div>
          <p className="mt-4 text-gray-700 font-medium">
            Our creations have grown consistently over the years, reflecting quality and trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
