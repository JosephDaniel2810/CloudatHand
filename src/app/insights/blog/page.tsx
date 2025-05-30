'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Building Scalable Web Apps with Next.js",
    description: "Learn how we use Next.js to create high-performance, SEO-optimized apps for clients.",
    image: "/insights/nextjs.png",
    date: "May 10, 2025",
    slug: "building-scalable-web-apps",
  },
  {
    title: "Case Study: AI in Healthcare Diagnostics",
    description: "How CloudatHand developed an ML model to assist radiologists with 90%+ accuracy.",
    image: "/insights/ai-healthcare.png",
    date: "April 20, 2025",
    slug: "ai-in-healthcare-diagnostics",
  },
  {
    title: "5 Cloud Patterns Every CTO Should Know",
    description: "Serverless, microservices, and edge computing: why these cloud patterns matter in 2025.",
    image: "/insights/cloud-patterns.png",
    date: "March 30, 2025",
    slug: "cloud-patterns-every-cto-should-know",
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen pt-24 px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Latest Blog Posts
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full object-contain rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <Link
                  href={`/insights/blog/${post.slug}`}
                  className="text-pink-400 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
