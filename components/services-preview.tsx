import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Droplets, Leaf, Snowflake, Wrench, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Janitorial Cleaning",
    description: "Professional cleaning for homes, offices, clinics, and commercial spaces.",
    href: "/services#janitorial",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Janitor%20Pluto-uhGJ5JPYUx63d9EqIgatNirK2Mguja.png",
  },
  {
    icon: Droplets,
    title: "Window Cleaning",
    description: "Interior and exterior window cleaning using water-fed pole systems.",
    href: "/services#windows",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20%281%29-EULhE7qP2hNrcjJCaTUREe6UEhEB7r.png",
  },
  {
    icon: Leaf,
    title: "Lawn & Garden Maintenance",
    description: "Complete lawn care including cutting, weedwacking, edging, pruning, and walkway installation.",
    href: "/services#lawn",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file%20%281%29-L0ELj10rMz6wRDYy3WO5u77PVJXR3D.png",
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description: "Snow clearing for driveways, walkways, and entrances.",
    href: "/services#snow",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file-aWLuU3rMnaMHLnIGrgD6pjNyqPzdB6.png",
  },
  {
    icon: Wrench,
    title: "Property Touch-Ups",
    description: "Minor repairs, painting, tile touch-ups, and move-in/out preparation.",
    href: "/services#touchups",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construction%20pluto-prKCFyDTkcBrZOQAqwHKU0uJZWIvq1.png",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* White panel framed by the peach section background */}
        <div className="bg-white rounded-3xl border border-border shadow-sm px-6 py-12 lg:px-12 lg:py-16">
        {/* Divider between hero and services */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="h-px w-16 sm:w-24 bg-border" />
          <span className="h-2 w-2 rounded-full bg-[#1e9cac]" />
          <span className="h-px w-16 sm:w-24 bg-border" />
        </div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#1e9cac] font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Property Care
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            From regular maintenance to seasonal services, we offer everything you need to keep your property in top condition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-6 lg:p-8 rounded-2xl bg-white border border-border hover:border-[#1e9cac] transition-all duration-300 hover:shadow-xl hover:shadow-[#1e9cac]/15 hover:-translate-y-2 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#1e9cac]/10 flex items-center justify-center group-hover:bg-[#1e9cac]/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-[#1e9cac] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <Image
                  src={service.mascotImage}
                  alt={`Pluto - ${service.title}`}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[#1e9cac] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-[#1e9cac] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        </div>
      </div>
    </section>
  )
}
