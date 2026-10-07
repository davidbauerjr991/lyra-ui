import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { InlineNotification } from "../inline-notification";
import { MESSAGES, VARIANTS, HEADINGS, INLINE_LINK_CLASS } from "./InlineNotification.shared";

/* One page per Inline Notification variant, shown under "Inline
   Notification/Variants" in the sidebar. Static references for design review;
   the interactive playground is Inline Notification → Default. "!autodocs"
   keeps this folder from getting a second Docs page. */
const meta: Meta<typeof InlineNotification> = {
  title: "Custom Primitives/Inline Notification/Variants",
  component: InlineNotification,
  tags: ["!autodocs"],
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof InlineNotification>;

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map((variant) => (
        <InlineNotification key={variant} variant={variant} onDismiss={() => {}}>
          {MESSAGES[variant]}
        </InlineNotification>
      ))}
    </div>
  ),
};

/* `heading`: a bold first line above the message, in every tone. */
export const WithTitle: Story = {
  name: "With Title",
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map((variant) => (
        <InlineNotification key={variant} variant={variant} heading={HEADINGS[variant]} onDismiss={() => {}}>
          {MESSAGES[variant]}
        </InlineNotification>
      ))}
    </div>
  ),
};

/* `actionPlacement="inline"`: a short text link at the end of the message row. */
export const InlineAction: Story = {
  name: "Inline Action",
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      {VARIANTS.map((variant) => (
        <InlineNotification
          key={variant}
          variant={variant}
          actionPlacement="inline"
          action={<a href="#details" className={INLINE_LINK_CLASS} onClick={(e) => e.preventDefault()}>View details</a>}
        >
          {MESSAGES[variant]}
        </InlineNotification>
      ))}
    </div>
  ),
};

/* Dismiss wired to state. Tab to a close button and press Enter: the
   notification closes and focus moves to the next control (the next close
   button, or "Show all again"), instead of being lost. */
function DismissibleDemo() {
  const [open, setOpen] = useState<string[]>([...VARIANTS]);
  return (
    <div className="flex flex-col gap-4 w-full">
      {VARIANTS.filter((v) => open.includes(v)).map((variant) => (
        <InlineNotification
          key={variant}
          variant={variant}
          heading={HEADINGS[variant]}
          onDismiss={() => setOpen((o) => o.filter((v) => v !== variant))}
        >
          {MESSAGES[variant]}
        </InlineNotification>
      ))}
      <div>
        <Button variant="outline" size="sm" onClick={() => setOpen([...VARIANTS])}>Show all again</Button>
      </div>
    </div>
  );
}

export const Dismissible: Story = {
  name: "Dismissible",
  render: () => <DismissibleDemo />,
};
