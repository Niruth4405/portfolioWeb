"use client"

import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="#about" className="block hover:text-primary">About</Link>
              <Link href="#education" className="block hover:text-primary">Education</Link>
              <Link href="#skills" className="block hover:text-primary">Skills</Link>
              <Link href="#projects" className="block hover:text-primary">Projects</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="http://www.linkedin.com/in/niruth-ananth-19a9961b3" className="hover:text-primary">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://x.com/NiruthAnanth" className="hover:text-primary">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/niruthcodes/" className="hover:text-primary">
                <FaInstagram size={24} />
              </Link>
              {/* <Link href="https://discord.com" className="hover:text-primary">
                <FaDiscord size={24} />
              </Link> */}
              <Link href="niruthananth03@gmail.com" className="hover:text-primary">
                <MdEmail size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p>Created by Niruth Ananth</p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer