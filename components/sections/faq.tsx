"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "What makes Bridges of Love different from other platforms?",
    a: "Bridges of Love is built on a foundation of trust, personal matching, and deep cultural preparation. Unlike job boards, we handpick every caregiver, provide certified training, and offer dedicated coordinator support throughout the entire journey — for both families and caregivers.",
  },
  {
    q: "How are caregivers trained and certified?",
    a: "All caregivers complete our comprehensive training program covering childcare best practices, first aid & safety, cultural adaptation, and family dynamics. Upon completion they receive a Bridges of Love certification that families can verify directly in their profile.",
  },
  {
    q: "What is the Founding Families Program?",
    a: "The Founding Families Program offers a limited group of early adopters (only 25 spots) exclusive discounted pricing and priority matching. Members in this program help shape the platform and receive lifetime loyalty benefits as a thank-you for their early trust.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. There are no long-term contracts. You can cancel at any time from your account dashboard and you will retain access until the end of your current billing period. No cancellation fees, ever.",
  },
  {
    q: "How do I contact a caregiver?",
    a: "Once you subscribe, you can browse full profiles, view certifications, read reviews, and send direct messages to any caregiver in our directory. Our platform also facilitates video introductions so you can connect before making any commitment.",
  },
  {
    q: "Are invoices issued for US families?",
    a: "Absolutely. All payments are processed securely via Stripe and a formal invoice is automatically generated for each transaction. Invoices are available in your account dashboard and can be downloaded for tax or reimbursement purposes.",
  },
  {
    q: "How long does the matching process take?",
    a: "Most families receive their first curated match suggestions within 3–5 business days of completing their family profile. The full process — from introduction to caregiver arrival — typically takes 2–6 weeks depending on your requirements and availability.",
  },
  {
    q: "What happens after I subscribe?",
    a: "After subscribing you will immediately access our full caregiver directory and search tools. Your dedicated coordinator will reach out within 24 hours to walk you through your preferences, begin the matching process, and answer any questions along the way.",
  },
]

function AccordionItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="overflow-hidden rounded-[12px]"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(196,149,106,0.15)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 90, damping: 16, delay: index * 0.07 }}
    >
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        style={{ padding: "20px 24px" }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span
          className="text-[15px] font-semibold text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {item.q}
        </span>

        <motion.span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: "rgba(196,149,106,0.1)" }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <Plus size={14} style={{ color: "#C4956A" }} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="text-[14px] leading-relaxed text-gray-500"
              style={{
                fontFamily: "var(--font-poppins)",
                padding: "0 24px 20px",
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#EDECEA", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="mx-auto max-w-[800px] px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
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
            FAQ
          </motion.div>

          <motion.h2
            className="text-[42px] font-bold text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-playfair)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
