"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Users, Heart, Clock, Shield, Phone } from "lucide-react"

const cards = [
  {
    icon: BadgeCheck,
    title: "Verified and Trained",
    description:
      "Every caregiver undergoes thorough background checks and completes our certified training program.",
  },
  {
    icon: Users,
    title: "Safe and Reliable Matching",
    description:
      "Our expert team ensures compatible matches based on family dynamics, values, and expectations.",
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description:
      "We focus on creating genuine bonds, not just placements. Your au pair becomes part of your family.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description:
      "24/7 assistance throughout the entire experience. We are here whenever you need us.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Continuous feedback and quality checks ensure the highest standards are maintained.",
  },
  {
    icon: Phone,
    title: "Dedicated Care Team",
    description:
      "A personal coordinator guides you through every step of your au pair journey.",
  },
]

// First row (0–2): blue accent + blue icon; Second row (3–5): golden accent + warm icon
const cardStyles = [
  { accent: "#1B8FC4", iconBg: "linear-gradient(135deg, #BFDFEF, #D4EEF7)", iconColor: "text-[#1B8FC4]" },
  { accent: "#1B8FC4", iconBg: "linear-gradient(135deg, #BFDFEF, #D4EEF7)", iconColor: "text-[#1B8FC4]" },
  { accent: "#1B8FC4", iconBg: "linear-gradient(135deg, #BFDFEF, #D4EEF7)", iconColor: "text-[#1B8FC4]" },
  { accent: "#C4956A", iconBg: "linear-gradient(135deg, #F5E6D0, #EDD9B8)", iconColor: "text-[#C4956A]" },
  { accent: "#C4956A", iconBg: "linear-gradient(135deg, #F5E6D0, #EDD9B8)", iconColor: "text-[#C4956A]" },
  { accent: "#C4956A", iconBg: "linear-gradient(135deg, #F5E6D0, #EDD9B8)", iconColor: "text-[#C4956A]" },
]

export function WhyUs() {
  return (
    <section
      className="w-full py-[120px]"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(196,149,106,0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(27,143,196,0.06) 0%, transparent 50%),
          #EDECEA
        `,
      }}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
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
            Our Difference
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          >
            Why Bridges of Love?
          </motion.h2>

          <motion.p
            className="mt-3 max-w-[600px] text-base text-gray-500"
            style={{ fontFamily: "var(--font-poppins)" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
          >
            We are not just a platform. We are your partner in creating
            meaningful family connections.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon
            const style = cardStyles[index]
            // First row (0-2) enter from top, second row (3-5) from bottom
            const initialY = index < 3 ? -30 : 30

            return (
              <motion.div
                key={card.title}
                className="relative overflow-hidden rounded-2xl bg-white"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  padding: "28px",
                }}
                initial={{ opacity: 0, y: initialY }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                  borderColor: "rgba(196,149,106,0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: 3,
                    backgroundColor: style.accent,
                    borderRadius: "16px 16px 0 0",
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center rounded-[12px] ${style.iconColor}`}
                  style={{
                    background: style.iconBg,
                    width: 48,
                    height: 48,
                  }}
                  whileHover={{ rotate: 10, transition: { duration: 0.2 } }}
                >
                  <Icon size={22} />
                </motion.div>

                {/* Title */}
                <h3
                  className="mt-4 text-[17px] font-semibold text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {card.title}
                </h3>

                {/* Description */}
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
      </div>
    </section>
  )
}
