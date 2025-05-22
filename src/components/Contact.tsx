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

    </section>
  );
}
