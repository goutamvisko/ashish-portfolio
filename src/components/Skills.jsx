import React from "react";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiVuedotjs,
  SiAngular,
  SiLaravel,
  SiDocker,
  SiHeroku,
  SiGraphql,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiPython,
  SiDjango,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Code, Server, Database, Settings } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Skills({ id }) {
  const skills = [
    { icon: <SiNodedotjs size={36} />, label: "Node.js" },
    { icon: <SiNextdotjs size={36} />, label: "Next.js" },
    { icon: <SiFirebase size={36} />, label: "Firebase" },
    { icon: <SiMongodb size={36} />, label: "MongoDB" },
    { icon: <SiTailwindcss size={36} />, label: "TailwindCSS" },
    { icon: <SiVuedotjs size={36} />, label: "Vue" },
    { icon: <SiAngular size={36} />, label: "Angular" },
    { icon: <SiLaravel size={36} />, label: "Laravel" },
    { icon: <FaAws size={36} />, label: "AWS" },
    { icon: <SiHeroku size={36} />, label: "Heroku" },
    { icon: <SiGraphql size={36} />, label: "GraphQL" },
    { icon: <SiMysql size={36} />, label: "MySQL" },
    { icon: <SiPostgresql size={36} />, label: "PostgreSQL" },
    { icon: <SiGit size={36} />, label: "Git" },
    { icon: <SiPython size={36} />, label: "Python" },
    { icon: <SiDjango size={36} />, label: "Django" },
    { icon: <SiDocker size={36} />, label: "Docker" },
  ];

  return (
    <section
      id={id}
      className="bg-[#1e1e1e] py-6 px-6 md:px-12 flex justify-center font-mono"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-7xl"
      >
        <div className="animate-gradient-border p-[2px] rounded-2xl">
          <div className="bg-[#2a2a30] rounded-2xl p-8 md:p-12 flex flex-col gap-10">
            {/* Header */}
            <div className="text-center">
              <p className="text-green-400 text-sm font-medium mb-2">
                • Technical Skills 
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                My Core Technologies
              </h2>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              {/* Left: Swiper Slider */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full "
              >
                <Swiper
                  modules={[Autoplay, Navigation]}
                  loop={true} 
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false, 
                  }}
                  // navigation // shows arrows for desktop
                  spaceBetween={18}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    480: { slidesPerView: 3 },
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 7 },
                  }}
                  className="w-full"
                >
                  {skills.map((skill, i) => (
                    <SwiperSlide key={i}>
                      <div className="flex flex-col items-center justify-center bg-[#3c3c43]/70 border border-gray-700/50 rounded-xl p-5  group transition-all duration-300 hover:border-gray-600 hover:-translate-y-1">
                        <div className="text-gray-400 transition-colors group-hover:text-green-400">
                          {skill.icon}
                        </div>
                        <p className="text-sm mt-3 text-gray-300 font-semibold">
                          {skill.label}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* Right: Text Summary */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 space-y-5 text-sm sm:text-base"
              >
                <p>
                  <span className="flex items-center gap-2 text-white font-semibold mb-1">
                    <Code className="w-4 h-4 text-green-400" /> Front-End:
                  </span>
                  Proficient in React, Angular, and Vue.js for building dynamic
                  UIs.
                </p>
                <p>
                  <span className="flex items-center gap-2 text-white font-semibold mb-1">
                    <Server className="w-4 h-4 text-green-400" /> Back-End:
                  </span>
                  Experienced with Node.js, Express, Python, and Django for
                  robust server-side logic.
                </p>
                <p>
                  <span className="flex items-center gap-2 text-white font-semibold mb-1">
                    <Database className="w-4 h-4 text-green-400" /> Databases:
                  </span>
                  Skilled in SQL (MySQL, PostgreSQL) and NoSQL (MongoDB)
                  databases.
                </p>
                <p>
                  <span className="flex items-center gap-2 text-white font-semibold mb-1">
                    <Settings className="w-4 h-4 text-green-400" /> DevOps &
                    Tools:
                  </span>
                  Utilizing Git, Docker, AWS & Heroku for deployment and CI/CD.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
