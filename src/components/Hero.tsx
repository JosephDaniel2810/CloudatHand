'use client';

import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Add this import

export default function Hero() {
  return (
    <section
      className="
        relative flex flex-col justify-center items-center text-center 
        h-screen text-white overflow-hidden 
        bg-gradient-to-r from-purple-900 via-fuchsia-700 to-blue-900 animate-gradient
        pt-24
      "
    >
      {/* Glowing Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(#4f46e5_1px,transparent_1px),linear-gradient(90deg,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Powering the Digital Evolution
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-6">
          CloudatHand is your gateway to futuristic, scalable tech solutions.
        </p>

        {/* ✅ Updated Button */}
        <Link href="/contact">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg transition">
            Get Started
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
