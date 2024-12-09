"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiMongodb, SiMysql, SiPrisma, SiOpenai } from "react-icons/si"

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, category: "Frontend" },
    { name: "CSS", icon: FaCss3Alt, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
    { name: "React.js", icon: FaReact, category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
    { name: "Java", icon: FaJava, category: "Backend" },
    { name: "Python", icon: FaPython, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, category: "Backend" },
    { name: "MySQL", icon: SiMysql, category: "Backend" },
    { name: "Prisma", icon: SiPrisma, category: "Backend" },
    { name: "ChatGPT", icon: SiOpenai, category: "Tools" },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative bg-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
            >
              <div className="relative w-12 h-12 mb-4">
                <skill.icon className="w-full h-full text-primary transition-colors duration-200" />
              </div>
              <h3 className="text-sm font-medium text-center">{skill.name}</h3>
              <span className="absolute top-2 right-2 text-xs text-muted-foreground">
                {skill.category}
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills