"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Home, Heart, Shield } from "lucide-react"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"

const goals = [
  {
    icon: DollarSign,
    title: "Target Cost Under $100",
    description:
      "The full four-sensor system is designed to cost under $100, making it significantly more accessible than existing systems that cost hundreds to thousands of dollars.",
  },
  {
    icon: Home,
    title: "No Clinic Required",
    description:
      "GaitWay enables continuous monitoring without clinic visits. Patients can track their gait at home, during daily activities, and share data remotely with their care team.",
  },
  {
    icon: Shield,
    title: "Improved Safety",
    description:
      "By providing objective gait data, GaitWay aims to help identify deteriorating symptoms early, potentially reducing fall risk and enabling proactive intervention.",
  },
  {
    icon: Heart,
    title: "Better Quality of Life",
    description:
      "Our goal is to support patient independence and quality of life by enabling more personalized and responsive care based on real-world symptom data.",
  },
]

export function DesignGoalsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Impact"
          title="Design Goals & Intended Impact"
        />

        <Stagger className="grid md:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <StaggerItem key={goal.title}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card className="border border-[var(--border)] bg-card hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-teal)]/10 flex items-center justify-center mb-6">
                      <goal.icon className="w-6 h-6 text-[var(--accent-teal)]" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-3">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
