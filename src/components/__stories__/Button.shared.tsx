/* Shared example data for Button.stories.tsx (Default playground) and
   Button.variants.stories.tsx (Variants pages). Not a stories file — it only
   holds the fixtures both use, so the two can't drift apart. */
import { Sparkles, MoreVertical, ChevronDown, RefreshCw, Trash2 } from "lucide-react";

export { Sparkles, MoreVertical, ChevronDown, RefreshCw, Trash2 };

/** Text-button styles. Icon-only ghost buttons use `variant="icon"` (see
 *  `iconVariant`), matching the Lyra Figma matrix. */
export const BUTTON_STYLES = [
  { label: "Outline", variant: "outline", iconVariant: "outline" },
  { label: "Primary", variant: "default", iconVariant: "default" },
  { label: "Destructive", variant: "destructive", iconVariant: "destructive" },
  { label: "Ghost", variant: "ghost", iconVariant: "icon" },
] as const;

/** Text sizes, smallest to largest. */
export const TEXT_SIZES = [
  { size: "sm", px: "24px" },
  { size: "default", px: "32px" },
  { size: "lg", px: "36px" },
  { size: "xl", px: "40px" },
] as const;

/** Icon-only sizes, smallest to largest. `icon-2xl` is AppHeader's standard. */
export const ICON_SIZES = [
  { size: "icon-sm", px: "24px", iconClass: "h-3.5 w-3.5" },
  { size: "icon", px: "32px", iconClass: "h-4 w-4" },
  { size: "icon-lg", px: "36px", iconClass: "h-4 w-4" },
  { size: "icon-xl", px: "40px", iconClass: "h-4 w-4" },
  { size: "icon-2xl", px: "44px (AppHeader standard)", iconClass: "h-5 w-5" },
] as const;

/** Playground size scale → the matching icon-only size. */
export const ICON_SIZE_FOR = {
  sm: "icon-sm",
  default: "icon",
  lg: "icon-lg",
  xl: "icon-xl",
} as const;

export const MoreIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <MoreVertical className={className} strokeWidth={1.5} />
);
