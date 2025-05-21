'use client';

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 px-8 flex flex-col items-center">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">About CloudatHand</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Empowering businesses through next-generation technology and innovation.
        </p>
      </motion.div>

      {/* Company Story */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mb-16"
      >
        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          CloudatHand was founded with a vision to bridge the gap between complex technologies and practical solutions.
          Our journey started with a simple mission &mdash; to empower businesses to unlock their potential through custom software, AI innovation, and secure digital ecosystems.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Over the years, we&rsquo;ve evolved into a team of passionate engineers, designers, and strategists who believe in the transformative power of technology.
        </p>
      </motion.section>

      {/* Core Values */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl"
      >
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-gray-400">We embrace change and think ahead to create cutting-edge solutions.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Integrity</h3>
          <p className="text-gray-400">We uphold transparency, trust, and responsibility in everything we do.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Excellence</h3>
          <p className="text-gray-400">We strive for quality, precision, and impactful outcomes in all projects.</p>
        </div>
      </motion.section>

      {/* Vision and Mission */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Vision &amp; Mission</h2>
        <p className="text-gray-400 leading-relaxed">
          To become a global leader in digital transformation by delivering innovative, scalable, and secure technology solutions that drive business success.
        </p>
      </motion.section>

    </main>
  );
}
