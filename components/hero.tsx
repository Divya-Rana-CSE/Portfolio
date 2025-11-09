"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background via-background to-card/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-pretty leading-tight">Divya Rana</h1>
          <h2 className="text-xl sm:text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 font-semibold">
            Cybersecurity Student | Tech Enthusiast
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about cybersecurity, ethical hacking, and building a safer digital world. Pre-final year B.Tech
            student with expertise in digital forensics and network security.
          </p>

          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary/30"
          >
            View My Work
            <ChevronDown size={18} />
          </button>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-foreground/50">Scroll to explore</span>
            <ChevronDown size={20} className="text-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
