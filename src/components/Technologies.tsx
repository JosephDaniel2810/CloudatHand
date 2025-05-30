'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
    
        { name: "Next.js", logo: "/Next.js.png" },
        { name: "React", logo: "/React.svg" },
        { name: "AWS", logo: "/aws.svg" },
        { name: "Python", logo: "/python.jpg" },
        { name: "Node.js", logo: "/Node.js.png" },
        { name: "PostgreSQL", logo: "/Postgresql.svg" },
      
];

export default function Technologies() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Technologies We Use
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="mt-2 text-sm md:text-base font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">{tech.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
