"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Home, Building2, Droplets, Leaf, Snowflake, Wrench, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const residentialServices = [
  { href: "/services#janitorial", label: "Janitorial Cleaning", icon: Sparkles },
  { href: "/services#windows", label: "Window Cleaning", icon: Droplets },
  { href: "/services#lawn", label: "Lawn & Garden", icon: Leaf },
  { href: "/services#snow", label: "Snow Removal", icon: Snowflake },
  { href: "/services#touchups", label: "Property Touch-Ups", icon: Wrench },
]

const commercialServices = [
  { href: "/services#janitorial", label: "Janitorial Cleaning", icon: Sparkles },
  { href: "/services#windows", label: "Window Cleaning", icon: Droplets },
  { href: "/services#lawn", label: "Lawn & Garden", icon: Leaf },
  { href: "/services#snow", label: "Snow Removal", icon: Snowflake },
  { href: "/services#touchups", label: "Property Touch-Ups", icon: Wrench },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background",
        isScrolled && "border-b border-border shadow-lg"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Mascot Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mascot-sHxLMh3UrwJaud7bKfLtv95QfGoJ8y.png"
              alt="Pluto Mascot"
              width={44}
              height={44}
              className="h-9 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-base font-bold text-foreground">Pluto Property</span>
              <span className="text-xs text-muted-foreground block -mt-0.5">Management Inc.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#1e9cac]",
                pathname === "/" ? "text-[#1e9cac]" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#1e9cac]",
                  pathname === "/services" ? "text-[#1e9cac]" : "text-muted-foreground"
                )}
              >
                Services
                <ChevronDown
                  size={16}
                  className={cn("transition-transform", isServicesOpen && "rotate-180")}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-card border border-border rounded-xl shadow-xl p-4 animate-scale-in origin-top">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Residential Column */}
                    <div>
                      <Link 
                        href="/services/residential"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-2 mb-3 pb-2 border-b border-border hover:text-[#1e9cac] transition-colors"
                      >
                        <Home size={16} className="text-primary" />
                        <span className="text-sm font-semibold text-foreground hover:text-[#1e9cac]">Residential</span>
                      </Link>
                      <div className="space-y-1">
                        {residentialServices.map((service) => (
                          <Link
                            key={service.href + service.label}
                            href={service.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-[#1e9cac]/10 transition-all duration-200 hover:translate-x-1 group"
                          >
                            <service.icon size={16} className="text-[#1e9cac] transition-transform duration-200 group-hover:scale-110" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Commercial Column */}
                    <div>
                      <Link 
                        href="/services/commercial"
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-2 mb-3 pb-2 border-b border-border hover:text-[#1e9cac] transition-colors"
                      >
                        <Building2 size={16} className="text-primary" />
                        <span className="text-sm font-semibold text-foreground hover:text-[#1e9cac]">Commercial</span>
                      </Link>
                      <div className="space-y-1">
                        {commercialServices.map((service) => (
                          <Link
                            key={service.href + service.label + "commercial"}
                            href={service.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-[#1e9cac]/10 transition-all duration-200 hover:translate-x-1 group"
                          >
                            <service.icon size={16} className="text-[#1e9cac] transition-transform duration-200 group-hover:scale-110" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View All Services Link */}
                  <div className="mt-4 pt-3 border-t border-border">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center justify-center gap-2 text-sm font-medium text-[#1e9cac] hover:text-[#1e9cac]/80 transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#1e9cac]",
                pathname === "/contact" ? "text-[#1e9cac]" : "text-muted-foreground"
              )}
            >
              Contact
            </Link>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden relative z-50 -mr-2 p-3 text-foreground touch-manipulation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#1e9cac] py-2",
                  pathname === "/" ? "text-[#1e9cac]" : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={cn(
                    "flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-[#1e9cac] py-2",
                    pathname === "/services" ? "text-[#1e9cac]" : "text-muted-foreground"
                  )}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={cn("transition-transform", isMobileServicesOpen && "rotate-180")}
                  />
                </button>

                {isMobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-4">
                    {/* Residential */}
                    <div>
                      <Link
                        href="/services/residential"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileServicesOpen(false)
                        }}
                        className="flex items-center gap-2 mb-2 hover:text-[#1e9cac] transition-colors"
                      >
                        <Home size={14} className="text-primary" />
                        <span className="text-xs font-semibold text-foreground uppercase tracking-wide hover:text-[#1e9cac]">Residential</span>
                      </Link>
                      <div className="space-y-1 pl-2">
                        {residentialServices.map((service) => (
                          <Link
                            key={service.href + service.label + "mobile"}
                            href={service.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsMobileServicesOpen(false)
                            }}
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-[#1e9cac] transition-colors"
                          >
                            <service.icon size={14} className="text-[#1e9cac]" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Commercial */}
                    <div>
                      <Link
                        href="/services/commercial"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileServicesOpen(false)
                        }}
                        className="flex items-center gap-2 mb-2 hover:text-[#1e9cac] transition-colors"
                      >
                        <Building2 size={14} className="text-primary" />
                        <span className="text-xs font-semibold text-foreground uppercase tracking-wide hover:text-[#1e9cac]">Commercial</span>
                      </Link>
                      <div className="space-y-1 pl-2">
                        {commercialServices.map((service) => (
                          <Link
                            key={service.href + service.label + "mobile-commercial"}
                            href={service.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsMobileServicesOpen(false)
                            }}
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-[#1e9cac] transition-colors"
                          >
                            <service.icon size={14} className="text-[#1e9cac]" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/services"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsMobileServicesOpen(false)
                      }}
                      className="block text-sm font-medium text-[#1e9cac] py-2"
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#1e9cac] py-2",
                  pathname === "/contact" ? "text-[#1e9cac]" : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
