import { ArrowRight } from "lucide-react"

const nextSteps = [
  {
    title: "Wireless Time Synchronization",
    description:
      "Implement precise time synchronization across all four sensors to enable accurate multi-sensor gait analysis.",
  },
  {
    title: "Expanded Data Collection",
    description:
      "Continue collecting gait data from healthy subjects to refine our algorithms and establish baseline metrics.",
  },
  {
    title: "Hardware Refinement",
    description:
      "Iterate on PCB design and sensor enclosures to improve comfort, reduce size, and extend battery life.",
  },
  {
    title: "Mobile App Integration",
    description:
      "Develop a companion mobile app for real-time data visualization, Gait Score tracking, and data export.",
  },
  {
    title: "Clinical Validation Studies",
    description:
      "Partner with clinical researchers to conduct validation studies with Parkinson's patients in future work.",
  },
]

export function NextStepsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Roadmap
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Next Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nextSteps.map((step, index) => (
            <div
              key={step.title}
              className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background text-sm font-medium">
                  {index + 1}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <h3 className="text-base font-medium text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
