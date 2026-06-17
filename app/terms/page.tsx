import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Pluto Property Management",
  description: "Terms and conditions for using the Pluto Property Management Inc. website.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Terms of Service
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
                  By accessing and using the Pluto Property Management Inc. website, you agree to the following terms.
                </p>
                <p>
                  All content provided is for informational purposes and may change without notice. Users may not misuse this website, attempt unauthorized access, or reproduce content without permission.
                </p>
                <p>
                  Pluto Property Management is not liable for damages resulting from the use of this website or any linked resources.
                </p>
                <p>
                  These terms are governed by the laws of Ontario, Canada.
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
