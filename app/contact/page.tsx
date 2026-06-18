import { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Clock, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Pluto Property Management Inc.",
  description: "Request a free quote for property maintenance services. Serving Milton, Mississauga, Oakville, Burlington & the GTA.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "905-299-6738",
    href: "tel:905-299-6738",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@plutopropertymgmt.ca",
    href: "mailto:info@plutopropertymgmt.ca",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Milton, Mississauga, Oakville, Burlington & GTA",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 2-4 hours",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
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
            <span className="text-[#1e9cac] font-semibold text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Request a Free Quote
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
              Tell us what service you need, your property type, and your preferred schedule. 
              We&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20 lg:pb-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - Takes more space */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border h-full">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1e9cac]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#1e9cac]" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                        {item.href ? (
                          <a 
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Note */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="bg-secondary/50 rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-2">
                      What happens next?
                    </h3>
                    <ol className="text-muted-foreground text-sm space-y-2 list-decimal list-inside">
                      <li>We review your request</li>
                      <li>We may reach out to clarify details</li>
                      <li>You receive a customized quote</li>
                      <li>Schedule your service at your convenience</li>
                    </ol>
                  </div>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-[#1e9cac]/10 text-[#1e9cac] text-sm font-medium px-4 py-2 rounded-full">
                    Free Quotes
                  </span>
                  <span className="inline-flex items-center gap-2 bg-[#1e9cac]/10 text-[#1e9cac] text-sm font-medium px-4 py-2 rounded-full">
                    No Obligation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
