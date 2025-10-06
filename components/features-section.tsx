"use client"

import { useEffect, useRef } from "react"
import { Phone, Calendar, MessageSquare, Clock, Brain, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "24/7 Call Handling",
    description: "AI agent answers every call instantly, even after hours and on weekends.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automatically books, reschedules, and confirms appointments with patients.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Human-like interactions that understand context and patient needs.",
  },
  {
    icon: Clock,
    title: "Instant Response",
    description: "Zero wait times for patients calling your dental practice.",
  },
  {
    icon: Brain,
    title: "Learning AI",
    description: "Continuously improves from every interaction to serve patients better.",
  },
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description: "Never miss appointments or opportunities to serve more patients.",
  },
]

export function FeaturesSection() {
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
    <section id="features" ref={sectionRef} className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
            Everything Your Dental Practice Needs
          </h2>
          <p className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-200 text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
            Powered by advanced AI to handle every patient interaction with care and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
