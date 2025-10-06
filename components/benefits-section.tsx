"use client"

import { useEffect, useRef } from "react"
import { CheckCircle2, Phone } from "lucide-react"

const benefits = [
  {
    title: "Reduce Missed Calls",
    description: "Capture every patient inquiry, even during peak hours.",
  },
  {
    title: "Lower Staff Workload",
    description: "Free your team to focus on in-office patient care.",
  },
  {
    title: "Increase Bookings",
    description: "Convert more calls into scheduled appointments.",
  },
  {
    title: "Improve Patient Satisfaction",
    description: "Instant responses create better patient experiences.",
  },
  {
    title: "Scale Effortlessly",
    description: "Handle unlimited calls without hiring more staff.",
  },
  {
    title: "Reduce No-Shows",
    description: "Automated reminders keep your schedule full.",
  },
]

export function BenefitsSection() {
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
    <section id="benefits" ref={sectionRef} className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              Transform Your Dental Practice
            </h2>
            <p className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-200 text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              MAALGAH helps dental clinics operate more efficiently while providing exceptional patient experiences.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 flex gap-4"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-400">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-float">
                    <Phone className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold">10,000+</p>
                    <p className="text-muted-foreground">Calls Handled Daily</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-secondary/30 blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/30 blur-2xl animate-pulse-glow animation-delay-1000" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
