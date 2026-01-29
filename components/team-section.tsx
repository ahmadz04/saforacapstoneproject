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
    <section id="team" className="py-12 lg:py-16 bg-[var(--background)] scroll-mt-20 lg:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="The Team"
          title="Senior Capstone Team"
          description="BE 177A, Department of Bioengineering, UCLA — 2025/2026"
          centered
        />

        {/* Team Photo */}
        <FadeIn className="mb-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[var(--background-secondary)] border border-[var(--border-light)] shadow-lg"
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
        <Stagger className="flex flex-wrap justify-center gap-3 mb-8">
          {team.map((member, index) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-[var(--border)] rounded-full px-5 py-2 hover:shadow-md transition-shadow duration-300"
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
          <div className="max-w-md mx-auto text-center bg-[var(--background-secondary)] rounded-2xl p-6 border border-[var(--border-light)]">
            <p className="text-sm font-medium text-[var(--accent-teal)] mb-1 tracking-wide uppercase">
              Faculty Advisor
            </p>
            <p className="text-lg font-medium text-foreground mb-0.5">
              Professor Sotiris Masmanidis
            </p>
            <p className="text-sm text-muted-foreground">
              Department of Neurobiology, UCLA
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
