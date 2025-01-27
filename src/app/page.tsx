import { ArrowRight, Users, Mail, BarChart2, CheckCircle, } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Define our core value propositions with detailed explanations
const valueProps = [
  {
    title: "Relationship Health Monitoring",
    icon: Users,
    description: "Traditional CRMs focus on sales pipelines, but service businesses need to maintain long-term relationships. Our AI-powered system continuously monitors client interactions, analyzing communication patterns, response times, and engagement levels to give you early warnings before small issues become big problems.",
    metrics: {
      value: "40%",
      label: "Average improvement in client retention",
      explanation: "Based on analyzing client retention rates before and after implementing CRMFlow"
    }
  },
  {
    title: "Automated Communication Tracking",
    icon: Mail,
    description: "Growing service businesses often struggle to maintain consistent communication across their client base. Our system automatically tracks all client interactions, ensuring important follow-ups never fall through the cracks and helping teams coordinate their client communication effectively.",
    metrics: {
      value: "15hrs",
      label: "Time saved per team weekly",
      explanation: "Through automated tracking and proactive reminders"
    }
  },
  {
    title: "Service Quality Management",
    icon: BarChart2,
    description: "Delivering consistent quality becomes challenging as your client base grows. Our platform helps you track project progress, monitor deliverables, and maintain service standards across all client engagements, ensuring every client receives excellent service.",
    metrics: {
      value: "93%",
      label: "Client satisfaction rate",
      explanation: "Among businesses using our service delivery tracking"
    }
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              Understanding Modern Client Relationship Management
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Why Service Businesses Need <br className="hidden md:block" />
              a Different Kind of CRM
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Service businesses face unique challenges in maintaining client relationships 
              as they grow. Traditional CRMs focus on closing deals, but you need tools 
              designed for long-term relationship management.
            </p>

            <Link href="/demo">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg h-12 px-8">
                Explore Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Problem Statement Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-600 mb-6">
                As service businesses grow, maintaining strong client relationships 
                becomes increasingly complex. Teams struggle with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Communication Gaps</h3>
                    <p className="text-gray-600">Important follow-ups get missed as 
                    team size and client base grow</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Inconsistent Service</h3>
                    <p className="text-gray-600">Maintaining quality becomes harder 
                    across multiple client engagements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Lost Context</h3>
                    <p className="text-gray-600">Team members lack full visibility 
                    into client history and preferences</p>
                  </div>
                </li>
              </ul>
            </div>
            <Image
              src="/images/problem-illustration.png"
              alt="Service business challenges visualization"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A CRM Built for Service Business Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform helps you maintain strong client relationships while scaling 
              your business through intelligent monitoring and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <prop.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="text-gray-600 mb-6">{prop.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-blue-600 mr-2">
                      {prop.metrics.value}
                    </span>
                    <span className="text-gray-600">{prop.metrics.label}</span>
                  </div>
                  <p className="text-sm text-gray-500">{prop.metrics.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Understanding How It Works
            </h2>
            <p className="text-xl text-gray-600">
              See how our platform helps you maintain stronger client relationships
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/dashboard-preview.png"
              alt="CRMFlow Dashboard"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl"
            />
            
            {/* Interactive callouts explaining key features */}
            <div className="absolute top-1/4 left-1/4 bg-white p-4 rounded-lg shadow-lg">
              <h4 className="font-semibold mb-2">Relationship Health Score</h4>
              <p className="text-sm text-gray-600">
                Our AI analyzes multiple factors to give you an early warning of 
                potential relationship issues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              See How It Works in Practice
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Explore our interactive demo to understand how CRMFlow can transform 
              your client relationships
            </p>
            <Link href="/demo">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                View Interactive Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}