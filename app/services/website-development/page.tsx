"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Palette, Smartphone, Search, Globe } from "lucide-react"
import Link from "next/link"

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Development",
      description: "Built from scratch with modern technologies for optimal performance",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Professional Design",
      description: "Stunning, modern designs that reflect your brand identity",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Responsive",
      description: "Perfect display on all devices - desktop, tablet, and mobile",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices",
    },
  ]

  const services = [
    "Business Websites",
    "Portfolio Sites",
    "Landing Pages",
    "E-commerce Stores",
    "Blog Platforms",
    "Custom Web Applications",
  ]

  const pricingTiers = [
    {
      name: "Starter Website",
      price: "$899",
      description: "Perfect for small businesses and personal brands",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Contact form integration",
        "Basic SEO setup",
        "1 month support",
      ],
    },
    {
      name: "Professional Website",
      price: "$1,499",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Up to 10 pages",
        "Custom design & branding",
        "Advanced SEO optimization",
        "Analytics integration",
        "3 months support",
        "Content management system",
      ],
      popular: true,
    },
    {
      name: "E-commerce Solution",
      price: "$2,299",
      description: "Full online store with payment processing",
      features: [
        "Unlimited products",
        "Payment gateway setup",
        "Inventory management",
        "Order tracking system",
        "6 months support",
        "Marketing tools integration",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-6">
              <Globe className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Website Development</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get a stunning, modern, and responsive website that looks great on all devices and effectively represents
              your brand online.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src="/modern-website-development-workspace-with-multiple.jpg"
              alt="Website Development Workspace"
              className="w-full h-96 object-cover"
            />
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
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Web Development?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We create websites that not only look amazing but also drive results for your business.
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
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-white mb-6">Website Types We Build</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From simple landing pages to complex e-commerce platforms, we've got you covered.
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
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-white mb-6">Website Development Packages</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the perfect package for your business needs and budget.
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
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`bg-white/5 border-white/10 backdrop-blur-sm h-full ${tier.popular ? "ring-2 ring-blue-500/50" : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                    <div className="text-4xl font-bold text-blue-400 mt-4">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
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
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Website?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/contact">Start Your Project</Link>
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
