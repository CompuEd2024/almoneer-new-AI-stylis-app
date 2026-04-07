"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Cpu, Glasses, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StepsCTA() {
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

  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "التقط صورة",
      description: "التقط صورة واضحة لوجهك أو استخدم الكاميرا مباشرة للتحليل الفوري.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "تحليل ذكي",
      description:
        "يقوم الذكاء الاصطناعي بتحليل ملامح وجهك وتحديد الشكل الأمثل للإطار.",
    },
    {
      number: "03",
      icon: Glasses,
      title: "اختر إطارك",
      description: "استعرض التوصيات المخصصة واختر الإطار المثالي الذي يناسبك.",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-midnight">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            كيف يعمل
          </span>
          <h2
            className={`font-serif text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            <span className="text-foreground">ثلاث خطوات</span>{" "}
            <span className="text-primary">للإطار المثالي</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            عملية سهلة وسريعة للحصول على توصيات مخصصة تناسب وجهك
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2 + 0.3}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-l from-primary/50 to-transparent -translate-x-1/2" />
              )}

              <div className="relative glass rounded-3xl p-8 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105">
                {/* Step number */}
                <div className="absolute -top-4 right-8 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />

            <Button className="relative bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 rounded-full text-xl font-bold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105 gold-glow">
              <Sparkles className="w-6 h-6 ml-3" />
              ابدأ التحليل المجاني الآن
            </Button>
          </div>

          <p className="mt-6 text-muted-foreground text-sm">
            لا يتطلب تسجيل • نتائج فورية • مجاني 100%
          </p>
        </div>
      </div>
    </section>
  )
}
