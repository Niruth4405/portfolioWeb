"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Download } from 'lucide-react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a');
  link.href = './'; // Update this with the correct file path
  link.download = './assets/Resume - India.pdf'; // The name of the downloaded file
  link.click();
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const handleSidebarClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
  }

  return (
    <>
      <nav className="fixed w-full backdrop-blur-md bg-background/80 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center"></div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link href="#about" className="hover:text-primary">About</Link>
                <Link href="#education" className="hover:text-primary">Education</Link>
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

            <button
              className="text-xl md:hidden focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeSidebar}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-background p-6 shadow-md transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={handleSidebarClick}
        >
          <button
            className="text-xl mb-4 focus:outline-none"
            onClick={closeSidebar}
          >
            <IoClose />
          </button>
          <div className="flex flex-col space-y-4">
            <Link href="#about" className="hover:text-primary" onClick={closeSidebar}>About</Link>
            <Link href="#education" className="hover:text-primary" onClick={closeSidebar}>Education</Link>
            <Link href="#skills" className="hover:text-primary" onClick={closeSidebar}>Skills</Link>
            <Link href="#projects" className="hover:text-primary" onClick={closeSidebar}>Projects</Link>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                  closeSidebar()
                }}
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button onClick={() => {
                handleDownloadCV()
                closeSidebar()
              }}>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
