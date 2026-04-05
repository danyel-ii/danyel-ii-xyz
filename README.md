# danyel-ii.xyz

This repo is a non-commercial personal adaptation of [AntoineW/AW-2025-Portfolio](https://github.com/AntoineW/AW-2025-Portfolio), rebuilt as the first draft of `danyel-ii.xyz`.

The current site is a clean, academic cyber-security homepage focused on:

- learning tracks
- apps, tools, and experiments
- blog posts and research notes
- GitHub and social links
- an NFT archive / collected works section

The stack remains intentionally close to the original fork:

- Astro
- GSAP
- Lenis
- Sass

## Content Model

- `src/data` contains structured section data such as apps, learning tracks, links, and archive items.
- `src/content` contains longform writing for blog posts and research notes through Astro content collections.

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Attribution

Adapted from Antoine Wodniack's AW-2025-Portfolio under CC BY-NC 4.0 for non-commercial personal use.

The original license remains in [LICENSE.md](./LICENSE.md) and should not be removed.
