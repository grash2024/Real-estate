"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
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
      // Set to true after 20px of scroll for a smoother transition
      setScrolled(window.scrollY > 20)
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
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group shrink-0">
              <div className="relative">
                <img 
                  src="/logo.jpeg" 
                  alt="Sreeyan Developers Logo" 
                  className="w-10 h-10 rounded-lg object-cover ring-1 ring-border group-hover:ring-amber-600 transition-all"
                />
              </div>
              <span className="font-bold text-lg md:text-xl tracking-tight text-foreground group-hover:text-amber-600 transition-colors">
                Sreeyan Developers
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-all hover:text-amber-600 relative py-1 ${
                    pathname === item.href
                      ? "text-amber-600"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600"
                    />
                  )}
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
                className="border-border hover:bg-muted text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-amber-600" />
                <span>Call</span>
              </Button>
              <Button
                size="sm"
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white shadow-md transition-all active:scale-95"
              >
                <FaWhatsapp className="w-4 h-4 mr-2" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] border-l border-border bg-background p-0">
                  <SheetHeader className="p-6 text-left border-b border-border">
                    <SheetTitle className="text-amber-600 font-bold text-xl">Menu</SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col p-4 space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-semibold p-4 rounded-xl transition-all ${
                          pathname === item.href
                            ? "bg-amber-50 dark:bg-amber-950/40 text-amber-600"
                            : "text-foreground hover:bg-muted"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="absolute bottom-8 left-0 right-0 px-6 space-y-4">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-2 text-center">Contact Us</p>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        onClick={handleCallClick}
                        className="flex items-center justify-center space-x-2 h-14 rounded-2xl border-border bg-background text-foreground"
                      >
                        <Phone className="w-5 h-5 text-amber-600" />
                        <span className="font-bold">Call</span>
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2 h-14 rounded-2xl shadow-lg"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                        <span className="font-bold">Chat</span>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Floating Action Buttons (Mobile Only) */}
      <AnimatePresence>
        <div className="fixed bottom-8 right-6 z-40 flex flex-col space-y-4 md:hidden">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCallClick}
            className="w-14 h-14 rounded-full shadow-xl bg-background border border-border text-amber-600 flex items-center justify-center backdrop-blur-md ring-1 ring-black/5 dark:ring-white/10"
          >
            <Phone className="w-6 h-6" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWhatsAppClick}
            className="w-14 h-14 rounded-full shadow-xl bg-green-600 text-white flex items-center justify-center ring-4 ring-background"
          >
            <FaWhatsapp className="w-7 h-7" />
          </motion.button>
        </div>
      </AnimatePresence>
    </>
  )
}