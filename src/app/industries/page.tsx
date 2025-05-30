"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUniversity, FaShoppingCart, FaGraduationCap } from "react-icons/fa";

const industries = [
  {
    name: "Healthcare",
    href: "/industries/healthcare",
    image: "/industries/healthcare.jpg",
    icon: <FaHeartbeat size={44} className="text-pink-400 mb-3 drop-shadow-lg" />,
    description:
      "HIPAA-compliant platforms, patient portals, EHR systems, and telehealth apps for secure, efficient healthcare delivery.",
    featured: true,
  },
  {
    name: "Finance",
    href: "/industries/finance",
    image: "/industries/finance.png",
    icon: <FaUniversity size={44} className="text-pink-400 mb-3 drop-shadow-lg" />,
    description:
      "Digital banking, investment dashboards, and fraud detection systems engineered for security, compliance, and transparency.",
    featured: true,
  },
  {
    name: "E-commerce",
    href: "/industries/ecommerce",
    image: "/industries/ecommerce.png",
    icon: <FaShoppingCart size={44} className="text-pink-400 mb-3 drop-shadow-lg" />,
    description:
      "Powerful e-commerce platforms with real-time inventory, integrated payments, and conversion-optimized interfaces.",
    featured: false,
  },
  {
    name: "Education",
    href: "/industries/education",
    image: "/industries/education.png",
    icon: <FaGraduationCap size={44} className="text-pink-400 mb-3 drop-shadow-lg" />,
    description:
      "LMS platforms, virtual classrooms, and e-learning portals for schools, universities, and edtech startups.",
    featured: false,
  },
];

export default function Industries() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 relative overflow-hidden text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <svg width="100%" height="100%" className="opacity-10" style={{position: 'absolute', top: 0, left: 0}}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="40" height="40" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Industries We Serve
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We deliver tailored technology solutions for a range of industries, empowering organizations to innovate and thrive in the digital era.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
        {industries.map((industry, idx) => (
          <Link href={industry.href} key={industry.name} className="group focus:outline-none">
            <motion.div
              className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center text-center p-7 hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-gray-800 group-hover:border-pink-500 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {industry.featured && (
                <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse z-20">Featured</span>
              )}
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute top-2 left-2 z-10">{industry.icon}</div>
              </div>
              <h2 className="text-2xl font-semibold mb-2 mt-2 drop-shadow-lg">{industry.name}</h2>
              <p className="text-gray-300 text-sm mb-4 min-h-[60px] drop-shadow-md">{industry.description}</p>
              <span className="text-pink-400 font-medium group-hover:underline">Learn More →</span>
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-14 relative z-10">
        <Link href="/contact">
          <motion.button whileHover={{ scale: 1.08 }} className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
            Don&apos;t see your industry? Contact us!
          </motion.button>
        </Link>
      </div>
    </section>
  );
} 