"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Radio, Activity } from "lucide-react"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"

const findings = [
  {
    icon: Radio,
    title: "Wireless Data Streaming",
    description:
      "Real-time wireless data streaming from multiple sensors to a central receiver validated through initial BLE testing.",
  },
  {
    icon: Activity,
    title: "Repeatable IMU Patterns",
    description:
      "IMU signals show repeatable patterns corresponding to different stages of the gait cycle across multiple test sessions.",
  },
  {
    icon: CheckCircle,
    title: "Gait Event Detection",
    description:
      "Rules-based algorithms successfully identify heel strike and toe-off events from accelerometer and gyroscope data.",
  },
]

export function ResultsSection() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Validation"
          title="Early Product Validation"
          description="Preliminary findings from controlled testing with healthy subjects."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Placeholder for testing setup */}
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--background)] border border-[var(--border-light)] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--background-secondary)] flex items-center justify-center">
                  <Activity className="w-10 h-10 text-[var(--foreground-muted)]" />
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">
                  [Placeholder: testing setup]
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Findings Cards */}
          <Stagger className="space-y-4">
            {findings.map((finding) => (
              <StaggerItem key={finding.title}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-card border border-[var(--border)] hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center shrink-0">
                        <finding.icon className="w-5 h-5 text-[var(--accent-teal)]" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-foreground mb-1">
                          {finding.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {finding.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Sample Gait Metrics Placeholder */}
        <FadeIn delay={0.2}>
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-[var(--border)] mb-8">
            <h3 className="text-lg font-medium text-foreground mb-6 text-center">
              Sample Gait Metrics
            </h3>
            <div className="w-full h-48 rounded-xl bg-[var(--background-secondary)] border border-[var(--border-light)] flex items-center justify-center">
              <p className="text-sm text-[var(--foreground-muted)]">
                [Placeholder: sample gait metrics visualization]
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <FadeIn delay={0.3}>
          <div className="bg-[var(--accent-rust)]/5 rounded-xl p-6 lg:p-8 border border-[var(--accent-rust)]/20">
            <h3 className="text-base font-medium text-foreground mb-2">
              Important Note
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This project is a senior capstone engineering prototype. The system has not undergone
              clinical validation and is not FDA approved. Results presented are preliminary findings
              from controlled laboratory testing with healthy subjects.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
