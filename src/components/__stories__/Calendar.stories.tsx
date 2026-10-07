import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../calendar";
import { CalendarDemo } from "./Calendar.shared";

const meta: Meta<typeof Calendar> = {
  title: "Headless Primitives/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: { default: "lyra-shell" },
  },
  // Real Calendar props stay on the Docs page; Default's own
  // `parameters.controls.include` below curates the Controls panel.
};

export default meta;

/* Disabled dates and the three modes side by side each have their own page
   under "Calendar/Variants" — see Calendar.variants.stories.tsx. */

/* ── Default — consolidated Single Date, Range Selection and Week Selection
   into one controls-driven story (previously three separate stories). Each
   mode starts with the same selection its old story did (today / today+6
   days / this week), and the selection summary updates as you click. ── */

interface CalendarPlaygroundProps {
  mode?: "single" | "range" | "week";
  /** Date control value (a timestamp) or Date. */
  defaultMonth?: number | Date;
  disablePast?: boolean;
  size?: "md" | "lg";
  showMarkers?: boolean;
}

type CalendarPlaygroundStory = StoryObj<CalendarPlaygroundProps>;

export const Default: CalendarPlaygroundStory = {
  args: {
    mode: "single",
    defaultMonth: undefined,
    disablePast: false,
    size: "md",
    showMarkers: false,
  },
  parameters: {
    controls: {
      // Storybook matches `include` against each control's display `name`
      // (falling back to its key), so list the names; keys are kept too.
      include: ["Mode", "Disable past dates", "Starting month", "Size", "Show date markers", "mode", "disablePast", "defaultMonth", "size", "showMarkers"],
      sort: "none",
    },
  },
  argTypes: {
    mode: {
      name: "Mode",
      control: "radio",
      options: ["single", "range", "week"],
      labels: { single: "Single date", range: "Date range", week: "Week" },
      description: "What a click selects: one date, a start–end range, or a whole week.",
      table: { category: "Behavior", defaultValue: { summary: "single" } },
    },
    disablePast: {
      name: "Disable past dates",
      control: "boolean",
      description: "Blocks every date before today (`disabled={{ before: today }}`).",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    size: {
      name: "Size",
      control: "radio",
      options: ["md", "lg"],
      description: "Day-cell size: medium (36px, default) or large (40px, with a taller month/year button) (`size`).",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    showMarkers: {
      name: "Show date markers",
      control: "boolean",
      description: "Puts a colored dot under sample dates this month (`modifiers`). Each has a label that screen readers read after the date.",
      table: { category: "Content", defaultValue: { summary: "false" } },
    },
    defaultMonth: {
      name: "Starting month",
      control: "date",
      description: "Month shown first. Leave empty to start on the current month.",
      table: { category: "Content" },
    },
  },
  render: (args) => (
    // `key` remounts the demo when a control changes — each mode has its own
    // initial selection, which only applies on first mount.
    <CalendarDemo
      key={JSON.stringify(args)}
      mode={args.mode ?? "single"}
      defaultMonth={args.defaultMonth != null ? new Date(args.defaultMonth) : undefined}
      disablePast={args.disablePast}
      size={args.size}
      showMarkers={args.showMarkers}
    />
  ),
};
