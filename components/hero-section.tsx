"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const roles = ["Full Stack Developer", "Graphics Designer", "Video Editor", "Social Media Manager", "Tech Enthusiast"]
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.slice(0, typedText.length - 1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, roleIndex, roles])

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Avatar & Name */}
          <div 
            className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative mb-6 group">
              {/* Rotating border */}
              <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-transparent border-t-primary border-r-accent animate-rotate-slow" />
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary/30 p-2 animate-rotate-slow">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Lamy Tech"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating particles */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-accent/30 rounded-full animate-float-delayed" />
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/40 rounded-full animate-float-slow" />
              
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xs animate-bounce shadow-lg shadow-accent/50">
                Hi!
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in-up">
              <span className="text-primary">Lamy</span>{" "}
              <span className="text-foreground">Tech</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 h-8">
              {typedText}
              <span className="animate-pulse text-primary">|</span>
            </h2>
            
            <p className="text-lg text-foreground max-w-md animate-fade-in-up animation-delay-200">
              <span className="text-primary">Innovating</span> Solutions with{" "}
              <br className="hidden sm:block" />
              Digital <span className="text-accent">Excellence</span>
            </p>
          </div>
          
          {/* Right Column - About Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-300">
              {"I'm"} Lameck Adema, a student in my second year at the School of Computing and Mathematics, pursuing a Bachelor of Software Engineering at The Co-operative University of Kenya – Karen.
            </p>
            
            <p className="text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-400">
              I have a passion for web development, app and software development, backend development and I love to learn new things. {"I'm"} also a tech enthusiast and I love to share my knowledge as well as collaborate with others.
            </p>
            
            <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up animation-delay-500 hover:-translate-y-1">
              <p className="text-foreground">
                <span className="font-semibold">Lamy Tech</span>{" "}
                <span className="text-primary">crafts</span> digital{" "}
                <span className="text-primary">experiences</span> that{" "}
                <span className="text-accent">inspire</span> and{" "}
                <span className="text-primary">transform</span>.
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-600">
              My journey in technology has been driven by curiosity and a desire to create meaningful solutions. I specialize in building responsive, accessible, and performant digital experiences that make an impact.
            </p>
            
            <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up animation-delay-700 hover:-translate-y-1">
              <p className="text-foreground">
                I try to blend{" "}
                <span className="text-primary">technology</span> with{" "}
                <span className="text-accent">passion</span> to create{" "}
                <span className="text-primary">solutions</span> that{" "}
                <span className="text-accent">shine</span>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl animate-pulse-slow" />
        </div>
      </div>
    </section>
  )
}
