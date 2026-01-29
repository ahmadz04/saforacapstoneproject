"use client"

import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { ReactNode, createContext, useContext, useState } from "react"

// Animation variants for fade-in with slide
export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

// Stagger children animation
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Spring transition for smooth morph effects
export const springTransition = {
  type: "spring",
  stiffness: 350,
  damping: 30,
}

// Calm transition for subtle animations
export const calmTransition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out
}

// FadeIn component for scroll-triggered animations
interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: FadeInProps) {
  const directionOffset = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children wrapper
interface StaggerProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Stagger({ children, className = "", delay = 0 }: StaggerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={calmTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Section header with morph-like settle animation
interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-sm font-medium text-[var(--accent-teal)] mb-3 tracking-wide uppercase"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        layout
        className={`text-3xl md:text-4xl font-medium text-foreground text-balance ${
          !centered ? "max-w-2xl" : ""
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`text-muted-foreground mt-4 ${centered ? "max-w-2xl mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

// Expandable card context for shared layout animations
interface ExpandableCardContextType {
  expandedId: string | null
  setExpandedId: (id: string | null) => void
}

const ExpandableCardContext = createContext<ExpandableCardContextType>({
  expandedId: null,
  setExpandedId: () => {},
})

export function ExpandableCardProvider({ children }: { children: ReactNode }) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <ExpandableCardContext.Provider value={{ expandedId, setExpandedId }}>
      <LayoutGroup>
        {children}
        <AnimatePresence>
          {expandedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setExpandedId(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </ExpandableCardContext.Provider>
  )
}

export function useExpandableCard() {
  return useContext(ExpandableCardContext)
}

// Expandable card component
interface ExpandableCardProps {
  id: string
  children: ReactNode
  expandedContent: ReactNode
  className?: string
}

export function ExpandableCard({
  id,
  children,
  expandedContent,
  className = "",
}: ExpandableCardProps) {
  const { expandedId, setExpandedId } = useExpandableCard()
  const isExpanded = expandedId === id

  return (
    <>
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => setExpandedId(id)}
        className={`cursor-pointer ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layoutId={`card-${id}`}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-card rounded-2xl shadow-2xl overflow-auto"
            transition={springTransition}
          >
            <div className="p-6 md:p-8 lg:p-12">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setExpandedId(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.button>
              {expandedContent}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Page transition wrapper
interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// Logo morph wrapper for hero-to-header transition
interface LogoMorphProps {
  isScrolled: boolean
  children: ReactNode
  className?: string
}

export function LogoMorph({ isScrolled, children, className = "" }: LogoMorphProps) {
  return (
    <motion.div
      layout
      layoutId="gaitway-logo"
      transition={springTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
