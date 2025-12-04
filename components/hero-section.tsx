"use client"

import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase">hey, i'm Johan</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              I am a Junior web Developer
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                
              </span>
            </h1>
            <p className="text-xl text-foreground/60 text-balance max-w-md leading-relaxed">
              I build clean, minimal, and scalable web applications focused on the user. Passionate about modern UI/UX, automation, and AI-powered features, I believe that simplicity is key in interface design. I enjoy turning ideas into polished digital products with smooth user experiences and solid architecture
            </p>
          </div>

          

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-foreground/60">Landing page created</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4+</p>
              <p className="text-sm text-foreground/60">AI driven applicatons</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">1 year</p>
              <p className="text-sm text-foreground/60">Experience in web developpement</p>
            </div>
          </div>
        </div>
          
        {/* Right Image */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-gradient-to-tr from-primary to-accent rounded-xl " >
            <img src="/johan.jpg" alt="" /></div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
