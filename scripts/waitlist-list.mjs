import { neon } from '@neondatabase/serverless'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  console.error('DATABASE_URL is not set. Run `vercel env pull .env.local --yes` or export DATABASE_URL first.')
  process.exit(1)
}

const sql = neon(databaseUrl)

const rows = await sql`
  SELECT name, email, source, created_at, updated_at
  FROM waitlist_signups
  WHERE deleted_at IS NULL
  ORDER BY created_at DESC
  LIMIT 200
`

if (!rows.length) {
  console.log('No waitlist entries found.')
  process.exit(0)
}

console.table(
  rows.map((row) => ({
    name: row.name,
    email: row.email,
    source: row.source,
    created_at: new Date(row.created_at).toISOString(),
    updated_at: new Date(row.updated_at).toISOString(),
  }))
)
