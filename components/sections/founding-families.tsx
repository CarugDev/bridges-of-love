"use client"

import { motion } from "framer-motion"
import { ClockIcon, CheckCircleIcon } from "lucide-react"

const features = [
  {
    icon: CheckCircleIcon,
    text: "Priority access to our top-rated, verified caregivers",
  },
  {
    icon: CheckCircleIcon,
    text: "Dedicated onboarding support from our placement team",
  },
  {
    icon: CheckCircleIcon,
    text: "Locked-in founding member pricing — never changes",
  },
]

export function FoundingFamilies() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto flex max-w-[1100px] flex-col gap-10 rounded-3xl p-10 lg:flex-row lg:items-center lg:gap-16 lg:p-12"
        style={{ backgroundColor: "#D4B896" }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left side */}
        <div className="flex-1">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs font-semibold text-gray-700">
            Exclusive Early Access
          </div>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Founding Families Program
          </h2>

          <p className="mb-7 text-sm leading-relaxed text-gray-700">
            Be among the first families to access our network of certified
            caregivers and receive exclusive early pricing.
          </p>

          <ul className="flex flex-col gap-4">
            {features.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-gray-700" />
                <span className="text-sm text-gray-800">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side — white card */}
        <div className="w-full lg:w-72 xl:w-80">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            {/* Clock icon */}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-50">
              <ClockIcon className="size-5 text-orange-500" />
            </div>

            <h3 className="mb-2 text-base font-bold text-gray-900">
              Limited Availability
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-500">
              We&apos;re accepting a small cohort of founding families to ensure
              every placement receives the care and attention it deserves.
            </p>

            {/* Big number */}
            <div className="mb-1 text-7xl font-extrabold leading-none tracking-tight text-gray-900">
              25
            </div>
            <div className="mb-5 text-sm text-gray-500">
              Family spots available
            </div>

            {/* Orange pill */}
            <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold text-orange-700">
              Only a few spots remaining
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
