/**
 * Section Label Component
 * Label dourado uppercase para títulos de seção
 */
export function SectionLabel({ children, className = '' }) {
  return (
    <span
      className={`font-sans text-gold text-[10px] uppercase tracking-[0.2em] block mb-4 ${className}`}
    >
      {children}
    </span>
  )
}
