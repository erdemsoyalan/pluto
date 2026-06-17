import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Pluto Property Management was professional, responsive, and easy to work with. The property looked noticeably better after their service.",
    author: "Sarah M.",
    role: "Property Manager",
    location: "Milton",
  },
  {
    quote: "Reliable scheduling and great attention to detail. Exactly what we needed for ongoing property maintenance.",
    author: "Michael R.",
    role: "Business Owner",
    location: "Mississauga",
  },
  {
    quote: "Finally found someone I can trust with my home! They showed up on time, did a thorough job, and even cleaned up after themselves. My windows have never looked better. Will definitely be using them again for spring cleanup.",
    author: "Jennifer L.",
    role: "Homeowner",
    location: "Oakville",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We take pride in delivering quality service that our clients appreciate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground leading-relaxed mb-6 pt-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center rounded-full text-white font-semibold text-base"
                  style={{ width: "48px", height: "48px", minWidth: "48px", backgroundColor: "#1e9cac" }}
                >
                  {testimonial.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.role} &middot; {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
