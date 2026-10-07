import type { Meta, StoryObj } from "@storybook/react";
import { Popover, type PopoverPlacement } from "../popover";
import { Button } from "../button";
import { Menu } from "../menu";
import { PopoverBody, popoverFooter, menuItems, POPOVER_TITLE, type PopoverContentKind } from "./Popover.shared";

const meta: Meta<typeof Popover> = {
  title: "Headless Primitives/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
  // Real Popover props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
};

export default meta;

/* An actions menu and every placement / arrow / title variant side by side
   have their own pages under "Popover/Variants" — see
   Popover.variants.stories.tsx. */

/* ── Default — consolidated Simple Popover, Max Height Popover, Max Width
   Popover and Placements into one controls-driven story (previously four
   separate stories). Click the button to open it. `menu`, `content`,
   `title`, `footer`, `maxHeight` and `maxWidth` are story-only args that fill the
   real props of the same names. ── */

interface PopoverDemoProps {
  menu?: boolean;
  content?: PopoverContentKind;
  title?: boolean;
  footer?: boolean;
  placement?: PopoverPlacement;
  align?: "start" | "center" | "end";
  showArrow?: boolean;
  maxHeight?: "none" | "240px";
  maxWidth?: "none" | "560px";
  screenReaderHint?: boolean;
}

function PopoverDemo({
  menu = false,
  content = "text",
  title = true,
  footer = false,
  placement = "bottom",
  align = "center",
  showArrow = true,
  maxHeight = "none",
  maxWidth = "none",
  screenReaderHint = false,
}: PopoverDemoProps) {
  return (
    <Popover
      screenReaderHint={screenReaderHint}
      title={title ? POPOVER_TITLE : undefined}
      footer={footer ? popoverFooter : undefined}
      placement={placement}
      align={align}
      showArrow={showArrow}
      maxHeight={maxHeight === "none" ? undefined : maxHeight}
      maxWidth={maxWidth === "none" ? undefined : maxWidth}
      // Menu rows are edge-to-edge with their own p-1 inset, so the menu opts
      // out of Popover's default 20px body padding. `w-full min-w-[200px]`
      // (not a fixed width) lets it stretch to the popover when a footer
      // makes the popover wider than 200px.
      bodyPadding={!menu}
      content={menu ? <Menu items={menuItems} bare className="w-full min-w-[200px]" /> : <PopoverBody kind={content} padTop={!title} />}
    >
      <Button>Open Popover</Button>
    </Popover>
  );
}

type PopoverDemoStory = StoryObj<PopoverDemoProps>;

export const Default: PopoverDemoStory = {
  args: {
    menu: false,
    content: "text",
    title: true,
    footer: false,
    placement: "bottom",
    align: "center",
    showArrow: true,
    maxHeight: "none",
    maxWidth: "none",
    screenReaderHint: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: [
        "Menu", "Content", "Title", "Footer", "Placement", "Align", "Show arrow", "Max height", "Max width", "Screen reader hint",
        "menu", "content", "title", "footer", "placement", "align", "showArrow", "maxHeight", "maxWidth", "screenReaderHint",
      ],
      sort: "none",
    },
  },
  argTypes: {
    menu: {
      name: "Menu",
      control: "boolean",
      description: "Shows an actions menu in the popover instead of the content below.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    content: {
      name: "Content",
      control: "radio",
      options: ["text", "long", "form"],
      labels: { text: "Short text", long: "Long list", form: "Form" },
      description: "What's inside. Pair Long list with Max height to see it scroll, and Form with Max width.",
      if: { arg: "menu", truthy: false },
      table: { category: "Content", defaultValue: { summary: "text" } },
    },
    title: {
      name: "Title",
      control: "boolean",
      description: "Header row with a title (`title`).",
      table: { category: "Content", defaultValue: { summary: "true" } },
    },
    footer: {
      name: "Footer",
      control: "boolean",
      description: "Pinned Cancel / Confirm buttons outside the scroll area (`footer`).",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    screenReaderHint: {
      name: "Screen reader hint",
      control: "boolean",
      description: "Adds a visually hidden \"Press Tab to navigate, Escape to close\" that screen readers announce when it opens (`screenReaderHint`). Nothing changes on screen.",
      table: { category: "Accessibility", defaultValue: { summary: "false" } },
    },
    placement: {
      name: "Placement",
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      labels: { top: "Top", bottom: "Bottom", left: "Left", right: "Right" },
      description: "Which side of the button it opens on.",
      table: { category: "Appearance", defaultValue: { summary: "bottom" } },
    },
    align: {
      name: "Align",
      control: "radio",
      options: ["start", "center", "end"],
      labels: { start: "Start", center: "Center", end: "End" },
      description: "Alignment against the button along that side.",
      table: { category: "Appearance", defaultValue: { summary: "center" } },
    },
    showArrow: {
      name: "Show arrow",
      control: "boolean",
      description: "Arrow pointing at the button.",
      table: { category: "Appearance", defaultValue: { summary: "true" } },
    },
    maxHeight: {
      name: "Max height",
      control: "radio",
      options: ["none", "240px"],
      labels: { none: "None", "240px": "240px" },
      description: "Caps the height; the content scrolls past it.",
      table: { category: "Appearance", defaultValue: { summary: "none" } },
    },
    maxWidth: {
      name: "Max width",
      control: "radio",
      options: ["none", "560px"],
      labels: { none: "Default", "560px": "560px" },
      description: "Raises the width cap for wide content such as forms.",
      table: { category: "Appearance", defaultValue: { summary: "default" } },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes, so the popover closes.
    <PopoverDemo key={JSON.stringify(args)} {...args} />
  ),
};
