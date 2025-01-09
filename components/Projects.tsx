"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import virtual from "./assets/virtualAi.png"
import summit from "./assets/summit.png"
import portfolio from "./assets/Portfolio .png"


const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: portfolio,
      github: "https://github.com/Niruth4405/portfolioWeb",
      live: "https://portfolio-web-2025.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "TypeScript","Framer Motion"]
    },
    {
      title: "Landing Page",
      description: "Modern landing page with responsive design",
      image: virtual,
      github: "https://github.com/username/landing",
      live: "https://lp-vfba.vercel.app/",
      tags: ["Next.js", "JavaScript", "Tailwind CSS"]
    },
    // {
    //   title: "College Website",
    //   description: "Official college website with modern UI/UX",
    //   image: "/projects/college.jpg",
    //   github: "https://github.com/username/college",
    //   live: "https://college.example.com",
    //   tags: ["Next.js", "TypeScript", "Tailwind CSS"]
    // },
    {
      title: "IEDC DSCE Website",
      description: "Website for Innovation and Entrepreneurship Development Cell to promote E-summit 2024",
      image: summit,
      github: "https://github.com/Niruth4405/E-Summit",
      live: "https://e-summit24.vercel.app/",
      tags: ["React", "Tailwind CSS", "JavaScript"]
    }
  ]

  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.github}
                    className="flex items-center text-sm hover:text-primary"
                  >
                    <FaGithub className="mr-2" />
                    Source Code
                  </Link>
                  <Link
                    href={project.live}
                    className="flex items-center text-sm hover:text-primary"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects