"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Why us", href: "/#why-us" },
  { label: "For Families", href: "/families" },
  { label: "For Caregivers", href: "/caregivers" },
]

export function Navbar() {
  const { isSignedIn } = useUser()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB]"
      style={{
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Bridges of Love"
              height={48}
              width={200}
              style={{ height: "48px", width: "auto" }}
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <Link
                href={link.href}
                className="text-[#374151] text-[15px] font-medium no-underline transition-colors duration-200 hover:text-[#1B8FC4]"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop auth */}
        <motion.div
          className="hidden items-center gap-3 md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="text-[#111827] text-sm font-semibold transition-colors duration-200 hover:text-[#1B8FC4]">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-[#1B8FC4] text-white rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#1570A6]"
                >
                  Get Started
                </motion.button>
              </SignUpButton>
            </>
          )}
        </motion.div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          {isSignedIn && <UserButton />}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 text-[#374151] transition-colors hover:text-[#1B8FC4]"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1 px-1">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-3 text-[15px] font-medium text-[#374151] transition-colors duration-200 hover:text-[#1B8FC4]"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {!isSignedIn && (
                <div className="mt-6 flex flex-col gap-3 px-4">
                  <SignInButton mode="modal">
                    <button className="w-full text-left text-[#111827] text-sm font-semibold py-2 transition-colors hover:text-[#1B8FC4]">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="w-full bg-[#1B8FC4] text-white rounded-lg px-5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#1570A6]">
                      Get Started
                    </button>
                  </SignUpButton>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  )
}
