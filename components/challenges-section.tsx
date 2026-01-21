import { Card, CardContent } from "@/components/ui/card"

const challenges = [
  {
    number: "1",
    title: "Data Fragmentation",
    description:
      "Address the critical issue of fragmented patient data across multiple healthcare systems and platforms.",
  },
  {
    number: "2",
    title: "Diagnostic Accuracy",
    description:
      "Leverage AI to improve diagnostic accuracy and reduce human error in complex medical cases.",
  },
  {
    number: "3",
    title: "Operational Efficiency",
    description:
      "Streamline healthcare workflows and reduce administrative burden on medical professionals.",
  },
]

export function ChallengesSection() {
  return (
    <section id="overview" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-sm font-medium text-muted-foreground mb-4">
          The Challenge
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card
              key={challenge.number}
              className="border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <span className="text-6xl font-light text-muted-foreground/30 mb-4 block">
                  {challenge.number}
                </span>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
