"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShieldCheckIcon, AwardIcon } from "lucide-react"

export function Hero() {
  return (
    <section
      className="w-full overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(135deg, #E8D5B7 0%, #F5EDE0 60%, #ffffff 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8 lg:py-28">
        {/* Left column — 60% */}
        <motion.div
          className="flex w-full flex-col justify-center lg:w-[60%]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Educarte badge */}
          <motion.div
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/educarte.png"
              alt="Educarte"
              width={20}
              height={20}
              className="rounded-sm object-contain"
            />
            <span className="text-xs font-medium text-gray-500">
              Powered by Educarte
            </span>
          </motion.div>

          {/* Headline */}
          <h1
            className="mb-5 text-balance text-[52px] font-extrabold leading-[1.1] tracking-tight"
            style={{ color: "#1a1a1a" }}
          >
            Trusted Caregivers, Meaningful Connections
          </h1>

          {/* Subtext */}
          <p
            className="mb-8 text-base leading-relaxed text-gray-600"
            style={{ maxWidth: 480 }}
          >
            Connect with pre-trained and certified international caregivers who
            have been rigorously verified. Experience peace of mind knowing your
            family is in caring, capable hands.
          </p>

          {/* Buttons */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
            >
              <Link
                href="/caregivers"
                className="inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1B8FC4" }}
              >
                Find a Caregiver
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
            >
              <Link
                href="/sign-up"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-gray-800 bg-white px-6 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
              >
                Apply as a Caregiver
              </Link>
            </motion.div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <ShieldCheckIcon className="size-4 text-gray-400" />
              <span className="text-xs text-gray-500">100% Verified</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <AwardIcon className="size-4 text-gray-400" />
              <span className="text-xs text-gray-500">Certified Training</span>
            </div>
          </div>
        </motion.div>

        {/* Right column — 40% */}
        <motion.div
          className="relative w-full lg:w-[40%]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-full overflow-hidden" style={{ borderRadius: 16, aspectRatio: "3/4" }}>
            <Image
              src="/hero-image.jpg"
              alt="Happy family with caregiver"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
