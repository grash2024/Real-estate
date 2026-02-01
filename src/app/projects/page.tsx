"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  MapPin, 
  Building2, 
  Home, 
  Search,
  Filter,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Square,
  BedDouble,
  Car,
  Wifi
} from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank")
  }

  const projects = [
    {
      id: 1,
      name: "Royal Gardens",
      location: "Whitefield, Bangalore",
      price: "₹85 Lakhs - ₹1.5 Cr",
      type: "apartment",
      status: "ongoing",
      units: "2 & 3 BHK",
      area: "1250 - 1850 sq.ft.",
      possession: "Dec 2024",
      image: "/api/placeholder/400/300",
      description: "Luxurious apartments in the heart of Whitefield with world-class amenities.",
      highlights: ["Club House", "Swimming Pool", "Gym", "Children's Play Area", "Jogging Track", "24/7 Security"],
      rera: "PRM/KA/RERA/1251/309/AG/190821/002812"
    },
    {
      id: 2,
      name: "Sunshine Villas",
      location: "Electronic City, Bangalore",
      price: "₹1.2 Cr - ₹2.5 Cr",
      type: "villa",
      status: "new",
      units: "3 & 4 BHK",
      area: "2200 - 3200 sq.ft.",
      possession: "Jun 2025",
      image: "/api/placeholder/400/300",
      description: "Exclusive villas designed for luxurious living with private gardens.",
      highlights: ["Private Garden", "Terrace", "Smart Home", "24/7 Security", "Power Backup", "Rain Water Harvesting"],
      rera: "PRM/KA/RERA/1251/309/AG/200123/003456"
    },
    {
      id: 3,
      name: "Metropolitan Homes",
      location: "HSR Layout, Bangalore",
      price: "₹75 Lakhs - ₹1.2 Cr",
      type: "apartment",
      status: "ready",
      units: "2 & 3 BHK",
      area: "1100 - 1650 sq.ft.",
      possession: "Immediate",
      image: "/api/placeholder/400/300",
      description: "Modern apartments with excellent connectivity to metro and IT hubs.",
      highlights: ["Metro Connectivity", "Shopping Mall", "Schools", "Hospitals", "Bank ATM", "Supermarket"],
      rera: "PRM/KA/RERA/1251/309/AG/180915/001234"
    },
    {
      id: 4,
      name: "Green Valley Estates",
      location: "Sarjapur Road, Bangalore",
      price: "₹95 Lakhs - ₹1.8 Cr",
      type: "apartment",
      status: "ongoing",
      units: "2, 3 & 4 BHK",
      area: "1350 - 2200 sq.ft.",
      possession: "Mar 2025",
      image: "/api/placeholder/400/300",
      description: "Eco-friendly apartments surrounded by green spaces and modern amenities.",
      highlights: ["Eco-Friendly", "Green Spaces", "Solar Panels", "Waste Management", "Organic Garden", "EV Charging"],
      rera: "PRM/KA/RERA/1251/309/AG/210315/004567"
    },
    {
      id: 5,
      name: "Tech Park Residency",
      location: "Marathahalli, Bangalore",
      price: "₹65 Lakhs - ₹1.1 Cr",
      type: "apartment",
      status: "ongoing",
      units: "1 & 2 BHK",
      area: "850 - 1350 sq.ft.",
      possession: "Sep 2024",
      image: "/api/placeholder/400/300",
      description: "Affordable luxury apartments perfect for IT professionals.",
      highlights: ["IT Park Nearby", "Co-working Space", "High-Speed Internet", "Cafeteria", "Gym", "Library"],
      rera: "PRM/KA/RERA/1251/309/AG/210620/005678"
    },
    {
      id: 6,
      name: "Heritage Homes",
      location: "Jayanagar, Bangalore",
      price: "₹2.5 Cr - ₹4 Cr",
      type: "villa",
      status: "new",
      units: "4 & 5 BHK",
      area: "3500 - 4500 sq.ft.",
      possession: "Dec 2025",
      image: "/api/placeholder/400/300",
      description: "Premium villas in prime location with traditional architecture and modern amenities.",
      highlights: ["Heritage Design", "Private Pool", "Home Theater", "Wine Cellar", "Servant Quarters", "Smart Home"],
      rera: "PRM/KA/RERA/1251/309/AG/210910/006789"
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || project.type === selectedType
    const matchesStatus = selectedStatus === "all" || project.status === selectedStatus
    
    return matchesSearch && matchesType && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch(status) {
      case "new": return "bg-green-600"
      case "ongoing": return "bg-blue-600"
      case "ready": return "bg-amber-600"
      default: return "bg-gray-600"
    }
  }

  const getStatusText = (status: string) => {
    switch(status) {
      case "new": return "New Launch"
      case "ongoing": return "Ongoing"
      case "ready": return "Ready to Move"
      default: return status
    }
  }

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
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our premium residential projects in prime locations across Bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartments</SelectItem>
                <SelectItem value="villa">Villas</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New Launch</SelectItem>
                <SelectItem value="ongoing">Ongoing</SelectItem>
                <SelectItem value="ready">Ready to Move</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-100" />
                    <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </Badge>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 transition-colors">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    
                    <p className="text-amber-600 font-semibold text-lg mb-3">{project.price}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Home className="w-4 h-4 mr-1" />
                        {project.units}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Square className="w-4 h-4 mr-1" />
                        {project.area}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Possession: {project.possession}
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {project.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={handleWhatsAppClick}
                      >
                        <FaWhatsapp className="w-4 h-4 mr-1" />
                        Enquire
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/projects/${project.id}`}>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
            </div>
          )}
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
              Need Help Choosing Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect property that matches your needs and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={() => window.open("tel:+919844661119")}>
                <Phone className="mr-2 w-5 h-5" />
                Call Our Experts
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