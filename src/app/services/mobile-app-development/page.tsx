'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMobileAlt, FaApple, FaAndroid, FaCloud } from "react-icons/fa";
import Link from "next/link";

export default function MobileAppDevelopment() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/mobile.png" alt="Mobile App Development" width={320} height={180} className="rounded-lg shadow-xl object-contain mx-auto mb-4" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Mobile App Development</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We design and develop high-performance mobile apps for iOS and Android using React Native and Flutter. Our apps are optimized for speed, UI consistency, and seamless integration with backend APIs and cloud services.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base mb-4">
            <li>Native and cross-platform app development</li>
            <li>App store deployment and support</li>
            <li>UI/UX design and prototyping</li>
            <li>Integration with cloud and third-party APIs</li>
          </ul>
          <p className="text-base text-gray-400">Transform your ideas into engaging mobile experiences for your users.</p>
        </motion.div>
      </div>

      {/* Key Benefits Section */}
      <section className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaMobileAlt size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Cross-Platform</h3>
            <p className="text-gray-400 text-sm">Build once, deploy on both iOS and Android for maximum reach.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaApple size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Native Experience</h3>
            <p className="text-gray-400 text-sm">Smooth, high-performance apps with native look and feel.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaAndroid size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">App Store Ready</h3>
            <p className="text-gray-400 text-sm">Guidance and support for App Store and Google Play launches.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaCloud size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Cloud Integration</h3>
            <p className="text-gray-400 text-sm">Seamless backend and cloud service integration for real-time data.</p>
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
