'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCloud, FaServer, FaSyncAlt, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

export default function CloudSolutions() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/cloud.png" alt="Cloud Solutions" width={320} height={180} className="rounded-lg shadow-xl object-contain mx-auto mb-4" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4">Cloud Solutions</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Leverage AWS, Azure, or GCP to scale your business infrastructure. We manage cloud migrations, cost optimization, serverless architecture, and DevOps pipelines — giving you resilient and high-availability systems.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base mb-4">
            <li>Cloud migration and modernization</li>
            <li>Serverless and microservices architecture</li>
            <li>DevOps automation and CI/CD pipelines</li>
            <li>Disaster recovery and backup solutions</li>
          </ul>
          <p className="text-base text-gray-400">Empower your business with secure, scalable, and cost-effective cloud solutions.</p>
        </motion.div>
      </div>

      {/* Key Benefits Section */}
      <section className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-8 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaCloud size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Scalable Infrastructure</h3>
            <p className="text-gray-400 text-sm">Easily scale resources up or down as your business grows.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaServer size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Modern Architecture</h3>
            <p className="text-gray-400 text-sm">Serverless and microservices for reliability and cost efficiency.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaSyncAlt size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Automated DevOps</h3>
            <p className="text-gray-400 text-sm">CI/CD pipelines for faster, safer deployments.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <FaShieldAlt size={32} className="text-pink-400 mb-3" />
            <h3 className="font-semibold mb-2">Secure by Design</h3>
            <p className="text-gray-400 text-sm">Best practices for cloud security and compliance.</p>
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
