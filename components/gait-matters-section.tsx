import { Card, CardContent } from "@/components/ui/card"

const gaitChanges = [
  {
    title: "Reduced Stride Length",
    description: "Shorter steps that limit mobility and increase effort required for walking.",
  },
  {
    title: "Slower Walking Speed",
    description: "Decreased pace that affects daily activities and independence.",
  },
  {
    title: "Increased Asymmetry",
    description: "Uneven gait patterns between left and right sides of the body.",
  },
  {
    title: "Longer Double-Support Time",
    description: "More time spent with both feet on the ground, indicating instability.",
  },
]

export function GaitMattersSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Understanding the Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance max-w-2xl">
            Why Gait Matters in Parkinson's Disease
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Gait impairment is one of the key motor symptoms of Parkinson's disease. Healthy
              gait consists of alternating stance and swing phases—a natural rhythm that becomes
              disrupted as the disease progresses.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Parkinsonian gait is characterized by several measurable changes that increase fall
              risk, aspiration risk, and hospitalizations. These changes directly impact patient
              safety and quality of life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Critically, motor symptoms fluctuate throughout the day due to medication ON/OFF
              states. These fluctuations are poorly captured in short clinic visits, which
              typically last only 15-30 minutes and may not reflect the patient's true daily
              experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {gaitChanges.map((change) => (
              <Card
                key={change.title}
                className="border border-border bg-background"
              >
                <CardContent className="p-6">
                  <h3 className="text-base font-medium text-foreground mb-2">
                    {change.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {change.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
