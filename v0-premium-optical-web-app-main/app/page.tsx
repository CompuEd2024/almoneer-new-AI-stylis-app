import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { AIAnalysis } from "@/components/ai-analysis"
import { ServicesSection } from "@/components/services-section"
import { ProductsGallery } from "@/components/products-gallery"
import { StepsCTA } from "@/components/steps-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <AIAnalysis />
      <ServicesSection />
      <ProductsGallery />
      <StepsCTA />
      <Footer />
    </main>
  )
}
