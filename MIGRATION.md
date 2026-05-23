# 🔄 Guia de Migração — Estrutura Antiga → Nova

## 📊 Resumo das Mudanças

### Estrutura ANTES
```
src/
├── components/
│   ├── ui/
│   │   ├── CustomCursor.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── GoldDivider.jsx
│   │   └── RevealWrapper.jsx
│   ├── BeneficiosSection.jsx
│   ├── CtaFinalSection.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── InstitucionalSection.jsx
│   ├── LifestyleSection.jsx
│   ├── Navbar.jsx
│   ├── ProdutosSection.jsx
│   └── TestemunhosSection.jsx
├── App.jsx
├── index.css
└── main.jsx
```

### Estrutura DEPOIS
```
src/
├── app/
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── index.js
│   └── providers.jsx
│
├── features/
│   └── landing/
│       ├── sections/
│       │   ├── HeroSection.jsx
│       │   ├── BenefitsSection.jsx
│       │   ├── InstitucionalSection.jsx
│       │   ├── LifestyleSection.jsx
│       │   ├── ProductsSection.jsx
│       │   ├── TestimonialsSection.jsx
│       │   ├── CtaSection.jsx
│       │   └── index.js
│       └── data/
│           ├── benefits.data.js
│           ├── products.data.js
│           ├── testimonials.data.js
│           └── index.js
│
├── widgets/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── index.js
│   └── Footer/
│       ├── Footer.jsx
│       └── index.js
│
├── shared/
│   ├── ui/
│   │   ├── CustomCursor/
│   │   ├── SectionLabel/
│   │   ├── GoldDivider/
│   │   ├── RevealWrapper/
│   │   └── index.js
│   ├── hooks/
│   │   ├── useMediaQuery.js
│   │   ├── useIntersectionObserver.js
│   │   ├── useLocalStorage.js
│   │   └── index.js
│   ├── utils/
│   │   ├── cn.js
│   │   ├── format.js
│   │   ├── validation.js
│   │   └── index.js
│   └── constants/
│       ├── config.js
│       ├── routes.js
│       └── index.js
│
├── pages/
│   └── Home/
│       ├── HomePage.jsx
│       └── index.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## 🔄 Mapeamento de Arquivos

| Arquivo Antigo | Arquivo Novo | Mudanças |
|----------------|--------------|----------|
| `components/ui/CustomCursor.jsx` | `shared/ui/CustomCursor/CustomCursor.jsx` | Movido + estrutura de pasta |
| `components/ui/SectionLabel.jsx` | `shared/ui/SectionLabel/SectionLabel.jsx` | Movido + estrutura de pasta |
| `components/ui/GoldDivider.jsx` | `shared/ui/GoldDivider/GoldDivider.jsx` | Movido + estrutura de pasta |
| `components/ui/RevealWrapper.jsx` | `shared/ui/RevealWrapper/RevealWrapper.jsx` | Movido + estrutura de pasta |
| `components/HeroSection.jsx` | `features/landing/sections/HeroSection.jsx` | Movido + imports atualizados |
| `components/BeneficiosSection.jsx` | `features/landing/sections/BenefitsSection.jsx` | Movido + dados extraídos + renomeado |
| `components/InstitucionalSection.jsx` | `features/landing/sections/InstitucionalSection.jsx` | Movido + imports atualizados |
| `components/LifestyleSection.jsx` | `features/landing/sections/LifestyleSection.jsx` | Movido + imports atualizados |
| `components/ProdutosSection.jsx` | `features/landing/sections/ProductsSection.jsx` | Movido + dados extraídos + renomeado |
| `components/TestemunhosSection.jsx` | `features/landing/sections/TestimonialsSection.jsx` | Movido + dados extraídos + renomeado |
| `components/CtaFinalSection.jsx` | `features/landing/sections/CtaSection.jsx` | Movido + imports atualizados + renomeado |
| `components/Navbar.jsx` | `widgets/Navbar/Navbar.jsx` | Movido + estrutura de pasta |
| `components/Footer.jsx` | `widgets/Footer/Footer.jsx` | Movido + estrutura de pasta + usa constants |
| `App.jsx` | `App.jsx` | Refatorado completamente |

## 📝 Mudanças nos Imports

### ANTES
```javascript
// App.jsx
import CustomCursor from './components/ui/CustomCursor'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BeneficiosSection from './components/BeneficiosSection'
// ...
```

### DEPOIS
```javascript
// App.jsx
import { AppProviders } from './app/providers'
import { MainLayout } from './app/layouts'
import { HomePage } from './pages/Home'

// pages/Home/HomePage.jsx
import {
  HeroSection,
  BenefitsSection,
  // ...
} from '@/features/landing/sections'

// Qualquer arquivo
import { CustomCursor, SectionLabel } from '@/shared/ui'
import { useMediaQuery } from '@/shared/hooks'
import { APP_CONFIG } from '@/shared/constants'
```

## 🆕 Arquivos Novos Criados

### Configuração
- `.env.example` - Template de variáveis de ambiente
- `jsconfig.json` - Configuração de aliases
- `.eslintrc.cjs` - Configuração ESLint
- `.prettierrc` - Configuração Prettier
- `vite.config.js` - Atualizado com aliases

### Shared Layer
- `shared/hooks/useMediaQuery.js` - Hook para media queries
- `shared/hooks/useIntersectionObserver.js` - Hook para scroll animations
- `shared/hooks/useLocalStorage.js` - Hook para localStorage
- `shared/utils/cn.js` - Utility para classes Tailwind
- `shared/utils/format.js` - Funções de formatação
- `shared/utils/validation.js` - Funções de validação
- `shared/constants/config.js` - Configurações da aplicação
- `shared/constants/routes.js` - Rotas da aplicação

### Data Layer
- `features/landing/data/benefits.data.js` - Dados dos benefícios
- `features/landing/data/products.data.js` - Dados dos produtos
- `features/landing/data/testimonials.data.js` - Dados dos testemunhos

### App Layer
- `app/providers.jsx` - Providers globais
- `app/layouts/MainLayout.jsx` - Layout principal
- `pages/Home/HomePage.jsx` - Página home

### Documentação
- `ARCHITECTURE.md` - Documentação da arquitetura
- `MIGRATION.md` - Este guia de migração

## 🔧 Mudanças Técnicas

### 1. Separação de Dados
**Antes:** Dados hardcoded nos componentes
```javascript
const beneficios = [
  { icon: Coffee, title: '...', description: '...' },
  // ...
]
```

**Depois:** Dados em arquivos separados
```javascript
// features/landing/data/benefits.data.js
export const benefitsData = [...]

// features/landing/sections/BenefitsSection.jsx
import { benefitsData } from '../data'
```

### 2. Barrel Exports
**Antes:** Imports diretos
```javascript
import HeroSection from './components/HeroSection'
import BenefitsSection from './components/BenefitsSection'
```

**Depois:** Barrel exports
```javascript
import { HeroSection, BenefitsSection } from '@/features/landing/sections'
```

### 3. Path Aliases
**Antes:** Imports relativos
```javascript
import { Button } from '../../../shared/ui/Button'
```

**Depois:** Imports com aliases
```javascript
import { Button } from '@/shared/ui'
```

### 4. Componentização
**Antes:** Componentes monolíticos
**Depois:** Componentes com estrutura de pasta própria + barrel export

## 📦 Dependências Adicionadas

```json
{
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "prettier": "^3.2.5"
  }
}
```

## 🚀 Próximos Passos

### Imediato
1. Executar `npm install` para instalar novas dependências
2. Deletar pasta `src/components/` antiga (opcional, manter como backup)
3. Testar a aplicação: `npm run dev`
4. Verificar se tudo funciona corretamente

### Curto Prazo
1. Adicionar testes unitários
2. Configurar Husky para pre-commit hooks
3. Adicionar CI/CD pipeline

### Médio Prazo
1. Migrar para TypeScript
2. Adicionar React Router
3. Implementar state management (Zustand/Redux)
4. Integrar com backend

## ⚠️ Pontos de Atenção

1. **Imports Antigos:** Se houver imports antigos, atualize para os novos aliases
2. **Dados Hardcoded:** Todos os dados agora estão em `features/landing/data/`
3. **Componentes UI:** Agora em `shared/ui/` com estrutura de pasta
4. **Widgets:** Navbar e Footer agora são widgets, não sections

## ✅ Checklist de Migração

- [x] Estrutura de pastas criada
- [x] Configurações atualizadas (vite, jsconfig, eslint, prettier)
- [x] Componentes UI movidos para shared/ui
- [x] Sections movidas para features/landing/sections
- [x] Dados extraídos para features/landing/data
- [x] Widgets criados (Navbar, Footer)
- [x] App layer criado (providers, layouts)
- [x] Pages criadas
- [x] Barrel exports implementados
- [x] Path aliases configurados
- [x] Documentação criada

---

**Migração completa! A estrutura agora está pronta para escalar.**
