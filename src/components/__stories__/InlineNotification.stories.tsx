import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InlineNotification } from "../inline-notification";
import { Button } from "../button";
import { MESSAGES, INLINE_LINK_CLASS, type NotificationVariant } from "./InlineNotification.shared";

const meta: Meta<typeof InlineNotification> = {
  title: "Custom Primitives/Inline Notification",
  component: InlineNotification,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  // Real InlineNotification props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
};

export default meta;

/* All four variants side by side have their own page under
   "Inline Notification/Variants" — see InlineNotification.variants.stories.tsx. */

/* ── Default — consolidated Default and Inline — Warning / Error / Info /
   Success into one controls-driven story (previously five separate stories).
   "Dismissible" is wired to state: clicking the close button hides the
   notification and shows a "Show again" button to bring it back. ── */

interface InlineNotificationDemoProps {
  variant?: NotificationVariant;
  message?: string;
  action?: boolean;
  actionPlacement?: "below" | "inline";
  dismissible?: boolean;
  heading?: string;
}

function InlineNotificationDemo({
  variant = "info",
  message = MESSAGES.info,
  action = false,
  actionPlacement = "below",
  dismissible = false,
  heading = "",
}: InlineNotificationDemoProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <Button variant="outline" size="sm" onClick={() => setDismissed(false)}>
        Show again
      </Button>
    );
  }

  return (
    <div className="w-full">
      <InlineNotification
        variant={variant}
        heading={heading || undefined}
        onDismiss={dismissible ? () => setDismissed(true) : undefined}
        action={
          !action ? undefined : actionPlacement === "inline" ? (
            <a href="#details" className={INLINE_LINK_CLASS} onClick={(e) => e.preventDefault()}>View details</a>
          ) : (
            <Button variant="outline" size="sm">Action</Button>
          )
        }
        actionPlacement={actionPlacement}
      >
        {message}
      </InlineNotification>
    </div>
  );
}

type InlineNotificationDemoStory = StoryObj<InlineNotificationDemoProps>;

export const Default: InlineNotificationDemoStory = {
  args: {
    variant: "info",
    message: MESSAGES.info,
    action: false,
    actionPlacement: "below",
    dismissible: false,
    heading: "",
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Dismissible", "Title", "Message", "Action button", "Action placement", "Type",
        "dismissible", "heading", "message", "action", "actionPlacement", "variant",
      ],
      sort: "none",
    },
  },
  argTypes: {
    dismissible: {
      name: "Dismissible",
      control: "boolean",
      description: "Shows a close button (`onDismiss`, 24×24 target). Closing hides the notification until you click Show again. Closing it from the keyboard moves focus to the next control on the page instead of losing it (see Variants → Dismissible).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    heading: {
      name: "Title",
      control: "text",
      description: "Optional bold first line above the message (`heading`).",
      table: { category: "Content", defaultValue: { summary: "none" } },
    },
    message: {
      name: "Message",
      control: "text",
      description: "The notification text (`children`).",
      table: { category: "Content" },
    },
    action: {
      name: "Action button",
      control: "boolean",
      description: "Adds an action (`action`): a button row under the message, or a text link at the end of the message row (see Action placement).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    actionPlacement: {
      name: "Action placement",
      control: "radio",
      options: ["below", "inline"],
      labels: { below: "Below (button)", inline: "Inline (link)" },
      description: "Where the action goes (`actionPlacement`).",
      if: { arg: "action", truthy: true },
      table: { category: "Content", defaultValue: { summary: "below" } },
    },
    variant: {
      name: "Type",
      control: "radio",
      options: ["warning", "error", "info", "success"],
      labels: { warning: "Warning", error: "Error", info: "Info", success: "Success" },
      description: "Sets the color and icon. Info and success are announced politely (`role=\"status\"`); warning and error interrupt (`role=\"alert\"`).",
      table: { category: "Appearance", defaultValue: { summary: "info" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes, so the dismissed state
    // resets.
    <InlineNotificationDemo key={JSON.stringify(args)} {...args} />
  ),
};
