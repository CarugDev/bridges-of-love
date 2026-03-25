import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { FoundingFamilies } from "@/components/sections/founding-families"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FoundingFamilies />
        {/* Sections added on Days 4 & 5: How It Works, Features,
            Certifications, Pricing, Testimonials, FAQ, Footer */}
      </main>
    </>
  )
}
