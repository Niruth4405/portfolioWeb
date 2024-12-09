"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <section id="about" className="relative min-h-screen pt-16">
      <Particles
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            color: {
              value: "#808080",
            },
            links: {
              color: "#808080",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
          },
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm Niruth Ananth
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A passionate developer focused on creating beautiful and functional web experiences.
              Currently studying at Dayananda Sagar College of Engineering.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                { icon: FaDiscord, href: "https://discord.com", label: "Discord" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="transform hover:scale-110 transition-transform duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={32} />
                </Link>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/profile-photo.jpg"
                alt="Niruth Ananth"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About