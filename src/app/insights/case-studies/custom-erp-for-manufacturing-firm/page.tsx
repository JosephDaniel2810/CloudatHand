"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <section className="min-h-screen pt-24 px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            className="flex-shrink-0 w-full md:w-64"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/insights/erp.png"
              alt="Custom ERP for Manufacturing Firm"
              width={320}
              height={200}
              className="rounded-lg object-contain w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Custom ERP for Manufacturing Firm
            </motion.h1>
            <p className="text-sm text-gray-400 mb-4">By CloudatHand Team | Nov 5, 2024</p>
            <article className="prose prose-invert max-w-none text-lg mb-8">
              <p>
                CloudatHand delivered a tailored ERP solution that unified operations, inventory, and HR across five global factories with real-time analytics.
              </p>
              <h2>Challenge</h2>
              <p>
                The manufacturing firm needed to replace legacy systems and unify data across multiple departments and locations.
              </p>
              <h2>Our Solution</h2>
              <ul>
                <li>Developed a custom ERP platform with modular features</li>
                <li>Integrated real-time analytics and reporting</li>
                <li>Provided training and support for global teams</li>
              </ul>
              <h2>Impact</h2>
              <p>
                The ERP system improved efficiency, data accuracy, and decision-making across all factories.
              </p>
            </article>
            <Link href="/insights/case-studies" className="text-pink-400 hover:underline">← Back to Case Studies</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 