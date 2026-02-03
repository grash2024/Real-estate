"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaWhatsapp } from "react-icons/fa"
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
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
    
    // Construct Mailto Link
    const { name, email, phone, subject, message } = formData;
    const mailSubject = encodeURIComponent(subject || `Inquiry from ${name}`);
    const mailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );

    // Simulate short delay for UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    window.location.href = `mailto:sreeyandevelopers@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    
    toast.success("Opening your email client...")
    setIsSubmitting(false)
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+919844661119")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9844661119"],
      action: handleCallClick,
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sreeyandevelopers@gmail.com"],
      action: () => window.open("mailto:sreeyandevelopers@gmail.com"),
      actionText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "No. 189, 1ST FLOOR, CHAITRA SREE COMPLEX, K. NARAYANAPURA ROAD, KOTHANURU,",
        "BANGALORE - 560 077, Karnataka"
      ],
      action: () => window.open("https://maps.google.com/?q=Sreeyan+Developers+Kothanuru"),
      actionText: "Get Directions"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sun-Sat: 9:00 AM - 7:00 PM"],
      action: handleWhatsAppClick,
      actionText: "WhatsApp Us"
    }
  ]

  const teamContacts = [
    {
      name: "Rahul Sharma",
      position: "Sales Manager",
      phone: "+91 9844661119",
      email: "rahul@sreeyandevelopers.com",
    },
    {
      name: "Priya Nair",
      position: "Customer Relations",
      phone: "+91 9844661119",
      email: "priya@sreeyandevelopers.com",
    },
    {
      name: "Amit Kumar",
      position: "Project Consultant",
      phone: "+91 9844661119",
      email: "amit@sreeyandevelopers.com",
    },
    {
      name: "Sneha Reddy",
      position: "Partnership Head",
      phone: "+91 9844661119",
      email: "sneha@sreeyandevelopers.com",
    }
  ]

   const faqs = [
    {
      question: "How far is nearest metro station from Sreeyan Square? ",
      answer: "The nearest metro station to Sreeyan Square is Nagawara metro station, which is 3.38 Km away from the location."
    },
    {
      question: "Are there any safety related concerns in Hennur Road?",
      answer: "Former and existing residents have rated this locality 4/5 on safety. This means, this is one of the good localities where safety is not a concern."
    },
    {
      question: "Are there any sports facilities in this project? ",
      answer: "Yes, there are Swimming Pool facilities in Sreeyan Square."
    },
    {
      question: "What are the security features of Sreeyan Square?",
      answer: "Sreeyan Square offers 24x7 Security and Intercom to ensure all the residents feel safe and secure."
    },
    {
      question: "Are there any good hospitals close to Sreeyan Square?",
      answer: "Yes, there are good hospitals close to Sreeyan Square such as Medi Derma Hospital, Shree Vijayalakshmi Hospital and Trauma Centre and Sri Vijayalakshmi Pragathi Hospital."
    },
     {
      question: "How many housing societies are there in Hennur Road, Bangalore?",
      answer: "There are 58 housing societies in this locality. Nearly 5 projects are ongoing in this area. If you are looking for new projects, you can explore 3 brand new housing societies in Hennur Road, Bangalore"
    },
     {
      question: "Does Sreeyan Square has any open area?",
      answer: "Sreeyan Square has 30.00% open area."
    },
     {
      question: "In which area is Sreeyan Square located?",
      answer: "The project is situated in Hennur Road, Bangalore North. Click to view project details."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-background dark:from-amber-950/20 dark:to-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to help you find your dream home. Reach out to us for any queries or to schedule a visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" onClick={handleCallClick}>
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted" onClick={handleWhatsAppClick}>
                <FaWhatsapp className="mr-2 w-5 h-5 text-green-600" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="text-center h-full border-border bg-card shadow-sm hover:shadow-md transition-all">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                    <div className="space-y-1 mb-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-amber-600 dark:text-amber-500 hover:text-amber-700 p-0 h-auto font-bold" onClick={info.action}>
                      {info.actionText} →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      
      <section className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-border bg-card shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">Name *</label>
                        <Input name="name" required placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="bg-background border-border h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">Email *</label>
                        <Input name="email" type="email" required placeholder="your@email.com" value={formData.email} onChange={handleInputChange} className="bg-background border-border h-12" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">Phone *</label>
                        <Input name="phone" required placeholder="+91 98446 61119" value={formData.phone} onChange={handleInputChange} className="bg-background border-border h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">Subject</label>
                        <Input name="subject" placeholder="Interested in..." value={formData.subject} onChange={handleInputChange} className="bg-background border-border h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold ml-1">Message *</label>
                      <Textarea name="message" required rows={5} placeholder="Tell us more about your requirements..." value={formData.message} onChange={handleInputChange} className="bg-background border-border resize-none" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-lg">
                      {isSubmitting ? "Processing..." : <><Send className="w-5 h-5 mr-2" /> Send Inquiry</>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map Container */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="border-border bg-card shadow-lg overflow-hidden h-full">
                <div className="w-full h-[400px] bg-muted relative">
                   <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.583561623992!2d77.6441313!3d13.0621648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19a16503c00f%3A0x296d11f6c4b2ec75!2sSreeyan%20Developers!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                   </iframe>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg shrink-0">
                        <MapPin className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Sreeyan Developers</p>
                        <p className="text-muted-foreground leading-relaxed">
                          No. 189, 1ST FLOOR, CHAITRA SREE COMPLEX, NEAR VISHAL MART, K. NARAYANAPURA ROAD, KOTHANURU, BANGALORE - 560 077
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg shrink-0">
                        <Clock className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold">Sun-Sat: 9 AM - 7 PM</p>
                      </div>
                    </div>
                    <Button className="w-full h-12 bg-amber-600 text-white" variant="outline" onClick={() => window.open("https://maps.google.com/?q=Sreeyan+Developers")}>
                      Open in Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team & FAQ Summary Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Meet Our Sales Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamContacts.map((member, i) => (
              <Card key={i} className="text-center border-border hover:border-amber-500/50 transition-colors">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-amber-600 opacity-20" />
                  </div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-amber-600 text-sm mb-4">{member.position}</p>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = `tel:${member.phone}`} className="rounded-full">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center underline underline-offset-8 decoration-amber-500/30">Common Questions</h2>
          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="border-border">
                <CardContent className="p-5 flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-green-50 dark:bg-green-950/20 text-green-600 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}