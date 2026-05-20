"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { 
  Code2, 
  FileJson, 
  Braces,
  FileCode,
  Atom,
  Server,
  Zap,
  Triangle,
  Database,
  Leaf,
  Palette,
  Video,
  Share2,
  Figma,
  Layers,
  PenTool,
  Film,
  Scissors,
  Clapperboard,
  Instagram,
  BarChart3,
  Users
} from "lucide-react"

const skills = {
  languages: [
    { name: "JavaScript", level: 80, color: "bg-yellow-500", icon: FileJson },
    { name: "Python", level: 52, color: "bg-blue-500", icon: Code2 },
    { name: "Java", level: 62, color: "bg-blue-600", icon: Braces },
    { name: "HTML/CSS", level: 89, color: "bg-orange-500", icon: FileCode },
  ],
  frameworks: [
    { name: "React", level: 72, color: "bg-cyan-500", icon: Atom },
    { name: "Node.js", level: 97, color: "bg-green-600", icon: Server },
    { name: "Express", level: 95, color: "bg-gray-600", icon: Zap },
    { name: "Next.js", level: 24, color: "bg-foreground", icon: Triangle },
  ],
  databases: [
    { name: "MongoDB", level: 80, color: "bg-green-500", icon: Leaf },
    { name: "PostgreSQL", level: 53, color: "bg-blue-700", icon: Database },
  ],
  design: [
    { name: "Photoshop", level: 85, color: "bg-blue-500", icon: Palette },
    { name: "Illustrator", level: 78, color: "bg-orange-500", icon: PenTool },
    { name: "Figma", level: 70, color: "bg-purple-500", icon: Figma },
    { name: "Canva", level: 98, color: "bg-cyan-400", icon: Layers },
  ],
  videoEditing: [
    { name: "Premiere Pro", level: 82, color: "bg-purple-600", icon: Film },
    { name: "After Effects", level: 65, color: "bg-indigo-500", icon: Clapperboard },
    { name: "DaVinci Resolve", level: 58, color: "bg-orange-600", icon: Video },
    { name: "CapCut", level: 90, color: "bg-pink-500", icon: Scissors },
  ],
  socialMedia: [
    { name: "Content Strategy", level: 90, color: "bg-pink-500", icon: Instagram },
    { name: "Analytics", level: 75, color: "bg-green-500", icon: BarChart3 },
    { name: "Community Mgmt", level: 82, color: "bg-blue-500", icon: Users },
    { name: "Social Marketing", level: 79, color: "bg-red-500", icon: Share2 },
  ],
}

type SkillItem = {
  name: string
  level: number
  color: string
  icon: React.ComponentType<{ className?: string }>
}

function SkillCard({ name, level, color, icon: Icon, index }: SkillItem & { index: number }) {
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedLevel((prev) => {
            if (prev >= level) {
              clearInterval(interval)
              return level
            }
            return prev + 1
          })
        }, 20)
        return () => clearInterval(interval)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible, level])

  return (
    <div 
      className={`bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-sm font-semibold text-primary">{animatedLevel}%</span>
      </div>
      <p className="text-sm font-medium text-foreground">{name}</p>
      <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ title, items, delay }: { title: string; items: SkillItem[]; delay: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`bg-card/50 rounded-2xl p-6 border border-border transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <h3 className="text-lg font-semibold text-foreground mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((skill, index) => (
          <SkillCard key={skill.name} {...skill} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
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
              My <span className="text-primary border-b-2 border-accent">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With a diverse skill set spanning multiple programming languages, frameworks, databases, design tools, and creative services, I bring comprehensive technical and creative expertise to every project.
            </p>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            <SkillCategory title="Programming Languages" items={skills.languages} delay={100} />
            <SkillCategory title="Frameworks & Libraries" items={skills.frameworks} delay={200} />
            <SkillCategory title="Database Technologies" items={skills.databases} delay={300} />
            <SkillCategory title="Graphics Design" items={skills.design} delay={400} />
            <SkillCategory title="Video Editing" items={skills.videoEditing} delay={500} />
            <SkillCategory title="Social Media Management" items={skills.socialMedia} delay={600} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
