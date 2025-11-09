"use client"

import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Lunara Baking",
      description:
        "Educational baking website showcasing security-friendly design and modern web technologies. Built with responsive design principles and secure implementation practices.",
      tags: ["HTML", "CSS", "JavaScript", "Security"],
      link: "#",
    },
    {
      title: "Network Security Analyzer",
      description:
        "Tool for analyzing network traffic patterns and identifying potential security vulnerabilities. Features real-time monitoring and alert systems.",
      tags: ["Python", "Networking", "Security"],
      link: "#",
    },
    {
      title: "Cryptography Suite",
      description:
        "Educational project demonstrating various encryption algorithms and their implementations. Includes practical examples of symmetric and asymmetric encryption.",
      tags: ["Python", "Cryptography", "Education"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
