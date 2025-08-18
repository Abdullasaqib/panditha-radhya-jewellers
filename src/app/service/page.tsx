"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Heart,
  Gem,
  Star,
  Handshake,
} from "lucide-react"; // 🎨 icons

export default function ServicePage() {
  const services = [
    {
      title: "Custom Jewellery Designing",
      desc: "Have a unique idea in mind? Our skilled craftsmen turn your vision into reality with custom-made jewellery. Whether it’s a sketch, photo, or just an idea, we’ll work step by step to create a piece that’s truly yours.",
      img: "/img/slider1.jpeg",
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Bridal & Wedding Collections",
      desc: "Your wedding day deserves grandeur and elegance. From intricately designed necklaces and bangles to elegant earrings and maang tikas, our bridal sets are crafted to make you shine on your big day.",
      img: "/img/slider2.jpeg",
      icon: <Heart className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Traditional Ornaments",
      desc: "Inspired by cultural motifs, temple jewellery, and classic artistry, our traditional collections carry forward centuries of craftsmanship — treasures to be passed down for generations.",
      img: "/img/slider3.jpeg",
      icon: <Gem className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Contemporary Jewellery",
      desc: "Trendy, lightweight, and chic — our modern collections are designed for Gen Z and young professionals. Perfect for daily wear or outings, they balance elegance with a fashionable edge.",
      img: "/img/img4.jpeg",
      icon: <Star className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Jewellery Consultation",
      desc: "Not sure what to choose? Our expert consultants help you select designs based on your occasion, style, and budget — ensuring you make a confident, satisfying choice.",
      img: "/img/img5.jpeg",
      icon: <Handshake className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-black mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <span className="font-semibold">Panditha Radhya Jewellers</span>, we believe
          jewellery is more than just an ornament — it’s an extension of your
          personality, culture, and memories. Our services are designed to
          cater to every taste, occasion, and generation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Image with hover zoom */}
            <div className="w-full md:w-1/2 h-72 relative overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h2 className="text-2xl font-semibold text-black">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-black mb-6">
          ✨ Ready to Find Your Perfect Jewellery? ✨
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Whether you’re looking for a custom design, a bridal set, or a
          modern-day style statement, we are here to craft jewellery that’s just
          right for you. Every service is built on trust, purity, and
          craftsmanship — values we’ve upheld for over 150 years.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 bg-black text-white rounded-xl shadow-lg border border-gray-900 hover:bg-gray-800 transition">
              Book a Free Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
