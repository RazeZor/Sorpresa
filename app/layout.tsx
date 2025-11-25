import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" })

export const metadata: Metadata = {
  title: "✨ Una Sorpresa Mágica Para Ti ✨",
  description: "Algo especial te espera...",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${dancing.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
