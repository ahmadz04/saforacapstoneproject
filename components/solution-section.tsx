"use client"

import Image from "next/image"
import { motion } from "framer-motion"
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
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[2/1] overflow-hidden rounded-2xl bg-[var(--background)] border border-[var(--border-light)] shadow-lg"
            >
              <Image
                src="/gaitway-system.png"
                alt="Complete GaitWay sensor system"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
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
