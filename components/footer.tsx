"use client"

import Link from "next/link"
import { Github, MessageCircle, Twitter, Music2, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://wa.me", icon: MessageCircle, label: "WhatsApp" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://tiktok.com", icon: Music2, label: "TikTok" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const footer = document.getElementById("footer")
    if (footer) {
      observer.observe(footer)
    }

    return () => observer.disconnect()
  }, [])
  
  return (
    <footer id="footer" className="bg-muted/50 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              )
            })}
          </div>
          
          <p 
            className={`text-sm text-muted-foreground transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            &copy; {currentYear} Lamy Tech{" "}
            <span className="text-accent animate-pulse">&#128155;</span>
          </p>
          <p 
            className={`text-xs text-muted-foreground transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
