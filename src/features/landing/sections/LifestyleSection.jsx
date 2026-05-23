import { SectionLabel } from '@/shared/ui'

export function LifestyleSection() {
  return (
    <section id="espaco" className="relative h-[70vh] overflow-hidden flex items-center">
      {/* Static Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1600&q=80"
          alt="Folio Noir Lifestyle"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(15,20,25,0.95) 35%, rgba(15,20,25,0.3))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-xl">
          <SectionLabel>A Atmosfera</SectionLabel>
          <h2 className="font-serif italic text-cream text-headline mb-6">
            Um lugar que respeita
            <br />
            o seu silêncio.
          </h2>
          <p className="font-sans font-light text-olive text-xl leading-relaxed mb-8">
            Onde cada elemento foi pensado para desaparecer quando você precisa focar.
          </p>
          <button
            data-cursor="expand"
            className="border border-cream text-cream font-sans text-xs uppercase tracking-widest px-8 py-3 rounded-xl hover:bg-cream/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Conhecer o Espaço
          </button>
        </div>
      </div>
    </section>
  )
}
