import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  )
}