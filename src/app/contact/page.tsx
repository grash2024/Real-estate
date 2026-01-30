"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Building2,
  Users
} from "lucide-react"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast.success("Message sent successfully! We'll get back to you soon.")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })
    setIsSubmitting(false)
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919876543210", "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+919876543210")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: handleCallClick,
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@royalestates.com", "sales@royalestates.com"],
      action: () => window.open("mailto:info@royalestates.com"),
      actionText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "123, MG Road,",
        "Bangalore - 560001,",
        "Karnataka, India"
      ],
      action: () => window.open("https://maps.google.com/?q=Royal+Estates+Bangalore"),
      actionText: "Get Directions"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 5:00 PM"
      ],
      action: handleWhatsAppClick,
      actionText: "WhatsApp Us"
    }
  ]

  const teamContacts = [
    {
      name: "Rahul Sharma",
      position: "Sales Manager",
      phone: "+91 98765 43210",
      email: "rahul@royalestates.com",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Priya Nair",
      position: "Customer Relations",
      phone: "+91 98765 43211",
      email: "priya@royalestates.com",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Amit Kumar",
      position: "Project Consultant",
      phone: "+91 98765 43212",
      email: "amit@royalestates.com",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Sneha Reddy",
      position: "Partnership Head",
      phone: "+91 98765 43213",
      email: "sneha@royalestates.com",
      image: "/api/placeholder/100/100"
    }
  ]

  const faqs = [
    {
      question: "Do you provide site visits?",
      answer: "Yes, we provide complimentary site visits for all our projects. Please schedule an appointment in advance."
    },
    {
      question: "What are your office timings?",
      answer: "Our office is open Monday to Saturday from 9:00 AM to 7:00 PM, and on Sundays from 10:00 AM to 5:00 PM."
    },
    {
      question: "How can I get project brochures?",
      answer: "You can download brochures from our project pages or contact us directly, and we'll email them to you."
    },
    {
      question: "Do you offer home loan assistance?",
      answer: "Yes, we have tie-ups with leading banks and can assist you with the complete home loan process."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're here to help you find your dream home. Reach out to us for any queries or to schedule a visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700" onClick={handleCallClick}>
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <info.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" onClick={info.action}>
                      {info.actionText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
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
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <div>
                        <label className="block text-sm font-medium mb-2">Subject</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell us more about your requirements..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4" />
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Royal Estates</p>
                        <p className="text-muted-foreground text-sm">
                          123, MG Road, Bangalore - 560001<br />
                          Karnataka, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Office Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Mon-Sat: 9:00 AM - 7:00 PM<br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" onClick={() => window.open("https://maps.google.com/?q=Royal+Estates+Bangalore")}>
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team is here to assist you with all your real estate needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamContacts.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-amber-600 text-sm mb-3">{member.position}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center">
                        <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{member.email}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 justify-center">
                      <Button size="sm" variant="outline" onClick={() => window.open(`tel:${member.phone}`)}>
                        <Phone className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => window.open(`https://wa.me/${member.phone.replace(/\D/g, '')}`)}>
                        <MessageCircle className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is standing by to help you take the next step towards homeownership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleCallClick}>
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}