"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Dental Practice Owner",
    clinic: "Bright Smiles Dental",
    content:
      "MAALGAH has been a game-changer for our practice. We've reduced missed calls by 95% and our appointment bookings have increased significantly.",
    rating: 5,
  },
  {
    name: "Dr. James Chen",
    role: "Orthodontist",
    clinic: "Perfect Align Orthodontics",
    content:
      "The AI agent handles patient inquiries so naturally that many patients don't even realize they're talking to AI. It's incredible technology.",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Dental Surgeon",
    clinic: "Coastal Dental Care",
    content:
      "Our staff can now focus on providing excellent in-office care while MAALGAH handles all our phone communications. Best investment we've made.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Trusted by Dental Professionals
          </h2>
          <p className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-200 text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
            See what dental practices are saying about MAALGAH.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.clinic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
