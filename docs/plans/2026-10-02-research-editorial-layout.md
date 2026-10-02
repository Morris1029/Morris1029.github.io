# Research Editorial Layout Implementation Plan

**Goal:** Implement the approved research reference and publish the verified About and Research changes.

**Architecture:** Update the Research markup and its scoped styles in `src/pages/index.astro`. Reuse the existing filmstrip thumbnails and add three small native SVG diagrams. Correct the mobile menu height in `src/styles/global.css` so every navigation link remains visible during acceptance.

**Tech Stack:** Astro, scoped CSS, local WebP and SVG assets; no new dependencies or runtime scripts.

## Implementation

- Preserve the three existing research descriptions.
- Add the editorial header, filmstrip, paper note, three research cards, diagrams, tags, and Journey link.
- Use a paper card for retrieval and olive outlined cards for agents and governance.
- Keep decorative content hidden from assistive technology and prevent internal scrolling of decoration layers.
- Use a single-column card layout on smaller screens.

## Acceptance and release

- Run `pnpm build` and `git diff --check`.
- Check desktop, tablet, and mobile overflow, decoded images, contrast, and navigation.
- Compare the research descriptions and unchanged sections against the previous source.
- Commit only the accepted About and Research files, then push to the verified `main` remote.
- Confirm the deployment for that commit succeeds and the live page and new resources respond successfully.
