# Folio Noir — Landing Page Premium

> *"Where stillness meets craft."*

Landing page de portfólio para uma cafeteria boutique premium e espaço criativo fictício. Demonstra domínio de UI premium, animações sofisticadas, design system coeso e código limpo em React.

## 🎨 Design System

**Paleta de Cores:**
- Deep (#1D2438) - Fundo primário
- Mid (#252D42) - Fundo secundário
- Dark (#161C2E) - Fundo footer
- Cream (#E7D7AF) - Títulos e destaques
- Olive (#79826A) - Textos de suporte
- Gold (#B7A16B) - Acentos
- Gold-lt (#CDB97E) - Hover dourado

**Tipografia:**
- Headlines: Cormorant Garamond (italic, 300/700)
- Corpo/UI: Manrope (300-500)

## 🚀 Stack Técnica

- **Framework:** React 18 + Vite
- **Estilização:** Tailwind CSS (tema customizado)
- **Animações:** Framer Motion
- **Ícones:** Phosphor Icons (thin)
- **Fontes:** Google Fonts (Cormorant Garamond + Manrope)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx              # Navegação fixa com blur ao scroll
│   ├── HeroSection.jsx         # Hero com animações staggered
│   ├── InstitucionalSection.jsx # Storytelling com grid assimétrico
│   ├── BeneficiosSection.jsx   # Grid de 6 diferenciais
│   ├── LifestyleSection.jsx    # Seção full-width com parallax
│   ├── ProdutosSection.jsx     # Showcase de produtos
│   ├── TestemunhosSection.jsx  # Testemunhos de clientes
│   ├── CtaFinalSection.jsx     # Call-to-action final
│   ├── Footer.jsx              # Footer com 4 colunas
│   └── ui/
│       ├── CustomCursor.jsx    # Cursor personalizado
│       ├── SectionLabel.jsx    # Label dourado uppercase
│       ├── GoldDivider.jsx     # Linha dourada fina
│       └── RevealWrapper.jsx   # Wrapper de animação scroll
├── App.jsx                     # Componente principal
├── main.jsx                    # Entry point
└── index.css                   # Estilos globais + Tailwind
```

## ✨ Features

### Animações
- **Page load:** Stagger de 0.15s entre elementos filhos
- **Scroll reveals:** Intersection Observer com threshold 0.15
- **Hover states:** Scale transforms (1.02-1.04) com 700ms
- **Parallax:** useScroll + useTransform no hero e lifestyle
- **Respeita:** `prefers-reduced-motion`

### Efeitos Visuais
- Grain overlay (opacity 0.04) em seções escuras
- Backdrop blur em overlays
- Custom cursor (12px → 32px em hover)
- Ken Burns animation na seção lifestyle

### Responsividade
- **Mobile (<768px):** Coluna única, navegação simplificada
- **Tablet (768-1024px):** Grids de 2 colunas
- **Desktop (1024px+):** Layout completo, max-width 1280px

## 🎯 Seções da Landing Page

1. **Hero** - Duas colunas com headline impactante e imagem
2. **Institucional** - História da marca com grid assimétrico
3. **Benefícios** - 6 diferenciais em cards com ícones
4. **Lifestyle** - Imagem full-width com parallax
5. **Produtos** - 4 produtos em grid 2x2
6. **Testemunhos** - 3 depoimentos de clientes
7. **CTA Final** - Call-to-action centralizado
8. **Footer** - Links, horários, endereço e redes sociais

## 🎨 Componentes Reutilizáveis

### `<RevealWrapper>`
Wrapper de animação para scroll reveals com Framer Motion.

```jsx
<RevealWrapper delay={0.2}>
  <YourContent />
</RevealWrapper>
```

### `<SectionLabel>`
Label dourado uppercase para títulos de seção.

```jsx
<SectionLabel>Nossa História</SectionLabel>
```

### `<GoldDivider>`
Linha dourada fina decorativa.

```jsx
<GoldDivider className="w-10 my-4" />
```

### `<CustomCursor>`
Cursor personalizado que expande em elementos interativos.
Adicione `data-cursor="expand"` em elementos para ativar.

```jsx
<button data-cursor="expand">Click me</button>
```

## 🔧 Customização

### Cores
Edite `tailwind.config.js` para ajustar a paleta:

```js
colors: {
  'deep':    '#1D2438',
  'mid':     '#252D42',
  // ...
}
```

### Tipografia
Fontes definidas em `index.html` (Google Fonts) e `tailwind.config.js`:

```js
fontFamily: {
  serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
  sans:   ['Manrope', 'system-ui', 'sans-serif'],
}
```

### Animações
Ajuste durações e easings em cada componente ou globalmente em `index.css`.

## 📱 Acessibilidade

- Contraste mínimo 4.5:1 para textos
- Suporte a `prefers-reduced-motion`
- Navegação por teclado
- Labels descritivos em ícones
- Estrutura semântica HTML5

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📄 Licença

Projeto fictício de portfólio — livre para uso educacional e demonstração.

---

**Desenvolvido com atenção aos detalhes que você não percebe conscientemente, mas sente profundamente.**
