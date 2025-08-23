import React, { useState } from "react";
import { FaCode, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMenu, FiX, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const navLinks = [
    { name: "About me", href: "#about", active: false },
    { name: "Services", href: "#services", active: false },
    { name: "Portfolio", href: "#portfolio", active: false },
    { name: "Contact", href: "#contact", active: false },
  ];

  return (
    <div className="bg-[#1e1e1e] font-mono p-4">
      <header className="max-w-7xl mx-auto bg-[#3c3c43] text-gray-300 rounded-xl">
        <div className="flex items-center justify-between p-2">
          {/* Left Section: Hamburger & Logo */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden bg-[#2a2a30] p-3 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <FaCode className="text-green-400 text-3xl" />
              <span className="text-xl font-bold text-white">Goutam.dev</span>
            </a>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 rounded-md transition-colors duration-300 ${
                  link.active
                    ? "bg-gray-700 text-white"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Section: Social Icons & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-5 pr-2">
              <a href="#" aria-label="X/Twitter" className="hover:text-white">
                <FaXTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white">
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                    link.active
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              {/* Social links for mobile */}
              <div className="flex items-center space-x-5 pt-4 justify-center">
                <a href="#" aria-label="X/Twitter" className="hover:text-white">
                  <FaXTwitter size={20} />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-white">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-white">
                  <FaGithub size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
