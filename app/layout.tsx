import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Onpoint Photography Ug - Professional Photography Services",
  description:
    "Professional photography studio specializing in wedding, portrait, and event photography in Uganda. Creating timeless memories with artistic vision and professional excellence.",
  keywords:
    "photography, wedding photography, portrait photography, event photography, Uganda, Gulu, professional photographer",
  authors: [{ name: "Onpoint Photography Ug" }],
  openGraph: {
    title: "Onpoint Photography Ug - Professional Photography Services",
    description: "Professional photography studio specializing in wedding, portrait, and event photography in Uganda.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
