/**
 * Reveal Wrapper Component
 * Wrapper simples para animações de entrada
 * Usa CSS animations em vez de Framer Motion para melhor performance
 */
export function RevealWrapper({ children, delay = 0 }) {
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}
