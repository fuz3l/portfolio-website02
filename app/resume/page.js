"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Resume() {
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

        <h1 className="text-2xl font-bold mb-6">Resume</h1>

        <div className="space-y-6 text-sm">
          <div>
            <p className="mb-4">{">"} cat resume.txt</p>

            <div className="space-y-6">
              <section>
                <h2 className="font-bold text-lg mb-2">EXPERIENCE</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Senior Full Stack Developer</h3>
                    <p className="text-gray-600">TechCorp Inc. | 2022 - Present</p>
                    <div className="mt-2 space-y-1 ml-4">
                      <p>Led development of 3 major web applications</p>
                      <p>Improved system performance by 40%</p>
                      <p>Mentored junior developers</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold">Frontend Developer</h3>
                    <p className="text-gray-600">WebStudio | 2020 - 2022</p>
                    <div className="mt-2 space-y-1 ml-4">
                      <p>Built responsive web applications using React</p>
                      <p>Collaborated with design team on UI/UX</p>
                      <p>Implemented modern CSS frameworks</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-lg mb-2">EDUCATION</h2>
                <div>
                  <h3 className="font-semibold">Bachelor of Computer Science</h3>
                  <p className="text-gray-600">University of Technology | 2016 - 2020</p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-lg mb-2">SKILLS</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Frontend</h4>
                    <p>React, Next.js, Vue.js, HTML/CSS, JavaScript</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Backend</h4>
                    <p>Node.js, Python, Express, FastAPI</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Database</h4>
                    <p>MongoDB, PostgreSQL, Redis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tools</h4>
                    <p>Git, Docker, AWS, Vercel</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-8 p-4 border border-gray-300 rounded">
            <a
              href="/resume.pdf"
              download
              className="text-blue-600 hover:text-blue-800 hover:underline hover:scale-105 transition-all duration-200 inline-block"
            >
              📄 Download PDF Resume
            </a>
          </div>
        </div>
      </main>
      <Footer timeSpent={formatTime(timeSpent)} visitorCount={visitorCount} />
    </div>
  )
}
