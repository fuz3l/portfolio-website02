import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import MobileNavigation from "@/components/mobile-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio - Creative Developer",
  description: "A beautiful portfolio showcasing creative work and projects",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
            <Navigation />
            <main className="pb-20 md:pb-0">{children}</main>
            <MobileNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
