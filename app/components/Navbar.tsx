"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 bg-[#5C3A21] text-white px-10 py-4 flex justify-between items-center z-50 shadow-md">

      <h1 className="text-xl font-bold">
        The Spatial & Co
      </h1>

      <div className="space-x-6">

        <a href="#home" className="hover:text-[#E6CCB2]">
          Home
        </a>

        <a href="#about" className="hover:text-[#E6CCB2]">
          About
        </a>

        <a href="#contact" className="hover:text-[#E6CCB2]">
          Contact
        </a>

        <Link href="/login" className="hover:text-[#E6CCB2]">
          Login
        </Link>

      </div>

    </nav>
  );
}
