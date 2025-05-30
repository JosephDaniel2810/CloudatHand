'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/industries/education.png" alt="Education Industry" width={600} height={400} className="rounded-lg shadow-xl w-full h-auto object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4">Education</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            We develop LMS platforms, virtual classrooms, e-learning portals, and content management systems for schools, universities, and edtech startups. Our tools engage learners while simplifying admin workflows.
          </p>
        </motion.div>
      </div>
      {/* Mini Case Study */}
      <div className="max-w-3xl mx-auto mt-16 mb-10">
        <h2 className="text-2xl font-bold mb-3 text-pink-400">Case Study: Virtual Classroom Launch</h2>
        <p className="text-gray-300 mb-2">A university partnered with us to launch a virtual classroom platform, resulting in a 50% increase in student engagement and improved learning outcomes.</p>
        <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-400">“The new platform made remote learning interactive and accessible for all our students.”</blockquote>
      </div>
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-3">Frequently Asked Questions</h2>
        <div className="mb-2">
          <h3 className="font-semibold text-gray-200">Can you integrate with existing LMS platforms?</h3>
          <p className="text-gray-400">Yes, we can integrate with popular LMS platforms and custom education systems.</p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-gray-200">Do you offer training for staff and students?</h3>
          <p className="text-gray-400">Yes, we provide onboarding and training to ensure a smooth transition and effective use of new tools.</p>
        </div>
      </div>
      {/* Call to Action */}
      <div className="flex justify-center mb-10">
        <a href="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg text-base font-semibold shadow-lg transition">Contact Us for a Consultation</a>
      </div>
    </section>
  );
}
