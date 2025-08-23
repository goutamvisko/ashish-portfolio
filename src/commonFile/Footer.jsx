import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { LuArrowUp } from 'react-icons/lu';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialIcons = [
    { href: "#", icon: <FaFacebookF size={18} /> },
    { href: "#", icon: <FaXTwitter size={18} /> },
    { href: "#", icon: <FaLinkedinIn size={18} /> },
    { href: "#", icon: <FaGithub size={18} /> },
  ];

  const navLinks = ["About me", "Services", "Portfolio", "Contact"];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1e1e1e] text-white py-10 px-6 md:px-12 font-mono">
      {/* Animated Gradient Border (Top Only) */}
      <div className="absolute top-0 mt-5 left-0 w-full h-1 animate-gradient-border"></div>

      <motion.div 
        className="max-w-7xl mx-auto flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        
        {/* Logo */}
        <motion.div className="flex items-center mb-6" variants={itemVariants}>
          <FaCode className="text-green-400 text-4xl mr-2" />
          <span className="text-2xl font-bold">Goutam.dev</span>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div className="flex space-x-6 mb-8" variants={itemVariants}>
          {socialIcons.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              className="text-gray-400 hover:text-green-400 hover:scale-110 transition-all duration-300"
              aria-label={social.icon.type.name}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Navigation Links */}
        <motion.nav 
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 font-mono text-gray-400"
          variants={itemVariants}
        >
          {navLinks.map((link) => (
             <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
          ))}
        </motion.nav>
        
        {/* Copyright */}
        <motion.p className="text-gray-500 text-sm" variants={itemVariants}>
          © {new Date().getFullYear()} Goutam.dev. All Rights Reserved.
        </motion.p>
      </motion.div>

      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6"
      >
        <button 
          onClick={scrollToTop}
          className="bg-[#2a2a30] border border-gray-700/50 hover:border-green-400/50 text-gray-300 hover:text-green-400 p-3 rounded-lg shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <LuArrowUp size={22} />
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;