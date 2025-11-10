"use client"

import { Mail, Linkedin, Github, Instagram, Twitter } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:ranad0371@example.com",
      text: "ranad0371@example.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/divya-rana-cs/",
      text: "Connect on LinkedIn",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Divya-Rana-CSE",
      text: "View my repositories",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/DivyaRana890505",
      text: "Follow on Twitter",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-center text-foreground/70 mb-12 text-lg">
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                  <Icon className="text-primary group-hover:text-accent transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {social.label}
                  </h3>
                  <p className="text-foreground/70 text-sm">{social.text}</p>
                </div>
              </a>
            )
          })}
        </div>

        <div className="p-8 bg-card border border-accent/30 rounded-lg text-center">
          <p className="text-foreground/80">
            Open to new opportunities in cybersecurity, ethical hacking, and tech innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
