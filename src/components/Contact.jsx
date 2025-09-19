import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

// Contact Info Data
const contactInfo = [
  {
    icon: <Phone size={24} />,
    title: "Phone Number",
    detail: "+91-7987057932",
  },
  {
    icon: <Mail size={24} />,
    title: "Email Address",
    detail: "ashishfsdroot@gmail.com",
  },
  {
    icon: <MapPin size={24} />,
    title: "Address",
    detail: "Indore, India",
  },
];

// Reusable component for each contact info card
const ContactInfoCard = ({ icon, title, detail }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    }}
    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10"
  >
    <div className="text-purple-400">{icon}</div>
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-white font-semibold">{detail}</p>
    </div>
  </motion.div>
);

export default function Contact({ id }) {
  // Main container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Variants for individual form items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id={id} className="bg-[#121212] font-sans text-white py-5 md:py-10">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="font-mono text-purple-400 mb-2">[ Get in Touch ]</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Contact <span className="text-gradient">Me</span>
          </h2>
        </motion.div>
        
        {/* Main Content Card */}
        <div className="bg-white/5 p-6 sm:p-8 lg:p-12 rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side: Contact Info */}
            <motion.div
              className="flex flex-col gap-6"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.h3 className="text-2xl font-bold mb-2" variants={itemVariants}>
                Let's Talk
              </motion.h3>
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} {...info} />
              ))}
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <form>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 p-4 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/5 p-4 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  />
                </motion.div>
                <motion.input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-white/5 p-4 mt-6 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  variants={itemVariants}
                />
                <motion.textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-white/5 p-4 mt-6 rounded-lg border border-white/10 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  variants={itemVariants}
                ></motion.textarea>
                <motion.button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center text-white font-semibold px-8 py-4 rounded-lg group animate-gradient-border"
                  variants={itemVariants}
                >
                  <span className="transition-all duration-300 group-hover:tracking-wider flex items-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}