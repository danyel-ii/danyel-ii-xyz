export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

export function formatStatus(status: string) {
  return status.toUpperCase()
}

export function normalizeTopicSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function humanizeSlug(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function formatIsoDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

export function initialsFromName(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}
