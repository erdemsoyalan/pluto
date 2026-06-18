import Image from "next/image"
import { MessageSquare, UserCheck, Target, Settings, Building, Home } from "lucide-react"

const reasons = [
  {
    icon: MessageSquare,
    title: "Reliable Communication",
    description: "Clear, prompt responses and updates on all your service requests.",
  },
  {
    icon: UserCheck,
    title: "Professional Appearance",
    description: "Our team arrives prepared, uniformed, and ready to work.",
  },
  {
    icon: Target,
    title: "Detail-Focused Work",
    description: "We pay attention to the small things that make a big difference.",
  },
  {
    icon: Settings,
    title: "Flexible Service Plans",
    description: "Weekly, biweekly, monthly, or seasonal schedules to fit your needs.",
  },
]

const clientTypes = [
  { icon: Building, label: "Property Managers" },
  { icon: Building, label: "Offices & Clinics" },
  { icon: Building, label: "Condos & Common Areas" },
  { icon: Home, label: "Homeowners" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#1e9cac] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Service You Can Count On
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed text-pretty">
              We understand that your property is an investment. That&apos;s why we deliver consistent, 
              high-quality service that protects and enhances your space.
            </p>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div 
                  key={reason.title} 
                  className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#1e9cac]/5 hover:scale-[1.02] cursor-default group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1e9cac]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#1e9cac]/20 group-hover:scale-110">
                    <reason.icon className="w-6 h-6 text-[#1e9cac] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-[#1e9cac]">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Client Types */}
          <div className="rounded-3xl p-8 lg:p-12 border border-border" style={{ backgroundColor: "#FEFBF6" }}>
            {/* Pluto pointing */}
            <div className="flex justify-center mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pointing%20Pluto%20Transparent-ArzKefhiwL8nOuoFGo6Hrsu9of0hGW.png"
                alt="Pluto pointing"
                width={100}
                height={100}
                className="w-24 h-24 object-contain animate-float"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Great For:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {clientTypes.map((client, index) => (
                <div
                  key={client.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#1e9cac]/50 hover:shadow-lg hover:shadow-[#1e9cac]/10 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <client.icon className="w-5 h-5 text-[#1e9cac] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-foreground font-medium text-sm">{client.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-[#1e9cac] mb-1">5+</div>
                  <div className="text-muted-foreground text-sm">Cities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1e9cac] mb-1">100%</div>
                  <div className="text-muted-foreground text-sm">Satisfaction Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
