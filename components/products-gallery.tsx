"use client"

import { useEffect, useRef, useState } from "react"
import { Eye, Heart, ShoppingBag, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProductsGallery() {
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

  const products = [
    {
      name: "إطار كلاسيكي",
      brand: "Ray-Ban",
      price: "850",
      rating: 4.9,
      isNew: true,
    },
    {
      name: "إطار عصري",
      brand: "Gucci",
      price: "1,200",
      rating: 4.8,
      isNew: false,
    },
    {
      name: "إطار رياضي",
      brand: "Oakley",
      price: "650",
      rating: 4.7,
      isNew: true,
    },
    {
      name: "إطار فاخر",
      brand: "Cartier",
      price: "2,500",
      rating: 5.0,
      isNew: false,
    },
    {
      name: "إطار أنيق",
      brand: "Prada",
      price: "980",
      rating: 4.6,
      isNew: true,
    },
    {
      name: "إطار مميز",
      brand: "Versace",
      price: "1,100",
      rating: 4.9,
      isNew: false,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-24 lg:py-32 mesh-gradient overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span
              className={`inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
            >
              تشكيلة حصرية
            </span>
            <h2
              className={`font-serif text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
            >
              <span className="text-foreground">إطارات</span>{" "}
              <span className="text-primary">رائجة</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className={`border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-full transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            عرض جميع المنتجات
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name + index}
              className={`group relative glass rounded-3xl overflow-hidden transition-all duration-700 hover:border-primary/30 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
            >
              {/* Product Image Area */}
              <div className="relative aspect-square p-6">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-muted/30" />

                {/* New badge */}
                {product.isNew && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    جديد
                  </div>
                )}

                {/* Wishlist button */}
                <button className="absolute top-4 left-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/20">
                  <Heart className="w-5 h-5 text-foreground" />
                </button>

                {/* Product placeholder */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-muted/30 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                </div>

                {/* Quick view button */}
                <div className="absolute inset-x-6 bottom-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    <Eye className="w-4 h-4 ml-2" />
                    معاينة سريعة
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 pt-0">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-foreground text-sm">{product.rating}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-1">{product.brand}</p>
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <p className="text-primary text-xl font-bold">
                    {product.price}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      ر.س
                    </span>
                  </p>
                  <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
