'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function CustomSoftware() {
  return (
    <section className="min-h-screen pt-24 px-8 py-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image src="/software devlopment.png" alt="Custom Software" width={600} height={400} className="rounded-lg shadow-xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl font-bold mb-4">Custom Software</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Every business is unique. We build fully customized software systems that align with your workflows — CRMs, dashboards, automation tools, and more. From discovery to deployment, we deliver what off-the-shelf tools can’t.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
