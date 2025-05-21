'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0a0117] text-[#cccccc] py-6">
      <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} CloudatHand. All rights reserved.
      </div>
    </footer>
  );
}
