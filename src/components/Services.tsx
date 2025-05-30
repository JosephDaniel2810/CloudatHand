'use client';

import { motion } from "framer-motion";
import { 
    FaLaptopCode, FaCloud, FaMobileAlt, FaCogs, 
    FaBrain, FaChartBar, FaDatabase, FaShieldAlt 
  } from "react-icons/fa";
import Link from "next/link";

  const services = [
    {
      title: "Web Development",
      description: "Modern, scalable websites using React, Next.js, and more.",
      icon: <FaLaptopCode size={40} />,
      href: "/services/web-development",
    },
    {
      title: "Cloud Solutions",
      description: "Robust cloud infrastructure on AWS, Azure, and GCP.",
      icon: <FaCloud size={40} />,
      href: "/services/cloud-solutions",
    },
    {
      title: "Mobile App Development",
      description: "Seamless mobile experiences for iOS and Android.",
      icon: <FaMobileAlt size={40} />,
      href: "/services/mobile-app-development",
    },
    {
      title: "Custom Software",
      description: "Tailored digital solutions designed for your growth.",
      icon: <FaCogs size={40} />,
      href: "/services/custom-software",
    },
    {
      title: "Artificial Intelligence (AI/ML)",
      description: "Smart, AI-driven applications for your business.",
      icon: <FaBrain size={40} />,
      href: "/services/artificial-intelligence",
    },
    {
      title: "Data Visualization",
      description: "Clear, beautiful insights from complex data.",
      icon: <FaChartBar size={40} />,
      href: "/services/data-visualization",
    },
    {
      title: "Data Engineering",
      description: "Robust data pipelines and scalable warehouses.",
      icon: <FaDatabase size={40} />,
      href: "/services/data-engineering",
    },
    {
      title: "Cybersecurity",
      description: "Protect your systems with advanced security.",
      icon: <FaShieldAlt size={40} />,
      href: "/services/cybersecurity",
    },
  ];
export default function Services() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-purple-900 via-fuchsia-700 to-blue-900 animate-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="block group focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg">
              <motion.div
                className="bg-black bg-opacity-40 rounded-lg p-6 hover:scale-105 transition-transform duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className="mb-4 text-fuchsia-400"
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 1.15 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
