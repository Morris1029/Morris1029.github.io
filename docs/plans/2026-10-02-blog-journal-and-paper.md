# Blog Journal and Paper Reading Layout

**Goal:** Apply the supplied blog journal reference, use warm paper for article pages, and publish after acceptance.

**Scope:** A shared journal component renders published posts on `/blog/` and homepage `#blog`; the homepage section sits after Honors and before Contact. Article Markdown and public metadata remain unchanged.

## Implementation

- Reuse the existing story thumbnail, editorial styles, and native SVG book illustration.
- Read published posts from the existing Astro collection, retaining date order, tags, article routes, and empty-state behavior.
- Homepage navigation points to `#blog`; View All points to `/blog/`; article back links still return to `/blog/`.
- Keep original contact links, hero links, scripts, hover/reveal behavior, and reduced-motion support.
- Scope article paper styling to its dedicated body class; keep default pages unchanged.

## Acceptance and Release

1. Build, inspect the diff, and verify unchanged Markdown and contact/hero destinations.
2. Check homepage journal, full blog list, article reading, mobile navigation, keyboard focus, decoded assets, and responsive overflow.
3. Push only task files to the verified main remote, confirm the exact commit's Pages deployment, and verify live routes and stylesheet/asset responses.
