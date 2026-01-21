import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { GaitMattersSection } from "@/components/gait-matters-section"
import { ProblemSection } from "@/components/problem-section"
import { NeedSection } from "@/components/need-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { ResultsSection } from "@/components/results-section"
import { DesignGoalsSection } from "@/components/design-goals-section"
import { NextStepsSection } from "@/components/next-steps-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function GaitWayShowcase() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OverviewSection />
      <GaitMattersSection />
      <ProblemSection />
      <NeedSection />
      <SolutionSection />
      <FeaturesSection />
      <ResultsSection />
      <DesignGoalsSection />
      <NextStepsSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
