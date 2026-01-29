"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"

const benefits = [
  "Captures symptom fluctuations throughout the entire day, not just during brief clinic visits",
  "Provides objective data to complement patient self-reports and clinical observations",
  "Helps clinicians optimize medication timing and dosing for individual patients",
  "May help shorten OFF periods by enabling more precise therapeutic adjustments",
  "Supports proactive intervention before falls or other adverse events occur",
]

export function NeedSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <p className="text-sm font-medium text-[var(--accent-teal)] mb-3 tracking-wide uppercase">
                The Opportunity
              </p>
              <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-6">
                The Need for Continuous Gait Monitoring
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Real-world, continuous gait data provides far more meaningful insight than periodic
                snapshots captured during clinic visits. By monitoring patients throughout their
                daily activities, we can build a complete picture of their motor function.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Objective gait metrics can support better medication timing and therapeutic
                decisions, potentially reducing fall risk and improving patient outcomes.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-[var(--background-secondary)] rounded-2xl p-8 border border-[var(--border-light)]">
              <h3 className="text-lg font-medium text-foreground mb-6">
                Benefits of Continuous Monitoring
              </h3>
              <Stagger className="space-y-4">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="flex gap-3"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[var(--accent-teal)]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3 h-3 text-[var(--accent-teal)]" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
