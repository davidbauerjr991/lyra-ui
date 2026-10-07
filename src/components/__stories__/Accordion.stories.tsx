import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Accordion } from "../accordion";
import { Container } from "../container";
import { cn } from "../../lib/utils";
import { sampleItems, metricsSlot, richItem } from "./Accordion.shared";

const meta: Meta<typeof Accordion> = {
  title: "Headless Primitives/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "padded", backgrounds: { default: "lyra-shell" } },
  // Hide Accordion's own raw props from the Controls panel — this file's
  // one story (Default) drives everything through AccordionDemo's own args
  // (multi, showIcons, etc.) instead, and Storybook otherwise auto-infers
  // controls for every real Accordion prop from its TS types (e.g. a
  // "type" single/multiple radio) even though Default's render never reads
  // those args, which just reads as a dead, confusing extra control.
  argTypes: {
    items: { table: { disable: true } },
    type: { table: { disable: true } },
    value: { table: { disable: true } },
    values: { table: { disable: true } },
    defaultValue: { table: { disable: true } },
    defaultValues: { table: { disable: true } },
    onValueChange: { table: { disable: true } },
    onValuesChange: { table: { disable: true } },
    className: { table: { disable: true } },
    variant: { table: { disable: true } },
  },
};

export default meta;

/* Full accent ("soft") color set from lyra-tokens.css — the same tokens
   `accordion.tsx`'s own `headerClassName` doc comment demonstrates
   (`bg-lyra-accent-purple-soft`) for tinting a single item's trigger row. */
const ACCENT_COLORS = [
  "slate",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
] as const;
type AccentColor = (typeof ACCENT_COLORS)[number];

/* Literal class strings (not a template literal) so Tailwind's content
   scanner — plain text regex over source files, not an AST walk — actually
   finds and generates each one; `` `bg-lyra-accent-${c}-soft` `` built at
   runtime would never match and would silently render untinted. */
const ACCENT_HEADER_CLASSES: Record<AccentColor, string> = {
  slate: "bg-lyra-accent-slate-soft",
  red: "bg-lyra-accent-red-soft",
  orange: "bg-lyra-accent-orange-soft",
  yellow: "bg-lyra-accent-yellow-soft",
  lime: "bg-lyra-accent-lime-soft",
  green: "bg-lyra-accent-green-soft",
  teal: "bg-lyra-accent-teal-soft",
  blue: "bg-lyra-accent-blue-soft",
  purple: "bg-lyra-accent-purple-soft",
  pink: "bg-lyra-accent-pink-soft",
};

/* Variants (closed/open/disabled, no icons, subhead, end slot, rich header,
   headless) each have their own page under "Accordion/Variants" — see
   Accordion.variants.stories.tsx. */

/* ── Default — consolidated single/multiple, icons, disabled-item, and
   default-open, subhead and end-slot states into one controls-driven story
   (previously seven separate stories: Default, Single — One Open,
   Multiple — Many Open, No Icons, With Disabled Item, With Subhead,
   With End Slot (Metrics)). Fully controlled so switching "multi" in
   the Controls panel, or opening/closing items in the canvas, reflects
   real Accordion state — e.g. turning "multi" on and opening more than
   one item demonstrates several staying open at once, same as the old
   "Multiple — Many Open" story did with a fixed default. ── */

interface AccordionDemoProps {
  multi?: boolean;
  showIcons?: boolean;
  disabledItem?: boolean;
  defaultOpen?: "none" | "1" | "2" | "3";
  showSubhead?: boolean;
  showEndSlot?: boolean;
  richHeader?: boolean;
  richContent?: boolean;
  container?: boolean;
  separateContainers?: boolean;
  padding?: boolean;
  headerColor?: boolean;
  headerColorValue?: AccentColor;
  headerPadding?: "comfortable" | "compact";
  variant?: "default" | "contained";
}

function AccordionDemo({
  multi = false,
  showIcons = true,
  disabledItem = false,
  defaultOpen = "none",
  showSubhead = false,
  showEndSlot = false,
  richHeader = false,
  richContent = false,
  container = false,
  separateContainers = false,
  padding = true,
  headerColor = false,
  headerColorValue = "purple",
  headerPadding = "comfortable",
  variant = "default",
}: AccordionDemoProps) {
  // Without padding, the first/last trigger rows (and any `headerColor`
  // tint) sit flush against the Container's edges — `overflow-hidden`
  // clips their square corners to the Container's own `rounded-lyra-lg`,
  // the same way the old "Rich Header + Table Content" variant's Table
  // wrapper needed it for the same reason (content flush to a rounded edge).
  const containerClassName = padding ? "p-4" : "overflow-hidden";
  // Accordion's own trigger row defaults to `py-3.5` (14px) — "comfortable"
  // needs no override; "compact" overrides it to `py-2.5` (10px) via
  // `headerClassName`, which `cn()`'s `twMerge` correctly replaces `py-3.5`
  // with rather than stacking both.
  const headerPaddingClass = headerPadding === "compact" ? "py-2.5" : undefined;
  const items = sampleItems.map((item) => ({
    ...item,
    icon: showIcons ? item.icon : undefined,
    disabled: disabledItem && item.id === "2",
    title: richHeader ? richItem.title : item.title,
    subhead: richHeader
      ? richItem.subhead
      : showSubhead
        ? "Supporting description text"
        : undefined,
    endSlot: showEndSlot ? metricsSlot(item.id) : undefined,
    content: richContent ? richItem.content : item.content,
    headerClassName: cn(
      headerColor ? ACCENT_HEADER_CLASSES[headerColorValue] : undefined,
      headerPaddingClass
    ),
  }));

  const [value, setValue] = useState(defaultOpen === "none" ? "" : defaultOpen);
  const [values, setValues] = useState<string[]>(
    defaultOpen === "none" ? [] : [defaultOpen]
  );
  // Separate-containers mode: each item is its own single-item Accordion in
  // its own Container, so "multi" (which governs one shared root's open/
  // close behavior) doesn't apply — each card already opens/closes on its
  // own. Tracked as its own set of open ids so every card can be open at
  // once without a shared "single" root forcing the others shut.
  const [separateOpenIds, setSeparateOpenIds] = useState<string[]>(
    defaultOpen === "none" ? [] : [defaultOpen]
  );

  if (container && separateContainers) {
    return (
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <Container key={item.id} className={containerClassName}>
            <Accordion
              type="single"
              items={[item]}
              value={separateOpenIds.includes(item.id) ? item.id : ""}
              onValueChange={(openId) =>
                setSeparateOpenIds((prev) =>
                  openId
                    ? [...prev.filter((id) => id !== item.id), item.id]
                    : prev.filter((id) => id !== item.id)
                )
              }
            />
          </Container>
        ))}
      </div>
    );
  }

  const accordion = multi ? (
    <Accordion
      type="multiple"
      items={items}
      values={values}
      onValuesChange={setValues}
      variant={variant}
    />
  ) : (
    <Accordion type="single" items={items} value={value} onValueChange={setValue} variant={variant} />
  );

  return container ? <Container className={containerClassName}>{accordion}</Container> : accordion;
}

type AccordionDemoStory = StoryObj<typeof AccordionDemo>;

export const Default: AccordionDemoStory = {
  args: {
    multi: false,
    showIcons: true,
    disabledItem: false,
    defaultOpen: "none",
    showSubhead: false,
    showEndSlot: false,
    richHeader: false,
    richContent: false,
    container: false,
    separateContainers: false,
    padding: true,
    headerColor: false,
    headerColorValue: "purple",
    headerPadding: "comfortable",
    variant: "default",
  },
  argTypes: {
    multi: {
      control: "boolean",
      description: "When true, multiple items can stay open at once (type=\"multiple\"). When false, opening one closes the rest (type=\"single\").",
    },
    showIcons: { control: "boolean" },
    disabledItem: {
      control: "boolean",
      description: 'Disables the second item ("Section 2")',
    },
    defaultOpen: {
      control: "select",
      options: ["none", "1", "2", "3"],
      description: "Which item starts open",
    },
    showSubhead: {
      control: "boolean",
      description: "Supporting text under each title (`subhead`)",
    },
    showEndSlot: {
      control: "boolean",
      description: "Display-only content between the title and chevron (`endSlot`) — here two `Metric`s",
    },
    richHeader: {
      control: "boolean",
      description:
        'Every item\'s title/subhead become ReactNode content (name + status Tag, multi-line summary) instead of plain text — overrides "showSubhead" while on.',
    },
    richContent: {
      control: "boolean",
      description: "Every item's content becomes a Table instead of placeholder text",
    },
    container: {
      control: "boolean",
      description:
        'Wraps the Accordion in a `Container` ("default" variant — white surface, subtle border)',
    },
    separateContainers: {
      control: "boolean",
      description: "Puts each item in its own Container instead of one shared Container",
      if: { arg: "container", truthy: true },
    },
    padding: {
      control: "boolean",
      description: "Padding inside the Container(s) (`p-4`) — off removes it entirely",
      if: { arg: "container", truthy: true },
    },
    headerColor: {
      control: "boolean",
      description: "Tints every item's trigger row background (`headerClassName`)",
    },
    headerColorValue: {
      control: "select",
      options: ACCENT_COLORS,
      description: "Accent color used for the header tint (`bg-lyra-accent-{color}-soft`)",
      if: { arg: "headerColor", truthy: true },
    },
    variant: {
      control: "select",
      options: ["default", "contained"],
      description:
        "default — rows sit on the page with dividers between them. contained — the whole group sits in one bordered, rounded card (`variant`). Not used by “separate containers”, which already draws a card per item.",
      if: { arg: "separateContainers", truthy: false },
    },
    headerPadding: {
      control: "select",
      options: ["comfortable", "compact"],
      description:
        "Trigger row vertical padding — comfortable is 14px top/bottom (default), compact is 10px top/bottom",
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — `useState`'s initial
    // value only applies on first mount.
    <AccordionDemo
      key={`${args.multi}-${args.showIcons}-${args.disabledItem}-${args.defaultOpen}-${args.showSubhead}-${args.showEndSlot}-${args.richHeader}-${args.richContent}-${args.container}-${args.separateContainers}-${args.padding}-${args.headerColor}-${args.headerColorValue}-${args.headerPadding}-${args.variant}`}
      {...args}
    />
  ),
};
