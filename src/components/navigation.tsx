"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

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
    window.open("https://wa.me/919844661119", "_blank")
  }

  const handleCallClick = () => {
    window.location.href = "tel:+919844661119"
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.jpeg" 
                alt="Sreeyan Developers Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:text-amber-600 transition-colors">
                Sreeyan Developers
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all hover:text-amber-600 relative py-1 ${
                    pathname === item.href
                      ? "text-amber-600 border-b-2 border-amber-600"
                      : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Action Buttons */}
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
                className="bg-green-600 hover:bg-green-700 text-white flex items-center space-x-2 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] sm:w-[350px] px-6">
                  <SheetHeader className="text-left pb-6 border-b">
                    <SheetTitle className="text-amber-600">Navigation</SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col space-y-2 mt-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-semibold p-3 rounded-md transition-colors ${
                          pathname === item.href
                            ? "bg-amber-50 text-amber-600 dark:bg-amber-950/30"
                            : "text-foreground hover:bg-muted"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-6 right-6 flex flex-col space-y-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Contact Us</p>
                    <Button
                      variant="outline"
                      onClick={handleCallClick}
                      className="w-full flex items-center justify-center space-x-3 h-12"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">Call Now</span>
                    </Button>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-3 h-12"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span className="font-semibold">WhatsApp</span>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Floating Action Buttons (FAB) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4 md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCallClick}
          className="w-14 h-14 rounded-full shadow-2xl bg-blue-600 text-white flex items-center justify-center border-4 border-white dark:border-slate-900"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full shadow-2xl bg-green-600 text-white flex items-center justify-center border-4 border-white dark:border-slate-900"
        >
          <FaWhatsapp className="w-6 h-6" />
        </motion.button>
      </div>
    </>
  )
}