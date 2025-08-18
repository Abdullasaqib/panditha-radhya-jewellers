"use client";

import { Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
        <p className="text-lg text-black/70">
          ✨ Let’s create jewellery that’s truly yours. ✨
        </p>
      </div>

      {/* Call-to-Action */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link href="https://maps.app.goo.gl/rUHhsmhR9J9EStWeA" target="_blank">
          <button className="px-6 py-3 bg-yellow-600 text-white rounded-xl shadow-lg border border-yellow-700 hover:bg-yellow-700 transition">
            Visit Our Store
          </button>
        </Link>
        <Link href="/consultation">
          <button className="px-6 py-3 bg-black text-white rounded-xl shadow-lg border border-gray-900 hover:bg-gray-800 transition">
            Book a Consultation
          </button>
        </Link>
        <Link href="/service">
          <button className="px-6 py-3 border border-gray-800 text-black rounded-xl shadow hover:bg-gray-100 transition">
            Explore Collections
          </button>
        </Link>
      </div>

      {/* Contact Info */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-2xl border border-gray-200 shadow-xl p-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6">
            Panditha Radhya Jewellers
          </h2>
          <p className="text-black mb-4 leading-relaxed">
            Near Tower Clock, <br /> Uravakonda – 515 812, Andhra Pradesh
          </p>

          <div className="space-y-4 text-black">
            <p className="flex items-center gap-3">
              <Phone className="text-yellow-600" size={20} />
              <span className="font-medium">+91 99512 73207 / +91 94405 57507</span>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-yellow-600" size={20} />
              <span className="font-medium">contact@radhyajewellers.com</span>
            </p>
            <p className="flex items-center gap-3">
              <Clock className="text-yellow-600" size={20} />
              <span className="font-medium">
                Mon – Sat: 10:00 AM – 8:30 PM <br />
                Sun: 11:00 AM – 6:00 PM
              </span>
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6">Find Us</h2>
          <div className="rounded-xl border border-gray-300 shadow-lg overflow-hidden">
            <iframe
              className="w-full h-72"
              src="https://www.google.com/maps?q=14.943420600832793,77.2580206952507&z=15&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
