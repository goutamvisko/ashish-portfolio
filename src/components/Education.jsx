import { motion } from "framer-motion";
import { BookOpen, FlaskConical } from "lucide-react";

export default function Education({ id }) {
  // Animation variants for the main container to stagger the two cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.5 },
    },
  };

  // Variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // Stagger animation for the list items inside each card
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const educationData = [
    { year: "2020-2024", institution: "MIT", degree: "Bachelor’s Degree in Computer Science" },
    { year: "2018-2019", institution: "Harvard University", degree: "Certification in React & Node.js" },
    { year: "2015-2016", institution: "Stanford University", degree: "Certification in Full Stack Web Development" },
  ];

  const researchData = [
    { year: "2023-2024", title: "Advanced Data Analytics with Big Data Tools", description: "Utilized big data tools for advanced analytics and insights." },
    { year: "2021-2023", title: "Cloud-Native Application Architectures", description: "Studied best practices for designing cloud-native applications." },
    { year: "2019-2020", title: "AI-Driven User Experience Personalization", description: "Leveraged AI to personalize user experiences based on behavior." },
  ];

  return (
    <section id={id} className="bg-[#1e1e1e] py-6 px-6 md:px-12 flex justify-center font-mono">
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 text-sm font-medium mb-2">• My Journey </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education & Research</h2>
        </motion.div>

        {/* Grid for the two cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Education Card */}
          <motion.div variants={cardVariants}>
            <div className="animate-gradient-border rounded-2xl p-[2px] h-full">
              <div className="bg-[#2a2a30] rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-7 h-7 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <motion.ul className="space-y-6" variants={listVariants}>
                  {educationData.map((item, index) => (
                    <motion.li key={index} className="relative pl-8" variants={listItemVariants}>
                      <div className="absolute left-0 top-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#2a2a30]"></div>
                      <div className="absolute left-[4px] top-5 h-[calc(100%_-_10px)] w-0.5 bg-gray-700/50 last:hidden"></div>
                      <p className="text-xs text-gray-400 mb-1">{item.year}</p>
                      <p className="font-semibold text-green-400">{item.institution}</p>
                      <p className="text-sm text-gray-300">{item.degree}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Research Card */}
          <motion.div variants={cardVariants}>
            <div className="animate-gradient-border rounded-2xl p-[2px] h-full">
              <div className="bg-[#2a2a30] rounded-2xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <FlaskConical className="w-7 h-7 text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Research</h3>
                </div>
                <motion.ul className="space-y-6" variants={listVariants}>
                  {researchData.map((item, index) => (
                    <motion.li key={index} className="relative pl-8" variants={listItemVariants}>
                      <div className="absolute left-0 top-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#2a2a30]"></div>
                      <div className="absolute left-[4px] top-5 h-[calc(100%_-_10px)] w-0.5 bg-gray-700/50 last:hidden"></div>
                      <p className="text-xs text-gray-400 mb-1">{item.year}</p>
                      <p className="font-semibold text-green-400">{item.title}</p>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
