import React from "react";
import { motion } from "framer-motion";

export default function About({ id }) {
  return (
    <section id={id} className="bg-[#1e1e1e] py-6 px-6 md:px-12 flex justify-center font-mono">
      {/* Wrapper with animated gradient border */}
      <div className="animate-gradient-border w-full max-w-7xl p-[2px] rounded-2xl">
        
        {/* Inner container with the main background color */}
        <div className="bg-[#3c3c43] rounded-2xl p-8 md:p-10">
          
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col md:flex-row items-center text-center md:text-left gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            
            {/* Profile Image with its own animated border */}
            <motion.div
              className="w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden animate-gradient-border p-1 flex-shrink-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="h-full w-full bg-[#3c3c43] rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=2070&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Text Info */}
            <motion.div
              className="flex-1 space-y-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-white">
                Hello, I’m Goutam!
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building modern web apps using React,
                TailwindCSS, and other cutting-edge technologies. I enjoy
                turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I’m not coding, I love exploring design trends,
                contributing to open-source projects, and learning new
                technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}