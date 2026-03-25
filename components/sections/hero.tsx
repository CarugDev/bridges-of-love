import Link from "next/link"
import { ArrowRightIcon, ShieldCheckIcon, GlobeIcon, UsersIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    icon: UsersIcon,
    value: "500+",
    label: "Certified Caregivers",
  },
  {
    icon: GlobeIcon,
    value: "40+",
    label: "Countries",
  },
  {
    icon: ShieldCheckIcon,
    value: "100%",
    label: "Verified & Trained",
  },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-cream pt-16">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand-rose opacity-10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-brand-rose opacity-8 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow badge */}
          <Badge
            variant="outline"
            className="mb-6 inline-flex gap-1.5 border-brand-rose/30 bg-brand-rose-light px-3 py-1 text-xs font-medium text-brand-rose"
          >
            <ShieldCheckIcon className="size-3" />
            Every caregiver is trained, certified &amp; background-checked
          </Badge>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            Find Your Perfect{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-brand-rose">Certified</span>
              <svg
                aria-hidden
                viewBox="0 0 220 12"
                className="absolute -bottom-1 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q55 2 110 8 Q165 14 218 8"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  className="text-brand-rose/40"
                />
              </svg>
            </span>{" "}
            Caregiver
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/60 sm:text-xl">
            Bridges of Love connects American families with internationally
            trained and verified caregivers. Every profile is personally reviewed
            by our team — so you can hire with complete confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 w-full gap-2 px-8 text-base sm:w-auto"
              asChild
            >
              <Link href="/caregivers">
                Browse Caregivers
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full px-8 text-base sm:w-auto"
              asChild
            >
              <Link href="/sign-up">Join as a Caregiver</Link>
            </Button>
          </div>

          {/* Social proof micro-text */}
          <p className="mt-5 text-sm text-muted-foreground">
            Trusted by families across the US &mdash; 25 early-access spots remaining
          </p>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-20 max-w-2xl">
          <div className="grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-white/80 shadow-sm backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 px-6 py-6"
              >
                <Icon className="mb-1 size-5 text-brand-rose" />
                <span className="text-2xl font-bold text-brand-navy">
                  {value}
                </span>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
