import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ChallengesSection } from "@/components/challenges-section"
import { SolutionSection } from "@/components/solution-section"
import { FeaturesSection } from "@/components/features-section"
import { TeamSection } from "@/components/team-section"
import { ResultsSection } from "@/components/results-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function CapstoneShowcase() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <FeaturesSection />
      <TeamSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
