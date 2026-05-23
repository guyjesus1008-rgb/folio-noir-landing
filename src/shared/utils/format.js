/**
 * Formata número como moeda BRL
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Formata data para formato brasileiro
 */
export function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...options,
  }).format(new Date(date))
}

/**
 * Formata telefone brasileiro
 */
export function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '')

  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }

  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }

  return phone
}

/**
 * Trunca texto com ellipsis
 */
export function truncate(text, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
