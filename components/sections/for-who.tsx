"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BadgeCheck, Globe, CheckCircle2 } from "lucide-react"

const familyBullets = [
  "Pre-screened and verified candidates",
  "Professionally trained caregivers",
  "Cultural enrichment for your children",
  "Dedicated support throughout",
]

const caregiverBullets = [
  "Live and work in the United States",
  "Become part of a loving family",
  "Gain valuable professional experience",
  "Cultural exchange and personal growth",
]

export function ForWho() {
  return (
    <section className="w-full bg-white py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <motion.div
          className="mb-[60px] flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            className="text-4xl font-bold text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Who is Bridges of Love for?
          </h2>
          <p
            className="mt-3 max-w-[650px] text-base text-gray-500"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Whether you&apos;re a family seeking trusted care or a caregiver
            ready to make a difference — we have a place for you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* For Families */}
          <motion.div
            className="flex flex-1 cursor-default flex-col rounded-[20px] p-12"
            style={{
              background: "linear-gradient(135deg, #EBF5FF 0%, #F0F8FF 100%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 8px 40px rgba(0,0,0,0.11)",
            }}
          >
            {/* Top row */}
            <div className="mb-5 flex items-center gap-4">
              <BadgeCheck size={32} className="shrink-0 text-[#1B8FC4]" />
              <h3
                className="text-[28px] font-bold text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                For Families
              </h3>
            </div>

            {/* Description */}
            <p
              className="mb-7 text-[15px] leading-relaxed text-gray-500"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Find the perfect caregiver who will bring warmth, reliability, and
              cultural richness into your home and into your children&apos;s
              lives.
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {familyBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-[#1B8FC4]" />
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <button
                className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#1B8FC4",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Find a Caregiver
              </button>
            </div>
          </motion.div>

          {/* For Caregivers */}
          <motion.div
            className="flex flex-1 cursor-default flex-col rounded-[20px] p-12"
            style={{
              background: "linear-gradient(135deg, #FFF8F0 0%, #FFF3E8 100%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 8px 40px rgba(0,0,0,0.11)",
            }}
          >
            {/* Top row */}
            <div className="mb-5 flex items-center gap-4">
              <Globe size={32} className="shrink-0 text-[#C4956A]" />
              <h3
                className="text-[28px] font-bold text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                For Caregivers
              </h3>
            </div>

            {/* Description */}
            <p
              className="mb-7 text-[15px] leading-relaxed text-gray-500"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Join our network of certified caregivers and embark on a life-changing
              journey — professionally, personally, and culturally.
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {caregiverBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="shrink-0 text-[#C4956A]" />
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/for-caregivers"
                className="group inline-block rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:text-white"
                style={{
                  border: "1.5px solid #C4956A",
                  color: "#C4956A",
                  fontFamily: "var(--font-poppins)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "#C4956A"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "white"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                    "transparent"
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "#C4956A"
                }}
              >
                Apply as a Caregiver
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
