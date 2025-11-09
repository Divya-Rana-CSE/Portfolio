"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a passionate pre-final year B.Tech student specializing in cybersecurity with a keen interest in ethical
            hacking, digital forensics, and network security. My journey into cybersecurity has been driven by a desire
            to understand the intricacies of digital systems and build a safer online environment.
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed">
            Beyond cybersecurity, I'm deeply interested in web technologies and AI. I believe in the convergence of
            security and innovation, and I'm constantly learning new skills to stay ahead in this rapidly evolving
            field. I'm also an active learner, always exploring emerging technologies and their security implications.
          </p>

          <div className="mt-8 p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors duration-300">
            <p className="text-foreground/70 italic">
              "Security is not a product, but a process. It's about building systems that are resilient, maintainable,
              and secure by design."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
