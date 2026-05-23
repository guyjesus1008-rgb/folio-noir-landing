import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

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

        <div className="flex items-center gap-4">
          <button
            data-cursor="expand"
            className="hidden md:block border border-gold text-cream font-sans text-[11px] uppercase tracking-widest px-5 py-2 rounded-lg hover:bg-gold/10 transition-colors duration-300"
          >
            Reservar
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-cream p-2 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-64 bg-deep/95 backdrop-blur-xl border-l border-gold/20 md:hidden z-40"
          >
            <div className="flex flex-col gap-8 p-8 pt-24">
              <a
                href="#sobre"
                onClick={handleLinkClick}
                className="font-sans text-sm uppercase text-cream hover:text-gold transition-colors duration-300"
              >
                Sobre
              </a>
              <a
                href="#espaco"
                onClick={handleLinkClick}
                className="font-sans text-sm uppercase text-cream hover:text-gold transition-colors duration-300"
              >
                Espaço
              </a>
              <a
                href="#cardapio"
                onClick={handleLinkClick}
                className="font-sans text-sm uppercase text-cream hover:text-gold transition-colors duration-300"
              >
                Cardápio
              </a>
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="font-sans text-sm uppercase text-cream hover:text-gold transition-colors duration-300"
              >
                Contato
              </a>
              <button
                className="border border-gold text-cream font-sans text-xs uppercase tracking-widest px-5 py-3 rounded-lg hover:bg-gold/10 transition-colors duration-300 mt-4"
              >
                Reservar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
