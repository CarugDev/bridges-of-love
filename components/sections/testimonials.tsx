"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    initials: "S.M.",
    avatarBg: "#1B8FC4",
    quote:
      "Bridges of Love changed our family completely. Our au pair became a true part of our home — the kids adore her and we trust her completely. The matching process was thoughtful and thorough.",
    name: "Sarah Mitchell",
    role: "Host Family · Boston, MA",
  },
  {
    initials: "L.R.",
    avatarBg: "#C4956A",
    quote:
      "I came to the United States with so much uncertainty. Bridges of Love gave me a family that welcomed me with open arms. The training prepared me for everything — I feel confident and loved.",
    name: "Lucía Ramírez",
    role: "Au Pair · Originally from Colombia",
  },
  {
    initials: "J.T.",
    avatarBg: "#2D3748",
    quote:
      "We had tried other agencies before but nothing compared to this. The dedicated support team was always available, and our coordinator genuinely cared about making the experience work for everyone.",
    name: "James & Tomoko",
    role: "Host Family · San Francisco, CA",
  },
]

const fanVariants = [
  // Left card: rotate from -5deg
  {
    initial: { opacity: 0, rotate: -5, y: 20 },
    animate: { opacity: 1, rotate: 0, y: 0 },
  },
  // Center card: slide from below
  {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  // Right card: rotate from 5deg
  {
    initial: { opacity: 0, rotate: 5, y: 20 },
    animate: { opacity: 1, rotate: 0, y: 0 },
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) {
  const fan = fanVariants[index % 3]

  return (
    <motion.div
      className="relative flex flex-col overflow-hidden rounded-[20px]"
      style={{
        backgroundColor: "#FDFAF7",
        border: "1px solid rgba(196,149,106,0.15)",
        boxShadow: "0 4px 24px rgba(196,149,106,0.1)",
        padding: "36px",
        minWidth: 0,
      }}
      initial={fan.initial}
      whileInView={fan.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 16px 48px rgba(196,149,106,0.18)",
        borderColor: "rgba(196,149,106,0.35)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Decorative quote mark */}
      <span
        className="pointer-events-none absolute right-6 top-2 select-none leading-none"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: 80,
          color: "rgba(196,149,106,0.18)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-[#C4956A] text-[#C4956A]" />
        ))}
      </div>

      {/* Avatar */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
        style={{ backgroundColor: testimonial.avatarBg, fontFamily: "var(--font-poppins)" }}
      >
        {testimonial.initials}
      </div>

      {/* Quote */}
      <p
        className="relative z-10 flex-1 text-[15px] italic leading-[1.8] text-[#4A5568]"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Divider */}
      <div
        className="my-5"
        style={{ height: 1, background: "linear-gradient(90deg, rgba(196,149,106,0.4), transparent)" }}
      />

      {/* Name + role */}
      <div>
        <p
          className="text-[16px] font-semibold text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {testimonial.name}
        </p>
        <p
          className="mt-0.5 text-[13px]"
          style={{ color: "#C4956A", fontFamily: "var(--font-poppins)" }}
        >
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  return (
    <section
      className="w-full py-[120px]"
      style={{
        background: "linear-gradient(135deg, #F5E6D0 0%, #EDD9B8 50%, #F0E4D0 100%)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
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
            Real Stories
          </motion.div>

          <motion.h2
            className="text-[42px] font-bold text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          >
            Stories of Connection
          </motion.h2>

          <motion.p
            className="mt-3 max-w-[550px] text-base text-gray-500"
            style={{ fontFamily: "var(--font-poppins)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 }}
          >
            Families and caregivers sharing the moments that matter most.
          </motion.p>
        </div>

        {/* Desktop grid — all 3 cards */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>

        {/* Mobile / tablet carousel */}
        <div className="mt-14 lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {/* On sm show current + next, on xs show only current */}
              <TestimonialCard
                testimonial={testimonials[active]}
                index={1}
              />
              <div className="hidden sm:block">
                <TestimonialCard
                  testimonial={testimonials[(active + 1) % testimonials.length]}
                  index={2}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows + dots */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-[#C4956A] hover:text-[#C4956A]"
              style={{ border: "1px solid rgba(196,149,106,0.3)", color: "#C4956A" }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? 24 : 8,
                    backgroundColor: active === i ? "#C4956A" : "rgba(196,149,106,0.3)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-[#C4956A] hover:text-[#C4956A]"
              style={{ border: "1px solid rgba(196,149,106,0.3)", color: "#C4956A" }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
