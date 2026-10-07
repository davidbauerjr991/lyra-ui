/* Shared example data for InlineNotification.stories.tsx (Default playground)
   and InlineNotification.variants.stories.tsx (Variants pages). Not a stories
   file — it only holds the fixtures both use, so the two can't drift apart. */

export const VARIANTS = ["warning", "error", "info", "success"] as const;
export type NotificationVariant = (typeof VARIANTS)[number];

/** Sample message for each variant. */
export const MESSAGES: Record<NotificationVariant, string> = {
  warning:
    "Advise users of conditions that need attention or could cause future problems if ignored.",
  error:
    "Highlight critical issues or failed requirements that prevent the user from completing a workflow.",
  info: "Important background information, upcoming changes, or neutral system status updates.",
  success: "Confirm completion of a major page-level process",
};

/** Sample title for each variant (`heading`). */
export const HEADINGS: Record<NotificationVariant, string> = {
  warning: "Storage almost full",
  error: "Payment failed",
  info: "Scheduled maintenance",
  success: "Changes saved",
};

/** A short text link for `actionPlacement="inline"` — a real link, styled with the link token. */
export const INLINE_LINK_CLASS =
  "lyra-body-md text-lyra-fg-link underline hover:no-underline rounded-lyra-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus";
