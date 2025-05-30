'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        { name: "E‑commerce", href: "/industries/ecommerce" },
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
        { name: "Contact Us", href: "/contact" }
      ],
    },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md px-6 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 md:gap-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition min-w-0">
          <Image src="/logo1.png" alt="CloudatHand Logo" width={48} height={48} className="min-w-[40px] w-12 h-12 object-contain" />
          <h1 className="text-2xl md:text-3xl font-bold text-white truncate">CloudatHand</h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-white relative">
          {menuItems.map(({ title, items }) => (
            <div
              key={title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 font-semibold">
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
                    className="absolute top-full mt-2 w-60 bg-black text-white p-4 rounded-lg shadow-lg flex flex-col gap-3 z-50"
                  >
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="hover:text-pink-400 transition duration-150 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <FaFacebook size={20} className="hover:text-pink-400" />
            <FaTwitter size={20} className="hover:text-pink-400" />
            <FaInstagram size={20} className="hover:text-pink-400" />
            <FaLinkedin size={20} className="hover:text-pink-400" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black bg-opacity-95 mt-4 rounded-lg p-4"
          >
            {menuItems.map(({ title, items }) => (
              <div key={title} className="mb-4">
                <button
                  onClick={() => setActiveDropdown((cur) => (cur === title ? null : title))}
                  className="w-full flex justify-between items-center text-white font-semibold py-2"
                >
                  {title} <IoIosArrowDown size={16} className={activeDropdown === title ? "rotate-180 transform" : ""} />
                </button>
                <AnimatePresence>
                  {activeDropdown === title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 flex flex-col gap-2"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="text-gray-300 hover:text-pink-400 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Mobile social icons */}
            <div className="flex justify-center gap-6 pt-4 border-t border-gray-700">
              <FaFacebook size={20} className="hover:text-pink-400" />
              <FaTwitter size={20} className="hover:text-pink-400" />
              <FaInstagram size={20} className="hover:text-pink-400" />
              <FaLinkedin size={20} className="hover:text-pink-400" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
