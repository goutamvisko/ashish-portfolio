import React from "react";
import { motion } from "framer-motion";
import {  FaDownload } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiApachecassandra,
  SiJavascript,
  SiVuedotjs,
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiNodedotjs,
  SiBootstrap,
  SiRedux ,
  SiTypescript,
  SiPhp ,
  SiCodeigniter,
  SiFirebase , 
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import img from "../assets/img/ashish.jpeg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: 0.5,
      },
    },
    floating: {
      y: ["-8px", "8px"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
const techIcons = [
  // Frontend
  { icon: <SiTailwindcss size={28} />, name: "TailwindCSS" },
  { icon: <SiBootstrap size={28} />, name: "Bootstrap" },
  { icon: <SiReact size={28} />, name: "React.js" },
  { icon: <SiRedux size={28} />, name: "Redux" },
  { icon: <SiVuedotjs size={28} />, name: "Vue.js" },
  { icon: <SiNextdotjs size={28} />, name: "Next.js" },
  { icon: <SiJavascript size={28} />, name: "JavaScript" },
  { icon: <SiTypescript size={28} />, name: "TypeScript" },

  // Backend
  { icon: <SiNodedotjs size={28} />, name: "Node.js" },
  { icon: <SiPhp size={28} />, name: "PHP" },
  { icon: <SiCodeigniter size={28} />, name: "CodeIgniter" },

  // Databases
  { icon: <SiMysql size={28} />, name: "MySQL" },
  { icon: <SiPostgresql size={28} />, name: "PostgreSQL" },
  { icon: <SiMongodb size={28} />, name: "MongoDB" },
  { icon: <SiFirebase size={28} />, name: "Firebase" },
  { icon: <SiApachecassandra size={28} />, name: "Cassandra" },
  { icon: <SiRedis size={28} />, name: "Redis" },

  // DevOps & Tools
  { icon: <SiGit size={28} />, name: "Git" },
  { icon: <SiGithub size={28} />, name: "GitHub" },
  { icon: <SiGitlab size={28} />, name: "GitLab" },
  { icon: <SiJenkins size={28} />, name: "Jenkins" },
  { icon: <SiDocker size={28} />, name: "Docker" },
  { icon: <SiKubernetes size={28} />, name: "Kubernetes" },
  { icon: <SiGooglecloud size={28} />, name: "GCP" },
];


  return (
    <motion.section
      className="bg-[#121212] font-sans text-white min-h-[90vh] flex items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Clip Path for Blob Shape */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
            <path d="M0.776,0.852 C0.721,0.963,0.598,1,0.5,1 C0.402,1,0.279,0.963,0.224,0.852 C0.14,0.681,0.02,0.598,0.005,0.5 C-0.01,0.402,0.061,0.24,0.148,0.148 C0.235,0.056,0.402,0,0.5,0 C0.598,0,0.765,0.056,0.852,0.148 C0.939,0.24,1.01,0.402,0.995,0.5 C0.98,0.598,0.86,0.681,0.776,0.852 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-35 md:py-30 lg:py-35">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.p
              className="mb-3 text-gray-400 font-mono text-sm sm:text-base"
              variants={itemVariants}
            >
              <span className="text-purple-400">&lt;p&gt;</span> Hey, I'm Ashish{" "}
              <span className="text-purple-400">&lt;/p&gt;</span>
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
              variants={itemVariants}
            >
              Sr. Full Stack
              <span className="text-gradient"> Developer</span>
            </motion.h1>

            <motion.p
              className="mb-8 text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg"
              variants={itemVariants}
            >
             Innovative Full Stack Developer with a strong foundation in modern JavaScript ecosystems, 
             backend frameworks, and cloud deployment. I specialize in transforming business requirements into scalable, 
             high-performance applications that deliver real impact. With proven experience across frontend, backend, and DevOps, I thrive on solving complex problems,
            streamlining workflows, and building digital products that combine functionality, performance, and user experience.
            </motion.p>

            <motion.div variants={itemVariants}>
              <a
                href="#download-cv"
                className="inline-flex items-center text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 rounded-lg group animate-gradient-border text-sm sm:text-base"
              >
                <FaDownload className="mr-3 transition-transform group-hover:-translate-y-0.5" />
                <span>[ Download my CV ]</span>
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="lg:col-span-2 w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-md"
            variants={imageVariants}
            animate="floating"
          >
            <motion.div
              className="relative w-full h-64 sm:h-80 lg:h-96"
              style={{ clipPath: "url(#blobClip)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={img}
                alt="Goutam - Full Stack Developer"
                className="w-full h-full "
              />
              <div className="absolute inset-0 bg-indigo-500/20 mix-blend-color"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Slider */}
        <motion.div
          className="mt-16 sm:mt-20 lg:mt-28 flex justify-center"
          variants={itemVariants}
        >
          <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl">
            <motion.p
              className="font-mono text-purple-400 mb-3 text-center"
              variants={itemVariants}
            >
              [ My Tech Stack ]
            </motion.p>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 3, spaceBetween: 12 },
                480: { slidesPerView: 4, spaceBetween: 16 },
                640: { slidesPerView: 5, spaceBetween: 20 },
                768: { slidesPerView: 6, spaceBetween: 20 },
                1024: { slidesPerView: 7, spaceBetween: 24 },
              }}
              className="opacity-90"
            >
              {techIcons.map((tech, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="flex items-center justify-center p-4 rounded-2xl bg-white/5 w-20 sm:w-24 md:w-28 lg:w-32"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
