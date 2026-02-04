"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
  e.preventDefault();
  const { name, company, email, phone, message } = formData;
  const subject = encodeURIComponent(`New Inquiry from ${name} - Sreeyan Developers`);
  const body = encodeURIComponent(
    `Name: ${name}\nCompany: ${company || "N/A"}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:sreeyandevelopers@gmail.com?subject=${subject}&body=${body}`;
};

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919743881118", "_blank")
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300"> 
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 to-background dark:from-amber-950/20 dark:to-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join hands with Sreeyan Developers and be part of Bangalore's premium real estate journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg h-14 px-8 rounded-xl" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 w-5 h-5" />
                Start Partnership
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl border-border bg-background" onClick={() => window.open("tel:+919844661119")}>
                <Phone className="mr-2 w-5 h-5 text-amber-600" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Partnership Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore various ways to partner with us and grow together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border bg-card hover:border-amber-500/50 transition-all duration-300 shadow-sm">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                      <type.icon className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-sm text-center leading-relaxed">{type.description}</p>
                    <div className="space-y-3">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" />
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

      {/* Why Partner Section */}
      <section className="py-20 bg-muted/30 dark:bg-muted/10 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Why Partner With Sreeyan Developers?</h2>
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                      <benefit.icon className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative lg:pl-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-80 bg-gradient-to-br from-amber-100/50 to-amber-200/20 dark:from-amber-900/20 dark:to-background rounded-3xl border-2 border-dashed border-amber-200 dark:border-amber-900/50 flex items-center justify-center">
                <Building2 className="w-24 h-24 text-amber-200 dark:text-amber-900/50" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-card border border-border p-8 rounded-2xl shadow-2xl min-w-[320px]">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-amber-600 dark:text-amber-500">12+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-amber-600 dark:text-amber-500">50+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-amber-600 dark:text-amber-500">5k+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Partnership Process</h2>
            <p className="text-muted-foreground">Simple and transparent steps to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
            {processSteps.map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-16 h-16 bg-amber-600 dark:bg-amber-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-lg shadow-amber-600/20 relative z-10">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs px-4 leading-relaxed">{item.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[70%] w-full h-[2px] bg-gradient-to-r from-amber-600/50 to-transparent z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-black mb-8 text-foreground tracking-tight">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">Ready to explore a partnership? Fill out the form and our team will contact you shortly with a personalized proposal.</p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-medium text-foreground">sreeyandevelopers@gmail.com</span>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-card border border-border shadow-sm">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed font-medium">No. 189, 1ST FLOOR, CHAITRA SREE COMPLEX, K. NARAYANAPURA ROAD, KOTHANURU, BANGALORE - 077</span>
                </div>
              </div>
            </div>

            <Card className="border-border bg-card shadow-2xl p-4 md:p-8 rounded-3xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input name="name" placeholder="Name *" required value={formData.name} onChange={handleInputChange} className="bg-background border-border h-12 rounded-xl" />
                    <Input name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} className="bg-background border-border h-12 rounded-xl" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input name="email" type="email" placeholder="Email *" required value={formData.email} onChange={handleInputChange} className="bg-background border-border h-12 rounded-xl" />
                    <Input name="phone" placeholder="Phone *" required value={formData.phone} onChange={handleInputChange} className="bg-background border-border h-12 rounded-xl" />
                  </div>
                  <Textarea name="message" placeholder="Proposal details..." rows={5} value={formData.message} onChange={handleInputChange} className="bg-background border-border rounded-xl resize-none" />
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold h-14 rounded-xl shadow-lg shadow-amber-600/20 active:scale-[0.98] transition-all">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-amber-600 dark:bg-amber-700 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Ready to Build Together?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" onClick={() => window.open("tel:+919743881118")} className="bg-white text-amber-700 hover:bg-amber-50 h-14 px-10 rounded-xl font-bold border-none">
                Call Now
              </Button>
              <Button size="lg" className="bg-amber-800/40 hover:bg-amber-800 text-white border border-white/20 h-14 px-10 rounded-xl font-bold" onClick={handleWhatsAppClick}>
                <FaWhatsapp className="mr-2 h-6 w-6" /> WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}