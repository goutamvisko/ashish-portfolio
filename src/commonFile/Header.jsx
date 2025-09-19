import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import img from "../assets/img/ashish.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 'Home' is the default active link
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Resume", href: "#portfolio" },
    { name: "AboutMe", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // The main container is sticky to keep the navbar at the top
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 p-4 font-mono"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Centered content wrapper */}
      <div className="max-w-7xl mx-auto">
        {/* The main navbar bar with background and styling */}
        <div className="relative flex items-center justify-between bg-gradient-to-r from-[#2D2A32] to-[#392F44] text-gray-300 rounded-full p-2 border border-white/10 shadow-lg">
          {/* Left Section: Avatar + Logo */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <a href="#home" onClick={() => setActiveLink("Home")}>
              <img
                src={img}
                alt="Avatar"
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
            </a>

            {/* Text + Icon */}
            <div className="flex items-center gap-2">
              <FaCode className="text-purple-400 text-2xl" />
              <span className="text-lg sm:text-xl font-bold text-white">
                Ashish.dev
              </span>
            </div>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative px-3 py-1 text-sm transition-colors hover:text-white"
              >
                {/* The animated dot appears only for the active link */}
                {activeLink === link.name && (
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-white"
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    ●&nbsp;
                  </motion.span>
                )}
                <span className="pl-3">{`</${link.name}>`}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 bg-white/5 rounded-full focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-3 bg-[#2D2A32]/80 backdrop-blur-lg rounded-2xl p-4 border border-white/10"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMenuOpen(false); // Close menu on link click
                    }}
                    className={`px-4 py-2 rounded-lg text-center ${
                      activeLink === link.name
                        ? "bg-white/10 text-white"
                        : "text-gray-400"
                    }`}
                    variants={linkVariants}
                  >
                    {`</${link.name}>`}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
