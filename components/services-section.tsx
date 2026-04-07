"use client"

import { useEffect, useRef, useState } from "react"
import { Scan, Lightbulb, Glasses, Eye, ArrowLeft } from "lucide-react"

export function ServicesSection() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Scan,
      title: "تحليل الوجه بالذكاء الاصطناعي",
      description:
        "تقنية متقدمة لتحليل شكل وجهك وتحديد الإطارات الأنسب لملامحك بدقة عالية.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Lightbulb,
      title: "توصيات ذكية",
      description:
        "اقتراحات مخصصة تعتمد على تفضيلاتك الشخصية وأحدث صيحات الموضة العالمية.",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: Glasses,
      title: "تجربة افتراضية",
      description:
        "جرب النظارات افتراضياً قبل الشراء وشاهد كيف ستبدو على وجهك بتقنية AR.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Eye,
      title: "فحص النظر",
      description:
        "فحص شامل للنظر بأحدث الأجهزة الطبية مع فريق متخصص من أطباء العيون.",
      color: "from-rose-500/20 to-pink-500/20",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 bg-midnight"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className={`inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            خدماتنا المميزة
          </span>
          <h2
            className={`font-serif text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            <span className="text-foreground">نقدم لك</span>{" "}
            <span className="text-primary">أفضل الخدمات</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
          >
            مجموعة متكاملة من الخدمات المصممة لتوفير تجربة استثنائية في عالم
            البصريات
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative glass rounded-3xl p-8 transition-all duration-700 hover:border-primary/30 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-foreground mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300"
                >
                  اعرف المزيد
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
