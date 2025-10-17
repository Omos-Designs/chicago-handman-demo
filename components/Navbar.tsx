"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl">🔨</span>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Chicago Handyman
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
            </a>
            <a
              href="#projects"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </a>
            <a
              href="tel:+13125551234"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              📞 (312) 555-1234
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full transform transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full transform transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:+13125551234"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                📞 (312) 555-1234
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
