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
  RouteIcon,
  DoorOpen,
  CloudSnow,
  Paintbrush,
  Package,
  Sparkle,
  CheckCircle,
  Clock,
  Trash2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Services | Pluto Property Management Inc.",
  description: "Professional commercial property maintenance including janitorial services, window cleaning, grounds maintenance, snow removal, and facility upkeep across the GTA.",
}

const services = [
  {
    id: "janitorial",
    icon: Sparkles,
    title: "Commercial Janitorial",
    description: "First impressions matter. We keep your office, clinic, or facility clean and professional with reliable janitorial services tailored to your business hours and specific requirements.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Transparent%20Janitor%20Pluto-uhGJ5JPYUx63d9EqIgatNirK2Mguja.png",
    mascotAlt: "Pluto with mop and bucket",
    features: [
      { icon: Building2, label: "Office Cleaning" },
      { icon: Stethoscope, label: "Medical Facilities" },
      { icon: Users, label: "Common Areas" },
      { icon: Bath, label: "Restroom Sanitation" },
      { icon: Footprints, label: "Floor Care" },
      { icon: Clock, label: "After-Hours Service" },
      { icon: Sparkle, label: "Deep Cleaning" },
      { icon: Calendar, label: "One-Time or Scheduled Visits" },
      { icon: CheckCircle, label: "Month to Month Contracts" },
    ],
  },
  {
    id: "windows",
    icon: Droplets,
    title: "Commercial Window Cleaning",
    description: "Clean windows reflect well on your business. Our professional team handles buildings of all sizes with the right equipment to get the job done safely and efficiently.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20%281%29-EULhE7qP2hNrcjJCaTUREe6UEhEB7r.png",
    mascotAlt: "Pluto with squeegee",
    features: [
      { icon: Droplet, label: "Exterior Glass" },
      { icon: Sparkle, label: "Interior Windows" },
      { icon: Pipette, label: "3-Stage De-Ionizing System" },
      { icon: Building2, label: "Storefronts" },
      { icon: Calendar, label: "Monthly or Seasonal Contracts" },
      { icon: CheckCircle, label: "Month to Month Contracts" },
    ],
  },
  {
    id: "grounds",
    icon: Leaf,
    title: "Grounds Maintenance",
    description: "Your property's exterior is the first thing clients and tenants see. We maintain lawns, gardens, and landscaping to keep your commercial property looking professional year-round.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file%20%281%29-L0ELj10rMz6wRDYy3WO5u77PVJXR3D.png",
    mascotAlt: "Pluto with garden shovel",
    features: [
      { icon: Scissors, label: "Lawn Maintenance" },
      { icon: Leaf, label: "Trimming & Edging" },
      { icon: TreeDeciduous, label: "Garden Beds" },
      { icon: RouteIcon, label: "Walkway Upkeep" },
      { icon: Trash2, label: "Litter Removal" },
      { icon: Package, label: "Seasonal Planting" },
      { icon: Calendar, label: "One-Time or Scheduled Visits" },
      { icon: CheckCircle, label: "Month to Month Contracts" },
    ],
  },
  {
    id: "snow",
    icon: Snowflake,
    title: "Commercial Snow Removal",
    description: "Keep your business accessible and reduce liability with prompt snow clearing. We prioritize commercial clients to ensure your parking lots and walkways are safe for employees and customers.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe%20Express%20-%20file-aWLuU3rMnaMHLnIGrgD6pjNyqPzdB6.png",
    mascotAlt: "Pluto with snow shovel",
    features: [
      { icon: Building2, label: "Parking Lots" },
      { icon: RouteIcon, label: "Sidewalks" },
      { icon: DoorOpen, label: "Building Entrances" },
      { icon: CloudSnow, label: "After Every Snowfall 5cm+" },
      { icon: Package, label: "Salt & Sand Application" },
      { icon: Calendar, label: "Seasonal Contracts" },
    ],
  },
  {
    id: "facility",
    icon: Wrench,
    title: "Facility Maintenance",
    description: "Small issues become big problems if ignored. Our facility maintenance services address minor repairs and touch-ups to keep your property in top condition and protect your investment.",
    mascotImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construction%20pluto-prKCFyDTkcBrZOQAqwHKU0uJZWIvq1.png",
    mascotAlt: "Pluto in construction gear",
    features: [
      { icon: Paintbrush, label: "Baseboard Painting" },
      { icon: Sparkle, label: "Tile Chip & Crack Repairs" },
      { icon: Wrench, label: "Small Drywall Repairs" },
      { icon: Trash2, label: "Junk Removal" },
      { icon: DoorOpen, label: "Tenant Turnovers" },
    ],
  },
]

export default function CommercialServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#1e9cac] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Commercial Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Property Management You Can Count On
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
              From daily janitorial to seasonal grounds maintenance, we help property managers and business owners maintain professional, well-kept properties. Reliable service, competitive pricing, and one point of contact for all your needs.
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
                      Request a Quote
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
              Let&apos;s Discuss Your Property Needs
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              Every property is different. Tell us about your facility and we&apos;ll put together a customized service plan with competitive pricing. No obligation.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Link href="/contact">
                Get a Custom Quote
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
