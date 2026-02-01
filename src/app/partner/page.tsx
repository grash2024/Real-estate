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
    console.log("Form submitted:", formData)
    setFormData({ name: "", company: "", email: "", phone: "", message: "" })
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
    { icon: TrendingUp, title: "Growth Opportunities", description: "Be part of Bangalore's growing real estate market." },
    { icon: Award, title: "Brand Association", description: "Associate with a premium brand known for reliability." },
    { icon: Target, title: "Shared Vision", description: "Work with a team that shares your vision for excellence." },
    { icon: Handshake, title: "Win-Win Partnerships", description: "Mutually beneficial relationships for long-term success." }
  ]

  const processSteps = [
    { step: 1, title: "Initial Contact", description: "Reach out with your proposal" },
    { step: 2, title: "Discussion", description: "Discuss requirements and capabilities" },
    { step: 3, title: "Due Diligence", description: "Mutual evaluation process" },
    { step: 4, title: "Agreement", description: "Finalize terms and sign" },
    { step: 5, title: "Execution", description: "Begin working together" }
  ]

  return (
    // ADDED overflow-x-hidden HERE
    <div className="min-h-screen overflow-x-hidden"> 
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join hands with Sreeyan Developers and be part of Bangalore's premium real estate journey
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore various ways to partner with us and grow together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-7 h-7 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm text-center">{type.description}</p>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
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

      {/* Why Partner - Stats Fix */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Sreeyan Developers?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative lg:pl-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-80 bg-amber-100/50 rounded-2xl border-2 border-dashed border-amber-200 flex items-center justify-center">
                <Building2 className="w-20 h-20 text-amber-200" />
              </div>
              <div className="absolute -bottom-6 right-0 left-0 lg:left-0 bg-white p-6 rounded-xl shadow-xl border max-w-md mx-auto lg:mx-0">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">12+</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">50+</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">5k+</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process - POSITIONING FIXED */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Partnership Process</h2>
            <p className="text-muted-foreground">Simple and transparent steps to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
            {processSteps.map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs px-4">{item.description}</p>
                
                {/* Fixed Arrow Logic */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[70%] w-full h-[2px] z-0">
                    <ArrowRight className="w-5 h-5 text-amber-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">Ready to explore a partnership? Fill out the form and our team will contact you shortly.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span>sreeyandevelopers@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-amber-600 mt-1" />
                  <span className="max-w-xs">K. Narayanapura Road, Kothanuru, Bangalore - 560 077</span>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Name *" required value={formData.name} onChange={handleInputChange} />
                    <Input name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input name="email" type="email" placeholder="Email *" required value={formData.email} onChange={handleInputChange} />
                    <Input name="phone" placeholder="Phone *" required value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <Textarea name="message" placeholder="Proposal details..." rows={4} value={formData.message} onChange={handleInputChange} />
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Together?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={() => window.open("tel:+919844661119")}>
              Call Now
            </Button>
            <Button size="lg" className="bg-white text-amber-600 hover:bg-zinc-100" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="mr-2 h-5 w-5" /> WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}