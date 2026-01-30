"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Cpu, Box, BarChart3 } from "lucide-react"
import { SectionHeader, Stagger, StaggerItem, cardHoverTransition } from "./animations"

const technologies = [
  {
    icon: Cpu,
    title: "Hardware",
    summary: "Custom PCB with low-power IMU and ESP32 microcontroller.",
    bullets: ["BLE communication for wireless data transfer", "Compact form factor for extended battery life"],
  },
  {
    icon: Box,
    title: "Mechanical",
    summary: "3D-printed enclosure with velcro strap attachment.",
    bullets: ["Modular design for wrist, ankle, or sock placement", "Prioritizes comfort and consistent positioning"],
  },
  {
    icon: BarChart3,
    title: "Data Processing",
    summary: "IMU data processed to identify gait events.",
    bullets: ["Detects heel strike and toe-off from sensor data", "Extracts stride length, cadence, and asymmetry"],
  },
]

export function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="technology" className="py-20 lg:py-28 bg-[var(--background)] scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Technology"
          title="Engineering the GaitWay System"
          centered
        />

        <Stagger className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <StaggerItem key={tech.title}>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={cardHoverTransition}
                className="h-full"
              >
                <div className="bg-card border border-[var(--border)] rounded-xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal)]/10 flex items-center justify-center mb-6">
                    <tech.icon className="w-6 h-6 text-[var(--accent-teal)]" />
                  </div>

                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {tech.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {tech.summary}
                  </p>

                  <ul className="space-y-2">
                    {tech.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)] mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
