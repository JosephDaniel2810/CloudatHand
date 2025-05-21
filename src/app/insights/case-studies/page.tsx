'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "AI Diagnostic System for Hospital Networks",
    description: "We developed a secure AI tool that improves diagnostic accuracy and reduced processing time by 40% for hospitals across three continents.",
    image: "/insights/hospital-ai.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Retail Cloud Migration at Scale",
    description: "CloudatHand migrated a national e-commerce retailer to AWS microservices architecture with zero downtime and 45% faster deployments.",
    image: "/insights/cloud-migration.png",
    date: "Jan 22, 2025",
    href: "#",
  },
  {
    title: "Custom ERP for Manufacturing Firm",
    description: "We delivered a tailored ERP solution that unified operations, inventory, and HR across five global factories with real-time analytics.",
    image: "/insights/erp.png",
    date: "Nov 5, 2024",
    href: "#",
  },
];

export default function CaseStudies() {
  return (
    <section className="min-h-screen pt-24 px-6 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Case Studies
        </motion.h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={600}
                height={400}
                className="w-full object-contain rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{caseStudy.date}</p>
                <h2 className="text-xl font-semibold mb-3">{caseStudy.title}</h2>
                <p className="text-gray-300 mb-4">{caseStudy.description}</p>
                <Link
                  href={caseStudy.href}
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
