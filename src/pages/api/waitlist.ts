import type { APIRoute } from 'astro'
import { neon } from '@neondatabase/serverless'

export const prerender = false

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const maxNameLength = 120
const maxEmailLength = 254
const maxSourceLength = 80
const supportEmail = 'support@danyel-ii.xyz'

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

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

const sendConfirmationEmail = async (name: string, email: string) => {
  const apiKey = import.meta.env.RESEND_API_KEY

  if (!apiKey) {
    return false
  }

  const firstName = name.split(' ')[0] || 'there'
  const escapedFirstName = escapeHtml(firstName)
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Ono Sideboard <${supportEmail}>`,
      to: [email],
      reply_to: supportEmail,
      subject: 'You are on the Ono Sideboard whitelist',
      text: [
        `Hi ${firstName},`,
        '',
        'You are on the Ono Sideboard whitelist.',
        '',
        'We will email you when early Android access opens.',
        '',
        'Ono Sideboard is for reflection and creative journaling. It is not medical, legal, financial, or mental-health advice.',
        '',
        `Questions? Reply to ${supportEmail}.`,
        '',
        'Daniel Hawes',
      ].join('\n'),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #171320;">
          <p>Hi ${escapedFirstName},</p>
          <p>You are on the Ono Sideboard whitelist.</p>
          <p>We will email you when early Android access opens.</p>
          <p style="color: #5f586a;">Ono Sideboard is for reflection and creative journaling. It is not medical, legal, financial, or mental-health advice.</p>
          <p>Questions? Reply to <a href="mailto:${supportEmail}">${supportEmail}</a>.</p>
          <p>Daniel Hawes</p>
        </div>
      `,
    }),
  })

  return response.ok
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

    const joined = Boolean(result[0]?.joined)
    const emailSent = joined ? await sendConfirmationEmail(name, email).catch(() => false) : false

    return json({
      ok: true,
      status: joined ? 'joined' : 'updated',
      emailSent,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown waitlist error.'

    if (message.includes('DATABASE_URL')) {
      return json({ ok: false, status: 'database_not_configured' }, 503)
    }

    return json({ ok: false, status: 'database_error' }, 500)
  }
}
