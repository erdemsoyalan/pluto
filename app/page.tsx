import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { CTABanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
