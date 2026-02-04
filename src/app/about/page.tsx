"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919844661119", "_blank");
  };

  const stats = [
    { icon: Building2, label: "Projects Delivered", value: "50+" },
    { icon: Users, label: "Happy Homeowners", value: "5000+" },
    { icon: Award, label: "Years of Experience", value: "12+" },
    { icon: Target, label: "Success Rate", value: "100%" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We prioritize our customers' needs and dreams above everything else, ensuring complete satisfaction.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Uncompromising quality in construction, materials, and finishes that exceed industry standards.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Embracing modern technology and innovative designs to create future-ready homes.",
    },
    {
      icon: Calendar,
      title: "Timely Delivery",
      description:
        "Commitment to delivering projects on time, every time, without compromising on quality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 via-background to-background dark:from-amber-950/20 dark:via-background dark:to-background border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1 text-amber-600 border-amber-600 dark:text-amber-500 dark:border-amber-500 bg-amber-50/50 dark:bg-amber-950/30"
            >
              Established Since 2014
            </Badge>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-foreground">
              About Sreeyan Developers
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-10 max-w-3xl mx-auto">
              Based in{" "}
              <span className="text-foreground font-bold underline decoration-amber-500/50">
                Bangalore
              </span>
              , we bring over{" "}
              <span className="text-amber-600 dark:text-amber-500 font-bold">
                12 years of experience{" "}
              </span>
              to construction, delivering projects built on trust, precision,
              and quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-8 rounded-xl text-lg font-semibold shadow-lg shadow-amber-600/20"
                asChild
              >
                <Link href="/projects">
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="h-14 px-8 rounded-xl text-lg font-semibold border-border bg-background hover:bg-muted"
              >
                <FaWhatsapp className="mr-2 w-5 h-5 text-green-600" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl bg-muted/30 dark:bg-muted/10 border border-transparent hover:border-amber-500/30 transition-all group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-black text-foreground mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium uppercase text-xs tracking-[0.2em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/20 dark:bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The foundation of every home we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-amber-600 dark:bg-amber-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-600/20">
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{value.description}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[3rem] overflow-hidden bg-amber-600 dark:bg-amber-700 p-12 text-center text-white shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-amber-50/90 mb-10 max-w-2xl mx-auto">
                Join over 5000+ happy families who found their dream home with
                Sreeyan Developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-amber-50 font-bold h-14 px-10 rounded-2xl shadow-lg transition-transform active:scale-95 border-none"
                >
                  <a href="tel:+919844661119" className="flex items-center">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Sales Team
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="bg-white text-amber-700 dark:text-white hover:bg-amber-50 font-bold h-14 px-10 rounded-2xl shadow-lg transition-transform active:scale-95 border-none"
                  
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
