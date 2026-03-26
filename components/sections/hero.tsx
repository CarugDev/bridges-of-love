"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ShieldCheckIcon, AwardIcon } from "lucide-react"

const headline = "Trusted Caregivers, Meaningful Connections"
const words = headline.split(" ")

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const leftOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const leftY = useTransform(scrollYProgress, [0, 0.5], [0, -40])

  return (
    <>
      <style>{`
        @keyframes gradientBreath {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatImage {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes buttonPulse {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        .hero-bg {
          background: linear-gradient(135deg, #C9A882, #DDB98A, #E8D5B7, #F5EDE0, #DDB98A, #C9A882);
          background-size: 300% 300%;
          animation: gradientBreath 8s ease infinite;
        }
        .hero-image-float {
          animation: floatImage 4s ease-in-out infinite;
        }
        .btn-pulse {
          animation: buttonPulse 2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="hero-bg w-full overflow-hidden pt-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-[120px] sm:px-6 lg:flex-row lg:items-stretch lg:gap-16 lg:px-8">

          {/* Left column — 60% */}
          <motion.div
            className="flex w-full flex-col justify-center lg:w-[60%]"
            style={{ opacity: leftOpacity, y: leftY }}
          >
            {/* Educarte badge */}
            <motion.div
              className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1.5 backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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

            {/* Headline — word by word */}
            <h1
              className="mb-5 text-[52px] font-extrabold leading-[1.1] tracking-tight"
              style={{ color: "#1a1a1a" }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.15 + i * 0.08,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              className="mb-8 text-base leading-relaxed text-gray-600"
              style={{ maxWidth: 480 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            >
              Connect with pre-trained and certified international caregivers who
              have been rigorously verified. Experience peace of mind knowing your
              family is in caring, capable hands.
            </motion.p>

            {/* Buttons */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              >
                <Link
                  href="/caregivers"
                  className="btn-pulse inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#1B8FC4" }}
                >
                  Find a Caregiver
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.95 }}
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
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon className="size-4 text-gray-400" />
                <span className="text-xs text-gray-500">100% Verified</span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <AwardIcon className="size-4 text-gray-400" />
                <span className="text-xs text-gray-500">Certified Training</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — 40% */}
          <div className="relative w-full lg:w-[40%]">
            <motion.div
              className="relative w-full overflow-hidden"
              style={{ borderRadius: 16, aspectRatio: "3/4" }}
              initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <div className="hero-image-float relative h-full w-full">
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

        </div>
      </section>
    </>
  )
}
