"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-[2000] bg-[#5200f5] text-white transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl lg:text-2xl font-bold truncate">
          Pacific Safety Solution
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#services" className="hover:text-gray-300 transition">
            Services
          </Link>
          <Link href="#testimonials" className="hover:text-gray-300 transition">
            Testimonials
          </Link>
          <Link href="#values" className="hover:text-gray-300 transition">
            Values
          </Link>
          <Link href="#contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[1999] bg-[#5200f5] text-white flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center space-y-8 text-2xl font-semibold">
            <Link
              href="#about"
              onClick={toggleMenu}
              className="hover:text-gray-300 transition"
            >
              About
            </Link>
            <Link
              href="#services"
              onClick={toggleMenu}
              className="hover:text-gray-300 transition"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              onClick={toggleMenu}
              className="hover:text-gray-300 transition"
            >
              Testimonials
            </Link>
            <Link
              href="#values"
              onClick={toggleMenu}
              className="hover:text-gray-300 transition"
            >
              Values
            </Link>
            <Link
              href="#contact"
              onClick={toggleMenu}
              className="hover:text-gray-300 transition"
            >
              Contact
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="mt-12 text-sm underline hover:text-gray-300 transition"
          >
            Close Menu
          </button>
        </div>
      )}
    </header>
  );
}
