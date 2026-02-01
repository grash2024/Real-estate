"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge";
import { FaWhatsapp } from "react-icons/fa";
import { 
  Handshake, 
  Users, 
  Building2, 
  TrendingUp,
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Mail,
  MapPin,
  Briefcase,
  Target,
  Award,
  Globe
} from "lucide-react"

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank")
  }

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Land Owners",
      description: "Partner with us to develop your land into premium residential projects.",
      benefits: ["Joint Development", "Revenue Sharing", "Professional Management", "Timely Delivery"]
    },
    {
      icon: Users,
      title: "Channel Partners",
      description: "Join our network of real estate consultants and brokers.",
      benefits: ["Attractive Commissions", "Marketing Support", "Training Programs", "Exclusive Projects"]
    },
    {
      icon: Briefcase,
      title: "Contractors",
      description: "Work with us as construction and development partners.",
      benefits: ["Steady Projects", "Timely Payments", "Quality Standards", "Long-term Relationship"]
    },
    {
      icon: Globe,
      title: "Investors",
      description: "Invest in our promising real estate projects for good returns.",
      benefits: ["High ROI", "Transparent Deals", "Regular Updates", "Exit Options"]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Be part of Bangalore's growing real estate market with a trusted partner."
    },
    {
      icon: Award,
      title: "Brand Association",
      description: "Associate with a premium brand known for quality and reliability."
    },
    {
      icon: Target,
      title: "Shared Vision",
      description: "Work with a team that shares your vision for excellence and growth."
    },
    {
      icon: Handshake,
      title: "Win-Win Partnerships",
      description: "We believe in creating mutually beneficial relationships for long-term success."
    }
  ]

  const process = [
    { step: 1, title: "Initial Contact", description: "Reach out to us with your proposal" },
    { step: 2, title: "Discussion", description: "We'll discuss your requirements and our capabilities" },
    { step: 3, title: "Due Diligence", description: "Mutual evaluation and verification process" },
    { step: 4, title: "Agreement", description: "Finalize terms and sign partnership agreement" },
    { step: 5, title: "Execution", description: "Begin working together on projects" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join hands with Sreeyan Developers and be part of Bangalore's premium real estate development journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 w-5 h-5" />
                Start Partnership
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open("tel:+919844661119")}>
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore various ways to partner with us and grow together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">{type.description}</p>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Sreeyan Developers?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over 15 years of experience and 50+ successful projects, we offer the perfect platform for growth-oriented partnerships.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-amber-100 rounded-lg" />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">5000+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple and transparent process to start our partnership journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-amber-600 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Partnership Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our partnership team will get in touch with you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span>sreeyandevelopers@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                  <span>No. 189, 1ST FLOOR, CHAITRA SREE COMPLEX, NEAR VISHAL MART, K. NARAYANAPURA ROAD, KOTHANURU, BANGALORE - 560 077</span>
                </div>
              </div>

              <div className="mt-8">
                <Badge className="bg-green-600 text-white mb-2">Open for Partnerships</Badge>
                <p className="text-muted-foreground">
                  We are actively looking for partners in Bangalore and surrounding areas.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Partnership Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone *</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your partnership proposal..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                      Send Partnership Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Great Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create value together through strategic partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("tel:+919844661119")}>
                <Phone className="mr-2 w-5 h-5" />
                Call Partnership Team
              </Button>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100" onClick={handleWhatsAppClick}>
                <FaWhatsapp className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}