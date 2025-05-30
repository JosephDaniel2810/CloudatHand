'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AIPage() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/ai.jpg" alt="AI Solutions" width={320} height={200} className="rounded-lg shadow-xl w-full h-auto object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Artificial Intelligence (AI/ML)</h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Unlock powerful business insights using AI/ML. We develop machine learning pipelines, predictive analytics models, chatbots, and computer vision systems tailored to your data — empowering your decision-making.
          </p>
          <ul className="list-disc list-inside text-gray-400 text-base mb-4">
            <li>Custom machine learning model development</li>
            <li>Natural language processing and chatbots</li>
            <li>Computer vision and image recognition</li>
            <li>AI integration with business workflows</li>
          </ul>
          <p className="text-base text-gray-400">Harness the power of AI to automate, predict, and innovate.</p>
        </motion.div>
      </div>

      {/* Key Benefits Section */}
      <section className="max-w-5xl mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17.93V20h-2v-.07A8.001 8.001 0 014.07 13H4v-2h.07A8.001 8.001 0 0111 4.07V4h2v.07A8.001 8.001 0 0119.93 11H20v2h-.07A8.001 8.001 0 0113 19.93z"></path></svg>
            <h3 className="font-semibold mb-2">Predictive Insights</h3>
            <p className="text-gray-400 text-sm">Anticipate trends and outcomes with advanced analytics.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
            <h3 className="font-semibold mb-2">Automation</h3>
            <p className="text-gray-400 text-sm">Streamline repetitive tasks and boost productivity.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"></path></svg>
            <h3 className="font-semibold mb-2">Natural Language</h3>
            <p className="text-gray-400 text-sm">Chatbots and NLP for smarter customer interactions.</p>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-gray-900 bg-opacity-70 rounded-lg p-6 flex flex-col items-center text-center shadow-md">
            <svg className="text-pink-400 mb-3" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 14c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
            <h3 className="font-semibold mb-2">Vision & Recognition</h3>
            <p className="text-gray-400 text-sm">Image and video analysis for automation and security.</p>
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
