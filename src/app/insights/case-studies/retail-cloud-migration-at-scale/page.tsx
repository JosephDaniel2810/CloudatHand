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
              src="/insights/cloud-migration.png"
              alt="Retail Cloud Migration at Scale"
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
              Retail Cloud Migration at Scale
            </motion.h1>
            <p className="text-sm text-gray-400 mb-4">By CloudatHand Team | Jan 22, 2025</p>
            <article className="prose prose-invert max-w-none text-lg mb-8">
              <p>
                CloudatHand migrated a national e-commerce retailer to AWS microservices architecture, achieving zero downtime and 45% faster deployments.
              </p>
              <h2>Challenge</h2>
              <p>
                The retailer needed to modernize its infrastructure to handle rapid growth and seasonal spikes without service interruptions.
              </p>
              <h2>Our Solution</h2>
              <ul>
                <li>Designed a scalable AWS microservices architecture</li>
                <li>Automated CI/CD pipelines for seamless deployments</li>
                <li>Ensured data integrity and security throughout migration</li>
              </ul>
              <h2>Impact</h2>
              <p>
                The migration resulted in zero downtime, 45% faster deployments, and improved scalability for future growth.
              </p>
            </article>
            <Link href="/insights/case-studies" className="text-pink-400 hover:underline">← Back to Case Studies</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 