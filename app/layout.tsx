import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
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
      <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
