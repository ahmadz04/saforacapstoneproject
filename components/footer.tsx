"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border-light)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="relative h-8 w-28 mb-6">
            <Image
              src="/images/gaitway-logo.png"
              alt="GaitWay"
              fill
              className="object-contain"
            />
          </div>

          {/* Main Text */}
          <p className="text-sm text-muted-foreground mb-2">
            Senior Capstone Project 2025–2026
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Department of Bioengineering, UCLA
          </p>

          {/* Disclaimer */}
          <p className="text-xs text-[var(--foreground-muted)] max-w-md">
            For educational and research purposes only. This system has not undergone clinical validation and is not FDA approved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
