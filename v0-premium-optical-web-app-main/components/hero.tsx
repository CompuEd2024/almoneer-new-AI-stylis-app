"use client"

import { useEffect, useRef } from "react"
import { Sparkles, Shield, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".reveal-item")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const trustBadges = [
    { icon: Shield, label: "تحليل مجاني", desc: "بدون أي رسوم" },
    { icon: Zap, label: "نتائج فورية", desc: "في ثوانٍ معدودة" },
    { icon: Target, label: "دقة عالية", desc: "تقنية متطورة" },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen mesh-gradient overflow-hidden pt-24 lg:pt-32"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-8rem)]">
          {/* Right side - Content (RTL) */}
          <div className="order-2 lg:order-1 text-center lg:text-right">
            <div className="reveal-item opacity-0" style={{ animationDelay: "0.1s" }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                تقنية الذكاء الاصطناعي
              </span>
            </div>

            <h1
              className="reveal-item opacity-0 font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">رؤية جديدة</span>
              <br />
              <span className="text-primary">أناقة فريدة</span>
            </h1>

            <p
              className="reveal-item opacity-0 text-muted-foreground text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              اكتشف النظارات المثالية لوجهك باستخدام تقنية التحليل الذكي للوجه. نتائج
              دقيقة في ثوانٍ معدودة.
            </p>

            <div
              className="reveal-item opacity-0 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105 gold-glow">
                ابدأ التحليل المجاني
              </Button>
              <Button
                variant="outline"
                className="border-border/50 text-foreground hover:bg-secondary px-8 py-6 rounded-full text-lg font-medium transition-all duration-300"
              >
                تعرف على المزيد
              </Button>
            </div>

            {/* Trust Badges */}
            <div
              className="reveal-item opacity-0 flex flex-wrap gap-4 justify-center lg:justify-start"
              style={{ animationDelay: "0.5s" }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="text-foreground font-medium text-sm">{badge.label}</p>
                    <p className="text-muted-foreground text-xs">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left side - Image */}
          <div className="order-1 lg:order-2 relative">
            <div
              className="reveal-item opacity-0 relative"
              style={{ animationDelay: "0.3s" }}
            >
              {/* Main image container */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-primary/10" />
                <div className="absolute inset-8 rounded-full border border-primary/5" />

                {/* Image placeholder with glass effect */}
                <div className="absolute inset-12 glass rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Sparkles className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">صورة عالية الجودة</p>
                    </div>
                  </div>
                </div>

                {/* AI Badge */}
                <div className="absolute top-8 left-8 glass rounded-full px-4 py-2 flex items-center gap-2 animate-bounce">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-foreground font-medium">AI-Powered</span>
                </div>

                {/* Floating stats */}
                <div className="absolute bottom-8 right-8 glass rounded-2xl p-4">
                  <p className="text-primary text-2xl font-bold">98%</p>
                  <p className="text-muted-foreground text-xs">دقة التحليل</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs">اكتشف المزيد</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
