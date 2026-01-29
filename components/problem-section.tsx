"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, DollarSign, Building2, Eye } from "lucide-react"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"

const problems = [
  {
    icon: AlertTriangle,
    title: "Narrow Therapeutic Window",
    description:
      "Parkinson's medications must be carefully dosed within a narrow range. Too little provides inadequate symptom relief; too much causes dyskinesia.",
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description:
      "Clinicians rely heavily on patient self-report and brief clinic observations. OFF periods often go undetected, increasing risk of falls and injury.",
  },
  {
    icon: DollarSign,
    title: "Expensive Systems",
    description:
      "Existing gait monitoring systems cost hundreds to thousands of dollars, putting them out of reach for most patients and healthcare systems.",
  },
  {
    icon: Building2,
    title: "Clinic-Bound Technology",
    description:
      "Current solutions are designed for clinical environments, making them impractical for continuous daily monitoring in real-world settings.",
  },
]

const barriers = [
  {
    title: "Visually Intrusive",
    description: "Many wearable devices are bulky and stigmatizing, making patients reluctant to wear them in public.",
  },
  {
    title: "Uncomfortable",
    description: "Devices designed for short-term clinical use are often impractical for all-day wear over extended periods.",
  },
  {
    title: "No Accessible Solution",
    description: "There is currently no widely accessible, affordable solution for continuous gait monitoring in daily life.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Problem"
          title="Current care falls short of what patients need"
        />

        <Stagger className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border border-[var(--border)] bg-card hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-rust)]/10 flex items-center justify-center mb-4">
                      <problem.icon className="w-5 h-5 text-[var(--accent-rust)]" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2}>
          <div className="bg-card rounded-2xl p-8 lg:p-12 border border-[var(--border)]">
            <h3 className="text-lg font-medium text-foreground mb-6">
              Additional Barriers to Adoption
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {barriers.map((barrier, index) => (
                <motion.div
                  key={barrier.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="font-medium text-foreground mb-2">{barrier.title}</p>
                  <p className="text-sm text-muted-foreground">{barrier.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
