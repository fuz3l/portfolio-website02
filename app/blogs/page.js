"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Blogs() {
  const [timeSpent, setTimeSpent] = useState(0)
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Get visitor count from localStorage
    const count = localStorage.getItem("visitorCount") || "10619"
    setVisitorCount(Number.parseInt(count))

    // Time tracker
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      setTimeSpent(elapsed)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const blogs = [
    {
      title: "Why I Choose Minimal Design",
      date: "2024-01-15",
      excerpt: "Sometimes less is more. Here's why I believe in clean, functional interfaces.",
    },
    {
      title: "Terminal-Style UIs: A Developer's Perspective",
      date: "2024-01-10",
      excerpt: "Exploring the appeal of command-line aesthetics in modern web design.",
    },
    {
      title: "Building Efficient React Components",
      date: "2024-01-05",
      excerpt: "Best practices for creating reusable and performant React components.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 hover:underline hover:scale-105 transition-all duration-200 inline-block"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-6">Blogs</h1>

        <div className="space-y-6">
          <p className="text-sm">{"> cat blog_posts.md"}</p>

          {blogs.map((blog, index) => (
            <article key={index} className="border-b border-gray-200 pb-4">
              <h3 className="font-bold mb-1">{blog.title}</h3>
              <p className="text-xs text-gray-600 mb-2">{blog.date}</p>
              <p className="text-sm">{blog.excerpt}</p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline hover:scale-105 transition-all duration-200 text-sm inline-block"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} />
    </div>
  )
}
