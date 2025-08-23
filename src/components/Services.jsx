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

// Service card data
const servicesData = [
  {
    icon: <LayoutTemplate className="w-8 h-8 text-gray-400" />,
    title: 'Web & App Development',
    description: 'Crafting visually appealing and user-friendly interfaces using ',
    keywords: ['HTML', 'CSS', 'JavaScript'],
    details: ', and modern frameworks like React and Angular.'
  },
  {
    icon: <Database className="w-8 h-8 text-gray-400" />,
    title: 'Database Management',
    description: 'Designing and managing databases with SQL and NoSQL technologies such as ',
    keywords: ['MySQL', 'PostgreSQL', 'MongoDB'],
    details: '.'
  },
  {
    icon: <CloudCog className="w-8 h-8 text-gray-400" />,
    title: 'API Development',
    description: 'Creating and integrating RESTful ',
    keywords: ['APIs'],
    details: ' to enable smooth communication between front-end and back-end systems.'
  },
  {
    icon: <GaugeCircle className="w-8 h-8 text-gray-400" />,
    title: 'Performance Optimization',
    description: 'Improving the speed and performance of web applications to provide a better user experience. Work with ',
    keywords: ['Nodejs', 'Express'],
    details: '.'
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-gray-400" />,
    title: 'E-commerce Solutions',
    description: 'Developing scalable and secure payment solutions for ',
    keywords: ['e-commerce platforms'],
    details: ' tailored to your business needs.'
  },
  {
    icon: <Bot className="w-8 h-8 text-gray-400" />,
    title: 'Integrating AI',
    description: 'Boost your applications with AI for improved efficiency, automation, and enhanced user experience.'
  }
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function Services({ id }) {
  return (
    <section id={id} className="bg-[#1e1e1e] py-6 px-6 md:px-12 flex justify-center font-mono">
      {/* Wrapper with animated gradient border */}
      <div className="animate-gradient-border w-full max-w-7xl p-[2px] rounded-2xl">
        
        {/* Inner container with the main background color */}
        <div className="bg-[#2a2a30] rounded-2xl p-8 md:p-12">
          
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-green-500 mb-2 text-sm">• Cooperation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Designing solutions
              <span className="text-gray-500"> customized</span>
              <br />
              to meet your requirements
            </h2>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#3c3c43]/60 p-6 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-gray-600 hover:-translate-y-1"
                variants={cardVariants}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                  {service.keywords && service.keywords.map((word, i) => (
                    <React.Fragment key={i}>
                      <span className="text-pink-400">{word}</span>
                      {i < service.keywords.length - 1 && ', '}
                    </React.Fragment>
                  ))}
                  {service.details}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Text */}
           <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400">
              Excited to take on <span className="text-white">new projects</span> and collaborate.
              <br />
              Let's chat about your ideas. <a href="#" className="text-green-400 hover:underline">Reach out!</a>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}