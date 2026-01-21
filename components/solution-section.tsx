import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const features = [
  "Modular wearable network of four sensors",
  "Two wrist bracelets + two socks or ankle straps",
  "Fully wireless and rechargeable",
  "Bluetooth Low Energy (BLE) communication",
  "Auto-sync to phone or laptop",
  "Low-profile form factor for all-day wear",
  "Direct-to-patient use—no clinic required",
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Our Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance mb-6">
            The GaitWay System
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A wearable gait monitoring platform designed for everyday use—not a lab system,
            but a practical tool for continuous symptom tracking.
          </p>
        </div>

        {/* Main Feature Image */}
        <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-12 bg-muted">
          <Image
            src="/images/project-dashboard.jpg"
            alt="Full GaitWay wearable system"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-white/90 text-sm">Complete GaitWay sensor system</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-6">
              Key System Features
            </h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-medium text-foreground mb-4">
              Designed for Real Life
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike clinic-bound systems, GaitWay is built from the ground up for home use.
              Patients can wear the sensors throughout their daily activities—walking around
              the house, running errands, or exercising—while the system quietly captures
              valuable gait data.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Wireless</Badge>
              <Badge variant="secondary">Rechargeable</Badge>
              <Badge variant="secondary">BLE Enabled</Badge>
              <Badge variant="secondary">Multi-Sensor</Badge>
              <Badge variant="secondary">Home Use</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
