import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaDownload, FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiReact,
  SiLaravel,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';


import "swiper/css";
import "swiper/css/autoplay";

const profileImageUrl =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80";

const Hero = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const techIcons = [
    { icon: <FaNodeJs size={28} className="text-gray-300" />, name: "Node.js" },
    { icon: <SiTailwindcss size={28} className="text-gray-300" />, name: "Tailwind" },
    { icon: <SiNextdotjs size={28} className="text-gray-300" />, name: "Next.js" },
    { icon: <SiFirebase size={28} className="text-gray-300" />, name: "Firebase" },
    { icon: <SiMongodb size={28} className="text-gray-300" />, name: "MongoDB" },
    { icon: <SiReact size={28} className="text-gray-300" />, name: "React" },
    { icon: <SiLaravel size={28} className="text-gray-300" />, name: "Laravel" },
    { icon: <SiFirebase size={28} className="text-gray-300" />, name: "Firebase" },
    { icon: <SiMongodb size={28} className="text-gray-300" />, name: "MongoDB" },
    { icon: <SiReact size={28} className="text-gray-300" />, name: "React" },
    { icon: <SiLaravel size={28} className="text-gray-300" />, name: "Laravel" },
  ];

  return (
    <motion.section
      className="bg-[#1e1e1e] font-mono"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 py-6">
        <div className="animate-gradient-border rounded-2xl p-0.5">
          <div className="bg-[#2a2a30] text-white relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

              {/* Image Section */}
              <motion.div
                className="w-full mx-auto order-1 md:order-2"
                variants={imageVariants}
              >
                <div
                  className="relative w-full h-72 sm:h-96 md:h-[400px] lg:h-[450px] "
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <img
                    src={profileImageUrl}
                    alt="James - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text Section */}
              <div className="text-center md:text-left order-2 md:order-1">
                <motion.p className="mb-4 text-gray-400" variants={itemVariants}>
                  <span className="text-pink-500">&lt;span&gt;</span> Hey, I'm Goutam{" "}
                  <span className="text-pink-500">&lt;/span&gt;</span>
                </motion.p>
                <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" variants={itemVariants}>
                  Senior &#123;Full <br className="hidden sm:block" />
                  <span className="text-green-400">Stack</span>&#125; Web & App <br className="hidden sm:block" />
                  Developer
                </motion.h1>
                <motion.p className="mb-8 text-gray-400 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 leading-relaxed" variants={itemVariants}>
                  <span className="text-pink-500">&lt;p&gt;</span>
                  With expertise in cutting-edge tech like <span className="text-red-400">React</span>, <span className="text-red-400">NodeJS</span>, and <span className="text-red-400">Laravel</span>, I deliver innovative and robust web solutions.
                  <span className="text-pink-500">&lt;/p&gt;</span>
                </motion.p>

                {/* Tech Stack Slider */}
                <motion.div className="mb-10" variants={itemVariants}>
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                      320: { slidesPerView: 2, spaceBetween: 10 },
                      480: { slidesPerView: 3, spaceBetween: 12 },
                      640: { slidesPerView: 4, spaceBetween: 15 },
                      768: { slidesPerView: 5, spaceBetween: 18 },
                      1024: { slidesPerView: 6, spaceBetween: 20 },
                      1280: { slidesPerView: 7, spaceBetween: 25 },
                    }}
                  >
                    {techIcons.map((tech, index) => (
                      <SwiperSlide key={index}>
                        <motion.div
                          className="p-3 border border-gray-600/50 rounded-lg flex items-center justify-center"
                          whileHover={{ scale: 1.1, backgroundColor: "#3a3a40" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {tech.icon}
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </motion.div>...and more


                <motion.a
                  href="#download-cv"
                  className="inline-flex items-center text-green-400 border border-green-400/50 px-5 sm:px-6 py-3 transition-colors group hover:bg-green-400/10 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaDownload className="mr-3 transition-transform group-hover:-translate-y-0.5" />
                  <span className="font-semibold">[ Download my CV ]</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
