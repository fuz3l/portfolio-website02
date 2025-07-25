"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Socials() {
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

  const socials = [
    { name: "GitHub", url: "https://github.com/yourusername", handle: "@yourusername" },
    { name: "Twitter", url: "https://twitter.com/yourusername", handle: "@yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername", handle: "/in/yourusername" },
    { name: "Email", url: "mailto:your.email@example.com", handle: "your.email@example.com" },
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

        <h1 className="text-2xl font-bold mb-6">Socials</h1>

        <div className="space-y-4">
          <p className="text-sm">&gt; cat social_links.txt</p>

          {socials.map((social, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-medium">{social.name}</span>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline hover:scale-105 transition-all duration-200 text-sm inline-block"
              >
                {social.handle}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 border border-gray-300 rounded">
          <p className="text-sm">
            &gt; echo "Feel free to reach out! I'm always open to interesting conversations and collaboration
            opportunities."
          </p>
        </div>
      </main>
      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} />
    </div>
  )
}
