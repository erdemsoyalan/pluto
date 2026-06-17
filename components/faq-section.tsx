"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you offer recurring service?",
    answer: "Yes, we offer weekly, biweekly, monthly, and seasonal service plans depending on the service. We work with you to find a schedule that fits your property's needs and budget.",
  },
  {
    question: "Do you serve commercial properties?",
    answer: "Yes, we work with offices, clinics, property managers, common areas, and other commercial spaces. Our team is experienced in handling both residential and commercial property maintenance.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve Milton, Mississauga, Oakville, Burlington, and surrounding GTA areas. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Can I request multiple services?",
    answer: "Yes, we can bundle services based on your property's needs. Many of our clients combine services like janitorial cleaning with window washing or lawn care with snow removal for comprehensive year-round coverage.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Have questions? We have answers.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
