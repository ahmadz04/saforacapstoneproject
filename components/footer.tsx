import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const navigation = {
  project: [
    { name: "Overview", href: "#overview" },
    { name: "Features", href: "#features" },
    { name: "Team", href: "#team" },
    { name: "Results", href: "#results" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Research Paper", href: "#" },
    { name: "GitHub Repository", href: "#" },
    { name: "Demo Video", href: "#" },
  ],
  contact: [
    { name: "healthsync@university.edu", href: "mailto:healthsync@university.edu" },
    { name: "Department of Computer Science", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              HealthSync AI
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A capstone project transforming healthcare through AI innovation.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
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

          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              {navigation.contact.map((item) => (
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

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 HealthSync AI. Capstone Project.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Acknowledgments
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
