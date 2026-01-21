import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const technologies = [
  {
    image: "/images/architecture.jpg",
    title: "Hardware & Electronics Design",
    description:
      "Each sensor contains an inertial measurement unit (IMU) to capture acceleration and angular velocity. A custom-designed PCB integrates the IMU, ESP32 microcontroller, power management, and BLE communication. The PCB is designed to be compact, low-power, and suitable for wearable use.",
    tags: ["IMU Sensors", "ESP32", "Custom PCB", "BLE"],
    caption: "PCB layout and assembled electronics",
  },
  {
    image: "/images/mobile-app.jpg",
    title: "Modular Mechanical Design",
    description:
      "Sensors can be worn as wrist bracelets, integrated into socks, or attached via ankle straps. Modular attachment options allow flexibility across different activities and user preferences. Design prioritizes comfort, ease of donning/doffing, and consistent sensor placement.",
    tags: ["3D Printed", "Modular", "Ergonomic", "Flexible"],
    caption: "Sensor enclosure CAD model",
  },
  {
    image: "/images/project-dashboard.jpg",
    title: "Data & Gait Score",
    description:
      "IMU data is processed to identify key gait events such as heel strike and toe-off. Gait parameters extracted include stride length, stride duration, walking speed, right/left asymmetry, and double-support time. A single interpretable Gait Score (0-100) aggregates multiple parameters into a daily summary.",
    tags: ["Gait Events", "Metrics", "Gait Score", "Visualization"],
    caption: "Example gait data visualization",
  },
]

export function FeaturesSection() {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Engineering the GaitWay System
          </h2>
        </div>

        <div className="space-y-20">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tech.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-muted ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white/80 text-sm">{tech.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gait Parameters Detail */}
        <div className="mt-20 bg-background rounded-lg p-8 lg:p-12 border border-border">
          <h3 className="text-xl font-medium text-foreground mb-6">
            Gait Parameters Extracted
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Stride Length", desc: "Distance per step" },
              { name: "Stride Duration", desc: "Time per gait cycle" },
              { name: "Walking Speed", desc: "Pace of locomotion" },
              { name: "Asymmetry", desc: "Left/right imbalance" },
              { name: "Double-Support", desc: "Both feet grounded" },
            ].map((param) => (
              <div key={param.name} className="text-center">
                <p className="font-medium text-foreground mb-1">{param.name}</p>
                <p className="text-sm text-muted-foreground">{param.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
