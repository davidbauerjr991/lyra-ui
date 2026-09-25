import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { User } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

/* ── Types ── */

export type AvatarSize = "xs" | "sm" | "md" | "lg";
export type AvatarShape = "circle" | "rounded";
export type AvatarColor =
  | "primary"
  | "active"
  | "success"
  | "warning"
  | "critical"
  | "info"
  | "neutral"
  | "surface"
  | "shell"
  /**
   * The "customer" chat-bubble accent (`bg-lyra-accent-green-soft`/
   * `text-lyra-accent-green-strong`) — `InteractionTranscript`'s own
   * customer-side message avatar and "customer is typing" indicator
   * (agent-next-gen-transcript.tsx) both already used this exact pair
   * hand-rolled; distinct from `success` (`status-success-*`, a
   * completion/positive-outcome color, not a person's identity color).
   */
  | "customer";

export interface AvatarProps {
  /**
   * Initials text (typically 1–2 characters, e.g. `initialsFor(name)`).
   * Takes priority over `icon` when both are given — an identified person
   * gets their initials, an unidentified/generic one gets the fallback
   * glyph. Omit both to render an empty (color-only) circle/square.
   */
  initials?: string;
  /**
   * Fallback glyph shown when `initials` is omitted or falsy — e.g. a
   * plain `User` for an unmatched contact, `Headphones` for an
   * agent-to-agent call. Defaults to lucide's `User` so a caller with no
   * real identity yet (and no explicit icon) still gets a sensible
   * generic-contact look rather than an empty circle.
   */
  icon?: LucideIcon;
  size?: AvatarSize;
  /**
   * `circle` (the default, matching the call-controls/contact-overview
   * avatar chips already in this app) or `rounded` (the small square
   * corners `InteractionNavItem`'s own collapsed-tile avatar uses).
   */
  shape?: AvatarShape;
  /** One of this library's own `Icon`-style background tokens. */
  color?: AvatarColor;
  className?: string;
  /**
   * Accessible name. Omit for a purely decorative avatar sitting next to
   * visible name text elsewhere (the common case — matches every existing
   * avatar chip in this app, all of which are `aria-hidden`); pass one
   * only when this avatar is the sole way to identify who/what it stands
   * for.
   */
  "aria-label"?: string;
}

/* ── CVA definitions ── */

const avatarVariants = cva("inline-flex shrink-0 items-center justify-center", {
  variants: {
    size: {
      // Matches the chat-bubble avatars in `InteractionTranscript`'s
      // "customer is typing" indicator and the Marcus Webb AI chat
      // bubbles (`agent-next-gen-marcus-webb-next-best-action-card.tsx`)
      // — smaller than any other avatar chip in this app, since it sits
      // right next to a message bubble rather than a name/title line.
      xs: "h-7 w-7",
      // Matches `InteractionNavItem`'s own collapsed-tile avatar (32px).
      sm: "h-8 w-8",
      // Matches `VoiceCallControls`'/`ContactOverview`'s own avatar chips
      // (36px) — same footprint as `Icon`'s own `size="md"` circle
      // container, so this drops in for the record-header avatar's prior
      // `Icon` usage with no layout shift.
      md: "h-9 w-9",
      // Matches `Icon`'s own `size="lg"` circle container (44px), for a
      // more prominent standalone avatar (e.g. a future full profile
      // header) than any existing chip currently needs.
      lg: "h-11 w-11",
    },
    shape: {
      circle: "rounded-full",
      // `InteractionNavItem`'s own collapsed-tile avatar's exact corner
      // radius, not `Icon`'s own (larger) `rounded-lyra-md` default.
      rounded: "rounded-lyra-sm",
    },
    color: {
      primary: "bg-lyra-bg-primary text-lyra-fg-on-primary",
      active: "bg-lyra-bg-active-subtle text-lyra-fg-active-strong",
      success: "bg-lyra-status-success-subtle text-lyra-status-success-strong",
      warning: "bg-lyra-status-warning-subtle text-lyra-status-warning-strong",
      critical: "bg-lyra-status-critical-subtle text-lyra-status-critical-strong",
      info: "bg-lyra-accent-purple-soft text-lyra-accent-purple-strong",
      neutral: "bg-lyra-bg-surface-container-subtle text-lyra-fg-secondary",
      surface: "bg-lyra-bg-surface-base border border-lyra-border-subtle text-lyra-fg-default",
      shell: "bg-lyra-bg-surface-shell text-lyra-fg-secondary",
      customer: "bg-lyra-accent-green-soft text-lyra-accent-green-strong",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
    color: "shell",
  },
});

// Initials label text per avatar size — `lyra-label` (there's no
// `lyra-label-sm` in this design system's type scale) for `sm`/`md`/`lg`,
// same size `ContactOverview`'s own identity-card avatar already uses at
// its 36px circle; `xs`'s smaller 28px chat-bubble circle steps down to
// `lyra-body-sm-emphasis` instead, matching what `InteractionTranscript`'s
// own "customer is typing" indicator already hand-rolled at that size.
const AVATAR_LABEL_CLASS: Record<AvatarSize, string> = {
  xs: "select-none lyra-body-sm-emphasis",
  sm: "select-none lyra-label",
  md: "select-none lyra-label",
  lg: "select-none lyra-label",
};

// Fallback-glyph icon size per avatar size — every existing hand-rolled
// avatar chip in this app (`VoiceCallControls`, `InteractionNavItem`) uses
// a `h-4 w-4` glyph regardless of its own `sm`/`md` container, so this
// preserves that exact look; `lg` steps up to `h-5 w-5` to stay
// proportionate in the bigger circle. `xs`'s smaller 28px chat-bubble
// circle steps down to `h-3.5 w-3.5`, matching the Marcus Webb AI
// avatar's own `Bot` glyph size at this footprint (the transcript typing
// indicator's own `User` fallback was `h-4 w-4` — a 2px difference,
// negligible at this size, folded into this one shared size now).
const AVATAR_ICON_CLASS: Record<AvatarSize, string> = {
  xs: "h-3.5 w-3.5",
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

/* ── Component ── */

/**
 * A person/contact avatar — initials when identity is known, a generic
 * fallback glyph otherwise. Every avatar-shaped chip already hand-built
 * across this app (`VoiceCallControls`'s customer chip, `ContactOverview`'s
 * identity card, `InteractionNavItem`'s collapsed-tile avatar, and
 * agent-next-gen-v3's own record-header avatar) followed this exact same
 * `initials ?? fallbackIcon` shape independently — this component is that
 * shared shape pulled out once, not a new pattern. Existing call sites are
 * left as-is (no lyra-ui component changes without being asked); new call
 * sites (starting with agent-next-gen-v3's record header) use this.
 */
export function Avatar({
  initials,
  icon: IconGlyph = User,
  size = "md",
  shape = "circle",
  color = "shell",
  className,
  ...rest
}: AvatarProps) {
  const ariaLabel = rest["aria-label"];
  return (
    <span
      className={cn(avatarVariants({ size, shape, color }), className)}
      {...(ariaLabel ? { role: "img", "aria-label": ariaLabel } : { "aria-hidden": true })}
    >
      {initials ? (
        <span className={AVATAR_LABEL_CLASS[size]}>{initials}</span>
      ) : (
        <IconGlyph className={AVATAR_ICON_CLASS[size]} strokeWidth={1.5} aria-hidden="true" />
      )}
    </span>
  );
}

export { avatarVariants };
