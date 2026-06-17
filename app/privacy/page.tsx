import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Pluto Property Management",
  description: "Learn how Pluto Property Management Inc. collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
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
                  Pluto Property Management Inc. respects your privacy and is committed to protecting your personal information.
                </p>
                <p>
                  We may collect details you provide through our website forms (such as name, email, phone number, and service requests) as well as basic site analytics. This information is used solely to respond to inquiries, provide services, and improve our offerings.
                </p>
                <p>
                  We do not sell or rent your personal data to third parties. Any information shared with trusted service providers (such as website hosting or analytics platforms) is limited to what is necessary to operate our business.
                </p>
                <p>
                  Your information is safeguarded in accordance with PIPEDA and applicable Canadian privacy laws.
                </p>
                <p>
                  If you have questions about this policy or how your data is handled, please contact us at{" "}
                  <a href="mailto:info@plutopropertymgmt.ca" className="text-[#1e9cac] hover:underline">
                    info@plutopropertymgmt.ca
                  </a>.
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
