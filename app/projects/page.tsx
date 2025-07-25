"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "from-blue-500 to-cyan-500",
    icon: Globe,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Firebase", "TypeScript"],
    color: "from-purple-500 to-pink-500",
    icon: Smartphone,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "AI-Powered Dashboard",
    description:
      "Analytics dashboard with AI-powered insights, real-time data visualization, and predictive analytics capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    color: "from-green-500 to-emerald-500",
    icon: Zap,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description:
      "Full-featured social media platform with real-time messaging, content sharing, and community features.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    color: "from-red-500 to-orange-500",
    icon: Globe,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "Collaborative task management tool with team features, time tracking, and project analytics.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Angular", "NestJS", "GraphQL", "Redis"],
    color: "from-indigo-500 to-purple-500",
    icon: Zap,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and progress analytics.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Flutter", "Django", "SQLite", "Charts"],
    color: "from-teal-500 to-blue-500",
    icon: Smartphone,
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen px-4 pt-24 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      <Icon size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 border border-white/20 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white rounded-xl`}
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 dark:border-white/10 hover:bg-white/10 dark:hover:bg-black/10 rounded-xl"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
