import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground text-sm hover:text-[#1e9cac] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground text-sm hover:text-[#1e9cac] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground text-sm hover:text-[#1e9cac] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone size={16} className="text-[#1e9cac] flex-shrink-0" />
                <a href="tel:905-299-6738" className="hover:text-[#1e9cac] transition-colors">
                  905-299-6738
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={16} className="text-[#1e9cac] flex-shrink-0" />
                <a href="mailto:info@plutopropertymgmt.ca" className="hover:text-[#1e9cac] transition-colors">
                  info@plutopropertymgmt.ca
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin size={16} className="text-[#1e9cac] flex-shrink-0 mt-0.5" />
                <span>Milton, Mississauga, Oakville, Burlington & GTA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Pluto Property Management Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-muted-foreground text-xs hover:text-[#1e9cac] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground text-xs">|</span>
            <Link href="/terms" className="text-muted-foreground text-xs hover:text-[#1e9cac] transition-colors">
              Terms of Service
            </Link>
            <span className="text-muted-foreground text-xs">|</span>
            <Link href="/accessibility" className="text-muted-foreground text-xs hover:text-[#1e9cac] transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
