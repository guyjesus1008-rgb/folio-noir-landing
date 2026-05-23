import { motion } from 'framer-motion'
import { SectionLabel } from '@/shared/ui'

export function HeroSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-[45fr_55fr] gap-12 md:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <SectionLabel>Craft • Stillness • Ritual</SectionLabel>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif italic text-cream text-display font-normal"
            >
              Where silence
              <br />
              becomes
              <br />
              your best work.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans font-light text-olive text-xl leading-relaxed max-w-md"
            >
              Folio Noir é um espaço onde o tempo desacelera. Cada xícara é um ritual. Cada
              canto, um convite ao pensamento.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <button
                data-cursor="expand"
                className="border border-gold text-cream font-sans text-xs uppercase tracking-widest px-8 py-3 rounded-xl hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Conhecer o Espaço
              </button>
              <a
                href="#sobre"
                data-cursor="expand"
                className="text-cream font-sans text-xs uppercase tracking-widest underline underline-offset-4 hover:text-gold transition-colors duration-300"
              >
                Nossa História
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-col items-center gap-2 pt-12"
            >
              <span className="font-sans text-gold text-[10px] uppercase tracking-widest">
                Scroll
              </span>
              <div className="w-px h-16 bg-gold opacity-50 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent to-gold"
                  animate={{ y: [0, 32, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative circle */}
            <div className="absolute -z-10 w-64 h-64 bg-gold opacity-5 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Vertical line */}
            <div className="hidden md:block absolute -left-8 top-0 w-px h-32 bg-gold opacity-30" />

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover gpu-accelerated"
              >
                <source src="/videos/cafe.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-deep opacity-15" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
