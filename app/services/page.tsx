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
  Building2,
  Stethoscope,
  Users,
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
  title: "Our Services | Pluto Property Management Inc.",
  description: "Professional property maintenance services including janitorial cleaning, window cleaning, lawn care, snow removal, and property touch-ups across the GTA.",
}

const services = [
  {
    id: "janitorial",
    icon: Sparkles,
    title: "Janitorial Cleaning",
    description: "Keep your spaces spotless with our professional janitorial services. We maintain high standards of cleanliness for both residential and commercial properties across the GTA.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Janitor%20Pluto-uhGJ5JPYUx63d9EqIgatNirK2Mguja.png",
    mascotAlt: "Pluto with mop and bucket",
    features: [
      { icon: Home, label: "Full Home Cleaning" },
      { icon: Building2, label: "Offices" },
      { icon: Stethoscope, label: "Clinics" },
      { icon: Users, label: "Common Areas" },
      { icon: Bath, label: "Bathrooms & Kitchens" },
      { icon: Footprints, label: "Floors & Surfaces" },
      { icon: Sparkle, label: "Deep Cleaning" },
      { icon: Calendar, label: "One-Time or Recurring" },
    ],
  },
  {
    id: "windows",
    icon: Droplets,
    title: "Window Cleaning",
    description: "Crystal-clear windows that let the light shine in. Our professional window cleaning services use modern techniques for streak-free results.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20%281%29-EULhE7qP2hNrcjJCaTUREe6UEhEB7r.png",
    mascotAlt: "Pluto with squeegee",
    features: [
      { icon: Droplet, label: "Exterior Window Cleaning" },
      { icon: Sparkle, label: "Interior Window Cleaning" },
      { icon: Pipette, label: "Water-Fed Pole System" },
      { icon: Droplets, label: "3-Stage De-Ionizing System" },
      { icon: Calendar, label: "Seasonal & One-Time Cleans" },
    ],
  },
  {
    id: "lawn",
    icon: Leaf,
    title: "Lawn & Garden Maintenance",
    description: "Keep your outdoor spaces looking their best with comprehensive lawn and garden care. We handle everything from regular mowing to seasonal cleanup.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file%20%281%29-L0ELj10rMz6wRDYy3WO5u77PVJXR3D.png",
    mascotAlt: "Pluto with garden shovel",
    features: [
      { icon: Scissors, label: "Grass Cutting" },
      { icon: Leaf, label: "Weed-Wacking" },
      { icon: TreeDeciduous, label: "Garden Bed Cleanup" },
      { icon: TreeDeciduous, label: "Edging & Pruning" },
      { icon: RouteIcon, label: "Walkway Installation" },
      { icon: Package, label: "Mulch Installation" },
    ],
  },
  {
    id: "snow",
    icon: Snowflake,
    title: "Snow Removal",
    description: "Stay safe and accessible during winter months. Our reliable snow removal services keep your property clear after every snowfall.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file-aWLuU3rMnaMHLnIGrgD6pjNyqPzdB6.png",
    mascotAlt: "Pluto with snow shovel",
    features: [
      { icon: Home, label: "Driveways" },
      { icon: RouteIcon, label: "Walkways" },
      { icon: DoorOpen, label: "Front Entrances" },
      { icon: Package, label: "Salting & De-Icing" },
      { icon: CloudSnow, label: "After Every Snowfall 5cm+" },
      { icon: Calendar, label: "Seasonal Contracts" },
    ],
  },
  {
    id: "touchups",
    icon: Wrench,
    title: "Property Maintenance Touch-Ups",
    description: "Minor repairs and touch-ups to keep your property looking its best. Ideal for preparing properties for new tenants or addressing small maintenance needs.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construction%20pluto-prKCFyDTkcBrZOQAqwHKU0uJZWIvq1.png",
    mascotAlt: "Pluto in construction gear",
    features: [
      { icon: Paintbrush, label: "Baseboard Painting" },
      { icon: Sparkle, label: "Tile Chip & Crack Repairs" },
      { icon: Trash2, label: "Junk Removal" },
      { icon: Package, label: "General Property Cleanup" },
      { icon: DoorOpen, label: "Move-In / Move-Out Preparation" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#1e9cac] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Property Care Solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
              From regular maintenance to seasonal services, we provide everything you need to keep your property in excellent condition.
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
                      Get a Quote
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

      {/* Not Sure Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#1e9cac]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#1e9cac]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              Every property is different. Tell us about your space and we&apos;ll help you figure out the best service plan for your needs.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Link href="/contact">
                Tell Us About Your Property
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
