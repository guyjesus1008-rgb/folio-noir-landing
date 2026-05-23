import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility para combinar classes do Tailwind CSS
 * Resolve conflitos de classes e mescla corretamente
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
