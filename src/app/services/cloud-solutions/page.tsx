'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function CloudSolutions() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/cloud.png" alt="Cloud Solutions" width={600} height={400} className="rounded-lg shadow-xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Cloud Solutions</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Leverage AWS, Azure, or GCP to scale your business infrastructure. We manage cloud migrations, cost optimization, serverless architecture, and DevOps pipelines — giving you resilient and high-availability systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
