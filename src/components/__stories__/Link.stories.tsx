import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Link } from "../link";
import { LINK_LABEL, editIcon, chevronIcon } from "./Link.shared";

const meta: Meta<typeof Link> = {
  title: "Custom Primitives/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;

/* Variants (sizes, leading icon, states, anchor, inline in text) each have
   their own page under "Link/Variants" — see Link.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, Small, With Leading Icon, With Trailing Icon and Disabled into a single playground.
   Matches the two real, pre-existing hand-rolled patterns this component was
   extracted from: a plain text trigger ("View customer info",
   contact-overview.tsx) and one with a leading icon ("Edit",
   agent-next-gen-customer-info-panel.tsx). ── */

interface LinkDemoProps {
  renders?: "button" | "anchor";
  disabled?: boolean;
  label?: string;
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  size?: "sm" | "md";
  underline?: "hover" | "always";
}

function LinkDemo({
  renders = "button",
  disabled = false,
  label = LINK_LABEL,
  leadingIcon = false,
  trailingIcon = false,
  size = "md",
  underline = "hover",
}: LinkDemoProps) {
  const [clicks, setClicks] = useState(0);
  return (
    <div className="flex flex-col gap-2 items-start">
      <Link
        size={size}
        underline={underline}
        disabled={disabled}
        href={renders === "anchor" ? "#example" : undefined}
        onClick={() => setClicks((n) => n + 1)}
      >
        {leadingIcon && editIcon}
        {label}
        {trailingIcon && chevronIcon}
      </Link>
      <p className="lyra-body-sm text-lyra-fg-secondary" role="status">
        Clicked {clicks} {clicks === 1 ? "time" : "times"}
      </p>
    </div>
  );
}

type LinkDemoStory = StoryObj<typeof LinkDemo>;

export const Default: LinkDemoStory = {
  args: {
    renders: "button",
    disabled: false,
    label: LINK_LABEL,
    leadingIcon: false,
    trailingIcon: false,
    size: "md",
    underline: "hover",
  },
  parameters: {
    controls: {
      include: [
        "renders",
        "disabled",
        "label",
        "leadingIcon",
        "trailingIcon",
        "size",
        "underline",
        "Renders as",
        "Disabled",
        "Label",
        "Leading icon",
        "Trailing icon",
        "Size",
        "Underline",
      ],
      sort: "none",
    },
  },
  argTypes: {
    renders: {
      name: "Renders as",
      control: "radio",
      options: ["button", "anchor"],
      description:
        "Button for in-app actions (the default). Anchor for real navigation to a URL — set by giving the link an `href`.",
      table: { category: "Behavior" },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Dims the link and blocks clicks (`disabled`).",
      table: { category: "Behavior" },
    },
    label: {
      name: "Label",
      control: "text",
      description: "Link text.",
      table: { category: "Content" },
    },
    leadingIcon: {
      name: "Leading icon",
      control: "boolean",
      description: "Shows an icon before the text.",
      table: { category: "Content" },
    },
    trailingIcon: {
      name: "Trailing icon",
      control: "boolean",
      description: "Shows a right-pointing chevron after the text.",
      table: { category: "Content" },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["sm", "md"],
      description: "Text size (`size`).",
      table: { category: "Appearance" },
    },
    underline: {
      name: "Underline",
      control: "radio",
      options: ["hover", "always"],
      description: "Hover underlines on hover only. Always underlines at rest, for links inside running text (`underline`).",
      table: { category: "Appearance" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes.
    <LinkDemo key={JSON.stringify(args)} {...args} />
  ),
};
