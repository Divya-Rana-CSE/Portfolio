"use client"

import { Shield, Award, BookOpen, Target } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: Shield,
      title: "CEH",
      description: "Working towards Certified Ethical Hacker certification",
    },
    {
      icon: Award,
      title: "Cyber Secured Champion",
      description: "Recognition for excellence in security implementation",
    },
    {
      icon: BookOpen,
      title: "Digital Forensics Associate",
      description: "Specialized in digital investigation and evidence preservation",
    },
    {
      icon: Target,
      title: "Cyber Security Associate",
      description: "Certified in cybersecurity fundamentals and best practices",
      
    },

  ]

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-background to-card/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-foreground/70">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Competition Achievement */}
        <div className="mt-8 p-6 bg-card border border-accent/30 rounded-lg">
          <h3 className="text-lg font-semibold text-accent mb-2">🏆 Competition Achievement</h3>
          <p className="text-foreground/80">
            <strong>2nd Place – Syntax Sprint Coding Relay</strong> at Geeta University
          </p>
        </div>
      </div>
    </section>
  )
}
