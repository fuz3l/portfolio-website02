"use client"

import { useState, useRef, useEffect } from "react"
import { Music, MessageCircle, Pause } from "lucide-react"

export default function Footer({ timeSpent, visitorCount, isLoading }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio("/music.mp3")
    audioRef.current.loop = true

    // Handle audio errors gracefully
    audioRef.current.addEventListener("error", (e) => {
      console.log("Audio file not found - music player disabled")
    })

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (error) {
      console.log("Audio play failed - this is normal in preview mode")
      // Still show visual feedback even if audio fails
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <footer className="border-t border-gray-300 bg-white py-4 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 text-sm">
          {/* Left side - Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMusic}
              className={`p-2 rounded hover:bg-gray-100 transition-colors ${
                isPlaying ? "text-green-600" : "text-gray-600"
              }`}
              title={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? <Pause size={20} /> : <Music size={20} />}
            </button>

            <button
              className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-600"
              title="Chat (coming soon)"
            >
              <MessageCircle size={20} />
            </button>
          </div>

          {/* Center - Visitor count and time */}
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4 text-center">
            <span>👤 Visitor #{isLoading ? "..." : visitorCount.toLocaleString()}</span>
            <span>⏱ Time spent: {timeSpent}</span>
          </div>

          {/* Right side - Made by */}
          <div className="text-center md:text-right">
            <span>Made by [Your Name] 😊</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
