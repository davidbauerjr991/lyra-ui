import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useRef, useEffect } from "react";
import { GripVertical, LayoutGrid, Move, X } from "lucide-react";
import { Draggable, type DraggableVariant } from "../draggable";
import { ContainerHeader } from "../container-header";
import { PageHeader } from "../page-header";
import { Button } from "../button";
import { Tooltip } from "../tooltip";
import { AppHeader } from "../app-header";
import { AppName } from "../app-name";
import { ActionIconButton } from "../actions";

const meta: Meta<typeof Draggable> = {
  title: "Custom Primitives/Draggable",
  component: Draggable,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};
export default meta;
type Story = StoryObj<typeof Draggable>;

export const Float: Story = {
  name: "Float (default)",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="relative w-full h-screen">
    {/* `pointer-events-none` here — this wrapper only exists to position
        `Draggable` at a fixed starting spot; `Draggable`'s own root already
        sets `pointer-events:auto` on itself and moves WITH the drag via CSS
        `transform`, so this ancestor doesn't need to be interactive, and if
        it were, its own (untransformed) layout box would stay behind at
        this original top-left spot as an invisible "ghost" hit area once
        the panel is dragged away — see `MultiplePanelsSingleDock` below for
        where that actually blocks something clickable, and the same fix. */}
    <div className="absolute top-4 left-4 pointer-events-none">
    <Draggable
      defaultWidth={300}
      defaultHeight={200}
      className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay shadow-lg"
    >
      <ContainerHeader title="Drag me by the header" bordered={false} />
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-sm text-lyra-fg-secondary">Resize from the bottom-right corner</p>
      </div>
    </Draggable>
    </div>
    </div>
  ),
};

export const Docked: Story = {
  name: "Docked (right side)",
  parameters: { layout: "fullscreen" },
  render: () => (
    <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
      <div className="flex-1 flex items-center justify-center">
        <p className="lyra-body-md text-lyra-fg-secondary">Main content — drag the left edge of the panel to resize</p>
      </div>
      <div className="h-full pr-3 pb-3">
        <Draggable
          variant="docked"
          defaultWidth={320}
          minWidth={280}
          lockVariant
          className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay"
        >
          <ContainerHeader title="Docked Panel" bordered={false} />
          <div className="flex-1 flex items-center justify-center">
            <p className="lyra-body-sm text-lyra-fg-secondary">Drag left edge to resize</p>
          </div>
        </Draggable>
      </div>
    </div>
  ),
};

/**
 * Reference this story (specifically the "App Header" control below, on
 * `MultiplePanelsSingleDock`) whenever asked for a prototype combining
 * `Draggable` panels with an `AppHeader`-driven layout — it's the canonical
 * place in Storybook demonstrating multiple `Draggable` panels (with the
 * single-dock rule) living under a real `AppHeader`, mirroring
 * `AdminShell.stories.tsx` and `AgentNextGenTemplate.stories.tsx`'s own
 * AppHeader + Draggable-panel chrome (both of which link back to this file
 * for the same reason — see the doc comments near their own `AppHeader`
 * usage).
 */
interface MultiplePanelsSingleDockDemoProps {
  /** Show an AppHeader above the demo, with the panel toggles moved into it
   *  as icon buttons (removed from the PageHeader). Purely a layout/chrome
   *  choice — all panels still start closed either way, and their dock
   *  PREFERENCE once opened is governed independently by `startDocked`. */
  appHeader: boolean;
  /** How many panel toggle buttons/panels to show (1-5). Backed by a fixed
   *  5 `usePanelSlot` hook calls (React's Rules of Hooks forbid a variable
   *  number of hooks) that are sliced down to this count — hidden slots
   *  keep running in the background, so shrinking then growing the count
   *  preserves each panel's state. */
  panelCount: number;
  /** Each panel's dock PREFERENCE once opened: "docked" (pinned into the
   *  layout, single-dock rule applies) when true, or "float" (drag mode)
   *  when false. All panels still start closed regardless. */
  startDocked: boolean;
  /** When true (default), several panels can be open at once, each in its
   *  own independently-sized/positioned `Draggable` — opening a panel while
   *  another is already docked+open floats the other one instead of
   *  closing it (the single-dock rule). When false, there's only ONE
   *  physical container (always backed by slot "A"'s `Draggable`,
   *  `width`/`variant`/position and all): every toggle button just swaps
   *  which letter's title/content it displays, so clicking a different
   *  button never resizes, repositions, or re-opens the container — same
   *  idea as the real Online Help/AI Assist panels in Outbound-Campaigns'
   *  `App.tsx` sharing one docked slot, generalized to N buttons here. */
  allowMultiple: boolean;
}

type PanelState = "closed" | "open" | "closing";

const PANEL_LETTERS = ["A", "B", "C", "D", "E"] as const;
type PanelLetter = typeof PANEL_LETTERS[number];

// Used by `MultiDockDemo` below (not `MultiplePanelsSingleDockDemo`) — its
// `topPanel`/z-index bring-to-front state has one extra possible value,
// "Main", for the Main Container's own floating window competing for
// front-most z-index alongside the lettered side panels.
type TopPanelKey = PanelLetter | "Main";

interface PanelSlot {
  letter: PanelLetter;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mounted: boolean;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
  state: PanelState;
  variant: DraggableVariant;
  setVariant: React.Dispatch<React.SetStateAction<DraggableVariant>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  resizing: boolean;
  setResizing: React.Dispatch<React.SetStateAction<boolean>>;
  floatLeft: React.MutableRefObject<number | null>;
  floatTop: React.MutableRefObject<number | null>;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

// Self-contained per-panel state + its own open/close animation state
// machine. Deliberately does NOT know about sibling panels — the
// float-anchor default position and the single-dock rule both need sibling
// awareness, so those stay as plain closures in the parent component below,
// not inside this hook. Called a fixed 5 times (once per letter) regardless
// of the current `panelCount` — React's Rules of Hooks forbid calling a
// variable number of hooks — the parent then slices the returned array down
// to however many panels are actually shown; hidden slots keep their effects
// running harmlessly in the background so shrinking then growing the count
// doesn't lose anyone's state.
function usePanelSlot(letter: PanelLetter, defaultVariant: DraggableVariant): PanelSlot {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<PanelState>("closed");
  const [variant, setVariant] = useState<DraggableVariant>(defaultVariant);
  const [width, setWidth] = useState(320);
  const [resizing, setResizing] = useState(false);
  const floatLeft = useRef<number | null>(null);
  const floatTop = useRef<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const animTimer = useRef<ReturnType<typeof setTimeout>>();

  // Open/close state machine (matches the AgentNextGen open/close animation pattern)
  useEffect(() => {
    clearTimeout(animTimer.current);
    if (open) {
      setMounted(true);
      setState("open");
    } else {
      setState("closing");
      animTimer.current = setTimeout(() => setState("closed"), 150);
    }
    return () => clearTimeout(animTimer.current);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return { letter, open, setOpen, mounted, setMounted, state, variant, setVariant, width, setWidth, resizing, setResizing, floatLeft, floatTop, buttonRef };
}

function MultiplePanelsSingleDockDemo({ appHeader, panelCount, startDocked, allowMultiple }: MultiplePanelsSingleDockDemoProps) {
    // Independent Draggable panels sharing one docked slot — same
    // "single-dock rule" as the real prototype (`AgentNextGenPage.tsx`'s AI
    // panel + Notifications panel): only one panel may be docked at a time;
    // docking a floating panel while another is already docked forces that
    // other panel back to float rather than stacking two docked panels.

    // Fixed 5 slots (Rules of Hooks) — sliced down to `panelCount` below.
    // Each always starts closed, with its dock PREFERENCE (once opened) set
    // by the independent `startDocked` control — "docked" when true,
    // "float" when false.
    const defaultVariant: DraggableVariant = startDocked ? "docked" : "float";
    const slotA = usePanelSlot("A", defaultVariant);
    const slotB = usePanelSlot("B", defaultVariant);
    const slotC = usePanelSlot("C", defaultVariant);
    const slotD = usePanelSlot("D", defaultVariant);
    const slotE = usePanelSlot("E", defaultVariant);
    const allSlots = [slotA, slotB, slotC, slotD, slotE];
    const slots = allSlots.slice(0, panelCount);

    // When `allowMultiple` is off, every toggle button drives this ONE
    // shared slot (always "A") instead of its own — so there's only ever
    // one physical Draggable/container on screen, and clicking a different
    // button just swaps which letter's title/content it displays rather
    // than closing one container and opening a differently-sized one in
    // its place. `activeLetter` tracks which button's content is showing.
    const singleContainer = slotA;
    const [activeLetter, setActiveLetter] = useState<PanelLetter | null>(null);

    const [topPanel, setTopPanel] = useState<PanelLetter | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Sets floatLeft/floatTop ONLY the first time a panel ever floats — its
    // default spot is directly below its OWN toggle button; once positioned
    // (whether by this default or by the user dragging it), that position
    // sticks across open/close AND dock/undock until dragged again — applied
    // per-slot here since each panel has its own button/state.
    const ensureFloatAnchor = (slot: PanelSlot) => {
      if (slot.floatLeft.current !== null) return;
      const btnRect = slot.buttonRef.current?.getBoundingClientRect();
      if (btnRect) {
        slot.floatLeft.current = btnRect.left;
        slot.floatTop.current = btnRect.bottom + 8;
      } else if (containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        slot.floatLeft.current = r.left + containerRef.current.offsetWidth - slot.width - 16;
      }
    };

    // Opening a panel: bring it to front and anchor its float position — and
    // since every slot's own dock preference can be "docked", enforce the
    // single-dock rule right here too (not just on the explicit dock-button
    // click below). Only displaces an OTHER slot if that other slot is
    // actually open right now — a closed panel's `variant` is just its
    // remembered preference for next time it's opened, not something
    // currently occupying the docked slot, so it's left alone. This means:
    // with "Start Docked" on, opening a panel, closing it, then opening a
    // DIFFERENT panel lets that different panel start docked too (nothing
    // else is visibly open to conflict with) — floating only kicks in once
    // more than one panel is actually open at the same time.
    //
    // With `allowMultiple` off, none of the above float-eviction logic
    // even runs: at most one panel is ever open, so opening a NEW one first
    // closes whichever other panel is currently open outright (regardless
    // of docked/float) — same "replace outright" rule Outbound-Campaigns'
    // real Online Help/AI Assist panels use (`App.tsx`'s `openPanel`, rule
    // 1), just generalized from 2 panels to N.
    const handleToggleOpen = (slot: PanelSlot) => () => {
      const next = !slot.open;
      if (next) {
        if (!allowMultiple) {
          for (const other of slots) {
            if (other !== slot && other.open) other.setOpen(false);
          }
        }
        ensureFloatAnchor(slot);
        if (allowMultiple && slot.variant === "docked") {
          for (const other of slots) {
            if (other !== slot && other.open && other.variant === "docked") {
              ensureFloatAnchor(other);
              other.setVariant("float");
            }
          }
        }
        // Opening a panel brings it to the front, same as clicking/dragging
        // it (`onInteract` below) — otherwise `topPanel` only updates on
        // direct interaction, so a panel opened via its toggle button while
        // another is already open would render BELOW it until actually
        // clicked, even though it's the one that just appeared.
        setTopPanel(slot.letter);
      }
      slot.setOpen(next);
    };

    // With `allowMultiple` off: every button controls `singleContainer`
    // (always slot "A") instead of its own slot — so the container itself
    // never resizes/repositions/re-animates open+close when switching which
    // button's content is showing; only `activeLetter` (and therefore the
    // title/body text) changes. The container only actually opens/closes
    // when its CURRENT button is clicked again, or when it was closed to
    // begin with.
    const handleSingleToggle = (letter: PanelLetter) => (e: React.MouseEvent<HTMLButtonElement>) => {
      if (singleContainer.open && activeLetter === letter) {
        singleContainer.setOpen(false);
        return;
      }
      if (!singleContainer.open) {
        if (singleContainer.floatLeft.current === null) {
          const btnRect = e.currentTarget.getBoundingClientRect();
          singleContainer.floatLeft.current = btnRect.left;
          singleContainer.floatTop.current = btnRect.bottom + 8;
        }
        singleContainer.setOpen(true);
      }
      setActiveLetter(letter);
      setTopPanel(letter);
    };

    // Single-dock rule — mirrors AgentNextGenPage.tsx's
    // handleAiVariantChange / handleNotifVariantChange exactly: docking one
    // panel forces whichever OTHER panel is currently docked AND open back
    // to float — to its own last float position if it has one, otherwise
    // its default spot below its own button (`ensureFloatAnchor` no-ops if
    // already positioned) — so at most one slot is ever visibly docked at
    // once. A closed panel's stale "docked" preference doesn't count (see
    // `handleToggleOpen`'s identical `other.open` check above).
    const handleVariantChange = (slot: PanelSlot) => (v: DraggableVariant) => {
      if (v === "docked") {
        for (const other of slots) {
          if (other !== slot && other.open && other.variant === "docked") {
            ensureFloatAnchor(other);
            other.setVariant("float");
          }
        }
      }
      if (v === "float") ensureFloatAnchor(slot);
      slot.setVariant(v);
    };

    const getFloatStyle = (slot: PanelSlot): React.CSSProperties => {
      const rect = containerRef.current?.getBoundingClientRect();
      const left = slot.floatLeft.current !== null
        ? slot.floatLeft.current
        : containerRef.current
          ? (rect?.left ?? 0) + containerRef.current.offsetWidth - slot.width - 16
          : 0;
      const top = slot.floatTop.current !== null ? slot.floatTop.current : (rect?.top ?? 0);
      return { position: "fixed", top, left, zIndex: topPanel === slot.letter ? 10000 : 9999 };
    };

    // `displayLetter` defaults to the slot's own letter (the normal
    // `allowMultiple` case, one Draggable per letter) but can be overridden
    // — used when `allowMultiple` is off, where `singleContainer` (always
    // slot "A") renders whichever letter's content is currently active
    // without the underlying Draggable instance (and therefore its
    // width/variant/position) ever changing.
    const renderPanel = (slot: PanelSlot, displayLetter: PanelLetter = slot.letter) => {
      if (!slot.mounted) return null;
      return (
        <Draggable
          variant={slot.variant}
          defaultWidth={slot.width}
          defaultHeight={420}
          minWidth={280}
          minHeight={200}
          onVariantChange={handleVariantChange(slot)}
          onWidthChange={slot.setWidth}
          onResizeStateChange={slot.setResizing}
          onInteract={() => setTopPanel(slot.letter)}
          // `renderHeaderControls` (grip + dock rendered INLINE via
          // ContainerHeader's own `icon`/`actions` slots), not the default
          // absolute-overlay `BuiltInHeaderControls` — that overlay's dock
          // button sits in the exact same top-right corner a `ContainerHeader`
          // `onClose` button would occupy, so adding a close button on top of
          // the default overlay would visually collide with it. This is the
          // same pattern every real consumer (`ai-panel.tsx`,
          // `agent-notifications.tsx`, `draggable-panel.tsx`) already uses.
          renderHeaderControls={({ gripProps, dockButtonProps, dockIcon, variant: dVariant }) => (
            <ContainerHeader
              title={`Panel ${displayLetter}`}
              icon={dVariant === "float" ? (
                <div {...gripProps}>
                  <GripVertical className="h-4 w-4" strokeWidth={1.5} />
                </div>
              ) : undefined}
              bordered={false}
              actions={
                <Tooltip content={dockButtonProps["aria-label"]} placement="bottom" asLabel>
                  <button
                    {...dockButtonProps}
                    className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                  >
                    {dockIcon}
                  </button>
                </Tooltip>
              }
              onClose={() => {
                slot.setOpen(false);
                setActiveLetter(null);
              }}
            />
          )}
          className={[
            "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",
            slot.variant === "float" ? "shadow-lg" : "h-full",
          ].join(" ")}
        >
          <div className="flex-1 flex items-center justify-center p-4">
            <p className="lyra-body-sm text-lyra-fg-secondary text-center">Panel {displayLetter} content</p>
          </div>
        </Draggable>
      );
    };

    // Shared "selected" treatment for whichever toggle-button flavor is
    // currently rendered (outline `Button` in the PageHeader, or icon
    // `ActionIconButton` in the AppHeader) — same idiom as `PanelPinButton`.
    const selectedClass = "bg-lyra-bg-active-moderate text-lyra-fg-active-strong hover:bg-lyra-bg-active-moderate";

    // Both toggle-button locations share these: with `allowMultiple`, each
    // button drives (and reflects) its own slot as before; with it off,
    // every button drives `singleContainer` and is "selected" only when
    // that shared container is open AND showing its own letter.
    const isSlotSelected = (slot: PanelSlot) =>
      allowMultiple ? slot.open : singleContainer.open && activeLetter === slot.letter;
    const handleSlotClick = (slot: PanelSlot) =>
      allowMultiple ? handleToggleOpen(slot) : handleSingleToggle(slot.letter);

    // At most one slot can be "docked" (enforced above)
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-lyra-bg-surface-shell">
        {/* App Header mode moves the panel toggles up here as icon buttons
            (see the `ActionIconButton`s below) — removed from the
            PageHeader's own `actions` further down. No `className` here —
            `AppHeader` itself has no background of its own by design (see
            app-header.tsx), and every real usage (`AdminShell.stories.tsx`'s
            `AdminShellDemo`, `AgentNextGenTemplate.stories.tsx`'s own
            top-level wrapper) leaves it that way, relying on whatever's
            behind it — here, this outer wrapper's own
            `bg-lyra-bg-surface-shell` (below), same as
            `AgentNextGenTemplate.stories.tsx`'s identical
            `bg-lyra-bg-surface-shell` on ITS outer wrapper. Giving the
            header its own explicit white fill/border instead (an earlier
            version of this did) would diverge from that real pattern for
            no functional reason. */}
        {appHeader && (
          <AppHeader
            appName={<AppName icon={<LayoutGrid className="h-6 w-6" strokeWidth={1.5} />} name="Demo App" />}
            actions={
              <>
                {slots.map((slot) => (
                  <ActionIconButton
                    key={slot.letter}
                    ref={slot.buttonRef}
                    size="xl"
                    title={`Toggle panel ${slot.letter}`}
                    aria-pressed={isSlotSelected(slot)}
                    onClick={handleSlotClick(slot)}
                    className={isSlotSelected(slot) ? selectedClass : undefined}
                  >
                    <span className="lyra-label-emphasis" aria-hidden="true">{slot.letter}</span>
                  </ActionIconButton>
                ))}
              </>
            }
          />
        )}

        {/* No top padding when the AppHeader is showing — its own h-14 already
            provides the visual separation from the content below; the extra
            p-4 top inset was only ever needed to keep content off the
            viewport edge when there's no AppHeader above it. */}
        <div className={appHeader ? "flex flex-1 min-h-0 overflow-hidden px-4 pb-4" : "flex flex-1 min-h-0 overflow-hidden p-4"}>

        {/* Content area — ref used to position all float panels */}
        <div ref={containerRef} className="relative flex flex-1 min-w-0 overflow-hidden">
          <div className="flex flex-col flex-1 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden">
            <PageHeader
              title="Page Title"
              actions={appHeader ? undefined : (
                <div className="flex items-center gap-2">
                  {slots.map((slot) => (
                    <Button
                      key={slot.letter}
                      ref={slot.buttonRef}
                      variant="outline"
                      aria-pressed={isSlotSelected(slot)}
                      onClick={handleSlotClick(slot)}
                      className={isSlotSelected(slot) ? selectedClass : undefined}
                    >
                      Toggle panel {slot.letter}
                    </Button>
                  ))}
                </div>
              )}
            />
          </div>
        </div>

        {/* Each panel gets its OWN single persistent wrapper across BOTH
            variants, moved outside `containerRef` — remounting on
            every dock/undock silently resets Draggable's internal
            width/height back to its `defaultWidth`/`defaultHeight`).
            With multiple panels this matters even more: they used to share
            docked-slot wrappers whose CONTENT switched between panels'
            `<Draggable>` elements, which is its own separate remount
            trigger on top of the float<->docked one — reported repro:
            "resize panel B to max width -> click dock -> the panel area is
            the correct size but the panel itself is not". Giving each
            panel its own always-mounted wrapper (whose width collapses to
            0 and overflow switches to visible whenever THAT panel isn't
            the docked one) reproduces the same "only one docked slot has
            real width" layout without ever unmounting any `Draggable` —
            the single-dock rule above already guarantees at most one slot
            is ever "docked" at once.

            With `allowMultiple` off there's only ONE wrapper, always built
            from `singleContainer` (slot "A") — its own `variant`/`width`
            never change just because a different button was clicked, so
            the box itself never resizes, repositions, or re-animates
            open+close when switching which letter is showing; only
            `renderPanel`'s `displayLetter` (and therefore the title/body
            text inside it) does. */}
        {(allowMultiple ? slots : [singleContainer]).map((slot) => (
          <div
            key={slot.letter}
            style={
              slot.variant === "docked"
                ? {
                    width: slot.state === "open" ? slot.width + 16 : 0,
                    overflow: "hidden",
                    flexShrink: 0,
                    transition: slot.resizing ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }
                : { width: 0, overflow: "visible", flexShrink: 0 }
            }
          >
            <div
              className={slot.variant === "docked" ? "h-full pl-4" : undefined}
              style={
                slot.variant === "docked"
                  ? { width: slot.width + 16, display: slot.state === "open" ? "block" : "none" }
                  : {
                      ...getFloatStyle(slot),
                      pointerEvents: "none",
                      visibility: slot.state === "closed" ? "hidden" : "visible",
                      opacity: slot.state === "open" ? 1 : 0,
                      transform: slot.state === "open" ? "translateY(0)" : "translateY(-8px)",
                      transition: slot.state === "open"
                        ? "opacity 150ms ease, transform 150ms ease"
                        : "opacity 100ms ease, transform 100ms ease",
                    }
              }
            >
              {allowMultiple ? renderPanel(slot) : renderPanel(slot, activeLetter ?? slot.letter)}
            </div>
          </div>
        ))}

        </div>
      </div>
    );
}

// Shared by both `MultiplePanelsSingleDock` and `MultiDock` below — same
// four controls, same defaults, same descriptions (an explicit request:
// "keep the same controls available as Single Dock"). `MultiDock` adds the
// Main Container's own independent drag/float ability on top of these; it
// doesn't get a control of its own since it's always present, not toggled.
const sharedPanelArgs = {
  appHeader: false,
  panelCount: 2,
  startDocked: true,
  allowMultiple: true,
} as unknown as Record<string, unknown>;

const sharedPanelArgTypes = {
  appHeader: {
    control: "boolean",
    name: "App Header",
    description: "Show an AppHeader above the demo with the panel toggles as icon buttons (moved out of the PageHeader).",
  },
  panelCount: {
    control: { type: "number", min: 1, max: 5, step: 1 },
    name: "Panel Buttons",
    description: "How many panel toggle buttons/panels to show (1-5). Backed by 5 always-mounted internal panel slots (A-E); this just controls how many are shown, so shrinking then growing the count preserves each hidden panel's state.",
  },
  startDocked: {
    control: "boolean",
    name: "Start Docked",
    description: "Each panel's dock preference once opened: docked/pinned (single-dock rule applies) when true, or float (drag mode) when false. All panels still start closed either way.",
  },
  allowMultiple: {
    control: "boolean",
    name: "Multiple Containers",
    description: "When true (default), several panels can be open at once — opening a panel while another is docked+open floats the other one instead of closing it. When false, there's only ONE container: every button just changes its content (title/body), and it never resizes/repositions itself when you switch which button is active — same idea as Outbound-Campaigns' real Online Help/AI Assist panels sharing one docked slot.",
  },
} as unknown as Record<string, unknown>;

export const MultiplePanelsSingleDock: Story = {
  name: "Main Container - Single Dock",
  parameters: { layout: "fullscreen" },
  args: sharedPanelArgs,
  argTypes: sharedPanelArgTypes,
  // Keyed by `appHeader`/`startDocked`/`allowMultiple` (not `panelCount`) —
  // the first two genuinely change a slot's initial variant, and
  // `useState`'s initial value only ever applies on first mount, so
  // flipping either needs a fresh mount. `allowMultiple` doesn't feed a
  // `useState` initializer, but it DOES switch which slots actually get
  // rendered (one shared "single container" vs. each slot independently),
  // so it's keyed too — flipping it live would otherwise leave whichever
  // slots were open in the old mode orphaned (still `open` in state, just
  // no longer rendered). `panelCount` alone stays out of the key, since it
  // only slices an always-fully-mounted array of 5 slots without changing
  // which rendering branch is used.
  render: (args) => {
    const { appHeader, panelCount, startDocked, allowMultiple } = args as unknown as MultiplePanelsSingleDockDemoProps;
    return (
      <MultiplePanelsSingleDockDemo
        key={`${appHeader}-${startDocked}-${allowMultiple}`}
        appHeader={appHeader}
        panelCount={panelCount}
        startDocked={startDocked}
        allowMultiple={allowMultiple}
      />
    );
  },
};

/**
 * `MultiDockDemo` is a deliberate near-duplicate of
 * `MultiplePanelsSingleDockDemo` above (same `usePanelSlot`-backed side
 * panels A-E, same single-dock rule, same `allowMultiple`/`startDocked`
 * behavior) rather than a shared/parametrized component — per an explicit
 * request for a NEW, separate story ("Multi Dock") so the existing,
 * already-verified "Single Dock" story's behavior stays completely
 * untouched. The one thing this version adds on top: the Main Container
 * itself (previously always a plain, non-draggable box) can now be
 * dragged out into a floating window and docked back, independently of
 * the side panels' own single-dock rule — it's a separate, always-present
 * dock slot of its own, not a sixth competitor for the side panels' one
 * shared slot.
 *
 * Why the Main Container's DOCKED state isn't just another `<Draggable
 * variant="docked">` instance (like the side panels are): `Draggable`'s
 * docked mode always renders at an explicit pixel `width` (see
 * draggable.tsx's `style={{ width, minWidth }}`) — there's no "fill the
 * remaining flex space" mode. The Main Container needs exactly that (it's
 * the primary content area, not a fixed-width sidebar), so its docked
 * representation here is a plain flex-1 box with its own manual
 * undock button — NOT a `Draggable` instance — while its FLOATING
 * representation genuinely is a real `Draggable` (defaultWidth/defaultHeight,
 * drag handle, corner resize, dock-back button), matching every other
 * floating panel in this file. `mainWidth` is still lifted out to this
 * component's own state (via `onWidthChange`, same pattern as the side
 * panels' `slot.width`) so a resize while floating survives a
 * dock-then-refloat round trip even though the underlying `Draggable`
 * instance itself unmounts/remounts across that transition (unlike the
 * side panels, which stay mounted the whole time specifically to avoid
 * that reset — see PROJECT_SUMMARY.md's "remount bug" fix — but here
 * there's no docked-mode `Draggable` instance to keep alive in the first
 * place, so there's nothing to preserve by NOT unmounting).
 */
function MultiDockDemo({ appHeader, panelCount, startDocked, allowMultiple }: MultiplePanelsSingleDockDemoProps) {
    // ── Side panels A-E — identical to MultiplePanelsSingleDockDemo above ──
    const defaultVariant: DraggableVariant = startDocked ? "docked" : "float";
    const slotA = usePanelSlot("A", defaultVariant);
    const slotB = usePanelSlot("B", defaultVariant);
    const slotC = usePanelSlot("C", defaultVariant);
    const slotD = usePanelSlot("D", defaultVariant);
    const slotE = usePanelSlot("E", defaultVariant);
    const allSlots = [slotA, slotB, slotC, slotD, slotE];
    const slots = allSlots.slice(0, panelCount);

    const singleContainer = slotA;
    const [activeLetter, setActiveLetter] = useState<PanelLetter | null>(null);

    // Widened to include "Main" — the Main Container's own floating window
    // competes for front-most z-index alongside the lettered side panels.
    const [topPanel, setTopPanel] = useState<TopPanelKey | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const ensureFloatAnchor = (slot: PanelSlot) => {
      if (slot.floatLeft.current !== null) return;
      const btnRect = slot.buttonRef.current?.getBoundingClientRect();
      if (btnRect) {
        slot.floatLeft.current = btnRect.left;
        slot.floatTop.current = btnRect.bottom + 8;
      } else if (containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        slot.floatLeft.current = r.left + containerRef.current.offsetWidth - slot.width - 16;
      }
    };

    const handleToggleOpen = (slot: PanelSlot) => () => {
      const next = !slot.open;
      if (next) {
        if (!allowMultiple) {
          for (const other of slots) {
            if (other !== slot && other.open) other.setOpen(false);
          }
        }
        ensureFloatAnchor(slot);
        if (allowMultiple && slot.variant === "docked") {
          for (const other of slots) {
            if (other !== slot && other.open && other.variant === "docked") {
              ensureFloatAnchor(other);
              other.setVariant("float");
            }
          }
        }
        setTopPanel(slot.letter);
      }
      slot.setOpen(next);
    };

    const handleSingleToggle = (letter: PanelLetter) => (e: React.MouseEvent<HTMLButtonElement>) => {
      if (singleContainer.open && activeLetter === letter) {
        singleContainer.setOpen(false);
        return;
      }
      if (!singleContainer.open) {
        if (singleContainer.floatLeft.current === null) {
          const btnRect = e.currentTarget.getBoundingClientRect();
          singleContainer.floatLeft.current = btnRect.left;
          singleContainer.floatTop.current = btnRect.bottom + 8;
        }
        singleContainer.setOpen(true);
      }
      setActiveLetter(letter);
      setTopPanel(letter);
    };

    const handleVariantChange = (slot: PanelSlot) => (v: DraggableVariant) => {
      if (v === "docked") {
        for (const other of slots) {
          if (other !== slot && other.open && other.variant === "docked") {
            ensureFloatAnchor(other);
            other.setVariant("float");
          }
        }
      }
      if (v === "float") ensureFloatAnchor(slot);
      slot.setVariant(v);
    };

    const getFloatStyle = (slot: PanelSlot): React.CSSProperties => {
      const rect = containerRef.current?.getBoundingClientRect();
      const left = slot.floatLeft.current !== null
        ? slot.floatLeft.current
        : containerRef.current
          ? (rect?.left ?? 0) + containerRef.current.offsetWidth - slot.width - 16
          : 0;
      const top = slot.floatTop.current !== null ? slot.floatTop.current : (rect?.top ?? 0);
      return { position: "fixed", top, left, zIndex: topPanel === slot.letter ? 10000 : 9999 };
    };

    // `fillWidth` — true only for the one docked side panel "taking over"
    // the whole content row while the Main Container floats (see the
    // `takeover` computation and doc comment further down). `Draggable`'s
    // own docked mode always renders at an explicit pixel `width` (an
    // inline style — see draggable.tsx), which a plain className can't
    // override under normal CSS cascade rules; the `!w-full` Tailwind
    // "important" modifier is the one thing that CAN win over a
    // non-important inline style, so it's used here specifically to let
    // this one panel visually stretch to fill its now-full-width wrapper
    // without touching `draggable.tsx` itself or forcing a remount (which
    // would reset this panel's actual resize memory the moment the
    // takeover condition toggles off again).
    const renderPanel = (slot: PanelSlot, displayLetter: PanelLetter = slot.letter, fillWidth = false) => {
      if (!slot.mounted) return null;
      return (
        <Draggable
          variant={slot.variant}
          defaultWidth={slot.width}
          defaultHeight={420}
          minWidth={280}
          minHeight={200}
          // No left-edge resize handle while taking over the full width —
          // there's no main content to its left to grow into or shrink
          // back out of, so a resize handle there would just be dead UI.
          dockedResizable={!fillWidth}
          onVariantChange={handleVariantChange(slot)}
          onWidthChange={slot.setWidth}
          onResizeStateChange={slot.setResizing}
          onInteract={() => setTopPanel(slot.letter)}
          // While taking over the full content row, this panel reads as a
          // whole page rather than a docked side panel — swap its header
          // from `ContainerHeader` to the same `PageHeader` the Main
          // Container itself uses, with the dock-toggle and close actions
          // rebuilt manually in its `actions` slot (`PageHeader` has no
          // built-in equivalent to `ContainerHeader`'s `onClose`/grip). No
          // grip icon either way here — `fillWidth` only ever applies to a
          // DOCKED panel (float mode never takes over), so there's nothing
          // to drag.
          renderHeaderControls={({ gripProps, dockButtonProps, dockIcon, variant: dVariant }) =>
            fillWidth ? (
              <PageHeader
                title={`Panel ${displayLetter}`}
                actions={
                  <div className="flex items-center gap-2">
                    <Tooltip content={dockButtonProps["aria-label"]} placement="bottom" asLabel>
                      <button
                        {...dockButtonProps}
                        className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                      >
                        {dockIcon}
                      </button>
                    </Tooltip>
                    <Tooltip content="Close" placement="bottom" asLabel>
                      <button
                        type="button"
                        onClick={() => {
                          slot.setOpen(false);
                          setActiveLetter(null);
                        }}
                        aria-label="Close"
                        className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                      >
                        <X className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </Tooltip>
                  </div>
                }
              />
            ) : (
              <ContainerHeader
                title={`Panel ${displayLetter}`}
                icon={dVariant === "float" ? (
                  <div {...gripProps}>
                    <GripVertical className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                ) : undefined}
                bordered={false}
                actions={
                  <Tooltip content={dockButtonProps["aria-label"]} placement="bottom" asLabel>
                    <button
                      {...dockButtonProps}
                      className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                    >
                      {dockIcon}
                    </button>
                  </Tooltip>
                }
                onClose={() => {
                  slot.setOpen(false);
                  setActiveLetter(null);
                }}
              />
            )
          }
          className={[
            "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",
            slot.variant === "float" ? "shadow-lg" : "h-full",
            fillWidth ? "!w-full" : "",
          ].filter(Boolean).join(" ")}
        >
          <div className="flex-1 flex items-center justify-center p-4">
            <p className="lyra-body-sm text-lyra-fg-secondary text-center">Panel {displayLetter} content</p>
          </div>
        </Draggable>
      );
    };

    const selectedClass = "bg-lyra-bg-active-moderate text-lyra-fg-active-strong hover:bg-lyra-bg-active-moderate";

    const isSlotSelected = (slot: PanelSlot) =>
      allowMultiple ? slot.open : singleContainer.open && activeLetter === slot.letter;
    const handleSlotClick = (slot: PanelSlot) =>
      allowMultiple ? handleToggleOpen(slot) : handleSingleToggle(slot.letter);

    // ── Main Container — new in this story. Independent dock/float state,
    // NOT part of the side panels' single-dock rule (an explicit request:
    // "the main container is separate"). Always present — no open/close,
    // just docked (fills the content area) or float (a real Draggable). ──
    const [mainVariant, setMainVariant] = useState<DraggableVariant>("docked");
    const [mainWidth, setMainWidth] = useState(640);
    const mainFloatLeft = useRef<number | null>(null);
    const mainFloatTop = useRef<number | null>(null);

    // Anchors the float window at the content box's OWN current position
    // the first time it undocks (guarded the same way every other
    // float-anchor in this file is — only set once, then sticks until
    // dragged), so it visually "detaches in place" rather than jumping
    // somewhere unrelated to where it just was.
    const handleMainVariantChange = (v: DraggableVariant) => {
      if (v === "float" && mainFloatLeft.current === null && containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        mainFloatLeft.current = r.left;
        mainFloatTop.current = r.top;
      }
      setMainVariant(v);
      setTopPanel("Main");
    };

    const getMainFloatStyle = (): React.CSSProperties => {
      const rect = containerRef.current?.getBoundingClientRect();
      const left = mainFloatLeft.current !== null ? mainFloatLeft.current : (rect?.left ?? 0);
      const top = mainFloatTop.current !== null ? mainFloatTop.current : (rect?.top ?? 0);
      return { position: "fixed", top, left, zIndex: topPanel === "Main" ? 10000 : 9999 };
    };

    // Once the Main Container floats away, there's nothing left docked in
    // the content area — the one docked+open side panel (single-dock rule
    // guarantees at most one) should expand to fill that whole vacated
    // space instead of sitting in its normal narrow sidebar slot next to an
    // empty placeholder. `containerRef`'s own flex-basis collapses to 0
    // alongside it (see the JSX below) so the panel gets the full row, not
    // half of it.
    const dockedSideSlot = (allowMultiple ? slots : [singleContainer]).find(
      (slot) => slot.open && slot.variant === "docked"
    );
    const takeover = mainVariant === "float" && !!dockedSideSlot;

    return (
      <div className="flex flex-col h-screen overflow-hidden bg-lyra-bg-surface-shell">
        {appHeader && (
          <AppHeader
            appName={<AppName icon={<LayoutGrid className="h-6 w-6" strokeWidth={1.5} />} name="Demo App" />}
            actions={
              <>
                {slots.map((slot) => (
                  <ActionIconButton
                    key={slot.letter}
                    ref={slot.buttonRef}
                    size="xl"
                    title={`Toggle panel ${slot.letter}`}
                    aria-pressed={isSlotSelected(slot)}
                    onClick={handleSlotClick(slot)}
                    className={isSlotSelected(slot) ? selectedClass : undefined}
                  >
                    <span className="lyra-label-emphasis" aria-hidden="true">{slot.letter}</span>
                  </ActionIconButton>
                ))}
              </>
            }
          />
        )}

        <div className={appHeader ? "flex flex-1 min-h-0 overflow-hidden px-4 pb-4" : "flex flex-1 min-h-0 overflow-hidden p-4"}>

        {/* Content area — ref used to position all float panels (side AND
            main). Collapses to zero width in `takeover` mode so the one
            docked side panel (rendered as a sibling below) can expand into
            the space this would otherwise occupy. */}
        <div
          ref={containerRef}
          className="relative flex min-w-0 overflow-hidden"
          style={{ flex: takeover ? "0 0 0px" : "1 1 0%" }}
        >
          {takeover ? null : mainVariant === "docked" ? (
            <div className="flex flex-col flex-1 rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base overflow-hidden">
              <PageHeader
                title="Page Title"
                actions={
                  <div className="flex items-center gap-2">
                    {!appHeader && slots.map((slot) => (
                      <Button
                        key={slot.letter}
                        ref={slot.buttonRef}
                        variant="outline"
                        aria-pressed={isSlotSelected(slot)}
                        onClick={handleSlotClick(slot)}
                        className={isSlotSelected(slot) ? selectedClass : undefined}
                      >
                        Toggle panel {slot.letter}
                      </Button>
                    ))}
                    {/* Main Container's own undock control — see this
                        function's doc comment above for why it's a plain
                        button here rather than a `Draggable`'s own
                        `dockButtonProps` (its docked mode isn't a
                        `Draggable` instance at all). */}
                    <Tooltip content="Undock" placement="bottom" asLabel>
                      <button
                        type="button"
                        onClick={() => handleMainVariantChange("float")}
                        aria-label="Undock"
                        className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                      >
                        <Move className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </Tooltip>
                  </div>
                }
              />
            </div>
          ) : (
            // Nothing is docked in the content area while the Main Container
            // floats — this placeholder fills the same spot instead of
            // leaving the layout empty, so the row doesn't visually
            // collapse/jump. Its own `bg-lyra-bg-surface-container-subtle`
            // is deliberately distinct from the outer wrapper's
            // `bg-lyra-bg-surface-shell` (unchanged) so this inner
            // container reads as its own surface rather than blending into
            // the page background behind it.
            <div className="flex flex-1 items-center justify-center rounded-lyra-lg border border-dashed border-lyra-border-subtle bg-lyra-bg-surface-container-subtle">
              <p className="lyra-body-sm text-lyra-fg-secondary">Main content is floating — drag to redock</p>
            </div>
          )}
        </div>

        {(allowMultiple ? slots : [singleContainer]).map((slot) => {
          // This particular slot takes over the whole content row while
          // the Main Container floats (see `takeover`/`dockedSideSlot`
          // above) — both wrapper divs switch from their normal fixed
          // pixel width to filling all available space instead.
          const isTakeoverSlot = takeover && slot === dockedSideSlot;
          return (
          <div
            key={slot.letter}
            style={
              slot.variant === "docked"
                ? isTakeoverSlot
                  ? { flex: "1 1 0%", minWidth: 0, overflow: "hidden" }
                  : {
                      width: slot.state === "open" ? slot.width + 16 : 0,
                      overflow: "hidden",
                      flexShrink: 0,
                      transition: slot.resizing ? "none" : "width 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }
                : { width: 0, overflow: "visible", flexShrink: 0 }
            }
          >
            <div
              className={
                slot.variant === "docked"
                  ? isTakeoverSlot
                    // No left padding either — that gap existed to keep the
                    // resize handle clear of the main content beside it,
                    // and there's neither a handle (see `dockedResizable`
                    // above) nor a main content area to keep clear of here.
                    ? "h-full"
                    : "h-full pl-4"
                  : undefined
              }
              style={
                slot.variant === "docked"
                  ? isTakeoverSlot
                    ? { width: "100%", display: slot.state === "open" ? "block" : "none" }
                    : { width: slot.width + 16, display: slot.state === "open" ? "block" : "none" }
                  : {
                      ...getFloatStyle(slot),
                      pointerEvents: "none",
                      visibility: slot.state === "closed" ? "hidden" : "visible",
                      opacity: slot.state === "open" ? 1 : 0,
                      transform: slot.state === "open" ? "translateY(0)" : "translateY(-8px)",
                      transition: slot.state === "open"
                        ? "opacity 150ms ease, transform 150ms ease"
                        : "opacity 100ms ease, transform 100ms ease",
                    }
              }
            >
              {allowMultiple
                ? renderPanel(slot, slot.letter, isTakeoverSlot)
                : renderPanel(slot, activeLetter ?? slot.letter, isTakeoverSlot)}
            </div>
          </div>
          );
        })}

        {/* The Main Container's floating window — a real `Draggable`
            instance (unlike its docked state above), mounted only while
            `mainVariant === "float"`. `mainWidth` is lifted out to this
            component's own state (see doc comment above) so a resize
            survives a dock-then-refloat round trip even though this
            particular `Draggable` instance itself unmounts/remounts across
            that transition. */}
        {mainVariant === "float" && (
          <div style={{ ...getMainFloatStyle(), pointerEvents: "none" }}>
            <Draggable
              variant="float"
              defaultWidth={mainWidth}
              defaultHeight={420}
              minWidth={400}
              minHeight={250}
              onVariantChange={handleMainVariantChange}
              onWidthChange={setMainWidth}
              onInteract={() => setTopPanel("Main")}
              renderHeaderControls={({ gripProps, dockButtonProps, dockIcon }) => (
                <ContainerHeader
                  title="Page Title"
                  icon={
                    <div {...gripProps}>
                      <GripVertical className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  }
                  bordered={false}
                  actions={
                    <div className="flex items-center gap-2">
                      {/* Same panel toggle buttons the docked Main Container's
                          own PageHeader shows in non-App-Header mode — without
                          these, undocking Main (App Header off) would leave no
                          way to open/close the side panels at all, since the
                          docked PageHeader they normally live in isn't rendered
                          while Main is floating. Shares the same `slot.buttonRef`
                          as that other location (only one of the two is ever
                          mounted at a time — same precedent as the App
                          Header/PageHeader toggle-button locations elsewhere in
                          this file). Still hidden when `appHeader` is true, same
                          as the docked case — those buttons live in the
                          AppHeader itself instead, regardless of Main's variant. */}
                      {!appHeader && slots.map((slot) => (
                        <Button
                          key={slot.letter}
                          ref={slot.buttonRef}
                          variant="outline"
                          aria-pressed={isSlotSelected(slot)}
                          onClick={handleSlotClick(slot)}
                          className={isSlotSelected(slot) ? selectedClass : undefined}
                        >
                          Toggle panel {slot.letter}
                        </Button>
                      ))}
                      <Tooltip content={dockButtonProps["aria-label"]} placement="bottom" asLabel>
                        <button
                          {...dockButtonProps}
                          className="flex h-8 w-8 items-center justify-center rounded-lyra-sm text-lyra-fg-secondary hover:bg-lyra-state-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lyra-border-focus"
                        >
                          {dockIcon}
                        </button>
                      </Tooltip>
                    </div>
                  }
                />
              )}
              className="rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-base shadow-lg"
            >
              <div className="flex-1 flex items-center justify-center p-4">
                <p className="lyra-body-sm text-lyra-fg-secondary text-center">Main content</p>
              </div>
            </Draggable>
          </div>
        )}

        </div>
      </div>
    );
}

export const MultiDock: Story = {
  name: "Main Container - Multi Dock",
  parameters: { layout: "fullscreen" },
  args: sharedPanelArgs,
  argTypes: sharedPanelArgTypes,
  // Same reasoning as MultiplePanelsSingleDock's key just above — `appHeader`
  // and `startDocked` need a fresh mount, `panelCount` doesn't, and
  // `allowMultiple` needs one because it switches which slots render.
  // (The Main Container's own dock/float state isn't part of this key —
  // nothing about `appHeader`/`startDocked`/`allowMultiple`/`panelCount`
  // changes its initial variant, which is always "docked".)
  render: (args) => {
    const { appHeader, panelCount, startDocked, allowMultiple } = args as unknown as MultiplePanelsSingleDockDemoProps;
    return (
      <MultiDockDemo
        key={`${appHeader}-${startDocked}-${allowMultiple}`}
        appHeader={appHeader}
        panelCount={panelCount}
        startDocked={startDocked}
        allowMultiple={allowMultiple}
      />
    );
  },
};

export const Interactive: Story = {
  name: "Interactive (toggle float ↔ docked)",
  parameters: { layout: "fullscreen" },
  render: () => {
    const [variant, setVariant] = useState<DraggableVariant>("float");

    const panel = (
      <Draggable
        variant={variant}
        defaultWidth={320}
        defaultHeight={420}
        minWidth={280}
        minHeight={200}
        onVariantChange={setVariant}
        className={[
          "rounded-lyra-lg border border-lyra-border-subtle bg-lyra-bg-surface-overlay",
          variant === "float" ? "shadow-lg" : "",
        ].join(" ")}
      >
        <ContainerHeader title="Panel" bordered={false} />
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="lyra-body-sm text-lyra-fg-secondary text-center">
            Currently <strong>{variant}</strong>.<br />
            Use the icon in the top-right to toggle.
          </p>
        </div>
      </Draggable>
    );

    return (
      <div className="flex h-screen overflow-hidden bg-lyra-bg-surface-shell">
        <div className="flex-1 flex items-center justify-center">
          <p className="lyra-body-md text-lyra-fg-secondary">Main content area</p>
        </div>
        {variant === "docked" ? (
          <div className="h-full pr-3 pb-3">{panel}</div>
        ) : (
          // Same `pointer-events-none` reasoning as the Float story above —
          // this wrapper just positions the panel's starting spot; the
          // panel's own root stays interactive and follows the drag.
          <div className="absolute top-16 left-16 pointer-events-none">{panel}</div>
        )}
      </div>
    );
  },
};
