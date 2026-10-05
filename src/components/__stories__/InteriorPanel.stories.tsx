import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InteriorPanel } from "../interior-panel";
import { PageHeader } from "../page-header";
import { Button } from "../button";
import { Input } from "../input";
import { TabList, Tab } from "../tabs";

/* ── InteriorPanel stories ──
   Split out of the old unified `Panel.stories.tsx` — see side-panel.tsx and
   interior-panel.tsx doc comments for why `SidePanel` and `InteriorPanel`
   are two separate components rather than one `variant` prop. Exactly two
   stories here: one per side (`side="left"` / `side="right"`), named with
   an explicit "— Left"/"— Right" suffix on both so neither reads as an
   unlabeled/ambiguous default — see `SidePanel.stories.tsx` for the
   matching pair on the other panel type.

   Both stories now carry a `PageHeader` above the panel row with a plain
   primary "Toggle Panel" action (not `PageHeader`'s own `panelToggle` icon
   prop — a real, labeled action button per the request) wired to real
   `useState` so the panel actually opens/closes, rather than the previous
   `open` hardcoded to `true` with a no-op `onClose`.

   A third story, `WithTabs`, demonstrates `headerTabs` — a `TabList`
   rendered inside the header itself (via `ContainerHeader`'s own `tabs`
   slot, see container-header.tsx), below the title/subhead row. This
   replaced an earlier approach (a `sticky`-positioned `TabList` living
   inside `children`, i.e. inside `PanelContent`'s scroll region) that had
   two real problems: the surrounding container's own scrollbar still ran
   alongside a merely-`sticky` row instead of a genuinely fixed one, and
   `TabList`'s "N More" overflow dropdown had a separate bug (fixed
   separately in tabs.tsx) where selecting a tab from it did nothing once
   the row collapsed. `headerTabs` sidesteps both by keeping the tabs
   outside the scrolling body entirely.

   A fourth, `WithFullScreen`, demonstrates `allowFullScreen` — see that
   prop's own doc comment in interior-panel.tsx. `Right` also exposes
   `allowFullScreen` as a live Storybook Control (`argTypes` below,
   `args` on that story) rather than only a fixed demo, since it's a
   genuine opt-in toggle a consumer might want to flip on/off per usage —
   the other stories stay plain fixed demos, same as before this existed. */

const meta: Meta<typeof InteriorPanel> = {
  title: "Custom Primitives/InteriorPanel",
  component: InteriorPanel,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    allowFullScreen: { control: "boolean", name: "Allow full screen" },
  },
};

export default meta;
type Story = StoryObj<typeof InteriorPanel>;

export const Right: Story = {
  name: "Interior Panel — Right",
  args: {
    allowFullScreen: false,
  },
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader
          title="Page Title"
          actions={<Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>}
          className="bg-lyra-bg-surface-base"
        />
        {/* `relative` here matters: `InteriorPanel` switches to `position:
            absolute; top: 0; height: 100%` below 1440px of THIS row's own
            width (see interior-panel.tsx's `isNarrow` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel
            side="right"
            open={open}
            headerTitle="Dialog Title"
            allowFullScreen={args.allowFullScreen}
            onClose={() => setOpen(false)}
            footer={<><Button variant="outline">Cancel</Button><Button>Save</Button></>}
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>
    );
  },
};

export const WithFullScreen: Story = {
  name: "Interior Panel — With Full Screen Toggle",
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader
          title="Page Title"
          actions={<Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>}
          className="bg-lyra-bg-surface-base"
        />
        {/* `relative` here matters — see the Right story's own doc comment
            on this same div for why. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel
            side="right"
            open={open}
            headerTitle="Wide Report"
            headerSubhead="Click the full-screen icon in the header to expand"
            allowFullScreen
            onClose={() => setOpen(false)}
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>
    );
  },
};

export const WithTabs: Story = {
  name: "Interior Panel — With Tabs",
  render: () => {
    const [open, setOpen] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Overview", "Detail", "History"];
    return (
      <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader
          title="Page Title"
          actions={<Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>}
          className="bg-lyra-bg-surface-base"
        />
        {/* `relative` here matters — see the Right/Left stories' own doc
            comment on this same div for why. */}
        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel
            side="right"
            open={open}
            headerTitle="Customer Information"
            headerSubhead="Noah Bennett · CST-10296"
            headerTabs={
              <TabList className="px-4">
                {tabs.map((label, i) => (
                  <Tab key={label} active={activeTab === i} onClick={() => setActiveTab(i)}>
                    {label}
                  </Tab>
                ))}
              </TabList>
            }
            onClose={() => setOpen(false)}
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Name" placeholder="Enter name" />
              <Input label="Description" placeholder="Enter description" />
              <Input label="Value" placeholder="Enter value" />
            </div>
          </InteriorPanel>
        </div>
      </div>
    );
  },
};

export const Left: Story = {
  name: "Interior Panel — Left",
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <PageHeader
          title="Page Title"
          actions={<Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>}
          className="bg-lyra-bg-surface-base"
        />
        {/* `relative` here matters: `InteriorPanel` switches to `position:
            absolute; top: 0; height: 100%` below 1440px of THIS row's own
            width (see interior-panel.tsx's `isNarrow` check against its
            parent element) — without a positioned ancestor of its own, it
            anchors to the next positioned ancestor up the tree (or the
            viewport, if none), which renders it over the PageHeader instead
            of confined to the area below it, exactly like admin-shell.tsx's
            own "Interior panels row" already documents/guards against. */}
        <div className="relative flex flex-1 overflow-hidden">
          <InteriorPanel
            side="left"
            open={open}
            headerTitle="Filters"
            onClose={() => setOpen(false)}
            footer={<><Button variant="outline">Reset</Button><Button>Apply</Button></>}
          >
            <div className="flex flex-col gap-4 px-4 py-4">
              <Input label="Search" placeholder="Filter by name..." />
              <Input label="Category" placeholder="Select category..." />
            </div>
          </InteriorPanel>
          <div className="flex-1 bg-lyra-bg-surface-base" />
        </div>
      </div>
    );
  },
};

/* ── In-Contact Configuration (agent-next-gen-v3) ──
   Not a lyra-ui component — `InContactInteriorPanel` is an app-level
   wrapper (agent-next-gen-v3/src/components/agent-next-gen-in-contact-
   panel.tsx) around this exact `InteriorPanel`, hardcoding one shared
   config so its callers can't drift (per that file's own doc comment,
   written after an explicit audit found two callers — the "View customer
   info" overlay and the Marcus Webb card's shared detail panel — had
   silently diverged): `allowFullScreen`, `overlayHeader` (see that prop's
   own doc comment — used to be hand-rolled here as
   `absoluteBreakpoint={Infinity}` + `maxWidth={Infinity}` before
   `overlayHeader` existed), and a `z-[5]` layering to sit under that
   app's shared AI/Notifications/Search panel and left-nav collapse
   chevron (app-specific, not reproduced here — `closeIcon` is left at
   this component's own default `X` too, per that wrapper's own most
   recent change).

   Unlike every OTHER story on this page, the record header here
   ("Liam Whitfield" — matching the real customer this scenario belongs to
   in agent-next-gen-v3's own mock data) is mounted INSIDE the same
   `relative` box the panel measures as its parent, not as a `PageHeader`
   sibling above it — reproducing exactly how agent-next-gen-v3 mounts
   `InContactInteriorPanel` alongside its own record header, per an
   explicit follow-up request ("the incontactInteriorContainer is over
   the page header ... this is desired behavior"). That placement is
   what makes `overlayHeader` visibly cover the header once enabled —
   the prop itself doesn't reposition anything (see its own doc comment);
   toggle it off below to see the same markup fall back to a normal
   width-squeezing docked panel that leaves the header alone, same as
   `InteriorPanel` everywhere else in this file. */
function InContactConfigurationDemo({
  overlayHeader = true,
  containerWidth = 1600,
}: {
  overlayHeader?: boolean;
  containerWidth?: number;
}) {
  const [open, setOpen] = useState(true);
  return (
    // No `maxWidth: "100%"` cap here (unlike this file's other sized
    // demos) — deliberately: capping to the visible canvas pane would
    // silently clamp this box under 1440px on most real screens/panel
    // widths (the Controls panel alone easily eats enough width for
    // that), which forces `isNarrow` (interior-panel.tsx) true on its
    // own regardless of the `containerWidth` control OR `overlayHeader`
    // — exactly the "toggling overlayHeader off still shows it covering
    // the header" bug report. Letting the box render at its literal
    // `containerWidth` (scrolling the canvas horizontally if needed)
    // means the ResizeObserver this component reads actually sees the
    // width the slider says, so `overlayHeader: false` at a wide
    // `containerWidth` genuinely reaches the docked, non-covering branch.
    <div
      className="h-[500px] relative flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle"
      style={{ width: containerWidth }}
    >
      <div className="flex items-center justify-between gap-3 border-b border-lyra-border-subtle bg-lyra-bg-surface-base px-4 py-3">
        <span className="lyra-heading-sm text-lyra-fg-default">Liam Whitfield</span>
        <Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>
      </div>
      <div className="flex-1 bg-lyra-bg-surface-base" />
      <InteriorPanel
        side="right"
        open={open}
        headerTitle="Customer Information"
        headerSubhead="Liam Whitfield · CST-10296"
        allowFullScreen
        overlayHeader={overlayHeader}
        className="z-[5]"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          <Input label="Name" placeholder="Enter name" />
          <Input label="Description" placeholder="Enter description" />
          <Input label="Value" placeholder="Enter value" />
        </div>
      </InteriorPanel>
    </div>
  );
}

type InContactConfigurationStory = StoryObj<typeof InContactConfigurationDemo>;

export const InContactConfiguration: InContactConfigurationStory = {
  name: "Interior Panel — In-Contact Configuration (agent-next-gen-v3)",
  // `meta.component` is `InteriorPanel`, so the Controls addon auto-infers
  // a control for every ONE of ITS props (side/open/resizable/minWidth/
  // storageKey/headerTitle/...) — real for the plain InteriorPanel stories
  // above, but this story renders `InContactConfigurationDemo` instead
  // (its own args don't map 1:1 onto InteriorPanel — same reason
  // AgentSearch.stories.tsx's own `AgentSearchDemo` wrapper exists), which
  // only reads `overlayHeader`/`containerWidth` out of `args` — every
  // other inferred control was doing nothing when clicked, exactly the
  // "controls don't seem to do anything" bug report. `controls.include`
  // scopes the panel to just the two args this story's `render` actually
  // consumes, instead of quietly ignoring the rest.
  parameters: {
    controls: { include: ["overlayHeader", "containerWidth"] },
  },
  args: {
    overlayHeader: true,
    containerWidth: 1600,
  },
  argTypes: {
    overlayHeader: {
      control: "boolean",
      description:
        "Same prop as InteriorPanel's own. On: always the absolute-overlay layout, so it covers the \"Liam Whitfield\" header row above (mounted inside the same relative box the panel measures as its parent). Off: falls back to InteriorPanel's plain width-squeezing docked behavior, which never covers anything.",
    },
    containerWidth: {
      control: { type: "range", min: 600, max: 1800, step: 20 },
      description:
        "Width of the row InteriorPanel measures as its parent. With overlayHeader off, drag below 1440px (the Right story's own default breakpoint) to see it switch into the same overlay layout \"On\" forces permanently \u2014 and, since the header is co-located here, cover the header too, purely as a side effect of width rather than intent. That's the difference overlayHeader is for: a deliberate, width-independent guarantee instead of an incidental one.",
    },
  },
  render: (args) => <InContactConfigurationDemo {...args} />,
};
