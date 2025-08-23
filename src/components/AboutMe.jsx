import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

// Placeholder for a profile image. Replace with your actual image URL.
const profileImageUrl = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80";

// A reusable counter component for the animated stats
const StatCounter = ({ value, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold text-gradient">
        {inView ? <CountUp end={value} duration={3} /> : "0"}+
      </h3>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
};

export default function About({ id }) {
  // Animation variants for the main container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Variants for text and other elements sliding in
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  // Variants for the image with a floating animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: 0.5,
      },
    },
    floating: {
      y: ["-8px", "8px"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id={id} className="bg-[#121212] font-sans text-white py-20 md:py-28">
      {/* SVG for the blob clip-path definition (same as in Hero section) */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
            <path d="M0.776,0.852 C0.721,0.963,0.598,1,0.5,1 C0.402,1,0.279,0.963,0.224,0.852 C0.14,0.681,0.02,0.598,0.005,0.5 C-0.01,0.402,0.061,0.24,0.148,0.148 C0.235,0.056,0.402,0,0.5,0 C0.598,0,0.765,0.056,0.852,0.148 C0.939,0.24,1.01,0.402,0.995,0.5 C0.98,0.598,0.86,0.681,0.776,0.852 Z" />
          </clipPath>
        </defs>
      </svg>
      
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <motion.div
            className="w-full max-w-sm mx-auto lg:max-w-none"
            variants={imageVariants}
            animate="floating"
          >
            <motion.div
              className="relative w-full h-80 sm:h-96"
              style={{ clipPath: 'url(#blobClip)' }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profileImageUrl}
                alt="About Me"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-500/20 mix-blend-color"></div>
            </motion.div>
          </motion.div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left">
            <motion.p className="font-mono text-purple-400 mb-2" variants={itemVariants}>
              [ Introduction ]
            </motion.p>
            <motion.h2 className="text-4xl sm:text-5xl font-extrabold mb-6" variants={itemVariants}>
              Crafting Digital <span className="text-gradient">Experiences</span>
            </motion.h2>
            <motion.p className="text-gray-400 text-lg leading-relaxed mb-8" variants={itemVariants}>
              I'm a passionate Python & AI/ML Developer with a knack for creating seamless and engaging user interfaces. With a strong foundation in modern web technologies, I transform complex ideas into beautiful, functional, and user-centric digital products.
            </motion.p>
            
            {/* Animated Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-8"
              variants={itemVariants}
            >
              <StatCounter value={4} label="Years Experience" />
              <StatCounter value={25} label="Projects Completed" />
              <StatCounter value={12} label="Happy Clients" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}