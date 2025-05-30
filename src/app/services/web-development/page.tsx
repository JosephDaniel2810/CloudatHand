'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaRocket, FaPalette, FaMobileAlt, FaSearch, FaCogs, FaUsers } from "react-icons/fa";
import Link from "next/link";

export default function WebDevelopment() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/web.png" alt="Web Development" width={320} height={180} className="rounded-lg shadow-xl object-contain mx-auto mb-4" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Web Development</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We build sleek, scalable websites using React, Next.js, and modern frameworks. From simple landing pages to full-scale platforms, we deliver responsive, fast-loading, and mobile-friendly experiences with pixel-perfect UI/UX.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base mb-4">
            <li>Custom website and web app development</li>
            <li>SEO optimization and accessibility best practices</li>
            <li>Performance tuning and analytics integration</li>
            <li>Ongoing support and maintenance</li>
          </ul>
          <p className="text-base text-gray-400">Let us help you create a digital presence that stands out and grows with your business.</p>
        </motion.div>
      </div>

      {/* Key Benefits Section */}
      <section className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaRocket size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-400 text-sm">Optimized for speed and SEO to boost your online presence.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaPalette size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Beautiful Design</h3>
            <p className="text-gray-400 text-sm">Pixel-perfect UI/UX tailored to your brand and audience.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaMobileAlt size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Mobile Friendly</h3>
            <p className="text-gray-400 text-sm">Fully responsive and accessible on all devices.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaSearch size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">SEO Optimized</h3>
            <p className="text-gray-400 text-sm">Built with best practices for discoverability and ranking.</p>
          </motion.div>
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.08 }} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg text-base font-semibold shadow-lg transition">
              Get a Free Consultation
            </motion.button>
          </Link>
        </div>
      </section>
    </section>
  );
}
