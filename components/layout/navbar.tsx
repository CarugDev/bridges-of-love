"use client"

import * as React from "react"
import Link from "next/link"
import { useUser, UserButton } from "@clerk/nextjs"
import { MenuIcon, HeartHandshakeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Caregivers", href: "/caregivers" },
  { label: "Pricing", href: "/#pricing" },
]

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const { isSignedIn } = useUser()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-brand-navy transition-opacity hover:opacity-80"
        >
          <HeartHandshakeIcon className="size-6 text-brand-rose" />
          <span className="text-base tracking-tight">
            Bridges <span className="text-brand-rose">of Love</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  scrolled
                    ? "text-foreground hover:text-brand-rose"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth */}
        <div className="hidden items-center gap-2 md:flex">
          {isSignedIn ? (
            <UserButton  />
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          {isSignedIn && <UserButton  />}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <HeartHandshakeIcon className="size-5 text-brand-rose" />
                  <span>
                    Bridges <span className="text-brand-rose">of Love</span>
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-4 flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-brand-rose"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {!isSignedIn && (
                <div className="mt-auto flex flex-col gap-2 px-4 pb-4">
                  <SheetClose asChild>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/sign-in">Sign In</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button className="w-full" asChild>
                      <Link href="/sign-up">Get Started Free</Link>
                    </Button>
                  </SheetClose>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
