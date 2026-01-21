import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
          Want to learn more about our project?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          We'd love to share more details about HealthSync AI and discuss 
          potential collaborations or research opportunities.
        </p>
        <Button className="rounded-full px-8">Get in Touch</Button>
      </div>
    </section>
  )
}
