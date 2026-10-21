/* Shared example data for Container.stories.tsx (Default playground) and
   Container.variants.stories.tsx (Variants pages). Not a stories file — it
   only holds the fixtures both use, so the two can't drift apart. */
import { useState } from "react";
import type { ReactNode } from "react";
import { Box, GripVertical, Settings } from "lucide-react";
import { Container } from "../container";
import { Badge } from "../badge";
import { Button } from "../button";
import { Tag } from "../tag";
import { TabList, Tab } from "../tabs";

/* Every current (non-legacy) variant, in the order the Default playground's
   "Variant" select lists them. */
export const ALL_VARIANTS = [
  "default",
  "info-none",     "info-subtle",    "info-strong",    "info-dotted",
  "success-none",  "success-subtle", "success-strong", "success-dotted",
  "warning-none",  "warning-subtle", "warning-solid",  "warning-dotted",
  "error-none",    "error-subtle",   "error-strong",   "error-dotted",
  "neutral-none",  "neutral-subtle", "neutral-strong", "neutral-dotted",
  "purple-subtle",
  "popover", "modal",
] as const;

export type ContainerVariantName = (typeof ALL_VARIANTS)[number];

export const COLOR_GROUPS = [
  { label: "Info",    variants: ["info-none", "info-subtle", "info-strong", "info-dotted"] },
  { label: "Success", variants: ["success-none", "success-subtle", "success-strong", "success-dotted"] },
  { label: "Warning", variants: ["warning-none", "warning-subtle", "warning-solid", "warning-dotted"] },
  { label: "Error",   variants: ["error-none", "error-subtle", "error-strong", "error-dotted"] },
  { label: "Neutral", variants: ["neutral-none", "neutral-subtle", "neutral-strong", "neutral-dotted"] },
  { label: "Purple",  variants: ["purple-subtle"] },
] as const;

export const BASE_SURFACES = ["default", "popover", "modal"] as const;

/* Placeholder body used under a header in the playground and States page. */
export const BodyText = ({
  children,
  belowDivider = false,
}: {
  children: React.ReactNode;
  /** Adds 8px of space under a header divider (`headerBordered`). */
  belowDivider?: boolean;
}) => (
  <p className={`lyra-body-md text-lyra-fg-secondary px-5${belowDivider ? " pt-2" : ""}`}>{children}</p>
);

/* Legacy aliases (kept in container.tsx for backwards compatibility), each
   with the sample message the old per-variant stories used. */
export const LegacyExamples = () => (
  <div className="flex flex-col gap-4 max-w-sm">
    <Container variant="info" className="p-5">
      <p className="lyra-body-md text-lyra-fg-active-strong">
        AI Confidence: 78% — Based on 3 similar resolved cases and firmware documentation match.
      </p>
    </Container>
    <Container variant="success" className="p-5">
      <p className="lyra-body-md text-lyra-status-success-strong">
        Jordan's case has been successfully resolved. Configuration backed up.
      </p>
    </Container>
    <Container variant="warning" className="p-5">
      <p className="lyra-body-sm-emphasis text-lyra-status-warning-strong uppercase tracking-wide mb-1">
        Internal Note
      </p>
      <p className="lyra-body-md text-lyra-status-warning-strong">
        Awaiting Human Agent intervention — click to review AI recommendation.
      </p>
    </Container>
    <Container variant="critical" className="p-5">
      <p className="lyra-body-md text-lyra-status-critical-strong">
        Action failed. Please review and try again.
      </p>
    </Container>
    <Container variant="neutral-flat" className="p-5">
      <p className="lyra-heading-md text-lyra-fg-default mb-1">Welcome Back, Sarah Jones</p>
      <p className="lyra-body-sm text-lyra-fg-secondary">Last login Wed, Jun 3, 4:50 PM</p>
    </Container>
    <Container variant="neutral-card" className="p-5">
      <p className="lyra-heading-md text-lyra-fg-default mb-1">Total Scenarios</p>
      <p className="text-[40px] font-bold text-lyra-fg-default leading-none">519</p>
      <p className="lyra-body-sm text-lyra-fg-secondary mt-2">Completed simulation runs</p>
    </Container>
  </div>
);

/* Header slot fixtures — sample nodes for Container's `header*` slot props,
   used by both the Default playground (as on/off toggles) and the Variants
   pages. */
/* Placement-only "Draggable" header treatment for the playgrounds: a drag grip before the icon and a
   grab cursor over the whole header. Nothing drags (`Draggable` / `Modal`'s `draggable` do that). */
export const DRAG_HEADER_CLASS = "cursor-grab select-none active:cursor-grabbing";
export function withDragGrip(icon: ReactNode, draggable: boolean): ReactNode {
  if (!draggable) return icon;
  return (
    <span className="flex items-center gap-1.5">
      <span aria-hidden="true" className="flex text-lyra-fg-secondary">
        <GripVertical className="h-4 w-4" strokeWidth={1.5} />
      </span>
      {icon}
    </span>
  );
}

export const headerIcon = <Box className="h-5 w-5" strokeWidth={1.5} />;
export const headerTitleBadge = <Badge shape="circle" count={3} variant="default" size="sm" />;
/* Status tag used for both `headerTopSlot` (above the title) and
   `headerTitleBadge` (inline after it). */
export const headerTag = <Tag label="Alert" variant="critical" shape="pill" />;
export const headerActions = (
  <Button variant="ghost" size="icon" title="Settings">
    <Settings className="h-4 w-4" />
  </Button>
);

export const TITLE_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
export type TitleSize = (typeof TITLE_SIZES)[number];

/* Literal class strings so Tailwind's content scanner can find each one. */
export const TITLE_SIZE_CLASSES: Record<TitleSize, string> = {
  xs: "lyra-heading-xs",
  sm: "lyra-heading-sm",
  md: "lyra-heading-md",
  lg: "lyra-heading-lg",
  xl: "lyra-heading-xl",
  "2xl": "lyra-heading-2xl",
};

/* `headerTabs` content: a TabList wired to its own active-tab state. */
export function HeaderTabs() {
  const [active, setActive] = useState(0);
  return (
    <TabList className="px-4">
      {["Overview", "Detail", "History"].map((label, i) => (
        <Tab key={label} active={active === i} onClick={() => setActive(i)}>
          {label}
        </Tab>
      ))}
    </TabList>
  );
}

/* Footer fixture — two buttons, used by the Default playground and the
   Variants pages. */
export const footerButtons = (
  <>
    <Button variant="outline" size="md">Cancel</Button>
    <Button size="md">Save</Button>
  </>
);

export const FOOTER_ALIGNS = ["none", "left", "right", "full"] as const;
export type FooterAlignChoice = (typeof FOOTER_ALIGNS)[number];
