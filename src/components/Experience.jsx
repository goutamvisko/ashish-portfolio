import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle, FaAmazon, FaTwitter, FaPaypal } from "react-icons/fa";

// Experience data remains the same, but we can style icons directly
const experienceData = [
  {
    icon: <FaGoogle />,
    company: "Google",
    duration: "2018 – Present",
    role: "Senior Software Engineer",
    responsibilities: [
      "Led development of scalable web applications, improving performance for millions of users.",
      "Implemented machine learning algorithms to enhance search functionality.",
      "Collaborated with cross-functional teams using Agile methodologies.",
    ],
    techStack: ["Python", "TensorFlow", "Angular", "Kubernetes", "GCP"],
  },
  {
    icon: <FaTwitter />,
    company: "Twitter (X)",
    duration: "2015 – 2018",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed and maintained real-time data streaming features for the main feed.",
      "Built and scaled back-end services to handle high-traffic loads.",
      "Contributed to the front-end redesign using React, improving performance.",
    ],
    techStack: ["React", "Node.js", "Scala", "Kafka", "AWS"],
  },
  {
    icon: <FaAmazon />,
    company: "Amazon",
    duration: "2012 – 2015",
    role: "Back-End Engineer",
    responsibilities: [
        "Designed and implemented microservices for the AWS S3 team.",
        "Optimized database queries and caching, reducing API response times by 30%.",
        "Wrote extensive unit and integration tests to maintain high code quality.",
    ],
    techStack: ["Java", "Spring Boot", "DynamoDB", "AWS Lambda"],
  },
  {
    icon: <FaPaypal />,
    company: "PayPal",
    duration: "2010 – 2012",
    role: "Junior Web Developer",
    responsibilities: [
      "Assisted in developing front-end components for the payment processing app.",
      "Fixed bugs and implemented minor features for internal financial tools.",
      "Learned to work in a large-scale codebase and participated in code reviews.",
    ],
    techStack: ["JavaScript", "jQuery", "HTML/CSS", "Java", "SQL"],
  },
];

export default function Experience({ id }) {
  // State to track the currently selected tab (company)
  const [selectedTab, setSelectedTab] = useState(experienceData[0]);

  // Animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variants for staggering the list items
  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id={id} className="bg-[#121212] font-sans text-white py-20 md:py-28">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono text-purple-400 mb-2">[ Career Path ]</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {/* Horizontal Tabs for Company Selection */}
          <nav className="mb-8">
            <ul className="flex justify-center border-b border-white/10">
              {experienceData.map((item) => (
                <li
                  key={item.company}
                  className={`relative cursor-pointer px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition
                    ${item.company === selectedTab.company ? 'text-white' : 'text-gray-400 hover:text-white'}`
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  {item.company}
                  {item.company === selectedTab.company && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 animate-gradient-border"
                      layoutId="underline"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Display for Selected Company */}
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.company}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 p-6 rounded-lg border border-white/10"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                  {selectedTab.role} @ <span className="text-gradient">{selectedTab.company}</span>
                </h3>
                <p className="font-mono text-sm text-gray-400 mb-6">{selectedTab.duration}</p>

                <motion.ul
                  className="space-y-3 text-gray-300 leading-relaxed mb-8"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {selectedTab.responsibilities.map((item, i) => (
                    <motion.li key={i} className="flex items-start" variants={itemVariants}>
                      <span className="text-purple-400 mr-3 mt-1">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {selectedTab.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-gray-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </motion.div>
    </section>
  );
}