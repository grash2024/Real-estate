"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Building2,
  Home,
  
  MapPin,
  CheckCircle,
  Star,
  Phone,
  ShieldCheck,
  Handshake,
  BadgeCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Find Your Dream Home",
      subtitle: "Premium properties designed for first-time home buyers",
      image: "/hero-banner1.jpg",
    },
    {
      title: "Luxury Living Redefined",
      subtitle: "Experience the perfect blend of comfort and sophistication",
      image: "/hero-banner2.jpg",
    },
    {
      title: "Invest in Your Future",
      subtitle: "Smart real estate investments for lasting value",
      image: "/hero-banner3.jpg",
    },
    {
      title: "Homes That Match Your Lifestyle",
      subtitle: "Thoughtfully designed spaces in prime locations",
      image: "/hero-banner4.jpg",
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      name: "Royal Gardens",
      location: "Whitefield, Bangalore",
      price: "₹85 Lakhs - ₹1.5 Cr",
      type: "2 & 3 BHK Apartments",
      status: "Ongoing",
      image: "/project-1.jpg",
      features: ["Club House", "Swimming Pool", "Gym", "Children's Play Area"],
    },
    {
      id: 2,
      name: "Sunshine Villas",
      location: "Electronic City, Bangalore",
      price: "₹1.2 Cr - ₹2.5 Cr",
      type: "3 & 4 BHK Villas",
      status: "New Launch",
      image: "/project-2.jpg",
      features: ["Private Garden", "Terrace", "Smart Home", "24/7 Security"],
    },
    {
      id: 3,
      name: "Metropolitan Homes",
      location: "HSR Layout, Bangalore",
      price: "₹75 Lakhs - ₹1.2 Cr",
      type: "2 & 3 BHK Apartments",
      status: "Ready to Move",
      image: "/hero-banner.jpg",
      features: ["Metro Connectivity", "Shopping Mall", "Schools", "Hospitals"],
    },
  ];

  const amenities = [
    {
      icon: ShieldCheck,
      title: "Quality and Safety focus",
      description:
        "Built with high-quality materials and strict safety standards",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description:
        "Well-connected neighborhoods close to schools, hospitals, and transport",
    },
    {
      icon: Home,
      title: "Modern Amenities",
      description: "Smart living features with contemporary design and improved comfort",
    },
    {
      icon: Handshake,
      title: "Trust and Reliability",
      description:
        "Transparent processes with a proven track record of timely delivery",
    },
    {
      icon: BadgeCheck,
      title: "RERA Approved",
      description: "All projects are legally approved and RERA compliant",
    },
  ];

  const testimonials = [
    {
      name: "Jeevitha",
      profession: "Software Engineer",
      content:
        "Sreeyan Developers made our first home buying experience seamless. The team was professional and guided us through every step.",
      rating: 5,
    },
    {
      name: "Rajath Shetty",
      profession: "Business Owner",
      content:
        "Excellent quality construction and timely delivery. The amenities are world-class. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sanjay",
      profession: "Salaried Professional",
      content:
        "Transparent pricing and no hidden costs. The whole process was smooth from booking to possession.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank");
  };

  const handleCallClick = () => {
    window.open("tel:+919844661119");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{ duration: 1 }}
            >
              {
                <img
                  src={slide.image}
                  alt="Luxury Apartments"
                  className="w-full h-full object-cover"
                />
              }
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
            >
              <Link href="/projects" className="flex items-center">
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-green-600 backdrop-blur-sm text-white border-white active:scale-105"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Sreeyan Developers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional homes that exceed your
              expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our premium residential projects in prime locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-amber-600">
                      {project.status}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-amber-600 font-semibold mb-3">
                      {project.price}
                    </p>
                    <p className="text-muted-foreground mb-4">{project.type}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" onClick={handleWhatsAppClick}>
                      Enquire Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Link href="/projects" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Homeowners Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from real homeowners who trusted us with their
              dreams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="pt-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.profession}
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you discover the perfect property that
              matches your lifestyle and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={handleCallClick}>
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </Button>
              <Button
                size="lg"
                className="bg-green-600 text-white border-white border-2"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
