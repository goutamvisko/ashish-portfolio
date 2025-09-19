import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Project data with dummy images
// Project data with real experience
const projects = [
  {
    title: "Anahee – E-commerce Application",
    description:
      "Developed a full-stack e-commerce platform with separate frontend, backend, and admin dashboard. Implemented product catalog, cart, checkout, online payments via PhonePe, and automated shipping integration with Shiprocket. Led a team of 5 developers, guiding architecture and ensuring on-time delivery.",
    technologies: ["React.js", "TypeScript", "Node.js", "MySQL", "PhonePe", "Shiprocket"],
  
    image: "https://placehold.co/800x600/1e1e1e/c084fc?text=Anahee+E-commerce",
  },
  {
    title: "Coffee Station Web App",
    description:
      "Built a role-based web application (Admin, Staff, User) for managing coffee shop orders with real-time order updates using Firebase. Designed with CodeIgniter, MySQL, and custom frontend in JavaScript, HTML, and CSS.",
    technologies: ["CodeIgniter", "MySQL", "Firebase", "JavaScript", "HTML", "CSS"],
    
    image: "https://placehold.co/800x600/1e1e1e/818cf8?text=Coffee+Station",
  },
  {
    title: "Elites Capital – Investment Management Platform",
    description:
      "Developed a full-stack investment management platform with role-based access (Super Admin, Admin, Customer). Features include adding investments, withdrawals, transaction tracking, and advanced admin controls. Integrated CI/CD pipelines and containerization for deployment.",
    technologies: ["React.js", "Redux Toolkit", "CodeIgniter", "MySQL", "Docker", "CI/CD"],

    image: "https://placehold.co/800x600/1e1e1e/f472b6?text=Elites+Capital",
  },
];


export default function Projects({ id }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
          <p className="font-mono text-purple-400 mb-2">[ My Portfolio ]</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        {/* Project Slider */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/5 p-6 rounded-2xl border border-white/10">
                  {/* Left Side: Image */}
                  <motion.div className="overflow-hidden rounded-lg" variants={itemVariants}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  {/* Right Side: Content */}
                  <motion.div variants={itemVariants}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* <div className="flex items-center gap-4">
                      <a
                        href={project.liveDemo}
                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-purple-300 transition-colors"
                      >
                        Live Demo <ArrowUpRight size={18} />
                      </a>
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div> */}
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <motion.div variants={itemVariants}>
            <button className="swiper-button-prev-custom absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/50">
              <ChevronLeft />
            </button>
            <button className="swiper-button-next-custom absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/50">
              <ChevronRight />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}