import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

const highlights = [
  "Meticulous attention to every detail",
  "Premium results, residential & commercial",
  "Spaces left spotless and move-in ready",
]

export function WorkShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#1e9cac]" />
              <span className="text-sm font-semibold tracking-widest uppercase text-[#1e9cac]">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              A Standard of Care You Can See
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              From sparkling kitchens to spotless bathrooms, we treat every property like our own.
              Our team delivers a polished, professional finish that elevates your space and protects
              your investment.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1e9cac]/10 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#1e9cac]" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Book Your Service
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Image Column */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
              <Image
                src="/showcase-kitchen.jpg"
                alt="Newly renovated modern kitchen with marble countertops and stainless steel appliances"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl ring-1 ring-border mt-8 lg:mt-12">
              <Image
                src="/showcase-bathroom.jpg"
                alt="Luxury modern bathroom with glass shower, marble vanity, and elegant fixtures"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
