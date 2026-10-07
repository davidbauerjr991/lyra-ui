/* Shared example data for Avatar.stories.tsx (Default playground) and
   Avatar.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import { Headphones, User, Bot, Bell, type LucideIcon } from "lucide-react";
import type { AvatarSize, AvatarShape, AvatarColor } from "../avatar";

export const AVATAR_SIZES: AvatarSize[] = ["xs", "sm", "md", "lg"];
export const AVATAR_SHAPES: AvatarShape[] = ["circle", "rounded"];

export const AVATAR_COLORS: [AvatarColor, string][] = [
  ["primary", "Primary"],
  ["active", "Active"],
  ["success", "Success"],
  ["warning", "Warning"],
  ["critical", "Critical"],
  ["info", "Info"],
  ["neutral", "Neutral"],
  ["surface", "Surface"],
  ["shell", "Shell"],
  ["customer", "Customer"],
];

/* What the Default playground's "Content" control can show: initials, or
   one of these glyphs (the fallback `icon` an avatar uses when it has no
   initials). Keyed by the control's option value. */
export const AVATAR_ICONS: Record<string, LucideIcon> = {
  user: User,
  headphones: Headphones,
  bot: Bot,
  bell: Bell,
};
