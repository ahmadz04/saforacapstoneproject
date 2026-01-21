import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Home, Heart, Shield } from "lucide-react"

const goals = [
  {
    icon: DollarSign,
    title: "Target Cost Under $100",
    description:
      "The full four-sensor system is designed to cost under $100, making it significantly more accessible than existing systems that cost hundreds to thousands of dollars.",
  },
  {
    icon: Home,
    title: "No Clinic Required",
    description:
      "GaitWay enables continuous monitoring without clinic visits. Patients can track their gait at home, during daily activities, and share data remotely with their care team.",
  },
  {
    icon: Shield,
    title: "Improved Safety",
    description:
      "By providing objective gait data, GaitWay aims to help identify deteriorating symptoms early, potentially reducing fall risk and enabling proactive intervention.",
  },
  {
    icon: Heart,
    title: "Better Quality of Life",
    description:
      "Our goal is to support patient independence and quality of life by enabling more personalized and responsive care based on real-world symptom data.",
  },
]

export function DesignGoalsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Design Goals & Intended Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {goals.map((goal) => (
            <Card
              key={goal.title}
              className="border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <goal.icon className="w-8 h-8 text-foreground mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {goal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
