"use client"

import React, { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactSection() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hola@ejemplo.com",
      color: "hover:text-red-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nowlhan",
      color: "hover:text-gray-800",
    },
    
  ]

  // Form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle")
  const [errorText, setErrorText] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorText(null)
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorText("Please fill all fields.")
      setStatus("error")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to send")
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: any) {
      console.error(err)
      setErrorText(err?.message || "Failed to send message")
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">Ready to collaborate?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Let's start your next project.
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-balance">
            I'm always interested in challenging projects and opportunities to contribute.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-8 rounded-xl border border-border max-w-2xl mx-auto" aria-live="polite">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground text-left">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground text-left">Email</label>
            <input
              type="email"
              placeholder="yourmail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground text-left">Message</label>
            <textarea
              placeholder="Your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-200 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          {status === "success" && <p className="text-sm text-green-600">Message sent. Merci!</p>}
          {status === "error" && errorText && <p className="text-sm text-red-600">{errorText}</p>}
        </form>

        {/* Social Links */}
        <div className="pt-8 space-y-6">
          <p className="text-foreground/60">You can also follow me on my social media:</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  className={`p-3 bg-card border border-border rounded-lg transition-all duration-200 ${social.color}`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
