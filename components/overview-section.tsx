import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, GitBranch, Eye } from "lucide-react"

const pillars = [
  {
    icon: Target,
    title: "Goal",
    description:
      "Develop a multi-sensor wearable system for continuous gait monitoring that can be used outside of clinical settings.",
  },
  {
    icon: GitBranch,
    title: "Approach",
    description:
      "Iterative development from a simple wired IMU prototype to a synchronized, multi-sensor wireless system. Collect preliminary data from healthy subjects and extract interpretable gait metrics such as step timing, cadence, and asymmetry.",
  },
  {
    icon: Eye,
    title: "Long-term Vision",
    description:
      "Enable continuous symptom monitoring to support personalized care for Parkinson's patients—helping clinicians make better-informed treatment decisions.",
  },
]

export function OverviewSection() {
  return (
    <section id="overview" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Project Overview
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance max-w-2xl">
            A modular and wearable gait analysis system for Parkinson's patients
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              GaitWay is a modular and wearable gait analysis system that provides continuous
              monitoring of motor symptoms for Parkinson's patients, with the goal of improving
              therapeutic outcomes through personalized care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our development pathway follows an iterative approach: starting with a simple wired
              IMU prototype, transitioning to wireless communication, and scaling to a fully
              synchronized multi-sensor system. Throughout this process, we collect data from
              healthy subjects to validate our gait metric extraction algorithms.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <Image
              src="/images/team-collab.jpg"
              alt="Early prototype and system evolution"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white/80 text-sm">Early prototype development</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <pillar.icon className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
