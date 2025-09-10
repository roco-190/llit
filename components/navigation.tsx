"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Monitor, Shield, Globe, TrendingUp, ShoppingCart, Mail } from "lucide-react"

const services = [
  { name: "Remote Support", href: "/services/remote-support", icon: Monitor },
  { name: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
  { name: "Website Development", href: "/services/website-development", icon: Globe },
  { name: "SEO", href: "/services/seo", icon: TrendingUp },
  { name: "E-commerce", href: "/services/ecommerce", icon: ShoppingCart },
  { name: "Email Setup", href: "/services/email-setup", icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">Limitless IT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-primary-foreground hover:text-accent transition-colors flex items-center">
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors"
                    >
                      <service.icon className="w-5 h-5 text-accent" />
                      <span className="text-card-foreground">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-primary-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-primary-foreground hover:text-accent transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/contact">Get Support</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-foreground hover:text-accent">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary border-t border-border">
              <Link href="/" className="block px-3 py-2 text-primary-foreground hover:text-accent">
                Home
              </Link>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center space-x-3 px-3 py-2 text-primary-foreground hover:text-accent"
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                </Link>
              ))}
              <Link href="/about" className="block px-3 py-2 text-primary-foreground hover:text-accent">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-primary-foreground hover:text-accent">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
