import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.jpeg" 
                alt="Sreeyan Developers Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-bold text-xl">Sreeyan Developers</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Building dreams and creating lasting homes for first-time buyers. 
              Your trusted partner in finding the perfect home.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/18KMAGxb5o/" className="text-muted-foreground hover:text-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://www.instagram.com/sreeyandevelopers25/" className="text-muted-foreground hover:text-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Featured Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/royal-gardens" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Royal Gardens
                </Link>
              </li>
              <li>
                <Link href="/projects/sunshine-villas" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Sunshine Villas
                </Link>
              </li>
              <li>
                <Link href="/projects/metropolitan-homes" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Metropolitan Homes
                </Link>
              </li>
              <li>
                <Link href="/projects/green-valley" className="text-muted-foreground hover:text-amber-600 transition-colors">
                  Green Valley Estates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-600" />
                <span className="text-muted-foreground">sreeyandevelopers@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                <span className="text-muted-foreground">
                  No. 189, 1ST FLOOR, CHAITRA SREE COMPLEX, NEAR VISHAL MART, K. NARAYANAPURA ROAD, KOTHANURU,<br />
                   BANGALORE - 560 077,<br />
                  Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sreeyan Developers. All rights reserved. | 
            <Link href="/privacy" className="hover:text-amber-600 transition-colors ml-1">
              Privacy Policy
            </Link> | 
            <Link href="/terms" className="hover:text-amber-600 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}