import type { Config } from "tailwindcss";

const lyraPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        /* ── Lyra Semantic: Background ── */
        "lyra-bg-surface-base": "var(--lyra-color-bg-surface-base)",
        "lyra-bg-surface-canvas": "var(--lyra-color-bg-surface-canvas)",
        "lyra-bg-surface-container": "var(--lyra-color-bg-surface-container)",
        "lyra-bg-surface-container-subtle": "var(--lyra-color-bg-surface-container-subtle)",
        "lyra-bg-surface-shell": "var(--lyra-color-bg-surface-shell)",
        "lyra-bg-surface-backdrop": "var(--lyra-color-bg-surface-backdrop)",
        "lyra-bg-surface-overlay": "var(--lyra-color-bg-surface-overlay)",
        "lyra-bg-surface-inverse": "var(--lyra-color-bg-surface-inverse)",
        "lyra-bg-primary": "var(--lyra-color-bg-primary)",
        "lyra-bg-secondary": "var(--lyra-color-bg-secondary)",
        "lyra-bg-destructive": "var(--lyra-color-bg-destructive)",
        "lyra-bg-control": "var(--lyra-color-bg-control)",
        "lyra-bg-control-subtle": "var(--lyra-color-bg-control-subtle)",
        "lyra-bg-field": "var(--lyra-color-bg-field)",
        "lyra-bg-disabled": "var(--lyra-color-bg-disabled)",
        "lyra-bg-active-strong": "var(--lyra-color-bg-active-strong)",
        "lyra-bg-active-moderate": "var(--lyra-color-bg-active-moderate)",
        "lyra-bg-active-subtle": "var(--lyra-color-bg-active-subtle)",

        /* ── Lyra Semantic: Foreground / Text ── */
        "lyra-fg-default": "var(--lyra-color-fg-default)",
        "lyra-fg-secondary": "var(--lyra-color-fg-secondary)",
        "lyra-fg-action": "var(--lyra-color-fg-action)",
        "lyra-fg-disabled": "var(--lyra-color-fg-disabled)",
        "lyra-fg-link": "var(--lyra-color-fg-link)",
        "lyra-fg-inverse": "var(--lyra-color-fg-inverse)",
        "lyra-fg-on-primary": "var(--lyra-color-fg-on-primary)",
        "lyra-fg-active-subtle": "var(--lyra-color-fg-active-subtle)",
        "lyra-fg-active-strong": "var(--lyra-color-fg-active-strong)",

        /* ── Lyra Semantic: Border ── */
        "lyra-border-subtle": "var(--lyra-color-border-subtle)",
        "lyra-border-default": "var(--lyra-color-border-default)",
        "lyra-border-medium": "var(--lyra-color-border-medium)",
        "lyra-border-strong": "var(--lyra-color-border-strong)",
        "lyra-border-disabled": "var(--lyra-color-border-disabled)",
        "lyra-border-active": "var(--lyra-color-border-active)",
        "lyra-border-inverse": "var(--lyra-color-border-inverse)",
        "lyra-border-focus": "var(--lyra-color-border-focus-default)",

        /* ── Lyra Status ── */
        "lyra-status-success-strong": "var(--lyra-color-status-success-strong)",
        "lyra-status-success-medium": "var(--lyra-color-status-success-medium)",
        "lyra-status-success-subtle": "var(--lyra-color-status-success-subtle)",
        "lyra-status-info-strong": "var(--lyra-color-status-info-strong)",
        "lyra-status-info-medium": "var(--lyra-color-status-info-medium)",
        "lyra-status-info-subtle": "var(--lyra-color-status-info-subtle)",
        "lyra-status-critical-strong": "var(--lyra-color-status-critical-strong)",
        "lyra-status-critical-medium": "var(--lyra-color-status-critical-medium)",
        "lyra-status-critical-subtle": "var(--lyra-color-status-critical-subtle)",
        "lyra-status-warning-strong": "var(--lyra-color-status-warning-strong)",
        "lyra-status-warning-subtle": "var(--lyra-color-status-warning-subtle)",

        /* ── Lyra State border ── */
        "lyra-state-border-hover-neutral": "var(--lyra-color-state-border-hover-neutral)",

        /* ── Lyra State ── */
        "lyra-state-hover": "var(--lyra-color-state-bg-hover-opacity)",
        "lyra-state-pressed": "var(--lyra-color-state-bg-pressed-opacity)",
        "lyra-state-hover-primary": "var(--lyra-color-state-bg-hover-primary)",
        "lyra-state-pressed-primary": "var(--lyra-color-state-bg-pressed-primary)",
        "lyra-state-hover-active-subtle": "var(--lyra-color-state-bg-hover-active-subtle)",
        "lyra-state-pressed-active-subtle": "var(--lyra-color-state-bg-pressed-active-subtle)",
        "lyra-state-hover-critical-subtle": "var(--lyra-color-state-bg-hover-critical-subtle)",
        "lyra-state-pressed-critical-subtle": "var(--lyra-color-state-bg-pressed-critical-subtle)",
        "lyra-state-hover-destructive": "var(--lyra-color-state-bg-hover-destructive)",
        "lyra-state-pressed-destructive": "var(--lyra-color-state-bg-pressed-destructive)",

        /* ── Lyra Avatar ── */
        "lyra-avatar-default-bg": "var(--lyra-color-avatar-default-bg)",

        /* ── Lyra Accent ── */
        "lyra-accent-slate-strong": "var(--lyra-color-accent-slate-strong)",
        "lyra-accent-slate-soft":   "var(--lyra-color-accent-slate-soft)",
        "lyra-accent-purple-strong": "var(--lyra-color-accent-purple-strong)",
        "lyra-accent-purple-soft":   "var(--lyra-color-accent-purple-soft)",

        /* ── NICE CXone Brand ── */
        "cxone-navy": "#2a2d32",
      },
      borderRadius: {
        "lyra-none": "var(--lyra-radius-none)",
        "lyra-xs": "var(--lyra-radius-xs)",
        "lyra-sm": "var(--lyra-radius-sm)",
        "lyra-md": "var(--lyra-radius-md)",
        "lyra-lg": "var(--lyra-radius-lg)",
        "lyra-xl": "var(--lyra-radius-xl)",
        "lyra-round": "var(--lyra-radius-round)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      /* ── Accordion height animation ── kept in sync with the matching
         block in this repo's own tailwind.config.js (used for Storybook).
         `Accordion` (accordion.tsx) is built on `@radix-ui/react-accordion`,
         which exposes each item's measured open height as the
         `--radix-accordion-content-height` CSS variable; these keyframes
         animate between 0 and that variable. Consumers who extend this
         preset need this block too — without it, `Accordion`'s
         `data-[state=open]:animate-accordion-down` / `...-up` classes exist
         in the DOM but have no matching CSS rule, so the accordion still
         opens/closes correctly, just with the animation silently missing
         (snaps instead of animating). 200ms/ease-in-out matches the
         component's previous hand-rolled transition timing exactly. */
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
};

export default lyraPreset;
