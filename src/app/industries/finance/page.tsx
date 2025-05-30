'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Finance() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/industries/finance.png" alt="Finance Industry" width={600} height={400} className="rounded-lg shadow-xl w-full h-auto object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-4">Finance</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            From digital banking to investment dashboards and fraud detection systems, we engineer secure, scalable FinTech products that meet regulatory standards while enhancing user experience and operational transparency.
          </p>
        </motion.div>
      </div>
      {/* Mini Case Study */}
      <div className="max-w-3xl mx-auto mt-16 mb-10">
        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-3">Case Study: Secure Banking App</h2>
        <p className="text-gray-300 mb-2">We developed a mobile banking app for a fintech startup, resulting in a 60% increase in user signups and zero security breaches in the first year.</p>
        <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-400">“Their team delivered a secure, user-friendly app that our customers love.”</blockquote>
      </div>
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg mb-3">Frequently Asked Questions</h2>
        <div className="mb-2">
          <h3 className="font-semibold text-gray-200">Do you build solutions that meet financial regulations?</h3>
          <p className="text-gray-400">Yes, our products are designed to comply with standards like PCI DSS, SOC2, and GDPR.</p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-gray-200">Can you integrate with legacy banking systems?</h3>
          <p className="text-gray-400">Yes, we have extensive experience integrating with both modern APIs and legacy infrastructure.</p>
        </div>
      </div>
      {/* Call to Action */}
      <div className="flex justify-center mb-10">
        <a href="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg text-base font-semibold shadow-lg transition">Contact Us for a Consultation</a>
      </div>
    </section>
  );
}
