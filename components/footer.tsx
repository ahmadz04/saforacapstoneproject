import Link from "next/link"
import Image from "next/image"

const navigation = {
  project: [
    { name: "Overview", href: "#overview" },
    { name: "Solution", href: "#solution" },
    { name: "Technology", href: "#technology" },
    { name: "Team", href: "#team" },
  ],
  resources: [
    { name: "Results", href: "#results" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="relative block h-8 w-28">
              <Image
                src="/images/gaitway-logo.png"
                alt="GaitWay"
                fill
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
              A modular and wearable gait analysis system that provides continuous monitoring
              of motor symptoms for Parkinson's patients, with the goal of improving therapeutic
              outcomes through personalized care.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Senior Capstone Project — 2025/2026
              <br />
              Department of Bioengineering, UCLA
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Project</h3>
            <ul className="space-y-3">
              {navigation.project.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            GaitWay — Senior Capstone Project 2025/2026 — Department of Bioengineering, UCLA
            <br />
            <span className="text-xs">For educational and research purposes only.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
