"use client"

import { SectionHeader } from "./animations"

export function OverviewSection() {
  return (
    <section id="overview" className="py-20 lg:py-28 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Project Overview"
          title="A modular wearable gait analysis system"
          description="Continuous monitoring of Parkinson's motor symptoms outside the clinic, designed for everyday comfort and extended wear."
          centered
        />
      </div>
    </section>
  )
}
