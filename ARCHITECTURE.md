# 🏗️ Folio Noir — Arquitetura Enterprise

> Landing page premium com arquitetura profissional escalável

## 📁 Estrutura do Projeto

```
folio-noir/
├── src/
│   ├── app/                      # 🎯 Application Layer
│   │   ├── layouts/              # Layouts da aplicação
│   │   │   └── MainLayout.jsx
│   │   └── providers.jsx         # Context providers globais
│   │
│   ├── features/                 # 🎨 Feature Modules
│   │   └── landing/
│   │       ├── sections/         # Seções da landing page
│   │       │   ├── HeroSection.jsx
│   │       │   ├── BenefitsSection.jsx
│   │       │   ├── InstitucionalSection.jsx
│   │       │   ├── LifestyleSection.jsx
│   │       │   ├── ProductsSection.jsx
│   │       │   ├── TestimonialsSection.jsx
│   │       │   ├── CtaSection.jsx
│   │       │   └── index.js
│   │       └── data/             # Dados das seções
│   │           ├── benefits.data.js
│   │           ├── products.data.js
│   │           ├── testimonials.data.js
│   │           └── index.js
│   │
│   ├── widgets/                  # 🧩 Complex UI Blocks
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── index.js
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── index.js
│   │   └── index.js
│   │
│   ├── shared/                   # 🔧 Shared Resources
│   │   ├── ui/                   # UI Components
│   │   │   ├── CustomCursor/
│   │   │   ├── SectionLabel/
│   │   │   ├── GoldDivider/
│   │   │   ├── RevealWrapper/
│   │   │   └── index.js
│   │   ├── hooks/                # Custom Hooks
│   │   │   ├── useMediaQuery.js
│   │   │   ├── useIntersectionObserver.js
│   │   │   ├── useLocalStorage.js
│   │   │   └── index.js
│   │   ├── utils/                # Utility Functions
│   │   │   ├── cn.js
│   │   │   ├── format.js
│   │   │   ├── validation.js
│   │   │   └── index.js
│   │   └── constants/            # Constants
│   │       ├── config.js
│   │       ├── routes.js
│   │       └── index.js
│   │
│   ├── pages/                    # 📄 Pages
│   │   └── Home/
│   │       ├── HomePage.jsx
│   │       └── index.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── jsconfig.json
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Adicionar dependências novas (clsx, tailwind-merge)
npm install clsx tailwind-merge

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Lint
npm run lint

# Format
npm run format
```

## 📦 Imports com Aliases

```javascript
// ✅ Correto - usando aliases
import { Button } from '@/shared/ui'
import { HeroSection } from '@/features/landing/sections'
import { useMediaQuery } from '@/shared/hooks'
import { APP_CONFIG } from '@/shared/constants'

// ❌ Evitar - imports relativos longos
import { Button } from '../../../shared/ui/Button'
```

## 🎯 Princípios Arquiteturais

### 1. Feature-Based Architecture
Cada feature é auto-contida com seus próprios componentes, dados e lógica.

### 2. Separation of Concerns
- **app/**: Configuração da aplicação
- **features/**: Lógica de negócio por feature
- **shared/**: Recursos reutilizáveis
- **widgets/**: Componentes complexos
- **pages/**: Composição de features

### 3. Barrel Exports
Cada pasta tem um `index.js` para exports limpos:

```javascript
// features/landing/sections/index.js
export { HeroSection } from './HeroSection'
export { BenefitsSection } from './BenefitsSection'
// ...
```

### 4. Data Separation
Dados separados de apresentação para facilitar CMS futuro:

```javascript
// features/landing/data/products.data.js
export const productsData = [...]

// features/landing/sections/ProductsSection.jsx
import { productsData } from '../data'
```

## 🔧 Convenções

### Nomenclatura de Arquivos
- **Componentes**: PascalCase (`HeroSection.jsx`)
- **Hooks**: camelCase com prefixo `use` (`useMediaQuery.js`)
- **Utils**: camelCase (`format.js`)
- **Data**: camelCase com sufixo `.data` (`products.data.js`)
- **Constants**: camelCase (`config.js`)

### Estrutura de Componentes
```javascript
// Imports
import { useState } from 'react'
import { ComponenteExterno } from 'biblioteca'
import { ComponenteInterno } from '@/shared/ui'

// Component
export function MeuComponente({ prop1, prop2 }) {
  // Hooks
  const [state, setState] = useState()
  
  // Handlers
  const handleClick = () => {}
  
  // Render
  return <div>...</div>
}
```

## 🎨 Adicionando Novas Features

### 1. Criar estrutura da feature
```
src/features/nova-feature/
├── components/
├── sections/
├── hooks/
├── data/
└── index.js
```

### 2. Criar componentes
```javascript
// features/nova-feature/sections/NovaSection.jsx
export function NovaSection() {
  return <section>...</section>
}
```

### 3. Exportar no barrel
```javascript
// features/nova-feature/sections/index.js
export { NovaSection } from './NovaSection'
```

### 4. Usar na página
```javascript
// pages/Home/HomePage.jsx
import { NovaSection } from '@/features/nova-feature/sections'
```

## 🔐 Variáveis de Ambiente

```bash
# Copiar exemplo
cp .env.example .env.local

# Editar com suas credenciais
VITE_API_URL=https://api.example.com
VITE_SUPABASE_URL=...
```

## 📚 Recursos Compartilhados

### Hooks Disponíveis
- `useMediaQuery(query)` - Detectar media queries
- `useIsMobile()` - Detectar mobile
- `useIsTablet()` - Detectar tablet
- `useIsDesktop()` - Detectar desktop
- `useIntersectionObserver(options)` - Scroll animations
- `useLocalStorage(key, initialValue)` - LocalStorage com React

### Utils Disponíveis
- `cn(...classes)` - Combinar classes Tailwind
- `formatCurrency(value)` - Formatar moeda BRL
- `formatDate(date)` - Formatar data pt-BR
- `formatPhone(phone)` - Formatar telefone
- `isValidEmail(email)` - Validar email
- `isValidCPF(cpf)` - Validar CPF

### Constants Disponíveis
- `APP_CONFIG` - Configurações da aplicação
- `ROUTES` - Rotas da aplicação
- `NAV_LINKS` - Links de navegação
- `BREAKPOINTS` - Breakpoints responsivos

## 🚀 Próximos Passos

### Curto Prazo
- [ ] Adicionar React Router para múltiplas páginas
- [ ] Implementar formulário de contato
- [ ] Adicionar animações de página

### Médio Prazo
- [ ] Integrar com Supabase/Firebase
- [ ] Adicionar autenticação
- [ ] Implementar CMS para conteúdo
- [ ] Adicionar i18n (internacionalização)

### Longo Prazo
- [ ] Dashboard administrativo
- [ ] Sistema de reservas
- [ ] Integração com pagamentos
- [ ] App mobile com React Native

## 📖 Documentação Adicional

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contribuindo

1. Seguir convenções de nomenclatura
2. Usar ESLint e Prettier
3. Manter separação de responsabilidades
4. Documentar componentes complexos
5. Testar em múltiplos dispositivos

---

**Desenvolvido com arquitetura enterprise-level para escalabilidade e manutenibilidade.**
