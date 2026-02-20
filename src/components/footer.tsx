"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
             <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-border group-hover:ring-amber-600 transition-all bg-white dark:bg-white/90 p-1">
                <img
                  src="/refined-logo.jpeg"
                  alt="Sreeyan Developers Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                {/* Main Title */}
                <span className="font-black text-lg md:text-xl tracking-tight text-foreground group-hover:text-amber-600 transition-colors uppercase p-1">
                  Sreeyan Developers
                </span>

                {/* Tagline */}
               
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Building dreams and creating lasting homes for first-time buyers.
              Your trusted partner in finding the perfect home in Bangalore.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/share/18KMAGxb5o/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919844661119"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-green-600 hover:border-green-600 transition-all shadow-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sreeyandevelopers25/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-pink-600 hover:border-pink-600 transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-foreground underline underline-offset-8 decoration-amber-600/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Amenities", href: "/amenities" },
                { name: "Partner With Us", href: "/partner" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-amber-600">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-foreground underline underline-offset-8 decoration-amber-600/30">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              {["Sreeyan Square", "Sreeyan Serenity"].map((project) => (
                <li key={project}>
                  <Link
                    href={`/projects`}
                    className="text-muted-foreground hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                  >
                    {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-foreground underline underline-offset-8 decoration-amber-600/30">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 shrink-0 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+919844661119"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +91 98446 61119
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 shrink-0 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:sreeyandevelopers@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors break-all"
                >
                  sreeyandevelopers@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 shrink-0 mt-1 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                  <MapPin className="w-4 h-4" />
                </div>
                <a
                  href="https://maps.google.com/?q=No.189,1ST+FLOOR,CHAITRA+SREE+COMPLEX,KOTHANURU,BANGALORE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
                >
                  No. 189, 1ST FLOOR, CHAITRA SREE COMPLEX, NEAR VISHAL MART, K.
                  NARAYANAPURA ROAD, KOTHANURU, BANGALORE - 560 077
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
       <div className="border-t border-border mt-12 pt-8">
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
    
    {/* Left Section */}
    <div className="text-center md:text-left text-sm text-muted-foreground">
      <p>
        © {currentYear} Sreeyan Developers. All rights reserved.
      </p>
      <p className="mt-1">
       Crafted by {" "}
        <a
          href="https://solveitbytech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:underline"
        >
          Solveitbytech
        </a>
      </p>
    </div>

    {/* Right Section */}
    <div className="flex justify-center md:justify-end gap-6 text-sm">
      <Link
        href="/privacy"
        className="text-muted-foreground hover:text-amber-600 transition-colors"
      >
        Privacy Policy
      </Link>
      <Link
        href="/terms"
        className="text-muted-foreground hover:text-amber-600 transition-colors"
      >
        Terms of Service
      </Link>
    </div>

  </div>
</div>
      </div>
    </footer>
  );
}
