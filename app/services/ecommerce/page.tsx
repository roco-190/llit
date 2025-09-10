"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, CreditCard, Package, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function EcommercePage() {
  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Product Management",
      description: "Easy-to-use admin panel for managing products, inventory, and orders",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Multiple payment gateways with SSL encryption for safe transactions",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Order Tracking",
      description: "Complete order management system with automated notifications",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Sales Analytics",
      description: "Detailed reports and insights to track your business performance",
    },
  ]

  const services = [
    "Custom E-commerce Development",
    "Payment Gateway Integration",
    "Inventory Management System",
    "Shopping Cart Optimization",
    "Mobile Commerce Solutions",
    "Multi-vendor Marketplaces",
    "Subscription & Recurring Billing",
    "Product Catalog Management",
  ]

  const pricingTiers = [
    {
      name: "Starter Store",
      price: "$1,499",
      description: "Perfect for small businesses starting online",
      features: [
        "Up to 50 products",
        "Basic payment integration",
        "Mobile responsive design",
        "Order management system",
        "Basic analytics",
        "3 months support",
      ],
    },
    {
      name: "Professional Store",
      price: "$2,499",
      description: "Complete solution for growing businesses",
      features: [
        "Unlimited products",
        "Multiple payment gateways",
        "Advanced inventory management",
        "Customer accounts & wishlists",
        "Marketing tools integration",
        "6 months support",
        "SEO optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise Store",
      price: "$4,999",
      description: "Advanced features for large-scale operations",
      features: [
        "Everything in Professional",
        "Multi-vendor marketplace",
        "Advanced reporting & analytics",
        "Custom integrations",
        "Priority support",
        "12 months support",
        "Performance optimization",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500/20 rounded-full mb-6">
              <ShoppingCart className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">E-commerce Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to sell online? We build secure and user-friendly e-commerce platforms to help you sell your
              products or services to the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img src="/modern-ecommerce-website-showing-product-catalog-a.jpg" alt="E-commerce Platform" className="w-full h-96 object-cover" />
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
            <h2 className="text-4xl font-bold text-white mb-6">E-commerce Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to run a successful online store and grow your business.
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
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-white mb-6">E-commerce Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive e-commerce solutions to help you succeed in the digital marketplace.
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
                <ArrowRight className="w-5 h-5 text-purple-400 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-white mb-6">E-commerce Packages</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the perfect e-commerce solution for your business size and requirements.
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
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`bg-white/5 border-white/10 backdrop-blur-sm h-full ${tier.popular ? "ring-2 ring-purple-500/50" : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                    <div className="text-4xl font-bold text-purple-400 mt-4">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700" asChild>
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
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Selling Online?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's build an e-commerce platform that converts visitors into customers and grows your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact">Launch Your Store</Link>
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
