"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

const services = [
  "Commercial Janitorial Cleaning",
  "Window Cleaning",
  "Lawn & Garden Maintenance",
  "Snow Removal",
  "Property Touch-Ups",
  "Multiple Services",
  "Not Sure - Need Consultation",
]

const cities = [
  "Milton",
  "Mississauga",
  "Oakville",
  "Burlington",
  "Other GTA Area",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
        <p className="text-muted-foreground leading-relaxed">
          We&apos;ve received your request and will get back to you as soon as possible. 
          We typically respond within 1-2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 lg:p-12 border border-border">
      <div className="grid gap-6">
        {/* Name and Email Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name <span className="text-primary">*</span>
            </label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="bg-background border-border focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email <span className="text-primary">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="bg-background border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Phone and City Row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="bg-background border-border focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="city" className="text-sm font-medium text-foreground">
              City <span className="text-primary">*</span>
            </label>
            <Select name="city" required>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select your city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase().replace(/\s+/g, '-')}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Service Needed */}
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Service Needed <span className="text-primary">*</span>
          </label>
          <Select name="service" required>
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message <span className="text-primary">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your property, the service you need, and your preferred schedule..."
            className="bg-background border-border focus:border-primary resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  )
}
