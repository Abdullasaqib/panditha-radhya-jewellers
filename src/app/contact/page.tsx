"use client";

import { Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
        <p className="text-lg text-black/70 max-w-2xl mx-auto">
          We’re here to assist you with all your jewellery needs.  
          Whether it’s a bespoke design, service inquiry, or just guidance,  
          our team is only a call or message away.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Link href="/consultation">
          <button className="px-6 py-3 bg-yellow-600 text-white rounded-xl shadow-lg border border-yellow-700 hover:bg-yellow-700 transition">
            Book a Consultation
          </button>
        </Link>
        <Link href="/service">
          <button className="px-6 py-3 bg-black text-white rounded-xl shadow-lg border border-gray-900 hover:bg-gray-800 transition">
            Explore Collections
          </button>
        </Link>
        <Link href="/faq">
          <button className="px-6 py-3 border border-gray-800 text-black rounded-xl shadow hover:bg-gray-100 transition">
            FAQs & Support
          </button>
        </Link>
      </div>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Phone */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl text-center space-y-4">
          <Phone className="mx-auto text-yellow-600" size={32} />
          <h3 className="text-xl font-semibold text-black">Call Us</h3>
          <p className="text-black/70">+91 9972342012 <br /> +91 8310022705</p>
        </div>

        {/* Email */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl text-center space-y-4">
          <Mail className="mx-auto text-yellow-600" size={32} />
          <h3 className="text-xl font-semibold text-black">Email Us</h3>
          <p className="text-black/70">contact@radhyajewellers.com</p>
        </div>

        {/* Timings */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl text-center space-y-4">
          <Clock className="mx-auto text-yellow-600" size={32} />
          <h3 className="text-xl font-semibold text-black">Working Hours</h3>
          <p className="text-black/70">
            Mon – Sat: 10:00 AM – 8:30 PM <br />
            Sun: 11:00 AM – 6:00 PM
          </p>
        </div>
      </div>

      {/* Extra Section: Direct Support */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-black mb-4">Need Quick Assistance?</h2>
        <p className="text-black/70 mb-6">
          Our jewellery consultants are available to provide personalized guidance instantly.
        </p>
        <Link href="/live-chat">
          <button className="px-8 py-3 flex items-center justify-center gap-2 bg-yellow-600 text-white font-medium rounded-xl shadow-lg hover:bg-yellow-700 transition mx-auto">
            <MessageSquare size={20} />
            Start Live Chat
          </button>
        </Link>
      </div>
    </section>
  );
}

