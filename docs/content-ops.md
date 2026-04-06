# Content Operations

This repo now treats Astro content collections as the durable content layer.

## Canonical sources

- `src/data/site.ts`: site name, protocol string, static identity metadata
- `src/data/social.ts`: outbound links and contact endpoints
- `src/data/apps.ts`: legacy homepage apps scene data
- `src/content/blog`: longer public posts
- `src/content/research`: longer research notes
- `src/content/notes`: evergreen references
- `src/content/logs`: quick-capture dated entries
- `src/content/projects`: durable project pages
- `src/content/topics`: curated subject hubs

## Frontmatter model

Most collections share these fields:

- `title`
- `summary`
- `status`: `seed | active | stable | archived`
- `topics`: string array
- `created`
- `updated`
- `draft`
- `featured`
- `related`: site-relative links or references

Collection-specific additions:

- `blog`, `research`, `notes`, `logs`: `tags`
- `projects`: `stack`, `repoUrl`, `liveUrl`, optional `cover`
- `topics`: `aliases`, optional `order`

## Routes

- `/notes` and `/notes/[...slug]`
- `/log` and `/log/[...slug]`
- `/projects` and `/projects/[slug]`
- `/topics` and `/topics/[slug]`
- `/blog` and `/blog/[slug]`
- `/research` and `/research/[slug]`
- `/search`
- `/admin`

## Manual editing

Create or edit Markdown files directly inside the relevant collection folder.

Quick guidance:

- Notes: keep them evergreen and compact
- Logs: favor speed; a short summary is enough to create an entry
- Projects: include current state plus repo/live links when available
- Topics: keep these curated; they act as subject hubs

## Search

Search is powered by Pagefind.

- Build command: `npm run build`
- Build output includes `dist/pagefind`
- Detail pages emit Pagefind filters for `kind`, `status`, and `topic`

## Current structure note

The homepage still uses some legacy TypeScript-fed sections for learning tracks, the apps scene, links, and archive material. The new durable content system now lives in Astro content collections and should be preferred for material that changes frequently.
