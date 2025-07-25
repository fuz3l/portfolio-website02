"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Skip() {
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

        <h1 className="text-2xl font-bold mb-6">Quick Access</h1>

        <div className="space-y-4">
          <p className="text-sm mb-6">{">"} ls -la quick_links/</p>

          <div className="grid gap-4">
            <Link
              href="/about"
              className="block p-4 border border-gray-300 rounded hover:underline hover:scale-105 transition-all duration-200"
            >
              <h3 className="font-bold">About Me</h3>
              <p className="text-sm text-gray-600">Developer, problem solver, coffee enthusiast</p>
            </Link>

            <Link
              href="/projects"
              className="block p-4 border border-gray-300 rounded hover:underline hover:scale-105 transition-all duration-200"
            >
              <h3 className="font-bold">Projects</h3>
              <p className="text-sm text-gray-600">Web apps, APIs, and cool stuff I've built</p>
            </Link>

            <Link
              href="/resume"
              className="block p-4 border border-gray-300 rounded hover:underline hover:scale-105 transition-all duration-200"
            >
              <h3 className="font-bold">Resume</h3>
              <p className="text-sm text-gray-600">Experience, skills, and education</p>
            </Link>

            <a
              href="mailto:your.email@example.com"
              className="block p-4 border border-gray-300 rounded hover:underline hover:scale-105 transition-all duration-200"
            >
              <h3 className="font-bold">Contact</h3>
              <p className="text-sm text-gray-600">Let's work together!</p>
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 border border-gray-300 rounded">
          <p className="text-sm">{">"} echo "Thanks for skipping the fancy stuff. I appreciate efficiency too! 😊"</p>
        </div>
      </main>
      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} />
    </div>
  )
}
