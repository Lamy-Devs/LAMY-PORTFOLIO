"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "Website Downloade",
    description: "A tool for grabbing source code of websites.",
    image: "/projects/website-downloader.jpg",
    demoUrl: "#",
    sourceUrl: "#",
  },
]

function ProjectCard({ 
  title, 
  description, 
  demoUrl, 
  sourceUrl,
  index
}: { 
  title: string
  description: string
  image: string
  demoUrl: string
  sourceUrl: string
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div 
      className={`bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <span className="text-4xl font-bold text-primary/30 group-hover:scale-110 transition-transform duration-300">{title.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex gap-2">
          <Button asChild variant="default" size="sm" className="flex-1 group/btn">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:rotate-12 transition-transform" />
              View Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1 group/btn">
            <Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1 group-hover/btn:rotate-12 transition-transform" />
              Source Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-primary border-b-2 border-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my featured projects showcasing my skills and experience from the most recent works. Each project represents unique challenges and creative solutions {"I've"} developed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
