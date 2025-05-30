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
              src="/insights/hospital-ai.png"
              alt="AI Diagnostic System for Hospital Networks"
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
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              AI Diagnostic System for Hospital Networks
            </motion.h1>
            <p className="text-sm text-gray-400 mb-4">By CloudatHand Team | Feb 12, 2025</p>
            <article className="prose prose-invert max-w-none text-lg mb-8">
              <p>
                CloudatHand&apos;s AI diagnostic system was deployed across multiple hospital networks to improve diagnostic accuracy and reduce processing time by 40%.
              </p>
              <h2>Challenge</h2>
              <p>
                Hospitals needed a secure, scalable solution to assist doctors in analyzing complex medical data quickly and accurately.
              </p>
              <h2>Our Solution</h2>
              <ul>
                <li>Developed a HIPAA-compliant AI tool for image and data analysis</li>
                <li>Integrated with existing hospital IT infrastructure</li>
                <li>Provided real-time analytics and reporting</li>
              </ul>
              <h2>Impact</h2>
              <p>
                The system reduced diagnostic time by 40% and improved accuracy, leading to better patient outcomes and operational efficiency.
              </p>
            </article>
            <Link href="/insights/case-studies" className="text-pink-400 hover:underline">← Back to Case Studies</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 