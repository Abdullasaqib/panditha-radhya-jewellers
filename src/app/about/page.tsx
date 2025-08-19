"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const highlight = "text-yellow-600 font-semibold";

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
      

        {/* Legacy & Reach */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-4"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Legacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Today, the fourth generation of the <span className={highlight}>Kalmat family</span> continues this proud legacy. 
            Our presence extends across Rayalaseema, Bellary, Raichur, and Vijayanagara (Hospet), 
            serving both <span className={highlight}>heritage lovers</span> and <span className={highlight}>modern trend-seekers</span>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our collections strike a perfect balance of <span className={highlight}>traditional craftsmanship</span> and <span className={highlight}>contemporary elegance</span>, from intricately designed bridal sets to sleek, stylish pieces for the Gen Z audience.
          </p>
        </motion.div>

        {/* Custom Jewellery & Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-200 space-y-4"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Custom-Made Jewellery</h2>
          <p className="text-gray-700 leading-relaxed">
            Our <span className={highlight}>custom-made jewellery</span> service allows clients to bring their visions to life. 
            Choose from our curated catalogues or create unique designs with guidance from our expert craftsmen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every customer is valued—whether it’s a family celebrating age-old traditions, or a modern client seeking <span className={highlight}>fashionable, elegant designs</span> for their special moments.
          </p>
        </motion.div>

        {/* Philosophy & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center space-y-4"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Philosophy</h2>
          <p className="text-gray-700 leading-relaxed">
            Jewellery is more than ornamentation—it’s a <span className={highlight}>legacy, a memory, and a story</span>. 
            From weddings to personal milestones, we create pieces to be cherished for generations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

