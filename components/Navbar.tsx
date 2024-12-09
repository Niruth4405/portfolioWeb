"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Download } from 'lucide-react'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleDownloadCV = () => {
    // Add CV download logic here
  }

  return (
    <nav className="fixed w-full backdrop-blur-md bg-background/80 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/profile-photo.jpg"
              alt="Niruth Ananth"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link href="#about" className="hover:text-primary">About</Link>
              <Link href="#education" className="hover:text-primary">Education</Link>
              <Link href="#experience" className="hover:text-primary">Experience</Link>
              <Link href="#skills" className="hover:text-primary">Skills</Link>
              <Link href="#projects" className="hover:text-primary">Projects</Link>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button onClick={handleDownloadCV}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar