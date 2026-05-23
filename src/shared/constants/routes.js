/**
 * Rotas da aplicação
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/sobre',
  MENU: '/cardapio',
  CONTACT: '/contato',
  RESERVATIONS: '/reservas',
}

/**
 * Links de navegação
 */
export const NAV_LINKS = [
  { label: 'Sobre', href: ROUTES.ABOUT },
  { label: 'Espaço', href: '#espaco' },
  { label: 'Cardápio', href: ROUTES.MENU },
  { label: 'Contato', href: ROUTES.CONTACT },
]
