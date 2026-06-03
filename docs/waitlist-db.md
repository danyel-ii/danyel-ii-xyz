# Ono Sideboard Waitlist Database

The `/ono-sideboard` whitelist form posts to `/api/waitlist`.

The API stores entries in Postgres using the `DATABASE_URL` environment variable. It is designed for a Vercel-managed Neon Postgres database.

## Set Up Storage

1. Open the Vercel project:
   `danyel-iis-projects/danyel-ii-xyz`
2. Add a Neon Postgres database from the Vercel Marketplace.
3. Connect it to this project for Production, Preview, and Development.
4. Confirm Vercel has a `DATABASE_URL` environment variable:

   ```bash
   vercel env ls
   ```

The API creates the `waitlist_signups` table on the first valid signup.

## Optional Confirmation Email

The API can send a first-join confirmation email from:

```text
Ono Sideboard <support@danyel-ii.xyz>
```

Set up Resend or another Vercel-compatible email provider, verify `danyel-ii.xyz` for sending, then add this Vercel environment variable:

```text
RESEND_API_KEY
```

When `RESEND_API_KEY` is present, the API sends the confirmation email after a new whitelist entry is saved. Duplicate submissions update the database entry but do not send another confirmation email.

If email sending fails, the database save still succeeds and the page still shows the on-screen confirmation.

## View Entries Locally

Pull Vercel environment variables:

```bash
vercel env pull .env.local --yes
```

Then list the latest entries:

```bash
npm run waitlist:list
```

## View Entries In Neon

Open the connected Neon dashboard from Vercel, then run:

```sql
select name, email, source, created_at, updated_at
from waitlist_signups
where deleted_at is null
order by created_at desc;
```

## Stored Fields

- `name`
- `email`
- `source`
- `created_at`
- `updated_at`
- `deleted_at`

Duplicate email submissions update the existing name/source instead of creating another row.
