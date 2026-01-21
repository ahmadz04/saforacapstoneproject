import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Abstract background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-6">
          UCLA Bioengineering Senior Capstone 2025
        </p>
        <div className="relative h-20 md:h-28 lg:h-32 w-full max-w-md mx-auto mb-4">
          <Image
            src="/images/gaitway-logo.png"
            alt="GaitWay"
            fill
            className="object-contain brightness-0 invert"
            priority
          />
        </div>
        <p className="text-xl md:text-2xl text-white/90 font-light mb-8">
          Continuous Gait Monitoring, Designed for Everyday Life
        </p>
        <p className="text-lg text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed mb-10">
          GaitWay is a multi-sensor wearable system designed to monitor gait continuously
          outside of clinical settings. By capturing real-world movement data throughout the day,
          GaitWay provides objective insight into motor symptoms in Parkinson's disease—where
          traditional clinic-based assessments fall short.
        </p>
        <Button size="lg" className="rounded-full px-10 text-base" asChild>
          <Link href="#overview">Explore the System</Link>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
