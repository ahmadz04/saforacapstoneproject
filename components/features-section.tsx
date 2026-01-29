"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"
import { Cpu, Box, BarChart3 } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    title: "Hardware & Electronics",
    description:
      "Custom PCB design integrating a low-power IMU, ESP32 microcontroller, and BLE communication. Compact form factor optimized for wearable use with extended battery life.",
    tags: ["IMU Sensors", "ESP32", "Custom PCB", "BLE"],
    placeholder: "[Placeholder: PCB layout]",
  },
  {
    icon: Box,
    title: "Mechanical Design",
    description:
      "3D-printed enclosure with velcro strap attachment. Modular design supports wrist, ankle, or sock placement. Prioritizes comfort and consistent sensor positioning.",
    tags: ["3D Printed", "Modular", "Ergonomic"],
    placeholder: "[Placeholder: CAD enclosure]",
  },
  {
    icon: BarChart3,
    title: "Data Processing",
    description:
      "IMU data processed to identify gait events (heel strike, toe-off). Extracts metrics including stride length, cadence, asymmetry, and double-support time.",
    tags: ["Gait Events", "Metrics", "Real-time"],
    placeholder: "[Placeholder: assembled device]",
  },
]

const gaitParameters = [
  { name: "Stride Length", desc: "Distance per step" },
  { name: "Stride Duration", desc: "Time per gait cycle" },
  { name: "Walking Speed", desc: "Pace of locomotion" },
  { name: "Asymmetry", desc: "Left/right imbalance" },
  { name: "Double-Support", desc: "Both feet grounded" },
]

export function FeaturesSection() {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Technology"
          title="Engineering the GaitWay System"
          description="Product-focused design combining custom hardware, modular mechanics, and intelligent data processing."
        />

        {/* Technology Cards */}
        <Stagger className="grid md:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <StaggerItem key={tech.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <div className="bg-card border border-[var(--border)] rounded-xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal)]/10 flex items-center justify-center mb-6">
                    <tech.icon className="w-6 h-6 text-[var(--accent-teal)]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {tech.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tech.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs font-normal bg-[var(--background-secondary)] text-[var(--foreground-secondary)]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Placeholder */}
                  <div className="w-full h-32 rounded-lg bg-[var(--background-secondary)] border border-[var(--border-light)] flex items-center justify-center">
                    <p className="text-xs text-[var(--foreground-muted)]">
                      {tech.placeholder}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Gait Parameters */}
        <FadeIn>
          <div className="bg-[var(--background-secondary)] rounded-2xl p-8 lg:p-12 border border-[var(--border-light)]">
            <h3 className="text-xl font-medium text-foreground mb-8 text-center">
              Gait Parameters Extracted
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {gaitParameters.map((param, index) => (
                <motion.div
                  key={param.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="font-medium text-foreground mb-1">{param.name}</p>
                  <p className="text-sm text-muted-foreground">{param.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
