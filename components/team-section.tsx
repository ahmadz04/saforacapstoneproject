"use client"

import { motion } from "framer-motion"
import { FadeIn, SectionHeader, Stagger, StaggerItem } from "./animations"
import Image from "next/image"

const team = [
  { name: "Alexis Raquino" },
  { name: "Kirby Johnson" },
  { name: "Caleb Liow" },
  { name: "Kyra Sunil" },
  { name: "Safora Zia" },
]

export function TeamSection() {
  return (
    <section id="team" className="py-10 lg:py-12 bg-[var(--background)] scroll-mt-16 lg:scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="eyebrow-label mb-2">The Team</p>
          <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-1">
            Senior Capstone Team
          </h2>
          <p className="text-sm text-muted-foreground">
            BE 177, Department of Bioengineering, UCLA — 2025/2026
          </p>
        </div>

        {/* Team Photo */}
        <FadeIn className="mb-5">
          <div className="max-w-lg mx-auto">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[var(--background-secondary)] border border-[var(--border-light)] shadow-lg"
            >
              <Image
                src="/images/team-photo.png"
                alt="GaitWay capstone team members"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </FadeIn>

        {/* Team Members */}
        <Stagger className="flex flex-wrap justify-center gap-2 mb-5">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-card border border-[var(--border)] rounded-full px-4 py-1.5 hover:shadow-md transition-shadow duration-300"
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
          <div className="max-w-sm mx-auto text-center bg-[var(--background-secondary)] rounded-xl p-4 border border-[var(--border-light)]">
            <p className="text-xs font-medium text-[var(--accent-teal)] mb-0.5 tracking-wide uppercase">
              Faculty Advisor
            </p>
            <p className="text-base font-medium text-foreground">
              Professor Sotiris Masmanidis, PhD
            </p>
            <p className="text-xs text-muted-foreground">
              Department of Neurobiology, UCLA
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
