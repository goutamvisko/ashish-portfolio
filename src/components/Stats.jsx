import React, { useEffect, useRef } from "react";
import { FaAward, FaHeart, FaProjectDiagram } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Reusable component for the animated number
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  
  // Spring for a smoother animation
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};


// Main Stats Component
export default function Stats({ id }) {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-green-400 text-3xl" />,
      value: 12,
      label: "Year Experience",
    },
    {
      icon: <MdComputer className="text-green-400 text-3xl" />,
      value: 250,
      label: "Projects Completed",
    },
    {
      icon: <FaHeart className="text-green-400 text-3xl" />,
      value: 680,
      label: "Satisfied Clients",
    },
    {
      icon: <FaAward className="text-green-400 text-3xl" />,
      value: 18,
      label: "Awards Winner",
    },
  ];

  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, duration: 0.5 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="w-full bg-[#1e1e1e] px-6 md:px-12 py-6 font-mono" id={id}>
      {/* Animated gradient border wrapper */}
      <div className="animate-gradient-border max-w-7xl w-full mx-auto rounded-2xl p-[2px]">
        
        {/* Inner dark box */}
        <div className="relative rounded-2xl bg-[#3c3c43]">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] rounded-2xl opacity-50"></div>

          {/* Animated Stats Grid */}
          <motion.div 
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-700/50"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center py-10 px-6"
                variants={itemVariants}
              >
                <div className="mb-4">{item.icon}</div>
                <h2 className="text-4xl font-bold text-white">
                  <AnimatedNumber value={item.value} />+
                </h2>
                <p className="mt-2 text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}