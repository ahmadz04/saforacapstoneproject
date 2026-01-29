"use client"

import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from "framer-motion"
import { ReactNode, createContext, useContext, useState } from "react"

// Premium easing - smooth, professional feel
const premiumEase = [0.22, 1, 0.36, 1] // cubic-bezier for expo-out
const smoothEase = [0.25, 0.1, 0.25, 1]

// Animation variants for fade-in with slide (premium timing)
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
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.96 },
}

// Stagger children animation
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// Premium spring transition (no bounce, professional)
export const springTransition = {
  type: "spring",
  stiffness: 280,
  damping: 35,
  mass: 1,
}

// Premium calm transition for subtle animations
export const calmTransition = {
  duration: 0.5,
  ease: premiumEase,
}

// Slower premium transition for scroll reveals
export const revealTransition = {
  duration: 0.6,
  ease: premiumEase,
}

// Card hover transition
export const cardHoverTransition = {
  duration: 0.35,
  ease: smoothEase,
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
  const shouldReduceMotion = useReducedMotion()

  const directionOffset = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
    none: {},
  }

  // If reduced motion is preferred, skip animations
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: premiumEase,
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
  staggerDelay?: number
}

export function Stagger({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.12
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: staggerDelay,
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
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={fadeInUp}
      transition={revealTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Section header with premium settle animation
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
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""} ${className}`}>
        {label && (
          <p className="eyebrow-label mb-3">
            {label}
          </p>
        )}
        <h2 className={`text-3xl md:text-4xl font-medium text-foreground text-balance ${!centered ? "max-w-2xl" : ""}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-muted-foreground mt-4 ${centered ? "max-w-2xl mx-auto" : ""}`}>
            {description}
          </p>
        )}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: premiumEase,
      }}
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: premiumEase }}
          className="eyebrow-label mb-3"
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
          transition={{ delay: 0.2, duration: 0.5, ease: premiumEase }}
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
              transition={{ duration: 0.3, ease: smoothEase }}
              className="fixed inset-0 bg-[var(--color-primary-dark)]/20 backdrop-blur-sm z-40"
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
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => setExpandedId(id)}
        className={`cursor-pointer ${className}`}
        whileHover={shouldReduceMotion ? {} : { y: -4 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
        transition={cardHoverTransition}
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
                transition={{ delay: 0.2, duration: 0.3 }}
                onClick={() => setExpandedId(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors duration-300"
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
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: smoothEase }}
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

// Premium card wrapper with hover effects
interface PremiumCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function PremiumCard({ children, className = "", onClick }: PremiumCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={shouldReduceMotion ? {} : {
        y: -4,
        transition: cardHoverTransition
      }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={revealTransition}
    >
      {/* Subtle accent line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[var(--accent-rust)]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.35, ease: premiumEase }}
      />
      {children}
    </motion.div>
  )
}
