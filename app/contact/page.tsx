"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Github, MessageCircle, Twitter, Music2, Mail, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"

const socialLinks = [
  { href: "https://github.com/Lamy-Devs", icon: Github, label: "GitHub" },
  { href: "https://wa.me", icon: MessageCircle, label: "WhatsApp" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://www.tiktok.com/@_its.lamy?is_from_webapp=1&sender_device=pc", icon: Music2, label: "TikTok" },
  { href: "lameckadema204@gmail.com", icon: Mail, label: "Email" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Form submitted:", formData)
    alert("Message sent! (This is a demo)")
    setFormData({ name: "", phone: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-primary border-b-2 border-accent">Contact Me</span>
            </h2>
            
            <div className="flex justify-center gap-4 mb-6">
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
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
            
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have an idea, a project, or just want to say hi? Send me a message and {"I'll"} get back to you as soon as possible!
            </p>
          </div>
          
          <div 
            className={`max-w-lg mx-auto transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-5 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-500">
              <div className="space-y-2 group">
                <Label htmlFor="name" className="group-focus-within:text-primary transition-colors">Name</Label>
                <Input
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-input focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2 group">
                <Label htmlFor="phone" className="group-focus-within:text-primary transition-colors">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-input focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2 group">
                <Label htmlFor="email" className="group-focus-within:text-primary transition-colors">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-input focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2 group">
                <Label htmlFor="message" className="group-focus-within:text-primary transition-colors">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-input resize-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full group" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
