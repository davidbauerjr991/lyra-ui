import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../link";
import { LINK_LABEL, editIcon, chevronIcon } from "./Link.shared";

/* One page per Link variant, shown under "Link/Variants" in the sidebar.
   Static references for design review; the interactive playground is
   Link → Default. "!autodocs" keeps this folder from getting a second Docs
   page. */
const meta: Meta<typeof Link> = {
  title: "Custom Primitives/Link/Variants",
  component: Link,
  tags: ["!autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <Link size="md">{LINK_LABEL}</Link>
      <Link size="sm">{LINK_LABEL}</Link>
    </div>
  ),
};

export const WithIcon: Story = {
  name: "With Leading Icon",
  render: () => (
    <Link size="md">
      {editIcon}
      Edit
    </Link>
  ),
};

export const WithTrailingIcon: Story = {
  name: "With Trailing Icon",
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <Link size="md">
        View all
        {chevronIcon}
      </Link>
      <Link size="sm">
        View all
        {chevronIcon}
      </Link>
      <Link size="md">
        {editIcon}
        Edit
        {chevronIcon}
      </Link>
    </div>
  ),
};

export const States: Story = {
  name: "States (Default, Disabled, Anchor, Disabled Anchor)",
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <Link>{LINK_LABEL}</Link>
      <Link disabled>{LINK_LABEL}</Link>
      <Link href="#example">{LINK_LABEL} (anchor)</Link>
      <Link href="#example" disabled>{LINK_LABEL} (disabled anchor)</Link>
    </div>
  ),
};

/* ── Inline in text ──
   Inside a sentence the link's blue is the ONLY thing separating it from the
   surrounding text, which isn't enough on its own (WCAG 1.4.1 Use of
   Color) — `underline="always"` underlines it at rest. With `href`, it
   renders a real `<a>`. */
export const InlineInText: Story = {
  name: "Inline in text",
  render: () => (
    <p className="max-w-md lyra-body-md text-lyra-fg-default">
      Your callback was scheduled for 3:00 PM. You can{" "}
      <Link underline="always" size="md" href="#reschedule" className="inline">
        reschedule it
      </Link>{" "}
      or{" "}
      <Link underline="always" size="md" className="inline" onClick={() => {}}>
        view customer info
      </Link>{" "}
      before the call starts.
    </p>
  ),
};
