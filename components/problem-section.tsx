import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, DollarSign, Building2, Eye } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Narrow Therapeutic Window",
    description:
      "Parkinson's medications must be carefully dosed within a narrow \"Goldilocks zone.\" Too little provides inadequate symptom relief; too much causes dyskinesia.",
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description:
      "Clinicians rely heavily on patient self-report and brief clinic observations. OFF periods often go undetected, increasing risk of falls and injury.",
  },
  {
    icon: DollarSign,
    title: "Expensive Systems",
    description:
      "Existing gait monitoring systems cost hundreds to thousands of dollars, putting them out of reach for most patients and healthcare systems.",
  },
  {
    icon: Building2,
    title: "Clinic-Bound Technology",
    description:
      "Current solutions are designed for clinical environments, making them impractical for continuous daily monitoring in real-world settings.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance max-w-2xl">
            Current care falls short of what patients need
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem) => (
            <Card
              key={problem.title}
              className="border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <problem.icon className="w-8 h-8 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 lg:p-12">
          <h3 className="text-xl font-medium text-foreground mb-4">
            Additional Barriers to Adoption
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2">Visually Intrusive</p>
              <p>Many wearable devices are bulky and stigmatizing, making patients reluctant to wear them in public.</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">Uncomfortable</p>
              <p>Devices designed for short-term clinical use are often impractical for all-day wear over extended periods.</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">No Accessible Solution</p>
              <p>There is currently no widely accessible, affordable solution for continuous gait monitoring in daily life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
