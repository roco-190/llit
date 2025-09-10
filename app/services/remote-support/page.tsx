import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, Clock, Shield, CheckCircle, ArrowRight, Phone } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Instant Response",
    description: "Connect within minutes for immediate assistance with your technical issues.",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description: "Military-grade encryption ensures your data stays private during remote sessions.",
  },
  {
    icon: CheckCircle,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience in troubleshooting and repair.",
  },
]

const services = [
  "Software installation and updates",
  "Virus and malware removal",
  "System performance optimization",
  "Email and application setup",
  "File recovery and backup",
  "Network connectivity issues",
  "Printer and peripheral setup",
  "Operating system troubleshooting",
]

export default function RemoteSupportPage() {
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
                  <Monitor className="w-6 h-6 text-accent-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Remote Support</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Get instant help with your computer problems from anywhere. Our certified technicians can securely
                access your device to diagnose and fix issues in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 group">
                  <Link href="/contact">
                    Start Remote Session
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:4379741444">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in">
              <img
                src="/remote-computer-support-technician-helping-custome.jpg"
                alt="Remote Support Service"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Remote Support?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast, secure, and reliable remote assistance that gets you back to work quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What We Can Fix Remotely</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our remote support covers a wide range of technical issues. If we can't fix it remotely, we'll schedule
                an on-site visit at no extra charge.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in">
              <Card className="p-8 bg-card border-2 border-accent/20">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-foreground">Remote Support Pricing</CardTitle>
                  <CardDescription>Transparent, affordable rates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">$75</div>
                    <div className="text-muted-foreground">Per session (up to 2 hours)</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Diagnostic & troubleshooting</span>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Software installation</span>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">System optimization</span>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Follow-up support (7 days)</span>
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/contact">Book Remote Session</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
