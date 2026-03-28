"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  CheckCircle2,
  BadgeCheck,
  GraduationCap,
  Shield,
  UserPlus,
  Search,
  Heart,
  Sparkles,
  Baby,
  Globe,
  Lock,
  Check,
} from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

// ─── Constants ────────────────────────────────────────────────────────────────

const TOTAL_SPOTS = 25
const SPOTS_TAKEN = 18

const trustBadges = [
  { icon: CheckCircle2, label: "100% Verified" },
  { icon: CheckCircle2, label: "Certified Training" },
  { icon: CheckCircle2, label: "Background Checked" },
]

const trustCards = [
  {
    icon: BadgeCheck,
    title: "Pre-Screened & Verified",
    description:
      "Every caregiver passes thorough background checks, document verification, and a personal interview before joining our network.",
  },
  {
    icon: GraduationCap,
    title: "Professionally Trained",
    description:
      "Our caregivers complete a comprehensive training program covering childcare, first aid, safety protocols, and cultural adaptation.",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description:
      "We don't disappear after placement. Our team provides continuous support to both families and caregivers throughout the experience.",
  },
]

const howItWorksSteps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Tell us about your family, your children, and what you are looking for in a caregiver.",
  },
  {
    number: "02",
    icon: Search,
    title: "Browse Certified Caregivers",
    description:
      "Explore profiles of pre-screened, certified caregivers with full transparency on their training.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Choose Your Match",
    description:
      "Save favorites, compare profiles, and reach out directly to caregivers who feel right for your family.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Welcome Them Home",
    description:
      "Our team guides you through the final steps to welcome your new caregiver.",
  },
]

const certifications = [
  {
    icon: Baby,
    title: "Childcare Fundamentals",
    description:
      "In-depth training on child development stages, age-appropriate activities, proper nutrition, sleep routines, and daily care practices. Caregivers graduate understanding how to nurture and support children at every age.",
    accent: "#1B8FC4",
    iconBg: "linear-gradient(135deg, #BFDFEF 0%, #D4EEF7 100%)",
    iconColor: "#1B8FC4",
  },
  {
    icon: Heart,
    title: "First Aid & CPR",
    description:
      "Certified first aid and infant/child CPR training, covering emergency response procedures, choking intervention, wound care, and crisis protocols — so your caregiver is always prepared to act.",
    accent: "#C4956A",
    iconBg: "linear-gradient(135deg, #F5E6D0 0%, #EDD9B8 100%)",
    iconColor: "#C4956A",
  },
  {
    icon: Globe,
    title: "Cultural Adaptation",
    description:
      "Structured preparation for understanding American family dynamics, household expectations, communication styles, and cultural norms — helping caregivers integrate naturally and confidently into your home.",
    accent: "#1B8FC4",
    iconBg: "linear-gradient(135deg, #BFDFEF 0%, #D4EEF7 100%)",
    iconColor: "#1B8FC4",
  },
  {
    icon: Shield,
    title: "Child Safety Protocols",
    description:
      "Comprehensive safety training covering home hazard awareness, online safety, emergency evacuation procedures, and child protection standards — ensuring your children are always in safe, responsible hands.",
    accent: "#C4956A",
    iconBg: "linear-gradient(135deg, #F5E6D0 0%, #EDD9B8 100%)",
    iconColor: "#C4956A",
  },
]

const testimonials = [
  {
    image: "/family-testimonial.jpg",
    initials: "ST",
    quote:
      "Finding Maria through Bridges of Love was the best decision we made for our family.",
    name: "Sarah & Michael Thompson",
    location: "California",
  },
  {
    image: "/family-testimonial.jpg",
    initials: "JC",
    quote:
      "Bridges of Love made the entire process smooth and gave us complete peace of mind.",
    name: "Jennifer & David Chen",
    location: "Texas",
  },
  {
    image: "/family-testimonial.jpg",
    initials: "RM",
    quote:
      "The certifications made all the difference. We knew exactly what we were getting.",
    name: "Robert & Lisa Martinez",
    location: "New York",
  },
]

const pricingBullets = [
  "Full directory access",
  "Complete profiles & certifications",
  "Direct caregiver contact",
  "Dedicated support",
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

function SectionTitle({ children, delay = 0.12 }: { children: React.ReactNode; delay?: number }) {
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

function SectionSubtitle({ children, maxWidth = 580 }: { children: React.ReactNode; maxWidth?: number }) {
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
        background: "linear-gradient(135deg, #F5E6D0 0%, #EDD9B8 60%, #E8D5B7 100%)",
        paddingTop: 80,
        paddingBottom: 100,
      }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
        >
          {/* Badge */}
          <span
            className="mb-6 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium"
            style={{
              background: "rgba(196,149,106,0.15)",
              border: "1px solid rgba(196,149,106,0.4)",
              color: "#C4956A",
              fontFamily: "var(--font-poppins)",
            }}
          >
            For American Families
          </span>

          <h1
            className="text-[52px] font-bold leading-[1.1] text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Find a Caregiver You Can Truly Trust
          </h1>

          <p
            className="mt-5 max-w-[500px] text-[16px] leading-relaxed text-[#4A5568]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Every caregiver on Bridges of Love is professionally trained, background-checked,
            and certified before meeting your family. No guesswork. Just confidence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#browse"
              className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1B8FC4", fontFamily: "var(--font-poppins)" }}
            >
              Browse Caregivers
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center rounded-xl px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-black/5"
              style={{
                border: "1.5px solid rgba(26,26,26,0.4)",
                color: "#1a1a1a",
                fontFamily: "var(--font-poppins)",
              }}
            >
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-4">
            {trustBadges.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="flex items-center gap-2">
                  <Icon size={16} style={{ color: "#1B8FC4" }} />
                  <span
                    className="text-sm font-medium text-[#374151]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {b.label}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          className="relative hidden overflow-hidden rounded-[16px] lg:block"
          style={{ height: 500, boxShadow: "0 24px 64px rgba(0,0,0,0.14)" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.2 }}
        >
          <Image
            src="/family-hero.jpg"
            alt="Happy American family with their trusted caregiver"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 2 — Why Trust Us ─────────────────────────────────────────────────

function TrustSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#EDECEA", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <GoldenBadge>Why Bridges of Love</GoldenBadge>
          <SectionTitle>Caregivers Who Are Ready From Day One</SectionTitle>
          <SectionSubtitle maxWidth={520}>
            We do the hard work so you don&apos;t have to.
          </SectionSubtitle>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {trustCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                className="relative overflow-hidden rounded-[16px] bg-white"
                style={{
                  padding: "32px 28px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.12 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                  borderColor: "rgba(27,143,196,0.2)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Blue top accent */}
                <div
                  className="absolute left-0 right-0 top-0"
                  style={{ height: 3, backgroundColor: "#1B8FC4", borderRadius: "16px 16px 0 0" }}
                />
                <div
                  className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[12px]"
                  style={{ background: "linear-gradient(135deg, #BFDFEF, #D4EEF7)" }}
                >
                  <Icon size={26} style={{ color: "#1B8FC4" }} />
                </div>
                <h3
                  className="text-[18px] font-semibold text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-[#6B7280]"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Full-width image below cards */}
        <motion.div
          className="relative w-full overflow-hidden rounded-[16px]"
          style={{ height: 380, marginTop: 48 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/family-caregiver.jpg"
            alt="Certified caregiver engaging warmly with children in a family home"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 3 — How It Works (timeline) ─────────────────────────────────────

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full"
      style={{ backgroundColor: "#FFFFFF", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-20 flex flex-col items-center text-center">
          <GoldenBadge>Simple Process</GoldenBadge>
          <SectionTitle>Find Your Perfect Caregiver in 4 Steps</SectionTitle>
        </div>

        {/* Timeline — desktop */}
        <div className="hidden lg:block">
          {/* Outer container gives room for above/below content */}
          <div className="relative" style={{ paddingTop: 140, paddingBottom: 140 }}>
            {/* Golden connecting line */}
            <div
              className="absolute left-0 right-0"
              style={{
                top: "50%",
                height: 3,
                background: "linear-gradient(90deg, #C4956A, #C4956A)",
                transform: "translateY(-50%)",
                opacity: 0.35,
              }}
            />

            {/* Steps row — circles sit on the line */}
            <div className="relative grid grid-cols-4">
              {howItWorksSteps.map((step, i) => {
                const Icon = step.icon
                const isAbove = i % 2 === 0 // steps 1 & 3 above, 2 & 4 below

                return (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: isAbove ? -30 : 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 90, damping: 16, delay: i * 0.14 }}
                  >
                    {/* Content ABOVE the line */}
                    <div
                      className="flex w-full flex-col items-center px-4 text-center"
                      style={{ height: 130, justifyContent: isAbove ? "flex-end" : "flex-start", paddingBottom: isAbove ? 20 : 0, paddingTop: isAbove ? 0 : 20 }}
                    >
                      {isAbove && (
                        <>
                          <h3
                            className="text-[18px] font-bold text-[#1a1a1a]"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="mt-1.5 text-[13px] leading-relaxed text-[#6B7280]"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Circle ON the line */}
                    <motion.div
                      className="relative z-10 flex shrink-0 items-center justify-center rounded-full text-white"
                      style={{
                        width: 56,
                        height: 56,
                        background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
                        boxShadow: "0 4px 20px rgba(27,143,196,0.4)",
                        fontSize: 18,
                        fontWeight: 700,
                        fontFamily: "var(--font-poppins)",
                      }}
                      whileHover={{ scale: 1.12, boxShadow: "0 6px 28px rgba(27,143,196,0.55)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {i + 1}
                    </motion.div>

                    {/* Icon tag below circle */}
                    <div
                      className="mt-3 flex items-center justify-center rounded-full"
                      style={{
                        width: 36,
                        height: 36,
                        backgroundColor: "rgba(27,143,196,0.1)",
                      }}
                    >
                      <Icon size={16} style={{ color: "#1B8FC4" }} />
                    </div>

                    {/* Content BELOW the line */}
                    <div
                      className="flex w-full flex-col items-center px-4 text-center"
                      style={{ height: 130, justifyContent: !isAbove ? "flex-start" : "flex-end", paddingTop: !isAbove ? 12 : 0 }}
                    >
                      {!isAbove && (
                        <>
                          <h3
                            className="text-[18px] font-bold text-[#1a1a1a]"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {step.title}
                          </h3>
                          <p
                            className="mt-1.5 text-[13px] leading-relaxed text-[#6B7280]"
                            style={{ fontFamily: "var(--font-poppins)" }}
                          >
                            {step.description}
                          </p>
                        </>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile — vertical stacked list */}
        <div className="flex flex-col gap-8 lg:hidden">
          {howItWorksSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                className="flex items-start gap-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 90, damping: 16, delay: i * 0.1 }}
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-full text-white"
                  style={{
                    width: 48,
                    height: 48,
                    background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
                    boxShadow: "0 4px 16px rgba(27,143,196,0.35)",
                    fontSize: 16,
                    fontWeight: 700,
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {i + 1}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <Icon size={15} style={{ color: "#1B8FC4" }} />
                    <h3
                      className="text-[17px] font-bold text-[#1a1a1a]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="mt-1.5 text-sm leading-relaxed text-[#6B7280]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Section 4 — Certifications (2×2 feature blocks) ─────────────────────────

function CertificationsSection() {
  return (
    <section
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #F5E6D0 0%, #EDD9B8 100%)",
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <GoldenBadge>Our Standards</GoldenBadge>
          <SectionTitle>What Every Caregiver Is Certified In</SectionTitle>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {certifications.map((cert, i) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                className="relative overflow-hidden rounded-[20px] bg-white"
                style={{
                  padding: "40px 36px",
                  borderLeft: `4px solid ${cert.accent}`,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  border: `1px solid rgba(0,0,0,0.06)`,
                  borderLeftWidth: 4,
                  borderLeftColor: cert.accent,
                }}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.12 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 48px rgba(0,0,0,0.1)",
                  transition: { duration: 0.22 },
                }}
              >
                {/* Icon container — 64px */}
                <div
                  className="mb-5 flex items-center justify-center rounded-[14px]"
                  style={{
                    width: 64,
                    height: 64,
                    background: cert.iconBg,
                  }}
                >
                  <Icon size={30} style={{ color: cert.iconColor }} />
                </div>

                <h3
                  className="text-[20px] font-bold text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cert.title}
                </h3>

                <p
                  className="mt-3 text-[15px] text-[#6B7280]"
                  style={{ fontFamily: "var(--font-poppins)", lineHeight: 1.7 }}
                >
                  {cert.description}
                </p>

                {/* "Included in all plans" tag */}
                <div className="mt-5 flex items-center gap-1.5">
                  <CheckCircle2 size={14} style={{ color: "#C4956A" }} />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#C4956A", fontFamily: "var(--font-poppins)" }}
                  >
                    Included in all plans
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Info callout */}
        <motion.div
          className="mt-10 rounded-2xl px-8 py-6 text-center"
          style={{
            background: "rgba(255,255,255,0.6)",
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
            All certifications are{" "}
            <span style={{ color: "#C4956A", fontWeight: 700 }}>verified by our team</span>{" "}
            and displayed on each caregiver&apos;s profile.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 5 — Testimonials ─────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#1A2332", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.h2
            className="text-[42px] font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            What Families Are Saying
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex flex-col rounded-[20px] p-9"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: i * 0.12 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: "rgba(196,149,106,0.35)",
                transition: { duration: 0.2 },
              }}
            >
              {/* Decorative quote */}
              <span
                className="pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 64,
                  color: "rgba(196,149,106,0.2)",
                  lineHeight: 0.9,
                  display: "block",
                  marginBottom: 8,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                className="flex-1 text-[15px] italic leading-[1.8] text-white"
                style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-poppins)" }}
              >
                {t.quote}
              </p>

              <div
                className="my-5"
                style={{ height: 1, background: "linear-gradient(90deg, rgba(196,149,106,0.4), transparent)" }}
              />

              <div className="flex items-center gap-3">
                <div
                  className="relative overflow-hidden shrink-0"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "3px solid #C4956A",
                  }}
                >
                  <Image
                    src={t.image}
                    alt={`${t.name} — host family testimonial`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-[15px] font-semibold text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="mt-0.5 text-xs"
                    style={{ color: "#C4956A", fontFamily: "var(--font-poppins)" }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 6 — Pricing Teaser ───────────────────────────────────────────────

function PricingTeaserSection() {
  const [spotsLeft, setSpotsLeft] = useState(TOTAL_SPOTS)

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

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FFFFFF", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <div className="mb-10 flex flex-col items-center">
          <GoldenBadge>Simple Pricing</GoldenBadge>
          <SectionTitle>Start With Our Founding Families Program</SectionTitle>
        </div>

        {/* Single pricing card */}
        <motion.div
          className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[20px]"
          style={{
            background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
            padding: "32px 28px 28px",
          }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
        >
          {/* Spots badge */}
          <div className="mb-5 flex justify-start">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: "#FFFFFF", color: "#1570A6", fontFamily: "var(--font-poppins)" }}
            >
              🔥 Only 25 spots
            </span>
          </div>

          <h3
            className="text-left text-[24px] font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Founding Member
          </h3>

          <p
            className="mt-4 text-left text-[48px] font-bold leading-none text-white"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            $--/mo
          </p>
          <p
            className="mt-1 text-left text-xs"
            style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-poppins)" }}
          >
            billed monthly
          </p>

          <div className="my-6" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.2)" }} />

          <ul className="flex flex-col gap-3">
            {pricingBullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
                >
                  <Check size={11} strokeWidth={3} style={{ color: "#ffffff" }} />
                </span>
                <span
                  className="text-[14px]"
                  style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-poppins)" }}
                >
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/pricing"
            className="mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FFFFFF", color: "#1570A6", fontFamily: "var(--font-poppins)" }}
          >
            Claim Your Spot →
          </Link>

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
      </div>
    </section>
  )
}

// ─── Section 7 — Final CTA ────────────────────────────────────────────────────

function CTASection() {
  return (
    <section
      id="browse"
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
          Ready to Find Your Perfect Caregiver?
        </motion.h2>

        <motion.p
          className="mt-4 text-[16px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-poppins)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        >
          Join families across the United States who trust Bridges of Love.
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
            Browse Caregivers Now
          </Link>
          <p
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-poppins)" }}
          >
            <Lock size={13} />
            Secure · Cancel anytime · US invoicing
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ForFamiliesPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <HowItWorksSection />
        <CertificationsSection />
        <TestimonialsSection />
        <PricingTeaserSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
