import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

// variable: "--font-sans" exposes the font as a CSS custom property
// so Tailwind v4's `font-sans` utility (which maps to var(--font-sans)) works correctly
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Bridges of Love — Certified International Caregivers",
  description:
    "Connect your family with trained, verified, and certified international caregivers. Every caregiver on Bridges of Love is personally reviewed.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
