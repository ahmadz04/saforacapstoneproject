"use client"

import { motion } from "framer-motion"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"
import Image from "next/image"

const team = [
  { name: "Kirby Johnson" },
  { name: "Kyra Sunil" },
  { name: "Caleb Liow" },
  { name: "Alexis Raquino" },
  { name: "Safora Zia" },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Team"
          title="Senior Capstone Team"
          description="BE 177A, Department of Bioengineering, UCLA — 2025/2026"
          centered
        />

        {/* Team Photo */}
        <FadeIn className="mb-16">
          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--background-secondary)] border border-[var(--border-light)] shadow-lg"
            >
              <Image
                src="/images/team-photo.jpg"
                alt="GaitWay capstone team members"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </FadeIn>

        {/* Team Members */}
        <Stagger className="flex flex-wrap justify-center gap-4 mb-16">
          {team.map((member, index) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-[var(--border)] rounded-full px-6 py-3 hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-sm font-medium text-foreground">
                  {member.name}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Faculty Advisor */}
        <FadeIn delay={0.2}>
          <div className="max-w-lg mx-auto text-center bg-[var(--background-secondary)] rounded-2xl p-8 border border-[var(--border-light)]">
            <p className="text-sm font-medium text-[var(--accent-teal)] mb-2 tracking-wide uppercase">
              Faculty Advisor
            </p>
            <p className="text-xl font-medium text-foreground mb-1">
              Professor Sotiris Masmanidis
            </p>
            <p className="text-muted-foreground">
              Department of Neurobiology, UCLA
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
