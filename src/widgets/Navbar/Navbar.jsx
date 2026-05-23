import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deep/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="font-serif font-medium text-cream text-xl tracking-[0.1em]">
          FOLIO NOIR
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            data-cursor="expand"
            className="font-sans text-[11px] uppercase text-olive hover:text-gold transition-colors duration-300"
          >
            Sobre
          </a>
          <a
            href="#espaco"
            data-cursor="expand"
            className="font-sans text-[11px] uppercase text-olive hover:text-gold transition-colors duration-300"
          >
            Espaço
          </a>
          <a
            href="#cardapio"
            data-cursor="expand"
            className="font-sans text-[11px] uppercase text-olive hover:text-gold transition-colors duration-300"
          >
            Cardápio
          </a>
          <a
            href="#contato"
            data-cursor="expand"
            className="font-sans text-[11px] uppercase text-olive hover:text-gold transition-colors duration-300"
          >
            Contato
          </a>
        </div>

        <button
          data-cursor="expand"
          className="border border-gold text-cream font-sans text-[11px] uppercase tracking-widest px-5 py-2 rounded-lg hover:bg-gold/10 transition-colors duration-300"
        >
          Reservar
        </button>
      </div>
    </motion.nav>
  )
}
