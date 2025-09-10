"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, TrendingUp, Target, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function SEOPage() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Keyword Research",
      description: "Identify high-value keywords your customers are searching for",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Ranking Improvement",
      description: "Boost your search engine rankings with proven optimization techniques",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Track your progress with detailed performance reports",
    },
  ]

  const services = [
    "On-Page SEO Optimization",
    "Technical SEO Audits",
    "Local Business Optimization",
    "Content Strategy Development",
    "Link Building Campaigns",
    "Competitor Analysis",
    "Google My Business Setup",
    "Site Speed Optimization",
  ]

  const pricingTiers = [
    {
      name: "SEO Starter",
      price: "$299/mo",
      description: "Essential SEO for small businesses",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Google My Business setup",
        "Monthly progress reports",
        "Basic technical SEO",
      ],
    },
    {
      name: "SEO Professional",
      price: "$599/mo",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Everything in Starter",
        "Content creation & optimization",
        "Link building campaigns",
        "Competitor analysis",
        "Local SEO optimization",
        "Bi-weekly strategy calls",
      ],
      popular: true,
    },
    {
      name: "SEO Enterprise",
      price: "$999/mo",
      description: "Advanced SEO for established businesses",
      features: [
        "Everything in Professional",
        "Advanced technical SEO",
        "Multi-location optimization",
        "Custom reporting dashboard",
        "Dedicated SEO specialist",
        "Weekly strategy sessions",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">Search Engine Optimization</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Increase your visibility on search engines like Google. We optimize your site to attract more organic
              traffic and potential customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img src="/seo-analytics-dashboard-showing-search-rankings-an.jpg" alt="SEO Analytics Dashboard" className="w-full h-96 object-cover" />
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
            <h2 className="text-4xl font-bold text-white mb-6">Our SEO Approach</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We use proven strategies to improve your search rankings and drive qualified traffic to your website.
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
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
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
            <h2 className="text-4xl font-bold text-white mb-6">SEO Services We Provide</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive SEO solutions to improve your online visibility and drive organic growth.
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
                <ArrowRight className="w-5 h-5 text-green-400 flex-shrink-0" />
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
            <h2 className="text-4xl font-bold text-white mb-6">SEO Packages</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the right SEO package to grow your online presence and attract more customers.
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
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <Card
                  className={`bg-white/5 border-white/10 backdrop-blur-sm h-full ${tier.popular ? "ring-2 ring-green-500/50" : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                    <div className="text-4xl font-bold text-green-400 mt-4">{tier.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-green-600 hover:bg-green-700" asChild>
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
      <section className="py-20 px-6 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate Search Results?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create an SEO strategy that drives organic traffic and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/contact">Start SEO Campaign</Link>
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
