import { defineMiddleware } from 'astro:middleware'

const onoSideboardRootRedirectExpiresAt = Date.parse('2026-06-16T21:59:59.999Z')

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url
  const method = context.request.method.toUpperCase()

  if (
    pathname === '/' &&
    (method === 'GET' || method === 'HEAD') &&
    Date.now() <= onoSideboardRootRedirectExpiresAt
  ) {
    return context.redirect('/ono-sideboard', 302)
  }

  return next()
})
