import { useState, useEffect } from 'react'

/**
 * Custom cursor component
 * Círculo dourado que segue o mouse e expande em elementos interativos
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    setIsVisible(true)

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e) => {
      if (e.target.dataset.cursor === 'expand' || e.target.closest('[data-cursor="expand"]')) {
        setIsExpanded(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.dataset.cursor === 'expand' || e.target.closest('[data-cursor="expand"]')) {
        setIsExpanded(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="border border-gold rounded-full transition-all duration-200 ease-out"
        style={{
          width: isExpanded ? '32px' : '12px',
          height: isExpanded ? '32px' : '12px',
        }}
      />
    </div>
  )
}
