import { RevealWrapper, SectionLabel } from '@/shared/ui'

export function CtaSection() {
  return (
    <section id="contato" className="relative bg-deep py-32 md:py-40 px-6 md:px-12">
      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <RevealWrapper>
          <SectionLabel>Reserve sua Experiência</SectionLabel>

          <h2 className="font-serif italic text-cream text-display mb-6">
            O seu próximo grande projeto
            <br />
            começa aqui.
          </h2>

          <p className="font-sans text-olive text-base mb-10">
            Folio Noir. Rua das Artes, 142 — Vila Madeleine
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              data-cursor="expand"
              className="bg-gold text-deep font-sans text-xs uppercase tracking-widest px-10 py-4 rounded-xl hover:bg-gold-lt transition-colors duration-300 hover:-translate-y-0.5"
            >
              Reservar Mesa
            </button>
            <a
              href="#cardapio"
              data-cursor="expand"
              className="text-cream underline underline-offset-4 font-sans text-xs uppercase tracking-widest hover:text-gold transition-colors duration-300"
            >
              Ver Cardápio Completo
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
