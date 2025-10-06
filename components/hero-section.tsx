"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Phone } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Dental Practice Management</span>
            </div>
          </div>

          <h1 className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            Never Miss A <span className="text-primary">Patient Call</span> Again
          </h1>

          <p className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-400 text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
            MAALGAH's AI calling agent handles appointments, inquiries, and follow-ups 24/7, so your dental clinic never
            loses a patient.
          </p>

          <div className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full text-lg px-8 py-6 h-auto group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 h-auto bg-transparent">
              Watch Demo
            </Button>
          </div>

          {/* Animated illustration placeholder */}
          <div className="fade-in-element opacity-0 transition-all duration-1000 translate-y-8 animation-delay-800 mt-20">
            <div className="relative mx-auto max-w-4xl">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-border p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-float">
                    <Phone className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">AI Agent Visualization</p>
                </div>
              </div>
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-secondary/30 blur-xl animate-pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-primary/30 blur-xl animate-pulse-glow animation-delay-1000" />
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
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
