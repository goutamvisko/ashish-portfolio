import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
// Experience data remains the same, but we can style icons directly
const experienceData = [
  {
    icon: <FaBuilding />,
    company: "Elderberry Tech",
    duration: "Apr 2024 – Jun 2025",
    role: "Senior Full Stack Developer",
    responsibilities: [
      "Led the development of multiple scalable web applications using React.js, PHP, Node.js, and JavaScript.",
      "Designed and optimized RESTful APIs and database schemas in MySQL & MongoDB for performance and scalability.",
      "Integrated payment gateways, authentication systems, and third-party APIs to enhance product functionality.",
      "Mentored junior developers and collaborated with cross-functional teams to ensure on-time delivery.",
    ],
    techStack: ["React.js", "Node.js", "PHP", "MySQL", "MongoDB", "JavaScript"],
  },
  {
    icon: <FaBuilding />,
    company: "Alphawizz Private Limited",
    duration: "Dec 2023 – Mar 2024",
    role: "Backend Developer Intern",
    responsibilities: [
      "Built backend modules using PHP & CodeIgniter, focusing on secure and efficient data flow.",
      "Developed CRUD operations and integrated web apps with MySQL databases.",
      "Collaborated with frontend teams to implement seamless data-driven features.",
    ],
    techStack: ["PHP", "CodeIgniter", "MySQL"],
  },
  {
    icon: <FaBuilding />,
    company: "NCS Pvt Ltd",
    duration: "Jun 2023 – Sep 2023",
    role: "React.js Developer Trainee",
    responsibilities: [
      "Learned and implemented state management (Redux) and component lifecycle methods in real-world projects.",
      "Contributed to debugging and optimization of web applications.",
      "Assisted in migrating legacy code to a modular React.js architecture.",
    ],
    techStack: ["React.js", "Redux", "JavaScript"],
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
    <section id={id} className="bg-[#121212] font-sans text-white py-5 md:py-10">
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