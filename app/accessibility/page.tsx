import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Accessibility Statement | Pluto Property Management",
  description: "Pluto Property Management Inc. is committed to ensuring our website is accessible to all visitors.",
}

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Accessibility Statement
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Pluto Property Management Inc. is committed to ensuring our website is accessible to all visitors, including individuals with disabilities.
                </p>
                <p>
                  We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.2, Level AA, to provide a user-friendly experience for everyone.
                </p>
                <p>
                  If you experience any accessibility barriers while using our site, please contact us at{" "}
                  <a href="mailto:info@plutopropertymgmt.ca" className="text-[#1e9cac] hover:underline">
                    info@plutopropertymgmt.ca
                  </a>{" "}
                  and we will work to address the issue promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
