"use client"

import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useRealVisitorCount } from "@/hooks/useRealVisitorCount"

export default function Home() {
  const [timeSpent, setTimeSpent] = useState(0)
  const { visitorCount, isLoading, isNewVisitor } = useRealVisitorCount()

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">[Your Name]</h1>

          <div className="mb-8">
            <Link
              href="/skip"
              className="text-blue-600 hover:text-blue-800 hover:underline hover:scale-105 text-sm md:text-base px-2 py-1 rounded transition-all duration-200 inline-block"
            >
              Don't want to waste time in this animated bullshit? Click here.
            </Link>
          </div>

          {/* Welcome message for new visitors */}
          {isNewVisitor && !isLoading && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">🎉 Welcome! You are visitor #{visitorCount.toLocaleString()}</p>
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-4">
          <div className="space-y-3">
            <Link
              href="/about"
              className="block text-lg py-2 px-4 text-left hover:underline hover:scale-105 transition-all duration-200"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="block text-lg py-2 px-4 text-left hover:underline hover:scale-105 transition-all duration-200"
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="block text-lg py-2 px-4 text-left hover:underline hover:scale-105 transition-all duration-200"
            >
              Blogs
            </Link>
            <Link
              href="/socials"
              className="block text-lg py-2 px-4 text-left hover:underline hover:scale-105 transition-all duration-200"
            >
              Socials
            </Link>
            <Link
              href="/reviews"
              className="block text-lg py-2 px-4 text-left hover:underline hover:scale-105 transition-all duration-200"
            >
              Reviews
            </Link>
            <Link
              href="/resume"
              className="block text-lg py-2 px-4 text-left hover:underline hover:scale-105 transition-all duration-200"
            >
              Resume
            </Link>
          </div>
        </nav>
      </main>

      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} isLoading={isLoading} />
    </div>
  )
}
