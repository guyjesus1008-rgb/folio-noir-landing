import { RevealWrapper, SectionLabel } from '@/shared/ui'
import { productsData } from '../data'

export function ProductsSection() {
  return (
    <section id="cardapio" className="relative bg-mid py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealWrapper>
            <SectionLabel>Cardápio</SectionLabel>
            <h2 className="font-serif font-light italic text-cream text-headline">
              Cada xícara,
              <br />
              um ritual
            </h2>
          </RevealWrapper>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {productsData.map((produto, index) => (
            <RevealWrapper key={produto.id} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                <img
                  src={produto.image}
                  alt={produto.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 gpu-accelerated"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="font-sans text-gold text-[10px] uppercase tracking-widest">
                    {produto.label}
                  </span>
                  <h3 className="font-serif italic text-cream text-2xl mt-1">
                    {produto.title}
                  </h3>
                  <p className="font-sans text-olive text-xs mt-1 leading-relaxed">
                    {produto.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-deep/40 backdrop-blur-sm">
                  <button
                    data-cursor="expand"
                    className="border border-cream/80 text-cream font-sans text-xs uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-cream/10 transition-colors duration-300"
                  >
                    Explorar
                  </button>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
