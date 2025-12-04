"use client"

import { ExternalLink } from "lucide-react"

export default function ProjectsGallery() {
  const projects = [
    {
      id: 1,
      title: "Audiobook platform",
      description:
        "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel administrativo.",
      tags: ["React", "Next.js", "TailwindCSS", "PostgreSQL", "Glassmorphism"],
      image: "/audiobook2.PNG",
      link: "#",
    },
    {
      id: 2,
      title: "Attendance management system with face recognition",
      description: "A complete web application for managing absences, facial-recognition attendance tracking, calculating employee hourly rates, providing a dashboard, and automatically sending emails for absence requests.",
      tags: ["React", "Faceapi-js",  "Postgresql", "Brevo API"],
      image: "/task-management-board.PNG",
      link: "#",
    },
    {
      id: 3,
      title: "Landing page",
      description:
        "Beside complexe web application, i also design and create simple but beautifull UI/UX friendly landing page. So if you are an adept of simple and elegant design, i am your guy.",
        
      tags: ["Next.js", "Tailwind css", "TypeScript"],
      image: "/ai-chat-dashboard.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "ATS Resume analyser",
      description: "AI-driven platform that reviews your resume, detects missing keywords, scores ATS compatibility, and generates an optimized version tailored to job descriptions",
      tags: ["React", "Storybook", "Tailwind CSS", "TypeScript","Gemini API"],
      image: "/design-system-abstract.PNG",
      link: "#",
    },
  ]

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3"></p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Some of my work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm pt-2 transition-colors"
                >
                  Ver proyecto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
