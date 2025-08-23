import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  // Animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const socialIcons = [
    { href: "#", icon: <FaFacebookF size={18} />, name: "Facebook" },
    { href: "#", icon: <FaXTwitter size={18} />, name: "Twitter" },
    { href: "#", icon: <FaLinkedinIn size={18} />, name: "LinkedIn" },
    { href: "#", icon: <FaGithub size={18} />, name: "GitHub" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#121212] font-sans text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Top Section: Call to Action and Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-16">
            <motion.div className="text-center md:text-left" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
                Let's Build The <span className="text-gradient">Future</span>
              </h2>
              <p className="text-gray-400">
                Ready to start a project? Let's create something amazing together.
              </p>
            </motion.div>
            
            <motion.div className="flex space-x-5" variants={itemVariants}>
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Bottom Section: Copyright */}
          <motion.div 
            className="border-t border-white/10 pt-8 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-500 text-sm font-mono">
              © {new Date().getFullYear()} Goutam.dev | All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/50 group"
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 360 }}
      >
        <ArrowUp size={22} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      </motion.button>
    </>
  );
};

export default Footer;