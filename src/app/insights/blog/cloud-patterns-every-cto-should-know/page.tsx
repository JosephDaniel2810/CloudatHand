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
              src="/insights/cloud-patterns.png"
              alt="5 Cloud Patterns Every CTO Should Know"
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
              5 Cloud Patterns Every CTO Should Know
            </motion.h1>
            <p className="text-sm text-gray-400 mb-4">By CloudatHand Team | March 30, 2025</p>
            <article className="prose prose-invert max-w-none text-lg mb-8">
              <p>
                Cloud computing is evolving rapidly, and CTOs must stay ahead by understanding key architectural patterns. Here are five patterns shaping the future of cloud-native development:
              </p>
              <h2>1. Serverless</h2>
              <p>Focus on code, not infrastructure. Serverless enables rapid scaling and cost efficiency.</p>
              <h2>2. Microservices</h2>
              <p>Break down applications into independent, deployable services for agility and resilience.</p>
              <h2>3. Edge Computing</h2>
              <p>Process data closer to users for lower latency and better performance.</p>
              <h2>4. Event-Driven Architecture</h2>
              <p>Build systems that react to events in real time, improving responsiveness and scalability.</p>
              <h2>5. Hybrid & Multi-Cloud</h2>
              <p>Leverage multiple cloud providers for flexibility, redundancy, and compliance.</p>
              <h2>Conclusion</h2>
              <p>
                Adopting these patterns can help organizations innovate faster, reduce costs, and stay competitive in a cloud-first world.
              </p>
            </article>
            <Link href="/insights/blog" className="text-pink-400 hover:underline">← Back to Blog</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 