"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, Users, Clock, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "150+",
      label: "Happy Clients",
      description: "Satisfied customers across the GTA",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "300+",
      label: "Projects Completed",
      description: "Successful IT solutions delivered",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "5+",
      label: "Years Experience",
      description: "In telecom and IT support",
    },
  ]

  const values = [
    {
      title: "Customer First",
      description:
        "Your satisfaction and success are our top priorities. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      title: "Transparent Communication",
      description:
        "No technical jargon or hidden fees. We explain everything in simple terms and provide clear, upfront pricing.",
    },
    {
      title: "Reliable Support",
      description: "When you need help, we're here. Fast response times and dependable service you can count on.",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and so do we. We stay current with the latest trends and best practices.",
    },
  ]

  const services = [
    "Remote IT Support & Troubleshooting",
    "Website Development & SEO",
    "Network Setup & Optimization",
    "Cybersecurity Solutions",
    "Business IT Consulting",
    "Hardware Installation & Upgrades",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">About Limitless IT Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted technology partner, dedicated to making IT simple, reliable, and accessible for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden mb-16"
          >
            <img
              src="/professional-it-consultant-working-with-modern-tec.jpg"
              alt="About Limitless IT Solutions"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img
                      src="/professional-headshot-of-rahat--it-consultant-and-.jpg"
                      alt="Rahat - Founder of Limitless IT Solutions"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white/20"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-4">Meet Rahat</h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      With a strong background in telecom and deskside IT support, I've spent years helping people
                      navigate the complexities of technology. I've seen firsthand how frustrating a misbehaving device
                      or a slow network can be, and I'm passionate about providing solutions that are not only effective
                      but also easy to understand.
                    </p>
                    <p className="text-blue-300 font-semibold italic mb-4">
                      "My mission is simple: to help you stay connected and stress-free by making technology work for
                      you, not against you."
                    </p>
                    <p className="text-gray-300 mb-6">
                      Based in Brampton, I'm proud to serve clients across the GTA with both remote and on-site support.
                      When I'm not solving tech problems, you'll find me staying up-to-date with the latest technology
                      trends and finding new ways to help my clients succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href="/contact">Get In Touch</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                        asChild
                      >
                        <Link href="/services">View Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Track Record</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center h-full hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {achievement.icon}
                    </div>
                    <CardTitle className="text-4xl font-bold text-blue-400 mb-2">{achievement.number}</CardTitle>
                    <CardTitle className="text-white text-xl">{achievement.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we provide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions designed to keep your technology running smoothly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

      {/* Contact Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to solve your tech challenges? We're here to help with fast, reliable, and affordable IT solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      <a href="tel:4379741444" className="hover:text-white transition">
                        (437) 974-1444
                      </a>
                    </p>
                    <p className="text-gray-300">
                      <a href="tel:5198082706" className="hover:text-white transition">
                        (519) 808-2706
                      </a>
                    </p>
                    <p className="text-sm text-gray-400 mt-4">Available for emergency support and consultations</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-300">
                      30 Shore Breeze Drive
                      <br />
                      Toronto, ON M8V 0J1
                    </p>
                    <p className="text-sm text-gray-400 mt-4">
                      Serving the Greater Toronto Area with remote and on-site support
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
