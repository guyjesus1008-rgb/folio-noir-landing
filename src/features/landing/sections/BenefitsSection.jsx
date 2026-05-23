import { RevealWrapper, SectionLabel, GoldDivider } from '@/shared/ui'
import { motion } from 'framer-motion'
import { benefitsData } from '../data'

export function BenefitsSection() {
  return (
    <section className="relative bg-deep py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealWrapper>
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="font-serif font-light italic text-cream text-headline">
              Detalhes que você sente,
              <br />
              mas não percebe
            </h2>
          </RevealWrapper>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {benefitsData.map((item, index) => {
            const Icon = item.icon
            return (
              <RevealWrapper key={item.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group border border-gold/15 bg-cream/5 rounded-2xl p-10 hover:border-gold/50 hover:bg-cream/[0.09] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-gold w-6 h-6" weight="thin" />
                  </motion.div>
                  <GoldDivider className="w-8 my-4" />
                  <h3 className="font-serif italic text-cream text-xl mb-3">{item.title}</h3>
                  <p className="font-sans text-olive text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
