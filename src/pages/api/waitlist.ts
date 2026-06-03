import type { APIRoute } from 'astro'
import { neon } from '@neondatabase/serverless'

export const prerender = false

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const maxNameLength = 120
const maxEmailLength = 254
const maxSourceLength = 80

type WaitlistPayload = {
  name?: unknown
  email?: unknown
  source?: unknown
  website?: unknown
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  })

const getSql = () => {
  const databaseUrl = import.meta.env.DATABASE_URL

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not configured.')
  }

  return neon(databaseUrl)
}

const ensureWaitlistTable = async (sql: ReturnType<typeof neon>) => {
  await sql`CREATE EXTENSION IF NOT EXISTS pgcrypto`
  await sql`
    CREATE TABLE IF NOT EXISTS waitlist_signups (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      email text NOT NULL UNIQUE,
      source text,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now(),
      deleted_at timestamptz
    )
  `
}

export const POST: APIRoute = async ({ request }) => {
  let payload: WaitlistPayload

  try {
    payload = await request.json()
  } catch {
    return json({ ok: false, status: 'invalid_json' }, 400)
  }

  if (payload.website) {
    return json({ ok: true, status: 'joined' })
  }

  const name = String(payload.name || '').trim().replace(/\s+/g, ' ')
  const email = String(payload.email || '').trim().toLowerCase()
  const source = String(payload.source || 'ono-sideboard-whitelist').trim().slice(0, maxSourceLength)

  if (!name || name.length > maxNameLength) {
    return json({ ok: false, status: 'invalid_name' }, 400)
  }

  if (!emailPattern.test(email) || email.length > maxEmailLength) {
    return json({ ok: false, status: 'invalid_email' }, 400)
  }

  try {
    const sql = getSql()
    await ensureWaitlistTable(sql)

    const result = await sql`
      INSERT INTO waitlist_signups (name, email, source)
      VALUES (${name}, ${email}, ${source})
      ON CONFLICT (email)
      DO UPDATE SET
        name = EXCLUDED.name,
        source = EXCLUDED.source,
        updated_at = now(),
        deleted_at = NULL
      RETURNING created_at = updated_at AS joined
    `

    return json({ ok: true, status: result[0]?.joined ? 'joined' : 'updated' })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown waitlist error.'

    if (message.includes('DATABASE_URL')) {
      return json({ ok: false, status: 'database_not_configured' }, 503)
    }

    return json({ ok: false, status: 'database_error' }, 500)
  }
}
