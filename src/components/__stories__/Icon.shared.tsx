/* Shared example data for Icon.stories.tsx (Default playground) and
   Icon.variants.stories.tsx (Variants pages). Not a stories file — it only
   holds the fixtures both use, so the two can't drift apart. */
import { Star, Bell, Settings, User, CheckCircle, Search, Mail, Download, type LucideIcon } from "lucide-react";
import type { IconColor, IconSize, IconBackground, IconShape } from "../icon";

export const ICON_SIZES: IconSize[] = ["xs", "sm", "md", "lg"];

export const ICON_COLORS: IconColor[] = [
  "default", "secondary", "action", "disabled", "inverse",
  "on-primary", "active-strong", "active-subtle",
  "status-success", "status-warning", "status-critical", "status-info",
  "inherit",
];

export const ICON_BACKGROUNDS: IconBackground[] = [
  "none", "primary", "active", "success", "warning", "critical", "info", "neutral", "surface", "shell",
];

export const ICON_SHAPES: IconShape[] = ["none", "rounded", "circle"];

/* Colors shown in the "All Variants" table (the swatch subset of ICON_COLORS). */
export const COLOR_SWATCHES: [IconColor, string][] = [
  ["default", "Default"],
  ["secondary", "Secondary"],
  ["action", "Action"],
  ["disabled", "Disabled"],
  ["active-strong", "Active Strong"],
  ["status-success", "Success"],
  ["status-warning", "Warning"],
  ["status-critical", "Critical"],
  ["status-info", "Info"],
];

/* Glyphs the Default playground's "Glyph" control can show, keyed by the
   control's option value. */
export const ICON_GLYPHS: Record<string, LucideIcon> = {
  star: Star,
  bell: Bell,
  settings: Settings,
  user: User,
  "check-circle": CheckCircle,
  search: Search,
  mail: Mail,
  download: Download,
};
