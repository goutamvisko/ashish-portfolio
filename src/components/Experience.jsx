import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle, FaAmazon, FaTwitter, FaPaypal } from "react-icons/fa";

// Data for different job experiences
const experienceData = [
  {
    icon: <FaGoogle className="text-2xl text-red-500" />,
    company: "Google",
    duration: "2018 – Present",
    role: "Senior Software Engineer",
    responsibilities: [
      "Led development of scalable web applications, improving performance and user experience for millions of users.",
      "Implemented machine learning algorithms to enhance search functionality and content relevance.",
      "Collaborated with cross-functional teams to integrate new features seamlessly using Agile methodologies.",
    ],
    techStack: ["Python", "TensorFlow", "Angular", "Kubernetes", "GCP"],
  },
  {
    icon: <FaTwitter className="text-2xl text-sky-400" />,
    company: "Twitter (X)",
    duration: "2015 – 2018",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed and maintained real-time data streaming features for the main application feed.",
      "Built and scaled back-end services to handle high-traffic loads and ensure low latency.",
      "Contributed to the front-end redesign using React, improving component reusability and performance.",
    ],
    techStack: ["React", "Node.js", "Scala", "Kafka", "AWS"],
  },
  {
    icon: <FaAmazon className="text-2xl text-yellow-500" />,
    company: "Amazon",
    duration: "2012 – 2015",
    role: "Back-End Engineer",
    responsibilities: [
        "Designed and implemented microservices for the AWS S3 team, focusing on durability and availability.",
        "Optimized database queries and caching strategies, reducing API response times by 30%.",
        "Wrote extensive unit and integration tests to maintain high code quality and system reliability.",
    ],
    techStack: ["Java", "Spring Boot", "DynamoDB", "AWS Lambda", "EC2"],
  },
  {
    icon: <FaPaypal className="text-2xl text-blue-400" />,
    company: "PayPal",
    duration: "2010 – 2012",
    role: "Junior Web Developer",
    responsibilities: [
      "Assisted in developing front-end components for the main payment processing application.",
      "Fixed bugs and implemented minor features for internal financial tools.",
      "Learned to work in a large-scale codebase and participated in code reviews.",
    ],
    techStack: ["JavaScript", "jQuery", "HTML/CSS", "Java", "SQL"],
  },
];

export default function Experience({ id }) {
  // State to track the currently selected experience
  const [selectedExperience, setSelectedExperience] = useState(experienceData[0]);

  return (
    <section id={id} className="bg-[#1e1e1e] py-6 px-6 md:px-12 flex justify-center font-mono">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Animated gradient border wrapper */}
          <div className="animate-gradient-border p-[2px] rounded-2xl">
            <div className="bg-[#2a2a30] rounded-2xl p-8 md:p-12">
              
              {/* Header */}
              <div className="text-center md:text-left mb-10">
                <p className="text-green-400 font-medium mb-2">• My Career Path</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                  Work Experience
                </h2>
              </div>
              
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Side – Companies List */}
                <motion.div
                  className="flex flex-col space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {experienceData.map((exp) => (
                    <button
                      key={exp.company}
                      onClick={() => setSelectedExperience(exp)}
                      className={`flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 w-full
                        ${selectedExperience.company === exp.company
                          ? 'bg-[#3c3c43] border border-gray-600 scale-105 shadow-lg'
                          : 'bg-[#3c3c43]/60 border border-transparent hover:bg-[#3c3c43]'
                        }`}
                    >
                      {exp.icon}
                      <div>
                        <h4 className="text-white font-semibold">{exp.company}</h4>
                        <p className="text-sm text-gray-400">{exp.duration}</p>
                      </div>
                    </button>
                  ))}
                </motion.div>

                {/* Right Side – Role & Details */}
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedExperience.company}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#3c3c43]/60 p-6 rounded-lg border border-gray-700/50"
                    >
                      <h3 className="text-green-400 text-xl font-semibold mb-3">
                        {selectedExperience.role}
                      </h3>
                      <ul className="space-y-3 text-gray-300 text-sm leading-relaxed mb-6">
                        {selectedExperience.responsibilities.map((item, i) => (
                          <li key={i} className="flex">
                            <span className="text-green-400 mr-2">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {selectedExperience.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md border border-gray-600/80 bg-[#2a2a30]/50 text-gray-300 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}