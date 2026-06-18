import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Building2, Calendar, CheckCircle } from "lucide-react"

const trustBadges = [
  { icon: Shield, label: "Locally Operated" },
  { icon: Building2, label: "Commercial & Residential" },
  { icon: Calendar, label: "Reliable Scheduling" },
  { icon: CheckCircle, label: "Fully Insured Services" },
]

export function HeroSection() {
  return (
    <section className="relative lg:min-h-[85vh] flex items-start lg:items-center pt-36 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
      {/* Background - white near the header fading down into the peach header tone */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 18%, #FDF7F0 55%)",
        }}
      />

      {/* Work photos anchored to the page edges - larger, clearer, semi-transparent */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none" aria-hidden="true">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 xl:w-80 aspect-[3/4] rounded-r-3xl overflow-hidden shadow-2xl border border-white/70 opacity-75">
          <Image
            src="/hero-window-cleaning.jpg"
            alt="Pluto team member cleaning a window"
            fill
            sizes="(max-width: 1280px) 288px, 320px"
            className="object-cover object-center"
            quality={95}
            priority
          />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 xl:w-80 aspect-[3/4] rounded-l-3xl overflow-hidden shadow-2xl border border-white/70 opacity-75">
          <Image
            src="/hero-kitchen.jpg"
            alt="Freshly cleaned modern kitchen"
            fill
            sizes="(max-width: 1280px) 288px, 320px"
            className="object-cover object-center"
            quality={95}
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg ring-1 ring-black/5 px-6 py-8 sm:px-8">
          {/* Full Logo */}
          <div className="mb-4 animate-logo-entrance">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/updated%20transparent%20logo-7dSpymP3YDlDhj56QVCwyL714uOgnj.png"
              alt="Pluto Property Management Logo"
              width={320}
              height={180}
              className="mx-auto h-auto w-64 md:w-80"
              priority
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1e9cac]/10 border border-[#1e9cac]/20 rounded-full px-4 py-2 mb-6 animate-slide-up-fade delay-300">
            <span className="w-2 h-2 rounded-full bg-[#1e9cac] animate-pulse" />
            <span className="text-sm text-[#1e9cac] font-medium">Serving the GTA & Surrounding Areas</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance animate-sweep-in delay-400">
            Maintenance Solutions for Every Season
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty animate-slide-up-fade delay-500">
            Pluto Property Management Inc. helps homeowners, businesses, and property managers keep their properties clean, safe, and well-maintained year-round.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold w-full sm:w-auto animate-pop-in delay-600 hover:scale-105 transition-transform duration-200"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-secondary text-foreground px-8 py-6 text-lg font-semibold w-full sm:w-auto animate-pop-in delay-700 hover:scale-105 transition-transform duration-200"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border hover:scale-105 hover:shadow-lg hover:border-[#1e9cac]/30 transition-all duration-300 cursor-default group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1e9cac]/10 flex items-center justify-center group-hover:bg-[#1e9cac]/20 group-hover:scale-110 transition-all duration-300">
                  <badge.icon className="w-6 h-6 text-[#1e9cac]" strokeWidth={2} aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/30 to-transparent" />
    </section>
  )
}
