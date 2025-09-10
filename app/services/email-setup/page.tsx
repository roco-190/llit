"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Shield, Smartphone, Cloud } from "lucide-react"
import Link from "next/link"

export default function EmailSetupPage() {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Professional Addresses",
      description: "Custom email addresses using your business domain name",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Spam filtering, virus protection, and encryption for secure communication",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Access",
      description: "Access your email from any device - phone, tablet, or computer",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Storage",
      description: "Generous storage space with automatic backup and sync",
    },
  ]

  const services = [
    "Custom Domain Email Setup",
    "Email Client Configuration",
    "Mobile Device Setup",
    "Spam & Security Configuration",
    "Email Migration Services",
    "Shared Mailbox Setup",
    "Email Forwarding & Aliases",
    "Backup & Recovery Setup",
  ]

  const pricingTiers = [
    {
      name: "Basic Email",
      price: "$99",
      description: "Perfect for individuals and freelancers",
      features: [
        "1 professional email address",
        "Email client setup (1 device)",
        "Basic spam protection",
        "Email migration included",
        "30 days support",
      ],
    },
    {
      name: "Business Email",
      price: "$199",
      description: "Ideal for small businesses and teams",
      features: [
        "Up to 5 email addresses",
        "Multi-device setup",
        "Advanced security features",
        "Shared mailboxes",
        "Email aliases & forwarding",
        "90 days support",
      ],
      popular: true,
    },
    {
      name: "Enterprise Email",
      price: "$399",
      description: "Complete solution for larger organizations",
      features: [
        "Unlimited email addresses",
        "Advanced admin controls",
        "Enterprise security suite",
        "Email archiving & compliance",
        "Priority migration service",
        "6 months support",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full mb-6">
              <Mail className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Professional Email Setup</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build credibility with a professional email address (e.g., yourname@yourbusiness.com). We'll set up and
              configure it for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img src="/professional-email-setup-showing-multiple-devices-.jpg" alt="Professional Email Setup" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Professional Email Benefits</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Enhance your business credibility and communication with a professional email solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Email Services We Provide</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Complete email setup and configuration services for individuals and businesses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Email Setup Packages</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the right email solution for your business needs and team size.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`bg-white/5 border-white/10 backdrop-blur-sm h-full ${tier.popular ? "ring-2 ring-cyan-500/50" : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                    <div className="text-4xl font-bold text-cyan-400 mt-4">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Professional Email?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's set up a professional email system that enhances your business credibility and communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                <Link href="/contact">Setup My Email</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
