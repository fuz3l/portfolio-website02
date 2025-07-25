"use client"

import { useState, useEffect } from "react"

export function useRealVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(10247)
  const [isLoading, setIsLoading] = useState(true)
  const [isNewVisitor, setIsNewVisitor] = useState(false)

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        setIsLoading(true)

        // First, try to register this visitor
        const response = await fetch("/api/visitors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })

        if (response.ok) {
          const data = await response.json()
          setVisitorCount(data.totalVisitors)
          setIsNewVisitor(data.isNewVisitor)

          if (data.isNewVisitor) {
            console.log("Welcome! You are visitor #" + data.totalVisitors)
          } else {
            console.log("Welcome back! Current visitor count: " + data.totalVisitors)
          }
        } else {
          // Fallback: just get the current count
          const fallbackResponse = await fetch("/api/visitors")
          if (fallbackResponse.ok) {
            const data = await fallbackResponse.json()
            setVisitorCount(data.totalVisitors)
          }
        }
      } catch (error) {
        console.error("Error tracking visitor:", error)
        // Fallback to a default number if API fails
        setVisitorCount(10247)
      } finally {
        setIsLoading(false)
      }
    }

    // Add a small delay to ensure the component is mounted
    const timer = setTimeout(trackVisitor, 100)

    return () => clearTimeout(timer)
  }, [])

  return { visitorCount, isLoading, isNewVisitor }
}
