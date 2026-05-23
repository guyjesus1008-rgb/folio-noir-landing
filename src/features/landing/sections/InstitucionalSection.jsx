import { RevealWrapper, SectionLabel, GoldDivider } from '@/shared/ui'

export function InstitucionalSection() {
  return (
    <section id="sobre" className="relative bg-mid py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-center">
          {/* Left Column - Image */}
          <RevealWrapper>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
                alt="Folio Noir Atmosphere"
                loading="lazy"
                className="w-full h-full object-cover gpu-accelerated"
              />
            </div>
          </RevealWrapper>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <RevealWrapper delay={0.1}>
              <GoldDivider className="w-10 mb-8" />
              <SectionLabel>Nossa História</SectionLabel>
              <h2 className="font-serif font-light italic text-cream text-headline">
                Um lugar que respeita
                <br />
                o seu processo criativo
              </h2>
            </RevealWrapper>

            <RevealWrapper delay={0.2}>
              <p className="font-sans text-olive text-[15px] leading-[1.9] max-w-xl">
                Folio Noir nasceu de uma pergunta simples: por que é tão difícil encontrar um
                lugar que entenda que criar exige silêncio, tempo e atenção aos detalhes que
                você nem percebe conscientemente, mas sente profundamente?
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.3}>
              <p className="font-sans text-olive text-[15px] leading-[1.9] max-w-xl">
                Cada elemento aqui foi pensado para desaparecer quando você precisa focar, e
                aparecer exatamente quando você precisa de inspiração. Da luz natural calibrada
                às mesas amplas, do volume ambiente ao café de origem única.
              </p>
            </RevealWrapper>

            <RevealWrapper delay={0.4}>
              <div className="relative pt-8">
                <div className="absolute -left-4 top-8 text-gold opacity-20 text-[120px] leading-none font-serif">
                  "
                </div>
                <blockquote className="relative z-10 font-serif italic text-cream/90 text-2xl leading-snug pl-8">
                  "Não é apenas um café. É onde eu venho quando preciso pensar de verdade."
                </blockquote>
                <div className="flex items-center gap-4 mt-6 pl-8">
                  <GoldDivider className="w-8" />
                  <div>
                    <span className="font-sans text-gold text-[10px] uppercase tracking-widest block">
                      Marina Costa
                    </span>
                    <span className="font-sans text-olive text-[11px]">
                      Arquiteta, São Paulo
                    </span>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}
