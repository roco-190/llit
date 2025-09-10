import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Monitor, Shield, Cloud, Wrench, Smartphone, Database, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Remote Support",
    description: "Quick fixes for software issues, system optimization, and troubleshooting from anywhere.",
    features: ["Screen sharing support", "Software installation", "Performance optimization"],
    href: "/services/remote-support",
    image: "/remote-computer-support-technician-helping-custome.jpg",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions and threat monitoring.",
    features: ["Firewall configuration", "Antivirus setup", "Security audits"],
    href: "/services/cybersecurity",
    image: "/cybersecurity-shield-protecting-computer-network.jpg",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless migration to cloud platforms with ongoing management and optimization.",
    features: ["Cloud migration", "Backup solutions", "Data synchronization"],
    href: "/services/cloud-solutions",
    image: "/cloud-computing-servers-data-center-technology.jpg",
  },
  {
    icon: Wrench,
    title: "Network Setup",
    description: "Professional network installation and configuration for optimal performance.",
    features: ["Wi-Fi optimization", "Router configuration", "Network security"],
    href: "/services/network-setup",
    image: "/network-cables-router-wifi-setup-installation.jpg",
  },
  {
    icon: Smartphone,
    title: "Device Management",
    description: "Complete setup and management of all your business devices and peripherals.",
    features: ["Device configuration", "Mobile device management", "Printer setup"],
    href: "/services/device-management",
    image: "/business-devices-smartphones-tablets-laptops-setup.jpg",
  },
  {
    icon: Database,
    title: "Data Recovery",
    description: "Professional data recovery services to retrieve your important files and documents.",
    features: ["Hard drive recovery", "File restoration", "Backup implementation"],
    href: "/services/data-recovery",
    image: "/data-recovery-hard-drive-backup-restoration.jpg",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive IT Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From emergency fixes to complete infrastructure overhauls, we provide the full spectrum of IT services your
            business needs to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in border-2 hover:border-accent/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group bg-transparent">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link href="/contact">Get Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
