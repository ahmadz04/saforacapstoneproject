import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SolutionSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance">
            Bridging innovation, accuracy
            <br />
            and patient care
          </h2>
        </div>

        {/* Main Feature Image */}
        <div className="relative grid md:grid-cols-2 gap-2 mb-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/team-collab.jpg"
              alt="Team collaborating on healthcare solutions"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/project-dashboard.jpg"
              alt="HealthSync AI Dashboard interface"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-8">
            HealthSync AI serves as a transformative solution in modern healthcare, 
            combining advanced machine learning algorithms with intuitive interfaces. 
            Our platform provides real-time analytics, predictive diagnostics, and 
            seamless integration with existing healthcare infrastructure.
          </p>
          <Button variant="outline" className="rounded-full px-8 bg-transparent">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
