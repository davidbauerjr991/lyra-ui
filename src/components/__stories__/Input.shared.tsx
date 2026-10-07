import { Pencil, Settings, Copy } from "lucide-react";
import { Button } from "../button";

/* Shared by Input.stories.tsx and Input.variants.stories.tsx. */

export const HELP_TEXT = "Helpful context about this field.";

const PLACEHOLDER_ICONS = [Pencil, Settings, Copy];

export type PlaceholderButtonVariant = "default" | "destructive" | "warning" | "success" | "outline" | "ghost";
export type PlaceholderButtonSize = "sm" | "default" | "lg" | "xl";

// Same height scale as `Button`: sm 24px, default 32px, lg 36px, xl 40px, so an
// icon button and a text button at the same size sit flush.
const ICON_SIZE_MAP: Record<PlaceholderButtonSize, string> = {
  sm: "icon-sm",
  default: "icon-md",
  lg: "icon-lg",
  xl: "icon-xl",
};

/* Placeholder action buttons used next to a label or field. Icon buttons are
   icon-only; text buttons are labeled "Action". */
export function PlaceholderButtons({
  iconOnly = true,
  count = 2,
  variant = "ghost",
  size = "sm",
}: {
  iconOnly?: boolean;
  count?: number;
  variant?: PlaceholderButtonVariant;
  size?: PlaceholderButtonSize;
}) {
  return (
    <>
      {iconOnly
        ? PLACEHOLDER_ICONS.slice(0, count).map((Icon, i) => (
            <Button key={i} variant={variant} size={ICON_SIZE_MAP[size] as any} title="Placeholder action">
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </Button>
          ))
        : Array.from({ length: count }).map((_, i) => (
            <Button key={i} variant={variant} size={size}>Action</Button>
          ))}
    </>
  );
}
