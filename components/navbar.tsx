"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Info, Briefcase, Star, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const services = [
    { name: "Air Conditioner", href: "#air-conditioner" },
    { name: "Fire Extinguisher", href: "#fire-extinguisher" },
    { name: "User", href: "#user" },
  ];

  return (
    <header className="sticky top-0 z-[2000] bg-gradient-to-r from-[#5200f5] to-[#7f00ff] text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-12 py-2 lg:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            width={200}
            height={200}
            className="w-8 lg:w-10 h-auto transition-transform group-hover:scale-110"
            src="/images/logo.png"
            alt="logo"
          />
          <p className="text-base lg:text-2xl font-[lato] font-extrabold tracking-tight group-hover:text-gray-200 transition-colors">
            Pacific Safety Solution
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          <Link href="#about" className="relative hover:text-gray-200 transition-colors group">
            About
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#products" className="relative hover:text-gray-200 transition-colors group">
            Products
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="relative group">
            <button
              onClick={toggleServices}
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-[#5200f5] text-white rounded-lg shadow-xl transition-all duration-300 transform ${
                servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block px-4 py-2 text-sm hover:bg-[#7f00ff] rounded-lg transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="#contact" className="relative hover:text-gray-200 transition-colors group">
            Contact
            <span className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none p-2 rounded-lg hover:bg-[#7f00ff] transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-8 h-6" />
        </button>
      </div>

      {/* Side Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-[#5200f5] to-[#7f00ff] text-white z-[3000] transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/20">
          <p className="text-xl font-extrabold tracking-wide">Menu</p>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-[#7f00ff] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 px-6 py-4 text-lg font-medium">
          <Link
            href="#about"
            onClick={toggleMenu}
            className="flex items-center gap-3 hover:text-gray-200 hover:bg-[#7f00ff] rounded-lg px-3 py-2 transition-all"
          >
            <Info className="w-5 h-5" /> About
          </Link>
          <Link
            href="#products"
            onClick={toggleMenu}
            className="flex items-center gap-3 hover:text-gray-200 hover:bg-[#7f00ff] rounded-lg px-3 py-2 transition-all"
          >
            <Briefcase className="w-5 h-5" /> Products
          </Link>
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center gap-3 w-full text-left hover:text-gray-200 hover:bg-[#7f00ff] rounded-lg px-3 py-2 transition-all"
            >
              <Star className="w-5 h-5" /> Services
              <ChevronDown
                className={`w-4 h-4 ml-auto transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`flex flex-col pl-8 mt-2 space-y-2 transition-all duration-300 ${
                servicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={toggleMenu}
                  className="text-sm hover:text-gray-200 hover:bg-[#7f00ff] rounded-lg px-3 py-2 transition-all"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="#contact"
            onClick={toggleMenu}
            className="flex items-center gap-3 hover:text-gray-200 hover:bg-[#7f00ff] rounded-lg px-3 py-2 transition-all"
          >
            <Phone className="w-5 h-5" /> Contact
          </Link>
        </nav>
      </div>

      {/* Transparent click area to close menu */}
      {menuOpen && (
        <div
          onClick={toggleទ
          toggleMenu}
          className="fixed inset-0 z-[2500] bg-black/30 lg:hidden transition-opacity duration-300"
        />
      )}
    </header>
  );
  }
