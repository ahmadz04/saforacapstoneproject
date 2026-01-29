"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"

const gaitChanges = [
  {
    title: "Reduced Stride Length",
    description: "Shorter steps that limit mobility and increase effort required for walking.",
  },
  {
    title: "Slower Walking Speed",
    description: "Decreased pace that affects daily activities and independence.",
  },
  {
    title: "Increased Asymmetry",
    description: "Uneven gait patterns between left and right sides of the body.",
  },
  {
    title: "Longer Double-Support Time",
    description: "More time spent with both feet on the ground, indicating instability.",
  },
]

export function GaitMattersSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Understanding the Challenge"
          title="Why Gait Matters in Parkinson's Disease"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Gait impairment is one of the key motor symptoms of Parkinson's disease. Healthy
                gait consists of alternating stance and swing phases—a natural rhythm that becomes
                disrupted as the disease progresses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Parkinsonian gait is characterized by several measurable changes that increase fall
                risk, aspiration risk, and hospitalizations. These changes directly impact patient
                safety and quality of life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Critically, motor symptoms fluctuate throughout the day due to medication ON/OFF
                states. These fluctuations are poorly captured in short clinic visits, which
                typically last only 15-30 minutes and may not reflect the patient's true daily
                experience.
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid sm:grid-cols-2 gap-4">
            {gaitChanges.map((change) => (
              <StaggerItem key={change.title}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border border-[var(--border)] bg-[var(--background-secondary)] hover:shadow-md transition-shadow duration-300 h-full">
                    <CardContent className="p-6">
                      <h3 className="text-base font-medium text-foreground mb-2">
                        {change.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {change.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
