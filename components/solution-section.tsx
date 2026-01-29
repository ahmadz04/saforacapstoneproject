"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"
import { Watch, Footprints, Bluetooth, Battery, Smartphone, Sun } from "lucide-react"

const features = [
  { icon: Watch, text: "Modular wearable network of four sensors" },
  { icon: Footprints, text: "Two wrist bracelets + two socks or ankle straps" },
  { icon: Bluetooth, text: "Fully wireless with BLE communication" },
  { icon: Battery, text: "Rechargeable with extended battery life" },
  { icon: Smartphone, text: "Auto-sync to phone or laptop" },
  { icon: Sun, text: "Low-profile form factor for all-day wear" },
]

const badges = ["Wireless", "Rechargeable", "BLE Enabled", "Multi-Sensor", "Home Use"]

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Our Solution"
          title="The GaitWay System"
          description="A wearable gait monitoring platform designed for everyday use—not a lab system, but a practical tool for continuous symptom tracking."
          centered
        />

        {/* Main Product Placeholder */}
        <FadeIn className="mb-16">
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

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <h3 className="text-xl font-medium text-foreground mb-6">
              Key System Features
            </h3>
            <Stagger className="space-y-4">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-[var(--accent-teal)]" />
                    </div>
                    <span className="text-muted-foreground">{feature.text}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-card rounded-2xl p-8 border border-[var(--border)]">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Designed for Real Life
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike clinic-bound systems, GaitWay is built from the ground up for home use.
                Patients can wear the sensors throughout their daily activities—walking around
                the house, running errands, or exercising—while the system quietly captures
                valuable gait data.
              </p>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="secondary"
                    className="text-xs font-normal bg-[var(--background-secondary)] text-[var(--foreground-secondary)]"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
