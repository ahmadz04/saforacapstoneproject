"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 94, suffix: "%", label: "Diagnostic Accuracy" },
  { value: 3.2, suffix: "M", label: "Data Points Processed" },
  { value: 47, suffix: "%", label: "Efficiency Improvement" },
  { value: 12, suffix: "k+", label: "Patient Records Analyzed" },
]

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const duration = 2000
    const startValue = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(startValue + (value - startValue) * easeOut)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, isVisible])

  return (
    <span>
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="results"
      className="py-24 lg:py-32 bg-foreground text-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-background/60 mb-4">
            Project Results
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-background text-balance">
            Measurable impact on
            <br />
            healthcare outcomes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl lg:text-6xl font-light text-background mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-sm text-background/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-background/20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-background mb-4">
                Research Validation
              </h3>
              <p className="text-background/70 leading-relaxed">
                Our AI model was validated against a dataset of over 50,000 
                historical medical cases, demonstrating superior performance 
                compared to traditional diagnostic methods. The system achieved 
                state-of-the-art results in early disease detection across 
                multiple pathology categories.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-background mb-4">
                Clinical Pilot Program
              </h3>
              <p className="text-background/70 leading-relaxed">
                A 6-month pilot program conducted with three partner hospitals 
                showed significant improvements in diagnostic workflows. Medical 
                staff reported a 47% reduction in time spent on routine analysis, 
                allowing more focus on patient care and complex cases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
