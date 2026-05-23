import { RevealWrapper, SectionLabel, GoldDivider } from '@/shared/ui'
import { testimonialsData } from '../data'

export function TestimonialsSection() {
  return (
    <section className="relative bg-deep py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealWrapper>
            <SectionLabel>Testemunhos</SectionLabel>
            <h2 className="font-serif font-light italic text-cream text-headline">
              O que dizem
              <br />
              quem cria aqui
            </h2>
          </RevealWrapper>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {testimonialsData.map((item, index) => (
            <RevealWrapper key={item.id} delay={index * 0.15}>
              <div className="relative px-8">
                {/* Aspas decorativas */}
                <span className="font-serif text-gold/20 text-[120px] leading-none absolute -top-8 left-4">
                  "
                </span>

                <p className="font-serif italic text-cream/90 text-2xl leading-snug relative z-10">
                  "{item.quote}"
                </p>

                <GoldDivider className="w-8 my-6" />

                <span className="font-sans text-gold text-[10px] uppercase tracking-widest block">
                  {item.name}
                </span>
                <span className="font-sans text-olive text-[11px]">{item.role}</span>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
