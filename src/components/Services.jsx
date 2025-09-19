import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutTemplate,
  Database,
  CloudCog,
  GaugeCircle,
  ShoppingCart,
  Bot
} from 'lucide-react';

// Service data with updated, concise descriptions
const servicesData = [
  {
    icon: <LayoutTemplate size={32} />,
    title: 'Web & App Development',
    description: 'Building responsive, high-performance applications with modern frameworks like React and Next.js.',
  },
  {
    icon: <Database size={32} />,
    title: 'Database Management',
    description: 'Designing and managing robust SQL & NoSQL databases for optimal data storage and retrieval.',
  },
  {
    icon: <CloudCog size={32} />,
    title: 'API Development',
    description: 'Creating secure, scalable, and well-documented RESTful APIs to power your applications.',
  },
  {
    icon: <GaugeCircle size={32} />,
    title: 'Performance Optimization',
    description: 'Improving application speed and efficiency to deliver a seamless and fast user experience.',
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'E-commerce Solutions',
    description: 'Developing end-to-end e-commerce platforms with secure payment gateway integrations.',
  },
  {
    icon: <Bot size={32} />,
    title: 'AI Integration',
    description: 'Leveraging AI and machine learning to build smarter, automated, and more intuitive applications.',
  }
];

// Reusable ServiceCard component with interactive glow effect
const ServiceCard = ({ icon, title, description, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
    >
      {/* The glowing effect div */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          maskImage: 'radial-gradient(400px at 50% 50%, white, transparent)',
          WebkitMaskImage: 'radial-gradient(400px at 50% 50%, white, transparent)',
        }}
      ></div>
      
      <div className="relative z-10">
        <div className="text-purple-400 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Services({ id }) {
  // Animation variants for the main section and cards
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id={id} className="bg-[#121212] font-sans text-white py-5 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="font-mono text-purple-400 mb-2">[ My Expertise ]</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Services I <span className="text-gradient">Provide</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variants={cardVariants}
            />
          ))}
        </motion.div>

        {/* Footer Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg mb-6">
            Have a project in mind? Let's turn your idea into reality.
          </p>
          <a
            href="#contact"
            className="inline-block text-white font-semibold px-8 py-4 rounded-lg group animate-gradient-border"
          >
            <span className="transition-all duration-300 group-hover:tracking-wider">
              Let's Talk →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}