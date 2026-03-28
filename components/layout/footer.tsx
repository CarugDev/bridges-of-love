"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Our Story", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
]

const resourceLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "For Families", href: "#for-families" },
  { label: "For Caregivers", href: "#for-caregivers" },
  { label: "FAQ", href: "#" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
]

const socialLinks = [
  { src: "/facebook-icon.png", alt: "Facebook", href: "#" },
  { src: "/instagram-icon.png", alt: "Instagram", href: "#" },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ x: 4, transition: { duration: 0.18 } }}>
      <Link
        href={href}
        className="block transition-colors duration-200"
        style={{
          fontFamily: "var(--font-poppins)",
          fontSize: 14,
          color: "rgba(255,255,255,0.6)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
      >
        {children}
      </Link>
    </motion.div>
  )
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-5 uppercase tracking-[0.1em]"
      style={{
        fontFamily: "var(--font-poppins)",
        fontSize: 12,
        fontWeight: 600,
        color: "rgba(255,255,255,0.4)",
      }}
    >
      {children}
    </p>
  )
}

export function FooterCTABanner() {
  return (
    <motion.div
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #1B8FC4 0%, #1570A6 100%)",
        padding: "48px 24px",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2
            className="text-[28px] font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to find your perfect caregiver?
          </h2>
          <p
            className="mt-2 text-[14px]"
            style={{
              fontFamily: "var(--font-poppins)",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Join families across the United States who trust Bridges of Love.
          </p>
        </div>
        <Link
          href="/sign-up"
          className="shrink-0 rounded-lg px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "white",
            color: "#1B8FC4",
            fontFamily: "var(--font-poppins)",
            fontWeight: 600,
          }}
        >
          Get Started Today
        </Link>
      </div>
    </motion.div>
  )
}

export function Footer() {
  return (
    <footer>
      {/* Main footer body */}
      <motion.div
        style={{ backgroundColor: "#1A2332" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Columns */}
        <div className="mx-auto max-w-[1280px] px-6 pb-16 pt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

            {/* Column 1 — Brand */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="Bridges of Love"
                  height={48}
                  width={180}
                  style={{ height: 48, width: "auto", filter: "brightness(0) invert(1)" }}
                />
              </Link>

              <p
                className="mt-5 leading-[1.7]"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  maxWidth: 240,
                }}
              >
                Connecting families with certified, trained international caregivers who become part of your home.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ src, alt, href }) => (
                  <motion.a
                    key={alt}
                    href={href}
                    aria-label={alt}
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
                    style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                    whileHover={{
                      backgroundColor: "#1B8FC4",
                      borderColor: "#1B8FC4",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Image src={src} alt={alt} width={20} height={20} />
                  </motion.a>
                ))}
              </div>

              {/* Powered by Educarte */}
              <div className="mt-6 flex items-center gap-2">
                <Image
                  src="/educarte.png"
                  alt="Educarte"
                  width={18}
                  height={18}
                  className="rounded-sm object-contain opacity-60"
                />
                <span
                  style={{
                    fontFamily: "var(--font-poppins)",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  Powered by Educarte
                </span>
              </div>
            </div>

            {/* Column 2 — Company */}
            <div>
              <ColumnHeading>Company</ColumnHeading>
              <nav className="flex flex-col gap-3">
                {companyLinks.map((l) => (
                  <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
                ))}
              </nav>
            </div>

            {/* Column 3 — Resources */}
            <div>
              <ColumnHeading>Resources</ColumnHeading>
              <nav className="flex flex-col gap-3">
                {resourceLinks.map((l) => (
                  <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
                ))}
              </nav>
            </div>

            {/* Column 4 — Legal */}
            <div>
              <ColumnHeading>Legal</ColumnHeading>
              <nav className="flex flex-col gap-3">
                {legalLinks.map((l) => (
                  <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Golden divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(196,149,106,0.4), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
            <p
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: 13,
                color: "rgba(255,255,255,0.45)",
              }}
            >
              © 2026 Bridges of Love. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Made with ♥ by
              </span>
              <Image
                src="/educarte.png"
                alt="Educarte"
                width={16}
                height={16}
                className="rounded-sm object-contain opacity-50"
              />
              <span
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                Educarte
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
