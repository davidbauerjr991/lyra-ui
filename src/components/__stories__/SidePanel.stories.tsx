import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { SidePanel } from "../side-panel";
import { Button } from "../button";
import { PanelForm, PanelTabs } from "./InteriorPanel.shared";
import { DRAG_HEADER_CLASS, headerActions, headerIcon, headerTag, withDragGrip } from "./Container.shared";
import { MainContent, sideFooterButtons } from "./SidePanel.shared";

/* ── SidePanel stories ──
   Split out of the old unified `Panel.stories.tsx` — see side-panel.tsx and
   interior-panel.tsx doc comments for why `SidePanel` and `InteriorPanel`
   are two separate components rather than one `variant` prop. Exactly two
   stories here: one per side (`side="left"` / `side="right"`), named with
   an explicit "— Left"/"— Right" suffix on both so neither reads as an
   unlabeled/ambiguous default. Both start unpinned by default — only start
   a side panel pinned when a specific prototype actually calls for it.

   Consolidation: `Default` below is the interactive playground (side, pinned,
   pin button, resizing, widths, title/subtitle/icon/tag/actions/tabs/footer).
   `Left` and `Right` are intentionally kept exactly as they were —
   `lyra-sol-compare/compare.config.json` pairs those story IDs
   (custom-primitives-sidepanel--right / --left) with Sol's Side Panel stories,
   and lyra-ux-templates' AgentNextGenPage.tsx names "Side Panel — Left/Right"
   as its reference — so their names, export names and content must not
   change. They show no Controls panel; everything they vary is a control on
   `Default`. The view-switcher and PanelPinButton stories live under
   "SidePanel/Variants" (SidePanel.variants.stories.tsx). */

const meta: Meta<typeof SidePanel> = {
  title: "Custom Primitives/SidePanel",
  component: SidePanel,
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

/* ── Default — interactive playground ── */

interface SidePanelDemoProps {
  side?: "left" | "right";
  startOpen?: boolean;
  startPinned?: boolean;
  showPinButton?: boolean;
  showCloseButton?: boolean;
  resizable?: boolean;
  width?: number;
  limitMinWidth?: boolean;
  minWidth?: number;
  limitMaxWidth?: boolean;
  maxWidth?: number;
  autoFullScreen?: boolean;
  overlayAtBreakpoint?: boolean;
  breakpoint?: number;
  hoverPreview?: boolean;
  hoverPopover?: boolean;
  title?: string;
  showSubhead?: boolean;
  showTitle?: boolean;
  showDraggable?: boolean;
  showIcon?: boolean;
  showTag?: boolean;
  showActions?: boolean;
  showTabs?: boolean;
  showFooter?: boolean;
  footerAlign?: "left" | "right" | "full";
  footerBordered?: boolean;
  footerScrollEffect?: "none" | "shadow" | "fade";
}

/** Fades and slides its children in (from slightly above) the moment it mounts. */
function PopoverEnter({
  children,
  className = "absolute left-0 top-full z-10 mt-1",
  style,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      className={className}
      {...rest}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.98)",
        transformOrigin: "top left",
        transition: "opacity 160ms ease-out, transform 160ms ease-out",
      }}
    >
      {children}
    </div>
  );
}

function SidePanelDemo({
  side = "right",
  startOpen = true,
  startPinned = true,
  showPinButton = true,
  showCloseButton = false,
  resizable = true,
  width = 256,
  limitMinWidth = true,
  minWidth = 200,
  limitMaxWidth = true,
  maxWidth = 425,
  autoFullScreen = true,
  overlayAtBreakpoint = false,
  breakpoint = 768,
  hoverPreview = false,
  hoverPopover = false,
  title = "Details",
  showSubhead = false,
  showTitle = true,
  showDraggable = false,
  showIcon = false,
  showTag = false,
  showActions = false,
  showTabs = false,
  showFooter = false,
  footerAlign = "right",
  footerBordered = false,
  footerScrollEffect = "shadow",
}: SidePanelDemoProps) {
  const [open, setOpen] = useState(startOpen);
  const [pinned, setPinned] = useState(startPinned);
  // Hover preview: while the panel is pinned and closed, hovering the open button
  // (or the previewed panel itself) slides it in as an overlay.
  const [hovering, setHovering] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hoverOn = () => { clearTimeout(leaveTimer.current); setHovering(true); };
  const hoverOff = () => { leaveTimer.current = setTimeout(() => setHovering(false), 150); };
  // An unpinned (overlay) panel closes once the pointer leaves it (not mid-drag-resize).
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const resizingRef = useRef(false);
  const panelEnter = () => {
    clearTimeout(closeTimer.current);
    if (hoverPreview && !hoverPopover) hoverOn();
  };
  const panelLeave = () => {
    if (hoverPreview && !hoverPopover) hoverOff();
    if (!pinned && open) {
      closeTimer.current = setTimeout(() => {
        if (!resizingRef.current) setOpen(false);
      }, 200);
    }
  };
  const lo = limitMinWidth ? minWidth : 0;
  // Popover mode: the preview is a card beneath the hovered button instead of a side slide-in.
  const popoverMode = hoverPreview && hoverPopover;
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonWrapRef = useRef<HTMLDivElement>(null);
  const renderPanel = (extra: Partial<React.ComponentProps<typeof SidePanel>> = {}) => (
    <SidePanel
      side={side}
      open={open}
      pinned={pinned}
      preview={hoverPreview && !hoverPopover && hovering}
      onMouseEnter={panelEnter}
      onMouseLeave={panelLeave}
      onResizeStateChange={(r) => { resizingRef.current = r; }}
      onPinToggle={showPinButton ? () => setPinned((v) => !v) : undefined}
      showCloseButton={showCloseButton}
      onClose={() => setOpen(false)}
      resizable={resizable}
      width={width}
      // Off = no limit: min 0, max Infinity. Max never drops below min.
      minWidth={lo}
      maxWidth={limitMaxWidth ? Math.max(maxWidth, lo) : Infinity}
      // Reaching 90% of the container → full screen.
      autoFullScreen={autoFullScreen}
      // Pinned panels float over the content below this container width.
      absoluteBreakpoint={overlayAtBreakpoint ? breakpoint : undefined}
      headerTitle={showTitle ? title : undefined}
      headerWithoutTitle
      headerClassName={showDraggable ? DRAG_HEADER_CLASS : undefined}
      headerSubhead={showSubhead ? "Supporting description" : undefined}
      headerIcon={withDragGrip(showIcon ? headerIcon : undefined, showDraggable)}
      headerTitleBadge={showTag ? headerTag : undefined}
      headerActions={showActions ? headerActions : undefined}
      headerTabs={showTabs ? <PanelTabs /> : undefined}
      footer={showFooter ? sideFooterButtons : undefined}
      footerAlign={footerAlign}
      footerBordered={footerBordered}
      footerScrollShadow={footerScrollEffect === "shadow"}
      footerScrollFade={footerScrollEffect === "fade"}
      {...extra}
    >
      <PanelForm />
    </SidePanel>
  );
  const panel = renderPanel();
  const main = (
    <MainContent>
      <div
        ref={buttonWrapRef}
        className="relative self-start"
        onMouseEnter={hoverPreview ? hoverOn : undefined}
        onMouseLeave={hoverPreview ? hoverOff : undefined}
      >
        <Button
          onClick={() => {
            // Popover mode: clicking the button pins the panel open.
            if (popoverMode && !open) setPinned(true);
            setOpen((v) => !v);
            setHovering(false);
          }}
          variant="outline"
        >
          {open ? "Close Panel" : "Open Panel"}
        </Button>
      </div>
      <p className="lyra-body-sm text-lyra-fg-secondary">
        {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
      </p>
    </MainContent>
  );
  // Hover popover: a card beneath the button. Its full-screen button expands it to
  // fill the whole demo container, covering the header area.
  const [popoverExpanded, setPopoverExpanded] = useState(false);
  let popoverPos = { left: 0, top: 0 };
  if (popoverMode && rootRef.current && buttonWrapRef.current) {
    const r = rootRef.current.getBoundingClientRect();
    const b = buttonWrapRef.current.getBoundingClientRect();
    popoverPos = { left: b.left - r.left, top: b.bottom - r.top + 4 };
  }
  const popover =
    popoverMode && !open && (hovering || popoverExpanded) ? (
      <PopoverEnter
        className="absolute z-10"
        style={popoverExpanded ? { inset: 0 } : popoverPos}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {renderPanel({
          open: true,
          pinned: false,
          resizable: false,
          autoFullScreen: false,
          allowFullScreen: true,
          onFullScreenChange: setPopoverExpanded,
          onPinToggle: undefined,
          className: popoverExpanded
            ? "rounded-none"
            : "static h-[360px] rounded-lyra-lg border border-lyra-border-subtle shadow-lg",
          onMouseEnter: undefined,
          onMouseLeave: undefined,
        })}
      </PopoverEnter>
    ) : null;
  return (
    // `relative`: the unpinned panel is an absolute overlay and needs a positioned ancestor.
    <div ref={rootRef} className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base">
      {side === "left" && panel}
      {main}
      {side === "right" && panel}
      {popover}
    </div>
  );
}

type SidePanelDemoStory = StoryObj<typeof SidePanelDemo>;

const SHOW_WHEN_FOOTER = { if: { arg: "showFooter", truthy: true } } as const;
/* The pixel fields only matter while resizing is on, and each only when its own toggle is on. */

export const Default: SidePanelDemoStory = {
  name: "Default",
  parameters: {
    controls: {
      // Storybook matches `include` against a control's display name when `name`
      // is set, so both the labels and the prop keys are listed.
      include: [
        "Side", "Starts open", "Pinned", "Pin / unpin button", "Close button", "Resizable", "Width (px)",
        "Min width", "Min width (px)", "Max width", "Max width (px)", "Auto full screen at 90%", "Overlay breakpoint", "Overlay breakpoint (px)", "Hover preview", "Show as popover",
        "Title", "Title text", "Draggable", "Subtitle", "Icon", "Alert tag", "Actions", "Tabs",
        "Footer", "Footer alignment", "Footer border", "Footer scroll effect",
        "side", "startOpen", "startPinned", "showPinButton", "showCloseButton", "resizable", "width",
        "limitMinWidth", "minWidth", "limitMaxWidth", "maxWidth", "autoFullScreen", "overlayAtBreakpoint", "breakpoint", "hoverPreview", "hoverPopover",
        "showTitle", "title", "showDraggable", "showSubhead", "showIcon", "showTag", "showActions", "showTabs",
        "showFooter", "footerAlign", "footerBordered", "footerScrollEffect",
      ],
      sort: "none",
    },
  },
  args: {
    side: "right",
    startOpen: true,
    startPinned: true,
    showPinButton: true,
    showCloseButton: false,
    resizable: true,
    width: 256,
    limitMinWidth: true,
    minWidth: 200,
    limitMaxWidth: true,
    maxWidth: 425,
    autoFullScreen: true,
    overlayAtBreakpoint: false,
    breakpoint: 768,
    hoverPreview: false,
    hoverPopover: false,
    showTitle: true,
    showDraggable: false,
    title: "Details",
    showSubhead: false,
    showIcon: false,
    showTag: false,
    showActions: false,
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
      description: "Which edge of the layout the panel is docked to.",
      table: { category: "Behavior", defaultValue: { summary: "right" } },
    },
    startOpen: {
      name: "Starts open",
      control: "boolean",
      description: "Whether the panel is open when the story loads. Use \"Close Panel\" / \"Open Panel\" to toggle it afterwards.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    startPinned: {
      name: "Pinned",
      control: "boolean",
      description: "On: the panel sits inline and pushes the content. Off: it floats over the content as a hover overlay (`pinned`).",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    showPinButton: {
      name: "Pin / unpin button",
      control: "boolean",
      description: "On: the header shows a pin/unpin button (`onPinToggle`) that switches between pinned and overlay. Off: no pin option is shown.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    showCloseButton: {
      name: "Close button",
      control: "boolean",
      description: "Show a close button at the far right of the header (`showCloseButton`, `onClose`). Clicking it closes the panel.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    resizable: {
      name: "Resizable",
      control: "boolean",
      description: "Allow drag-to-resize on the panel's inner edge.",
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    width: {
      name: "Width (px)",
      control: { type: "number", min: 0, step: 5 },
      description: "Width the panel opens at, in pixels (`width`). Default is the panel's own 256.",
      table: { category: "Behavior", defaultValue: { summary: "256" } },
    },
    limitMinWidth: {
      name: "Min width",
      control: "boolean",
      description: "On: the panel can't be dragged narrower than the width set next. Off: no minimum while resizing.",
      if: { arg: "resizable", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "true" } },
    },
    minWidth: {
      name: "Min width (px)",
      control: { type: "number", min: 200, step: 5 },
      description: "Narrowest the panel can be dragged, in pixels (`minWidth`). Default is the panel's own 200, which is also the lowest allowed here.",
      if: { arg: "limitMinWidth", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "200" } },
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
      control: { type: "number", min: 200, step: 5 },
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
    overlayAtBreakpoint: {
      name: "Overlay breakpoint",
      control: "boolean",
      description: "On: a pinned panel floats over the content (instead of pushing it) once its container gets narrower than the breakpoint (`absoluteBreakpoint`). Off: pinned always pushes.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    breakpoint: {
      name: "Overlay breakpoint (px)",
      control: { type: "number", min: 0, step: 10 },
      description: "Container width below which a pinned panel becomes an overlay (`absoluteBreakpoint`). Defaults to 768, the width agent-next-gen-v3's Contact Details panel uses. Enter any pixel value; raise it to see the overlay sooner.",
      if: { arg: "overlayAtBreakpoint", truthy: true },
      table: { category: "Behavior", defaultValue: { summary: "768" } },
    },
    hoverPreview: {
      name: "Hover preview",
      control: "boolean",
      description: "When the panel is pinned and closed, hovering the \"Open Panel\" button slides it in as an overlay without pushing the content (`preview`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    hoverPopover: {
      name: "Show as popover",
      control: "boolean",
      description: "Show the hover preview as a popover beneath the hovered button instead of sliding in from the side. Clicking the button pins the panel open; closing it brings the hover popover back.",
      if: { arg: "hoverPreview", truthy: true },
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
      description: "Where the footer's buttons sit: left, right, or stretched to full width (`ContainerFooter` `align`).",
      ...SHOW_WHEN_FOOTER,
      table: { category: "Content", defaultValue: { summary: "right" } },
    },
    footerBordered: {
      name: "Footer border",
      control: "boolean",
      description: "Show a border along the top edge of the footer (`ContainerFooter` `bordered`).",
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
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <SidePanelDemo key={JSON.stringify(args)} {...args} />
  ),
};

/* The two fixed demos below (Left, Right) show no Controls panel — every prop
   they vary is a control on Default. They stay as separate stories only because
   lyra-sol-compare / lyra-ux-templates reference them by name or story ID. */
const NO_CONTROLS = { controls: { disable: true } };

export const Left: Story = {
  name: "Side Panel — Left",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return (
      <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <SidePanel
          side="left"
          open={open}
          pinned={pinned}
          headerTitle="Designer"
          onPinToggle={() => setPinned((v) => !v)}
        >
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Side panel content.</p>
          </div>
        </SidePanel>
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen((v) => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned — pushes content" : "Unpinned — hovers as overlay"}
          </p>
        </div>
      </div>
    );
  },
};

export const Right: Story = {
  name: "Side Panel — Right",
  parameters: NO_CONTROLS,
  render: () => {
    const [open, setOpen] = useState(true);
    const [pinned, setPinned] = useState(false);
    return (
      <div className="relative h-[500px] flex overflow-hidden rounded-lyra-lg border border-lyra-border-subtle">
        <div className="flex flex-1 flex-col bg-lyra-bg-surface-base p-4 gap-2">
          <Button onClick={() => setOpen((v) => !v)} variant="outline">
            {open ? "Close Panel" : "Open Panel"}
          </Button>
          <p className="lyra-body-sm text-lyra-fg-secondary">
            {pinned ? "Pinned" : "Overlay"}
          </p>
        </div>
        <SidePanel
          side="right"
          open={open}
          pinned={pinned}
          headerTitle="Details"
          onPinToggle={() => setPinned((v) => !v)}
        >
          <div className="px-4 py-4">
            <p className="lyra-body-md text-lyra-fg-secondary">Right side panel content.</p>
          </div>
        </SidePanel>
      </div>
    );
  },
};
