"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Achievements from "@/components/achievements"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
