"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"
import { useRealVisitorCount } from "@/hooks/useRealVisitorCount"

export default function About() {
  const [timeSpent, setTimeSpent] = useState(0)
  const { visitorCount, isLoading } = useRealVisitorCount()

  useEffect(() => {
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

        <h1 className="text-2xl font-bold mb-6">About Me</h1>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>{">"} whoami</p>
          <p>Hello! I'm a developer who believes in clean, functional design and efficient code.</p>
          <p>{">"} cat skills.txt</p>
          <div className="ml-4 space-y-1">
            <p>JavaScript/TypeScript</p>
            <p>React/Next.js</p>
            <p>Node.js</p>
            <p>Python</p>
            <p>Database Design</p>
          </div>
          <p>{">"} ls experience/</p>
          <p>3+ years of building web applications, APIs, and solving complex problems.</p>
          <p>{">"} echo "Let's build something amazing together!"</p>
        </div>
      </main>
      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} isLoading={isLoading} />
    </div>
  )
}
