"use client"

import { motion } from "framer-motion"
import { 
  ShieldCheck, 
  Database, 
  UserCheck, 
  Share2, 
  Lock, 
  Cookie, 
  ExternalLink, 
  Scale, 
  FileText, 
  Mail,
  ArrowLeft
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
function getMonthYear(month: number, year: number): string {

    const date = new Date(year, month - 1);

    return date.toLocaleString('en-US', {
        month: 'long',
        year: 'numeric'
    });
}
export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: ShieldCheck,
      title: "1. Introduction",
      content: "Welcome to Sreeyan Developers (“Company,” “we,” “our,” “us”). We are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
    },
    {
      icon: Database,
      title: "2. Information We Collect",
      content: "We may collect and process the following types of information:",
      list: [
        "Personal Information: Name, email address, phone number, and other identifying details provided voluntarily.",
        "Transaction Information: Details about your property inquiries, purchases, or other transactions.",
        "Technical Data: IP address, browser type, device information, and website usage data.",
        "Cookies and Tracking Data: Information collected through cookies and similar technologies."
      ]
    },
    {
      icon: UserCheck,
      title: "3. How We Use Your Information",
      content: "We use the collected data for the following purposes:",
      list: [
        "To respond to your inquiries and provide requested services.",
        "To improve our website, services, and customer experience.",
        "To send promotional offers and marketing communications (opt-out available).",
        "To comply with legal obligations and prevent fraud."
      ]
    },
    {
      icon: Share2,
      title: "4. Sharing of Information",
      content: "We do not sell, rent, or trade your personal information. However, we may share it with third-party service providers assisting us in website operation, legal authorities if required by law, or business partners in case of mergers."
    },
    {
      icon: Lock,
      title: "5. Data Security",
      content: "We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
      icon: Cookie,
      title: "6. Cookies and Tracking",
      content: "Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences."
    },
    {
      icon: ExternalLink,
      title: "7. Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies separately."
    },
    {
      icon: Scale,
      title: "8. Your Rights and Choices",
      content: "Depending on your location, you may have rights to access, request a copy, correct, or delete your personal data. You may also opt-out of marketing communications at any time."
    },
    {
      icon: FileText,
      title: "9. Changes to This Policy",
      content: "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated “Effective Date.”"
    }
  ]

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/20 dark:to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Last Updated: {getMonthYear(new Date()?.getMonth() + 1,new Date()?.getFullYear())}. Your privacy is our priority. Learn how Sreeyan Developers protects your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-sm bg-muted/30 dark:bg-muted/10 hover:bg-muted/50 dark:hover:bg-muted/20 transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-500">
                        <section.icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-4 w-full">
                        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                          <section.icon className="w-5 h-5 sm:hidden text-amber-600 dark:text-amber-500" />
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                        {section.list && (
                          <ul className="grid gap-2">
                            {section.list.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-amber-600 mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="bg-amber-600 dark:bg-amber-700 text-white overflow-hidden relative border-none shadow-xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Mail className="w-32 h-32" />
                </div>
                <CardContent className="pt-10 pb-10 text-center relative z-10">
                  <h2 className="text-3xl font-bold mb-4">10. Contact Us</h2>
                  <p className="mb-8 text-amber-50 max-w-lg mx-auto opacity-90">
                    If you have any questions about this Privacy Policy or our data practices, please reach out to our team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" size="lg" className="bg-white text-amber-700 hover:bg-amber-50 dark:bg-slate-50 dark:text-amber-800" asChild>
                      <a href="mailto:sreeyandevelopers@gmail.com">
                        Email Us
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-600 dark:hover:bg-slate-900 transition-all" asChild>
                      <Link href="/contact">
                        Contact Support
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}