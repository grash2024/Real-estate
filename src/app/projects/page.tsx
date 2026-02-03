"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Home,
  Search,
  ArrowRight,
  Phone,
  Calendar,
  Square,
  ShieldCheck,
  Zap,
  Droplets,
  CheckCircle,
  ImageIcon,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank");
  };

  const projects = [
    {
      id: "sreeyan-square",
      name: "Sreeyan Square",
      location: "Hennur Road, Bangalore North",
      price: "₹65 Lakhs - ₹95 Lakhs*",
      type: "apartment",
      status: "ongoing",
      units: "2 & 3 BHK",
      area: "1100 - 1550 sq.ft.",
      possession: "Dec 2025",
      image: "/hero-banner1.jpg", // ADD YOUR IMAGE PATH HERE
      description:
        "Our flagship residential tower featuring 115 premium units with 30% open space and modern amenities.",
      highlights: [
        "30% Open Area",
        "Swimming Pool",
        "Gymnasium",
        "Nagawara Metro Near",
        "24/7 Security",
        "Intercom Facility",
      ],
      rera: "BBMP Approved / A-Khata",
    },
    {
      id: "sreeyan-serenity",
      name: "Sreeyan Serenity",
      location: "Kyalasanahalli, Bangalore North",
      price: "₹45 Lakhs - ₹65 Lakhs*",
      type: "apartment",
      status: "ready",
      units: "2 BHK",
      area: "950 - 1200 sq.ft.",
      possession: "Immediate",
      image: "/hero-banner3.jpg", // ADD YOUR IMAGE PATH HERE
      description:
        "Affordable luxury apartments in a peaceful neighborhood with excellent connectivity to Manyata Tech Park.",
      highlights: [
        "Ready to Move",
        "Power Backup",
        "Covered Parking",
        "Lift Access",
        "Secure Community",
        "Vaastu Compliant",
      ],
      rera: "BBMP Approved",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 to-background dark:from-amber-950/20 dark:to-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-4 text-amber-600 border-amber-600 dark:text-amber-500"
            >
              Premium Residency
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-foreground">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Quality-assured homes in high-growth corridors of North Bangalore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-b border-border sticky top-16 md:top-20 z-30 shadow-sm backdrop-blur-md bg-card/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects (e.g. Hennur Road)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-background border-border focus:ring-amber-500"
              />
            </div>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full lg:w-64 h-12 bg-background border-border">
                <SelectValue placeholder="Project Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="ongoing">Under Construction</SelectItem>
                <SelectItem value="ready">Ready to Move</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-border bg-card shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2.5rem]">
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-muted">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/20">
                        <ImageIcon className="w-12 h-12 text-amber-600 opacity-20" />
                      </div>
                    )}

                    {/* Status Badge */}
                    <Badge
                      className={`absolute top-6 right-6 px-4 py-1.5 font-bold shadow-lg ${project.status === "ready" ? "bg-green-600" : "bg-amber-600"}`}
                    >
                      {project.status === "ready" ? "Ready to Move" : "Ongoing"}
                    </Badge>

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-amber-600 transition-colors">
                        {project.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400 border-none font-bold"
                      >
                        {project.type.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-amber-600 shrink-0" />
                      <span className="text-sm font-medium">
                        {project.location}
                      </span>
                    </div>

                    <p className="text-3xl font-black text-amber-600 dark:text-amber-500 mb-6 tracking-tight">
                      {project.price}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-8 border-y border-border py-6">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                          Configurations
                        </p>
                        <div className="flex items-center text-foreground font-bold">
                          <Home className="w-4 h-4 mr-2 text-amber-600" />
                          {project.units}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                          Area Range
                        </p>
                        <div className="flex items-center text-foreground font-bold">
                          <Square className="w-4 h-4 mr-2 text-amber-600" />
                          {project.area}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-muted-foreground mb-6 text-sm font-semibold">
                      <Calendar className="w-4 h-4 mr-2 text-amber-600" />
                      Completion: {project.possession}
                    </div>

                    <p className="text-muted-foreground text-sm mb-8 leading-relaxed line-clamp-2 italic">
                      "{project.description}"
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-muted/50 dark:bg-muted/20 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border"
                        >
                          <CheckCircle className="w-3 h-3 mr-1.5 text-green-600" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        size="lg"
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl shadow-lg shadow-amber-600/20 h-14"
                        onClick={handleWhatsAppClick}
                      >
                        <FaWhatsapp className="w-5 h-5 mr-2" />
                        Inquire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-muted/30 dark:bg-muted/10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              {
                icon: ShieldCheck,
                title: "RERA Registered",
                desc: "All projects compliant with state regulatory norms.",
              },
              {
                icon: Zap,
                title: "Quality Check",
                desc: "Rigorous quality audits at every stage of construction.",
              },
              {
                icon: Droplets,
                title: "Eco-Friendly",
                desc: "Rainwater harvesting and open green spaces in every project.",
              },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-2xl flex items-center justify-center mx-auto transition-transform hover:rotate-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-xl text-foreground tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-amber-600 dark:bg-amber-700 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to Visit Your Future Home?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
              Schedule a site visit to Sreeyan Square or Sreeyan Serenity today
              and experience luxury firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-amber-700 hover:bg-amber-50 h-16 px-10 rounded-2xl font-bold text-lg shadow-xl"
                onClick={() => window.open("tel:+919844661119")}
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Sales Expert
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 rounded-2xl font-bold text-lg backdrop-blur-md 
             /* Light Mode: White contrast on Amber */
             border-white/40 text-white hover:bg-white hover:text-amber-600 
             /* Dark Mode: Soft white contrast on Dark Amber */
             dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-amber-700 
             transition-all shadow-xl active:scale-95 group"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp className="mr-2 w-6 h-6 transition-transform group-hover:scale-110" />
                WhatsApp Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
