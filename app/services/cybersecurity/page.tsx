import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Phone } from "lucide-react"

const threats = [
  {
    icon: AlertTriangle,
    title: "Malware & Viruses",
    description: "Protect against malicious software that can steal data or damage systems.",
  },
  {
    icon: Lock,
    title: "Data Breaches",
    description: "Prevent unauthorized access to sensitive business and customer information.",
  },
  {
    icon: Eye,
    title: "Phishing Attacks",
    description: "Guard against deceptive emails and websites designed to steal credentials.",
  },
]

const solutions = [
  "Advanced firewall configuration",
  "Antivirus and anti-malware setup",
  "Email security filtering",
  "Network vulnerability assessment",
  "Employee security training",
  "Backup and disaster recovery",
  "Password policy implementation",
  "Multi-factor authentication setup",
]

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Cybersecurity</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Protect your business from cyber threats with comprehensive security solutions. From firewall setup to
                employee training, we secure every aspect of your digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 group">
                  <Link href="/contact">
                    Get Security Assessment
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:4379741444">
                    <Phone className="mr-2 w-4 h-4" />
                    Emergency Support
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in">
              <img
                src="/cybersecurity-shield-protecting-computer-network-f.jpg"
                alt="Cybersecurity Protection"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Common Cyber Threats</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the risks is the first step to protection. Here are the most common threats businesses face
              today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <Card
                key={index}
                className="text-center animate-scale-in border-2 hover:border-destructive/50 transition-colors"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <threat.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{threat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{threat.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="/cybersecurity-team-monitoring-network-security-das.jpg"
                alt="Security Monitoring"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Security Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive protection tailored to your business needs. We implement multiple layers of security to
                keep your data safe and your operations running smoothly.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Security Packages</h2>
            <p className="text-xl text-muted-foreground">Choose the right level of protection for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Basic Protection</CardTitle>
                <div className="text-3xl font-bold text-accent mt-4">$150</div>
                <CardDescription>One-time setup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Antivirus installation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Basic firewall setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Password policy setup</span>
                </div>
                <Button asChild className="w-full mt-6 bg-transparent" variant="outline">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in border-2 border-accent" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Business Security</CardTitle>
                <div className="text-3xl font-bold text-accent mt-4">$350</div>
                <CardDescription>Complete security audit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Everything in Basic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Network vulnerability scan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Email security setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Employee training session</span>
                </div>
                <Button asChild className="w-full mt-6 bg-accent hover:bg-accent/90">
                  <Link href="/contact">Most Popular</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Enterprise Shield</CardTitle>
                <div className="text-3xl font-bold text-accent mt-4">$750</div>
                <CardDescription>Complete security overhaul</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Everything in Business</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Advanced threat monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Disaster recovery plan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">24/7 monitoring (3 months)</span>
                </div>
                <Button asChild className="w-full mt-6 bg-transparent" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
