# danyel-ii.xyz

This repo is a non-commercial personal adaptation of [AntoineW/AW-2025-Portfolio](https://github.com/AntoineW/AW-2025-Portfolio), rebuilt as the first draft of `danyel-ii.xyz`.

The current site is a calm public operating system for learning, built around:

- learning tracks
- apps, tools, and experiments
- blog posts and research notes
- notes, logs, projects, and topic hubs
- GitHub and social links
- an NFT archive / collected works section

The stack remains intentionally close to the original fork:

- Astro
- GSAP
- Lenis
- Sass

## Content Model

- `src/data` contains configuration and legacy homepage section data.
- `src/content` contains the durable content layer.
- Collections now include `blog`, `research`, `notes`, `logs`, `projects`, and `topics`.
- `/search` is powered by Pagefind.
- `/admin` is powered by Decap CMS with a local backend workflow.
- `/capture` is a mobile-first quick-entry surface for new log files.

## Run Locally

```bash
npm install
npm run dev
```

For local CMS authoring, run a second terminal:

```bash
npm run cms
```

Build for production:

```bash
npm run build
```

Additional docs:

- `docs/site-overview.md`
- `docs/learning-usage-guide.md`
- `docs/content-ops.md`
- `docs/admin-auth.md`

## Attribution

Adapted from Antoine Wodniack's AW-2025-Portfolio under CC BY-NC 4.0 for non-commercial personal use.

The original license remains in [LICENSE.md](./LICENSE.md) and should not be removed.
