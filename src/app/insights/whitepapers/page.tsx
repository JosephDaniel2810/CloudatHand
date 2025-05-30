'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const whitepapers = [
  {
    title: "2025 Tech Trends & Forecasts",
    description: "A comprehensive outlook on emerging technologies shaping enterprise IT over the next 3 years.",
    image: "/insights/trends.png",
    date: "May 1, 2025",
    pdf: "/tech-trends-2025.pdf",
  },
  {
    title: "AI Governance & Compliance Framework",
    description: "Explore a policy-first approach to deploying ethical and auditable AI systems at scale.",
    image: "/insights/ai-governance.png",
    date: "April 10, 2025",
    pdf: "/ai-governance.pdf",
  },
  {
    title: "Securing Cloud-Native Infrastructure",
    description: "Best practices for safeguarding Kubernetes, microservices, and serverless deployments.",
    image: "/insights/cloud-secure.png",
    date: "March 18, 2025",
    pdf: "/cloud-security.pdf",
  },
];

export default function Whitepapers() {
  return (
    <section className="min-h-screen pt-24 px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Whitepapers
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {whitepapers.map((wp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={wp.image}
                alt={wp.title}
                width={600}
                height={400}
                className="w-full object-contain rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{wp.date}</p>
                <h2 className="text-xl font-semibold mb-3">{wp.title}</h2>
                <p className="text-gray-300 mb-4">{wp.description}</p>
                <Link
                  href={wp.pdf}
                  target="_blank"
                  className="text-pink-400 hover:underline font-medium"
                >
                  Download PDF →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
