"use client"

import { Eye, MapPin, Phone, Mail, Clock, Instagram, Twitter, Facebook, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const quickLinks = [
    { label: "الرئيسية", href: "#" },
    { label: "خدماتنا", href: "#services" },
    { label: "المنتجات", href: "#products" },
    { label: "من نحن", href: "#about" },
    { label: "تواصل معنا", href: "#contact" },
  ]

  const services = [
    { label: "تحليل الوجه الذكي", href: "#" },
    { label: "التجربة الافتراضية", href: "#" },
    { label: "فحص النظر", href: "#" },
    { label: "صيانة النظارات", href: "#" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ]

  return (
    <footer id="contact" className="relative bg-midnight pt-24 pb-8">
      {/* Top decorative border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Newsletter Section */}
        <div className="glass rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
                اشترك في نشرتنا البريدية
              </h3>
              <p className="text-muted-foreground">
                احصل على آخر العروض والتحديثات مباشرة في بريدك الإلكتروني
              </p>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full px-6 py-4 rounded-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  dir="ltr"
                />
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full font-medium">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-foreground">المنير</span>
                <span className="text-xs text-muted-foreground tracking-wider">للبصريات</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              نقدم لك أفضل تجربة في عالم البصريات مع تقنيات الذكاء الاصطناعي المتطورة
              لاختيار النظارات المثالية.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">
              خدماتنا
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">
                    شارع الملك فهد، الرياض
                  </p>
                  <p className="text-muted-foreground text-sm">المملكة العربية السعودية</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm" dir="ltr">+966 12 345 6789</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm" dir="ltr">info@almoneer.com</p>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">9 ص - 10 م يومياً</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 المنير للبصريات. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
