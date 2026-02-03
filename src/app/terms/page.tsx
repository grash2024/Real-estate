"use client"

import { motion } from "framer-motion"
import { 
  Gavel, 
  HardHat, 
  Eye, 
  CalendarClock, 
  ParkingCircle, 
  FileSignature, 
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsConditionsPage() {
  const terms = [
    {
      icon: HardHat,
      title: "1. Construction Quality & Structural Integrity",
      content: "We prioritize safety and longevity in every brick laid.",
      points: [
        "Soil-Based Design: All structures are engineered based on site-specific soil testing and structural certification for maximum stability.",
        "Quality Assurance: We utilize industry-standard materials and secure building methods to ensure a quality-assured product."
      ]
    },
    {
      icon: Eye,
      title: "2. Project Monitoring & Transparency",
      content: "Transparency is the foundation of our client relationships.",
      points: [
        "Live Updates: Clients can track project progress through photo or video updates provided by Sreeyan Developers.",
        "Visual Accuracy: Layouts are confirmed through 3D reality walkthroughs to ensure the final product matches the proposed vision."
      ]
    },
    {
      icon: CalendarClock,
      title: "3. Timelines & Possession",
      content: "We strive for punctuality while maintaining high safety standards.",
      points: [
        "Target Dates: Project completion dates (e.g., Sreeyan Square mid-2025) are subject to government approvals and site-specific conditions.",
        "Force Majeure: Possession dates are estimates; external factors beyond our control may influence final delivery schedules."
      ]
    },
    {
      icon: ParkingCircle,
      title: "4. Amenities & Infrastructure",
      content: "Our projects are designed to enhance your lifestyle.",
      points: [
        "Community Features: Projects feature gated community security, dedicated parking, and standard amenities per sanctioned plans.",
        "Specific Facilities: Amenities like swimming pools or sports facilities are project-specific as outlined in individual brochures."
      ]
    },
    {
      icon: FileSignature,
      title: "5. Legal Documentation",
      content: "The signed contract is the ultimate word on our partnership.",
      points: [
        "Primary Agreements: Final legal relationships are governed strictly by the 'Agreement for Sale' and the 'Construction Agreement'.",
        "Detailed Clauses: Please refer to signed contracts for specific payment schedules, penalty clauses, and material brands."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/20 dark:to-background border-b border-amber-100 dark:border-amber-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
           
            <div className="flex justify-center mb-4">
              <span className="p-3 bg-amber-600/10 dark:bg-amber-500/10 rounded-full">
                <Gavel className="w-8 h-8 text-amber-600 dark:text-amber-500" />
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              These terms outline the standards, commitments, and legal framework under which Sreeyan Developers operates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Accordion/List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-6">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-border/50 bg-card hover:shadow-md dark:hover:shadow-amber-900/10 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl h-fit w-fit text-amber-600 dark:text-amber-500">
                        <term.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">{term.title}</h2>
                          <p className="text-amber-700 dark:text-amber-400 font-medium text-sm flex items-center gap-2 uppercase tracking-wider">
                            <Zap className="w-4 h-4" /> {term.content}
                          </p>
                        </div>
                        <div className="grid gap-4 pt-2 border-t border-border dark:border-border/50">
                          {term.points.map((point, i) => (
                            <div key={i} className="flex items-start gap-3 group">
                              <ChevronRight className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                              <p className="text-muted-foreground leading-relaxed">
                                <span className="text-foreground font-semibold">{point.split(':')[0]}:</span>
                                {point.split(':')[1]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Policy Notice Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 border border-dashed border-amber-200 dark:border-amber-900/40 rounded-3xl bg-amber-50/30 dark:bg-amber-950/10 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="p-4 bg-amber-600 dark:bg-amber-700 rounded-full text-white">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Legal Disclaimer</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
                The information provided on this page is for general guidance only. In case of any discrepancy between these terms and your individually signed <span className="text-foreground font-semibold">Agreement for Sale</span> or <span className="text-foreground font-semibold">Construction Agreement</span>, the signed contract shall prevail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-700 dark:hover:bg-amber-600 text-white" asChild>
            <Link href="/contact">Request Detailed Brochure</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}