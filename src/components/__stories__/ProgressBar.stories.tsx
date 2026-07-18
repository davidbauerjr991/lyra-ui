import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { ProgressBar } from "../progress-bar";
import { Label } from "../label";

const meta: Meta<typeof ProgressBar> = {
  title: "Radix Primitives/Progress Bar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
  argTypes: {
    value:     { control: { type: "range", min: 0, max: 100, step: 1 } },
    variant:   { control: "select", options: ["default", "success", "warning", "critical", "neutral"] },
    size:      { control: "select", options: ["sm", "md", "lg"] },
    showLabel: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/* ── Interactive ── */
export const Default: Story = {
  args: { value: 60, variant: "default", size: "md", showLabel: true },
};

/* ── All variants ──
   Uses the real `Label` component (not a plain `<span className="lyra-label">`)
   for each variant's caption — same rationale as the "Animated With Label"
   story below: these are real label elements in the design system, so
   consuming stories should render them with `Label`, not hand-roll the
   typography class on a bare span. */
const variantLabels = {
  default: "Default",
  success: "Success",
  warning: "Warning",
  critical: "Critical",
  neutral: "Neutral",
} as const;

export const Variants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-5 w-full max-w-md">
      {(["default", "success", "warning", "critical", "neutral"] as const).map((v) => (
        <div key={v} className="flex flex-col gap-1">
          <Label label={variantLabels[v]} className="text-lyra-fg-secondary" />
          <ProgressBar value={65} variant={v} showLabel />
        </div>
      ))}
    </div>
  ),
};

/* ── Sizes ── */
export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex flex-col gap-5 w-full max-w-md">
      {(["sm", "md", "lg"] as const).map((s) => (
        <div key={s} className="flex flex-col gap-1">
          <span className="lyra-label text-lyra-fg-secondary">{s}</span>
          <ProgressBar value={70} size={s} />
        </div>
      ))}
    </div>
  ),
};

/* ── States ── */
export const States: Story = {
  name: "States",
  render: () => (
    <div className="flex flex-col gap-5 w-full max-w-md">
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Empty (0%)</span>
        <ProgressBar value={0} showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">In progress (45%)</span>
        <ProgressBar value={45} showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Complete (100%)</span>
        <ProgressBar value={100} variant="success" showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Warning threshold (80%)</span>
        <ProgressBar value={80} variant="warning" showLabel />
      </div>
      <div className="flex flex-col gap-1">
        <span className="lyra-label text-lyra-fg-secondary">Critical (95%)</span>
        <ProgressBar value={95} variant="critical" showLabel />
      </div>
    </div>
  ),
};

/* ── Animated ── */
export const Animated: Story = {
  name: "Animated",
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const id = setInterval(() => {
        setValue((v) => {
          if (v >= 100) { clearInterval(id); return 100; }
          return v + 2;
        });
      }, 80);
      return () => clearInterval(id);
    }, []);
    const variant = value >= 100 ? "success" : value >= 80 ? "warning" : "default";
    return (
      <div className="flex flex-col gap-2 w-full max-w-md">
        <span className="lyra-label text-lyra-fg-secondary">Loading…</span>
        <ProgressBar value={value} variant={variant} size="md" showLabel />
      </div>
    );
  },
};

/* ── Animated With Label ──
   A version of the "Animated" story above with a real `Label` above the
   track (text "Agent Skill Level") instead of a plain `<span>`, and tuned
   for an indeterminate-feeling loading moment rather than tracking a real,
   known-100%-at-completion task: no percentage label (`showLabel` omitted —
   nothing meaningful to report a number for), and stops at 60% rather than
   running all the way to 100 (this is a "still loading" indicator, not a
   real completion state — running to 100 would visually claim the load
   finished before it actually did).

   Easing: matches Radix's own Progress primitive docs demo exactly —
   https://www.radix-ui.com/primitives/docs/components/progress — which
   doesn't animate via a JS interpolation loop at all. It sets `value` once
   (13 → 66 after a 500ms delay) and lets a single CSS transition on the
   indicator do all the motion: `transition: transform 660ms
   cubic-bezier(0.65, 0, 0.35, 1)`. This story does the same thing: one
   `setValue(60)` after mount, `indicatorClassName` overriding
   `progress-bar.tsx`'s default `duration-300 ease-in-out` to
   `duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]` — half Radix's
   660ms for the already-established "2x speed" requirement, same curve.
   An earlier version of this story hand-tuned its own ease-out curve (fast
   start, slow finish) via a JS setInterval loop recomputing `value` every
   tick — replaced here to actually match Radix's real easing rather than
   an invented approximation of "ease-out" in general. Worth flagging:
   `cubic-bezier(0.65, 0, 0.35, 1)` is a symmetric ease-*in-out* curve (slow
   start, fastest through the middle, slow finish), not a pure ease-out —
   so matching Radix's actual curve exactly means this no longer starts
   fast the way the prior hand-tuned version did. */
export const AnimatedWithLabel: Story = {
  name: "Animated With Label",
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const id = setTimeout(() => setValue(60), 100);
      return () => clearTimeout(id);
    }, []);
    return (
      <div className="flex flex-col gap-2 w-full max-w-md">
        <Label label="Agent Skill Level" />
        <ProgressBar
          value={value}
          variant="default"
          size="md"
          indicatorClassName="duration-[330ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
        />
      </div>
    );
  },
};

/* ── With custom label ── */
export const CustomLabel: Story = {
  name: "Custom Label",
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <ProgressBar value={30} showLabel label="3 / 10 steps" />
      <ProgressBar value={48} showLabel label="2,400 / 5,000 calls" />
    </div>
  ),
};
