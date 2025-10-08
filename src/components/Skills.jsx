import React from "react";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { Code, Server, Database, Settings, TestTube2 } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiCodeigniter,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiJenkins,
  SiGithub,
  SiGitlab,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; // ✅ Correct import for VS Code icon

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { icon: <SiHtml5 size={28} />, name: "HTML" },
      { icon: <SiCss3 size={28} />, name: "CSS" },
      { icon: <SiJavascript size={28} />, name: "JavaScript" },
      { icon: <SiTypescript size={28} />, name: "TypeScript" },
      { icon: <SiReact size={28} />, name: "React.js" },
      { icon: <SiRedux size={28} />, name: "Redux" },
      { icon: <SiBootstrap size={28} />, name: "Bootstrap" },
      { icon: <SiTailwindcss size={28} />, name: "TailwindCSS" },
    ],
  },
  {
    title: "Backend Integration",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { icon: <SiNodedotjs size={28} />, name: "Node.js" },
      { icon: <SiPhp size={28} />, name: "PHP" },
      { icon: <SiCodeigniter size={28} />, name: "CodeIgniter" },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { icon: <SiMysql size={28} />, name: "MySQL" },
      { icon: <SiMongodb size={28} />, name: "MongoDB" },
      { icon: <SiFirebase size={28} />, name: "Firebase" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { icon: <FaAws size={28} />, name: "AWS" },
      { icon: <SiDocker size={28} />, name: "Docker" },
      { icon: <SiGithub size={28} />, name: "GitHub Actions" },
      { icon: <SiGitlab size={28} />, name: "GitLab CI/CD" },
      { icon: <SiJenkins size={28} />, name: "Jenkins" },
    ],
  },
  {
    title: "Testing & Optimization",
    icon: <TestTube2 className="w-6 h-6" />,
    skills: [
      { icon: <SiJavascript size={28} />, name: "Unit Testing" },
      { icon: <SiNodedotjs size={28} />, name: "Performance Tuning" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { icon: <SiPostman size={28} />, name: "Postman" },
      { icon: <VscVscode size={28} />, name: "VS Code" }, // ✅ fixed here
      { icon: <SiDocker size={28} />, name: "Shiprocket" },
    ],
  },
];

const SkillCategory = ({ title, icon, skills }) => {
  const listVariants = {
    visible: { transition: { staggerChildren: 0.05 } },
    hidden: {},
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-6 bg-white/5 rounded-2xl border border-white/10"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-purple-400">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 gap-4"
        variants={listVariants}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center p-2"
          >
            <div className="text-gray-300 transition-colors hover:text-white">
              {skill.icon}
            </div>
            <p className="text-xs mt-2 text-gray-400">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default function Skills({ id }) {
  // Main container variants for staggering the category pods
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

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
          <p className="font-mono text-purple-400 mb-2">[ My Tech Arsenal ]</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
