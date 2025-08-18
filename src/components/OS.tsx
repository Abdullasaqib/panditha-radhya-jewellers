"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Gem,
  Star,
  Handshake,
} from "lucide-react"; // colorful icons

export default function ServicesSection() {
  const services = [
    {
      title: "Custom Jewellery Designing",
      desc: "Bring your dream designs, and we’ll craft them to perfection.",
      icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Bridal & Wedding Collections",
      desc: "Timeless ornaments to make your big day truly special.",
      icon: <Heart className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Traditional Ornaments",
      desc: "Carrying forward centuries of artistry with classic designs.",
      icon: <Gem className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Contemporary Jewellery",
      desc: "Trendy, stylish pieces for Gen Z and modern lifestyles.",
      icon: <Star className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Jewellery Consultation",
      desc: "Personalized guidance to help you select or design the perfect piece.",
      icon: <Handshake className="w-10 h-10 text-green-500" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our exclusive services designed to cater to every taste, occasion, and generation.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 flex flex-col items-center text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
