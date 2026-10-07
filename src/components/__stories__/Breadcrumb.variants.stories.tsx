import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";
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
import { PageHeader } from "../page-header";
import {
  CRUMB_DASHBOARDS,
  CRUMB_SALES,
  CRUMB_Q2,
  CRUMB_Q3,
  CRUMB_DASHBOARD_NAME,
  CRUMB_PIPELINE,
  FIVE_CRUMBS,
} from "./Breadcrumb.shared";

/* One page per Breadcrumb variant, shown under "Breadcrumb/Variants" in the
   sidebar. Static references for design review; the interactive playground
   is Breadcrumb → Default. "!autodocs" keeps this folder from getting a
   second Docs page. Previously one "All Variants" story covering every
   trail below — split per variant so each has its own clear name. */
const meta: Meta<typeof Breadcrumb> = {
  title: "Custom Primitives/Breadcrumb/Variants",
  component: Breadcrumb,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const TwoLevels: Story = {
  name: "Two Levels",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(`Go to ${CRUMB_DASHBOARDS}`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_DASHBOARD_NAME}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const MultipleLevels: Story = {
  name: "Multiple Levels",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(`Go to ${CRUMB_DASHBOARDS}`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(`Go to ${CRUMB_SALES}`)}>
            {CRUMB_SALES}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_PIPELINE}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

/* Collapses a long middle section of a deep trail. Passing `items` turns
   the ellipsis into a real trigger (built on `KebabMenuButton`) that opens
   a Menu popover listing the collapsed crumbs — click it to try it. */
export const WithEllipsis: Story = {
  name: "With Ellipsis",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(`Go to ${CRUMB_DASHBOARDS}`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis
            items={[CRUMB_SALES, CRUMB_Q2, CRUMB_Q3].map((label) => ({
              id: label,
              label,
              onClick: () => alert(`Go to ${label}`),
            }))}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_PIPELINE}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

/* `BreadcrumbSeparator` defaults to "/" — pass an icon as children to
   override (e.g. a chevron, matching more conventional breadcrumb UIs). */
export const ChevronSeparator: Story = {
  name: "Chevron Separator",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(`Go to ${CRUMB_DASHBOARDS}`)}>
            {CRUMB_DASHBOARDS}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert(`Go to ${CRUMB_SALES}`)}>
            {CRUMB_SALES}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>{CRUMB_PIPELINE}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

/* `PageHeader`'s own `breadcrumb` prop composes these same parts internally
   (see page-header.tsx) rather than hand-rolling its own trail — this is
   how agent-next-gen-v3 actually uses Breadcrumb: PageHeader's breadcrumb
   {label, onClick} on All Contacts (see PageHeader.stories.tsx's own "With
   Breadcrumbs" for the plain-PageHeader version of this same pattern). */
export const InPageHeader: Story = {
  name: "Inside PageHeader",
  render: () => (
    <PageHeader
      title={CRUMB_DASHBOARD_NAME}
      breadcrumb={[
        { label: CRUMB_DASHBOARDS, onClick: () => alert(`Go to ${CRUMB_DASHBOARDS}`) },
        { label: CRUMB_SALES, onClick: () => alert(`Go to ${CRUMB_SALES}`) },
      ]}
    />
  ),
};

/* A plain trail of `labels` (last one = current page). `href` makes the
   parents real links; extra props go to `BreadcrumbList`. */
function PlainTrail({ labels, href = false, ...listProps }: { labels: string[]; href?: boolean; maxItems?: number; collapseOnOverflow?: boolean }) {
  return (
    <Breadcrumb>
      <BreadcrumbList {...listProps}>
        {labels.map((label, i) => (
          <Fragment key={label}>
            {i > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem aria-current={i === labels.length - 1 ? "page" : undefined}>
              {i === labels.length - 1 ? (
                <BreadcrumbPage>{label}</BreadcrumbPage>
              ) : href ? (
                <BreadcrumbLink href={`#${label.toLowerCase()}`}>{label}</BreadcrumbLink>
              ) : (
                <BreadcrumbLink onClick={() => alert(`Go to ${label}`)}>{label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

/* `href` renders parents as real `<a href>` links in the link color, with an
   underline on hover and keyboard focus — they can be opened in a new tab,
   copied and previewed. Crumbs with only `onClick` keep today's look. */
export const RealLinks: Story = {
  name: "Real Links",
  render: () => (
    <div className="flex flex-col gap-6">
      <PlainTrail labels={[CRUMB_DASHBOARDS, CRUMB_DASHBOARD_NAME]} href />
      <PlainTrail labels={[CRUMB_DASHBOARDS, CRUMB_SALES, CRUMB_PIPELINE]} href />
      <PageHeader title={CRUMB_PIPELINE} breadcrumb={[{ label: CRUMB_DASHBOARDS, href: "#dashboards" }, { label: CRUMB_SALES, href: "#sales" }]} />
    </div>
  ),
};

/* `maxItems` folds the middle of a long trail into a "…" menu that lists the
   hidden crumbs. With 4: four crumbs show in full; five become
   "Dashboards / … / Q3 / Q3 Pipeline" (Sol's behavior). */
export const MaxItems: Story = {
  name: "Max Items",
  render: () => (
    <div className="flex flex-col gap-6">
      <PlainTrail labels={FIVE_CRUMBS.slice(1)} maxItems={4} />
      <PlainTrail labels={FIVE_CRUMBS} maxItems={4} />
      <PlainTrail labels={FIVE_CRUMBS} maxItems={4} href />
    </div>
  ),
};

/* `collapseOnOverflow` folds crumbs into the "…" menu until the trail fits
   its width (middle crumbs first, then the first one). Shown at three widths;
   the last box can be resized from its corner. */
export const CollapseOnOverflow: Story = {
  name: "Collapse On Overflow",
  render: () => (
    <div className="flex flex-col gap-6">
      {["w-[520px]", "w-[320px]", "w-[200px]"].map((width) => (
        <div key={width} className={`${width} max-w-full border border-dashed border-lyra-border-subtle p-2`}>
          <PlainTrail labels={FIVE_CRUMBS} collapseOnOverflow />
        </div>
      ))}
      <div className="w-[480px] max-w-full resize-x overflow-hidden border border-dashed border-lyra-border-subtle p-2">
        <PlainTrail labels={FIVE_CRUMBS} collapseOnOverflow />
      </div>
    </div>
  ),
};
