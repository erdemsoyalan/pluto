import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Droplets, 
  Leaf, 
  Snowflake, 
  Wrench, 
  ArrowRight,
  Bath,
  Footprints,
  Calendar,
  Droplet,
  Pipette,
  Scissors,
  TreeDeciduous,
  Home,
  RouteIcon,
  DoorOpen,
  CloudSnow,
  Paintbrush,
  Package,
  Sparkle,
  CheckCircle,
  Trash2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Services | Pluto Property Management Inc.",
  description: "Professional home maintenance services including cleaning, window washing, lawn care, snow removal, and property touch-ups for homeowners across the GTA.",
}

const services = [
  {
    id: "cleaning",
    icon: Sparkles,
    title: "Home Cleaning",
    description: "Keep your home spotless with our thorough cleaning services. Whether you need a one-time deep clean before guests arrive or regular maintenance to keep your space fresh, we treat your home with the care it deserves.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Janitor%20Pluto-uhGJ5JPYUx63d9EqIgatNirK2Mguja.png",
    mascotAlt: "Pluto with mop and bucket",
    features: [
      { icon: Home, label: "Whole Home Cleaning" },
      { icon: Bath, label: "Bathrooms & Kitchens" },
      { icon: Footprints, label: "Floors & Baseboards" },
      { icon: Sparkle, label: "Deep Cleaning" },
      { icon: Calendar, label: "One-Time or Weekly" },
      { icon: DoorOpen, label: "Move-In/Out Cleaning" },
    ],
  },
  {
    id: "windows",
    icon: Droplets,
    title: "Window Cleaning",
    description: "Let the sunshine in with crystal-clear windows. We handle all the hard-to-reach spots so you can enjoy the view without the streaks or hassle of climbing ladders yourself.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20%281%29-EULhE7qP2hNrcjJCaTUREe6UEhEB7r.png",
    mascotAlt: "Pluto with squeegee",
    features: [
      { icon: Droplet, label: "Exterior Windows" },
      { icon: Sparkle, label: "Interior Windows" },
      { icon: Pipette, label: "3-Stage De-Ionizing System" },
      { icon: Calendar, label: "Seasonal or One-Time" },
    ],
  },
  {
    id: "lawn",
    icon: Leaf,
    title: "Lawn & Garden Care",
    description: "Your yard is your outdoor living space. We keep it looking great with regular mowing, trimming, and seasonal maintenance so you can spend your weekends relaxing instead of working.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file%20%281%29-L0ELj10rMz6wRDYy3WO5u77PVJXR3D.png",
    mascotAlt: "Pluto with garden shovel",
    features: [
      { icon: Scissors, label: "Lawn Mowing" },
      { icon: Leaf, label: "Weedwacking & Edging" },
      { icon: TreeDeciduous, label: "Garden Bed Care" },
      { icon: RouteIcon, label: "Walkway Installation" },
      { icon: Package, label: "Mulch & Soil" },
      { icon: Calendar, label: "One-Time or Scheduled" },
    ],
  },
  {
    id: "snow",
    icon: Snowflake,
    title: "Snow Removal",
    description: "Wake up to a clear driveway and safe walkways after every snowfall. We monitor weather conditions and show up when you need us so you can get to work on time.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file-aWLuU3rMnaMHLnIGrgD6pjNyqPzdB6.png",
    mascotAlt: "Pluto with snow shovel",
    features: [
      { icon: Home, label: "Driveway Clearing" },
      { icon: RouteIcon, label: "Walkway Shoveling" },
      { icon: DoorOpen, label: "Front Steps & Porch" },
      { icon: CloudSnow, label: "After Every Snowfall 5cm+" },
      { icon: Calendar, label: "Seasonal Contracts" },
    ],
  },
  {
    id: "touchups",
    icon: Wrench,
    title: "Home Touch-Ups",
    description: "Small repairs add up. From scuffed baseboards to minor fixes around the house, we handle the little things so your home stays in great shape without the hassle of hiring multiple contractors.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construction%20pluto-prKCFyDTkcBrZOQAqwHKU0uJZWIvq1.png",
    mascotAlt: "Pluto in construction gear",
    features: [
      { icon: Paintbrush, label: "Baseboard Painting" },
      { icon: Sparkle, label: "Tile Chip & Crack Repairs" },
      { icon: Trash2, label: "Junk Removal" },
      { icon: Package, label: "General Cleanup" },
      { icon: DoorOpen, label: "Rental Turnovers" },
    ],
  },
]

export default function ResidentialServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#1e9cac] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Residential Services
            </span>
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Home Care Made Simple
              </h1>
              <Image
                src="/pluto-waving.png"
                alt="Pluto waving"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain flex-shrink-0 animate-wave"
              />
            </div>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
              From weekly lawn care to seasonal snow removal, we handle the maintenance so you can enjoy your home. Reliable service from a local team that treats your property like their own.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-[#1e9cac]/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#1e9cac]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
                    {service.description}
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/contact">
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Features Card */}
                <div className={`bg-background rounded-3xl p-8 lg:p-10 border border-border ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  {/* Mascot Image */}
                  <div className="flex justify-center mb-6">
                    <Image
                      src={service.mascotImage}
                      alt={service.mascotAlt}
                      width={120}
                      height={120}
                      className="w-28 h-28 object-contain animate-float hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                    What&apos;s Included:
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={feature.label}
                        className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border transition-all duration-300 hover:scale-105 hover:bg-[#1e9cac]/10 hover:border-[#1e9cac]/50 hover:shadow-md cursor-default group"
                        style={{ animationDelay: `${featureIndex * 0.05}s` }}
                      >
                        <feature.icon className="w-5 h-5 text-[#1e9cac] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-foreground text-sm font-medium">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#1e9cac]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#1e9cac]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Ready to Reclaim Your Weekends?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              Tell us about your home and we&apos;ll put together a service plan that fits your needs and budget. No pressure, just honest advice.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
