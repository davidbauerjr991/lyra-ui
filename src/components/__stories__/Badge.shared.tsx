/* Shared example data for Badge.stories.tsx (Default playground) and
   Badge.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import type { BadgeColor, BadgePillVariant, BadgeCircleVariant, BadgeSize } from "../badge";

export const COLORS: BadgeColor[] = [
  "slate", "red", "orange", "yellow", "lime",
  "green", "teal", "blue", "purple", "pink",
];

export const PILL_VARIANTS: BadgePillVariant[] = ["subtle", "solid"];

export const CIRCLE_VARIANTS: BadgeCircleVariant[] = [
  "default", "info", "success", "warning", "critical", "neutral",
];

export const BADGE_SIZES: BadgeSize[] = ["sm", "md", "lg"];
