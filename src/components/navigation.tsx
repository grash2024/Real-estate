"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Amenities", href: "/amenities" },
  { name: "Partner With Us", href: "/partner" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919876543210", "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+919876543210")
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Royal Estates Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-bold text-xl text-foreground">Royal Estates</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    pathname === item.href
                      ? "text-amber-600"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={handleCallClick}
                className="flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </Button>
              <Button
                size="sm"
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:text-amber-600 ${
                        pathname === item.href
                          ? "text-amber-600"
                          : "text-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Theme</span>
                      <ThemeToggle />
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleCallClick}
                      className="flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Us</span>
                    </Button>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-green-600 hover:bg-green-700 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.header>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 md:hidden">
        <Button
          size="icon"
          onClick={handleCallClick}
          className="w-12 h-12 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700"
        >
          <Phone className="w-5 h-5" />
        </Button>
        <Button
          size="icon"
          onClick={handleWhatsAppClick}
          className="w-12 h-12 rounded-full shadow-lg bg-green-600 hover:bg-green-700"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
    </>
  )
}