"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, DollarSign, Building2, Eye } from "lucide-react"
import { FadeIn, SectionHeader, Stagger, StaggerItem, cardHoverTransition } from "./animations"

// Premium easing
const premiumEase = [0.22, 1, 0.36, 1]

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
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-12 lg:py-16 bg-[var(--background-secondary)] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Challenge"
          title="Current care falls short of what patients need"
          className="mb-8 lg:mb-10"
        />

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" staggerDelay={0.1}>
          {problems.map((problem) => (
            <StaggerItem key={problem.title} className="h-full">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={cardHoverTransition}
                className="h-full group"
              >
                <Card className="border border-[var(--border)] bg-card h-full overflow-hidden relative transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-[var(--accent-teal)]/5">
                  {/* Accent line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent-rust)]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.35, ease: premiumEase }}
                  />
                  <CardContent className="p-5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-teal)]/10 flex items-center justify-center mb-3">
                      <problem.icon className="w-4 h-4 text-[var(--accent-teal)]" />
                    </div>
                    <h3 className="text-base font-medium text-foreground mb-2">
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
          <div className="bg-card rounded-xl p-6 lg:p-8 border border-[var(--border)] relative overflow-hidden">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-rust)]/30 to-transparent" />

            <h3 className="text-base font-medium text-foreground mb-4">
              Additional Barriers to Adoption
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {barriers.map((barrier, index) => (
                <motion.div
                  key={barrier.title}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: premiumEase }}
                >
                  <p className="font-medium text-foreground mb-1 text-sm">{barrier.title}</p>
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
