import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InteriorPanel } from "../interior-panel";
import { PageHeader } from "../page-header";
import { Button } from "../button";
import { Input } from "../input";
import { TabList, Tab } from "../tabs";
import { PanelForm, PanelTabs, panelFooter } from "./InteriorPanel.shared";
import { DRAG_HEADER_CLASS, headerActions, headerIcon, headerTag, withDragGrip } from "./Container.shared";

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
   prop's own doc comment in interior-panel.tsx. `allowFullScreen` is a live
   Storybook Control on `Default` only (it used to also be one on `Right`).

   Consolidation: `Default` below is the interactive playground (side,
   resizable, full-screen toggle, title/subtitle/tabs/footer). `Right`,
   `WithFullScreen`, `WithTabs` and `Left` are intentionally kept exactly as
   they were — `lyra-sol-compare/compare.config.json` pairs those four story
   IDs (custom-primitives-interiorpanel--right / --with-full-screen /
   --with-tabs / --left) with Sol's Panel stories, so their names, export
   names and content must not change. The static State/Header scenarios live
   under "InteriorPanel/Variants" (InteriorPanel.variants.stories.tsx); the
   app-level In-Contact overlay setup is `Default`'s "Cover page header"
   control. */

const meta: Meta<typeof InteriorPanel> = {
  title: "Custom Primitives/InteriorPanel",
  component: InteriorPanel,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof InteriorPanel>;

/* The four fixed demos below (Right, With Full Screen Toggle, With Tabs,
   Left) show no Controls panel — every prop they vary (side, tabs, full
   screen, subtitle, footer) is a control on Default instead. They stay as
   separate stories only because lyra-sol-compare pairs their story IDs. */
const NO_CONTROLS = { controls: { disable: true } };

/* ── Default — interactive playground ── */

interface InteriorPanelDemoProps {
  side?: "left" | "right";
  startOpen?: boolean;
  resizable?: boolean;
  width?: number;
  showCloseButton?: boolean;
  limitMinWidth?: boolean;
  minWidth?: number;
  limitMaxWidth?: boolean;
  maxWidth?: number;
  autoFullScreen?: boolean;
  coverHeader?: boolean;
  overlayAtBreakpoint?: boolean;
  breakpoint?: number;
  rounded?: boolean;
  margin?: boolean;
  shadow?: boolean;
  fullScreenToggle?: boolean;
  title?: string;
  showSubhead?: boolean;
  showTitle?: boolean;
  showDraggable?: boolean;
  showIcon?: boolean;
  showTag?: boolean;
  showActions?: boolean;
  showBack?: boolean;
  showTabs?: boolean;
  showFooter?: boolean;
  footerAlign?: "left" | "right" | "full";
  footerBordered?: boolean;
  footerScrollEffect?: "none" | "shadow" | "fade";
}

function InteriorPanelDemo({
  side = "right",
  startOpen = true,
  resizable = true,
  width = 350,
  showCloseButton = true,
  limitMinWidth = true,
  minWidth = 350,
  limitMaxWidth = true,
  maxWidth = 425,
  autoFullScreen = true,
  coverHeader = false,
  overlayAtBreakpoint = true,
  breakpoint = 1440,
  rounded = false,
  margin = false,
  shadow = false,
  fullScreenToggle = false,
  title = "Dialog Title",
  showSubhead = false,
  showTitle = true,
  showDraggable = false,
  showIcon = false,
  showTag = false,
  showActions = false,
  showBack = false,
  showTabs = false,
  showFooter = false,
  footerAlign = "right",
  footerBordered = false,
  footerScrollEffect = "shadow",
}: InteriorPanelDemoProps) {
  const [open, setOpen] = useState(startOpen);
  // Back arrow stands in for drilling into a sub-view: clicking it "returns" and hides the arrow.
  const [drilledIn, setDrilledIn] = useState(true);
  // Dummy main-content text so it's visible whether the panel squeezes the
  // content (docked) or floats over it (overlay).
  const filler = (
    <div className="flex-1 min-w-0 overflow-hidden bg-lyra-bg-surface-base p-6">
      <h2 className="lyra-heading-md text-lyra-fg-default mb-3">Main content</h2>
      {Array.from({ length: 6 }, (_, i) => (
        <p key={i} className="lyra-body-md text-lyra-fg-secondary mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
      ))}
    </div>
  );
  const pageHeader = (
    <PageHeader
      title="Page Title"
      actions={<Button onClick={() => setOpen((v) => !v)}>Toggle Panel</Button>}
      className="bg-lyra-bg-surface-base"
    />
  );
  const panel = (
    <InteriorPanel
      side={side}
      open={open}
      resizable={resizable}
      // Narrowest / widest while resizing; 350 / 425 are InteriorPanel's own defaults. Max never drops below min.
      // Off = no limit: min 0 (the panel still opens at 350 via `width`), max Infinity.
      minWidth={limitMinWidth ? minWidth : 0}
      width={width}
      maxWidth={limitMaxWidth ? Math.max(maxWidth, limitMinWidth ? minWidth : 0) : Infinity}
      // Overlay layout covering the page header (agent-next-gen-v3's
      // InContactInteriorPanel setup); z-[5] keeps it above the header.
      // Container width (px) below which the panel floats over the content instead of squeezing it; 1440 is InteriorPanel's own default.
      // 0 = never switch to the overlay layout (the container is never narrower than 0).
      absoluteBreakpoint={overlayAtBreakpoint ? breakpoint : 0}
      // Reaching 90% of the container → full screen.
      autoFullScreen={autoFullScreen}
      overlayHeader={coverHeader && overlayAtBreakpoint}
      className={coverHeader && overlayAtBreakpoint ? "z-[5]" : undefined}
      rounded={rounded}
      margin={margin}
      shadow={shadow}
      allowFullScreen={fullScreenToggle}
      headerTitle={showTitle ? title : undefined}
      headerWithoutTitle
      headerClassName={showDraggable ? DRAG_HEADER_CLASS : undefined}
      headerSubhead={showSubhead ? "Supporting description" : undefined}
      headerIcon={withDragGrip(showIcon ? headerIcon : undefined, showDraggable)}
      headerTitleBadge={showTag ? headerTag : undefined}
      headerActions={showActions ? headerActions : undefined}
      onBack={showBack && drilledIn ? () => setDrilledIn(false) : undefined}
      headerTabs={showTabs ? <PanelTabs /> : undefined}
      footer={showFooter ? panelFooter : undefined}
      footerAlign={footerAlign}
      footerBordered={footerBordered}
      footerScrollShadow={footerScrollEffect === "shadow"}
      footerScrollFade={footerScrollEffect === "fade"}
      onClose={showCloseButton ? () => setOpen(false) : undefined}
    >
      <PanelForm />
    </InteriorPanel>
  );

  // Cover the page header with the overlay on: the header and panel share ONE
  // `relative` box (the header as a normal-flow sibling before the panel), so
  // the panel's absolute overlay anchors to that box and renders on top of the
  // header — exactly how agent-next-gen-v3 mounts it. See `overlayHeader`'s doc
  // comment.
  if (coverHeader && overlayAtBreakpoint) {
    return (
      <div className="relative h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
        {pageHeader}
        {filler}
        {panel}
      </div>
    );
  }

  // Full-height panel with the overlay off: the panel docks beside a column
  // holding the header AND the content, so it pushes both instead of covering.
  // `relative` matters: full screen switches the panel to an absolute overlay,
  // which anchors to the nearest positioned ancestor — this box — so it takes
  // over the whole container (header included) instead of escaping it.
  if (coverHeader) {
    return (
      <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
        {side === "left" && panel}
        <div className="flex min-w-0 flex-1 flex-col">
          {pageHeader}
          {filler}
        </div>
        {side === "right" && panel}
      </div>
    );
  }

  return (
    <div className="h-[500px] flex flex-col overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
      {pageHeader}
      {/* `relative` keeps the panel confined below the PageHeader when it
          switches to its absolute overlay layout — see the Right story. */}
      <div className="relative flex flex-1 overflow-hidden bg-lyra-bg-surface-base">
        {side === "right" && filler}
        {panel}
        {side === "left" && filler}
      </div>
    </div>
  );
}

type InteriorPanelDemoStory = StoryObj<typeof InteriorPanelDemo>;

export const Default: InteriorPanelDemoStory = {
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches `include` against a control's display name when `name`
      // is set, so both the labels and the prop keys are listed.
      include: [
        "Side", "Starts open", "Resizable", "Width (px)", "Close button", "Min width", "Min width (px)", "Max width", "Max width (px)", "Auto full screen at 90%", "Cover page header", "Overlay breakpoint", "Overlay breakpoint (px)", "Full screen button", "Rounded corners", "Margin", "Shadow",
        "Title", "Title text", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Back button", "Tabs", "Footer", "Footer alignment", "Footer border", "Footer scroll effect",
        "side", "startOpen", "resizable", "width", "showCloseButton", "limitMinWidth", "minWidth", "limitMaxWidth", "maxWidth", "autoFullScreen", "coverHeader", "overlayAtBreakpoint", "breakpoint", "fullScreenToggle", "rounded", "margin", "shadow",
        "showTitle", "title", "showDraggable", "showSubhead", "showIcon", "showTag", "showActions", "showBack", "showTabs", "showFooter", "footerAlign", "footerBordered", "footerScrollEffect",
      ],
      sort: "none",
    },
  },
  args: {
    side: "right",
    startOpen: true,
    resizable: true,
    width: 350,
    showCloseButton: true,
    limitMinWidth: true,
    minWidth: 350,
    limitMaxWidth: true,
    maxWidth: 425,
    autoFullScreen: true,
    coverHeader: false,
    overlayAtBreakpoint: true,
    breakpoint: 1440,
    fullScreenToggle: false,
    rounded: false,
    margin: false,
    shadow: false,
    showTitle: true,
    showDraggable: false,
    title: "Dialog Title",
    showSubhead: false,
    showIcon: false,
    showTag: false,
    showActions: false,
    showBack: false,
    showTabs: false,
    showFooter: false,
    footerAlign: "right",
    footerBordered: false,
    footerScrollEffect: "shadow",
  },
  argTypes: {
    side: {
      name: "Side",
      control: "radio",
      options: ["left", "right"],
      description: "Which edge of the container the panel is docked to.",
      table: { category: "Behavior", defaultValue: { summary: "right" } },
    },
    startOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the panel is open when the story loads. Use \"Toggle Panel\" to open/close it afterwards.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    resizable: {
      name: "Resizable",
      control: "boolean",
      description: "Allow drag-to-resize on the panel's leading edge.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    width: {
      name: "Width (px)",
      control: { type: "number", min: 0, step: 10 },
      description: "Width the panel opens at, in pixels (`width`). Default is the panel's own 350.",
      table: { category: "Behavior", defaultValue: { summary: "350" } },
    },
    showCloseButton: {
      name: "Close button",
      control: "boolean",
      description: "Show the close (×) button at the far right of the header (`onClose`). Clicking it closes the panel.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    limitMinWidth: {
      name: "Min width",
      control: "boolean",
      description: "On: the panel can't be dragged narrower than the width set next. Off: no minimum while resizing (it still opens at 350px).",
      if: { arg: "resizable", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    minWidth: {
      name: "Min width (px)",
      control: { type: "number", min: 350, step: 5 },
      description: "Narrowest the panel can be, and the width it opens at, in pixels (`minWidth`). Default is the panel's own 350, which is also the lowest allowed here.",
      if: { arg: "limitMinWidth", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "350" } },
    },
    limitMaxWidth: {
      name: "Max width",
      control: "boolean",
      description: "On: the panel can't be dragged wider than the width set next. Off: no maximum while resizing.",
      if: { arg: "resizable", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    maxWidth: {
      name: "Max width (px)",
      control: { type: "number", min: 350, step: 5 },
      description: "Widest the panel can be dragged, in pixels (`maxWidth`). Default is the panel's own 425; enter a larger value to allow a wider panel.",
      if: { arg: "limitMaxWidth", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "425" } },
    },
    autoFullScreen: {
      name: "Auto full screen at 90%",
      control: "boolean",
      description: "When the panel reaches 90% of its container (dragging it wider, or the container shrinking), it jumps to full screen, and the header shows an exit button (`autoFullScreen`).",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    coverHeader: {
      name: "Cover page header",
      control: "boolean",
      description: "On: the panel runs the full height of the container, over the page header (`overlayHeader`) — the setup agent-next-gen-v3 uses. With \"Overlay breakpoint\" off, it instead sits beside the header and content and pushes both.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    overlayAtBreakpoint: {
      name: "Overlay breakpoint",
      control: "boolean",
      description: "On: the panel floats over the content when its container gets narrow (below the width set next). Off: it never switches to the overlay and always sits beside the content. With Cover page header on, turning this off docks the panel beside the header and content so it pushes both.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    breakpoint: {
      name: "Overlay breakpoint (px)",
      control: { type: "number", min: 0, step: 10 },
      description: "Container width below which the panel floats over the content instead of squeezing it (`absoluteBreakpoint`). Default is the panel's own 1440; enter any pixel value. Raise it to see the overlay layout sooner. Ignored while Cover page header is on, which always overlays (unless Overlay breakpoint is off).",
      if: { arg: "overlayAtBreakpoint", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "1440" } },
    },
    fullScreenToggle: {
      name: "Full screen button",
      control: "boolean",
      description: "Add a header button that expands the panel to the full width of its container (`allowFullScreen`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    showTitle: {
      name: "Title",
      control: "boolean",
      description: "Show the header title (`headerTitle`). Off gives an icon-only or action-only header.",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    title: {
      name: "Title text",
      if: { arg: "showTitle", truthy: true },
      control: "text",
      description: "Header title text (`headerTitle`).",
      table: { category: "Content" },
    },
    showDraggable: {
      name: "Draggable",
      control: "boolean",
      description: "Show the drag grip before the title and a grab cursor over the whole header, as in a floating panel. Placement only: it doesn't drag anything here.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (`headerSubhead`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show an icon to the left of the title (`headerIcon`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showTag: {
      name: "Alert tag",
      control: "boolean",
      description: "Show a status tag inline right after the title (`headerTitleBadge`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show an action button on the right of the header (`headerActions`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showBack: {
      name: "Back button",
      control: "boolean",
      description: "Show a back arrow before the title (`onBack`). Click it to hide it, as when leaving a sub-view.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showTabs: {
      name: "Tabs",
      control: "boolean",
      description: "Show a fixed tab row inside the header (`headerTabs`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showFooter: {
      name: "Footer",
      control: "boolean",
      description: "Show a footer with Cancel and Save buttons (`footer`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    footerAlign: {
      name: "Footer alignment",
      control: "radio",
      options: ["left", "right", "full"],
      description: "Where the footer's buttons sit: left, right, or stretched to full width (`footerAlign`).",
      if: { arg: "showFooter", truthy: true },
      table: { category: "Content", defaultValue: { summary: "right" } },
    },
    footerBordered: {
      name: "Footer border",
      control: "boolean",
      description: "Show a border along the top edge of the footer (`footerBordered`).",
      if: { arg: "footerScrollEffect", neq: "fade" },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    footerScrollEffect: {
      name: "Footer scroll effect",
      control: "radio",
      options: ["none", "shadow", "fade"],
      labels: { none: "None", shadow: "Shadow", fade: "Fade" },
      description: "What shows while content scrolls behind the footer: nothing, a soft shadow above it (`footerScrollShadow`), or the content fading out into it (`footerScrollFade`). Shadow and fade are alternatives; Fade also hides Footer border.",
      if: { arg: "showFooter", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "shadow" } },
    },
    rounded: {
      name: "Rounded corners",
      control: "boolean",
      description: "Round the panel's corners by 12px (`rounded`). With Margin on, all four corners round in any layout. Without it, only the inner corners (left when docked right, right when docked left) and only when the panel overlays the content (narrow container or Cover page header); a docked panel stays square.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    margin: {
      name: "Margin",
      control: "boolean",
      description: "Inset the panel 12px from every edge of its container, as a floating card (`margin`). Not applied while closed or full screen.",
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
    shadow: {
      name: "Shadow",
      control: "boolean",
      description: "Drop shadow under the floating panel (`shadow`). Only applies together with Margin.",
      if: { arg: "margin", truthy: true },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <InteriorPanelDemo key={JSON.stringify(args)} {...args} />
  ),
};

export const Right: Story = {
  name: "Interior Panel — Right",
  parameters: NO_CONTROLS,
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
          <div className="flex-1 bg-lyra-bg-surface-base" />
          <InteriorPanel
            side="right"
            open={open}
            headerTitle="Dialog Title"
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
  parameters: NO_CONTROLS,
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
  parameters: NO_CONTROLS,
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
  parameters: NO_CONTROLS,
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
