'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="w-full py-20 text-white bg-gradient-to-r from-purple-900 via-fuchsia-700 to-blue-900 animate-gradient">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">

        
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/about us.png"
            alt="About CloudatHand"
            width={600}
            height={400}
            className="rounded-lg object-cover shadow-lg"
          />
        </motion.div>

        
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
            About Us
          </h3>
          <p className="text-lg md:text-xl text-blue-400 drop-shadow-md leading-relaxed mb-6">
            At CloudatHand, we are passionate about building future-proof technology solutions that empower businesses to lead in the digital era.<br /><br />
            We specialize in custom software development, cloud services, and digital innovation, combining technical expertise with creative thinking.<br /><br />
            Our team is committed to delivering scalable, intelligent, and transformative products that help organizations thrive in an ever-evolving market.<br /><br />
            At CloudatHand, innovation isn&apos;t just a goal — it&apos;s in our DNA.
          </p>

          
          <div className="flex justify-center md:justify-start">
            <Link href="/about">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 w-max">
                Read More
              </button>
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
