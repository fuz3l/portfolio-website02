"use client"

import { useState, useEffect } from "react"

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    const initVisitorCount = () => {
      // Check if we're in the browser
      if (typeof window === "undefined") return

      let count = localStorage.getItem("visitorCount")
      const lastVisit = localStorage.getItem("lastVisit")
      const now = Date.now()

      if (!count) {
        // First time visitor - generate random starting number
        count = Math.floor(Math.random() * 5000) + 10000
        localStorage.setItem("visitorCount", count.toString())
        localStorage.setItem("lastVisit", now.toString())
        console.log("New visitor! Starting count:", count)
      } else {
        // Check if it's been more than 1 minute since last visit (for testing)
        // In production, you might want to make this longer (like 1 hour or 1 day)
        const timeSinceLastVisit = now - Number.parseInt(lastVisit || "0")
        const oneMinute = 60 * 1000 // 1 minute in milliseconds

        if (timeSinceLastVisit > oneMinute) {
          // Increment count for "new" visitor
          const currentCount = Number.parseInt(count)
          const increment = Math.floor(Math.random() * 3) + 1
          count = currentCount + increment
          localStorage.setItem("visitorCount", count.toString())
          localStorage.setItem("lastVisit", now.toString())
          console.log("New session! Updated count:", count)
        } else {
          console.log("Same session, count unchanged:", count)
        }
      }

      setVisitorCount(Number.parseInt(count))
    }

    initVisitorCount()
  }, [])

  return visitorCount
}
