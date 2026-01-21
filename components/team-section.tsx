import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Kirby Johnson",
    role: "Bioengineering",
  },
  {
    name: "Kyra Sunil",
    role: "Bioengineering",
  },
  {
    name: "Caleb Liow",
    role: "Bioengineering",
  },
  {
    name: "Alexis Raquino",
    role: "Bioengineering",
  },
  {
    name: "Safora Zia",
    role: "Bioengineering",
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
            Senior Capstone Team
          </h2>
          <p className="text-muted-foreground mt-4">
            BE 177A, Department of Bioengineering, UCLA — 2025/2026
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {team.map((member) => (
            <Card
              key={member.name}
              className="border border-border bg-card hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-muted mb-4 flex items-center justify-center mx-auto">
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
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 lg:p-12">
          <h3 className="text-lg font-medium text-foreground mb-2">
            Faculty Advisor
          </h3>
          <p className="text-foreground font-medium text-xl mb-1">
            Professor Sotiris Masmanidis
          </p>
          <p className="text-muted-foreground">
            Department of Bioengineering, UCLA
          </p>
        </div>
      </div>
    </section>
  )
}
