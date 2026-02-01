"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaWhatsapp } from "react-icons/fa";
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  CheckCircle, 
  Calendar,
  TrendingUp,
  Heart,
  ArrowRight,
  Phone,
  MessageCircle
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank")
  }

  const stats = [
    { icon: Building2, label: "Projects Delivered", value: "50+" },
    { icon: Users, label: "Happy Homeowners", value: "5000+" },
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Target, label: "Success Rate", value: "100%" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our customers' needs and dreams above everything else, ensuring complete satisfaction."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Uncompromising quality in construction, materials, and finishes that exceed industry standards."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing modern technology and innovative designs to create future-ready homes."
    },
    {
      icon: Calendar,
      title: "Timely Delivery",
      description: "Commitment to delivering projects on time, every time, without compromising on quality."
    }
  ]

  const leadership = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/api/placeholder/300/300",
      description: "With over 20 years in real estate, Rajesh leads our vision of creating dream homes."
    },
    {
      name: "Priya Sharma",
      position: "Managing Director",
      image: "/api/placeholder/300/300",
      description: "Priya brings expertise in project management and customer relations to our leadership team."
    },
    {
      name: "Amit Patel",
      position: "Chief Architect",
      image: "/api/placeholder/300/300",
      description: "Amit's innovative designs have won multiple awards for architectural excellence."
    },
    {
      name: "Sneha Reddy",
      position: "Head of Sales",
      image: "/api/placeholder/300/300",
      description: "Sneha ensures a seamless home buying experience for all our customers."
    }
  ]

  const milestones = [
    { year: "2009", title: "Company Founded", description: "Started with a vision to redefine urban living" },
    { year: "2012", title: "First Project Delivered", description: "Successfully completed our first residential project" },
    { year: "2016", title: "Expansion", description: "Expanded to multiple locations across Bangalore" },
    { year: "2020", title: "500+ Homes Delivered", description: "Milestone of delivering over 500 happy homes" },
    { year: "2024", title: "15 Years of Excellence", description: "Celebrating 15 years of trust and quality" }
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
              About Sreeyan Developers
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Building dreams and creating lasting homes for over 15 years. 
              We are your trusted partner in finding the perfect home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/projects" className="flex items-center">
                  Our Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009, Sreeyan Developers began with a simple yet powerful vision: 
                  to create homes that people would love to live in. We started as a small 
                  team with big dreams, focused on understanding the needs of first-time 
                  home buyers.
                </p>
                <p>
                  Over the years, we've grown into one of Bangalore's most trusted real 
                  estate developers, delivering over 50 projects and helping more than 
                  5000 families find their dream homes. Our journey has been marked by 
                  innovation, quality, and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we continue to push boundaries and set new standards in residential 
                  development, always keeping our customers' dreams at the heart of everything we do.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-amber-100 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <value.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries behind Sreeyan Developers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-100" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                    <Badge variant="secondary" className="mb-3">{leader.position}</Badge>
                    <p className="text-muted-foreground text-sm">{leader.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-8 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <Badge variant="outline" className="text-amber-600 border-amber-600">
                    {milestone.year}
                  </Badge>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-amber-600 rounded-full"></div>
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
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
              Join the Sreeyan Developers Family
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with a developer who truly cares about your dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("tel:+919844661119")}>
                <Phone className="mr-2 w-5 h-5" />
                Call Us
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