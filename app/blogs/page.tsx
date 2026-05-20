"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const blogs = [
  {
    title: "Getting Started with Node.js",
    excerpt: "A comprehensive guide to setting up your first Node.js project and understanding the basics of server-side JavaScript.",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "getting-started-nodejs",
  },
  {
    title: "Building REST APIs with Express",
    excerpt: "Learn how to create robust RESTful APIs using Express.js framework with best practices and security considerations.",
    date: "March 10, 2024",
    readTime: "8 min read",
    slug: "building-rest-apis-express",
  },
  {
    title: "MongoDB for Beginners",
    excerpt: "Dive into the world of NoSQL databases with MongoDB. Learn CRUD operations, indexing, and data modeling.",
    date: "March 5, 2024",
    readTime: "6 min read",
    slug: "mongodb-beginners",
  },
  {
    title: "WhatsApp Bot Development",
    excerpt: "A step-by-step guide to creating your own WhatsApp bot using JavaScript and popular libraries.",
    date: "February 28, 2024",
    readTime: "10 min read",
    slug: "whatsapp-bot-development",
  },
  {
    title: "Telegram Bot Tutorial",
    excerpt: "Learn how to build powerful Telegram bots with Node.js, handling commands, callbacks, and inline queries.",
    date: "February 20, 2024",
    readTime: "7 min read",
    slug: "telegram-bot-tutorial",
  },
  {
    title: "Deploying Apps on Heroku",
    excerpt: "Master the art of deploying your Node.js applications to Heroku with continuous deployment from GitHub.",
    date: "February 15, 2024",
    readTime: "4 min read",
    slug: "deploying-heroku",
  },
]

function BlogCard({ 
  title, 
  excerpt, 
  date, 
  readTime,
  slug,
  index
}: { 
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <article 
      className={`bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {readTime}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
      <Link 
        href={`/blogs/${slug}`}
        className="inline-flex items-center gap-1 text-primary font-medium hover:gap-3 transition-all duration-300"
      >
        Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </article>
  )
}

export default function BlogsPage() {
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
              My <span className="text-primary border-b-2 border-accent">Blogs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I share my knowledge and experiences through writing. Here are some of my latest articles on web development, programming, and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.slug} {...blog} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
