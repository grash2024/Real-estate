"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { 
  Dumbbell, 
  Trees, 
  Shield, 
  Zap, 
  Droplets, 
  ParkingCircle, 
  Users,
  Heart,
  Phone,
  MessageCircle,
  CheckCircle,
  Video,
  Wind,
} from "lucide-react"
import Link from "next/link"

export default function AmenitiesPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919743661118", "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+919743661118")
  }

  const leisureAmenities = [
    {
      icon: Heart,
      title: "Swimming Pool",
      description: "A crystal-clear, olympic-sized swimming pool designed for both relaxation and fitness for all age groups.",
      features: ["Kids Pool Area", "Changing Rooms", "Regular Maintenance", "Poolside Deck"]
    },
    {
      icon: Dumbbell,
      title: "Modern Gymnasium",
      description: "State-of-the-art fitness center with the latest cardio and strength training equipment.",
      features: ["Premium Equipment", "Ventilated Space", "Yoga Corner", "Weight Training"]
    },
    {
      icon: Trees,
      title: "30% Open Green Space",
      description: "Vast landscaped areas providing a breath of fresh air and a serene environment for residents.",
      features: ["Themed Gardens", "Senior Citizen Park", "Walking Tracks", "Lush Lawns"]
    },
    {
      icon: Users,
      title: "Kids Play Area",
      description: "Dedicated safe zones for children with modern play equipment and soft flooring.",
      features: ["Safety Flooring", "Modern Slides", "Seating for Parents", "Secured Perimeter"]
    }
  ]

  const securityAmenities = [
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock manual security and surveillance to ensure total peace of mind for your family.",
      features: ["CCTV Surveillance", "Manned Entry Points", "Patrolling", "Visitor Logs"]
    },
    {
      icon: Video,
      title: "Intercom Facility",
      description: "Direct intercom connectivity from the main gate to every individual unit for enhanced security.",
      features: ["Direct Dial", "Gate Security Sync", "Reliable Network", "Emergency Alerts"]
    },
    {
      icon: Shield,
      title: "Fire Safety Systems",
      description: "Advanced fire detection and suppression systems installed across the property.",
      features: ["Smoke Detectors", "Fire Extinguishers", "Sprinkler Systems", "Hydrant Points"]
    }
  ]

  const infrastructureAmenities = [
    {
      icon: Zap,
      title: "100% Power Backup",
      description: "Uninterrupted power supply for common areas and elevators, with limited backup for units.",
      features: ["DG Set Support", "Auto-switchover", "Lift Backup", "Lobby Lighting"]
    },
    {
      icon: Droplets,
      title: "Water Management",
      description: "Sustainable water solutions including rainwater harvesting and high-quality filtration plants.",
      features: ["24/7 Supply", "Rainwater Harvesting", "Water Softener", "Borewell Support"]
    },
    {
      icon: ParkingCircle,
      title: "Covered Car Parking",
      description: "Secure and spacious covered parking facilities for residents and separate visitor parking.",
      features: ["Basement Parking", "Visitor Slots", "Well-lit Area", "EV Points (Select)"]
    },
    {
      icon: Wind,
      title: "Natural Ventilation",
      description: "Architectural design focused on maximizing natural light and air-flow in every apartment.",
      features: ["Large Windows", "Balcony Access", "Cross Ventilation", "Open Layouts"]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section with Image Split Layout */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-50 to-background dark:from-amber-950/20 dark:to-background border-b border-border overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content - Left Side */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 text-amber-600 border-amber-600 dark:text-amber-500 dark:border-amber-500">
                Lifestyle & Convenience
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground leading-tight">
                World-Class <br className="hidden lg:block" /> <span className="text-amber-600 dark:text-amber-500">Amenities</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                Experience Sreeyan Square's premium facilities, from our 30% open green spaces to our high-tech security systems, designed for your modern lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20" onClick={handleWhatsAppClick}>
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Inquire Now
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground bg-background/50 backdrop-blur-sm" onClick={handleCallClick}>
                  <Phone className="mr-2 w-5 h-5 text-amber-600" />
                  Schedule Tour
                </Button>
              </div>
            </motion.div>

            {/* Image Banner - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-900/20 dark:shadow-amber-900/40 border-4 border-white dark:border-amber-900/30"
            >
              <Image
                src="/hero-banner1.jpg"
                alt="Sreeyan Square Premium Amenities Banner"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Subtle overlay for dark mode integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent dark:from-background/60 mix-blend-overlay pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="leisure" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50 dark:bg-muted/20 rounded-2xl mb-12 max-w-3xl mx-auto">
              <TabsTrigger value="leisure" className="py-3 rounded-xl data-[state=active]:bg-background data-[state=active]:text-amber-600 data-[state=active]:shadow-sm text-sm sm:text-base font-medium transition-all">Leisure & Wellness</TabsTrigger>
              <TabsTrigger value="security" className="py-3 rounded-xl data-[state=active]:bg-background data-[state=active]:text-amber-600 data-[state=active]:shadow-sm text-sm sm:text-base font-medium transition-all">Safety & Security</TabsTrigger>
              <TabsTrigger value="infrastructure" className="py-3 rounded-xl data-[state=active]:bg-background data-[state=active]:text-amber-600 data-[state=active]:shadow-sm text-sm sm:text-base font-medium transition-all">Infrastructure</TabsTrigger>
            </TabsList>

            {[
              { id: "leisure", data: leisureAmenities },
              { id: "security", data: securityAmenities },
              { id: "infrastructure", data: infrastructureAmenities }
            ].map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0 outline-none focus:ring-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {tab.data.map((amenity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">
                        <CardHeader className="pb-4 bg-muted/30 dark:bg-muted/5 border-b border-border/50 pt-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                              <amenity.icon className="w-7 h-7 text-amber-600 dark:text-amber-500" />
                            </div>
                            <CardTitle className="text-xl text-foreground tracking-tight">{amenity.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-medium">{amenity.description}</p>
                          <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                            {amenity.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500 mr-2 shrink-0" />
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-muted/30 dark:bg-muted/10 relative overflow-hidden">
        {/* Background Pattern Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-amber-200/20 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">Experience Open Living</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                At Sreeyan Square, we believe in breathing space. With <span className="text-amber-600 dark:text-amber-500 font-black text-2xl">30% open areas</span>, your home extends beyond four walls into lush gardens and vibrant community spaces.
              </p>
              <ul className="space-y-5">
                {[
                  "Nagawara Metro Station within 3.38 Km",
                  "Top-rated safety score of 4/5 by residents",
                  "Close to Medi Derma & Sri Vijayalakshmi Hospitals"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground font-medium p-3 rounded-xl bg-background/80 border border-border/50 shadow-sm">
                    <div className="mt-1 bg-amber-100 dark:bg-amber-900/30 p-1 rounded-full">
                         <CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-border/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Using a placeholder or the hero banner again here if you don't have a specific highlights image */}
              <Image 
                src="/hero-banner3.jpg" 
                alt="Sreeyan Square Open Spaces"
                fill
                className="object-cover hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <Trees className="w-12 h-12 mb-4 text-amber-400" />
                 <p className="text-3xl font-bold">Lush Greenery</p>
                 <p className="font-medium opacity-90">Designed for serenity.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-amber-600 dark:bg-amber-700 transition-colors relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to See Sreeyan Square?
            </h2>
            <p className="text-xl md:text-2xl text-amber-50 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Join the 58+ housing societies in Hennur Road and find your brand-new home today.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" variant="secondary" onClick={handleCallClick} className="bg-white text-amber-700 hover:bg-amber-50 h-16 px-12 rounded-2xl font-bold text-lg shadow-xl shadow-black/10 transition-transform active:scale-95">
                <Phone className="mr-2 w-6 h-6" />
                Schedule Visit
              </Button>
              <Button size="lg" className="bg-amber-800/30 hover:bg-amber-800/50 text-white border-2 border-white/30 h-16 px-12 rounded-2xl font-bold text-lg backdrop-blur-md transition-transform active:scale-95" onClick={handleWhatsAppClick}>
                <MessageCircle className="mr-2 h-6 w-6" />
                Get Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}