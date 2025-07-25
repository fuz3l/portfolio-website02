"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Projects() {
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

  const projects = [
    {
      name: "Terminal Portfolio",
      description: "A minimal, terminal-inspired portfolio website",
      tech: "Next.js, Tailwind CSS",
      status: "Active",
    },
    {
      name: "Task Manager API",
      description: "RESTful API for task management with authentication",
      tech: "Node.js, Express, MongoDB",
      status: "Completed",
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather data visualization",
      tech: "React, Chart.js, OpenWeather API",
      status: "Completed",
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

        <h1 className="text-2xl font-bold mb-6">Projects</h1>

        <div className="space-y-6">
          <p className="text-sm">&gt; ls -la projects/</p>

          {projects.map((project, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{project.name}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    project.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm mb-2">{project.description}</p>
              <p className="text-xs text-gray-600">Tech: {project.tech}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} />
    </div>
  )
}
