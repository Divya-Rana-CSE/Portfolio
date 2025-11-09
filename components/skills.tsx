"use client"

import { Code2, Lock, Search, Cpu } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Lock,
      category: "Cybersecurity",
      skills: ["Cybersecurity Fundamentals", "Ethical Hacking", "Digital Forensics", "Penetration Testing"],
    },
    {
      icon: Code2,
      category: "Programming",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: Cpu,
      category: "Tech Stack",
      skills: ["MERN Stack (Learning)", "Linux", "Networking", "Database Management"],
    },
    {
      icon: Search,
      category: "Analysis",
      skills: ["Network Analysis", "Threat Assessment", "Security Auditing", "Log Analysis"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon
            return (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{cat.category}</h3>
                </div>
                <div className="space-y-2">
                  {cat.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
                    >
                      <p className="text-foreground/80">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
