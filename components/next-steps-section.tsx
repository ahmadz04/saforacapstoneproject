"use client"

import { motion } from "framer-motion"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"

const nextSteps = [
  {
    title: "Wireless Time Synchronization",
    description:
      "Implement precise time synchronization across all four sensors to enable accurate multi-sensor gait analysis.",
  },
  {
    title: "Expanded Data Collection",
    description:
      "Continue collecting gait data from healthy subjects to refine our algorithms and establish baseline metrics.",
  },
  {
    title: "Hardware Refinement",
    description:
      "Iterate on PCB design and sensor enclosures to improve comfort, reduce size, and extend battery life.",
  },
  {
    title: "Mobile App Integration",
    description:
      "Develop a companion mobile app for real-time data visualization, Gait Score tracking, and data export.",
  },
  {
    title: "Clinical Validation Studies",
    description:
      "Partner with clinical researchers to conduct validation studies with Parkinson's patients in future work.",
  },
]

export function NextStepsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Roadmap"
          title="Next Steps"
        />

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nextSteps.map((step, index) => (
            <StaggerItem key={step.title}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <div className="bg-card rounded-xl p-6 border border-[var(--border)] hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-teal)] text-white text-sm font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
