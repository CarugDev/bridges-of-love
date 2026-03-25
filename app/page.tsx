import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Sections added on Days 4 & 5: How It Works, Features,
            Certifications, Pricing, Testimonials, FAQ, Footer */}
      </main>
    </>
  )
}
