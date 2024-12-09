"use client"

import { motion } from "framer-motion"

const Education = () => {
  const education = [
    {
      period: "2022-2026",
      institution: "Dayananda Sagar College of Engineering",
      degree: "Bachelor of Engineering",
      details: "Computer Science Engineering"
    },
    {
      period: "2010-2022",
      institution: "Delhi Public School",
      degree: "Primary and Secondary Education",
      details: "CBSE Board"
    }
  ]

  return (
    <section id="education" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.institution}</h3>
                  <p className="text-muted-foreground">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {item.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education