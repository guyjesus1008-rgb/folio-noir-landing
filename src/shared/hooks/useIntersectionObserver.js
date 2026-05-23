import { useState, useEffect, useRef } from 'react'

/**
 * Hook para detectar quando um elemento entra no viewport
 * @param {Object} options - Opções do IntersectionObserver
 * @returns {[React.RefObject, boolean]} - [ref, isIntersecting]
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, {
      threshold: 0.1,
      ...options,
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return [ref, isIntersecting]
}
