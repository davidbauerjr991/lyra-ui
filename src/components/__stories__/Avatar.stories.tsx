import type { Meta, StoryObj } from "@storybook/react";
import { Headphones, User, Bot, Bell } from "lucide-react";
import { Avatar } from "../avatar";
import type { AvatarSize, AvatarShape, AvatarColor } from "../avatar";

const meta = {
  title: "Custom Primitives/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { layout: "centered", backgrounds: { default: "lyra-shell" } },
  argTypes: {
    initials: { control: "text" },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"] satisfies AvatarSize[],
    },
    shape: {
      control: "select",
      options: ["circle", "rounded"] satisfies AvatarShape[],
    },
    color: {
      control: "select",
      options: [
        "primary", "active", "success", "warning", "critical",
        "info", "neutral", "surface", "shell", "customer",
      ] satisfies AvatarColor[],
    },
  },
  args: {
    initials: "AB",
    size: "md",
    shape: "circle",
    color: "primary",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default, fully-controlled story — use the Controls panel to try
 * every size/shape/color/initials-vs-icon combination.
 */
export const Playground: Story = {};

/**
 * A known identity gets its initials (`initialsFor(name)`); an
 * unidentified/generic one falls back to a plain glyph (`User` by
 * default). This is the split every hand-built avatar chip in
 * agent-next-gen-v3 already follows — `Avatar` is that shape as one
 * reusable component.
 */
export const InitialsVsFallbackIcon: Story = {
  name: "Initials vs. fallback icon",
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Avatar initials="NC" color="primary" />
        <span className="lyra-body-sm text-lyra-fg-secondary">Known — "Nathan Cole"</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar color="shell" />
        <span className="lyra-body-sm text-lyra-fg-secondary">Unknown — generic User</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar icon={Headphones} color="active" />
        <span className="lyra-body-sm text-lyra-fg-secondary">Agent call</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {(["xs", "sm", "md", "lg"] as AvatarSize[]).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" size={size} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{size}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * `circle` — the call-controls/contact-overview/record-header avatar
 * chips already in this app. `rounded` — `InteractionNavItem`'s own
 * collapsed left-nav tile avatar (a small square, not a circle).
 */
export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {(["circle", "rounded"] as AvatarShape[]).map((shape) => (
        <div key={shape} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color="primary" shape={shape} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{shape}</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-4">
      {(
        [
          ["primary", "Primary"],
          ["active", "Active"],
          ["success", "Success"],
          ["warning", "Warning"],
          ["critical", "Critical"],
          ["info", "Info"],
          ["neutral", "Neutral"],
          ["surface", "Surface"],
          ["shell", "Shell"],
          ["customer", "Customer"],
        ] as [AvatarColor, string][]
      ).map(([color, label]) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <Avatar initials="AB" color={color} />
          <span className="lyra-body-sm text-lyra-fg-secondary">{label}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * Real call sites this component matches the look of — no visual change
 * to any of them, just the shared shape:
 * - `VoiceCallControls`'s customer chip (purple circle, `md`)
 * - agent-next-gen-v3's record-header avatar (purple circle, `md`)
 * - `InteractionNavItem`'s collapsed-tile avatar (rounded square, `sm`,
 *   per-severity tone)
 */
export const RealWorldUsage: Story = {
  name: "Real-world usage",
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex items-center gap-3">
        <Avatar initials="NC" color="primary" size="md" shape="circle" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Nathan Cole</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Voice call / record header</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar initials="MW" color="warning" size="sm" shape="rounded" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Marcus Webb</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Collapsed left-nav tile (on hold)</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar initials="NC" color="customer" size="xs" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">"Customer is typing…"</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">InteractionTranscript's typing indicator</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar icon={Bot} size="xs" className="bg-[#6149C1] text-white" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Cognigy AI Agent</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Marcus Webb chat bubble — one-off hex color via className</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Avatar icon={Bell} color="critical" size="md" shape="circle" />
        <div className="flex flex-col">
          <span className="lyra-body-sm-emphasis text-lyra-fg-default">Notification</span>
          <span className="lyra-body-xs text-lyra-fg-secondary">Any glyph works, not just User/Headphones</span>
        </div>
      </div>
    </div>
  ),
};
