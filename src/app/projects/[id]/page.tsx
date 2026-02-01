"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MapPin, 
  Home, 
  Square, 
  Calendar,
  Phone,
  MessageCircle,
  BedDouble,
  Bath,
  Car,
  Wifi,
  Dumbbell,
  Trees,
  Shield,
  Zap,
  Droplets,
  Camera,
  Play,
  Download,
  ArrowLeft,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+919844661119")
  }

  // Sample project data - in real app, this would come from an API
  const project = {
    id: 1,
    name: "Royal Gardens",
    location: "Whitefield, Bangalore",
    price: "₹85 Lakhs - ₹1.5 Cr",
    type: "apartment",
    status: "ongoing",
    units: "2 & 3 BHK",
    area: "1250 - 1850 sq.ft.",
    possession: "Dec 2024",
    description: "Royal Gardens is a premium residential project located in the heart of Whitefield, Bangalore. Spread across 5 acres of lush green landscape, this project offers 2 and 3 BHK luxury apartments designed to provide a perfect blend of comfort and sophistication.",
    rera: "PRM/KA/RERA/1251/309/AG/190821/002812",
    highlights: [
      "Club House with modern amenities",
      "Swimming Pool and Kids Pool",
      "State-of-the-art Gymnasium",
      "Children's Play Area",
      "Jogging Track",
      "24/7 Security with CCTV",
      "Power Backup",
      "Rain Water Harvesting"
    ],
    floorPlans: [
      {
        type: "2 BHK",
        area: "1250 sq.ft.",
        price: "₹85 Lakhs",
        bedrooms: 2,
        bathrooms: 2,
        balconies: 2,
        image: "/api/placeholder/600/400"
      },
      {
        type: "3 BHK",
        area: "1650 sq.ft.",
        price: "₹1.1 Cr",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 2,
        image: "/api/placeholder/600/400"
      },
      {
        type: "3 BHK Large",
        area: "1850 sq.ft.",
        price: "₹1.5 Cr",
        bedrooms: 3,
        bathrooms: 3,
        balconies: 3,
        image: "/api/placeholder/600/400"
      }
    ],
    amenities: [
      { icon: Dumbbell, name: "Gymnasium", description: "Fully equipped with modern equipment" },
      { icon: Home, name: "Club House", description: "Multipurpose hall and party area" },
      { icon: Trees, name: "Landscaped Gardens", description: "Beautiful green spaces throughout" },
      { icon: Shield, name: "24/7 Security", description: "CCTV surveillance and trained guards" },
      { icon: Zap, name: "Power Backup", description: "100% power backup for all units" },
      { icon: Droplets, name: "Water Supply", description: "24/7 water supply with RO plant" },
      { icon: Car, name: "Parking", description: "Dedicated parking for residents" },
      { icon: Wifi, name: "High-Speed Internet", description: "Fiber optic connectivity" }
    ],
    gallery: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    location: {
      address: "Whitefield Main Road, Whitefield, Bangalore - 560066",
      landmarks: [
        "2 km from Whitefield Metro Station",
        "3 km from ITPL Tech Park",
        "1 km from Phoenix Marketcity",
        "500 m from renowned schools",
        "1 km from multi-specialty hospitals"
      ],
      connectivity: [
        "Excellent connectivity to ORR",
        "Close to upcoming metro line",
        "Easy access to airport road",
        "Well-connected to electronic city"
      ]
    }
  }

  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <section className="py-6 bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild>
            <Link href="/projects" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-amber-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-blue-600 mb-4">Ongoing Project</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{project.location}</span>
              </div>
              <p className="text-3xl font-bold text-amber-600 mb-6">{project.price}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Home className="w-5 h-5 text-amber-600 mr-2" />
                  <span>{project.units}</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 text-amber-600 mr-2" />
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-amber-600 mr-2" />
                  <span>Possession: {project.possession}</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-amber-600 mr-2" />
                  <span>RERA: {project.rera}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700" onClick={handleWhatsAppClick}>
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Enquire Now
                </Button>
                <Button size="lg" variant="outline" onClick={handleCallClick}>
                  <Phone className="mr-2 w-5 h-5" />
                  Schedule Visit
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-amber-100 rounded-lg" />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary">
                  <Camera className="w-4 h-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Play className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {project.gallery.slice(0, 4).map((image, index) => (
                        <div key={index} className="w-full h-32 bg-gradient-to-br from-amber-100 to-amber-100 rounded-lg cursor-pointer hover:opacity-80 transition-opacity" />
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Camera className="w-4 h-4 mr-2" />
                      View All Images
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="floor-plans" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {project.floorPlans.map((plan, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{plan.type}</CardTitle>
                      <p className="text-2xl font-bold text-amber-600">{plan.price}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-100 rounded-lg mb-4" />
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Area:</span>
                          <span>{plan.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bedrooms:</span>
                          <span>{plan.bedrooms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bathrooms:</span>
                          <span>{plan.bathrooms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Balconies:</span>
                          <span>{plan.balconies}</span>
                        </div>
                      </div>
                      <Button className="w-full" onClick={handleWhatsAppClick}>
                        Enquire Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.amenities.map((amenity, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <amenity.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{amenity.name}</h3>
                      <p className="text-sm text-muted-foreground">{amenity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="location" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Location Advantage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-64 bg-gradient-to-br from-amber-100 to-amber-100 rounded-lg mb-4" />
                    <p className="text-muted-foreground mb-4">{project.location.address}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold">Nearby Landmarks:</h4>
                      <ul className="space-y-2">
                        {project.location.landmarks.map((landmark, index) => (
                          <li key={index} className="flex items-start">
                            <MapPin className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{landmark}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Connectivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.location.connectivity.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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
              Interested in {project.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts for detailed information, site visits, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleCallClick}>
                <Phone className="mr-2 w-5 h-5" />
                Schedule Visit
              </Button>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 w-5 h-5" />
                Get Details
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-600">
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}