"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--background)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Capstone Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm tracking-wide text-[var(--foreground-secondary)] mb-8"
            >
              UCLA Bioengineering Senior Capstone 2025–2026
            </motion.p>

            {/* Logo as Primary Title */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative h-16 md:h-20 w-64 md:w-80">
                <Image
                  src="/images/gaitway-logo.png"
                  alt="GaitWay"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-medium text-foreground mb-6 leading-snug"
            >
              Continuous gait monitoring, designed for everyday life.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[var(--foreground-secondary)] leading-relaxed mb-10 max-w-xl"
            >
              GaitWay is a multi-sensor wearable system that monitors gait continuously
              outside the clinic—providing objective insight into motor symptoms in
              Parkinson's disease where traditional assessments fall short.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base bg-foreground text-[var(--background)] hover:bg-foreground/90 transition-all duration-300"
                asChild
              >
                <Link href="#overview">Explore the Project</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right - Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-md flex items-center justify-center">
              {/* Ambient glow ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-64 h-64 rounded-full bg-[var(--accent-teal)]/10 blur-3xl" />
              </motion.div>

              {/* Logo with floating + subtle pulse */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <motion.div
                  animate={{
                    filter: [
                      "drop-shadow(0 10px 30px rgba(18, 77, 84, 0.15))",
                      "drop-shadow(0 20px 40px rgba(18, 77, 84, 0.25))",
                      "drop-shadow(0 10px 30px rgba(18, 77, 84, 0.15))",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/gaitway-hero.png"
                    alt="GaitWay"
                    width={400}
                    height={200}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background-secondary)] to-transparent pointer-events-none" />
    </section>
  )
}
