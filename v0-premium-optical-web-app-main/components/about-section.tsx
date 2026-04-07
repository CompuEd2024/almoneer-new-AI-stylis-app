"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Award, Users, Glasses, Clock } from "lucide-react"

export function AboutSection() {
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

  const stats = [
    { icon: Clock, value: "20+", label: "سنوات خبرة" },
    { icon: Glasses, value: "5000+", label: "إطار متوفر" },
    { icon: Users, value: "50000+", label: "عميل سعيد" },
    { icon: Award, value: "100%", label: "ضمان الجودة" },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 lg:py-32 bg-midnight"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden glass">
              {/* Video thumbnail placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm mb-4">فيديو تعريفي</p>
                    <p className="text-foreground/50 text-xs">Al Moneer Opticals</p>
                  </div>
                </div>
              </div>

              {/* Play button with pulse effect */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="relative">
                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 pulse-ring" />
                  <div
                    className="absolute inset-0 rounded-full bg-primary/20 pulse-ring"
                    style={{ animationDelay: "0.5s" }}
                  />

                  {/* Play button */}
                  <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary-foreground mr-[-2px]" fill="currentColor" />
                  </div>
                </div>
              </button>

              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-bold">الأفضل في المنطقة</p>
                  <p className="text-muted-foreground text-sm">منذ 2004</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6">
              من نحن
            </span>

            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              <span className="text-foreground">خبرة تمتد</span>{" "}
              <span className="text-primary">لأكثر من عقدين</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              في المنير للبصريات، نجمع بين التقنية المتطورة والخبرة الطويلة لنقدم لك
              تجربة فريدة في اختيار النظارات. فريقنا المتخصص يستخدم أحدث تقنيات الذكاء
              الاصطناعي لتحليل ملامح وجهك واقتراح الإطارات المثالية.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              نفخر بتقديم مجموعة واسعة من أرقى الماركات العالمية مع ضمان الجودة
              والأصالة لكل منتج.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-5 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-primary text-2xl lg:text-3xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
