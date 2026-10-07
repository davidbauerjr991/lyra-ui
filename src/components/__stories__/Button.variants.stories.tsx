import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import {
  BUTTON_STYLES,
  TEXT_SIZES,
  ICON_SIZES,
  Sparkles,
  ChevronDown,
  RefreshCw,
  Trash2,
  MoreIcon,
} from "./Button.shared";

/* One page per Button variant, shown under "Button/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Button → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Button> = {
  title: "Custom Primitives/Button/Variants",
  component: Button,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Button>;

const caption = "lyra-body-sm text-lyra-fg-secondary";

export const Styles: Story = {
  name: "Styles",
  render: () => (
    <div className="flex items-center gap-3">
      {BUTTON_STYLES.map((s) => (
        <Button key={s.label} variant={s.variant}>
          Button
        </Button>
      ))}
    </div>
  ),
};

export const States: Story = {
  name: "States",
  render: () => (
    <div className="grid grid-cols-5 gap-x-6 gap-y-3 items-center">
      <span className={caption}>State</span>
      {BUTTON_STYLES.map((s) => (
        <span key={s.label} className={caption}>{s.label}</span>
      ))}

      <span className={caption}>Default</span>
      {BUTTON_STYLES.map((s) => (
        <Button key={s.label} variant={s.variant}>Button</Button>
      ))}

      <span className={caption}>Disabled</span>
      {BUTTON_STYLES.map((s) => (
        <Button key={s.label} variant={s.variant} disabled>Button</Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Text Buttons</h3>
        <div className="flex items-end gap-4">
          {TEXT_SIZES.map((s) => (
            <div key={s.size} className="flex flex-col items-center gap-1">
              <Button size={s.size}>Button</Button>
              <span className={caption}>{s.px}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="lyra-body-sm-emphasis text-lyra-fg-secondary mb-3">Icon Buttons</h3>
        <div className="flex items-end gap-4">
          {ICON_SIZES.map((s) => (
            <div key={s.size} className="flex flex-col items-center gap-1">
              <Button variant="icon" size={s.size} title="More options">
                <MoreIcon className={s.iconClass} />
              </Button>
              <span className={caption}>{s.px}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const IconButtons: Story = {
  name: "Icon Buttons",
  render: () => (
    <div className="grid grid-cols-5 gap-x-6 gap-y-3 items-center">
      <span className={caption}>State</span>
      {BUTTON_STYLES.map((s) => (
        <span key={s.label} className={caption}>{s.label}</span>
      ))}

      <span className={caption}>Default</span>
      {BUTTON_STYLES.map((s) => (
        <Button key={s.label} variant={s.iconVariant} size="icon" title="More options">
          <MoreIcon />
        </Button>
      ))}

      <span className={caption}>Disabled</span>
      {BUTTON_STYLES.map((s) => (
        <Button key={s.label} variant={s.iconVariant} size="icon" title="More options" disabled>
          <MoreIcon />
        </Button>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  name: "With Icons",
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="outline">
        <Sparkles className="h-4 w-4" strokeWidth={1.5} />
        Button
        <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="default">
        <Sparkles className="h-4 w-4" strokeWidth={1.5} />
        Button
        <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="destructive">
        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
        Delete
      </Button>
      <Button variant="ghost">
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
        Refresh
      </Button>
    </div>
  ),
};

/* `badge` overlays a count `Badge` (shape="circle") on the button's top-right
   corner — the same shared rendering `ActionIconButton` and
   `notifications-bell.tsx` use, so any icon `Button` can show a count
   without a bespoke wrapper. */
export const IconButtonWithBadge: Story = {
  name: "Icon Button — With Badge",
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Button variant="icon" size="icon-2xl" title="Notifications, 4 unread" badge={4}>
          <MoreIcon className="h-5 w-5" />
        </Button>
        <span className={caption}>badge=4</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Button variant="icon" size="icon-2xl" title="Notifications, 99+ unread" badge={128}>
          <MoreIcon className="h-5 w-5" />
        </Button>
        <span className={caption}>badge=128 → 99+</span>
      </div>
    </div>
  ),
};

/* ── Loading — `loading` puts a spinner over the label, sets aria-busy and
   ignores clicks. The button keeps its width and stays focusable. ── */
export const Loading: Story = {
  name: "Loading",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        {BUTTON_STYLES.map((b) => (
          <Button key={b.label} variant={b.variant} loading>
            {b.label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {TEXT_SIZES.map((s) => (
          <Button key={s.size} size={s.size} loading>
            {s.px}
          </Button>
        ))}
        <Button variant="icon" size="icon" aria-label="Refresh" loading>
          <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  ),
};

/* ── Icon-only tooltip — `tooltip` shows the accessible name as a tooltip on
   hover and keyboard focus. `tooltip="text"` uses different text. Without it
   (the default) no tooltip appears. ── */
export const IconTooltip: Story = {
  name: "Icon Tooltip",
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="icon" size="icon" aria-label="Refresh" tooltip>
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="icon" size="icon" aria-label="Delete" tooltip="Delete this item">
        <Trash2 className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="icon" size="icon" aria-label="No tooltip (default)">
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
    </div>
  ),
};

/* ── Disabled contrast — a disabled Ghost or icon button at 40% opacity is
   hard to see. `disabledContrast="high"` keeps it readable. ── */
export const DisabledContrast: Story = {
  name: "Disabled Contrast",
  render: () => (
    <div className="grid grid-cols-[120px_auto_auto] items-center gap-x-8 gap-y-4">
      <span />
      <span className="lyra-body-sm text-lyra-fg-secondary">Default</span>
      <span className="lyra-body-sm text-lyra-fg-secondary">High</span>
      <span className="lyra-body-sm text-lyra-fg-secondary">Ghost</span>
      <Button variant="ghost" disabled>Clear</Button>
      <Button variant="ghost" disabled disabledContrast="high">Clear</Button>
      <span className="lyra-body-sm text-lyra-fg-secondary">Icon</span>
      <Button variant="icon" size="icon" aria-label="Refresh" disabled>
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
      <Button variant="icon" size="icon" aria-label="Refresh" disabled disabledContrast="high">
        <RefreshCw className="h-4 w-4" strokeWidth={1.5} />
      </Button>
    </div>
  ),
};

/* ── State sheet — rest, hover, pressed, keyboard focus and disabled side by
   side for design review. Hover, pressed and focus are the real state classes
   applied statically; use the other pages to try them live. ── */
const STATE_CLASSES: Record<string, { hover: string; pressed: string }> = {
  default: { hover: "bg-lyra-state-hover-primary", pressed: "bg-lyra-state-pressed-primary" },
  destructive: { hover: "bg-lyra-state-hover-destructive", pressed: "bg-lyra-state-pressed-destructive" },
  outline: { hover: "bg-lyra-state-hover", pressed: "bg-lyra-state-pressed" },
  ghost: { hover: "bg-lyra-state-hover", pressed: "bg-lyra-state-pressed" },
};
const FOCUS_CLASS = "ring-2 ring-lyra-border-focus ring-offset-2";

export const StateSheet: Story = {
  name: "State Sheet",
  render: () => (
    <div className="grid grid-cols-[120px_repeat(5,auto)] items-center gap-x-6 gap-y-4">
      <span />
      {["Rest", "Hover", "Pressed", "Focus", "Disabled"].map((h) => (
        <span key={h} className="lyra-body-sm text-lyra-fg-secondary">{h}</span>
      ))}
      {BUTTON_STYLES.map((b) => (
        <div key={b.label} className="contents">
          <span className="lyra-body-sm text-lyra-fg-secondary">{b.label}</span>
          <Button variant={b.variant}>{b.label}</Button>
          <Button variant={b.variant} className={STATE_CLASSES[b.variant].hover}>{b.label}</Button>
          <Button variant={b.variant} className={STATE_CLASSES[b.variant].pressed}>{b.label}</Button>
          <Button variant={b.variant} className={FOCUS_CLASS}>{b.label}</Button>
          <Button variant={b.variant} disabled>{b.label}</Button>
        </div>
      ))}
    </div>
  ),
};
