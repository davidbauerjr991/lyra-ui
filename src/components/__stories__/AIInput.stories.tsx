import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AIInput } from "../ai-input";
import { ConversationMessage } from "../conversation-message";
import { DRAFT_TEXT } from "./AIInput.shared";

const meta: Meta<typeof AIInput> = {
  title: "UI/AIInput",
  component: AIInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "lyra-shell" },
  },
};

export default meta;

/* Variants (disabled, clear button, single line, custom actions) each have
   their own page under "AIInput/Variants" — see
   AIInput.variants.stories.tsx. */

/* ── Default — one controls-driven story. Consolidates what used to be
   Default, No attach button, Custom helper text, Disabled, Single line
   (Copilot input) and With clear button into a single playground. Fully
   controlled so typing, submitting and the clear ("x") button all behave
   like the real component. ── */

interface AIInputDemoProps {
  startingText?: "empty" | "draft";
  showAttach?: boolean;
  disabled?: boolean;
  placeholder?: string;
  showLegal?: boolean;
  helperText?: string;
  layout?: "stacked" | "single-line";
  rounded?: boolean;
  maxRows?: number;
}

function AIInputDemo({
  startingText = "empty",
  showAttach = true,
  disabled = false,
  placeholder = "Ask anything...",
  showLegal = true,
  helperText = "AI assistant can make mistakes. Double check responses.",
  layout = "stacked",
  rounded = false,
  maxRows = 6,
}: AIInputDemoProps) {
  const [value, setValue] = useState(startingText === "draft" ? DRAFT_TEXT : "");
  const [submitted, setSubmitted] = useState<string[]>([]);
  const [lastAction, setLastAction] = useState<string | null>(null);

  return (
    <div className="w-[480px] flex flex-col gap-3">
      {submitted.length > 0 && (
        <div className="flex flex-col gap-2">
          {submitted.map((msg, i) => (
            <ConversationMessage key={i} role="user">
              {msg}
            </ConversationMessage>
          ))}
        </div>
      )}
      <AIInput
        value={value}
        onChange={setValue}
        onSubmit={(v) => {
          setSubmitted((s) => [...s, v]);
          setValue("");
        }}
        onClear={() => setLastAction("Cleared the input")}
        onAttachFiles={() => setLastAction("Add files or photos selected")}
        onAttachFolder={() => setLastAction("Add folder selected")}
        showAttach={showAttach}
        disabled={disabled}
        placeholder={placeholder}
        helperText={showLegal ? helperText : ""}
        singleLine={layout === "single-line"}
        rounded={rounded}
        maxRows={maxRows}
      />
      {lastAction && (
        <p className="lyra-body-sm text-lyra-fg-secondary" role="status">
          {lastAction}
        </p>
      )}
    </div>
  );
}

type AIInputDemoStory = StoryObj<typeof AIInputDemo>;

export const Default: AIInputDemoStory = {
  args: {
    startingText: "empty",
    showAttach: true,
    disabled: false,
    placeholder: "Ask anything...",
    showLegal: true,
    helperText: "AI assistant can make mistakes. Double check responses.",
    layout: "stacked",
    rounded: false,
    maxRows: 6,
  },
  parameters: {
    controls: {
      include: [
        "startingText",
        "showAttach",
        "disabled",
        "placeholder",
        "showLegal",
        "helperText",
        "layout",
        "rounded",
        "maxRows",
        "Starting text",
        "Attach button",
        "Disabled",
        "Placeholder",
        "Legal statement",
        "Legal statement text",
        "Layout",
        "Rounded edges",
        "Max rows",
      ],
      sort: "none",
    },
  },
  argTypes: {
    startingText: {
      name: "Starting text",
      control: "radio",
      options: ["empty", "draft"],
      description:
        "Whether the field starts empty or pre-filled with a draft. The clear (x) button only appears once there is text.",
      table: { category: "Behavior" },
    },
    showAttach: {
      name: "Attach button",
      control: "boolean",
      description: "Shows the + button that opens the attach menu (`showAttach`).",
      table: { category: "Behavior" },
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the field, the attach button and the submit button.",
      table: { category: "Behavior" },
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Hint text shown while the field is empty.",
      table: { category: "Content" },
    },
    showLegal: {
      name: "Legal statement",
      control: "boolean",
      description: "Shows the AI disclaimer caption under the field (`helperText`). Off removes the caption.",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    helperText: {
      name: "Legal statement text",
      control: "text",
      description: "The caption's wording (`helperText`). Only used while Legal statement is on.",
      if: { arg: "showLegal", truthy: true },
      table: { category: "Content" },
    },
    maxRows: {
      name: "Max rows",
      control: { type: "number", min: 2, max: 20, step: 1 },
      description:
        "How many lines of text the field grows to before it stops and scrolls inside (`maxRows`, default 6). Applies to both layouts.",
      table: { category: "Behavior", defaultValue: { summary: "6" } },
    },
    layout: {
      name: "Layout",
      control: "radio",
      options: ["stacked", "single-line"],
      description:
        "Stacked puts the text above a toolbar. Single line puts attach, input and submit in one compact row (`singleLine`).",
      table: { category: "Appearance" },
    },
    rounded: {
      name: "Rounded edges",
      control: "boolean",
      description:
        "Pill-shaped ends on the field and its buttons (`rounded`). Only available with the single-line layout.",
      if: { arg: "layout", eq: "single-line" },
      table: { category: "Appearance", defaultValue: { summary: "false" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <AIInputDemo key={JSON.stringify(args)} {...args} />
  ),
};
