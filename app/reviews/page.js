"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Reviews() {
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

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      review:
        "Excellent work on our web application. Clean code, timely delivery, and great communication throughout the project.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "CTO",
      company: "StartupXYZ",
      review: "Built our entire backend infrastructure. Scalable, secure, and well-documented. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Designer",
      company: "Creative Agency",
      review: "Perfect implementation of our designs. Attention to detail and pixel-perfect execution.",
      rating: 5,
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

        <h1 className="text-2xl font-bold mb-6">Reviews</h1>

        <div className="space-y-6">
          <p className="text-sm">{">"} cat client_reviews.json</p>

          {reviews.map((review, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold">{review.name}</h3>
                  <p className="text-sm text-gray-600">
                    {review.role} at {review.company}
                  </p>
                </div>
                <div className="text-yellow-500">{"★".repeat(review.rating)}</div>
              </div>
              <p className="text-sm italic">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 border border-gray-300 rounded">
          <p className="text-sm">{">"} echo "Want to work together? Let's create something amazing!"</p>
        </div>
      </main>
      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} />
    </div>
  )
}
