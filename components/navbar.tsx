"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Info, Briefcase, Star, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  // Close services dropdown if clicked outside (desktop)
  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[2000] bg-[#5200f5] text-white transition-colors duration-300 shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-2 lg:py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            width={200}
            height={200}
            className="w-6 lg:w-6 h-auto"
            src="/images/logo.png"
            alt="logo"
          />
          <p className="text-base font-[lato] lg:text-2xl font-bold truncate">
            Pacific Safety Solution
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="#products" className="hover:text-gray-300 transition">
            Products
          </Link>

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={toggleServices}
              className="flex items-center gap-1 hover:text-gray-300 transition focus:outline-none"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-2 bg-white text-gray-800 rounded-md shadow-lg min-w-[180px] z-50">
                <Link
                  href="#air-conditional"
                  className="block px-4 py-2 hover:bg-[#5200f5] hover:text-white transition"
                >
                  Air Conditional
                </Link>
                <Link
                  href="#fire-extinguisher"
                  className="block px-4 py-2 hover:bg-[#5200f5] hover:text-white transition"
                >
                  Fire Extinguisher
                </Link>
                <Link
                  href="#user"
                  className="block px-4 py-2 hover:bg-[#5200f5] hover:text-white transition"
                >
                  User
                </Link>
              </div>
            )}
          </div>

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
          <Menu className="w-9 h-5" />
        </button>
      </div>

      {/* Side Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#5200f5] text-white z-[3000] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6">
          <p className="text-lg font-bold">Menu</p>
          <button onClick={toggleMenu} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 px-6 text-lg font-medium">
          <Link
            href="#about"
            onClick={toggleMenu}
            className="flex items-center gap-3 hover:text-gray-300 transition"
          >
            <Info className="w-5 h-5" /> About
          </Link>
          <Link
            href="#products"
            onClick={toggleMenu}
            className="flex items-center gap-3 hover:text-gray-300 transition"
          >
            <Briefcase className="w-5 h-5" /> Products
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-3 hover:text-gray-300 transition focus:outline-none"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              <Star className="w-5 h-5" /> Services
              <ChevronDown
                className={`w-4 h-4 ml-auto transition-transform ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="flex flex-col ml-8 mt-2 space-y-2 text-base">
                <Link
                  href="#air-conditional"
                  onClick={() => {
                    toggleMenu();
                    setServicesOpen(false);
                  }}
                  className="hover:text-gray-300 transition"
                >
                  Air Conditional
                </Link>
                <Link
                  href="#fire-extinguisher"
                  onClick={() => {
                    toggleMenu();
                    setServicesOpen(false);
                  }}
                  className="hover:text-gray-300 transition"
                >
                  Fire Extinguisher
                </Link>
                <Link
                  href="#user"
                  onClick={() => {
                    toggleMenu();
                    setServicesOpen(false);
                  }}
                  className="hover:text-gray-300 transition"
                >
                  User
                </Link>
              </div>
            )}
          </div>

          <Link
            href="#contact"
            onClick={toggleMenu}
            className="flex items-center gap-3 hover:text-gray-300 transition"
          >
            <Phone className="w-5 h-5" /> Contact
          </Link>
        </nav>
      </div>

      {/* Transparent click area to close menu (no dark overlay) */}
      {menuOpen && (
        <div onClick={toggleMenu} className="fixed inset-0 z-[2500] lg:hidden" />
      )}
    </header>
  );
}
