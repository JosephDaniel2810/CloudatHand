'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function DataVisualization() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/visualization.png" alt="Data Visualization" width={320} height={180} className="rounded-lg shadow-xl object-contain mx-auto mb-4" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Data Visualization</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Make your data meaningful with dashboards, charts, and interactive reports. We use tools like Tableau, Power BI, and D3.js to create intuitive visual interfaces for exploring KPIs, trends, and hidden patterns.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base mb-4">
            <li>Custom dashboard and report development</li>
            <li>Integration with databases and APIs</li>
            <li>Interactive and real-time data visualizations</li>
            <li>Data storytelling and presentation</li>
          </ul>
          <p className="text-base text-gray-400">See your business in a new light with clear, actionable insights.</p>
        </motion.div>
      </div>

      {/* Key Benefits Section */}
      <section className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17h18v2H3v-2zm0-5h12v2H3v-2zm0-5h8v2H3V7z"></path></svg>
            <h3 className="font-semibold mb-2">Clarity</h3>
            <p className="text-gray-400 text-sm">Turn complex data into clear, actionable visuals.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>
            <h3 className="font-semibold mb-2">Interactivity</h3>
            <p className="text-gray-400 text-sm">Explore data with interactive dashboards and charts.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            <h3 className="font-semibold mb-2">Engagement</h3>
            <p className="text-gray-400 text-sm">Boost understanding and retention with visual storytelling.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
            <h3 className="font-semibold mb-2">Real-Time</h3>
            <p className="text-gray-400 text-sm">Monitor KPIs and trends as they happen for fast action.</p>
          </motion.div>
        </div>
        <div className="flex justify-center mt-10">
          <a href="/contact">
            <motion.button whileHover={{ scale: 1.08 }} className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg text-base font-semibold shadow-lg transition">
              Get a Free Consultation
            </motion.button>
          </a>
        </div>
      </section>
    </section>
  );
}
