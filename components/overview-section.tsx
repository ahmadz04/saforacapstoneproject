"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, GitBranch, Eye, X } from "lucide-react"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"

const pillars = [
  {
    id: "goal",
    icon: Target,
    title: "Goal",
    description: "Develop a multi-sensor wearable system for continuous gait monitoring.",
    expandedContent: {
      details: "Our primary objective is to create an accessible, comfortable wearable system that can continuously monitor gait patterns outside of clinical settings. This enables real-world data collection that captures the full spectrum of a patient's daily motor function.",
      placeholder: "[Placeholder: prototype evolution]",
    },
  },
  {
    id: "approach",
    icon: GitBranch,
    title: "Approach",
    description: "Wired IMU prototype → wireless prototype → multi-sensor wireless system. Preliminary data collection from healthy subjects. Extraction of interpretable gait metrics (step timing, cadence, asymmetry).",
    expandedContent: {
      details: "Our iterative development process starts with validated wired prototypes, progresses to single wireless sensors, and scales to a synchronized multi-sensor network. We validate algorithms using data from healthy subjects before moving to clinical populations.",
      placeholder: "[Placeholder: data processing / gait metrics]",
    },
  },
  {
    id: "vision",
    icon: Eye,
    title: "Long-Term Vision",
    description: "Continuous symptom monitoring for Parkinson's disease. Clearly stated as monitoring support, not diagnostic.",
    expandedContent: {
      details: "GaitWay aims to support personalized care for Parkinson's patients by providing clinicians with objective, continuous gait data. This supports better-informed treatment decisions—it is not intended as a diagnostic tool.",
      placeholder: "[Placeholder: long-term monitoring concept]",
    },
  },
]

export function OverviewSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="overview" className="py-20 lg:py-28 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Project Overview"
          title="A modular wearable gait analysis system"
        />

        {/* Cards Grid */}
        <Stagger className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.id}>
              <motion.div
                layoutId={`card-container-${pillar.id}`}
                onClick={() => setExpandedId(pillar.id)}
                className="cursor-pointer h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border border-[var(--border)] bg-card hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <motion.div layoutId={`card-icon-${pillar.id}`}>
                      <pillar.icon className="w-8 h-8 text-[var(--accent-teal)] mb-4" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      layoutId={`card-title-${pillar.id}`}
                      className="text-lg font-medium text-foreground mb-3"
                    >
                      {pillar.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Placeholder indicator */}
                    <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
                      <div className="w-full h-24 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center">
                        <p className="text-xs text-[var(--foreground-muted)]">
                          {pillar.expandedContent.placeholder}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Expanded Card Modal */}
        <AnimatePresence>
          {expandedId && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setExpandedId(null)}
              />

              {/* Expanded Card */}
              {pillars.map((pillar) =>
                pillar.id === expandedId ? (
                  <motion.div
                    key={`expanded-${pillar.id}`}
                    layoutId={`card-container-${pillar.id}`}
                    className="fixed inset-4 md:inset-8 lg:inset-y-16 lg:inset-x-32 xl:inset-x-64 z-50 bg-card rounded-2xl shadow-2xl overflow-auto"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="p-8 md:p-12">
                      {/* Close Button */}
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => setExpandedId(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--background-secondary)] flex items-center justify-center hover:bg-[var(--background-tertiary)] transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </motion.button>

                      {/* Content */}
                      <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                          <motion.div layoutId={`card-icon-${pillar.id}`}>
                            <pillar.icon className="w-12 h-12 text-[var(--accent-teal)] mb-6" />
                          </motion.div>

                          <motion.h3
                            layoutId={`card-title-${pillar.id}`}
                            className="text-2xl md:text-3xl font-medium text-foreground mb-4"
                          >
                            {pillar.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground leading-relaxed mb-6"
                          >
                            {pillar.expandedContent.details}
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-sm text-muted-foreground"
                          >
                            {pillar.description}
                          </motion.p>
                        </div>

                        {/* Large Placeholder */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="w-full aspect-[4/3] rounded-xl bg-[var(--background-secondary)] border border-[var(--border-light)] flex items-center justify-center"
                        >
                          <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[var(--background-tertiary)] flex items-center justify-center">
                              <pillar.icon className="w-8 h-8 text-[var(--foreground-muted)]" />
                            </div>
                            <p className="text-sm text-[var(--foreground-muted)]">
                              {pillar.expandedContent.placeholder}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
