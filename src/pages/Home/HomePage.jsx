import {
  HeroSection,
  InstitucionalSection,
  BenefitsSection,
  LifestyleSection,
  ProductsSection,
  TestimonialsSection,
  CtaSection,
} from '@/features/landing/sections'

/**
 * Home Page
 * Página inicial que compõe todas as seções da landing page
 */
export function HomePage() {
  return (
    <>
      <HeroSection />
      <InstitucionalSection />
      <BenefitsSection />
      <LifestyleSection />
      <ProductsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
