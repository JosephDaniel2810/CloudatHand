'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function WebDevelopment() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/web.png" alt="Web Development" width={600} height={400} className="rounded-lg shadow-xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Web Development</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            We build sleek, scalable websites using React, Next.js, and modern frameworks. From simple landing pages to full-scale platforms, we deliver responsive, fast-loading, and mobile-friendly experiences with pixel-perfect UI/UX.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
