import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    image: "/images/project-dashboard.jpg",
    title: "Intelligent Dashboard",
    description:
      "A comprehensive analytics platform providing real-time patient insights and predictive health metrics.",
    tags: ["React", "D3.js", "TensorFlow"],
  },
  {
    image: "/images/mobile-app.jpg",
    title: "Mobile Companion App",
    description:
      "Seamless mobile experience for healthcare providers to access patient data and alerts on-the-go.",
    tags: ["React Native", "Firebase", "Push Notifications"],
  },
  {
    image: "/images/architecture.jpg",
    title: "ML Pipeline Architecture",
    description:
      "Scalable machine learning infrastructure processing millions of data points for accurate predictions.",
    tags: ["Python", "AWS", "Kubernetes"],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Key Features
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            A comprehensive approach
            <br />
            to modern healthcare
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-muted">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/90 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
