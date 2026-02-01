"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Dumbbell, 
  Home, 
  Trees, 
  Shield, 
  Zap, 
  Droplets, 
  Car, 
  Wifi,
  Users,
  BookOpen,
  Music,
  Coffee,
  Gamepad2,
  Heart,
  Camera,
  Play,
  Phone,
  MessageCircle,
  CheckCircle
} from "lucide-react"

export default function AmenitiesPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+919844661119")
  }

  const coreAmenities = [
    {
      icon: Dumbbell,
      title: "State-of-the-Art Gymnasium",
      description: "Fully equipped gym with modern cardio and weight training equipment, professional trainers, and fitness programs.",
      features: ["Modern Equipment", "Personal Trainers", "Yoga Room", "Steam Room"]
    },
    {
      icon: Home,
      title: "Luxurious Club House",
      description: "Spacious club house with multipurpose hall, party area, and recreational facilities for residents.",
      features: ["Party Hall", "Conference Room", "Lounge Area", "Indoor Games"]
    },
    {
      icon: Trees,
      title: "Landscaped Gardens",
      description: "Beautifully designed green spaces with walking paths, meditation areas, and themed gardens.",
      features: ["Theme Gardens", "Walking Paths", "Meditation Zones", "Kids Play Area"]
    },
    {
      icon: Shield,
      title: "Advanced Security System",
      description: "24/7 security with CCTV surveillance, biometric access, and trained security personnel.",
      features: ["CCTV Surveillance", "Biometric Access", "Security Guards", "Fire Safety"]
    }
  ]

  const lifestyleAmenities = [
    {
      icon: Users,
      title: "Community Hall",
      description: "Spacious community hall for social gatherings, events, and celebrations.",
      features: ["Seating Capacity 200+", "Audio Visual System", "Catering Kitchen", "Parking"]
    },
    {
      icon: BookOpen,
      title: "Library & Reading Room",
      description: "Quiet library with extensive collection of books and reading areas.",
      features: ["Book Collection", "Reading Areas", "Study Rooms", "Wi-Fi Access"]
    },
    {
      icon: Music,
      title: "Music & Dance Room",
      description: "Sound-proof rooms for music practice and dance sessions.",
      features: ["Sound Proof", "Mirrored Walls", "Audio System", "Storage Lockers"]
    },
    {
      icon: Coffee,
      title: "Café & Lounge",
      description: "Modern café serving beverages and snacks with comfortable seating.",
      features: ["Coffee Bar", "Snack Menu", "Outdoor Seating", "Wi-Fi"]
    }
  ]

  const sportsAmenities = [
    {
      icon: Gamepad2,
      title: "Indoor Sports Arena",
      description: "Multi-purpose indoor sports court for various games and activities.",
      features: ["Badminton Court", "Table Tennis", "Carrom", "Chess"]
    },
    {
      icon: Heart,
      title: "Swimming Pool",
      description: "Olympic-size swimming pool with separate kids pool and changing rooms.",
      features: ["Main Pool", "Kids Pool", "Changing Rooms", "Lifeguard"]
    },
    {
      icon: Trees,
      title: "Jogging Track",
      description: "Well-lit jogging track around the property with landscaping.",
      features: ["600m Track", "Landscaped Path", "Lighting", "Rest Areas"]
    },
    {
      icon: Users,
      title: "Kids Play Area",
      description: "Safe and fun play area for children with modern equipment.",
      features: ["Play Equipment", "Soft Flooring", "Safety Features", "Seating Area"]
    }
  ]

  const infrastructureAmenities = [
    {
      icon: Zap,
      title: "Power Backup",
      description: "100% power backup for all common areas and individual units.",
      features: ["DG Sets", "Automatic Transfer", "Common Areas", "Individual Units"]
    },
    {
      icon: Droplets,
      title: "Water Management",
      description: "24/7 water supply with water treatment and rainwater harvesting.",
      features: ["RO Plant", "Rain Water Harvesting", "Sewage Treatment", "24/7 Supply"]
    },
    {
      icon: Car,
      title: "Parking System",
      description: "Dedicated parking spaces with visitor parking and EV charging.",
      features: ["Covered Parking", "Visitor Parking", "EV Charging", "Security"]
    },
    {
      icon: Wifi,
      title: "Digital Infrastructure",
      description: "High-speed internet connectivity and smart home features.",
      features: ["Fiber Optic", "Wi-Fi Zones", "Smart Home", "Intercom"]
    }
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
              World-Class Amenities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience luxury living with our comprehensive range of amenities designed for your comfort and convenience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 w-5 h-5" />
                Schedule Visit
              </Button>
              <Button size="lg" variant="outline" onClick={handleCallClick}>
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="core">Core Amenities</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
              <TabsTrigger value="sports">Sports & Fitness</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coreAmenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                            <amenity.icon className="w-6 h-6 text-amber-600" />
                          </div>
                          <CardTitle className="text-xl">{amenity.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{amenity.description}</p>
                        <div className="space-y-2">
                          {amenity.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lifestyle" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {lifestyleAmenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <amenity.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <CardTitle className="text-xl">{amenity.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{amenity.description}</p>
                        <div className="space-y-2">
                          {amenity.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sports" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sportsAmenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <amenity.icon className="w-6 h-6 text-green-600" />
                          </div>
                          <CardTitle className="text-xl">{amenity.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{amenity.description}</p>
                        <div className="space-y-2">
                          {amenity.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {infrastructureAmenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <amenity.icon className="w-6 h-6 text-purple-600" />
                          </div>
                          <CardTitle className="text-xl">{amenity.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{amenity.description}</p>
                        <div className="space-y-2">
                          {amenity.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Amenities Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our world-class amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-64 bg-gradient-to-br from-amber-100 to-amber-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="bg-white/90">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <h3 className="font-semibold">Amenity {item}</h3>
                  <p className="text-sm text-muted-foreground">Premium facility</p>
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
              Experience These Amenities Yourself
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a visit to our projects and see these amazing amenities in person
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}