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
