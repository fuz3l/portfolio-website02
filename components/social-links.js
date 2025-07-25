"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-600" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email", color: "hover:text-red-500" },
]

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
            aria-label={social.label}
          >
            <Icon size={20} />
          </motion.a>
        )
      })}
    </div>
  )
}
