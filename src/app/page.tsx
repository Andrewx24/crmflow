import { 
  ArrowRight, Users, Mail, BarChart2, CheckCircle, Star, 
  Clock, Zap, Building2, Briefcase, Code2, Phone,  Twitter, Linkedin, Github
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


// Let's first define our features and solutions data for better organization
const features = [
  {
    icon: Users,
    title: "Smart Relationship Monitoring",
    description: "Our AI-powered system tracks every client interaction to identify potential issues before they become problems.",
    benefits: [
      "Relationship health scoring",
      "Early warning alerts",
      "Engagement tracking"
    ],
    image: "/images/features/relationship-monitoring.png"
  },
  {
    icon: Mail,
    title: "Automated Communication",
    description: "Never miss an important follow-up or update. Keep every client engaged with smart communication tools.",
    benefits: [
      "Smart follow-up reminders",
      "Communication tracking",
      "Email templates"
    ],
    image: "/images/features/automated-communication.png"
  },
  {
    icon: BarChart2,
    title: "Service Excellence",
    description: "Deliver consistently great service by tracking project progress and client satisfaction in one place.",
    benefits: [
      "Project milestone tracking",
      "Quality metrics",
      "Team collaboration"
    ],
    image: "/images/features/service-excellence.png"
  }
]

const solutions = [
  {
    icon: Building2,
    title: "Marketing Agencies",
    description: "Track campaigns, manage client feedback, and coordinate team delivery all in one place.",
    benefits: ["Campaign tracking", "Client feedback loops", "Resource allocation"]
  },
  {
    icon: Briefcase,
    title: "Consulting Firms",
    description: "Keep client projects organized, track billable hours, and manage client communications seamlessly.",
    benefits: ["Project timelines", "Time tracking", "Document management"]
  },
  {
    icon: Code2,
    title: "Professional Services",
    description: "Deliver consistent quality while scaling your client base and team operations.",
    benefits: ["Service tracking", "Quality metrics", "Team coordination"]
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Now with mobile menu */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/logo.svg" 
                alt="CRMFlow" 
                width={32} 
                height={32} 
              />
              <span className="text-2xl font-bold text-blue-600">CRMFlow</span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Link>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Now with better visual hierarchy */}
      <section className="relative pt-32 pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center relative z-10">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold animate-fade-in">
              Introducing CRMFlow for Service Teams
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
              Client Relationships <br className="hidden md:block" />
              That Flow Naturally
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
              The intelligent CRM that helps service businesses deliver exceptional 
              client experiences through automated relationship monitoring and 
              streamlined communication.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 text-lg h-12 px-8 transform hover:scale-105 transition-all"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg h-12 px-8 hover:bg-blue-50"
              >
                See How It Works
                <Zap className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social proof section */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span>40% Better Client Retention</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 mr-2 text-green-500" />
                <span>15 Hours Saved Weekly</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="h-5 w-5 mr-2 text-blue-500" />
                <span>500+ Happy Teams</span>
              </div>
            </div>
          </div>

          {/* Enhanced dashboard preview with animation */}
          <div className="relative mt-16 animate-float">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-32 bottom-0 z-10" />
            <div className="relative rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <Image
                src="/images/dashboard-preview.png"
                alt="CRMFlow Dashboard"
                width={1200}
                height={600}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Now with dynamic rendering */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where Client Relationships Flow Naturally
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike traditional CRMs focused on closing deals, CRMFlow is built for 
              maintaining strong, lasting client relationships that grow over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={320}
                  height={200}
                  className="rounded-lg shadow-md mb-4"
                />
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section - Now with interactive cards */}
      <section className="py-20 bg-gray-50" id="solutions">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Service Teams Like Yours
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for different service businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Now with comparison table */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              No hidden fees. Pay only for the client relationships you manage.
            </p>
          </div>
          
          {/* Add pricing table component */}
        </div>
      </section>

      {/* Enhanced CTA Section with better visual appeal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Make Client Relationships Flow?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join forward-thinking service teams already using CRMFlow to deliver 
                exceptional client experiences.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 transform hover:scale-105 transition-all">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-blue-700 text-lg px-8 py-6">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Enhanced Footer with better structure */}
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-4 gap-8">
      {/* Brand Section */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Image 
            src="/images/logo.svg" 
            alt="CRMFlow" 
            width={32} 
            height={32} 
          />
          <h3 className="text-lg font-semibold">CRMFlow</h3>
        </div>
        <p className="text-gray-400 mb-4">
          Making client relationships flow naturally for service businesses.
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Image src="/images/app-store.svg" alt="App Store" width={120} height={40} />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Image src="/images/play-store.svg" alt="Play Store" width={120} height={40} />
          </Button>
        </div>
      </div>
      
      {/* Product Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Product</h4>
        <ul className="space-y-2 text-gray-400">
          <li>
            <Link href="#features" className="hover:text-white transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link href="#solutions" className="hover:text-white transition-colors">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/security" className="hover:text-white transition-colors">
              Security
            </Link>
          </li>
          <li>
            <Link href="/integrations" className="hover:text-white transition-colors">
              Integrations
            </Link>
          </li>
          <li>
            <Link href="/api" className="hover:text-white transition-colors">
              API Documentation
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Company Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-gray-400">
          <li>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Connect Section */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
        <p className="text-gray-400 mb-4">
          Get in touch with our support team or follow us on social media.
        </p>
        <div className="flex flex-col space-y-2">
          <a 
            href="mailto:support@crmflow.io" 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            support@crmflow.io
          </a>
          <a 
            href="tel:+1-555-0123" 
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            +1 (555) 0123
          </a>
        </div>
        <div className="flex space-x-4 mt-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Github className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
    
    {/* Bottom Section */}
    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} CRMFlow.io. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-gray-400">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/cookies" className="hover:text-white transition-colors">
            Cookies
          </Link>
          <Link href="/sitemap" className="hover:text-white transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  </div>
      </footer>
    </div>
  )
}
