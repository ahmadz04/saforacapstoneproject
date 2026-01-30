import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { ChallengeSection } from "@/components/challenge-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { ResultsSection } from "@/components/results-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function GaitWayShowcase() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <OverviewSection />
      <ChallengeSection />
      <SolutionSection />
      <FeaturesSection />
      <ResultsSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
