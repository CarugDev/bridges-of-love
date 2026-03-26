import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { FoundingFamilies } from "@/components/sections/founding-families"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WhyUs } from "@/components/sections/why-us"
import { ForWho } from "@/components/sections/for-who"
import { Testimonials } from "@/components/sections/testimonials"
import { Footer } from "@/components/layout/footer"

const Divider = () => (
  <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(196,149,106,0.2), transparent)" }} />
)

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Divider />
        <div id="founding-families">
          <FoundingFamilies />
        </div>
        <Divider />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Divider />
        <div id="why-us">
          <WhyUs />
        </div>
        <Divider />
        <div id="for-caregivers" />
        <div id="for-families">
          <ForWho />
        </div>
        <Divider />
        <div id="testimonials">
          <Testimonials />
        </div>
        {/* Sections added on Days 4 & 5: Features,
            Certifications, Pricing, FAQ */}
      </main>
      <Footer />
    </>
  )
}
