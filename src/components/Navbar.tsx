'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Services",
      items: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Cloud Solutions", href: "/services/cloud-solutions" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "Artificial Intelligence (AI/ML)", href: "/services/artificial-intelligence" },
        { name: "Data Visualization", href: "/services/data-visualization" },
        { name: "Data Engineering", href: "/services/data-engineering" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
      ],
    },
    {
      title: "Industries",
      items: [
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Finance", href: "/industries/finance" },
        { name: "E-commerce", href: "/industries/ecommerce" },
        { name: "Education", href: "/industries/education" },
      ],
    },
    {
      title: "Insights",
      items: [
        { name: "Blog", href: "/insights/blog" },
        { name: "Case Studies", href: "/insights/case-studies" },
        { name: "Whitepapers", href: "/insights/whitepapers" },
      ],
    },
    {
      title: "About",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" }],
    },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md px-6 py-4 flex justify-between items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo1.png" alt="CloudatHand Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold text-white">CloudatHand</h1>
      </div>

      {/* Nav Links and Social Icons */}
      <div className="flex items-center gap-8 text-white relative">
        {menuItems.map(({ title, items }) => (
          <div
            key={title}
            className="relative"
            onMouseEnter={() => setActiveDropdown(title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-white font-semibold text-base">
              {title} <IoIosArrowDown size={16} />
            </button>

            <AnimatePresence>
              {activeDropdown === title && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-60 bg-black text-white p-4 rounded-lg shadow-lg flex flex-col gap-3 text-base z-50"
                >
                  {items.map((item) =>
                    typeof item === "string" ? (
                      <span key={item} className="text-gray-400 italic text-sm">
                        {item}
                      </span>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="hover:text-pink-400 transition duration-150 font-medium"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Social Icons */}
        <a href="#" className="hover:text-pink-400"><FaFacebook size={20} /></a>
        <a href="#" className="hover:text-pink-400"><FaTwitter size={20} /></a>
        <a href="#" className="hover:text-pink-400"><FaInstagram size={20} /></a>
        <a href="#" className="hover:text-pink-400"><FaLinkedin size={20} /></a>
      </div>
    </motion.header>
  );
}
