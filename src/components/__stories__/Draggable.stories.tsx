import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";
import { GripVertical, Maximize2, Minimize2, Move } from "lucide-react";
import { ActionIconButton } from "../actions";
import { Draggable, type DraggableHeaderControls, type DraggableVariant } from "../draggable";
import { Tooltip } from "../tooltip";
import { ContainerHeader } from "../container-header";
import { ContainerFooter } from "../container-footer";
import { sideFooterButtons } from "./SidePanel.shared";
import { PanelTabs } from "./InteriorPanel.shared";
import { headerActions, headerIcon, headerTag } from "./Container.shared";

const meta: Meta<typeof Draggable> = {
  title: "Custom Primitives/Draggable",
  component: Draggable,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;

/* Variants (Float, Docked, Main Container - Single Dock, Main Container -
   Multi Dock, Single Container - Real Content) each have their own page
   under "Draggable/Variants" — see Draggable.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   "Float (default)", "Docked (right side)" and "Interactive (toggle float ↔
   docked)" into a single playground. Fully controlled: the panel's own
   dock/undock header button feeds `onVariantChange` back into state, so
   toggling in the canvas behaves exactly like the old Interactive story. ── */

interface DraggableDemoProps {
  variant?: DraggableVariant;
  lockVariant?: boolean;
  showHeaderControls?: boolean;
  dockedResizable?: boolean;
  showFullScreen?: boolean;
  title?: string;
  showTitle?: boolean;
  showSubhead?: boolean;
  showIcon?: boolean;
  showTag?: boolean;
  showActions?: boolean;
  showTabs?: boolean;
  showFooter?: boolean;
  footerAlign?: "left" | "right" | "full";
  footerBordered?: boolean;
  footerScrollEffect?: "none" | "shadow" | "fade";
}

function DraggableDemo({
  variant: initialVariant = "float",
  lockVariant = false,
  showHeaderControls = true,
  dockedResizable = true,
  showFullScreen = false,
  title = "Panel",
  showTitle = true,
  showSubhead = false,
  showIcon = false,
  showTag = false,
  showActions = false,
  showTabs = false,
  showFooter = false,
  footerAlign = "right",
  footerBordered = false,
  footerScrollEffect = "shadow",
}: DraggableDemoProps) {
  const [variant, setVariant] = useState<DraggableVariant>(initialVariant);
  const [width, setWidth] = useState(350);

  // Full screen — same approach and animation as agent-next-gen-v3's shared panel: `Draggable` has
  // no full-screen mode of its own, so full screen is a separate overlay filling the demo container
  // (the panel itself is unmounted while it's showing and resumes in its old variant on exit).
  // `fullScreen` is the intent; `rendered` keeps the overlay mounted for the exit animation;
  // `visible` is the actual opacity/scale target (see the effect below).
  const [fullScreen, setFullScreen] = useState(false);
  const [fullScreenRendered, setFullScreenRendered] = useState(false);
  const [fullScreenVisible, setFullScreenVisible] = useState(false);
  const fullScreenTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => {
    if (fullScreen) {
      clearTimeout(fullScreenTimer.current);
      setFullScreenRendered(true);
      // Double rAF: the overlay has to be painted once at its "hidden" style before
      // `visible` flips, or the browser has no earlier frame to transition from and it just pops in.
      let raf2 = 0;
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setFullScreenVisible(true));
      });
      return () => {
        cancelAnimationFrame(raf1);
        cancelAnimationFrame(raf2);
      };
    }
    // Exit: start the fade/scale-out right away, unmount once it has played.
    setFullScreenVisible(false);
    clearTimeout(fullScreenTimer.current);
    fullScreenTimer.current = setTimeout(() => setFullScreenRendered(false), 180);
    return () => clearTimeout(fullScreenTimer.current);
  }, [fullScreen]);

  const fullScreenButton = showFullScreen ? (
    <Tooltip content="Full Screen" placement="bottom" asLabel>
      <ActionIconButton
        aria-label="Full Screen"
        size="sm"
        onClick={() => setFullScreen(true)}
        className="text-lyra-fg-secondary hover:text-lyra-fg-secondary"
      >
        <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.5} />
      </ActionIconButton>
    </Tooltip>
  ) : null;

  // The header. With "Header controls" on, the grip and dock/undock button are placed
  // inside it (via `renderHeaderControls`) — grip before the icon, dock button after the
  // actions — so they sit in the header's own slots instead of overlapping its content.
  const header = (controls?: DraggableHeaderControls) => (
    <ContainerHeader
      title={showTitle ? title : undefined}
      subhead={showSubhead ? "Supporting description" : undefined}
      icon={
        controls && controls.variant === "float" ? (
          <div className="flex items-center gap-2">
            <div {...controls.gripProps}>
              <GripVertical className="h-4 w-4" strokeWidth={1.5} />
            </div>
            {showIcon ? headerIcon : null}
          </div>
        ) : showIcon ? (
          headerIcon
        ) : undefined
      }
      titleBadge={showTag ? headerTag : undefined}
      actions={
        showActions || showFullScreen || (controls && !lockVariant) ? (
          <>
            {showActions ? headerActions : null}
            {fullScreenButton}
            {controls && !lockVariant ? (
              <Tooltip content={controls.dockButtonProps["aria-label"]} placement="bottom" asLabel>
                <button
                  {...controls.dockButtonProps}
                  className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover hover:text-lyra-fg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus focus-visible:ring-offset-2"
                >
                  {controls.dockIcon}
                </button>
              </Tooltip>
            ) : null}
          </>
        ) : undefined
      }
      tabs={showTabs ? <PanelTabs /> : undefined}
      bordered={false}
    />
  );

  const body = (
    <div className="flex-1 min-h-0 overflow-y-auto flex items-center justify-center p-4">
      <p className="lyra-body-sm text-lyra-fg-secondary text-center">
        {fullScreen ? (
          "Full screen — fills the container."
        ) : (
          <>
            Currently <strong>{variant}</strong>, {Math.round(width)}px wide.
            <br />
            {variant === "float"
              ? "Drag the header to move it; resize from the bottom-right corner."
              : "Drag the left edge to resize."}
          </>
        )}
      </p>
    </div>
  );
  const footer = showFooter ? (
    <ContainerFooter align={footerAlign} bordered={footerBordered} scrollShadow={footerScrollEffect === "shadow"} scrollFade={footerScrollEffect === "fade"}>
      {sideFooterButtons}
    </ContainerFooter>
  ) : null;

  const panel = (
    <Draggable
      variant={variant}
      defaultWidth={350}
      defaultHeight={420}
      minWidth={350}
      minHeight={200}
      onVariantChange={setVariant}
      onWidthChange={setWidth}
      lockVariant={lockVariant}
      showHeaderControls={showHeaderControls}
      dockedResizable={dockedResizable}
      renderHeaderControls={showHeaderControls ? header : undefined}
      className={[
        "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base",
        variant === "float" ? "shadow-lg" : "",
      ].join(" ")}
    >
      {!showHeaderControls && header()}
      {body}
      {footer}
    </Draggable>
  );

  // Same overlay v3 uses: fills the container (12px gap right/bottom, flush top/left), fades and
  // scales in over 200ms and out over 150ms. "Undock" here exits to the floating panel.
  const fullScreenOverlay =
    showFullScreen && fullScreenRendered ? (
      <div
        className="absolute top-0 left-0 right-3 bottom-3 z-[9] flex flex-col rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden"
        style={{
          opacity: fullScreenVisible ? 1 : 0,
          transform: fullScreenVisible ? "scale(1)" : "scale(0.98)",
          transition: fullScreenVisible
            ? "opacity 200ms ease, transform 200ms cubic-bezier(0.4, 0, 0.2, 1)"
            : "opacity 150ms ease, transform 150ms ease",
          pointerEvents: fullScreenVisible ? "auto" : "none",
        }}
      >
        <ContainerHeader
          title={showTitle ? title : undefined}
          subhead={showSubhead ? "Supporting description" : undefined}
          icon={showIcon ? headerIcon : undefined}
          titleBadge={showTag ? headerTag : undefined}
          actions={
            <>
              {showActions ? headerActions : null}
              <Tooltip content="Exit Full Screen" placement="bottom" asLabel>
                <ActionIconButton
                  aria-label="Exit Full Screen"
                  size="sm"
                  onClick={() => setFullScreen(false)}
                  className="text-lyra-fg-secondary hover:text-lyra-fg-secondary"
                >
                  <Minimize2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                </ActionIconButton>
              </Tooltip>
              {!lockVariant && (
                <Tooltip content="Undock" placement="bottom" asLabel>
                  <ActionIconButton
                    aria-label="Undock"
                    size="sm"
                    onClick={() => {
                      setVariant("float");
                      setFullScreen(false);
                    }}
                    className="text-lyra-fg-secondary hover:text-lyra-fg-secondary"
                  >
                    <Move className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </ActionIconButton>
                </Tooltip>
              )}
            </>
          }
          tabs={showTabs ? <PanelTabs /> : undefined}
          bordered={false}
        />
        {body}
        {footer}
      </div>
    ) : null;

  return (
    <div className="relative flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-md text-lyra-fg-secondary">Main content area</p>
      </div>
      {fullScreenOverlay}
      {fullScreen ? null : variant === "docked" ? (
        <div className="h-full pr-3 pb-3">{panel}</div>
      ) : (
        // `pointer-events-none` — this wrapper only positions the panel's
        // starting spot; the panel's own root stays interactive and follows
        // the drag. If this wrapper were interactive, its untransformed
        // layout box would stay behind as an invisible "ghost" hit area
        // once the panel is dragged away.
        <div className="absolute top-16 left-16 pointer-events-none">{panel}</div>
      )}
    </div>
  );
}

type DraggableDemoStory = StoryObj<typeof DraggableDemo>;

export const Default: DraggableDemoStory = {
  args: {
    variant: "float",
    lockVariant: false,
    showHeaderControls: true,
    dockedResizable: true,
    showFullScreen: false,
    showTitle: true,
    title: "Panel",
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
  parameters: {
    layout: "fullscreen",
    // Full-viewport demo — render in an iframe on the Docs page so
    // `h-screen` has a bounded height to fill.
    docs: { story: { inline: false, iframeHeight: 520 } },
    controls: {
      include: [
        "variant",
        "lockVariant",
        "showHeaderControls",
        "dockedResizable",
        "showFullScreen",
        "showTitle",
        "title",
        "showSubhead",
        "showIcon",
        "showTag",
        "showActions",
        "showTabs",
        "showFooter",
        "footerAlign",
        "footerBordered",
        "footerScrollEffect",
        "Starts as",
        "Lock mode",
        "Header controls",
        "Docked resize handle",
        "Full screen button",
        "Title",
        "Subtitle",
        "Icon",
        "Alert tag",
        "Actions",
        "Tabs",
        "Footer",
        "Footer alignment",
        "Footer border",
        "Footer scroll effect",
      ],
      sort: "none",
    },
  },
  argTypes: {
    variant: {
      name: "Starts as",
      control: "radio",
      options: ["float", "docked"],
      description: "Float is freely draggable. Docked is pinned to the right edge (`variant`).",
      table: { category: "Behavior" },
    },
    lockVariant: {
      name: "Lock mode",
      control: "boolean",
      description: "Removes the dock/undock button so the panel can't change mode (`lockVariant`).",
      table: { category: "Behavior" },
    },
    showHeaderControls: {
      name: "Header controls",
      control: "boolean",
      description: "Puts the grip and dock/undock buttons in the header (`showHeaderControls`). In float mode the whole header drags the panel.",
      table: { category: "Behavior" },
    },
    dockedResizable: {
      name: "Docked resize handle",
      control: "boolean",
      description: "Shows the left-edge resize handle while docked (`dockedResizable`).",
      table: { category: "Behavior" },
    },
    showFullScreen: {
      name: "Full screen button",
      control: "boolean",
      description: "Adds a full-screen button to the header. The panel expands to fill the container with a short fade-and-scale, and an exit button (plus Undock) takes it back.",
      table: { category: "Behavior" },
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
      description: "Text in the panel's header.",
      table: { category: "Content" },
    },
    showSubhead: {
      name: "Subtitle",
      control: "boolean",
      description: "Show a supporting line under the title (`subhead`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showIcon: {
      name: "Icon",
      control: "boolean",
      description: "Show an icon to the left of the title (`icon`). In float mode the drag grip takes this spot.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showTag: {
      name: "Alert tag",
      control: "boolean",
      description: "Show a status tag inline right after the title (`titleBadge`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showActions: {
      name: "Actions",
      control: "boolean",
      description: "Show an action button on the right of the header (`actions`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showTabs: {
      name: "Tabs",
      control: "boolean",
      description: "Show a fixed tab row inside the header (`tabs`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    showFooter: {
      name: "Footer",
      control: "boolean",
      description: "Show a footer with Cancel and Save buttons (`ContainerFooter`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    footerAlign: {
      name: "Footer alignment",
      control: "radio",
      options: ["left", "right", "full"],
      description: "Where the footer's buttons sit: left, right, or stretched to full width (`ContainerFooter` `align`).",
      if: { arg: "showFooter", truthy: true },
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
    <DraggableDemo key={JSON.stringify(args)} {...args} />
  ),
};
