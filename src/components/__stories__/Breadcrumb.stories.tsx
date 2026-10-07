import type { Meta, StoryObj } from "@storybook/react";
import { Fragment, useState, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "../breadcrumb";
import {
  CRUMB_DASHBOARDS,
  CRUMB_SALES,
  CRUMB_Q2,
  CRUMB_Q3,
  CRUMB_DASHBOARD_NAME,
  CRUMB_PIPELINE,
  FIVE_CRUMBS,
} from "./Breadcrumb.shared";

const meta: Meta<typeof Breadcrumb> = {
  title: "Custom Primitives/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (two levels, multiple levels, with ellipsis, chevron separator,
   inside PageHeader) each have their own page under "Breadcrumb/Variants"
   — see Breadcrumb.variants.stories.tsx. */

/* ── Default — consolidated playground, previously four separate stories:
   Default, Multiple Levels, With Ellipsis, Custom Separator (Chevron).
   "Collapse" isn't its own toggle — a deep/collapsed trail is one of the
   "Levels" options, since collapsing only ever applies once there's a
   middle section long enough to collapse. Every crumb click updates the
   "Last clicked" line below, and the ellipsis (when "Levels" is "Deep
   Trail") opens a real Menu popover via `BreadcrumbEllipsis`'s own
   `KebabMenuButton`/Radix popover state — not something this story
   manages itself, since `BreadcrumbEllipsis` has no controlled-open prop
   to wire without touching breadcrumb.tsx. ── */

type Levels = "two" | "three" | "deep" | "five";
type Separator = "slash" | "chevron";

interface BreadcrumbDemoProps {
  levels?: Levels;
  separator?: Separator;
  links?: "buttons" | "href";
  appearance?: "auto" | "default" | "link";
  maxItems?: "none" | "3" | "4";
  collapseOnOverflow?: boolean;
}

function BreadcrumbDemo({
  levels = "two",
  separator = "slash",
  links = "buttons",
  appearance = "auto",
  maxItems = "none",
  collapseOnOverflow = false,
}: BreadcrumbDemoProps) {
  const [lastClicked, setLastClicked] = useState<string | null>(null);
  const sep =
    separator === "chevron" ? (
      <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
    ) : undefined;

  const parentLink = (label: string) => (
    <BreadcrumbItem key={label}>
      <BreadcrumbLink
        href={links === "href" ? `#${label.toLowerCase().replace(/\s+/g, "-")}` : undefined}
        appearance={appearance === "auto" ? undefined : appearance}
        onClick={(e) => {
          // The demo stays on this page; a real app would let the link navigate.
          e?.preventDefault?.();
          setLastClicked(label);
        }}
      >
        {label}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );

  let middle: ReactNode = null;
  let page = CRUMB_DASHBOARD_NAME;

  if (levels === "three") {
    middle = (
      <>
        {parentLink(CRUMB_SALES)}
        <BreadcrumbSeparator>{sep}</BreadcrumbSeparator>
      </>
    );
    page = CRUMB_PIPELINE;
  } else if (levels === "deep") {
    middle = (
      <>
        <BreadcrumbItem>
          <BreadcrumbEllipsis
            items={[CRUMB_SALES, CRUMB_Q2, CRUMB_Q3].map((label) => ({
              id: label,
              label,
              onClick: () => setLastClicked(label),
            }))}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator>{sep}</BreadcrumbSeparator>
      </>
    );
    page = CRUMB_PIPELINE;
  } else if (levels === "five") {
    middle = (
      <>
        {FIVE_CRUMBS.slice(1, -1).map((label) => (
          <Fragment key={label}>
            {parentLink(label)}
            <BreadcrumbSeparator>{sep}</BreadcrumbSeparator>
          </Fragment>
        ))}
      </>
    );
    page = CRUMB_PIPELINE;
  }

  return (
    // With "Collapse on overflow", drag the box's bottom-right corner to
    // narrow it and watch crumbs fold into the "…" menu.
    <div className={collapseOnOverflow ? "w-[480px] max-w-full resize-x overflow-hidden border border-dashed border-lyra-border-subtle p-2" : undefined}>
      <Breadcrumb>
        <BreadcrumbList
          maxItems={maxItems === "none" ? undefined : Number(maxItems)}
          collapseOnOverflow={collapseOnOverflow}
        >
          {parentLink(CRUMB_DASHBOARDS)}
          <BreadcrumbSeparator>{sep}</BreadcrumbSeparator>
          {middle}
          <BreadcrumbItem aria-current="page">
            <BreadcrumbPage>{page}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {lastClicked && (
        <p className="lyra-body-sm text-lyra-fg-secondary mt-2">Last clicked: {lastClicked}</p>
      )}
    </div>
  );
}

type BreadcrumbDemoStory = StoryObj<typeof BreadcrumbDemo>;

export const Default: BreadcrumbDemoStory = {
  // Curated via `controls.include` (not by disabling props on `meta`) so
  // the Docs page's autodocs table still lists every real Breadcrumb prop
  // — only this story's own Controls panel is scoped down to the two args
  // its render function actually reads.
  parameters: {
    controls: {
      include: [
        "Levels", "Separator", "Links", "Appearance", "Max items", "Collapse on overflow",
        "levels", "separator", "links", "appearance", "maxItems", "collapseOnOverflow",
      ],
      sort: "none",
    },
  },
  args: {
    levels: "two",
    separator: "slash",
    links: "buttons",
    appearance: "auto",
    maxItems: "none",
    collapseOnOverflow: false,
  },
  argTypes: {
    levels: {
      name: "Levels",
      control: "radio",
      options: ["two", "three", "deep", "five"],
      labels: { two: "Two", three: "Three", deep: "Deep (manual ellipsis)", five: "Five (plain)" },
      description:
        'Two levels (default), three levels, a deep trail with the middle collapsed by hand behind an ellipsis, or a plain five-crumb trail for trying "Max items" and "Collapse on overflow".',
      table: { category: "Content" },
    },
    separator: {
      name: "Separator",
      control: "radio",
      options: ["slash", "chevron"],
      description: 'The divider between crumbs — "/" (default) or a chevron icon.',
      table: { category: "Appearance" },
    },
    links: {
      name: "Links",
      control: "radio",
      options: ["buttons", "href"],
      labels: { buttons: "Buttons (onClick)", href: "Real links (href)" },
      description: "Parent crumbs as buttons with `onClick` (default), or real `<a href>` links (`href`) that can be opened in a new tab, copied and previewed.",
      table: { category: "Behavior", defaultValue: { summary: "buttons" } },
    },
    appearance: {
      name: "Appearance",
      control: "radio",
      options: ["auto", "default", "link"],
      labels: { auto: "Auto (link when href)", default: "Default (gray)", link: "Link (blue, underline on hover)" },
      description: "How parent crumbs look (`appearance`). Auto uses the link look for `href` crumbs and today's gray look for buttons.",
      table: { category: "Appearance", defaultValue: { summary: "auto" } },
    },
    maxItems: {
      name: "Max items",
      control: "select",
      options: ["none", "3", "4"],
      description: 'Most crumbs to show before the middle ones fold into a "…" menu (`maxItems` on `BreadcrumbList`). Try it with Levels "Five (plain)": 4 shows "Dashboards / … / Q3 / Q3 Pipeline".',
      table: { category: "Behavior", defaultValue: { summary: "none" } },
    },
    collapseOnOverflow: {
      name: "Collapse on overflow",
      control: "boolean",
      description: 'When the trail doesn\'t fit, fold crumbs into the "…" menu until it does (`collapseOnOverflow` on `BreadcrumbList`). The demo puts the trail in a box you can resize from its corner.',
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo whenever a control changes — `useState`'s
    // initial value only applies on first mount.
    <BreadcrumbDemo key={JSON.stringify(args)} {...args} />
  ),
};
