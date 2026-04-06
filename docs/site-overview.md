# Site Overview

This document is the high-level map of `danyel-ii.xyz` as it currently exists in the repo.

## Positioning

The site is no longer just a single editorial homepage. It now acts as a calm, public operating system for learning.

Core goals:

- keep the homepage as the main visual entry point
- move durable editorial material into typed content collections
- support search and retrieval over spectacle
- support lightweight Git-backed publishing from desktop or mobile

## Main surfaces

### Homepage

Entry file:

- `src/pages/index.astro`

Primary homepage blocks:

- `SHero`
- `SKnowledgeSurfaces`
- `SLearning`
- `SApps`
- `SResearch`
- `SNftArchive`
- `SLinks`
- `SCTA`

Purpose:

- establish tone and identity
- preserve the editorial single-page composition
- route users into the durable content system

### Durable content routes

- `/notes`
- `/log`
- `/projects`
- `/topics`
- `/blog`
- `/research`
- `/search`
- `/admin`
- `/capture`

These routes are the long-term maintenance layer of the site.

## Content architecture

Canonical editable content lives in Astro collections:

- `src/content/blog`
- `src/content/research`
- `src/content/notes`
- `src/content/logs`
- `src/content/projects`
- `src/content/topics`

Config and collection schema:

- `src/content.config.ts`

Shared content helpers:

- `src/lib/content.ts`
- `src/lib/format.ts`
- `src/lib/types.ts`

## What still lives in `src/data`

These remain configuration or legacy homepage data:

- `src/data/site.ts`
- `src/data/social.ts`
- `src/data/apps.ts`
- `src/data/learning.ts`
- `src/data/nfts.ts`

Important note:

- `apps.ts` is still used by the homepage apps scene
- `learning.ts` is still used by the homepage learning section
- `nfts.ts` is still used by the homepage archive section

So the site now has a mixed state:

- durable writing/project material is collection-driven
- some homepage-specific display systems still read from TypeScript data

## Search

Search is powered by Pagefind.

Relevant files:

- `src/pages/search.astro`
- `src/components/content/PagefindMeta.astro`
- `package.json`

Current search metadata includes:

- kind / collection
- status
- topic
- updated date

## Authoring surfaces

### Structured authoring

- `/admin`

Used for:

- collection-aware editing
- Git-backed publishing
- the intended long-term structured authoring path

Relevant files:

- `src/pages/admin.astro`
- `public/admin/config.yml`
- `docs/admin-auth.md`

### Fast mobile capture

- `/capture`

Used for:

- quick mobile log entry drafting
- generating a ready-to-save Markdown file
- opening a prefilled GitHub new-file URL

Relevant files:

- `src/pages/capture.astro`
- `docs/content-ops.md`

## PWA / installability

The site now has a basic installable shell.

Relevant files:

- `public/icons/site.webmanifest`
- `public/sw.js`
- `src/layouts/SiteLayout.astro`
- `src/pages/index.astro`

Current state:

- manifest present
- service worker present
- Apple mobile web app tags present
- installable in compatible mobile browsers over HTTPS

## Styling and motion

Primary style entry:

- `src/styles/global.scss`

Main modules:

- `src/styles/site/_theme.scss`
- `src/styles/site/_layout.scss`
- `src/styles/site/_sections.scss`
- `src/styles/site/_cards.scss`
- `src/styles/utilities/_motion.scss`

Motion entry:

- `src/lib/motion.ts`

Current interaction language:

- subtle reveal motion
- custom scrollbar
- hero wave field
- animated apps showcase scene
- contrast toggle
- toggleable construction ribbons

## Recommended review order

If you need to understand the current build quickly, review these first:

1. `src/pages/index.astro`
2. `src/layouts/SiteLayout.astro`
3. `src/content.config.ts`
4. `src/lib/content.ts`
5. `src/pages/search.astro`
6. `public/admin/config.yml`
7. `src/pages/capture.astro`

## Known mixed-state areas

These areas are intentionally left in place for now rather than rewritten in the last pass:

- homepage apps scene still depends on `src/data/apps.ts`
- homepage learning section still depends on `src/data/learning.ts`
- homepage archive still depends on `src/data/nfts.ts`
- Decap production auth still requires external setup

That state is acceptable for now, but it should be treated as a staged architecture rather than a finished consolidation.
