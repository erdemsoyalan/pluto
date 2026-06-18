import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-[#1e9cac]/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pluto mascot */}
          <div className="mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Notebook%20Pluto%20transparent-MrzgO06wFmN2JZuPocsYyLpRsZq76s.png"
              alt="Pluto with notebook"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-snug lg:leading-tight">
            Need your property maintained without the headache?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto text-pretty">
            Let us handle the maintenance so you can focus on what matters. 
            Get a free, no-obligation quote today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
          >
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
