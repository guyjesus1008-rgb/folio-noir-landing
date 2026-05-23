/**
 * Configurações da aplicação
 */
export const APP_CONFIG = {
  name: 'Folio Noir',
  tagline: 'Where stillness meets craft',
  description: 'Cafeteria boutique premium e espaço criativo',

  contact: {
    email: 'contato@folionoir.com',
    phone: '(11) 99999-9999',
    address: {
      street: 'Rua das Artes, 142',
      neighborhood: 'Vila Madeleine',
      city: 'São Paulo',
      state: 'SP',
    },
  },

  social: {
    instagram: 'https://instagram.com/folionoir',
    facebook: 'https://facebook.com/folionoir',
    twitter: 'https://twitter.com/folionoir',
  },

  hours: {
    weekdays: '7h - 22h',
    saturday: '8h - 23h',
    sunday: '9h - 20h',
  },
}

/**
 * Breakpoints (sync com Tailwind)
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
