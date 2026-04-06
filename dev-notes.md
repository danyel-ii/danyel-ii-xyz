# Dev Notes

This document is a working overview of the current `danyel-ii.xyz` site structure, the major visual/interaction elements on the page, and the places where placeholder data or inherited assets are still in use.

## Purpose

The site is built as a single-page editorial homepage with linked longform detail pages.

Primary content goals:

- present a cyber-security learning path
- present tools, apps, and experiments
- surface research notes and blog writing
- provide direct contact and social links
- archive NFT / collected works

Tone goals:

- academic
- precise
- calm
- technical
- system-oriented
- digitally administrative

## Page Structure

Main entry:

- `src/pages/index.astro`

Homepage section order:

1. `SiteHead`
2. `SiteScrollbar`
3. `SHero`
4. `ProtocolSeparator`
5. `SLearning`
6. `ProtocolSeparator`
7. `SApps`
8. `ProtocolSeparator`
9. `SResearch`
10. `ProtocolSeparator`
11. `SNftArchive`
12. `ProtocolSeparator`
13. `SLinks`
14. `SCTA`
15. `SiteFoot`

Longform routes:

- `src/pages/blog/[slug].astro`
- `src/pages/research/[slug].astro`
- `src/pages/blog/index.astro`
- `src/pages/research/index.astro`

## Component Layout

Layout components:

- `src/components/layout/SiteHead.astro`
- `src/components/layout/SiteFoot.astro`
- `src/components/layout/SiteScrollbar.astro`

Section components:

- `src/components/sections/SHero.astro`
- `src/components/sections/SLearning.astro`
- `src/components/sections/SApps.astro`
- `src/components/sections/SResearch.astro`
- `src/components/sections/SNftArchive.astro`
- `src/components/sections/SLinks.astro`
- `src/components/sections/SCTA.astro`

Card components:

- `src/components/cards/AppCard.astro`
- `src/components/cards/PostCard.astro`
- `src/components/cards/NftCard.astro`

UI primitives:

- `src/components/ui/ProtocolSeparator.astro`
- `src/components/ui/SectionEyebrow.astro`
- `src/components/ui/StatusPill.astro`
- `src/components/ui/MetaList.astro`
- `src/components/ui/ProtocolWaves.astro`

## Content Model

Structured data lives in `src/data`.

Current files:

- `src/data/site.ts`
- `src/data/apps.ts`
- `src/data/learning.ts`
- `src/data/social.ts`
- `src/data/nfts.ts`

Longform content lives in `src/content`.

Current collections:

- `src/content/blog/*`
- `src/content/research/*`

Collection config:

- `src/content.config.ts`

Shared types:

- `src/lib/types.ts`

## Styling Structure

Global entry:

- `src/styles/global.scss`

Main style modules:

- `src/styles/site/_theme.scss`
- `src/styles/site/_layout.scss`
- `src/styles/site/_sections.scss`
- `src/styles/site/_cards.scss`
- `src/styles/utilities/_motion.scss`

Current styling system:

- dark default theme
- toggleable light contrast mode
- shared color tokens in `_theme.scss`
- shared panel and line tokens used across sections
- motion kept subtle, mostly reveal/scroll behavior

## Motion / Interaction Structure

Main motion module:

- `src/lib/motion.ts`

Current motion elements:

- reveal animations on `[data-reveal]`
- parallax flags on selected blocks
- custom right-side scrollbar
- animated hero wave field via `ProtocolWaves`
- large apps-section scroll scene with mask/canvas/GSAP timeline
- toggleable construction banners
- contrast toggle

## Header / Site Chrome

Current header includes:

- brand/domain label
- console-style microcopy strip
- section nav
- banner toggle
- contrast toggle
- status pill
- domain label
- QR tile on desktop

Files:

- `src/components/layout/SiteHead.astro`
- header styling in `src/styles/site/_sections.scss`

## Construction Banners

Current banner behavior:

- top diagonal ribbon
- bottom diagonal ribbon
- persistent toggle via localStorage
- slight waving motion

Files:

- markup in `src/pages/index.astro`
- styling in `src/styles/site/_layout.scss`

## Section-by-Section Overview

### Hero

Files:

- `src/components/sections/SHero.astro`

Purpose:

- establish site identity
- present title, summary, actions, metadata
- provide initial visual atmosphere

Key elements:

- large editorial headline
- support copy
- right-side metadata panel
- protocol/node inline SVG diagram
- animated background wave field

### Learning

Files:

- `src/components/sections/SLearning.astro`

Purpose:

- show structured study tracks
- communicate progress and current focus

Key elements:

- learning cards
- phase labels
- summaries and bullets
- progress bars
- current lab notes side panel

### Apps

Files:

- `src/components/sections/SApps.astro`
- `src/components/cards/AppCard.astro`
- `src/data/apps.ts`

Purpose:

- show major tools/apps/experiments
- make the page feel alive and editorial

Key elements:

- large scroll-driven showcase scene
- featured app cards
- smaller app/project grid

Important note:

- the large animated scene is partly adapted from Antoine’s original `work` treatment and is still one of the most inherited visual systems in the site

### Research

Files:

- `src/components/sections/SResearch.astro`
- `src/components/cards/PostCard.astro`

Purpose:

- combine blog and research entries
- surface latest writing

Key elements:

- mixed grid of latest writing
- labels for BLOG / RESEARCH
- title, topic, description, tags, date

### NFT Archive

Files:

- `src/components/sections/SNftArchive.astro`
- `src/components/cards/NftCard.astro`

Purpose:

- document collected/archive items without hype framing

Key elements:

- archive grid
- placeholder tile if no image exists
- collection/year/chain/note metadata

### Links

Files:

- `src/components/sections/SLinks.astro`
- `src/data/social.ts`

Purpose:

- centralize direct contact and outbound identity links

Current entries include:

- GitHub
- X / Twitter
- Warpcast / Farcaster
- Email
- Matrix / FluffyChat
- RSS placeholder

### CTA

Files:

- `src/components/sections/SCTA.astro`

Purpose:

- close the page with a compact statement and two direct actions

## Current Placeholders

This section tracks where placeholder or inherited content is still in use.

### App media placeholders / inherited media

In `src/data/apps.ts`, the two featured app cards currently use inherited local `.mp4` assets rather than real previews from those live projects:

- `Vokabeltrainer` uses `src/assets/works/Pen-4.mp4`
- `Swiss Tournaments` uses `src/assets/works/Dummy.mp4`

These are inherited from the original Antoine repo and should be replaced if the goal is project-authentic previews.

### App repository / deployment placeholders

Some app entries still contain `TODO: replace` notes or speculative URLs:

- `Packet Lab`
- `Cipher Notebook`
- `Hash Playground`
- `Lab Journal CLI`

These should be verified against real repos/deployments.

### RSS

`src/data/social.ts` still includes an RSS placeholder-style entry unless and until a final external or internal feed URL is chosen.

### Writing bodies

Current blog/research markdown files are coherent starter content, but still first-draft editorial placeholders rather than finalized longform publication.

### NFT archive entries

The NFT/archive section currently uses placeholder archive items and should be treated as seeded structure, not final catalog data.

## Current Real Linked Projects

These are already wired as real public links in the apps/social area:

- `https://vokabeltrainer-five.vercel.app/`
- `https://turnier.schachmagie.xyz/`
- `https://danyel-ii.github.io/cyber-research-wiki/`
- `https://github.com/danyel-ii`
- `https://x.com/3141007R`
- `mailto:danyel-ii@proton.me`
- `https://matrix.to/#/%40danyel-ii%3Amatrix.org`

## Licensing / Inherited Material Notes

This repo is an adaptation of Antoine Wodniack’s portfolio project.

Relevant files:

- `README.md`
- `LICENSE.md`

Important note:

- inherited code and media are under the repo’s CC BY-NC 4.0 attribution / non-commercial framing
- some visuals and motion systems are still adapted from the original repo
- inherited media should be replaced where you want fully project-specific authorship

## Deployment Notes

Primary deployment target:

- Vercel production for `danyel-ii.xyz`

There is also a GitHub Pages workflow still present:

- `.github/workflows/deploy.yml`

If GitHub Pages is not intended as a real deployment target, that workflow should be removed or disabled to avoid recurring failure notifications.

## Suggested Next Cleanup Priorities

1. Replace inherited featured app videos with real project previews or static posters.
2. Finalize RSS destination and remove placeholder wording.
3. Replace speculative app repository/deployment URLs with real ones.
4. Expand or finalize blog/research content.
5. Review all inherited assets for provenance and replace anything still acting as a stand-in.
