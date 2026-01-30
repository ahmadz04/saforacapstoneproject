"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Radio, Activity, CheckCircle } from "lucide-react"
import { SectionHeader, Stagger, StaggerItem, cardHoverTransition } from "./animations"

const validationResults = [
  {
    icon: Radio,
    title: "Wireless Streaming",
    description: "Real-time data from multiple sensors validated through BLE testing.",
  },
  {
    icon: Activity,
    title: "Repeatable Patterns",
    description: "IMU signals show consistent patterns across gait cycle phases.",
  },
  {
    icon: CheckCircle,
    title: "Event Detection",
    description: "Algorithms identify heel strike and toe-off from sensor data.",
  },
]

export function ResultsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="results" className="py-20 lg:py-28 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Validation"
          title="Early Testing Results"
          centered
        />

        <Stagger className="grid md:grid-cols-3 gap-6 mb-12">
          {validationResults.map((result) => (
            <StaggerItem key={result.title}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={cardHoverTransition}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[var(--accent-teal)]/10 flex items-center justify-center mb-4">
                  <result.icon className="w-7 h-7 text-[var(--accent-teal)]" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">
                  {result.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {result.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="text-xs text-center text-muted-foreground max-w-2xl mx-auto">
          This is a senior capstone prototype. The system has not undergone clinical validation and is not FDA approved.
        </p>
      </div>
    </section>
  )
}
