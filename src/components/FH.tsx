"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function FeaturedSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Collection
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Handcrafted jewellery that blends heritage with elegance.
        </motion.p>

        {/* Static Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { src: "/img/img4.jpeg", title: "Necklace" },
            { src: "/img/img5.jpeg", title: "Ring" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-[320px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-5 py-2 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[
              { src: "/img/slider1.jpeg", title: "Earrings" },
              { src: "/img/slider2.jpeg", title: "Bracelet" },
              { src: "/img/slider3.jpeg", title: "Pendant" },
            ].map((item, i) => (
              <CarouselItem key={i} className="p-4 basis-full sm:basis-1/2 md:basis-1/3">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl group"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-[280px] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-black">{item.title}</h3>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* CTA Button */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="rounded-2xl px-10 py-6 text-lg font-semibold bg-black text-white hover:bg-gray-800"
            asChild
          >
            <a href="/service">Explore Our Services</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

