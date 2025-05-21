'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center bg-black">
      
      <motion.div 
        className="relative w-full max-w-7xl rounded-3xl overflow-hidden mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Contact.png"
          alt="Contact Background"
          width={1400}
          height={600}
          className="rounded-3xl object-cover w-full h-auto"
        />
      </motion.div>

      
      <motion.a
        href="#contact-form"
        className="inline-block w-max mx-auto bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Reach Out To Us!
      </motion.a>
    </section>
  );
}
