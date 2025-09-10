"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Monitor, Shield, Cloud, Wrench, ArrowRight, CheckCircle } from "lucide-react"

const stats = [
  { label: "Happy Clients", value: "500+" },
  { label: "Projects Completed", value: "1,200+" },
  { label: "Years Experience", value: "8+" },
  { label: "Response Time", value: "<1hr" },
]

const features = [
  "Remote & On-site Support",
  "24/7 Emergency Response",
  "Certified IT Professionals",
  "Satisfaction Guaranteed",
]

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/5 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Professional IT Solutions for
              <span className="text-accent"> Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Fast, reliable, and affordable IT support when you need it most. From remote troubleshooting to complete
              infrastructure setup, we've got you covered.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 group">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services/remote-support">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-fade-in">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-accent/20">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Monitor, label: "Remote Support", color: "text-blue-500" },
                  { icon: Shield, label: "Cybersecurity", color: "text-green-500" },
                  { icon: Cloud, label: "Cloud Solutions", color: "text-purple-500" },
                  { icon: Wrench, label: "Network Setup", color: "text-orange-500" },
                ].map((item, index) => (
                  <div key={index} className="text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-16 h-16 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center">
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-slide-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
