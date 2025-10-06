"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 2, suffix: "s", label: "Average Response Time" },
  { value: 500, suffix: "+", label: "Dental Clinics Trust Us" },
  { value: 95, suffix: "%", label: "Patient Satisfaction" },
]

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  animation: isVisible ? `fadeInUp 1s ease-out ${index * 100}ms forwards` : "none",
                  opacity: 0,
                }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                  {isVisible && <CountUp end={stat.value} duration={2} suffix={stat.suffix} />}
                </div>
                <p className="text-primary-foreground/80 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

function CountUp({
  end,
  duration,
  suffix,
}: {
  end: number
  duration: number
  suffix: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
