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

const meta: Meta<typeof Breadcrumb> = {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/* ── Default (matches the "Dashboards / Dashboard Name" reference design) ── */

export const Default: Story = {
  name: "Default",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Dashboard Name</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

/* ── Multiple Levels ──
   A deeper trail — every parent crumb is a `BreadcrumbLink`, only the last
   is the non-interactive `BreadcrumbPage`. `PageHeader`'s own `breadcrumb`
   prop now accepts an array for exactly this case (see PageHeader.stories
   "With Breadcrumbs"). */

export const MultipleLevels: Story = {
  name: "Multiple Levels",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Sales")}>Sales</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

/* ── With Ellipsis ──
   Collapses a long middle section of a deep trail. Passing `items` turns
   the ellipsis into a real trigger (built on `KebabMenuButton`) that opens
   a Menu popover listing the collapsed crumbs — click it to try it. */

export const WithEllipsis: Story = {
  name: "With Ellipsis",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis
            items={[
              { id: "sales", label: "Sales", onClick: () => alert("Go to Sales") },
              { id: "q2", label: "Q2", onClick: () => alert("Go to Q2") },
              { id: "q3", label: "Q3", onClick: () => alert("Go to Q3") },
            ]}
          />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

/* ── Custom Separator ──
   `BreadcrumbSeparator` defaults to "/" — pass an icon as children to
   override (e.g. a chevron, matching more conventional breadcrumb UIs). */

export const CustomSeparator: Story = {
  name: "Custom Separator (Chevron)",
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Dashboards")}>Dashboards</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => alert("Go to Sales")}>Sales</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </BreadcrumbSeparator>
        <BreadcrumbItem aria-current="page">
          <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

/* ── All Variants ── */

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Default (2 levels)</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Dashboard Name</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Multiple levels</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Sales</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">With ellipsis (click to open)</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis
                items={[
                  { id: "sales", label: "Sales" },
                  { id: "q2", label: "Q2" },
                  { id: "q3", label: "Q3" },
                ]}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-2">
        <p className="lyra-body-sm-emphasis text-lyra-fg-secondary">Custom (chevron) separator</p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Dashboards</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </BreadcrumbSeparator>
            <BreadcrumbItem aria-current="page">
              <BreadcrumbPage>Q3 Pipeline</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  ),
};
