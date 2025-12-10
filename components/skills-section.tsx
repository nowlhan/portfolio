"use client"

import {
  Code,
  Settings,
  Database,
  GitBranch,
  Zap,
  MessageCircle,
  Brain,
  CheckCircle,
  Wrench,
} from "lucide-react"
import React from "react"

// Icônes pour chaque skill
const skillIcons: Record<string, React.ReactNode> = {
  "React": <Code className="w-4 h-4" />,
  "Next.js": <Zap className="w-4 h-4" />,
  "TypeScript": <Settings className="w-4 h-4" />,
  "Tailwind CSS": <Wrench className="w-4 h-4" />,
  "Vue.js": <Code className="w-4 h-4" />,
  "Python": <Settings className="w-4 h-4" />,
  "Django": <Wrench className="w-4 h-4" />,
  "PostgreSQL": <Database className="w-4 h-4" />,
  "SQLite": <Database className="w-4 h-4" />,
  "Firebase": <Zap className="w-4 h-4" />,
  "Git": <GitBranch className="w-4 h-4" />,
  "Docker": <Wrench className="w-4 h-4" />,
  "Vercel": <Zap className="w-4 h-4" />,
  "Figma": <Settings className="w-4 h-4" />,
  "Comunication": <MessageCircle className="w-4 h-4" />,
  "Analytical mindset": <Brain className="w-4 h-4" />,
  "Problem Solving": <CheckCircle className="w-4 h-4" />,
  "Methodical": <CheckCircle className="w-4 h-4" />,
}

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "PostgreSQL", "SQLite", "Firebase"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Vercel", "Figma"],
    },
    {
      category: "Soft Skills",
      skills: ["Comunication", "Analytical mindset", "Problem Solving", "Methodical"],
    },
  ]

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Technology and skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-primary mb-4">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <p key={skill} className="text-foreground/70 text-sm flex items-center gap-2">
                    {skillIcons[skill] && <span className="text-primary">{skillIcons[skill]}</span>}
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
