// Single source of truth for every consumer's color token map — see
// tailwind-tokens.cjs's own doc comment for why this is a plain `require`
// of a shared file rather than each project (including this one) keeping
// its own hand-copied object. Tailwind's own config loader already
// tolerates `require` inside this ESM file (see the plugins line below,
// which has always used it for `tailwindcss-animate`).
const lyraColors = require("./tailwind-tokens.cjs");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/components/__stories__/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      /* ── Lyra Spacing Scale (4px base unit) ── */
      spacing: {
        "lyra-0": "var(--lyra-spacing-0)",
        "lyra-05": "var(--lyra-spacing-05)",
        "lyra-1": "var(--lyra-spacing-1)",
        "lyra-2": "var(--lyra-spacing-2)",
        "lyra-3": "var(--lyra-spacing-3)",
        "lyra-4": "var(--lyra-spacing-4)",
        "lyra-5": "var(--lyra-spacing-5)",
        "lyra-6": "var(--lyra-spacing-6)",
        "lyra-7": "var(--lyra-spacing-7)",
        "lyra-8": "var(--lyra-spacing-8)",
        "lyra-9": "var(--lyra-spacing-9)",
        "lyra-10": "var(--lyra-spacing-10)",
      },
      /* ── Lyra Colors ── */
      // Sourced from tailwind-tokens.cjs (see its own doc comment) — the
      // single object every consumer's tailwind.config.js pulls from,
      // rather than each one (including this file, previously) keeping its
      // own hand-copied list that can silently drift out of sync.
      colors: {
        ...lyraColors,
        "cxone-navy": "#2a2d32",
      },
      /* ── Lyra Border Radius ── */
      borderRadius: {
        "lyra-none":  "var(--lyra-radius-none)",
        "lyra-xs":    "var(--lyra-radius-xs)",
        "lyra-sm":    "var(--lyra-radius-sm)",
        "lyra-md":    "var(--lyra-radius-md)",
        "lyra-lg":    "var(--lyra-radius-lg)",
        "lyra-xl":    "var(--lyra-radius-xl)",
        "lyra-round": "var(--lyra-radius-round)",
      },
      /* ── Font Family ── */
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      /* ── Accordion height animation ── `Accordion` (accordion.tsx) is
         built on `@radix-ui/react-accordion`, which exposes each item's
         measured open height as `--radix-accordion-content-height`; these
         keyframes animate between 0 and that variable, replacing the
         component's previous ResizeObserver + JS-measured-height approach
         (still used by `TreeMenu`'s own `CollapsiblePanel` in
         tree-menu.tsx, unaffected by this). 200ms/ease-in-out matches that
         prior approach's own transition timing exactly. Kept in sync with
         the identical block in src/tailwind-preset.ts — that's the copy
         consuming apps actually pull in, since this file only builds this
         repo's own Storybook. ── */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-in-out",
        "accordion-up": "accordion-up 200ms ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
