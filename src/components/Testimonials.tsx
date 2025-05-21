'use client';

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "CloudatHand helped us scale our platform quickly and efficiently. Truly outstanding service!",
    name: "Sarah Johnson, CEO of InnovateX",
  },
  {
    quote: "Their team built a custom cloud solution that exceeded all expectations. Highly recommend CloudatHand!",
    name: "David Kim, CTO of CloudNet",
  },
  {
    quote: "Incredible work on our AI-driven app! CloudatHand made complex ideas reality with ease.",
    name: "Alicia Martinez, Product Manager at SmartTech",
  },
  {
    quote: "Excellent data visualization tools and strong cybersecurity strategies. We trust CloudatHand 100%.",
    name: "James Lee, Founder of DataForge",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-purple-900 via-fuchsia-700 to-blue-900 animate-gradient text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-40 rounded-lg p-8 hover:scale-105 transition-transform duration-300 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-lg text-gray-300 italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <h4 className="text-white font-bold text-md">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
