import "./globals.css"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  title: "Minimal Portfolio",
  description: "A minimal terminal-style portfolio website",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono bg-white text-black min-h-screen`}>{children}</body>
    </html>
  )
}
