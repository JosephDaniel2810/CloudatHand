"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
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
              src="/insights/ai-healthcare.png"
              alt="AI in Healthcare Diagnostics"
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
              Case Study: AI in Healthcare Diagnostics
            </motion.h1>
            <p className="text-sm text-gray-400 mb-4">By CloudatHand Team | April 20, 2025</p>
            <article className="prose prose-invert max-w-none text-lg mb-8">
              <p>
                CloudatHand partnered with a leading hospital to develop an AI-powered diagnostic tool for radiologists. The goal: improve accuracy and speed in detecting anomalies in medical images.
              </p>
              <h2>Challenge</h2>
              <p>
                Radiologists face increasing workloads and the risk of human error. The hospital needed a solution that could assist in identifying subtle patterns in X-rays and MRIs.
              </p>
              <h2>Our Solution</h2>
              <ul>
                <li>Developed a custom machine learning model trained on thousands of annotated images</li>
                <li>Integrated the model into the hospital&apos;s workflow with a user-friendly interface</li>
                <li>Ensured HIPAA compliance and data security</li>
              </ul>
              <h2>Impact</h2>
              <p>
                The AI tool achieved over 90% accuracy, reducing diagnostic time by 30%. Radiologists reported higher confidence and efficiency, leading to better patient outcomes.
              </p>
            </article>
            <Link href="/insights/blog" className="text-pink-400 hover:underline">← Back to Blog</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 