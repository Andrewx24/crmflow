
// app/page.tsx
'use client'
import { useState } from 'react'
import { 
  Mail, Users, ArrowRight, Check,
  LineChart, Zap, Shield, Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { ReactElement } from 'react'

// Define types for our data structures
interface PricingPlan {
  name: string
  price: number
  features: string[]
}

interface PricingPlans {
  starter: PricingPlan
  pro: PricingPlan
  business: PricingPlan
}

interface Testimonial {
  quote: string
  author: string
  role: string
  image: string
}

interface Feature {
  icon: ReactElement
  title: string
  description: string
}

// Constants for reusable content
const FEATURES: Feature[] = [
  {
    icon: <Mail className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Email Intelligence",
    description: "Track communication patterns, automate follow-ups, and never miss an important client email."
  },
  {
    icon: <LineChart className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Relationship Analytics",
    description: "Monitor relationship health with AI-powered insights and proactive alerts."
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Team Collaboration",
    description: "Keep everyone aligned with shared inboxes, task assignment, and activity tracking."
  },
  {
    icon: <Zap className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Smart Automation",
    description: "Automate routine tasks and communications while maintaining a personal touch."
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Data Security",
    description: "Enterprise-grade security ensures your client data stays safe and compliant."
  },
  {
    icon: <Calendar className="h-12 w-12 text-blue-600 mb-4" />,
    title: "Smart Scheduling",
    description: "Coordinate meetings and follow-ups with automated scheduling and reminders."
  }
]

// Constants for reusable content
const PRICING_PLANS: PricingPlans = {
  starter: {
    name: 'Starter',
    price: 29,
    features: [
      'Single user',
      'Up to 100 contacts',
      'Email tracking',
      'Basic templates',
      'Community support'
    ]
  },
  pro: {
    name: 'Professional',
    price: 79,
    features: [
      'Up to 3 users',
      '500 contacts',
      'Advanced email features',
      'Team collaboration',
      'Email support',
      'Custom workflows'
    ]
  },
  business: {
    name: 'Business',
    price: 149,
    features: [
      'Up to 7 users',
      '2,000 contacts',
      'API access',
      'White labeling',
      'Priority support',
      'Custom integrations'
    ]
  }
}



const TESTIMONIALS: Testimonial[] = [
  {
    quote: "CRMFlow has transformed how we manage client relationships. The email integration and automated follow-ups have saved us countless hours.",
    author: "Sarah Johnson",
    role: "CEO, Design Studio",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "The relationship analytics help us spot potential issues before they become problems. It's like having an AI-powered account manager.",
    author: "Michael Chen",
    role: "Director, Consulting Firm",
    image: "/api/placeholder/64/64"
  },
  {
    quote: "Finally, a CRM that understands service businesses. The team collaboration features have made our client communication much more effective.",
    author: "Emma Thompson",
    role: "Partner, Marketing Agency",
    image: "/api/placeholder/64/64"
  }
]
export default function HomePage() {
  // State management for pricing plan selection
  const [selectedPlan, setSelectedPlan] = useState<keyof PricingPlans>('pro')

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-blue-600">CRMFlow</div>
              <div className="hidden md:flex space-x-6">
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Start Free Trial</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Build Stronger Client Relationships with Intelligent Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              CRMFlow helps service businesses deliver exceptional client experiences through 
              automated relationship monitoring and streamlined communication.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  View Live Demo
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5x</div>
              <div className="text-gray-600">Faster Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-gray-600">More Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Client Relationships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for service businesses, CRMFlow combines powerful automation 
              with intuitive design to help you deliver exceptional client experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your business. All plans include our core features 
              to help you build stronger client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {(Object.entries(PRICING_PLANS) as [keyof PricingPlans, PricingPlan][]).map(([key, plan]) => (
              <Card key={key} 
                className={`${
                  selectedPlan === key ? 'border-blue-600 shadow-lg' : ''
                } hover:shadow-lg transition-shadow duration-200`}
                onClick={() => setSelectedPlan(key)}>
                <CardContent className="p-6">
                  <div className="text-xl font-semibold mb-2">{plan.name}</div>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6" 
                    variant={selectedPlan === key ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Service Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how CRMFlow helps businesses like yours deliver better client experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">
                  &apos; {testimonial.quote}&apos;
                  </p>
                  <div className="flex items-center">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Client Relationships?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">CRMFlow</div>
              <p className="text-gray-400">
                Building better client relationships through intelligent automation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <div>Features</div>
                <div>Pricing</div>
                <div>Security</div>
                <div>Enterprise</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <div>About</div>
                <div>Customers</div>
                <div>Blog</div>
                <div>Careers</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <div>Documentation</div>
                <div>API</div>
                <div>Guides</div>
                <div>Support</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} CRMFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}