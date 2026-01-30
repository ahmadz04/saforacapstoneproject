"use client"

import { Watch, Bluetooth, Battery, Smartphone, Sun } from "lucide-react"
import { FadeIn, SectionHeader } from "./animations"

const featurePills = [
  { icon: Watch, text: "4-sensor network" },
  { icon: Bluetooth, text: "BLE wireless" },
  { icon: Battery, text: "Rechargeable" },
  { icon: Smartphone, text: "Auto-sync" },
  { icon: Sun, text: "Low-profile" },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-[var(--background-secondary)] scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Our Solution"
          title="The GaitWay System"
          description="A wearable gait monitoring platform built for home use, not the lab."
          centered
        />

        <FadeIn className="mb-12">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-[var(--background)] border border-[var(--border-light)] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--background-secondary)] flex items-center justify-center">
                <Watch className="w-10 h-10 text-[var(--foreground-muted)]" />
              </div>
              <p className="text-sm text-[var(--foreground-muted)]">
                [Placeholder: Complete GaitWay sensor system]
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {featurePills.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] text-sm text-muted-foreground"
              >
                <feature.icon className="w-4 h-4 text-[var(--accent-teal)]" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
