import { InstagramLogo, FacebookLogo, TwitterLogo } from 'phosphor-react'
import { APP_CONFIG } from '@/shared/constants'

export function Footer() {
  return (
    <footer className="relative bg-dark py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="font-serif font-medium text-cream text-xl tracking-[0.1em] mb-4">
              {APP_CONFIG.name.toUpperCase()}
            </div>
            <p className="font-serif italic text-olive text-sm leading-relaxed">
              {APP_CONFIG.tagline}
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="font-sans text-gold text-[10px] uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#sobre"
                  data-cursor="expand"
                  className="font-sans text-olive text-[13px] hover:text-gold transition-colors duration-300"
                >
                  Nossa História
                </a>
              </li>
              <li>
                <a
                  href="#espaco"
                  data-cursor="expand"
                  className="font-sans text-olive text-[13px] hover:text-gold transition-colors duration-300"
                >
                  O Espaço
                </a>
              </li>
              <li>
                <a
                  href="#cardapio"
                  data-cursor="expand"
                  className="font-sans text-olive text-[13px] hover:text-gold transition-colors duration-300"
                >
                  Cardápio
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  data-cursor="expand"
                  className="font-sans text-olive text-[13px] hover:text-gold transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Hours & Location */}
          <div>
            <h4 className="font-sans text-gold text-[10px] uppercase tracking-widest mb-4">
              Horários
            </h4>
            <ul className="space-y-2 font-sans text-olive text-[13px]">
              <li>Segunda a Sexta: {APP_CONFIG.hours.weekdays}</li>
              <li>Sábado: {APP_CONFIG.hours.saturday}</li>
              <li>Domingo: {APP_CONFIG.hours.sunday}</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-sans text-gold text-[10px] uppercase tracking-widest mb-2">
                Endereço
              </h4>
              <p className="font-sans text-olive text-[13px] leading-relaxed">
                {APP_CONFIG.contact.address.street}
                <br />
                {APP_CONFIG.contact.address.neighborhood}
                <br />
                {APP_CONFIG.contact.address.city}, {APP_CONFIG.contact.address.state}
              </p>
            </div>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h4 className="font-sans text-gold text-[10px] uppercase tracking-widest mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href={APP_CONFIG.social.instagram}
                data-cursor="expand"
                className="text-gold hover:text-gold-lt transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramLogo size={18} weight="thin" />
              </a>
              <a
                href={APP_CONFIG.social.facebook}
                data-cursor="expand"
                className="text-gold hover:text-gold-lt transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookLogo size={18} weight="thin" />
              </a>
              <a
                href={APP_CONFIG.social.twitter}
                data-cursor="expand"
                className="text-gold hover:text-gold-lt transition-colors duration-300"
                aria-label="Twitter"
              >
                <TwitterLogo size={18} weight="thin" />
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gold/10 pt-8">
          <p className="font-sans text-olive text-[11px] opacity-40 text-center">
            © 2026 {APP_CONFIG.name}. Projeto fictício de portfólio — Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
