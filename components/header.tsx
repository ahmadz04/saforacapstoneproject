"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

// Premium easing
const premiumEase = [0.22, 1, 0.36, 1]
const smoothEase = [0.25, 0.1, 0.25, 1]

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#challenge", label: "Challenge" },
  { href: "#solution", label: "Solution" },
  { href: "#technology", label: "Technology" },
  { href: "#results", label: "Results" },
  { href: "#team", label: "Team" },
]

interface HeaderProps {
  showLogo?: boolean
}

export function Header({ showLogo = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      // Show header logo after scrolling past hero section
      setIsScrolled(window.scrollY > 400)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with morph animation */}
          <Link href="/" className="relative flex items-center">
            <AnimatePresence mode="wait">
              {isScrolled && showLogo && (
                <motion.div
                  key="header-logo"
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, x: -16 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, x: -16 }}
                  transition={{
                    duration: 0.5,
                    ease: premiumEase,
                  }}
                  className="relative h-8 w-28"
                >
                  <Image
                    src="/images/gaitway-logo.png"
                    alt="GaitWay"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {!isScrolled && showLogo && (
              <div className="h-8 w-28" /> // Placeholder to maintain layout
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm text-[var(--foreground-secondary)] hover:text-foreground transition-colors duration-300 py-1"
                >
                  {link.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 bg-[var(--accent-teal)]"
                    initial={{ width: 0, x: "-50%" }}
                    animate={{
                      width: isActive ? "100%" : 0,
                      x: "-50%"
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.25, ease: premiumEase }}
                  />
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block">
            <Button
              size="sm"
              className="relative rounded-full px-6 bg-foreground text-[var(--background)] hover:bg-foreground/90 transition-all duration-300 overflow-hidden group"
              asChild
            >
              <Link href="#team">
                <span className="relative z-10">Contact Team</span>
                {/* Orange underline indicator on hover */}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent-rust)]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: premiumEase }}
                />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: premiumEase }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-6 pt-2">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace("#", "")
                    return (
                      <motion.div
                        key={link.href}
                        initial={shouldReduceMotion ? {} : { opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.4, ease: premiumEase }}
                      >
                        <Link
                          href={link.href}
                          className={`text-sm transition-colors duration-300 block py-1 ${
                            isActive
                              ? "text-foreground font-medium"
                              : "text-[var(--foreground-secondary)] hover:text-foreground"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            {isActive && (
                              <motion.span
                                layoutId="mobile-active-indicator"
                                className="w-1.5 h-1.5 rounded-full bg-[var(--accent-teal)]"
                              />
                            )}
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    )
                  })}
                  <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.06, duration: 0.4, ease: premiumEase }}
                  >
                    <Button
                      size="sm"
                      className="rounded-full w-fit px-6 mt-2 bg-foreground text-[var(--background)] hover:bg-foreground/90 transition-colors duration-300"
                      asChild
                    >
                      <Link href="#team" onClick={() => setIsMobileMenuOpen(false)}>
                        Contact Team
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
