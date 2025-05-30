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
              src="/insights/nextjs.png"
              alt="Building Scalable Web Apps with Next.js"
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
              Building Scalable Web Apps with Next.js
            </motion.h1>
            <p className="text-sm text-gray-400 mb-4">By CloudatHand Team | May 10, 2025</p>
            <article className="prose prose-invert max-w-none text-lg mb-8">
              <p>
                In today&apos;s fast-paced digital world, scalability is a key factor for any successful web application. At CloudatHand, we leverage the power of Next.js to build web apps that are not only fast and SEO-optimized, but also highly scalable and maintainable.
              </p>
              <h2>Why Next.js?</h2>
              <ul>
                <li>Server-side rendering for better SEO and performance</li>
                <li>Static site generation for lightning-fast load times</li>
                <li>API routes for seamless backend integration</li>
                <li>Built-in image optimization</li>
                <li>Easy deployment with Vercel</li>
              </ul>
              <h2>Our Approach</h2>
              <p>
                We start by understanding your business needs and architecting a solution that can grow with your user base. Our team uses modular components, efficient data fetching strategies, and best practices in code splitting and caching.
              </p>
              <h2>Results</h2>
              <p>
                Clients have seen up to 3x faster load times and a 40% increase in organic traffic after migrating to our Next.js solutions. Whether you&apos;re a startup or an enterprise, we can help you scale with confidence.
              </p>
            </article>
            <Link href="/insights/blog" className="text-pink-400 hover:underline">← Back to Blog</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 