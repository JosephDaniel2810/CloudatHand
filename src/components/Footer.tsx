'use client';

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-[#cccccc] py-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 w-full gap-6 md:gap-0">
        {/* Logo and company name */}
        <div className="flex items-center gap-3 min-w-0 md:justify-start w-full md:w-auto mb-6 md:mb-0">
          <Image src="/logo1.png" alt="CloudatHand Logo" width={48} height={48} className="min-w-[40px] w-12 h-12 object-contain" />
          <span className="text-xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight truncate">CloudatHand</span>
        </div>
        {/* Useful Links */}
        <nav className="flex flex-wrap gap-6 text-sm justify-center md:justify-end w-full md:w-auto">
          <Link href="/" className="hover:text-pink-400 transition font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Home</Link>
          <Link href="/services/web-development" className="hover:text-pink-400 transition font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Services</Link>
          <Link href="/industries/healthcare" className="hover:text-pink-400 transition font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Industries</Link>
          <Link href="/about" className="hover:text-pink-400 transition font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">About</Link>
          <Link href="/contact" className="hover:text-pink-400 transition font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Contact</Link>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto text-center text-gray-600 text-xs mt-6">
        © {new Date().getFullYear()} CloudatHand. All rights reserved.
      </div>
    </footer>
  );
}
