# Scrollytelling Chapter Interaction Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use executing-plans to implement this plan task-by-task.

**Goal:** Replace the continuous 10-second scrubber with four viewport chapters, add an approximate cursor-facing character interaction using the existing MP4, and make the cursor ripples clearly visible.

**Architecture:** Keep the media and decorative layers sticky while four semantic chapter panels move through the viewport. A small component-local controller selects one representative video time per chapter, applies a bounded pointer-driven time offset and 3D crop shift on fine pointers, and emits reusable CSS ripple rings. ShapeWaves remains the only React island and becomes a stronger secondary texture; coarse pointers and reduced-motion users receive stable static frames and content.

**Tech Stack:** Astro, component-local TypeScript, CSS animations, React island, ShapeWaves/vgpu.

---

### Task 1: Convert the hero into viewport chapters

**Files:**
- Modify: `src/components/ScrollyHero.astro`

1. Replace progress ranges with four chapter objects and representative video times.
2. Render one paused video behind four `100svh` semantic chapter panels.
3. Replace the continuous time bar with chapter count and four discrete markers.
4. Verify that every chapter is readable and the following About section remains reachable.

### Task 2: Add approximate pointer-facing behavior

**Files:**
- Modify: `src/components/ScrollyHero.astro`

1. Detect the chapter nearest the viewport center.
2. Seek to its representative frame when the chapter changes.
3. On fine pointers, map pointer position to a small time window around that frame.
4. Apply bounded translation and perspective tilt to the media plane, resetting on pointer leave and after the story.

### Task 3: Strengthen the ripple system

**Files:**
- Modify: `src/components/ScrollyHero.astro`
- Modify: `src/components/shape-waves/ShapeWavesLayer.jsx`
- Modify: `src/components/shape-waves/ShapeWavesLayer.css`

1. Increase ShapeWaves contrast, radius, strength, glow, and layer opacity.
2. Add a pooled CSS multi-ring ripple layer driven by pointer movement and pointer down.
3. Keep the layer decorative, click-through, disabled for coarse pointers and reduced motion.
4. Verify the CSS ring fallback is visible when WebGPU is unavailable.

### Task 4: Responsive and accessibility verification

**Files:**
- Modify: `src/components/ScrollyHero.astro`

1. Preserve one-column mobile chapters without pointer effects.
2. In reduced-motion mode, hide video/ripples, show the poster, and present chapters sequentially without sticky long-scroll behavior.
3. Run `pnpm build` and `git diff --check`.
4. Browser-test desktop chapter switching, reverse scrolling, cursor tracking, CSS fallback, and `390x844` rendering.
5. Push to `main`, confirm GitHub Actions success, and verify live HTTP responses.
