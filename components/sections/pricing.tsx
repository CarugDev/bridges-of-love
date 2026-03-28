"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Lock } from "lucide-react"

const TOTAL_SPOTS = 25
const SPOTS_TAKEN = 18

const features = [
  "Full access to caregiver directory",
  "Advanced search & filters",
  "View complete profiles & certifications",
  "Direct contact with caregivers",
  "Dedicated support team",
]

const MONTHLY_PRICE = "--"
const TWO_YEAR_PRICE = "--"
const FOUNDING_MONTHLY = "--"
const FOUNDING_TWO_YEAR = "--"
const FOUNDING_ORIGINAL = "--"

function FeatureRow({ text, light }: { text: string; light?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: light ? "rgba(255,255,255,0.25)" : "rgba(27,143,196,0.12)" }}
      >
        <Check
          size={11}
          strokeWidth={3}
          style={{ color: light ? "#ffffff" : "#1B8FC4" }}
        />
      </span>
      <span
        className="text-[14px] leading-relaxed"
        style={{
          fontFamily: "var(--font-poppins)",
          color: light ? "rgba(255,255,255,0.88)" : "#4A5568",
        }}
      >
        {text}
      </span>
    </li>
  )
}

function PulseKeyframes() {
  return (
    <style>{`
      @keyframes pulse-ring {
        0%   { box-shadow: 0 0 0 0px rgba(27,143,196,0.45); }
        70%  { box-shadow: 0 0 0 10px rgba(27,143,196,0); }
        100% { box-shadow: 0 0 0 0px rgba(27,143,196,0); }
      }
      @keyframes float-card {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-8px); }
      }
      .pulse-border {
        animation: pulse-ring 2s ease-out infinite;
      }
      .float-card {
        animation: float-card 3.5s ease-in-out infinite;
      }
    `}</style>
  )
}

export function Pricing() {
  const [isTwoYear, setIsTwoYear] = useState(false)
  const [spotsLeft, setSpotsLeft] = useState(TOTAL_SPOTS)

  // Animate counter down on mount
  useEffect(() => {
    const target = TOTAL_SPOTS - SPOTS_TAKEN
    let current = TOTAL_SPOTS
    const step = () => {
      current -= 1
      setSpotsLeft(current)
      if (current > target) setTimeout(step, 35)
    }
    const t = setTimeout(step, 800)
    return () => clearTimeout(t)
  }, [])

  const progressPct = ((TOTAL_SPOTS - spotsLeft) / TOTAL_SPOTS) * 100

  const monthlyLabel = isTwoYear ? `$${TWO_YEAR_PRICE}/mo` : `$${MONTHLY_PRICE}/mo`
  const twoYearLabel = isTwoYear ? `$${TWO_YEAR_PRICE}/mo` : `$${MONTHLY_PRICE}/mo`
  const foundingLabel = isTwoYear ? `$${FOUNDING_TWO_YEAR}/mo` : `$${FOUNDING_MONTHLY}/mo`

  return (
    <>
      <PulseKeyframes />
      <section
        className="w-full"
        style={{ backgroundColor: "#FFFFFF", paddingTop: 100, paddingBottom: 100 }}
      >
        <div className="mx-auto max-w-[1200px] px-6">
          {/* Header */}
          <div className="mb-12 flex flex-col items-center text-center">
            <motion.div
              className="mb-4 inline-flex items-center rounded-full px-4 py-1"
              style={{
                background: "rgba(196,149,106,0.12)",
                border: "1px solid rgba(196,149,106,0.3)",
                color: "#C4956A",
                fontSize: 13,
                fontFamily: "var(--font-poppins)",
                fontWeight: 500,
              }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Simple Pricing
            </motion.div>

            <motion.h2
              className="text-[42px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-playfair)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            >
              Find Your Perfect Plan
            </motion.h2>

            <motion.p
              className="mt-3 max-w-[520px] text-base text-gray-500"
              style={{ fontFamily: "var(--font-poppins)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            >
              Start with our exclusive founding member pricing before spots run out
            </motion.p>

            {/* Toggle */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
            >
              <span
                className="text-sm font-medium"
                style={{
                  fontFamily: "var(--font-poppins)",
                  color: isTwoYear ? "#9CA3AF" : "#1a1a1a",
                }}
              >
                Monthly
              </span>

              {/* Switch */}
              <button
                role="switch"
                aria-checked={isTwoYear}
                onClick={() => setIsTwoYear((v) => !v)}
                className="relative flex h-7 w-12 items-center rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: isTwoYear ? "#1B8FC4" : "#D1D5DB",
                  padding: "2px",
                }}
              >
                <motion.span
                  className="block h-5 w-5 rounded-full bg-white shadow"
                  animate={{ x: isTwoYear ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>

              <span
                className="text-sm font-medium"
                style={{
                  fontFamily: "var(--font-poppins)",
                  color: isTwoYear ? "#1a1a1a" : "#9CA3AF",
                }}
              >
                2-Year
              </span>

              <AnimatePresence>
                {isTwoYear && (
                  <motion.span
                    className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                    style={{
                      backgroundColor: "#D1FAE5",
                      color: "#065F46",
                      fontFamily: "var(--font-poppins)",
                    }}
                    initial={{ opacity: 0, scale: 0.7, x: -4 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.7, x: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Save 20%
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* ── Card 1: Founding Member (highlighted) ── */}
            <motion.div
              className="pulse-border float-card relative flex flex-col rounded-[20px] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
                padding: "32px 28px 28px",
              }}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0 }}
            >
              {/* Spots badge */}
              <div className="mb-5 self-start">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#1570A6",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  🔥 Only 25 spots
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-[24px] font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Founding Member
              </h3>

              {/* Original price strikethrough */}
              <p
                className="mt-3 text-sm line-through"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                $--/mo
              </p>

              {/* Price */}
              <p
                className="mt-1 text-[48px] font-bold leading-none text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {foundingLabel}
              </p>
              <p
                className="mt-1 text-xs"
                style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-poppins)" }}
              >
                {isTwoYear ? "billed every 2 years" : "billed monthly"}
              </p>

              {/* Divider */}
              <div
                className="my-6"
                style={{ height: 1, backgroundColor: "rgba(255,255,255,0.2)" }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {features.map((f) => (
                  <FeatureRow key={f} text={f} light />
                ))}
              </ul>

              {/* CTA */}
              <button
                className="mt-8 w-full rounded-xl py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#1570A6",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Claim Your Spot →
              </button>

              {/* Live counter */}
              <div className="mt-5">
                <p
                  className="mb-2 text-center text-xs"
                  style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-poppins)" }}
                >
                  {spotsLeft} of {TOTAL_SPOTS} spots remaining
                </p>
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* ── Card 2: Monthly ── */}
            <motion.div
              className="relative flex flex-col rounded-[20px] overflow-hidden"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                padding: "32px 28px 28px",
              }}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.12 }}
            >
              <h3
                className="text-[24px] font-bold text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Monthly
              </h3>

              <p
                className="mt-4 text-[48px] font-bold leading-none text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {monthlyLabel}
              </p>
              <p
                className="mt-1 text-xs text-gray-400"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {isTwoYear ? "billed every 2 years" : "billed monthly"}
              </p>

              <div
                className="my-6"
                style={{ height: 1, backgroundColor: "#F3F4F6" }}
              />

              <ul className="flex flex-col gap-3 flex-1">
                {features.map((f) => (
                  <FeatureRow key={f} text={f} />
                ))}
              </ul>

              <button
                className="mt-8 w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#1B8FC4",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Get Started
              </button>
            </motion.div>

            {/* ── Card 3: 2-Year ── */}
            <motion.div
              className="relative flex flex-col rounded-[20px] overflow-hidden"
              style={{
                backgroundColor: "#F8F8F6",
                padding: "32px 28px 28px",
              }}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.24 }}
            >
              {/* Most Popular badge */}
              <div className="mb-5 self-start">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "#D1FAE5",
                    color: "#065F46",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  Most Popular
                </span>
              </div>

              <h3
                className="text-[24px] font-bold text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                2-Year Plan
              </h3>

              <div className="mt-4 flex items-end gap-2">
                <p
                  className="text-[48px] font-bold leading-none text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {twoYearLabel}
                </p>
                <AnimatePresence>
                  {isTwoYear && (
                    <motion.span
                      className="mb-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold"
                      style={{
                        backgroundColor: "#D1FAE5",
                        color: "#065F46",
                        fontFamily: "var(--font-poppins)",
                      }}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.2 }}
                    >
                      Save 20%
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <p
                className="mt-1 text-xs text-gray-400"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {isTwoYear ? "billed every 2 years" : "billed monthly"}
              </p>

              <div
                className="my-6"
                style={{ height: 1, backgroundColor: "#EBEBEB" }}
              />

              <ul className="flex flex-col gap-3 flex-1">
                {features.map((f) => (
                  <FeatureRow key={f} text={f} />
                ))}
              </ul>

              <button
                className="mt-8 w-full rounded-xl py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#1a1a1a",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Get Started
              </button>
            </motion.div>
          </div>

          {/* Trust line */}
          <motion.p
            className="mt-10 text-center text-sm text-gray-400"
            style={{ fontFamily: "var(--font-poppins)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <Lock
              size={13}
              className="mr-1 inline-block align-middle"
              style={{ color: "#9CA3AF" }}
            />
            Secure payment · Cancel anytime · US invoicing via Stripe
          </motion.p>
        </div>
      </section>
    </>
  )
}
