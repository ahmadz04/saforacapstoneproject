import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Radio, Activity } from "lucide-react"

const findings = [
  {
    icon: Radio,
    title: "Wireless Data Streaming",
    description:
      "Initial BLE testing demonstrated real-time wireless data streaming from multiple sensors to a central receiver.",
  },
  {
    icon: Activity,
    title: "Repeatable IMU Patterns",
    description:
      "IMU signals show repeatable patterns corresponding to different stages of the gait cycle across multiple test sessions.",
  },
  {
    icon: CheckCircle,
    title: "Gait Event Detection",
    description:
      "Rules-based algorithms successfully identify heel strike and toe-off events from the accelerometer and gyroscope data.",
  },
]

export function ResultsSection() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-background/60 mb-4">
            Validation
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-background text-balance">
            Testing & Preliminary Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-background/10">
            <Image
              src="/images/team-collab.jpg"
              alt="Testing setup and validation experiments"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white/80 text-sm">Laboratory testing setup</p>
            </div>
          </div>

          <div className="space-y-6">
            {findings.map((finding) => (
              <Card
                key={finding.title}
                className="bg-background/10 border-background/20"
              >
                <CardContent className="p-6 flex gap-4">
                  <finding.icon className="w-6 h-6 text-background shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-medium text-background mb-2">
                      {finding.title}
                    </h3>
                    <p className="text-sm text-background/70 leading-relaxed">
                      {finding.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-background/10 rounded-lg p-8 lg:p-12 border border-background/20">
          <h3 className="text-xl font-medium text-background mb-4">
            Important Note
          </h3>
          <p className="text-background/70 leading-relaxed">
            This project is a senior capstone engineering prototype. The system has not undergone
            clinical validation and is not FDA approved. The results presented here are preliminary
            findings from controlled laboratory testing with healthy subjects.
          </p>
        </div>
      </div>
    </section>
  )
}
