# About Editorial Layout Implementation Plan

**Goal:** Implement the approved About concept while preserving the existing biography, statistics, navigation, and other sections.

**Architecture:** Update the About markup directly in `src/pages/index.astro` and add section-scoped styles in the same file. Reuse the homepage poster and three small WebP frames from its existing video; no new runtime dependencies or JavaScript.

**Tech Stack:** Astro, scoped CSS, existing WebP and MP4 assets.

---

### Task 1: Prepare the filmstrip assets

**Files:** Create `public/assets/story/about-curiosity.webp`, `about-connection.webp`, and `about-impact.webp`.

- Convert the existing 2.65, 5.15, and 8.35 second frames into small WebP thumbnails.
- Verify image dimensions, decoding, and combined file size.

### Task 2: Implement the approved composition

**Files:** Modify `src/pages/index.astro` only.

- Add the eyebrow, indexed biography, research tags, framed portrait, decorative seal, filmstrip, paper note, and next-section link.
- Retain the full original manifesto, both biography paragraphs, and the three statistics.
- Add scoped desktop and mobile layouts, restrained window light, and decorative rings.
- Mark decorative elements appropriately and preserve existing reduced-motion behavior.

### Task 3: Verify and preview

- Run `pnpm build` and `git diff --check`.
- Check desktop, tablet, and mobile rendering for overflow, legibility, decoded assets, and navigation.
- Check reduced motion and confirm the original hero and other sections still work.
- Review the final diff; leave deployment unchanged.
