"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

const education = [
  {
    title: "Programming and Software Development",
    institution: "At my own effort and research",
    period: "2023 - Ongoing",
    description: "I have been learning programming and software development on my own through online resources and personal projects.",
    isCurrent: true,
  },
  {
    title: "Bachelor of Science in Software Engineering",
    institution: "The Cooperative university of kenya",
    period: "2024 - Ongoing",
    description: "Current studying level as I gain more knowledge.",
    isCurrent: true,
  },
  {
    title: "Kenya Certificate of Secondary Education",
    institution: "Maliki Boys High School, Bungoma County",
    period: "2020 - 2023",
    description: "I Attained a mean grade of C not low enough to proceed to university education.",
    isCurrent: false,
  },
  {
    title: "Primary School Certificate",
    institution: "Webuye ACK Primary School, Webuye - Bungoma County",
    period: "2016 - 2019",
    description: "I Obtained a score of 301 marks and qualified to join secondary school.",
    isCurrent: false,
  },
  {
    title: "Pre-Primary (Nursery) School Certificate",
    institution: "Jollyne Academy",
    period: "2009 - 2010",
    description: "I graduated and this marked my first time graduating in life.",
    isCurrent: false,
  },
]

function EducationCard({ 
  title, 
  institution, 
  period, 
  description,
  isCurrent,
  index
}: { 
  title: string
  institution: string
  period: string
  description: string
  isCurrent: boolean
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div 
      className={`bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 relative hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
      }`}
    >
      {isCurrent && (
        <div className="absolute -top-2 -right-2 px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full animate-pulse">
          Ongoing
        </div>
      )}
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold text-primary">{index + 1}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {institution}
            </span>
            <span className="text-sm text-muted-foreground">| {period}</span>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      {/* Timeline connector */}
      {index < education.length - 1 && (
        <div className="hidden sm:block absolute left-[1.75rem] top-[4.5rem] w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-primary/50 to-transparent" />
      )}
    </div>
  )
}

export default function EducationPage() {
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
              My <span className="text-primary border-b-2 border-accent">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational journey reflects my passion for continuous learning and growth. From formal education to self-directed tech learning, each step has shaped who I am today.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((item, index) => (
              <EducationCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
