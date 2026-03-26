"use client"

import { motion } from "framer-motion"
import { UserPlus, GraduationCap, Heart, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Apply / Register",
    description:
      "Create your profile and share your story. Families describe their needs, caregivers showcase their experience.",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Training and Certification",
    description:
      "Caregivers complete our comprehensive training program covering childcare, safety, and cultural preparation.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Match with Families",
    description:
      "Our team carefully matches families with compatible caregivers based on values, needs, and lifestyle.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Start the Experience",
    description:
      "Begin your journey together with ongoing support from our dedicated team every step of the way.",
  },
]


export function HowItWorks() {
  return (
    <>
      <style>{`
        .hiw-card-accent::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 0%;
          background-color: #C4956A;
          border-radius: 0 0 16px 16px;
          transition: width 0.35s ease;
        }
        .hiw-card-accent:hover::after {
          width: 100%;
        }
      `}</style>

      <section
        className="w-full py-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #F5F0E8 0%, #FAFAF8 70%)",
        }}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Header */}
          <div className="mb-14 text-center">
            <h2
              className="mb-3 text-4xl font-bold text-[#1a1a1a]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              How it Works
            </h2>
            <p
              className="text-base text-gray-500"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A simple, transparent process designed to create lasting connections
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    className="hiw-card-accent relative overflow-hidden rounded-2xl"
                    style={{
                      backgroundColor: "#F0EEEB",
                      padding: "36px",
                      border: "1px solid rgba(196,149,106,0.15)",
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      y: -8,
                      borderColor: "rgba(196,149,106,0.4)",
                      boxShadow: "0 16px 40px rgba(196,149,106,0.15)",
                    }}
                  >
                    {/* Top row: icon + step number + dashed line */}
                    <div className="flex items-center gap-3">
                      {/* Icon square — 48px with gradient */}
                      <div
                        className="flex shrink-0 items-center justify-center rounded-[10px]"
                        style={{
                          background:
                            "linear-gradient(135deg, #BFDFEF 0%, #D4EEF7 100%)",
                          width: 48,
                          height: 48,
                          boxShadow: "inset 0 1px 3px rgba(43,125,161,0.15)",
                        }}
                      >
                        <Icon size={22} className="text-[#2B7DA1]" />
                      </div>

                      {/* Step number with golden circle */}
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
                          style={{
                            color: "#C4956A",
                            fontFamily: "var(--font-poppins)",
                          }}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Dashed golden line */}
                      <div
                        className="flex-1"
                        style={{
                          borderTop: "2px dashed rgba(196,149,106,0.4)",
                        }}
                      />
                    </div>

                    {/* Title — Playfair Display */}
                    <h3
                      className="mt-5 text-[18px] font-semibold text-[#1a1a1a]"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="mt-2 text-sm leading-relaxed text-[#6B7280]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
        </div>
      </section>
    </>
  )
}
