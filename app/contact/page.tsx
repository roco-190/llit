"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertTriangle, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/xvgbllvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (err) {
      setError("Failed to send message. Please try again or contact us directly.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get Expert IT Support Today</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to solve your tech problems? Contact us for a free consultation and discover how we can help
              streamline your technology and boost your productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <p className="text-destructive text-sm">{error}</p>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            disabled={isLoading}
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(555) 123-4567"
                            disabled={isLoading}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          disabled={isLoading}
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          <option value="remote-support">Remote Support</option>
                          <option value="cybersecurity">Cybersecurity</option>
                          <option value="website-development">Website Development</option>
                          <option value="seo">SEO</option>
                          <option value="ecommerce">E-commerce Solutions</option>
                          <option value="email-setup">Professional Email Setup</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your IT issue or requirements..."
                          rows={5}
                          disabled={isLoading}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-4">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <div className="space-y-8">
                {/* Contact Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                    <CardDescription>Get in touch with us directly through any of these channels.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">(437) 974-1444</p>
                        <p className="text-muted-foreground">(519) 808-2706</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">support@limitlessit.ca</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Service Area</p>
                        <p className="text-muted-foreground">30 Shore Breeze Drive</p>
                        <p className="text-muted-foreground">Toronto, ON M8V 0J1</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Serving Greater Toronto Area & Remote Support Worldwide
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Business Hours</p>
                        <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 8:00 PM</p>
                        <p className="text-muted-foreground">Sat-Sun: 10:00 AM - 6:00 PM</p>
                        <p className="text-sm text-accent">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Support */}
                <Card className="border-2 border-destructive/20 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="text-xl text-destructive flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Emergency IT Support
                    </CardTitle>
                    <CardDescription>Critical system down? Server crashed? Need immediate assistance?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For urgent IT emergencies outside business hours, call our emergency hotline. We provide 24/7
                      emergency support for critical system failures, security breaches, and business-critical issues.
                      Additional charges may apply for after-hours emergency support.
                    </p>
                    <div className="space-y-3">
                      <Button asChild variant="destructive" className="w-full">
                        <a href="tel:4379741444" className="flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Call Emergency Line: (437) 974-1444
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-destructive/20 text-destructive hover:bg-destructive/10 bg-transparent"
                      >
                        <a href="tel:5198082706" className="flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4" />
                          Alternate Emergency: (519) 808-2706
                        </a>
                      </Button>
                    </div>
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-2">Emergency Support Includes:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Server & network outages</li>
                        <li>• Security breach response</li>
                        <li>• Data recovery emergencies</li>
                        <li>• Critical system failures</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
