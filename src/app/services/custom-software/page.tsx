'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCogs, FaPuzzlePiece, FaChartLine, FaUsers } from "react-icons/fa";
import Link from "next/link";

export default function CustomSoftware() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/software devlopment.png" alt="Custom Software" width={320} height={180} className="rounded-lg shadow-xl object-contain mx-auto mb-4" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Custom Software</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Every business is unique. We build fully customized software systems that align with your workflows — CRMs, dashboards, automation tools, and more. From discovery to deployment, we deliver what off-the-shelf tools can&apos;t.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base mb-4">
            <li>Business process automation</li>
            <li>Custom CRM and ERP solutions</li>
            <li>Integration with legacy and cloud systems</li>
            <li>Ongoing support and feature enhancements</li>
          </ul>
          <p className="text-base text-gray-400">Let&apos;s build the exact software your business needs to thrive.</p>
        </motion.div>
      </div>
      {/* Key Benefits Section */}
      <section className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaCogs size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Tailored Solutions</h3>
            <p className="text-gray-400 text-sm">Built to fit your unique business processes and needs.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaPuzzlePiece size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-400 text-sm">Connects with your existing tools and platforms.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaChartLine size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Scalable & Flexible</h3>
            <p className="text-gray-400 text-sm">Grows with your business and adapts to change.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaUsers size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">User-Focused</h3>
            <p className="text-gray-400 text-sm">Intuitive interfaces for your team and customers.</p>
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
