import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand / Logo */}
        <div className="col-span-1 flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Panditha Radhya<span className="text-yellow-500">Jewellers</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Crafting timeless elegance with pure artistry. Luxury redefined for the modern world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
            <Link href="/service" className="hover:text-yellow-500 transition">service</Link>
            <Link href="/about" className="hover:text-yellow-500 transition">About Us</Link>
            <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-500" />
              <span>contact@radhyajewellers.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-500" />
              <span>+91 9972342012 / +91 8310022705</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-500" />
              <span>Near Tower Clock,Uravakonda – 515 812, Andhra Pradesh</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JewelleryLux. All rights reserved.
      </div>
    </footer>
  );
}
