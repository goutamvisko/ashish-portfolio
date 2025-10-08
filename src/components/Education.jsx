import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, FlaskConical } from "lucide-react";
import React, { useRef } from "react";

const timelineData = [ 
  {
    type: "education",
    title: "RGPV University",
    description: "B.Tech in Computer Science Engineering",
  },
  {
    type: "education",
    title: "Certification in React & Node.js",
    description: "Focused on building scalable web applications with modern JavaScript frameworks.",
  },
  {
    type: "education",
    title: "Certification in Full Stack Web Development",
    description: "Hands-on training in frontend, backend, and database technologies.",
  },
  {
    type: "research",
    title: "Full-Stack Application Architecture",
    description: "Explored scalable designs for MERN stack applications, API optimization, and microservices.",
  },
  {
    type: "research",
    title: "DevOps & Cloud Automation",
    description: "Researched CI/CD pipelines, containerization with Docker, and cloud-native deployment strategies.",
  },
];



const TimelineItem = ({ item }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={itemRef}
      style={{ scale, opacity }}
      className="flex justify-center w-full"
    >
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white/5 rounded-2xl border border-white/10"
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="text-purple-400">
            {item.type === "education" ? <BookOpen /> : <FlaskConical />}
          </span>
          <div className="flex-1">
            <h3 className="font-bold text-white">{item.title}</h3>
          </div>
        </div>
        <p className="text-sm text-gray-300">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default function Education({ id }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id={id}
      className="bg-[#121212] font-sans text-white py-5 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="font-mono text-purple-400 mb-2">[ My Journey ]</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Education & <span className="text-gradient">Research</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Central animated line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12 relative z-10">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
