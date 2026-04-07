"use client"

import { useEffect, useRef, useState } from "react"
import { Scan, Brain, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AIAnalysis() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    "تحليل شكل الوجه بدقة عالية",
    "اقتراحات مخصصة للإطارات",
    "مقارنة بين عدة خيارات",
    "توصيات الألوان المناسبة",
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 mesh-gradient overflow-hidden"
    >
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-primary text-sm font-medium">التحليل الذكي</span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground">تقنية الذكاء</span>{" "}
              <span className="text-primary">الاصطناعي</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              نستخدم خوارزميات متقدمة لتحليل ملامح وجهك بدقة عالية، وتقديم اقتراحات
              مخصصة تناسب شكل وجهك ولون بشرتك وأسلوبك الشخصي.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              <Scan className="w-5 h-5 ml-2" />
              ابدأ التحليل الآن
            </Button>
          </div>

          {/* AI Scanner Visual */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative max-w-md mx-auto">
              {/* Scanner frame */}
              <div className="relative aspect-[3/4] glass rounded-3xl overflow-hidden">
                {/* Face placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-muted/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Face silhouette */}
                    <div className="w-48 h-64 rounded-full bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-muted/50 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-muted-foreground/50" />
                        </div>
                        <p className="text-muted-foreground/50 text-xs">منطقة المسح</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scanning line animation */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />

                {/* Corner markers */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-lg" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary rounded-bl-lg" />

                {/* Analysis points */}
                <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div
                  className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
                <div
                  className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                />

                {/* Status indicator */}
                <div className="absolute bottom-6 inset-x-6 glass-strong rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-foreground text-sm">جاري التحليل...</span>
                    </div>
                    <span className="text-primary font-bold">78%</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: isVisible ? "78%" : "0%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-bounce">
                <Brain className="w-6 h-6 text-primary" />
              </div>

              <div
                className="absolute -bottom-4 -left-4 glass rounded-xl p-3 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Scan className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
