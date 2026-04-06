# Admin Auth Notes

## Local authoring

Local Decap authoring is configured and does not require production OAuth.

Run two processes:

```bash
npm run dev
npm run cms
```

Then open:

- `http://localhost:4321/admin/`

The CMS config uses:

- `local_backend: true`
- `publish_mode: simple`

This is the recommended workflow for quick note/log capture during development.

## Mobile `/admin` workflow

Once production Decap auth is configured, `/admin` can also be used from mobile as the structured content path.

Recommended use:

1. Open `https://danyel-ii.xyz/admin/`
2. Sign in through the configured GitHub/Decap auth flow
3. Choose the `Logs` collection
4. Create a new entry with the minimum required fields
5. Save the entry back to the repository

If you only need fast capture and do not want to complete a full sign-in/editor session on mobile, use `/capture` instead.

## Production state

The repo contains the Decap CMS surface and config, but production GitHub authentication is not fully completed in-code because that requires external auth configuration.

Current in-repo pieces:

- `/admin`
- `public/admin/config.yml`
- GitHub backend pointing at `danyel-ii/danyel-ii-xyz`

Remaining manual production work:

1. Provide an OAuth/auth broker for the Decap GitHub backend.
2. Register the GitHub OAuth app or provider callback URLs.
3. Add any required client ID / auth endpoints to the final CMS configuration.
4. Verify production commits from `/admin` against the live Vercel deployment.

## Vercel note

Because the site is hosted on Vercel, production auth should be treated as a separate deployment concern. The repo is ready for local authoring now and documents the remaining manual production setup instead of guessing at secrets or callback infrastructure.

## Current intended split

Use:

- `/admin` for structured editing once production auth is configured
- `/capture` for fast mobile logging when speed matters more than full CMS editing

These two surfaces are complementary rather than competing.
