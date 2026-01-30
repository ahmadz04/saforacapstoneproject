"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionHeader } from "./animations"

const premiumEase = [0.22, 1, 0.36, 1]

interface ChallengeItem {
  id: string
  title: string
  summary: string
  bullets: string[]
}

const challenges: ChallengeItem[] = [
  {
    id: "gait-matters",
    title: "Why gait matters in Parkinson's disease",
    summary: "Gait impairment is a key motor symptom that directly impacts patient safety and quality of life.",
    bullets: [
      "Reduced stride length and slower walking speed limit mobility",
      "Increased asymmetry and longer double-support time indicate instability",
      "These changes increase fall risk and hospitalizations",
      "Motor symptoms fluctuate throughout the day due to medication states",
    ],
  },
  {
    id: "clinic-visits",
    title: "Why clinic visits miss symptom fluctuations",
    summary: "Brief clinic appointments capture only a narrow snapshot of a patient's daily motor function.",
    bullets: [
      "Visits typically last 15-30 minutes, missing daily fluctuations",
      "Clinicians rely heavily on patient self-report, which can be unreliable",
      "OFF periods often go undetected, increasing risk of falls",
      "Medication adjustments are made with incomplete information",
    ],
  },
  {
    id: "continuous-monitoring",
    title: "Why continuous monitoring is needed",
    summary: "Real-world gait data provides far more meaningful insight than periodic clinic snapshots.",
    bullets: [
      "Captures symptom patterns throughout entire days, not just brief visits",
      "Provides objective data to complement clinical observations",
      "Enables more precise medication timing and dosing",
      "Supports proactive intervention before falls occur",
    ],
  },
]

export function ChallengeSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="challenge" className="py-20 lg:py-28 bg-[var(--background)] scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Understanding the Challenge"
          title="The problem we're solving"
        />

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-[var(--border)]">
            {challenges.map((item) => {
              const isExpanded = expandedId === item.id

              return (
                <div key={item.id} className="py-1">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                    aria-expanded={isExpanded}
                    aria-controls={`content-${item.id}`}
                  >
                    <span className="text-lg font-medium text-foreground pr-4 group-hover:text-[var(--accent-teal)] transition-colors duration-300">
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        ease: premiumEase,
                      }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-[var(--foreground-secondary)]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`content-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: shouldReduceMotion ? 0 : 0.4,
                            ease: premiumEase,
                          },
                          opacity: {
                            duration: shouldReduceMotion ? 0 : 0.3,
                            delay: shouldReduceMotion ? 0 : 0.1,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-1">
                          <p className="text-muted-foreground mb-5 leading-relaxed">
                            {item.summary}
                          </p>
                          <ul className="space-y-3 pl-4">
                            {item.bullets.map((bullet, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: shouldReduceMotion ? 0 : 0.3,
                                  delay: shouldReduceMotion ? 0 : 0.15 + index * 0.05,
                                  ease: premiumEase,
                                }}
                                className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)] shrink-0 mt-[0.45rem]" />
                                <span>{bullet}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
