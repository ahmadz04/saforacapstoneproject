import { CheckCircle } from "lucide-react"

const benefits = [
  "Captures symptom fluctuations throughout the entire day, not just during brief clinic visits",
  "Provides objective data to complement patient self-reports and clinical observations",
  "Helps clinicians optimize medication timing and dosing for individual patients",
  "May help shorten OFF periods by enabling more precise therapeutic adjustments",
  "Supports proactive intervention before falls or other adverse events occur",
]

export function NeedSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">
              The Opportunity
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance mb-6">
              The Need for Continuous Gait Monitoring
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Real-world, continuous gait data provides far more meaningful insight than periodic
              snapshots captured during clinic visits. By monitoring patients throughout their
              daily activities, we can build a complete picture of their motor function.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Objective gait metrics can support better medication timing and therapeutic
              decisions, potentially reducing fall risk and improving patient outcomes.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 border border-border">
            <h3 className="text-lg font-medium text-foreground mb-6">
              Benefits of Continuous Monitoring
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
