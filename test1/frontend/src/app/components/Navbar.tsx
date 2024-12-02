"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 border-b shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-white">
        <Link href="/">🌟 My Website</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="text-3xl cursor-pointer md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex gap-6 m-0 p-0 transition-all ease-in-out duration-300 ${isOpen ? 'flex-col absolute top-16 right-5 bg-white shadow-lg p-4 rounded-lg w-48' : ''} md:flex md:w-auto md:bg-transparent`}
      >
        <li className="text-lg">
          <Link
            href="/"
            className="text-white hover:text-indigo-200 font-semibold transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li className="text-lg">
          <Link
            href="/wishes"
            className="text-white hover:text-indigo-200 font-semibold transition-colors duration-300"
          >
            Wishes
          </Link>
        </li>
        <li className="text-lg">
          <Link
            href="/gallery"
            className="text-white hover:text-indigo-200 font-semibold transition-colors duration-300"
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
}
