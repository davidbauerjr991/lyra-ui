import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Check, Minus } from "lucide-react";
import { Badge } from "../badge";
import { Button } from "../button";
import { COLORS, PILL_VARIANTS, CIRCLE_VARIANTS, BADGE_SIZES } from "./Badge.shared";

/* One page per Badge variant, shown under "Badge/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Badge → Default. "!autodocs" keeps this folder from getting a second Docs
   page. Grouped as before: pill-shape stories first (former Chip), then
   circle-shape stories (former StatusBadge). */
const meta: Meta<typeof Badge> = {
  title: "Custom Primitives/Badge/Variants",
  component: Badge,
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/* ═══════════════════ Pill shape (formerly Chip) ═══════════════════ */

export const PillAllVariants: Story = {
  name: "Pill - All Variants",
  render: () => (
    <div className="flex gap-12">
      {PILL_VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col gap-2 items-start">
          <p className="lyra-body-sm text-lyra-fg-secondary mb-1 capitalize">{variant}</p>
          {COLORS.map((color) => (
            <Badge key={color} shape="pill" color={color} variant={variant}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};

/* ═══════════════════ Circle shape (formerly StatusBadge) ═══════════════════ */

export const CircleAllVariants: Story = {
  name: "Circle - All Variants",
  render: () => (
    <div className="flex flex-col gap-6">
      {/* Number badges */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Number badges</p>
        <div className="flex items-center gap-3 flex-wrap">
          {CIRCLE_VARIANTS.map((v) => (
            <div key={v} className="flex flex-col items-center gap-1">
              <Badge shape="circle" variant={v} count={7} />
              <span className="lyra-body-xs text-lyra-fg-secondary capitalize">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dot badges */}
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Dot badges</p>
        <div className="flex items-center gap-4 flex-wrap">
          {CIRCLE_VARIANTS.map((v) => (
            <div key={v} className="flex flex-col items-center gap-1">
              <Badge shape="circle" variant={v} dot size="md" />
              <span className="lyra-body-xs text-lyra-fg-secondary capitalize">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const CircleSizes: Story = {
  name: "Circle - Sizes",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Number — sm / md / lg</p>
        <div className="flex items-end gap-4">
          {BADGE_SIZES.map((s) => (
            <div key={s} className="flex flex-col items-center gap-1">
              <Badge shape="circle" size={s} count={12} />
              <span className="lyra-body-xs text-lyra-fg-secondary">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">Dot — sm / md / lg</p>
        <div className="flex items-end gap-4">
          {BADGE_SIZES.map((s) => (
            <div key={s} className="flex flex-col items-center gap-1">
              <Badge shape="circle" variant="critical" dot size={s} />
              <span className="lyra-body-xs text-lyra-fg-secondary">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const CircleOverflow: Story = {
  name: "Circle - Count overflow (max cap)",
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={5} />
        <span className="lyra-body-xs text-lyra-fg-secondary">5</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={99} />
        <span className="lyra-body-xs text-lyra-fg-secondary">99</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={100} />
        <span className="lyra-body-xs text-lyra-fg-secondary">100 → 99+</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Badge shape="circle" count={999} max={999} />
        <span className="lyra-body-xs text-lyra-fg-secondary">custom max 999</span>
      </div>
    </div>
  ),
};

/* ── Positioned on element ──
   Matches the two real corner-badge patterns in the codebase exactly,
   rather than ad-hoc demo styling:
     - Icon buttons: `Button`'s own built-in `badge` prop (used by every
       AppHeader icon button via `ActionIconButton`/`notifications-bell.tsx`
       — see button.tsx) — a count `Badge` (`size="sm"`, `variant="critical"`)
       absolute-positioned `-top-2 -right-2` (-8px each direction), pushed
       out past the button's corner rather than sitting flush inside it.
       Shown here on all five real `Button` icon sizes (`icon-sm`/`icon`/
       `icon-lg`/`icon-xl`/`icon-2xl` — see Button.stories.tsx's "Icon
       Buttons" row) with the same fixed offset each time, same as
       production.
     - Avatars: `agent-profile.tsx`'s `Avatar`/`StatusIcon` pattern — a
       `Badge` absolute-positioned `bottom-[-2px] right-[-2px]` with a
       `border border-lyra-bg-surface-base` ring (not `ring-2`), sitting on
       an avatar circle filled with the real `bg-lyra-avatar-default-bg`
       token. Shown both as a plain dot (simple online/offline signal) and
       with an icon glyph inside (`Check`/`Minus`) — `StatusIcon`'s actual
       pattern for `AgentProfile`'s "Available"/"Unavailable" states, not
       just a dot. */

const ICON_BUTTON_SIZES = [
  { size: "icon-sm" as const, iconClass: "h-3.5 w-3.5", label: "Small (24px)" },
  { size: "icon" as const, iconClass: "h-4 w-4", label: "Medium (32px)" },
  { size: "icon-lg" as const, iconClass: "h-4 w-4", label: "Large (36px)" },
  { size: "icon-xl" as const, iconClass: "h-4 w-4", label: "40px" },
  { size: "icon-2xl" as const, iconClass: "h-5 w-5", label: "44px (AppHeader)" },
];

const AVATAR_DOT_SIZES = [
  { size: "sm" as const, label: "Small (16px)" },
  { size: "md" as const, label: "Medium (20px)" },
  { size: "lg" as const, label: "Large (24px)" },
];

export const CirclePositionedOnIcon: Story = {
  name: "Circle - Positioned on element",
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">On icon buttons (24 / 32 / 36 / 40 / 44px)</p>
        <div className="flex items-end gap-8">
          {ICON_BUTTON_SIZES.map(({ size, iconClass, label }) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Button variant="icon" size={size} title="Notifications" badge={3}>
                <Bell className={iconClass} strokeWidth={1.5} />
              </Button>
              <span className="lyra-body-xs text-lyra-fg-secondary">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">On an avatar (status dot)</p>
        <div className="flex items-end gap-8">
          {AVATAR_DOT_SIZES.map(({ size, label }) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-4">
                {/* Avatar available */}
                <div className="relative inline-flex">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
                    <span className="lyra-label text-white">JD</span>
                  </div>
                  <Badge
                    shape="circle"
                    dot
                    variant="success"
                    size={size}
                    className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base"
                  />
                </div>

                {/* Avatar unavailable */}
                <div className="relative inline-flex">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
                    <span className="lyra-label text-white">AB</span>
                  </div>
                  <Badge
                    shape="circle"
                    dot
                    variant="critical"
                    size={size}
                    className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base"
                  />
                </div>
              </div>
              <span className="lyra-body-xs text-lyra-fg-secondary">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="lyra-label text-lyra-fg-secondary mb-3">On an avatar (status icon — matches AgentProfile's StatusIcon)</p>
        <div className="flex items-center gap-8">
          {/* Avatar — available (Check icon) */}
          <div className="relative inline-flex">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
              <span className="lyra-label text-white">JD</span>
            </div>
            <Badge
              shape="circle"
              variant="success"
              size="sm"
              className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base"
            >
              <Check className="h-2 w-2" strokeWidth={3} aria-hidden="true" />
            </Badge>
          </div>

          {/* Avatar — unavailable (Minus icon) */}
          <div className="relative inline-flex">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-lyra-avatar-default-bg flex items-center justify-center">
              <span className="lyra-label text-white">AB</span>
            </div>
            <Badge
              shape="circle"
              variant="critical"
              size="sm"
              className="absolute bottom-[-2px] right-[-2px] px-0 border border-lyra-bg-surface-base"
            >
              <Minus className="h-2 w-2" strokeWidth={3} aria-hidden="true" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CircleTextContent: Story = {
  name: "Circle - Text / custom content",
  render: () => (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge shape="circle" variant="success">New</Badge>
      <Badge shape="circle" variant="warning">Beta</Badge>
      <Badge shape="circle" variant="info">Pro</Badge>
      <Badge shape="circle" variant="critical">!</Badge>
      <Badge shape="circle" variant="neutral" size="lg">Draft</Badge>
    </div>
  ),
};
