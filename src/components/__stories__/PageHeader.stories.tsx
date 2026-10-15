import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { User, PhoneCall, ChevronRight, CircleCheck } from "lucide-react";
import { PageHeader } from "../page-header";
import { Button } from "../button";
import { Link } from "../link";
import { AiIcon } from "../icons/ai-icon";

/* Interactive playground for PageHeader. Every layout, panel-toggle and record-header example lives
   on the Variants page (UI/PageHeader/Variants). */

type LayoutOption = "plain" | "record" | "breadcrumb";

interface PageHeaderDemoProps {
  layout?: LayoutOption;
  title?: string;
  showSubtitle?: boolean;
  subtitle?: string;
  badge?: string;
  badgeColor?: string;
  badgeVariant?: "subtle" | "solid";
  titleSize?: "lg" | "2xl";
  bordered?: boolean;
  compact?: boolean;
  iconDivider?: boolean;
  panelToggle?: "none" | "left" | "right" | "both";
  showActions?: boolean;
  breadcrumbTrail?: string;
  breadcrumbLinks?: boolean;
  showDetailsRow?: boolean;
  detailsChannel?: string;
  detailsText?: string;
}

function PageHeaderDemo({
  layout = "plain",
  title = "Desktop Designs",
  showSubtitle = false,
  subtitle = "CS-1239930",
  badge = "",
  badgeColor = "green",
  badgeVariant = "subtle",
  titleSize = "lg",
  bordered = true,
  compact = false,
  iconDivider = true,
  panelToggle = "none",
  showActions = true,
  breadcrumbTrail = "Dashboards, Sales",
  breadcrumbLinks = false,
  showDetailsRow = false,
  detailsChannel = "Voice",
  detailsText = "(704) 555-0142 · # CTX-20261015-83128",
}: PageHeaderDemoProps) {
  // Comma-separated labels become the parent crumbs; the title is always the last crumb.
  const crumbs = breadcrumbTrail
    .split(",")
    .map((label) => label.trim())
    .filter(Boolean)
    .map((label) => (breadcrumbLinks ? { label, href: "#" } : { label }));
  return (
    <>
    <PageHeader
      title={title}
            subtitle={showSubtitle && subtitle ? subtitle : undefined}
      icon={layout === "record" ? <User className="h-5 w-5" strokeWidth={1.5} /> : undefined}
      iconDivider={iconDivider}
      breadcrumb={layout === "breadcrumb" && crumbs.length > 0 ? crumbs : undefined}
      badge={badge || undefined}
      badgeColor={badgeColor as never}
      badgeVariant={badgeVariant}
      titleSize={titleSize}
      // The details row draws its own bottom line, so the header's border is off while it shows.
      bordered={showDetailsRow ? false : bordered}
      // Compact drops the row's bottom padding, so the details row sits right under the header.
      compact={showDetailsRow ? true : compact}
      panelToggle={panelToggle === "none" ? undefined : panelToggle}
      actions={
        showActions ? (
          <>
            <Button variant="outline">Secondary</Button>
            <Button>Primary</Button>
            <div className="mx-1 h-6 w-px bg-lyra-border-subtle" />
            <Button variant="outline">
              <AiIcon className="h-4 w-4" />
              Ask AI
            </Button>
          </>
        ) : undefined
      }
    />
    {showDetailsRow && (
      // Details row under the header (a composition, not a PageHeader prop): channel | contact details | session link,
      // with the outcome on the right.
      <div className="mx-6 flex items-center justify-between gap-4 border-b border-lyra-border-subtle pb-3 pt-1">
        <div className="flex min-w-0 items-center gap-3 lyra-body-sm text-lyra-fg-secondary">
          <span className="inline-flex items-center gap-1.5">
            <PhoneCall className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            {detailsChannel}
          </span>
          <span className="h-4 w-px bg-lyra-border-strong" aria-hidden="true" />
          <span className="truncate">{detailsText}</span>
          <span className="h-4 w-px bg-lyra-border-strong" aria-hidden="true" />
          <Link size="sm" className="inline-flex items-center gap-1">
            Session Details
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
        <span className="inline-flex items-center gap-2 lyra-body-sm-emphasis text-lyra-fg-default">
          <CircleCheck className="h-5 w-5 text-lyra-fg-action" strokeWidth={1.5} aria-hidden="true" />
          Outcome
        </span>
      </div>
    )}
    </>
  );
}

const meta: Meta<typeof PageHeaderDemo> = {
  title: "UI/PageHeader",
  component: PageHeader as never,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof PageHeaderDemo>;

export const Default: Story = {
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display name, so names and keys are both listed.
      include: ["Layout", "Title", "Subtitle", "Subtitle text", "Badge", "Badge color", "Badge style", "Breadcrumb trail", "Breadcrumb links", "Title size", "Border", "Compact", "Icon divider", "Panel toggle", "Actions", "Details row", "Details channel", "Details text", "layout", "breadcrumbTrail", "breadcrumbLinks", "title", "showSubtitle", "subtitle", "badge", "badgeColor", "badgeVariant", "titleSize", "bordered", "compact", "iconDivider", "panelToggle", "showActions", "showDetailsRow", "detailsChannel", "detailsText"],
      sort: "none",
    },
  },
  args: {
    layout: "plain",
    title: "Desktop Designs",
    showSubtitle: false,
    subtitle: "CS-1239930",
    badge: "",
    badgeColor: "green",
    badgeVariant: "subtle",
    titleSize: "lg",
    bordered: true,
    compact: false,
    iconDivider: true,
    panelToggle: "none",
    showActions: true,
    breadcrumbTrail: "Dashboards, Sales",
    breadcrumbLinks: false,
    showDetailsRow: false,
    detailsChannel: "Voice",
    detailsText: "(704) 555-0142 · # CTX-20261015-83128",
  },
  argTypes: {
    layout: {
      name: "Layout",
      control: "radio",
      options: ["plain", "record", "breadcrumb"],
      labels: { plain: "Title", record: "Record (icon + subtitle)", breadcrumb: "Breadcrumb" },
      description: "Title layout: a plain title, a record header (`icon`), or a breadcrumb trail (`breadcrumb`).",
      table: { category: "Content", defaultValue: { summary: "plain" } },
    },
    breadcrumbTrail: {
      name: "Breadcrumb trail",
      control: "text",
      description: "Parent crumbs, comma-separated (`breadcrumb`). The title is the last crumb. Breadcrumb layout only; one crumb gives a single parent, several give a deeper trail.",
      table: { category: "Breadcrumb", defaultValue: { summary: "Dashboards, Sales" } },
    },
    breadcrumbLinks: {
      name: "Breadcrumb links",
      control: "boolean",
      description: "Render each parent crumb as a real link (`href` on each crumb) instead of a button. Breadcrumb layout only.",
      table: { category: "Breadcrumb", defaultValue: { summary: "false" } },
    },
    title: {
      name: "Title",
      control: "text",
      description: "Page title (`title`).",
      table: { category: "Content" },
    },
    showSubtitle: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a line under the title (`subtitle`). Works in every layout, including breadcrumb.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    subtitle: {
      name: "Subtitle text",
      control: "text",
      description: "The subtitle string. Only used while Subtitle is on.",
      if: { arg: "showSubtitle" },
      table: { category: "Content", defaultValue: { summary: "CS-1239930" } },
    },
    badge: {
      name: "Badge",
      control: "text",
      description: "Badge text shown after the title (`badge`). Leave empty for none.",
      table: { category: "Content" },
    },
    badgeColor: {
      name: "Badge color",
      control: "select",
      options: ["slate", "red", "orange", "yellow", "lime", "green", "teal", "blue", "purple", "pink", "success", "info", "warning", "critical"],
      description: "Badge color (`badgeColor`).",
      table: { category: "Appearance", defaultValue: { summary: "green" } },
    },
    badgeVariant: {
      name: "Badge style",
      control: "radio",
      options: ["subtle", "solid"],
      description: "Badge variant (`badgeVariant`).",
      table: { category: "Appearance", defaultValue: { summary: "subtle" } },
    },
    titleSize: {
      name: "Title size",
      control: "radio",
      options: ["lg", "2xl"],
      description: "Title heading size (`titleSize`): lg is 20px, 2xl is 28px for greeting-style headers.",
      table: { category: "Appearance", defaultValue: { summary: "lg" } },
    },
    bordered: {
      name: "Border",
      control: "boolean",
      description: "Bottom border (`bordered`).",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    compact: {
      name: "Compact",
      control: "boolean",
      description: "Shorter row (`compact`).",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    iconDivider: {
      name: "Icon divider",
      control: "boolean",
      description: "Divider between the icon and the title (`iconDivider`). Record layout only.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    panelToggle: {
      name: "Panel toggle",
      control: "radio",
      options: ["none", "left", "right", "both"],
      description: "Which panel toggle buttons show (`panelToggle`).",
      table: { category: "Behavior", defaultValue: { summary: "none" } },
    },
    showDetailsRow: {
      name: "Details row",
      control: "boolean",
      description: "Show a details row under the header: channel, contact details, a Session Details link and an Outcome. The header's own bottom border and bottom padding turn off while it's on. It's a composition shown with the header, not a PageHeader prop.",
      table: { category: "Details row", defaultValue: { summary: "false" } },
    },
    detailsChannel: {
      name: "Details channel",
      control: "select",
      options: ["Voice", "Chat", "Email", "SMS"],
      description: "Channel label at the start of the row.",
      if: { arg: "showDetailsRow" },
      table: { category: "Details row", defaultValue: { summary: "Voice" } },
    },
    detailsText: {
      name: "Details text",
      control: "text",
      description: "Contact details shown after the channel.",
      if: { arg: "showDetailsRow" },
      table: { category: "Details row" },
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show the example buttons on the right (`actions`).",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
  },
  render: (args) => <PageHeaderDemo {...args} />,
};
