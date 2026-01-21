import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Sarah Chen",
    role: "Project Lead & ML Engineer",
    bio: "Specializes in deep learning architectures and healthcare AI applications.",
  },
  {
    name: "Marcus Johnson",
    role: "Full-Stack Developer",
    bio: "Expert in building scalable web applications and real-time data systems.",
  },
  {
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    bio: "Focuses on creating intuitive healthcare interfaces and user experiences.",
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    bio: "Passionate about transforming raw medical data into actionable insights.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            The Team
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-balance">
            Meet the minds behind
            <br />
            HealthSync AI
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <Card
              key={member.name}
              className="border border-border bg-card hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-muted mb-6 flex items-center justify-center">
                  <span className="text-xl font-medium text-muted-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-base font-medium text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
