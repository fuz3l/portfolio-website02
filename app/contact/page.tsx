"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SocialLinks from "@/components/social-links"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
    color: "from-blue-500 to-cyan-500",
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen px-4 pt-24 md:pt-20 pb-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <MessageCircle className="mr-3 text-purple-500" />
                Let's Talk
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                specific project in mind or just want to chat about possibilities, I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center p-4 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 group"
                    >
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Me</h3>
                <SocialLinks />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Send a Message</h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <Input
                    type="text"
                    placeholder="John"
                    className="backdrop-blur-sm bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10 rounded-xl focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    className="backdrop-blur-sm bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10 rounded-xl focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="backdrop-blur-sm bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10 rounded-xl focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <Input
                  type="text"
                  placeholder="Project Collaboration"
                  className="backdrop-blur-sm bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10 rounded-xl focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <Textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="backdrop-blur-sm bg-white/50 dark:bg-black/50 border-white/20 dark:border-white/10 rounded-xl focus:ring-purple-500 focus:border-purple-500 resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
