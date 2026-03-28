"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Baby,
  Heart,
  Globe,
  Shield,
  CheckCircle2,
  GraduationCap,
  BadgeCheck,
  Home,
} from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "500+", label: "Caregivers Placed" },
  { value: "40+",  label: "Countries" },
  { value: "100%", label: "Trained & Certified" },
]

const offerings = [
  {
    icon: GraduationCap,
    title: "Full Professional Training",
    description:
      "Complete our comprehensive certification program covering childcare, first aid, safety protocols, and cultural adaptation. All at no cost to you.",
  },
  {
    icon: BadgeCheck,
    title: "Recognized Certifications",
    description:
      "Earn certifications from Bridges of Love and our partner institutions. Your credentials will be verified and displayed on your profile.",
  },
  {
    icon: Home,
    title: "Placement with Verified Families",
    description:
      "We match you exclusively with pre-screened American families who are ready to welcome a certified caregiver into their home.",
  },
]

const trainingModules = [
  {
    number: "01",
    icon: Baby,
    title: "Childcare Fundamentals",
    description:
      "Child development, age-appropriate activities, nutrition, and daily care routines.",
  },
  {
    number: "02",
    icon: Heart,
    title: "First Aid & CPR",
    description:
      "Emergency response, CPR certification, and child safety protocols.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Cultural Adaptation",
    description:
      "Understanding American family dynamics, communication styles, and cultural expectations.",
  },
  {
    number: "04",
    icon: Shield,
    title: "Professional Standards",
    description:
      "Privacy, boundaries, professional conduct, and family relationship management.",
  },
]

const requirements = [
  "Female, ages 18–30",
  "Non-smoker",
  "No criminal record",
  "Genuine passion for working with children",
  "Willingness to complete full training program",
  "Basic English communication skills",
]

const applicationSteps = [
  "Submit your application (free)",
  "Interview with our team",
  "Complete training & certification",
  "Get matched with a family",
  "Begin your experience",
]

// ─── Shared components ────────────────────────────────────────────────────────

function GoldenBadge({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </motion.div>
  )
}

function SectionTitle({
  children,
  delay = 0.12,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.h2
      className="text-[42px] font-bold text-[#1a1a1a]"
      style={{ fontFamily: "var(--font-playfair)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.h2>
  )
}

function SectionSubtitle({
  children,
  maxWidth = 580,
}: {
  children: React.ReactNode
  maxWidth?: number
}) {
  return (
    <motion.p
      className="mt-3 text-base text-gray-500"
      style={{ fontFamily: "var(--font-poppins)", maxWidth }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
    >
      {children}
    </motion.p>
  )
}

// ─── Section 1 — Hero ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
        paddingTop: 80,
        paddingBottom: 100,
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -52 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
        >
          {/* Badge */}
          <span
            className="mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium"
            style={{
              backgroundColor: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#ffffff",
              fontFamily: "var(--font-poppins)",
            }}
          >
            Join Our Network
          </span>

          {/* Title */}
          <h1
            className="text-[52px] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Become a Certified Caregiver and Change a Family&apos;s Life
          </h1>

          {/* Subtitle */}
          <p
            className="mt-5 max-w-[480px] text-[16px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-poppins)" }}
          >
            We train you, certify you, and connect you with loving American families.
            No experience required — just passion for caring.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#apply"
              className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#1570A6",
                fontFamily: "var(--font-poppins)",
              }}
            >
              Apply Now — It&apos;s Free
            </Link>
            <Link
              href="#requirements"
              className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
              style={{
                border: "1.5px solid rgba(255,255,255,0.7)",
                color: "#ffffff",
                fontFamily: "var(--font-poppins)",
              }}
            >
              See Requirements
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap items-center">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className="px-5 first:pl-0">
                  <p
                    className="text-[22px] font-bold text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.72)", fontFamily: "var(--font-poppins)" }}
                  >
                    {s.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div
                    className="h-10 w-px"
                    style={{ backgroundColor: "#C4956A", opacity: 0.55 }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          className="relative hidden overflow-hidden rounded-[24px] lg:block"
          style={{ height: 500, boxShadow: "0 24px 64px rgba(0,0,0,0.28)" }}
          initial={{ opacity: 0, x: 52 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
        >
          <Image
            src="/caregiver-hero.jpg"
            alt="Smiling caregiver embracing a young child in a warm family home"
            fill
            className="object-cover"
            style={{ borderRadius: 16 }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 55%, rgba(21,112,166,0.35) 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 2 — What We Offer ───────────────────────────────────────────────

function OfferingsSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#EDECEA", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <GoldenBadge>What You Get</GoldenBadge>
          <SectionTitle>Everything You Need to Succeed</SectionTitle>
          <SectionSubtitle maxWidth={600}>
            We don&apos;t just place you — we prepare you completely so you can thrive
            with any American family.
          </SectionSubtitle>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {offerings.map((o, i) => {
            const OfferingIcon = o.icon
            return (
            <motion.div
              key={o.title}
              className="relative overflow-hidden rounded-2xl bg-white"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                padding: "32px 28px",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.12 }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                borderColor: "rgba(196,149,106,0.3)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Golden top accent */}
              <div
                className="absolute left-0 right-0 top-0"
                style={{ height: 3, backgroundColor: "#C4956A", borderRadius: "16px 16px 0 0" }}
              />
              {/* Icon container */}
              <div
                className="flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #BFDFEF, #D4EEF7)",
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                }}
              >
                <OfferingIcon size={28} style={{ color: "#1B8FC4" }} />
              </div>
              <h3
                className="mt-4 text-[18px] font-semibold text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {o.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-[#6B7280]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {o.description}
              </p>
            </motion.div>
          )})}
        </div>

        {/* Full-width training image */}
        <motion.div
          className="relative mt-10 w-full overflow-hidden"
          style={{ height: 400, borderRadius: 16 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/caregiver-training.jpg"
            alt="Caregivers participating in a professional training and certification session"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(27,143,196,0.3), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 3 — Training Program ────────────────────────────────────────────

function TrainingSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FFFFFF", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <GoldenBadge>Our Training</GoldenBadge>
          <SectionTitle>World-Class Training — Fully Covered by Us</SectionTitle>
          <SectionSubtitle maxWidth={640}>
            Before you meet any family, you complete our rigorous certification program.
            This is what makes Bridges of Love caregivers different.
          </SectionSubtitle>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainingModules.map((mod, i) => {
            const Icon = mod.icon
            return (
              <motion.div
                key={mod.title}
                className="relative overflow-hidden rounded-2xl"
                style={{
                  backgroundColor: "#F0EEEB",
                  padding: "36px 28px",
                  border: "1px solid rgba(196,149,106,0.15)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: i * 0.12,
                }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(196,149,106,0.4)",
                  boxShadow: "0 16px 40px rgba(196,149,106,0.15)",
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div
                    className="flex shrink-0 items-center justify-center rounded-[10px]"
                    style={{
                      background: "linear-gradient(135deg, #BFDFEF 0%, #D4EEF7 100%)",
                      width: 48,
                      height: 48,
                      boxShadow: "inset 0 1px 3px rgba(43,125,161,0.15)",
                    }}
                  >
                    <Icon size={22} className="text-[#2B7DA1]" />
                  </div>

                  {/* Number */}
                  <div className="relative flex shrink-0 items-center justify-center">
                    <div
                      className="absolute"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "rgba(196,149,106,0.1)",
                      }}
                    />
                    <span
                      className="relative text-[32px] font-bold leading-none"
                      style={{ color: "#C4956A", fontFamily: "var(--font-poppins)" }}
                    >
                      {mod.number}
                    </span>
                  </div>

                  {/* Dashed line */}
                  <div
                    className="flex-1"
                    style={{ borderTop: "2px dashed rgba(196,149,106,0.4)" }}
                  />
                </div>

                <h3
                  className="mt-5 text-[17px] font-semibold text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {mod.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-[#6B7280]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {mod.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Free training callout */}
        <motion.div
          className="mt-10 rounded-2xl px-8 py-6 text-center"
          style={{
            background: "linear-gradient(135deg, #F5E6D0 0%, #EDD9B8 100%)",
            border: "1px solid rgba(196,149,106,0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <p
            className="text-[15px] font-medium text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            All training is provided{" "}
            <span style={{ color: "#C4956A", fontWeight: 700 }}>FREE of charge</span>.
            You invest your time and commitment — we invest in your future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 4 — Requirements ─────────────────────────────────────────────────

function RequirementsSection() {
  return (
    <section
      id="requirements"
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #F5E6D0 0%, #EDD9B8 100%)",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <GoldenBadge>Requirements</GoldenBadge>
          <SectionTitle>Who Can Apply?</SectionTitle>
          <SectionSubtitle maxWidth={560}>
            We welcome candidates from all backgrounds. What matters most is your
            dedication and love for children.
          </SectionSubtitle>
        </div>

        {/* Top — full-width image */}
        <motion.div
          className="relative w-full overflow-hidden"
          style={{ height: 350, borderRadius: 16, marginBottom: 48 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/caregiver-family.jpg"
            alt="International caregiver spending quality time with an American host family"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Bottom — two equal columns */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left — requirements list */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
          >
            <h3
              className="mb-5 text-[22px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What We Look For
            </h3>
            <div className="flex flex-col gap-[10px]">
              {requirements.map((req) => (
                <div
                  key={req}
                  className="flex items-center gap-3 bg-white"
                  style={{
                    padding: "14px 20px",
                    borderRadius: 10,
                    border: "1px solid rgba(27,143,196,0.15)",
                  }}
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={2}
                    className="shrink-0"
                    style={{ color: "#1B8FC4" }}
                  />
                  <span
                    className="text-[14px] font-medium text-[#1a1a1a]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {req}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — application process card */}
          <motion.div
            className="rounded-[16px] p-8"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(196,149,106,0.3)",
              boxShadow: "0 4px 24px rgba(196,149,106,0.08)",
            }}
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
          >
            <h3
              className="mb-8 text-[22px] font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Application Process
            </h3>
            <ol className="flex flex-col">
              {applicationSteps.map((step, i) => (
                <li key={step} className="relative flex items-start gap-4 pb-7 last:pb-0">
                  {/* Dashed vertical connector */}
                  {i < applicationSteps.length - 1 && (
                    <div
                      className="absolute left-[18px] top-9 bottom-0 w-px"
                      style={{ borderLeft: "2px dashed rgba(196,149,106,0.45)" }}
                    />
                  )}
                  {/* Number circle */}
                  <span
                    className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
                      fontFamily: "var(--font-poppins)",
                    }}
                  >
                    {i + 1}
                  </span>
                  {/* Text */}
                  <div className="pt-1">
                    <span
                      className="block text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: "#C4956A", fontFamily: "var(--font-poppins)" }}
                    >
                      Step {i + 1}
                    </span>
                    <span
                      className="mt-0.5 block text-[14px] font-medium text-[#1a1a1a]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {step}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 5 — Testimonial ──────────────────────────────────────────────────

function TestimonialSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#1A2332", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Decorative quote mark */}
          <span
            className="pointer-events-none select-none leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 96,
              color: "rgba(196,149,106,0.25)",
              lineHeight: 0.8,
              display: "block",
              marginBottom: 8,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote */}
          <p
            className="text-[26px] font-bold italic leading-[1.5] text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bridges of Love didn&apos;t just find me a job — they gave me a family and a
            career I am proud of.
          </p>

          {/* Closing quote */}
          <span
            className="pointer-events-none select-none leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 96,
              color: "rgba(196,149,106,0.25)",
              lineHeight: 0.6,
              display: "block",
              marginTop: 8,
            }}
            aria-hidden="true"
          >
            &rdquo;
          </span>

          {/* Avatar + name */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div
              className="relative overflow-hidden"
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "3px solid #C4956A",
                flexShrink: 0,
              }}
            >
              <Image
                src="/caregiver-testimonial.jpg"
                alt="Ana Beatriz Costa, certified caregiver placed in California"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p
                className="text-[17px] font-semibold"
                style={{ color: "#C4956A", fontFamily: "var(--font-playfair)" }}
              >
                Ana Beatriz Costa
              </p>
              <p
                className="mt-0.5 text-sm"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-poppins)" }}
              >
                Certified Caregiver — placed in California
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 6 — Final CTA ────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      id="apply"
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div className="mx-auto flex max-w-[700px] flex-col items-center px-6 text-center">
        <motion.h2
          className="text-[42px] font-bold text-white"
          style={{ fontFamily: "var(--font-playfair)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Ready to Start Your Journey?
        </motion.h2>

        <motion.p
          className="mt-4 text-[16px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-poppins)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        >
          Apply today — it&apos;s completely free. We will train you, certify you, and
          find you the perfect family match.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.24 }}
        >
          <Link
            href="#"
            className="inline-flex items-center rounded-xl px-10 py-4 text-base font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#1570A6",
              fontFamily: "var(--font-poppins)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            Apply Now — It&apos;s Free
          </Link>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-poppins)" }}
          >
            No fees. No hidden costs. Just opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ForCaregiversPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OfferingsSection />
        <TrainingSection />
        <RequirementsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
